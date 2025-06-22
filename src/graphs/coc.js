import { cocData } from '../data/graphData.js';
import { findRouteByName } from '../utils/pathfinding.js';


// Get all COC locations for dropdown population
export const cocLocations = Object.values(cocData.nodes)
  .filter(node => node.type !== 'building' || node.name === 'COC Building') // Include COC Building but exclude other building types
  .map(node => node.name);


// COC specific route finding function
export function findCOCRoute(startLocation, endLocation) {
  // Get the destination node to check for parent
  const destNode = Object.values(cocData.nodes).find(node => node.name === endLocation);
  
  // Always route through COC Gate if coming from outside or if destination has a parent
  if (startLocation === 'MAIN' || (destNode && destNode.parent)) {
    // If destination has a parent or coming from MAIN, we need to:
    // 1. Find route from start to COC Gate
    // 2. Find route from COC Gate to parent building
    // 3. Find route from parent building to destination
    
    // First leg: Start to COC Gate
    const routeToGate = findRouteByName(cocData, startLocation, 'COC Gate');
    if (routeToGate.error) return routeToGate;
    
    // Second leg: COC Gate to parent building (COC Building)
    const routeToParent = findRouteByName(cocData, 'COC Gate', 'COC Building');
    if (routeToParent.error) return routeToParent;
    
    // Third leg: Parent building to final destination
    const routeToDestination = findRouteByName(cocData, 'COC Building', endLocation);
    if (routeToDestination.error) return routeToDestination;
    
    // Combine all routes
    return {
      error: false,
      path: [...routeToGate.path, ...routeToParent.path.slice(1), ...routeToDestination.path.slice(1)],
      pathWithTypes: [...routeToGate.pathWithTypes, ...routeToParent.pathWithTypes.slice(1), ...routeToDestination.pathWithTypes.slice(1)],
      nodeIds: [...routeToGate.nodeIds, ...routeToParent.nodeIds.slice(1), ...routeToDestination.nodeIds.slice(1)],
      distance: routeToGate.distance + routeToParent.distance + routeToDestination.distance,
      formattedDistance: `${routeToGate.distance + routeToParent.distance + routeToDestination.distance} meters`,
      estimatedMinutes: Math.ceil((routeToGate.distance + routeToParent.distance + routeToDestination.distance) / 60)
    };
  } else {
    // For internal routing without parent nodes, use normal routing
    return findRouteByName(cocData, startLocation, endLocation);
  }
}

