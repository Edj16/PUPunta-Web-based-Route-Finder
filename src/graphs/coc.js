import { cocData } from '../data/graphData.js';
import { findRouteByName } from '../utils/pathfinding.js';


// Get all COC locations for dropdown population
export const cocLocations = Object.values(cocData.nodes).map(node => node.name);


// COC specific route finding function
export function findCOCRoute(startName, endName) {
  return findRouteByName(cocData, startName, endName);
}

