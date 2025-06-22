import { ceaData } from '../data/graphData.js';
import { findRouteByName } from '../utils/pathfinding.js';


// Get all CEA locations for dropdown population
export const ceaLocations = Object.values(ceaData.nodes).map(node => node.name);


// CEA specific route finding function
export function findCEARoute(startName, endName) {
  return findRouteByName(ceaData, startName, endName);
}



