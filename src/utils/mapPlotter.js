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

// Example trigger
window.addEventListener('DOMContentLoaded', () => {
  plotVerticesOnMap();

  // Example route: Amphitheater (1) to Swimming Pool (37)
  const result = dijkstraPath(1, 37);
  drawShortestPath(result.path);
  console.log(`Shortest distance: ${result.distance}`);
});

class MapPlotter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.currentMap = 'mainCampus';
    this.pathSegments = [];
  }

  async plotContinuousPath(startNode, endNode) {
    const completePath = findContinuousPath(startNode, endNode, this.currentMap);
    this.pathSegments = completePath;
    
    // Start with first map
    await this.switchMap(completePath[0].map);
    this.plotVerticesOnMap();
    this.highlightPath(completePath[0].path);
    
    // Add navigation controls for switching between maps
    this.addMapNavigationControls(completePath.map(segment => segment.map));
  }

  plotVerticesOnMap() {
    // Get the current map's data
    let currentMapData;
    switch(this.currentMap) {
      case 'mainCampus':
        currentMapData = mainCampusData;
        break;
      case 'overview':
        currentMapData = overviewData;
        break;
      case 'cea':
        currentMapData = ceaData;
        break;
      case 'coc':
        currentMapData = cocData;
        break;
    }

    const nodes = currentMapData.nodes;

    // Draw all vertices as red dots
    this.ctx.fillStyle = '#ff0000';
    Object.values(nodes).forEach(node => {
      if (typeof node.x === 'number' && typeof node.y === 'number') {
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
        this.ctx.fill();

        // Add node labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.fillText(node.name || `ID:${node.id}`, node.x + 10, node.y + 5);
        this.ctx.fillStyle = '#ff0000';
      }
    });
  }

  async switchMap(mapName) {
    this.currentMap = mapName;
    let mapImage;
    
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
    
    // Clear canvas and draw new map
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(mapImage, 0, 0, this.canvas.width, this.canvas.height);
    
    // Plot vertices for the new map
    this.plotVerticesOnMap();
    
    // Highlight the path for this map
    const pathSegment = this.pathSegments.find(segment => segment.map === mapName);
    if (pathSegment) {
      this.highlightPath(pathSegment.path);
    }
  }

  highlightPath(path) {
    if (!path || path.length < 2) return;

    // Get the current map's data
    let currentMapData;
    switch(this.currentMap) {
      case 'mainCampus':
        currentMapData = mainCampusData;
        break;
      case 'overview':
        currentMapData = overviewData;
        break;
      case 'cea':
        currentMapData = ceaData;
        break;
      case 'coc':
        currentMapData = cocData;
        break;
    }

    // Set path drawing style
    this.ctx.strokeStyle = '#00ff00'; // Green color
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();

    // Draw path segments
    for (let i = 0; i < path.length - 1; i++) {
      const fromNode = currentMapData.nodes[path[i]];
      const toNode = currentMapData.nodes[path[i + 1]];

      if (fromNode && toNode) {
        // Move to start point
        this.ctx.moveTo(fromNode.x, fromNode.y);
        // Draw line to end point
        this.ctx.lineTo(toNode.x, toNode.y);
      }
    }

    // Draw the path
    this.ctx.stroke();
  }

  addMapNavigationControls(availableMaps) {
    // Remove existing controls if any
    const existingControls = document.getElementById('map-controls');
    if (existingControls) {
      existingControls.remove();
    }

    // Add navigation buttons
    const container = document.createElement('div');
    container.id = 'map-controls';
    container.style.position = 'absolute';
    container.style.top = '10px';
    container.style.right = '10px';
    
    // Only show buttons for maps that are part of the current path
    availableMaps.forEach(mapName => {
      const button = document.createElement('button');
      button.textContent = this.getMapDisplayName(mapName);
      button.onclick = async () => {
        await this.switchMap(mapName);
      };
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
}
