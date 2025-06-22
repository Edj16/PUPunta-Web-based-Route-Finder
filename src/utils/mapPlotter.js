// import graph data
import { mainCampusData, overviewData, ceaData, cocData } from '../data/graphData.js';

// Plot every vertex (node) as a red dot
export function plotVerticesOnMap() {
  const map = document.getElementById('map');
  if (!map) return;

  const nodes = mainCampusData.nodes;

  Object.values(nodes).forEach(node => {
    if (typeof node.x === 'number' && typeof node.y === 'number') {
      const point = document.createElement('div');
      point.className = 'point';
      point.style.left = `${node.x}px`;
      point.style.top = `${node.y}px`;

      const label = document.createElement('div');
      label.className = 'label';
      label.textContent = node.name || `ID:${node.id}`;
      label.style.left = `${node.x}px`;
      label.style.top = `${node.y}px`;

      map.appendChild(point);
      // map.appendChild(label);
    }
  });
}

// Dijkstra's algorithm using node IDs
export function dijkstraPath(startId, endId) {
  const nodes = mainCampusData.nodes;
  const edges = mainCampusData.edges;

  const distances = {};
  const prev = {};
  const queue = new Set(Object.keys(nodes).map(Number));

  Object.keys(nodes).forEach(id => {
    distances[id] = Infinity;
    prev[id] = null;
  });
  distances[startId] = 0;

  while (queue.size) {
    const current = [...queue].reduce((min, node) =>
      distances[node] < distances[min] ? node : min
    );

    queue.delete(Number(current));
    if (Number(current) === endId) break;

    edges.forEach(edge => {
      if (edge.from == current && queue.has(edge.to)) {
        const alt = distances[current] + edge.weight;
        if (alt < distances[edge.to]) {
          distances[edge.to] = alt;
          prev[edge.to] = Number(current);
        }
      } else if (edge.to == current && queue.has(edge.from)) {
        const alt = distances[current] + edge.weight;
        if (alt < distances[edge.from]) {
          distances[edge.from] = alt;
          prev[edge.from] = Number(current);
        }
      }
    });
  }

  const path = [];
  let u = endId;
  while (u !== null) {
    path.unshift(u);
    u = prev[u];
  }

  return { path, distance: distances[endId] };
}

// Visualize the shortest path as green line segments
export function drawShortestPath(path) {
  const map = document.getElementById('map');
  if (!map || path.length < 2) return;

  const nodes = mainCampusData.nodes;

  for (let i = 0; i < path.length - 1; i++) {
    const from = nodes[path[i]];
    const to = nodes[path[i + 1]];

    const line = document.createElement('div');
    line.className = 'path-line';
    line.style.backgroundColor = 'lime';

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    line.style.width = `${length}px`;
    line.style.left = `${from.x}px`;
    line.style.top = `${from.y}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = '0 0';

    map.appendChild(line);
  }
}

/*
// Example trigger
window.addEventListener('DOMContentLoaded', () => {
  plotVerticesOnMap();

  // Example route: Amphitheater (1) to Swimming Pool (37)
  const result = dijkstraPath(1, 37);
  drawShortestPath(result.path);
  console.log(`Shortest distance: ${result.distance}`);
});
*/

class EnhancedMapPlotter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.currentMap = 'mainCampus';
    this.pathSegments = [];
    this.overlayContainer = null;
    this.setupOverlayContainer();
  }

  setupOverlayContainer() {
    // Create a container for DOM elements that will overlay the canvas
    this.overlayContainer = document.createElement('div');
    this.overlayContainer.style.position = 'absolute';
    this.overlayContainer.style.top = '0';
    this.overlayContainer.style.left = '0';
    this.overlayContainer.style.width = '100%';
    this.overlayContainer.style.height = '100%';
    this.overlayContainer.style.pointerEvents = 'none'; // Allow clicks to pass through
    this.canvas.parentElement.appendChild(this.overlayContainer);
  }

  clearOverlay() {
    while (this.overlayContainer.firstChild) {
      this.overlayContainer.removeChild(this.overlayContainer.firstChild);
    }
  }

  /**
   * Plot nodes with enhanced visualization and interaction
   * @param {Object} nodes - The nodes to plot
   * @param {Array} pathNodeIds - IDs of nodes in the current path
   */
  plotNodes(nodes, pathNodeIds = []) {
    // Clear existing nodes
    this.clearOverlay();
    
    Object.values(nodes).forEach(node => {
      if (typeof node.x === 'number' && typeof node.y === 'number') {
        // Draw base node on canvas for performance
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
        
        // Style based on node type and if it's in path
        if (pathNodeIds.includes(node.id)) {
          this.ctx.fillStyle = '#00ff00'; // Green for path nodes
        } else if (node.type === 'building') {
          this.ctx.fillStyle = '#ff0000'; // Red for buildings
        } else if (node.type === 'stairs') {
          this.ctx.fillStyle = '#0000ff'; // Blue for stairs
        } else {
          this.ctx.fillStyle = '#808080'; // Gray for other nodes
        }
        
        this.ctx.fill();

        // Add interactive label overlay for named nodes
        if (node.name) {
          const label = document.createElement('div');
          label.className = 'node-label';
          label.style.position = 'absolute';
          label.style.left = `${node.x + 10}px`;
          label.style.top = `${node.y - 10}px`;
          label.style.pointerEvents = 'auto';
          label.textContent = node.name;
          
          // Add hover effect
          label.addEventListener('mouseover', () => {
            label.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            this.highlightConnectedNodes(node, nodes);
          });
          
          label.addEventListener('mouseout', () => {
            label.style.backgroundColor = 'transparent';
            this.clearHighlights();
          });
          
          this.overlayContainer.appendChild(label);
        }
      }
    });
  }

  /**
   * Highlight nodes connected to the current node
   * @param {Object} node - The current node
   * @param {Object} nodes - All nodes
   */
  highlightConnectedNodes(node, nodes) {
    // Highlight parent node if exists
    if (node.parent) {
      const parentNode = nodes[node.parent];
      if (parentNode) {
        this.ctx.beginPath();
        this.ctx.arc(parentNode.x, parentNode.y, 8, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#ffd700'; // Gold color for parent
        this.ctx.fill();
        
        // Draw connection line to parent
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(parentNode.x, parentNode.y);
        this.ctx.strokeStyle = '#ffd700';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
      }
    }
  }

  /**
   * Draw the path with enhanced visualization
   * @param {Array} path - Array of node IDs in the path
   * @param {Object} nodes - The nodes object
   */
  drawPath(path, nodes) {
    if (!path || path.length < 2) return;

    // Clear any existing paths
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.currentMapImage) {
      this.ctx.drawImage(this.currentMapImage, 0, 0, this.canvas.width, this.canvas.height);
    }

    // Draw the main path segments
    for (let i = 0; i < path.length - 1; i++) {
      const currentNode = nodes[path[i]];
      const nextNode = nodes[path[i + 1]];
      
      if (!currentNode || !nextNode) continue;

      // Set path style based on node types
      this.ctx.beginPath();
      if (currentNode.type === 'hallway' || nextNode.type === 'hallway') {
        // Hallway segments
        this.ctx.strokeStyle = '#4CAF50'; // Bright green for hallways
        this.ctx.lineWidth = 4;
        this.ctx.setLineDash([]);
      } else if (currentNode.type === 'stairs' || nextNode.type === 'stairs') {
        // Stair segments
        this.ctx.strokeStyle = '#FF9800'; // Orange for stairs
        this.ctx.lineWidth = 4;
        this.ctx.setLineDash([8, 4]);
      } else {
        // Regular path segments
        this.ctx.strokeStyle = '#2196F3'; // Blue for regular paths
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([]);
      }

      // Draw path segment
      this.ctx.moveTo(currentNode.x, currentNode.y);
      this.ctx.lineTo(nextNode.x, nextNode.y);
      this.ctx.stroke();

      // Add node indicators
      this.drawNodeIndicator(currentNode);
      if (i === path.length - 2) {
        this.drawNodeIndicator(nextNode); // Draw last node
      }

      // Add direction arrow
      this.drawDirectionArrow(currentNode, nextNode);

      // Add floor transition indicator if needed
      if (currentNode.floor !== nextNode.floor) {
        this.drawFloorTransition(currentNode, nextNode);
      }
    }

    // Add path labels
    this.addPathLabels(path, nodes);
  }

  /**
   * Draw a node indicator based on its type
   */
  drawNodeIndicator(node) {
    this.ctx.save();
    this.ctx.beginPath();

    // Different styles for different node types
    switch(node.type) {
      case 'stairs':
        // Diamond shape for stairs
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y - 8);
        this.ctx.lineTo(node.x + 8, node.y);
        this.ctx.lineTo(node.x, node.y + 8);
        this.ctx.lineTo(node.x - 8, node.y);
        this.ctx.closePath();
        this.ctx.fillStyle = '#FF9800';
        break;
      case 'hallway':
        // Square for hallways
        this.ctx.rect(node.x - 6, node.y - 6, 12, 12);
        this.ctx.fillStyle = '#4CAF50';
        break;
      default:
        // Circle for other nodes
        this.ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#2196F3';
    }

    this.ctx.fill();
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.restore();
  }

  /**
   * Draw a direction arrow between two nodes
   */
  drawDirectionArrow(fromNode, toNode) {
    const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x);
    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;

    this.ctx.save();
    this.ctx.translate(midX, midY);
    this.ctx.rotate(angle);
    
    // Draw arrow
    this.ctx.beginPath();
    this.ctx.moveTo(-8, -6);
    this.ctx.lineTo(0, 0);
    this.ctx.lineTo(-8, 6);
    this.ctx.strokeStyle = '#FFF';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
    
    this.ctx.restore();
  }

  /**
   * Add labels for important points in the path
   */
  addPathLabels(path, nodes) {
    path.forEach((nodeId, index) => {
      const node = nodes[nodeId];
      if (!node) return;

      // Create label if node is important
      if (node.type === 'stairs' || node.name?.includes('Wing') || index === 0 || index === path.length - 1) {
        const label = document.createElement('div');
        label.className = 'path-label';
        label.style.position = 'absolute';
        label.style.left = `${node.x + 15}px`;
        label.style.top = `${node.y - 15}px`;
        label.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        label.style.color = 'white';
        label.style.padding = '4px 8px';
        label.style.borderRadius = '4px';
        label.style.fontSize = '12px';
        label.style.zIndex = '1000';
        
        // Format label text
        let labelText = node.name || '';
        if (node.floor) {
          labelText += ` (Floor ${node.floor})`;
        }
        label.textContent = labelText;
        
        this.overlayContainer.appendChild(label);
      }
    });
  }

  /**
   * Draw floor transition indicator
   * @param {Object} fromNode - Node transitioning from
   * @param {Object} toNode - Node transitioning to
   */
  drawFloorTransition(fromNode, toNode) {
    const centerX = (fromNode.x + toNode.x) / 2;
    const centerY = (fromNode.y + toNode.y) / 2;

    // Draw transition circle
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#ff9900';
    this.ctx.fill();
    
    // Add floor change indicator
    const label = document.createElement('div');
    label.className = 'floor-transition-label';
    label.style.position = 'absolute';
    label.style.left = `${centerX + 10}px`;
    label.style.top = `${centerY - 10}px`;
    label.textContent = `Floor ${fromNode.floor} → ${toNode.floor}`;
    this.overlayContainer.appendChild(label);
    
    this.ctx.restore();
  }

  /**
   * Clear all highlights and temporary markings
   */
  clearHighlights() {
    // Redraw the current state
    this.redrawCurrentState();
  }

  /**
   * Redraw the current state of the map
   */
  redrawCurrentState(nodes, path = []) {
    // Clear canvas and overlay
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.clearOverlay();
    
    // Redraw background map
    if (this.currentMapImage) {
      this.ctx.drawImage(this.currentMapImage, 0, 0, this.canvas.width, this.canvas.height);
    }
    
    // Plot nodes and draw the path if it exists
    this.plotNodes(nodes, path);
    if (path.length > 0) {
      this.drawPath(path, nodes);
    }
  }

  /**
   * Switch to a different map
   * @param {string} mapName - Name of the map to switch to
   */
  async switchMap(mapName) {
    this.currentMap = mapName;
    let mapImage;
    
    // Load appropriate map image
    switch(mapName) {
      case 'mainCampus':
        mapImage = await loadImage('./images/mainBuilding_floor/main_1st Floor.png');
        break;
      case 'overview':
        mapImage = await loadImage('./images/OVERVIEWMAIN.png');
        break;
      case 'cea':
        mapImage = await loadImage('./images/cea_floor/CEA 1ST.png');
        break;
      case 'coc':
        mapImage = await loadImage('./images/coc_floor/COC 1st Floor.png');
        break;
    }
    
    this.currentMapImage = mapImage;
    this.redrawCurrentState();
    
    // Update path for new map
    const pathSegment = this.pathSegments.find(segment => segment.map === mapName);
    if (pathSegment) {
      this.currentPath = {
        path: pathSegment.path,
        nodes: this.getCurrentMapData().nodes
      };
      this.plotNodes(this.getCurrentMapData().nodes, pathSegment.path);
      this.drawPath(pathSegment.path, this.getCurrentMapData().nodes);
    }
  }

  /**
   * Get current map data
   * @returns {Object} The current map's data
   */
  getCurrentMapData() {
    switch(this.currentMap) {
      case 'mainCampus':
        return mainCampusData;
      case 'overview':
        return overviewData;
      case 'cea':
        return ceaData;
      case 'coc':
        return cocData;
      default:
        return mainCampusData;
    }
  }

  /**
   * Add navigation controls for switching between maps
   * @param {Array} availableMaps - Array of available map names
   */
  addMapNavigationControls(availableMaps) {
    const container = document.getElementById('map-controls') || document.createElement('div');
    container.id = 'map-controls';
    container.innerHTML = ''; // Clear existing controls
    
    availableMaps.forEach(mapName => {
      const button = document.createElement('button');
      button.textContent = this.getMapDisplayName(mapName);
      button.onclick = () => this.switchMap(mapName);
      container.appendChild(button);
    });
    
    document.body.appendChild(container);
  }

  getMapDisplayName(mapName) {
    const displayNames = {
      'mainCampus': 'Main Building',
      'overview': 'Campus Overview',
      'cea': 'CEA Building',
      'coc': 'COC Building'
    };
    return displayNames[mapName] || mapName;
  }

  /**
   * Get all nodes from all maps
   * @returns {Object} Combined nodes object
   */
  getAllNodes() {
    return {
      ...mainCampusData.nodes,
      ...cocData.nodes,
      ...ceaData.nodes,
      ...overviewData.nodes
    };
  }

  /**
   * Load image for a specific map
   * @param {string} mapName - The name of the map
   * @returns {Promise<Image>}
   */
  async loadImageForMap(mapName) {
    let imageSrc;
    switch(mapName) {
      case 'mainCampus':
        imageSrc = './images/mainBuilding_floor/main_1st Floor.png';
        break;
      case 'overview':
        imageSrc = './images/OVERVIEWMAIN.png';
        break;
      case 'cea':
        imageSrc = './images/cea_floor/CEA 1ST.png';
        break;
      case 'coc':
        imageSrc = './images/coc_floor/COC 1st Floor.png';
        break;
      default:
        imageSrc = './images/OVERVIEWMAIN.png';
    }
    
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = imageSrc;
    });
  }
}

export default EnhancedMapPlotter;