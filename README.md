# PUPunta - Campus Route Finder

<div align="center">
  <img src="src/images/puplogo.png" alt="PUP Logo" width="200"/>
  <h3>Navigate the PUP Sta. Mesa campus with ease</h3>
</div>

## Overview

PUPunta is a sophisticated web-based route finding application specifically designed for the Polytechnic University of the Philippines (PUP) Sta. Mesa campus. It helps students, faculty, and visitors navigate efficiently between different buildings and locations within the campus.

### Key Features

- **Multi-Building Navigation**: Seamlessly find routes between:
  - Main Building
  - College of Engineering and Architecture (CEA)
  - College of Computer and Information Sciences (COC)

- **Intelligent Pathfinding**:
  - Optimized Dijkstra's algorithm for shortest path calculation
  - Smart floor transition handling with stair preferences
  - Penalty-based routing to prefer logical paths (hallways over direct jumps)

- **Interactive UI**:
  - Real-time path visualization
  - Dynamic map switching between buildings
  - Searchable location dropdowns
  - Estimated walking distance and time
  - Visual path highlighting

- **Smart Routing Features**:
  - Automatic floor transition handling
  - Preference for center stairs for vertical movement
  - Intelligent handling of building connections
  - Penalty system for non-optimal paths

## Technical Details

### Architecture

The application is built using modern web technologies:

- **Frontend**: Pure JavaScript, HTML5, and CSS3
- **Dependencies**: 
  - jQuery 3.6.0 (for Select2 integration)
  - Select2 4.1.0 (for enhanced dropdowns)

### Core Components

1. **Pathfinding Engine** (`utils/pathfinding.js`):
   - Custom implementation of Dijkstra's algorithm
   - Advanced weight calculation system
   - Smart handling of floor transitions
   - Parent-child node relationship management

2. **Map Visualization** (`utils/mapPlotter.js`):
   - Dynamic path rendering
   - Interactive node plotting
   - Real-time coordinate tracking
   - Multi-floor visualization

3. **Data Management** (`data/graphData.js`):
   - Comprehensive node mapping
   - Edge weight calculations
   - Building interconnection data
   - Floor transition points

### Building-Specific Features

- **Main Building**:
  - Complete floor-by-floor navigation (1st to 6th floor)
  - Optimized stair usage for vertical movement
  - Smart routing through hallways

- **CEA Building**:
  - Four-floor navigation system
  - Connected to main campus via optimal paths
  - Internal point-of-interest routing

- **COC Building**:
  - Two-floor navigation capability
  - Efficient connection to main campus
  - Strategic entry/exit point handling

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Open `index.html` in a modern web browser

3. Select your starting point and destination from the dropdowns

4. Click "Find Route" to generate the optimal path

## Development

### Project Structure
```
PUPunta/
├── src/
│   ├── data/
│   │   └── graphData.js      # Node and edge definitions
│   ├── graphs/
│   │   ├── cea.js            # CEA building routes
│   │   ├── coc.js            # COC building routes
│   │   └── mainCampus.js     # Main building routes
│   ├── images/               # Map images and icons
│   ├── utils/
│   │   ├── mapPlotter.js     # Map visualization
│   │   ├── pathfinding.js    # Core routing algorithm
│   │   └── PriorityQueue.js  # Queue implementation
│   ├── index.html            # Main application page
│   ├── script.js             # Core application logic
│   └── style.css            # Application styling
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Acknowledgments

- PUP Administration for building layout information
- Contributors and testers from the PUP community
- Faculty advisors for guidance and support 

## Authors
- Joanne Aldover
- Ed Marcel Lasco
- Sophia Lizarondo
- Charles Lucas
- John Rich Nicolas
