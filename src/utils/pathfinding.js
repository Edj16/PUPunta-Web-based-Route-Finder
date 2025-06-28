
//CREATE ADJACENCY LIST
// Shared pathfinding utilities
// Create adjacency list for graph traversal
export function createAdjacencyList(graph) {
  const adjacencyList = {};
 
  Object.values(graph.nodes).forEach(node => {
    adjacencyList[node.id] = [];
  });
 
  graph.edges.forEach(edge => {
    if (adjacencyList[edge.from] && adjacencyList[edge.to]) {
      // Get node information
      const fromNode = graph.nodes[edge.from];
      const toNode = graph.nodes[edge.to];
      
      // Calculate weight with penalties
      let finalWeight = edge.weight;
      
      // Add penalty for floor transitions without stairs
      if (fromNode.floor !== toNode.floor && 
          (fromNode.type !== 'stairs' && toNode.type !== 'stairs')) {
        finalWeight += 1000; // Large penalty for direct floor transitions
      }
      
      // Add penalty for non-center stairs when changing floors
      if (fromNode.floor !== toNode.floor &&
          (fromNode.type === 'stairs' || toNode.type === 'stairs')) {
        const isCenter = (node) => node.type === 'stairs' && node.name && node.name.toLowerCase().includes('center');
        if (!isCenter(fromNode) && !isCenter(toNode)) {
          finalWeight += 20; // Small penalty for non-center stairs
        }
      }

      // Add penalty for non-hallway transitions
      if (fromNode.type !== 'hallway' && toNode.type !== 'hallway') {
        finalWeight += 5; // Small penalty to prefer hallway paths
      }
      
      // Store edge with node metadata
      adjacencyList[edge.from].push({ 
        node: edge.to, 
        weight: finalWeight,
        type: toNode.type,
        floor: toNode.floor,
        name: toNode.name
      });
      
      adjacencyList[edge.to].push({ 
        node: edge.from, 
        weight: finalWeight,
        type: fromNode.type,
        floor: fromNode.floor,
        name: fromNode.name
      });
    } else {
      console.warn("Invalid edge found:", edge);
    }
  });
 
  return adjacencyList;
}

//DJIKSTRA ALGORITHM
// Dijkstra's algorithm implementation with optimizations
export function dijkstra(graph, startId, endId) {
  const nodes = graph.nodes;
  const edges = graph.edges;
  const distances = {};
  const previous = {};
  const unvisited = new Set();
  const parentConnections = new Map(); // Track parent-child connections

  // Initialize distances
  Object.keys(nodes).forEach(nodeId => {
    distances[nodeId] = Infinity;
    previous[nodeId] = null;
    unvisited.add(parseInt(nodeId));

    // Store parent-child relationships
    const node = nodes[nodeId];
    if (node && node.parent) {
      if (!parentConnections.has(node.parent)) {
        parentConnections.set(node.parent, new Set());
      }
      parentConnections.get(node.parent).add(parseInt(nodeId));
    }
  });
  distances[startId] = 0;

  while (unvisited.size > 0) {
    // Find minimum distance node
    let minNode = null;
    let minDist = Infinity;
    for (const nodeId of unvisited) {
      if (distances[nodeId] < minDist) {
        minDist = distances[nodeId];
        minNode = nodeId;
      }
    }

    if (minNode === null || minNode === endId) break;

    unvisited.delete(minNode);

    // Process current node
    const currentNode = nodes[minNode];
    if (!currentNode) continue;

    // Handle parent-child relationships
    if (currentNode.parent) {
      const parentNode = nodes[currentNode.parent];
      if (parentNode) {
        // Add dynamic edge to parent if not exists
        const parentEdge = edges.find(e => 
          (e.from === minNode && e.to === currentNode.parent) || 
          (e.from === currentNode.parent && e.to === minNode)
        );
        
        if (!parentEdge) {
          const dx = parentNode.x - currentNode.x;
          const dy = parentNode.y - currentNode.y;
          const weight = Math.sqrt(dx * dx + dy * dy);
          edges.push({ from: minNode, to: currentNode.parent, weight });
        }
      }
    }

    // Process all edges
    edges.forEach(edge => {
      if (edge.from === minNode || edge.to === minNode) {
        const neighbor = edge.from === minNode ? edge.to : edge.from;
        if (!unvisited.has(neighbor)) return;

        // Calculate total weight including penalties
        let totalWeight = edge.weight;
        const neighborNode = nodes[neighbor];
        
        if (currentNode && neighborNode) {
          // Add floor transition penalty
          if (currentNode.floor !== neighborNode.floor &&
              (currentNode.type !== 'stairs' && neighborNode.type !== 'stairs')) {
            totalWeight += 1000;
          }

          // Add non-center stairs penalty
          if (currentNode.floor !== neighborNode.floor &&
              (currentNode.type === 'stairs' || neighborNode.type === 'stairs')) {
            const isCenter = (node) => node.type === 'stairs' && node.name && node.name.toLowerCase().includes('center');
            if (!isCenter(currentNode) && !isCenter(neighborNode)) {
              totalWeight += 20;
            }
          }
        }

        const alt = distances[minNode] + totalWeight;
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = minNode;
        }
      }
    });
  }

  // Reconstruct path with parent handling
  const path = [];
  let current = endId;
  let totalDistance = 0;

  while (current !== null) {
    path.unshift(current);
    if (previous[current] !== null) {
      const edge = edges.find(e => 
        (e.from === current && e.to === previous[current]) || 
        (e.from === previous[current] && e.to === current)
      );
      if (edge) {
        totalDistance += edge.weight;
      }
    }
    current = previous[current];
  }

  return {
    path,
    distance: totalDistance
  };
}

//GETLOCATION
// Helper function to get location name with safety checks
export function getLocationName(graph, nodeId) {
  const node = graph.nodes[nodeId];
  if (!node || !node.name) return "Unknown Location";
  return node.name;
}

//FINDROUTEBYNAME
// Enhanced route finding function
export function findRouteByName(graph, startName, endName) {
  let startNodeId = null;
  let endNodeId = null;
  let endParentId = null;
 
  // Find the node IDs case-insensitively with safety checks
  Object.values(graph.nodes).forEach(node => {
    if (!node.name) return; // Skip nodes without names
    if (node.name.toLowerCase() === startName.toLowerCase()) {
      startNodeId = node.id;
    }
    if (node.name.toLowerCase() === endName.toLowerCase()) {
      endNodeId = node.id;
      endParentId = node.parent; // Store parent ID if exists
    }
  });

  if (startNodeId === null || endNodeId === null) {
    return {
      error: true,
      message: `Location not found: ${startNodeId === null ? startName : endName}`
    };
  }

  // Get the path to the destination
  const result = dijkstra(graph, startNodeId, endNodeId);

  // Handle parent nodes
  if (endParentId && result.path[result.path.length - 1] !== endParentId) {
    // Add the parent node to the path
    result.path.push(endParentId);
    
    // Update distance including parent
    const lastNode = graph.nodes[endNodeId];
    const parentNode = graph.nodes[endParentId];
    if (lastNode && parentNode) {
      const dx = parentNode.x - lastNode.x;
      const dy = parentNode.y - lastNode.y;
      const distanceToParent = Math.sqrt(dx * dx + dy * dy);
      result.distance += distanceToParent;
    }
  }

  // Handle no path found
  if (result.path.length === 0) {
    return {
      error: true,
      message: `No route found between ${startName} and ${endName}`
    };
  }

  // Create formatted path with safety checks
  const formattedPath = result.path.map(nodeId => getLocationName(graph, nodeId));
  const pathWithTypes = result.path.map(nodeId => {
    const node = graph.nodes[nodeId];
    if (!node) return null;
    return {
      name: node.name || "Unknown",
      floor: node.floor,
      type: node.type
    };
  }).filter(node => node !== null); // Remove null entries

  return {
    error: false,
    path: formattedPath,
    pathWithTypes: pathWithTypes,
    nodeIds: result.path,
    distance: result.distance,
    formattedDistance: `${Math.round(result.distance)} meters`,
    estimatedMinutes: Math.ceil(result.distance / 60)
  };
}

function findContinuousPath(startNode, endNode, currentMap) {
  let completePath = [];
  
  // If starting from Main Building to either CEA or COC
  if (currentMap === 'mainCampus' && (endNode.includes('CEA') || endNode.includes('COC'))) {
    // First get path to main gate in main campus
    const mainGateNode = findNodeByName(mainCampusData, 'Main Gate');
    const mainPath = dijkstra(mainCampusData, startNode, mainGateNode);
    completePath.push({
      map: 'mainCampus',
      path: mainPath
    });

    // Then get path from Main Gate to destination entrance in overview map
    const overviewStartNode = findNodeByName(overviewData, 'Main Gate');
    const targetEntrance = endNode.includes('CEA') ? 'CEA entrance' : 'COC entrance';
    const overviewEndNode = findNodeByName(overviewData, targetEntrance);
    const overviewPath = dijkstra(overviewData, overviewStartNode, overviewEndNode);
    completePath.push({
      map: 'overview',
      path: overviewPath
    });

    // Finally get path from entrance to destination in target building map
    if (endNode.includes('CEA')) {
      const ceaStartNode = findNodeByName(ceaData, 'Main Entrance');
      const ceaEndNode = findNodeByName(ceaData, endNode);
      const ceaPath = dijkstra(ceaData, ceaStartNode, ceaEndNode);
      completePath.push({
        map: 'cea',
        path: ceaPath
      });
    } else if (endNode.includes('COC')) {
      const cocStartNode = findNodeByName(cocData, 'Main Entrance');
      const cocEndNode = findNodeByName(cocData, endNode);
      const cocPath = dijkstra(cocData, cocStartNode, cocEndNode);
      completePath.push({
        map: 'coc',
        path: cocPath
      });
    }
  }
  
  return completePath;
}

function findNodeByName(graphData, nodeName) {
  for (const nodeId in graphData.nodes) {
    if (graphData.nodes[nodeId].name === nodeName) {
      return nodeId;
    }
  }
  return null;
}

import { mainCampusData, cocData, ceaData, overviewData } from '../data/graphData.js';

/**
 * Find the shortest path between two locations considering parent nodes and floor transitions
 * @param {string} startLocation - Starting location ID or name
 * @param {string} endLocation - Ending location ID or name
 * @returns {Object} Object containing the path and additional metadata
 */
export async function findPath(startLocation, endLocation) {
  // Get all map data
  const allNodes = {
    ...mainCampusData.nodes,
    ...cocData.nodes,
    ...ceaData.nodes,
    ...overviewData.nodes
  };

  // Find start and end nodes
  const startNode = findNodeByIdOrName(startLocation, allNodes);
  const endNode = findNodeByIdOrName(endLocation, allNodes);

  if (!startNode || !endNode) {
    throw new Error('Start or end location not found');
  }

  // Initialize data structures for Dijkstra's algorithm
  const distances = {};
  const previous = {};
  const unvisited = new Set();
  
  // Initialize all distances to infinity
  Object.keys(allNodes).forEach(nodeId => {
    distances[nodeId] = Infinity;
    unvisited.add(nodeId);
  });
  
  // Set distance to start node to 0
  distances[startNode.id] = 0;

  while (unvisited.size > 0) {
    // Find the unvisited node with minimum distance
    let currentNodeId = null;
    let minDistance = Infinity;
    
    for (const nodeId of unvisited) {
      if (distances[nodeId] < minDistance) {
        minDistance = distances[nodeId];
        currentNodeId = nodeId;
      }
    }

    // If we can't find a node to process or we've reached the end, break
    if (currentNodeId === null || currentNodeId === endNode.id) {
      break;
    }

    // Remove current node from unvisited set
    unvisited.delete(currentNodeId);
    const currentNode = allNodes[currentNodeId];

    // Process neighbors including parent nodes
    const neighbors = getNodeNeighbors(currentNode, allNodes);
    
    for (const neighbor of neighbors) {
      if (!unvisited.has(neighbor.id)) continue;

      // Calculate edge weight considering floor transitions and parent relationships
      const weight = calculateEdgeWeight(currentNode, neighbor);
      
      const totalDistance = distances[currentNodeId] + weight;
      
      if (totalDistance < distances[neighbor.id]) {
        distances[neighbor.id] = totalDistance;
        previous[neighbor.id] = currentNodeId;
      }
    }
  }

  // Reconstruct path
  const path = [];
  let current = endNode.id;
  
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path,
    distance: distances[endNode.id],
    success: path.length > 0 && path[0] === startNode.id
  };
}

/**
 * Calculate edge weight between two nodes
 * @param {Object} fromNode - Starting node
 * @param {Object} toNode - Ending node
 * @returns {number} Edge weight
 */
function calculateEdgeWeight(fromNode, toNode) {
  let weight = 1;

  // Base distance using Euclidean distance
  const dx = toNode.x - fromNode.x;
  const dy = toNode.y - fromNode.y;
  weight = Math.sqrt(dx * dx + dy * dy);

  // Strongly prefer using actual internal paths over parent node jumps
  if (fromNode.type === 'hallway' || toNode.type === 'hallway' ||
      fromNode.type === 'stairs' || toNode.type === 'stairs') {
    weight *= 0.5; // Reduce weight for internal paths
  }

  // Add penalties for floor transitions without stairs
  if (fromNode.floor !== toNode.floor) {
    if (fromNode.type !== 'stairs' && toNode.type !== 'stairs') {
      weight += 2000; // Increased penalty
    } else {
      // Prefer center stairs over other stairs
      weight += (fromNode.name?.includes('Center') || toNode.name?.includes('Center')) ? 10 : 30;
    }
  }

  // Strongly discourage skipping through parent nodes
  if (toNode.parent === fromNode.id || fromNode.parent === toNode.id) {
    if (!isValidInternalPath(fromNode, toNode)) {
      weight += 1000; // Heavy penalty for invalid parent-child jumps
    }
  }

  // Encourage following proper building paths
  if (fromNode.building === toNode.building && 
      (fromNode.type === 'hallway' || toNode.type === 'stairs') &&
      (toNode.type === 'hallway' || toNode.type === 'stairs')) {
    weight *= 0.3; // Strong preference for connected internal paths
  }

  return weight;
}

/**
 * Check if a parent-child path is valid based on building structure
 */
function isValidInternalPath(node1, node2) {
  // Only allow parent-child relationships for actual physical connections
  if (node1.type === 'hallway' && node2.type === 'hallway') {
    return true;
  }
  if ((node1.type === 'stairs' && node2.type === 'hallway') ||
      (node1.type === 'hallway' && node2.type === 'stairs')) {
    return true;
  }
  return false;
}

/**
 * Get all neighbors of a node including parent nodes and intermediate landmarks
 * @param {Object} node - The node to get neighbors for
 * @param {Object} allNodes - All available nodes
 * @returns {Array} Array of neighboring nodes
 */
function getNodeNeighbors(node, allNodes) {
  const neighbors = new Set();

  // Add direct connections from edges
  if (node.edges) {
    node.edges.forEach(edgeId => {
      if (allNodes[edgeId]) {
        neighbors.add(allNodes[edgeId]);
      }
    });
  }

  // Add connected hallways and stairs on the same floor
  Object.values(allNodes).forEach(potentialNeighbor => {
    if (potentialNeighbor.floor === node.floor &&
        potentialNeighbor.building === node.building &&
        (potentialNeighbor.type === 'hallway' || potentialNeighbor.type === 'stairs')) {
      // Check if they're physically connected
      if (isPhysicallyConnected(node, potentialNeighbor)) {
        neighbors.add(potentialNeighbor);
      }
    }
  });

  // Add stairs connections between floors
  if (node.type === 'stairs') {
    Object.values(allNodes).forEach(potentialNeighbor => {
      if (potentialNeighbor.type === 'stairs' &&
          potentialNeighbor.building === node.building &&
          Math.abs(potentialNeighbor.floor - node.floor) === 1 &&
          potentialNeighbor.name?.includes(node.name?.split('(')[0] || '')) {
        neighbors.add(potentialNeighbor);
      }
    });
  }

  // Add parent/child connections only if they represent actual physical paths
  if (node.parent && allNodes[node.parent] && isValidInternalPath(node, allNodes[node.parent])) {
    neighbors.add(allNodes[node.parent]);
  }

  Object.values(allNodes).forEach(potentialChild => {
    if (potentialChild.parent === node.id && isValidInternalPath(node, potentialChild)) {
      neighbors.add(potentialChild);
    }
  });

  return Array.from(neighbors);
}

/**
 * Check if two nodes are physically connected within the building
 */
function isPhysicallyConnected(node1, node2) {
  // Nodes in the same hallway
  if (node1.type === 'hallway' && node2.type === 'hallway' &&
      node1.name?.split('(')[0] === node2.name?.split('(')[0]) {
    return true;
  }

  // Hallway to stairs connection
  if ((node1.type === 'hallway' && node2.type === 'stairs') ||
      (node1.type === 'stairs' && node2.type === 'hallway')) {
    // Check if they're on the same floor and in the same wing
    const wing1 = node1.name?.includes('Wing') ? node1.name.split(' ')[0] : '';
    const wing2 = node2.name?.includes('Wing') ? node2.name.split(' ')[0] : '';
    return node1.floor === node2.floor && wing1 === wing2;
  }

  return false;
}

/**
 * Find a node by its ID or name
 * @param {string} query - Node ID or name to search for
 * @param {Object} nodes - All available nodes
 * @returns {Object|null} Found node or null
 */
function findNodeByIdOrName(query, nodes) {
  // Try direct ID match
  if (nodes[query]) {
    return nodes[query];
  }

  // Try case-insensitive name match
  const lowerQuery = query.toLowerCase();
  return Object.values(nodes).find(node => 
    node.name && node.name.toLowerCase() === lowerQuery
  ) || null;
}










