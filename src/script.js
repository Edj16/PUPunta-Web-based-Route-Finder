import { mainLocations, findMainCampusRoute } from './graphs/mainCampus.js';
import { cocLocations, findCOCRoute } from './graphs/coc.js';
import { ceaLocations, findCEARoute } from './graphs/cea.js';
import { mainCampusData } from './data/graphData.js';

function plotVerticesOnMap(pathNodeIds = [], nodes = mainCampusData.nodes) {
  const map = document.getElementById('map');
  if (!map) return;

  map.querySelectorAll('.point').forEach(el => el.remove());

  Object.values(nodes).forEach(node => {
    if (node.x !== undefined && node.y !== undefined) {
      const dot = document.createElement('div');
      dot.className = 'point';

      if (pathNodeIds.includes(node.id)) {
        dot.classList.add('path-node');
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

  // Auto-change map when campus changes
  $('#startCampus').on('change', function () {
    const selectedCampus = $(this).val();
    initializeMap(getMapImageForCampus(selectedCampus));
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

function getMapImageForCampus(campusCode) {
  console.log('Getting campus map for:', campusCode);
  const mapImages = {
    MAIN: './images/MAINlandmarks.jpg',
    COC: './images/COC.png',
    CEA: './images/CEALAYOUT.png',
    MAIN_FLOOR: {
      1: './images/mainBuilding_floor/main_1st Floor.png',
      2: './images/mainBuilding_floor/main_2nd Floor.png',
      3: './images/mainBuilding_floor/main_3rd Floor.png',
      4: './images/mainBuilding_floor/main_4th Floor.png',
      5: './images/mainBuilding_floor/main_5th Floor.png',
      6: './images/mainBuilding_floor/main_6th Floor.png'
    }
  };
  const mapPath = mapImages[campusCode] || './images/MAINlandmarks.jpg';
  console.log('Map path:', mapPath);
  return mapPath;
}

function getFloorMap(building, floor) {
  console.log('Getting floor map for:', building, floor);
  const floorMaps = {
    MAIN: {
      1: './images/mainBuilding_floor/main_1st Floor.png',
      2: './images/mainBuilding_floor/main_2nd Floor.png',
      3: './images/mainBuilding_floor/main_3rd Floor.png',
      4: './images/mainBuilding_floor/main_4th Floor.png',
      5: './images/mainBuilding_floor/main_5th Floor.png',
      6: './images/mainBuilding_floor/main_6th Floor.png'
    },
    CEA: {
      1: './images/cea_floor/CEA 1ST.png',
      2: './images/cea_floor/CEA 2ND FLOOR.png',
      3: './images/cea_floor/CEA 3RD.png',
      4: './images/cea_floor/CEA 4TH.png'
    },
    COC: {
      1: './images/coc_floor/COC 1st Floor.png',
      2: './images/coc_floor/COC 2nd Floor.png'
    }
  };
  const mapPath = floorMaps[building]?.[floor];
  console.log('Map path:', mapPath);
  return mapPath;
}



// Function to switch from intro screen to navigation screen
function startNavigating() {
  $('#front').hide();
  $('#navigation').show();

  const selectedCampus = $('#startCampus').val() || 'MAIN';
  initializeMap(getMapImageForCampus(selectedCampus));
}

function initializeMap(backgroundImageURL) {
  console.log('Initializing map with:', backgroundImageURL);
  let mapDiv = document.getElementById('map');

  if (!mapDiv) {
    mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    document.getElementById('map-container').appendChild(mapDiv);
  }

  // Clean old nodes/lines
  mapDiv.querySelectorAll('.point, .path-line').forEach(el => el.remove());

  // Update the background image
  if (backgroundImageURL) {
    // Create a new Image object to verify the image exists
    const img = new Image();
    img.onload = function() {
      console.log('Background image loaded successfully:', backgroundImageURL);
      mapDiv.style.backgroundImage = `url('${backgroundImageURL}')`;
      mapDiv.style.backgroundSize = 'contain';
      mapDiv.style.backgroundRepeat = 'no-repeat';
      mapDiv.style.backgroundPosition = 'center';
      mapDiv.style.position = 'relative';
      mapDiv.style.width = '900px';
      mapDiv.style.height = '500px';
      mapDiv.style.border = '2px solid #ccc';
    };
    img.onerror = function() {
      console.error('Failed to load background image:', backgroundImageURL);
      alert('Failed to load map image. Please check the console for details.');
      mapDiv.style.backgroundImage = 'none';
      mapDiv.style.backgroundColor = '#f5f5f5';
    };
    img.src = backgroundImageURL;
  }
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
    // 🖼️ Load appropriate map image based on campus
    initializeMap(getMapImageForCampus(startCampus));

    // 🚏 Find complete route
    const route = findCompleteRoute(startCampus, start, endCampus, end);

    // 🧭 Display and highlight route
    if (route.type === 'inter-campus') {
      displayInterCampusRouteEnhanced(route, start, end);
      highlightInterCampusPath(route);
    } else {
      if (startCampus === 'MAIN') {
        displayRoute(route, start, end, 'MAIN Campus');
        highlightPath(route.nodeIds, mainCampusData.nodes);
        plotVerticesOnMap(route.nodeIds);
      } else if (startCampus === 'COC') {
        displayCOCRoute(route, start, end, 'COC Campus');
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
  console.log('Displaying route:', route);

  if (!route || route.error) {
    const errorMessage = route && route.message ? route.message : "Could not find a route between these locations";
    $('#route-result').html(`<p class="error">${errorMessage}</p>`);
    return;
  }

  // Group path by floors
  const pathByFloor = {};
  route.pathWithTypes.forEach(location => {
    if (location.floor && typeof location.floor !== 'string') {
      if (!pathByFloor[location.floor]) {
        pathByFloor[location.floor] = [];
      }
      pathByFloor[location.floor].push(location);
    }
  });

  // Display route summary
  let routeHTML = `
    <h3>Route from ${start} to ${end}</h3>
    <p><strong>Distance:</strong> ${route.formattedDistance}</p>
    <p><strong>Estimated Time:</strong> ${route.estimatedMinutes} minute(s)</p>
    <div class="floor-navigation">
      <h4>Floor-by-Floor Navigation:</h4>
      <div class="floor-buttons">
  `;

  // Add buttons for each floor
  Object.keys(pathByFloor).sort((a, b) => a - b).forEach(floor => {
    routeHTML += `
      <button type="button" class="floor-button" data-floor="${floor}">
        Floor ${floor}
      </button>
    `;
  });

  routeHTML += `</div></div><ol class="route-steps">`;

  // Add route steps with floor information
  route.pathWithTypes.forEach((location, index) => {
    const floorInfo = location.floor === "1-2" ? "(Stairs)" : 
                     typeof location.floor === 'string' && location.floor.includes('-') ? 
                     `(Stairs ${location.floor})` : 
                     `(Floor ${location.floor})`;
    
    const typeInfo = location.type === 'hallway' ? '' : ` - ${location.type}`;
    
    routeHTML += `
      <li>
        <strong>${location.name}</strong> ${floorInfo}${typeInfo}
        ${index < route.pathWithTypes.length - 1 ? ' →' : ''}
      </li>`;
  });

  routeHTML += `</ol>`;

  // Add floor change instructions
  let currentFloor = null;
  route.pathWithTypes.forEach(location => {
    if (location.floor && location.floor !== currentFloor) {
      if (currentFloor !== null && typeof location.floor === 'number' && typeof currentFloor === 'number') {
        routeHTML += `
          <div class="floor-change-note">
            <p><strong>Floor Change:</strong> From Floor ${currentFloor} to Floor ${location.floor}</p>
          </div>
        `;
      }
      currentFloor = location.floor;
    }
  });

  $('#route-result').html(routeHTML);
  $('#route-result').show();

  // Remove any existing click handlers
  $(document).off('click', '.floor-button');
  
  // Add click handlers for floor buttons
  $(document).on('click', '.floor-button', function(e) {
    e.preventDefault();
    const floor = $(this).data('floor');
    console.log('Floor button clicked:', floor);
    showFloorMap('MAIN', parseInt(floor), route);
    $('.floor-button').removeClass('active');
    $(this).addClass('active');
  });

  // Show main campus map first and plot only main campus nodes
  initializeMap(getMapImageForCampus('MAIN'));
  const outsideNodes = route.nodeIds.filter(nodeId => {
    const node = mainCampusData.nodes[nodeId];
    return node && !node.floor;
  });
  if (outsideNodes.length > 0) {
    plotVerticesOnMap(outsideNodes, mainCampusData.nodes);
    highlightPath(outsideNodes, mainCampusData.nodes);
  }
}

function showFloorMap(building, floor, route) {
  console.log('Showing floor map for:', building, floor);
  const floorMap = getFloorMap(building, floor);
  console.log('Floor map path:', floorMap);
  
  if (floorMap) {
    // Create a new Image object to verify the image exists
    const img = new Image();
    img.onload = function() {
      console.log('Floor map loaded successfully:', floorMap);
      initializeMap(floorMap);
      
      // Filter nodes for current floor
      const floorNodes = route.nodeIds.filter(nodeId => {
        const node = mainCampusData.nodes[nodeId];
        return node && node.floor === floor;
      });
      
      console.log('Floor nodes:', floorNodes);
      
      // Only plot nodes if we have nodes for this floor
      if (floorNodes.length > 0) {
        plotVerticesOnMap(floorNodes, mainCampusData.nodes);
        highlightPath(floorNodes, mainCampusData.nodes);
      }
    };
    img.onerror = function() {
      console.error('Failed to load floor map:', floorMap);
      alert('Failed to load floor map. Please check the console for details.');
    };
    img.src = floorMap;
  } else {
    console.error('No floor map found for:', building, floor);
  }
}

function highlightPath(nodeIds, nodes) {
  const map = document.getElementById("map");
  if (!map || !nodeIds || nodeIds.length < 2) return;

  // Clear old lines
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
        <ul>
          ${route.transportOptions.map(option => {
            const time = option === 'walking' ? route.walkingTime : route.tricycleTime;
            return `<li>${option.charAt(0).toUpperCase() + option.slice(1)} (~${time} minutes)</li>`;
          }).join('')}
        </ul>
      </div>
    </div>
    
    <div class="detailed-route">
      <h4>Detailed Route:</h4>
      
      <div class="route-segment">
        <h5>Within ${route.startCampus} Campus:</h5>
        <ol class="route-steps">
          ${route.segments.withinStartCampus.path.map((location, index) => 
            `<li>${location}${index < route.segments.withinStartCampus.path.length - 1 ? ' →' : ''}</li>`
          ).join('')}
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
        <ol class="route-steps">
          ${route.segments.withinEndCampus.path.map((location, index) => 
            `<li>${location}${index < route.segments.withinEndCampus.path.length - 1 ? ' →' : ''}</li>`
          ).join('')}
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
    </div>
  `;
  
  $('#route-result').html(routeHTML);
}