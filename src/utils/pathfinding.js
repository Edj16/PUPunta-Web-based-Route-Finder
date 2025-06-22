// Shared pathfinding utilities
// Create adjacency list for graph traversal
export function createAdjacencyList(graph) {
  const adjacencyList = {};
 
  Object.values(graph.nodes).forEach(node => {
    adjacencyList[node.id] = [];
  });
 
  graph.edges.forEach(edge => {
    adjacencyList[edge.from].push({ node: edge.to, weight: edge.weight });
    adjacencyList[edge.to].push({ node: edge.from, weight: edge.weight });
  });
 
  return adjacencyList;
}
                                  

// Dijkstra's algorithm implementation
export function dijkstra(graph, startNodeId, endNodeId) {
  const adjacencyList = createAdjacencyList(graph);
  const nodes = Object.keys(adjacencyList).map(Number);
 
  const distances = {};
  const previous = {};
  const unvisited = new Set();
 
  nodes.forEach(node => {
    distances[node] = node === startNodeId ? 0 : Infinity;
    previous[node] = null;
    unvisited.add(node);
  });
 
  while (unvisited.size > 0) {
    let currentNode = null;
    let minDistance = Infinity;
   
    for (const node of unvisited) {
      if (distances[node] < minDistance) {
        currentNode = node;
        minDistance = distances[node];
      }
    }
   
    if (currentNode === null || currentNode === endNodeId) break;
   
    unvisited.delete(currentNode);
   
    for (const neighbor of adjacencyList[currentNode]) {
      const alt = distances[currentNode] + neighbor.weight;
     
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        previous[neighbor.node] = currentNode;
      }
    }
  }
 
  const path = [];
  let current = endNodeId;
 
  if (previous[endNodeId] === null && endNodeId !== startNodeId) {
    return { path: [], distance: Infinity };
  }
 
  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }
 
  return {
    path,
    distance: distances[endNodeId]
  };
}




// Helper function to get location name
export function getLocationName(graph, nodeId) {
  return graph.nodes[nodeId] ? graph.nodes[nodeId].name : "Unknown Location";
}


export function findRouteByName(graph, startName, endName) {
  let startNodeId = null;
  let endNodeId = null;

  // Find the node IDs case-insensitively
  Object.values(graph.nodes).forEach(node => {
    if (!node.name) return; // skip nodes without names
    if (node.name.toLowerCase() === startName.toLowerCase()) startNodeId = node.id;
    if (node.name.toLowerCase() === endName.toLowerCase()) endNodeId = node.id;
  });

  if (startNodeId === null || endNodeId === null) {
    return {
      error: true,
      message: `Location not found: ${startNodeId === null ? startName : endName}`
    };
  }

  // Use Dijkstra algorithm
  const result = dijkstra(graph, startNodeId, endNodeId);

  if (result.path.length === 0) {
    return {
      error: true,
      message: `No route found between ${startName} and ${endName}`
    };
  }

  // Filter out nodes without names from the path
  const formattedPath = result.path
    .filter(nodeId => graph.nodes[nodeId] && graph.nodes[nodeId].name)
    .map(nodeId => graph.nodes[nodeId].name);

  const pathWithTypes = result.path
    .filter(nodeId => graph.nodes[nodeId] && graph.nodes[nodeId].name)
    .map(nodeId => {
      const node = graph.nodes[nodeId];
      return {
        name: node.name,
        floor: node.floor,
        type: node.type
      };
    });

  return {
    error: false,
    path: formattedPath,
    pathWithTypes: pathWithTypes,
    nodeIds: result.path,
    distance: Number(result.distance.toFixed(2)),
    formattedDistance: `${result.distance.toFixed(2)} meters`,
    estimatedMinutes: Math.ceil(result.distance / 60)
  };
}


// Generic route finding function
// export function findRouteByName(graph, startName, endName) {
//   let startNodeId = null;
//   let endNodeId = null;
 
//   // Find the node IDs case-insensitively
//  Object.values(graph.nodes).forEach(node => {
//   if (!node.name) return; // skip nodes without names
//   if (node.name.toLowerCase() === startName.toLowerCase()) startNodeId = node.id;
//   if (node.name.toLowerCase() === endName.toLowerCase()) endNodeId = node.id;
// });

 
//   if (startNodeId === null || endNodeId === null) {
//     return {
//       error: true,
//       message: `Location not found: ${startNodeId === null ? startName : endName}`
//     };
//   }




//   // Always use the full graph for pathfinding
//   const result = dijkstra(graph, startNodeId, endNodeId);
 
//   // If no path is found, return error
//   if (result.path.length === 0) {
//     return {
//       error: true,
//       message: `No route found between ${startName} and ${endName}`
//     };
//   }




//   const formattedPath = result.path.map(nodeId => getLocationName(graph, nodeId));
//   const pathWithTypes = result.path.map(nodeId => {
//     const node = graph.nodes[nodeId];
//     return {
//       name: node.name,
//       floor: node.floor,
//       type: node.type
//     };
//   });




//   return {
//     error: false,
//     path: formattedPath,
//     pathWithTypes: pathWithTypes,
//     nodeIds: result.path,
//     distance: result.distance,
//     formattedDistance: `${result.distance} meters`,
//     estimatedMinutes: Math.ceil(result.distance / 60)
//   };
// }

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











