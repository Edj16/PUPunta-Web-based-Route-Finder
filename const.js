// const map = document.getElementById('map');

const nodes = {
  1: { id: 1, name: "A", type: "building", x: 127, y: 218 },
  2: { id: 2, name: "B", type: "building", x: 186, y: 218 },
  3: { id: 3, name: "C", type: "building", x: 182, y: 343 },
  4: { id: 4, name: "D", type: "path", x: 114, y: 468 },
  5: { id: 5, name: "E", type: "landmark", x: 183, y: 466 },
  6: { id: 6, name: "F", type: "building", x: 326, y: 340 },
  7: { id: 7, name: "G", type: "entrance", x: 325, y: 289 },
  8: { id: 8, name: "H", type: "landmark", x: 329, y: 387 },
  9: { id: 9, name: "I", type: "building", x: 406, y: 428 },
  10: { id: 10, name: "J", type: "building", x: 280, y: 634 },
};

const edges = [
  { from: 1, to: 2, weight: calculateDistance(nodes[1], nodes[2]) },
  { from: 1, to: 4, weight: calculateDistance(nodes[1], nodes[4]) },
  { from: 2, to: 3, weight: calculateDistance(nodes[2], nodes[3]) },
  { from: 3, to: 5, weight: calculateDistance(nodes[3], nodes[5]) },
  { from: 3, to: 6, weight: calculateDistance(nodes[3], nodes[6]) },
  { from: 5, to: 4, weight: calculateDistance(nodes[5], nodes[4]) },
  { from: 6, to: 7, weight: calculateDistance(nodes[6], nodes[7]) },
  { from: 6, to: 8, weight: calculateDistance(nodes[6], nodes[8]) },
  { from: 8, to: 9, weight: calculateDistance(nodes[8], nodes[9]) },
  { from: 9, to: 10, weight: calculateDistance(nodes[9], nodes[10]) },
];

function calculateDistance(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Draw nodes and labels
for (const id in nodes) {
  const node = nodes[id];
  const point = document.createElement('div');
  point.classList.add('point');
  point.style.left = `${node.x}px`;
  point.style.top = `${node.y}px`;
  map.appendChild(point);

  const label = document.createElement('div');
  label.classList.add('label');
  label.textContent = node.name;
  label.style.left = `${node.x}px`;
  label.style.top = `${node.y}px`;
  map.appendChild(label);
}

// Draw line function
function drawLine(x1, y1, x2, y2) {
  const line = document.createElement('div');
  line.classList.add('line');

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  line.style.width = `${length}px`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;
  line.style.transform = `rotate(${angle}deg)`;
  map.appendChild(line);
}

// COMMENTED OUT: Drawing all edges
// edges.forEach(edge => {
//   const from = nodes[edge.from];
//   const to = nodes[edge.to];
//   drawLine(from.x, from.y, to.x, to.y);
// });

// Build adjacency list for Dijkstra
const graph = {};
edges.forEach(edge => {
  if (!graph[edge.from]) graph[edge.from] = [];
  if (!graph[edge.to]) graph[edge.to] = [];
  graph[edge.from].push({ node: edge.to, weight: edge.weight });
  graph[edge.to].push({ node: edge.from, weight: edge.weight }); // bidirectional
});

function dijkstra(start, end) {
  const distances = {};
  const prev = {};
  const visited = new Set();
  const queue = new Set(Object.keys(nodes).map(Number));

  for (const id of queue) {
    distances[id] = Infinity;
  }
  distances[start] = 0;

  while (queue.size) {
    // Get node with smallest distance
    let minNode = null;
    for (const node of queue) {
      if (minNode === null || distances[node] < distances[minNode]) {
        minNode = node;
      }
    }

    if (minNode === end) break;
    queue.delete(minNode);
    visited.add(minNode);

    const neighbors = graph[minNode] || [];
    for (const neighbor of neighbors) {
      if (visited.has(neighbor.node)) continue;

      const alt = distances[minNode] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        prev[neighbor.node] = minNode;
      }
    }
  }

  // Reconstruct path
  const path = [];
  let current = end;
  while (current !== undefined) {
    path.unshift(current);
    current = prev[current];
  }

  return path;
}

// Example: Find shortest path from Node 1 (A) to Node 10 (J)
const path = dijkstra(1, 10);

// Draw only shortest path lines
for (let i = 0; i < path.length - 1; i++) {
  const from = nodes[path[i]];
  const to = nodes[path[i + 1]];
  drawLine(from.x, from.y, to.x, to.y);
}
