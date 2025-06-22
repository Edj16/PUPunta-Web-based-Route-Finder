import { mainCampusData } from '../data/graphData.js';
import { findRouteByName } from '../utils/pathfinding.js';


// Get all main campus locations for dropdown population
export const mainLocations = Object.values(mainCampusData.nodes).map(node => node.name);


// Main campus specific route finding function
export function findMainCampusRoute(startName, endName) {
  return findRouteByName(mainCampusData, startName, endName);
}

