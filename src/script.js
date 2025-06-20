import { mainLocations, findMainCampusRoute } from './graphs/mainCampus.js';
import { cocLocations, findCOCRoute } from './graphs/coc.js';
import { ceaLocations, findCEARoute } from './graphs/cea.js';
import { mainCampusData } from './data/graphData.js';

function plotVerticesOnMap(pathNodeIds = []) {
  const map = document.getElementById('map');
  if (!map) return;

  // ✅ Remove only old .point elements
  map.querySelectorAll('.point').forEach(el => el.remove());

  Object.values(mainCampusData.nodes).forEach(node => {
    if (node.x !== undefined && node.y !== undefined) {
      const dot = document.createElement('div');
      dot.className = 'point';

      if (pathNodeIds.includes(node.id)) {
        dot.classList.add('path-node'); // highlight it
      }

      dot.style.left = `${node.x}px`;
      dot.style.top = `${node.y}px`;
      map.appendChild(dot);
    }
  });
}



// Inter-campus connection system
const interCampusConnections = {
  // Connection points for each campus (main exits/entrances)
  campusGateways: {
    MAIN: {
      mainGate: { nodeId: 19, name: "Main Gate" },
      eastGate: { nodeId: 7, name: "East Gate" },
      westGate: { nodeId: 40, name: "West Gate" }
    },
    COC: {
      mainEntrance: { nodeId: 1, name: "COC Building Entrance" } // Using COC Building Entrance as main entrance
    },
    CEA: {
      mainEntrance: { nodeId: 1, name: "CEA Building Entrance" } // Using CEA Building Entrance as main entrance
    }
  },
 
  // Inter-campus routes with distances and travel options
  routes: {
    "MAIN-COC": {
      distance: 800, // meters - approximate walking distance
      walkingTime: 15, // minutes
      tricycleTime: 5, // minutes
      transportOptions: ["walking", "tricycle"],
      route: "Via Anonas Street"
    },
    "MAIN-CEA": {
      distance: 1200, // meters - approximate walking distance
      walkingTime: 20, // minutes
      tricycleTime: 10, // minutes
      transportOptions: ["walking", "tricycle"],
      route: "Via Anonas Street"
    },
    "COC-CEA": {
      distance: 400, // meters - approximate walking distance
      walkingTime: 5, // minutes
      tricycleTime: 2, // minutes
      transportOptions: ["walking", "tricycle"],
      route: "Via Anonas Street"
    }
  }
};




// Updated campus data including CEA locations
const updatedCampusData = {
  MAIN: mainLocations,
  CEA: ceaLocations,
  COC: cocLocations
};




// Wait for document to be fully ready
$(document).ready(function() {
  // Initialize Select2 on all dropdown elements
  $('.searchable-select').select2({
    placeholder: "Search...",
    allowClear: true,
    width: "100%"
  });




  // Set up the start campus change event handler
  $('#startCampus').on('change', function() {
    const selectedCampus = $(this).val();
    updateLocationDropdown('start', selectedCampus);
  });




  // Set up the end campus change event handler
  $('#endCampus').on('change', function() {
    const selectedCampus = $(this).val();
    updateLocationDropdown('end', selectedCampus);
  });




  // Set up the start navigating button
  $('.btn').on('click', function() {
    startNavigating();
  });




  // Set up form submission
  $('#route-form').on('submit', function(event) {
    event.preventDefault();
    findRoute();
  });
 
  // Initialize map view when navigation panel is shown
  $('#navigation').on('show', function() {
    initializeMap();
  });
});




// Function to update either start or end location dropdowns
function updateLocationDropdown(type, campus) {
  const selectId = type === 'start' ? '#start' : '#end';
  const $select = $(selectId);
 
  // Clear existing options (keep the first placeholder option)
  $select.find('option:not(:first)').remove();
 
  // Add new options if we have data for this campus
  if (updatedCampusData[campus] && updatedCampusData[campus].length > 0) {
    updatedCampusData[campus].forEach(function(location) {
      $select.append(new Option(location, location));
    });
  }
 
  // Refresh the Select2 instance
  $select.trigger('change');
}




// Function to switch from intro screen to navigation screen
function startNavigating() {
  $('#front').hide();
  $('#navigation').show();
  initializeMap();
}




// Initialize the map display
function initializeMap() {
   if (!document.getElementById('map')) {
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.position = 'relative';
    mapDiv.style.width = '900px';
    mapDiv.style.height = '500px';
    mapDiv.style.backgroundImage = "url('../src/images/MAINlandmarks.jpg')";
    mapDiv.style.backgroundSize = 'cover';
    mapDiv.style.border = '2px solid black';
    document.getElementById('map-container').appendChild(mapDiv);
  }

  plotVerticesOnMap();
  // if (!$('#map-container').length) {
  //   $('#route-result').before('<div id="map-container" class="map-container"><div class="map-placeholder">Campus Map Placeholder</div></div>');
  // }
}




// Function to determine the best gateway for inter-campus travel
function getBestGateway(fromCampus, toCampus) {
  const gateways = interCampusConnections.campusGateways[fromCampus];
 
  // Always use Main Gate for CEA and COC routes
  if (fromCampus === 'MAIN') {
    return gateways.mainGate; // Always use Main Gate for external campus routes
  }
 
  // For other campuses, use their main entrance
  return gateways.mainEntrance;
}




// Function to handle same-campus routing
function findSameCampusRoute(campus, startLocation, endLocation) {
  let route;
 
  switch(campus) {
    case 'MAIN':
      route = findMainCampusRoute(startLocation, endLocation);
      break;
    case 'COC':
      route = findCOCRoute(startLocation, endLocation);
      break;
    case 'CEA':
      route = findCEARoute(startLocation, endLocation);
      break;
    default:
      return { error: true, message: "Campus not supported" };
  }
 
  return {
    ...route,
    type: 'same-campus',
    campus: campus
  };
}




// Function to handle inter-campus routing
function findInterCampusRoute(startCampus, startLocation, endCampus, endLocation) {
  const routeKey = `${startCampus}-${endCampus}`;
  const reverseRouteKey = `${endCampus}-${startCampus}`;
 
  // Get inter-campus connection info
  const connectionInfo = interCampusConnections.routes[routeKey] ||
                        interCampusConnections.routes[reverseRouteKey];
 
  if (!connectionInfo) {
    return {
      error: true,
      message: `No route available between ${startCampus} and ${endCampus}`
    };
  }
 
  // Find route within start campus to its main exit
  const startCampusGateway = getBestGateway(startCampus, endCampus);
  const startCampusRoute = findSameCampusRoute(startCampus, startLocation, startCampusGateway.name);
 
  // Find route within end campus from its main entrance to destination
  const endCampusGateway = getBestGateway(endCampus, startCampus);
  const endCampusRoute = findSameCampusRoute(endCampus, endCampusGateway.name, endLocation);
 
  // Check for errors in campus-internal routes
  if (startCampusRoute.error || endCampusRoute.error) {
    return {
      error: true,
      message: "Could not find complete route within campus",
      details: {
        startCampusError: startCampusRoute.error ? startCampusRoute.message : null,
        endCampusError: endCampusRoute.error ? endCampusRoute.message : null
      }
    };
  }
 
  // Calculate total distance and time
  const totalWalkingDistance = startCampusRoute.distance + connectionInfo.distance + endCampusRoute.distance;
  const totalWalkingTime = startCampusRoute.estimatedMinutes + connectionInfo.walkingTime + endCampusRoute.estimatedMinutes;
  const totalTricycleTime = startCampusRoute.estimatedMinutes + connectionInfo.tricycleTime + endCampusRoute.estimatedMinutes;
 
  // Build complete route path
  const completePath = [
    ...startCampusRoute.path,
    `--- Travel between campuses (${connectionInfo.route}) ---`,
    ...endCampusRoute.path
  ];
 
  return {
    error: false,
    type: 'inter-campus',
    startCampus: startCampus,
    endCampus: endCampus,
    path: completePath,
    segments: {
      withinStartCampus: startCampusRoute,
      interCampus: connectionInfo,
      withinEndCampus: endCampusRoute
    },
    distance: totalWalkingDistance,
    formattedDistance: `${totalWalkingDistance} meters`,
    walkingTime: totalWalkingTime,
    tricycleTime: totalTricycleTime,
    transportOptions: connectionInfo.transportOptions,
    routeDescription: connectionInfo.route
  };
}




// Enhanced route finding function that handles inter-campus routing
function findCompleteRoute(startCampus, startLocation, endCampus, endLocation) {
  // Same campus routing
  if (startCampus === endCampus) {
    return findSameCampusRoute(startCampus, startLocation, endLocation);
  }
 
  // Inter-campus routing
  return findInterCampusRoute(startCampus, startLocation, endCampus, endLocation);
}




// Main route finding function
function findRoute() {
  const startCampus = $('#startCampus').val();
  const start = $('#start').val();
  const endCampus = $('#endCampus').val();
  const end = $('#end').val();
 



  if (startCampus && start && endCampus && end) {
    // Use the new complete route finding function
    const route = findCompleteRoute(startCampus, start, endCampus, end);
   
    // Display the route using the appropriate display function
    if (route.type === 'inter-campus') {
      displayInterCampusRouteEnhanced(route, start, end);
      highlightInterCampusPath(route);
    } else {
      // Handle same-campus routes
      if (startCampus === 'MAIN') {
        displayRoute(route, start, end, 'MAIN Campus');
        highlightPath(route.nodeIds, mainCampusData.nodes);      
        plotVerticesOnMap(route.nodeIds);                       

      } else if (startCampus === 'COC') {
        displayCOCRoute(route, start, end);
        highlightCOCPath(route.nodeIds, route.pathWithFloors);
      } else if (startCampus === 'CEA') {
        displayCEARoute(route, start, end);
        highlightCEAPath(route.nodeIds, route.pathWithFloors);
      }
    }
  } else {
    alert("Please select both campus and location for start and destination.");
  }




  document.getElementById("route-result").style.display = "block";
}




// Function to display regular campus routes
function displayRoute(route, start, end, campusName) {
  if (route.error) {
    $('#route-result').html(`<p class="error">${route.message}</p>`);
  } else {
    // Display the route
    let routeHTML = `
      <h3>Route from ${start} to ${end}</h3>
      <p><strong>Campus:</strong> ${campusName}</p>
      <p><strong>Distance:</strong> ${route.formattedDistance}</p>
      <ol class="route-steps">`;
   
    route.path.forEach((location, index) => {
      routeHTML += `<li>${location}${index < route.path.length - 1 ? ' →' : ''}</li>`;
    });
   
    routeHTML += `</ol>`;
   
    $('#route-result').html(routeHTML);
   
    // Highlight the path on the map (if map visualization is implemented)
    highlightPath(route.nodeIds, mainCampusData.nodes);      // ✅ correct



  }
}




// Function to display COC building routes with floor information
function displayCOCRoute(route, start, end) {
  console.log('Displaying COC route:', route); // Debug log




  if (!route || route.error) {
    const errorMessage = route && route.message ? route.message : "Could not find a route between these locations";
    $('#route-result').html(`<p class="error">${errorMessage}</p>`);
    return;
  }




  // Display the route with floor information
  let routeHTML = `
    <h3>Route from ${start} to ${end}</h3>
    <p><strong>Building:</strong> COC (College of Communication)</p>
    <p><strong>Distance:</strong> ${route.formattedDistance}</p>
    <p><strong>Estimated Time:</strong> ${route.estimatedMinutes} minute(s)</p>
    <ol class="route-steps">`;
 
  route.pathWithTypes.forEach((location, index) => {
    const floorInfo = location.floor === "1-2" ? "(Stairs)" : `(Floor ${location.floor})`;
    const typeInfo = location.type === 'hallway' ? '' : ` - ${location.type}`;
   
    routeHTML += `
      <li>
        <strong>${location.name}</strong> ${floorInfo}${typeInfo}
        ${index < route.pathWithTypes.length - 1 ? ' →' : ''}
      </li>`;
  });
 
  routeHTML += `</ol>`;
 
  // Add helpful navigation notes if changing floors
  if (route.pathWithTypes.length > 0) {
    const startFloor = route.pathWithTypes[0].floor;
    const endFloor = route.pathWithTypes[route.pathWithTypes.length - 1].floor;
   
    if (startFloor !== endFloor &&
        typeof startFloor === 'number' &&
        typeof endFloor === 'number') {
      routeHTML += `<div class="route-note">
        <p><strong>Note:</strong> This route involves moving from Floor ${startFloor} to Floor ${endFloor}.
        Follow the stairs as indicated in the route.</p>
      </div>`;
    }
  }
 
  $('#route-result').html(routeHTML);
 
  // Highlight the path on the map
  if (route.nodeIds && route.nodeIds.length > 0) {
    highlightCOCPath(route.nodeIds, route.pathWithTypes);
  }
}




// Function to display CEA building routes with floor information
function displayCEARoute(route, start, end) {
  console.log('Displaying CEA route:', route); // Debug log




  if (!route || route.error) {
    const errorMessage = route && route.message ? route.message : "Could not find a route between these locations";
    $('#route-result').html(`<p class="error">${errorMessage}</p>`);
    return;
  }




  // Display the route with floor information
  let routeHTML = `
    <h3>Route from ${start} to ${end}</h3>
    <p><strong>Building:</strong> CEA (College of Engineering and Architecture)</p>
    <p><strong>Distance:</strong> ${route.formattedDistance}</p>
    <p><strong>Estimated Time:</strong> ${route.estimatedMinutes} minute(s)</p>
    <ol class="route-steps">`;
 
  route.pathWithTypes.forEach((location, index) => {
    // Handle different floor types (numbers, "1-2", "2-3", "3-4" for stairs)
    let floorInfo;
    if (typeof location.floor === 'string' && location.floor.includes('-')) {
      floorInfo = "(Stairs)";
    } else {
      floorInfo = `(Floor ${location.floor})`;
    }
   
    const typeInfo = location.type === 'hallway' ? '' : ` - ${location.type}`;
   
    routeHTML += `
      <li>
        <strong>${location.name}</strong> ${floorInfo}${typeInfo}
        ${index < route.pathWithTypes.length - 1 ? ' →' : ''}
      </li>`;
  });
 
  routeHTML += `</ol>`;
 
  // Add helpful navigation notes for multi-floor routes
  if (route.pathWithTypes.length > 0) {
    const startFloor = route.pathWithTypes[0].floor;
    const endFloor = route.pathWithTypes[route.pathWithTypes.length - 1].floor;
   
    if (startFloor !== endFloor &&
        typeof startFloor === 'number' &&
        typeof endFloor === 'number') {
      routeHTML += `<div class="route-note">
        <p><strong>Note:</strong> This route involves moving from Floor ${startFloor} to Floor ${endFloor}.
        Follow the stairs as indicated in the route.</p>
      </div>`;
    }
  }
 
  $('#route-result').html(routeHTML);
 
  // Highlight the path on the map
  if (route.nodeIds && route.nodeIds.length > 0) {
    highlightCEAPath(route.nodeIds, route.pathWithTypes);
  }
}




// Enhanced function to display inter-campus routes
function displayInterCampusRouteEnhanced(route, startLocation, endLocation) {
  if (route.error) {
    $('#route-result').html(`<p class="error">${route.message}</p>`);
    return;
  }
 
  let routeHTML = `
    <h3>Inter-Campus Route</h3>
    <p><strong>From:</strong> ${startLocation} (${route.startCampus} Campus)</p>
    <p><strong>To:</strong> ${endLocation} (${route.endCampus} Campus)</p>
   
    <div class="route-summary">
      <div class="distance-info">
        <p><strong>Total Distance:</strong> ${route.formattedDistance}</p>
        <p><strong>Walking Time:</strong> ~${route.walkingTime} minutes</p>
        <p><strong>With Tricycle:</strong> ~${route.tricycleTime} minutes</p>
      </div>
     
      <div class="transport-options">
        <p><strong>Transportation Options:</strong></p>
        <ul>`;
 
  route.transportOptions.forEach(option => {
    const time = option === 'walking' ? route.walkingTime : route.tricycleTime;
    routeHTML += `<li>${option.charAt(0).toUpperCase() + option.slice(1)} (~${time} minutes)</li>`;
  });
 
  routeHTML += `
        </ul>
      </div>
    </div>
   
    <div class="detailed-route">
      <h4>Detailed Route:</h4>
     
      <div class="route-segment">
        <h5>Within ${route.startCampus} Campus:</h5>
        <ol class="route-steps">`;
 
  route.segments.withinStartCampus.path.forEach((location, index) => {
    routeHTML += `<li>${location}${index < route.segments.withinStartCampus.path.length - 1 ? ' →' : ''}</li>`;
  });
 
  routeHTML += `
        </ol>
        <p class="segment-info">Distance: ${route.segments.withinStartCampus.formattedDistance}</p>
      </div>
     
      <div class="route-segment inter-campus-segment">
        <h5>Between Campuses:</h5>
        <p><strong>Route:</strong> ${route.routeDescription}</p>
        <p><strong>Distance:</strong> ${route.segments.interCampus.distance} meters</p>
        <p><strong>Options:</strong></p>
        <ul>
          <li>Walking: ${route.segments.interCampus.walkingTime} minutes</li>
          <li>Tricycle: ${route.segments.interCampus.tricycleTime} minutes</li>
        </ul>
      </div>
     
      <div class="route-segment">
        <h5>Within ${route.endCampus} Campus:</h5>
        <ol class="route-steps">`;
 
  route.segments.withinEndCampus.path.forEach((location, index) => {
    routeHTML += `<li>${location}${index < route.segments.withinEndCampus.path.length - 1 ? ' →' : ''}</li>`;
  });
 
  routeHTML += `
        </ol>
        <p class="segment-info">Distance: ${route.segments.withinEndCampus.formattedDistance}</p>
      </div>
    </div>
   
    <div class="route-tips">
      <h4>Travel Tips:</h4>
      <ul>
        <li>Tricycles are available near campus gates</li>
        <li>Walking is free and provides good exercise</li>
        <li>Allow extra time during peak hours</li>
        <li>Bring exact change for tricycle fare</li>
      </ul>
    </div>`;
 
  $('#route-result').html(routeHTML);
}
function highlightPath(nodeIds, nodes) {
  const map = document.getElementById("map");
  if (!map || !nodeIds || nodeIds.length < 2) return;

  plotVerticesOnMap(nodeIds); // ✅ Draw points first

  // 🧹 Clear old lines
  map.querySelectorAll(".path-line").forEach(el => el.remove());

  for (let i = 0; i < nodeIds.length - 1; i++) {
    const from = nodes[nodeIds[i]];
    const to = nodes[nodeIds[i + 1]];
    if (!from || !to || from.x === undefined || to.x === undefined) continue;

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    const line = document.createElement("div");
    line.className = "path-line";
    line.style.left = `${from.x}px`;
    line.style.top = `${from.y}px`;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = "0 0";
    map.appendChild(line);
  }
}









// // Function to highlight the path on the map visualization
// function highlightPath(nodeIds) {
//   console.log("Path to highlight:", nodeIds);
 
//   let mapHTML = `<div class="map-with-path">
//     <div class="map-placeholder">
//       <p>Main Campus Path visualization would go here</p>
//       <p>Nodes: ${nodeIds ? nodeIds.join(' → ') : 'No nodes available'}</p>
//     </div>
//   </div>`;
 
//   $('#map-container').html(mapHTML);
// }




// Function to highlight COC building path with floor information
function highlightCOCPath(nodeIds, pathWithFloors) {
  console.log("COC Path to highlight:", nodeIds);
  console.log("Path with floors:", pathWithFloors);
 
  let mapHTML = `<div class="coc-map-with-path">
    <div class="coc-building-visualization">
      <h4>COC Building Route Visualization</h4>`;
 
  if (pathWithFloors && pathWithFloors.length > 0) {
    // Group by floors for better visualization
    const floor1Nodes = pathWithFloors.filter(node => node.floor === 1);
    const floor2Nodes = pathWithFloors.filter(node => node.floor === 2);
    const stairNodes = pathWithFloors.filter(node => node.floor === "1-2");
   
    if (floor1Nodes.length > 0) {
      mapHTML += `<div class="floor-section">
        <h5>1st Floor Route:</h5>
        <p>${floor1Nodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
   
    if (stairNodes.length > 0) {
      mapHTML += `<div class="stairs-section">
        <h5>Stairs:</h5>
        <p>${stairNodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
   
    if (floor2Nodes.length > 0) {
      mapHTML += `<div class="floor-section">
        <h5>2nd Floor Route:</h5>
        <p>${floor2Nodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
  }
 
  mapHTML += `
      <p class="visualization-note">Detailed floor plan visualization coming soon!</p>
    </div>
  </div>`;
 
  $('#map-container').html(mapHTML);
}




// Function to highlight CEA building path with floor information
function highlightCEAPath(nodeIds, pathWithFloors) {
  console.log("CEA Path to highlight:", nodeIds);
  console.log("Path with floors:", pathWithFloors);
 
  let mapHTML = `<div class="cea-map-with-path">
    <div class="cea-building-visualization">
      <h4>CEA Building Route Visualization</h4>`;
 
  if (pathWithFloors && pathWithFloors.length > 0) {
    // Group by floors for better visualization (CEA has 4 floors)
    const floor1Nodes = pathWithFloors.filter(node => node.floor === 1);
    const floor2Nodes = pathWithFloors.filter(node => node.floor === 2);
    const floor3Nodes = pathWithFloors.filter(node => node.floor === 3);
    const floor4Nodes = pathWithFloors.filter(node => node.floor === 4);
    const stairNodes = pathWithFloors.filter(node =>
      typeof node.floor === 'string' && node.floor.includes('-')
    );
   
    if (floor1Nodes.length > 0) {
      mapHTML += `<div class="floor-section">
        <h5>1st Floor Route:</h5>
        <p>${floor1Nodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
   
    if (floor2Nodes.length > 0) {
      mapHTML += `<div class="floor-section">
        <h5>2nd Floor Route:</h5>
        <p>${floor2Nodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
   
    if (floor3Nodes.length > 0) {
      mapHTML += `<div class="floor-section">
        <h5>3rd Floor Route:</h5>
        <p>${floor3Nodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
   
    if (floor4Nodes.length > 0) {
      mapHTML += `<div class="floor-section">
        <h5>4th Floor Route:</h5>
        <p>${floor4Nodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
   
    if (stairNodes.length > 0) {
      mapHTML += `<div class="stairs-section">
        <h5>Stairs Used:</h5>
        <p>${stairNodes.map(n => n.name).join(' → ')}</p>
      </div>`;
    }
  }
 
  mapHTML += `
      <p class="visualization-note">Detailed CEA floor plan visualization coming soon!</p>
    </div>
  </div>`;
 
  $('#map-container').html(mapHTML);
}




// Function to highlight inter-campus paths
function highlightInterCampusPath(route) {
  let mapHTML = `<div class="inter-campus-map">
    <div class="campus-connection-visualization">
      <h4>Inter-Campus Route Visualization</h4>
     
      <div class="campus-segment">
        <h5>${route.startCampus} Campus Route:</h5>
        <div class="campus-path">${route.segments.withinStartCampus.path.join(' → ')}</div>
      </div>
     
      <div class="connection-segment">
        <h5>Inter-Campus Connection:</h5>
        <div class="connection-info">
          <p><strong>${route.routeDescription}</strong></p>
          <p>Distance: ${route.segments.interCampus.distance}m</p>
          <div class="transport-times">
            <span class="walking-time">🚶 ${route.segments.interCampus.walkingTime} min</span>
            <span class="tricycle-time">🛺 ${route.segments.interCampus.tricycleTime} min</span>
          </div>
        </div>
      </div>
     
      <div class="campus-segment">
        <h5>${route.endCampus} Campus Route:</h5>
        <div class="campus-path">${route.segments.withinEndCampus.path.join(' → ')}</div>
      </div>
     
      <div class="total-summary">
        <p><strong>Total Journey:</strong> ${route.formattedDistance} | 🚶 ${route.walkingTime} min | 🛺 ${route.tricycleTime} min</p>
      </div>
    </div>
  </div>`;
 
  $('#map-container').html(mapHTML);
}




// Make functions available globally (if needed for HTML onclick handlers)
window.startNavigating = startNavigating;
window.findRoute = findRoute;




// Export functions for potential use by other modules
export {
  findCompleteRoute,
  displayInterCampusRouteEnhanced,
  interCampusConnections,
  highlightInterCampusPath
};

// 🧪 Test Route – TEMPORARY DEBUG
// $(document).ready(() => {
//   const testRoute = findMainCampusRoute("Main Gate", "Main Building - Dome"); // ✅ Define it here

//   if (testRoute && !testRoute.error) {
//     console.log("🟢 Test Route Found:", testRoute);

//     plotVerticesOnMap(testRoute.nodeIds); // ✅ Show path dots
//     highlightPath(testRoute.nodeIds, mainCampusData.nodes); // ✅ Draw line
//     displayRoute(testRoute, "Main Gate", "Main Building - Dome", "Main Campus"); // ✅ Show text route
//   } else {
//     console.error("❌ Test route error:", testRoute?.message);
//   }
// });










