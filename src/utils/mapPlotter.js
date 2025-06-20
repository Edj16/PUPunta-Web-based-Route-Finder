// import graph
import { mainCampusData } from '../data/graphData.js';

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
