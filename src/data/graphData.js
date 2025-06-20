// Main Campus Graph Data

function calculateDistance(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const nodes = {
   1: { id: 1, name: "Amphitheater", type: "building" ,x:257,y:261},
    2: { id: 2, name: "Banda Kawayan, Sining Lahi Headquarters", type: "building", x:187, y:58},
    3: { id: 3, name: "Building and Grounds Maintenance Office", type: "building", x:232, y:446 },
    4: { id: 4, name: "Catwalk", type: "path", x:444, y:207  },
    5: { id: 5, name: "Centennial Monument", type: "landmark", x:330, y:215 },
    6: { id: 6, name: "Charlie del Rosario Student Development Center", type: "building", x:131, y:200 },
    7: { id: 7, name: "East Gate", type: "entrance", x:585, y:430},
    8: { id: 8, name: "Flag Pole", type: "landmark", x:349, y:284 },
    9: { id: 9, name: "Grandstand", type: "building", x:430, y:305 },
    10: { id: 10, name: "Gymnasium", type: "building", x:477, y:84 },
    11: { id: 11, name: "Interfaith Chapel", type: "building", x:326, y:380},
    12: { id: 12, name: "Laboratory High School", type: "building", x:127, y:127},
    13: { id: 13, name: "Lagoon", type: "landmark", x:281, y:222 },
    14: { id: 14, name: "Main Building - Dome", type: "building", x:249, y:331 },
    15: { id: 15, name: "Main Building - East Wing", type: "building" , x:248, y:388},
    16: { id: 16, name: "Main Building - North Wing", type: "building", x:298, y:300},
    17: { id: 17, name: "Main Building - South Wing", type: "building", x:182, y:367},
    18: { id: 18, name: "Main Building - West Wing", type: "building", x:194, y:299},
    19: { id: 19, name: "Main Gate", type: "entrance", x:587, y:220 },
    20: { id: 20, name: "Nemesio E. Prudente Freedom Park", type: "landmark", x:359, y:265 },
    21: { id: 21, name: "Ninoy Aquino Library and Learning Resources Center", type: "building", x:235, y:120 },
    22: { id: 22, name: "Open Court", type: "landmark", x:417, y:155 },
    23: { id: 23, name: "Open University / Nontraditional Studies Program", type: "building", x:312, y:446 },
    24: { id: 24, name: "Oval Open Field", type: "landmark", x:495, y:344 },
    25: { id: 25, name: "P.E. Building", type: "building", x:322, y:88},
    26: { id: 26, name: "Pasig River", type: "landmark" },
    27: { id: 27, name: "Pasig River Ferry (Sta. Mesa Station)", type: "entrance", x:154, y:447 },
    28: { id: 28, name: "Proposed Access Road", type: "path", x:399, y:300},
    29: { id: 29, name: "Public Restroom", type: "building", x:148, y:236 },
    30: { id: 30, name: "PUP Linear Park", type: "landmark", x:118, y:310 },
    31: { id: 31, name: "PUP Mural and the Shrine of Heroism", type: "landmark", x:588, y:235},
    32: { id: 32, name: "PUP Obelisk (and the Mabini Monument)", type: "landmark", x:374, y:215 },
    33: { id: 33, name: "PUP Property Building and Motorpool", type: "building", x:72, y:65},
    34: { id: 34, name: "PUP Pylon", type: "landmark", x:587, y:200 },
    35: { id: 35, name: "Sampaguita Building", type: "building", x:131, y:266 },
    36: { id: 36, name: "Student Pavilion", type: "building", x:459, y:233 },
    37: { id: 37, name: "Swimming Pool", type: "landmark", x:382, y:83 },
    38: { id: 38, name: "Tennis Open Court", type: "landmark", x:486, y:153 },
    39: { id: 39, name: "Water Tank", type: "landmark", x:196, y:90 },
    40: { id: 40, name: "West Gate", type: "entrance", x:591, y:151},

    //path
    41: { id: 41, type: "path", x: 500, y: 225 },
    42: { id: 42, type: "path", x: 476, y: 264 },
    43: { id: 43, type: "path", x: 556, y: 151 },
    44: { id: 44, type: "path", x: 533, y: 117 },
    45: { id: 45, type: "path", x: 427, y: 119 },
    46: { id: 46, type: "path", x: 346, y: 118 },
    47: { id: 47, type: "path", x: 339, y: 192 },
    48: { id: 48, type: "path", x: 340, y: 228 },
    49: { id: 49, type: "path", x: 303, y: 172 },
    50: { id: 50, type: "path", x: 296, y: 57 },
    51: { id: 51, type: "path", x: 172, y: 88 },
    52: { id: 52, type: "path", x: 195, y: 172 },
    53: { id: 53, type: "path", x: 199, y: 192 },
    54: { id: 54, type: "path", x: 78, y: 136 },
    55: { id: 55, type: "path", x: 92, y: 210 },
    56: { id: 56, type: "path", x: 164, y: 244 },
    57: { id: 57, type: "path", x: 215, y: 272 },
    58: { id: 58, type: "path", x: 247, y: 292 },
    59: { id: 59, type: "path", x: 277, y: 350 },
    60: { id: 60, type: "path", x: 323, y: 340 },
    61: { id: 61, type: "path", x: 355, y: 330 },
    62: { id: 62, type: "path", x: 380, y: 389 },
    63: { id: 63, type: "path", x: 412, y: 360 },
    64: { id: 64, type: "path", x: 420, y: 408 },
    65: { id: 65, type: "path", x: 464, y: 434 },
    66: { id: 66, type: "path", x: 508, y: 420 },
    67: { id: 67, type: "path", x: 539, y: 379 },
    68: { id: 68, type: "path", x: 572, y: 320 },
    69: { id: 69, type: "path", x: 565, y: 285 },
    70: { id: 70, type: "path", x: 529, y: 257 },
    71: { id: 71, type: "path", x: 167, y: 410 },
    72: { id: 72, type: "path", x: 221, y: 195 },
    73: { id: 73, type: "path", x: 304, y: 248 },
    74: { id: 74, type: "path", x: 107, y: 56 },
    75: { id: 75, type: "path", x: 284, y: 430 },
    76: { id: 76, type: "path", x: 278, y: 396 },
    77: { id: 77, type: "path", x: 184, y: 138 },
    78: { id: 78, type: "path", x: 357, y: 430 },
    79: { id: 79, type: "path", x: 322, y: 258 },
    80: { id: 80, type: "path", x: 544, y: 228 },
    81: { id: 81, type: "path", x: 368, y: 408 }  
}

export const mainCampusData = {
  nodes, edges: [
  { from: 1, to: 13, weight: calculateDistance(nodes[1], nodes[13]) },
  { from: 1, to: 73, weight: calculateDistance(nodes[1], nodes[73]) },
  { from: 1, to: 72, weight: calculateDistance(nodes[1], nodes[72]) },
  { from: 2, to: 51, weight: calculateDistance(nodes[2], nodes[51]) },
  { from: 2, to: 50, weight: calculateDistance(nodes[2], nodes[50]) },
  { from: 3, to: 27, weight: calculateDistance(nodes[3], nodes[27]) },
  { from: 3, to: 71, weight: calculateDistance(nodes[3], nodes[71]) },
  { from: 3, to: 15, weight: calculateDistance(nodes[3], nodes[15]) },
  { from: 3, to: 17, weight: calculateDistance(nodes[3], nodes[17]) },
  { from: 3, to: 75, weight: calculateDistance(nodes[3], nodes[75]) },
  { from: 3, to: 23, weight: calculateDistance(nodes[3], nodes[23]) },
  { from: 4, to: 22, weight: calculateDistance(nodes[4], nodes[22]) },
  { from: 4, to: 38, weight: calculateDistance(nodes[4], nodes[38]) },
  { from: 4, to: 32, weight: calculateDistance(nodes[4], nodes[32]) },
  { from: 4, to: 41, weight: calculateDistance(nodes[4], nodes[41]) },
  { from: 4, to: 36, weight: calculateDistance(nodes[4], nodes[36]) },
  { from: 4, to: 19, weight: calculateDistance(nodes[4], nodes[19]) },
  { from: 5, to: 48, weight: calculateDistance(nodes[5], nodes[48]) },
  { from: 5, to: 47, weight: calculateDistance(nodes[5], nodes[47]) },
  { from: 5, to: 13, weight: calculateDistance(nodes[5], nodes[13]) },
  { from: 5, to: 32, weight: calculateDistance(nodes[5], nodes[32]) },
  { from: 6, to: 55, weight: calculateDistance(nodes[6], nodes[55]) },
  { from: 6, to: 53, weight: calculateDistance(nodes[6], nodes[53]) },
  { from: 6, to: 29, weight: calculateDistance(nodes[6], nodes[29]) },
  { from: 7, to: 66, weight: calculateDistance(nodes[7], nodes[66]) },
  { from: 7, to: 67, weight: calculateDistance(nodes[7], nodes[67]) },
  { from: 8, to: 20, weight: calculateDistance(nodes[8], nodes[20]) },
  { from: 8, to: 28, weight: calculateDistance(nodes[8], nodes[28]) },
  { from: 8, to: 16, weight: calculateDistance(nodes[8], nodes[16]) },
  { from: 8, to: 48, weight: calculateDistance(nodes[8], nodes[48]) },
  { from: 8, to: 60, weight: calculateDistance(nodes[8], nodes[60]) },
  { from: 8, to: 61, weight: calculateDistance(nodes[8], nodes[61]) },
  { from: 9, to: 63, weight: calculateDistance(nodes[9], nodes[63]) },
  { from: 9, to: 42, weight: calculateDistance(nodes[9], nodes[42]) },
  { from: 9, to: 24, weight: calculateDistance(nodes[9], nodes[24]) },
  { from: 10, to: 44, weight: calculateDistance(nodes[10], nodes[44]) },
  { from: 11, to: 15, weight: calculateDistance(nodes[11], nodes[15]) },
  { from: 11, to: 23, weight: calculateDistance(nodes[11], nodes[23]) },
  { from: 11, to: 59, weight: calculateDistance(nodes[11], nodes[59]) },
  { from: 11, to: 61, weight: calculateDistance(nodes[11], nodes[61]) },
  { from: 11, to: 75, weight: calculateDistance(nodes[11], nodes[75]) },
  { from: 11, to: 81, weight: calculateDistance(nodes[11], nodes[81]) },
  { from: 12, to: 54, weight: calculateDistance(nodes[12], nodes[54]) },
  { from: 12, to: 77, weight: calculateDistance(nodes[12], nodes[77]) },
  { from: 14, to: 18, weight: calculateDistance(nodes[14], nodes[18]) },
  { from: 14, to: 17, weight: calculateDistance(nodes[14], nodes[17]) },
  { from: 14, to: 15, weight: calculateDistance(nodes[14], nodes[15]) },
  { from: 14, to: 59, weight: calculateDistance(nodes[14], nodes[59]) },
  { from: 14, to: 16, weight: calculateDistance(nodes[14], nodes[16]) },
  { from: 14, to: 58, weight: calculateDistance(nodes[14], nodes[58]) },
  { from: 15, to: 76, weight: calculateDistance(nodes[15], nodes[76]) },
  { from: 16, to: 60, weight: calculateDistance(nodes[16], nodes[60]) },
  { from: 17, to: 71, weight: calculateDistance(nodes[17], nodes[71]) },
  { from: 18, to: 57, weight: calculateDistance(nodes[18], nodes[57]) },
  { from: 18, to: 56, weight: calculateDistance(nodes[18], nodes[56]) },
  { from: 18, to: 35, weight: calculateDistance(nodes[18], nodes[35]) },
  { from: 18, to: 30, weight: calculateDistance(nodes[18], nodes[30]) },
  { from: 19, to: 41, weight: calculateDistance(nodes[19], nodes[41]) },
  { from: 19, to: 31, weight: calculateDistance(nodes[19], nodes[31]) },
  { from: 19, to: 34, weight: calculateDistance(nodes[19], nodes[34]) },
  { from: 20, to: 32, weight: calculateDistance(nodes[20], nodes[32]) },
  { from: 20, to: 48, weight: calculateDistance(nodes[20], nodes[48]) },
  { from: 20, to: 28, weight: calculateDistance(nodes[20], nodes[28]) },
  { from: 21, to: 51, weight: calculateDistance(nodes[21], nodes[51]) },
  { from: 21, to: 77, weight: calculateDistance(nodes[21], nodes[77]) },
  { from: 21, to: 52, weight: calculateDistance(nodes[21], nodes[52]) },
  { from: 23, to: 75, weight: calculateDistance(nodes[23], nodes[75]) },
  { from: 23, to: 78, weight: calculateDistance(nodes[23], nodes[78]) },
  { from: 24, to: 63, weight: calculateDistance(nodes[24], nodes[63]) },
  { from: 24, to: 24, weight: calculateDistance(nodes[24], nodes[24]) },
  { from: 25, to: 46, weight: calculateDistance(nodes[25], nodes[46]) },
  { from: 27, to: 71, weight: calculateDistance(nodes[27], nodes[71]) },
  { from: 28, to: 61, weight: calculateDistance(nodes[28], nodes[61]) },
  { from: 28, to: 36, weight: calculateDistance(nodes[28], nodes[36]) },
  { from: 28, to: 41, weight: calculateDistance(nodes[28], nodes[41]) },
  { from: 29, to: 35, weight: calculateDistance(nodes[29], nodes[35]) },
  { from: 29, to: 56, weight: calculateDistance(nodes[29], nodes[56]) },
  { from: 29, to: 55, weight: calculateDistance(nodes[29], nodes[55]) },
  { from: 30, to: 17, weight: calculateDistance(nodes[30], nodes[17]) },
  { from: 30, to: 35, weight: calculateDistance(nodes[30], nodes[35]) },
  { from: 30, to: 71, weight: calculateDistance(nodes[30], nodes[71]) },
  { from: 31, to: 7, weight: calculateDistance(nodes[31], nodes[7]) },
  { from: 31, to: 80, weight: calculateDistance(nodes[31], nodes[80]) },
  { from: 32, to: 47, weight: calculateDistance(nodes[32], nodes[47]) },
  { from: 32, to: 46, weight: calculateDistance(nodes[32], nodes[46]) },
  { from: 32, to: 28, weight: calculateDistance(nodes[32], nodes[28]) },
  { from: 33, to: 54, weight: calculateDistance(nodes[33], nodes[54]) },
  { from: 33, to: 74, weight: calculateDistance(nodes[33], nodes[74]) },
  { from: 35, to: 56, weight: calculateDistance(nodes[35], nodes[56]) },
  { from: 36, to: 41, weight: calculateDistance(nodes[36], nodes[41]) },
  { from: 37, to: 46, weight: calculateDistance(nodes[37], nodes[46]) },
  { from: 39, to: 51, weight: calculateDistance(nodes[39], nodes[51]) },
  { from: 40, to: 43, weight: calculateDistance(nodes[40], nodes[43]) },
  { from: 40, to: 44, weight: calculateDistance(nodes[40], nodes[44]) },
  { from: 41, to: 42, weight: calculateDistance(nodes[41], nodes[42]) },
  { from: 42, to: 70, weight: calculateDistance(nodes[42], nodes[70]) },
  { from: 42, to: 36, weight: calculateDistance(nodes[42], nodes[36]) },
  { from: 43, to: 44, weight: calculateDistance(nodes[43], nodes[44]) },
  { from: 44, to: 45, weight: calculateDistance(nodes[44], nodes[45]) },
  { from: 45, to: 46, weight: calculateDistance(nodes[45], nodes[46]) },
  { from: 46, to: 47, weight: calculateDistance(nodes[46], nodes[47]) },
  { from: 47, to: 49, weight: calculateDistance(nodes[47], nodes[49]) },
  { from: 48, to: 79, weight: calculateDistance(nodes[48], nodes[79]) },
  { from: 49, to: 50, weight: calculateDistance(nodes[49], nodes[50]) },
  { from: 51, to: 74, weight: calculateDistance(nodes[51], nodes[74]) },
  { from: 51, to: 77, weight: calculateDistance(nodes[51], nodes[77]) },
  { from: 52, to: 53, weight: calculateDistance(nodes[52], nodes[53]) },
  { from: 52, to: 77, weight: calculateDistance(nodes[52], nodes[77]) },
  { from: 53, to: 56, weight: calculateDistance(nodes[53], nodes[56]) },
  { from: 53, to: 72, weight: calculateDistance(nodes[53], nodes[72]) },
  { from: 53, to: 57, weight: calculateDistance(nodes[53], nodes[57]) },
  { from: 54, to: 55, weight: calculateDistance(nodes[54], nodes[55]) },
  { from: 56, to: 57, weight: calculateDistance(nodes[56], nodes[57]) },
  { from: 57, to: 58, weight: calculateDistance(nodes[57], nodes[58]) },
  { from: 58, to: 79, weight: calculateDistance(nodes[58], nodes[79]) },
  { from: 59, to: 60, weight: calculateDistance(nodes[59], nodes[60]) },
  { from: 59, to: 76, weight: calculateDistance(nodes[59], nodes[76]) },
  { from: 60, to: 61, weight: calculateDistance(nodes[60], nodes[61]) },
  { from: 61, to: 62, weight: calculateDistance(nodes[61], nodes[62]) },
  { from: 62, to: 63, weight: calculateDistance(nodes[62], nodes[63]) },
  { from: 62, to: 81, weight: calculateDistance(nodes[62], nodes[81]) },
  { from: 63, to: 64, weight: calculateDistance(nodes[63], nodes[64]) },
  { from: 64, to: 65, weight: calculateDistance(nodes[64], nodes[65]) },
  { from: 65, to: 66, weight: calculateDistance(nodes[65], nodes[66]) },
  { from: 66, to: 67, weight: calculateDistance(nodes[66], nodes[67]) },
  { from: 67, to: 68, weight: calculateDistance(nodes[67], nodes[68]) },
  { from: 68, to: 69, weight: calculateDistance(nodes[68], nodes[69]) },
  { from: 69, to: 70, weight: calculateDistance(nodes[69], nodes[70]) },
  { from: 70, to: 80, weight: calculateDistance(nodes[70], nodes[80]) },
  { from: 75, to: 76, weight: calculateDistance(nodes[75], nodes[76]) },
  { from: 78, to: 81, weight: calculateDistance(nodes[78], nodes[81]) },
  { from: 80, to: 41, weight: calculateDistance(nodes[80], nodes[41]) }
]
}
// export const mainCampusData = {
//   nodes: {
//     1: { id: 1, name: "Amphitheater", type: "building" },
//     2: { id: 2, name: "Banda Kawayan, Sining Lahi Headquarters", type: "building" },
//     3: { id: 3, name: "Building and Grounds Maintenance Office", type: "building" },
//     4: { id: 4, name: "Catwalk", type: "path" },
//     5: { id: 5, name: "Centennial Monument", type: "landmark" },
//     6: { id: 6, name: "Charlie del Rosario Student Development Center", type: "building" },
//     7: { id: 7, name: "East Gate", type: "entrance" },
//     8: { id: 8, name: "Flag Pole", type: "landmark" },
//     9: { id: 9, name: "Grandstand", type: "building" },
//     10: { id: 10, name: "Gymnasium", type: "building" },
//     11: { id: 11, name: "Interfaith Chapel", type: "building" },
//     12: { id: 12, name: "Laboratory High School", type: "building" },
//     13: { id: 13, name: "Lagoon", type: "landmark" },
//     14: { id: 14, name: "Main Building - Dome", type: "building" },
//     15: { id: 15, name: "Main Building - East Wing", type: "building" },
//     16: { id: 16, name: "Main Building - North Wing", type: "building" },
//     17: { id: 17, name: "Main Building - South Wing", type: "building" },
//     18: { id: 18, name: "Main Building - West Wing", type: "building" },
//     19: { id: 19, name: "Main Gate", type: "entrance" },
//     20: { id: 20, name: "Nemesio E. Prudente Freedom Park", type: "landmark" },
//     21: { id: 21, name: "Ninoy Aquino Library and Learning Resources Center", type: "building" },
//     22: { id: 22, name: "Open Court", type: "landmark" },
//     23: { id: 23, name: "Open University / Nontraditional Studies Program", type: "building" },
//     24: { id: 24, name: "Oval Open Field", type: "landmark" },
//     25: { id: 25, name: "P.E. Building", type: "building" },
//     26: { id: 26, name: "Pasig River", type: "landmark" },
//     27: { id: 27, name: "Pasig River Ferry (Sta. Mesa Station)", type: "entrance" },
//     28: { id: 28, name: "Proposed Access Road", type: "path" },
//     29: { id: 29, name: "Public Restroom", type: "building" },
//     30: { id: 30, name: "PUP Linear Park", type: "landmark" },
//     31: { id: 31, name: "PUP Mural and the Shrine of Heroism", type: "landmark" },
//     32: { id: 32, name: "PUP Obelisk (and the Mabini Monument)", type: "landmark" },
//     33: { id: 33, name: "PUP Property Building and Motorpool", type: "building" },
//     34: { id: 34, name: "PUP Pylon", type: "landmark" },
//     35: { id: 35, name: "Sampaguita Building", type: "building" },
//     36: { id: 36, name: "Student Pavilion", type: "building" },
//     37: { id: 37, name: "Swimming Pool", type: "landmark" },
//     38: { id: 38, name: "Tennis Open Court", type: "landmark" },
//     39: { id: 39, name: "Water Tank", type: "landmark" },
//     40: { id: 40, name: "West Gate", type: "entrance" }
//   },
//   edges: [
//     // MAIN ENTRANCE AREA
//     { from: 19, to: 4, weight: 10 },   // Main Gate to Catwalk (primary entrance path)
//     { from: 4, to: 19, weight: 10 },   // Catwalk to Main Gate (primary exit path)
//     { from: 4, to: 36, weight: 15 },   // Catwalk to Student Pavilion
//     { from: 36, to: 5, weight: 25 },   // Student Pavilion to Centennial Monument
//     { from: 19, to: 31, weight: 35 },  // Main Gate to Mural area
//     { from: 32, to: 31, weight: 20 },  // Obelisk to Mural (close proximity)
//     { from: 32, to: 36, weight: 25 },  // Obelisk to Student Pavilion
//     { from: 31, to: 36, weight: 20 },  // Mural to Student Pavilion
//     { from: 32, to: 8, weight: 40 },   // Obelisk to Flag Pole
   
//     // MAIN BUILDING COMPLEX
//     { from: 8, to: 14, weight: 35 },   // Flag Pole to Main Building Dome
//     { from: 14, to: 15, weight: 20 },  // Dome to East Wing
//     { from: 14, to: 16, weight: 20 },  // Dome to North Wing
//     { from: 14, to: 17, weight: 20 },  // Dome to South Wing
//     { from: 14, to: 18, weight: 20 },  // Dome to West Wing
//     { from: 15, to: 16, weight: 25 },  // East Wing to North Wing
//     { from: 16, to: 18, weight: 25 },  // North Wing to West Wing
//     { from: 17, to: 18, weight: 25 },  // South Wing to West Wing
//     { from: 15, to: 17, weight: 25 },  // East Wing to South Wing
   
//     // LAGOON AREA
//     { from: 13, to: 1, weight: 15 },   // Lagoon to Amphitheater
//     { from: 13, to: 5, weight: 20 },   // Lagoon to Centennial Monument
//     { from: 13, to: 14, weight: 40 },  // Lagoon to Main Building Dome
//     { from: 13, to: 11, weight: 30 },  // Lagoon to Interfaith Chapel
//     { from: 13, to: 20, weight: 35 },  // Lagoon to Freedom Park
//     { from: 5, to: 1, weight: 20 },    // Centennial Monument to Amphitheater
   
//     // FREEDOM PARK AREA
//     { from: 20, to: 9, weight: 35 },   // Freedom Park to Grandstand
//     { from: 20, to: 1, weight: 40 },   // Freedom Park to Amphitheater
//     { from: 9, to: 1, weight: 25 },    // Grandstand to Amphitheater
//     { from: 20, to: 29, weight: 30 },  // Freedom Park to Public Restroom
//     { from: 20, to: 8, weight: 45 },   // Freedom Park to Flag Pole
   
//     // EASTERN AREA
//     { from: 7, to: 21, weight: 40 },   // East Gate to Library
//     { from: 21, to: 15, weight: 45 },  // Library to East Wing
//     { from: 21, to: 11, weight: 25 },  // Library to Interfaith Chapel
//     { from: 21, to: 12, weight: 40 },  // Library to Laboratory High School
//     { from: 11, to: 15, weight: 25 },  // Chapel to East Wing
//     { from: 12, to: 21, weight: 35 },  // Lab High School to Library
   
//     // NORTHERN AREA
//     { from: 16, to: 22, weight: 30 },  // North Wing to Open Court
//     { from: 22, to: 38, weight: 25 },  // Open Court to Tennis Court
//     { from: 22, to: 39, weight: 30 },  // Open Court to Water Tank
//     { from: 38, to: 39, weight: 20 },  // Tennis Court to Water Tank
//     { from: 39, to: 40, weight: 25 },  // Water Tank to West Gate
   
//     // UPPER NORTHERN AREA
//     { from: 2, to: 12, weight: 30 },   // Banda Kawayan to Lab High School
//     { from: 2, to: 21, weight: 45 },   // Banda Kawayan to Library
//     { from: 2, to: 25, weight: 35 },   // Banda Kawayan to P.E. Building
//     { from: 25, to: 10, weight: 30 },  // P.E. Building to Gymnasium
//     { from: 10, to: 37, weight: 25 },  // Gymnasium to Swimming Pool
//     { from: 37, to: 38, weight: 30 },  // Swimming Pool to Tennis Court
   
//     // MAINTENANCE AND CATWALK AREA
//     { from: 3, to: 27, weight: 25 },   // Maintenance Office to Ferry Station
//     { from: 4, to: 34, weight: 20 },   // Catwalk to Pylon
//     { from: 4, to: 33, weight: 25 },   // Catwalk to Property Building
//     { from: 4, to: 32, weight: 30 },   // Catwalk to Obelisk
//     { from: 4, to: 19, weight: 35 },   // Catwalk to Main Gate
//     { from: 34, to: 33, weight: 20 },  // Pylon to Property Building
//     { from: 33, to: 32, weight: 30 },  // Property Building to Obelisk
   
//     // WESTERN SIDE CONNECTIONS
//     { from: 40, to: 39, weight: 25 },  // West Gate to Water Tank
//     { from: 34, to: 6, weight: 30 },   // Pylon to Charlie del Rosario Center
//     { from: 6, to: 30, weight: 25 },   // Charlie del Rosario to Linear Park
//     { from: 30, to: 35, weight: 20 },  // Linear Park to Sampaguita Building
//     { from: 35, to: 18, weight: 40 },  // Sampaguita to West Wing
   
//     // SOUTHERN AREA
//     { from: 17, to: 24, weight: 30 },  // South Wing to Oval Field
//     { from: 24, to: 23, weight: 25 },  // Oval Field to Open University
//     { from: 23, to: 3, weight: 35 },   // Open University to Maintenance Office
//     { from: 24, to: 9, weight: 45 },   // Oval Field to Grandstand
   
//     // PASIG RIVER AREA
//     { from: 30, to: 26, weight: 25 },  // Linear Park to Pasig River
//     { from: 26, to: 27, weight: 20 },  // Pasig River to Ferry Station
   
//     // PROPOSED ACCESS ROAD
//     { from: 28, to: 24, weight: 30 },  // Proposed Access Road to Oval Field
//     { from: 28, to: 9, weight: 25 },   // Proposed Access Road to Grandstand
   
//     // CROSS-CAMPUS MAJOR PATHWAYS
//     { from: 14, to: 20, weight: 50 },  // Main Building to Freedom Park
//     { from: 21, to: 32, weight: 45 },  // Library to Obelisk
//     { from: 10, to: 5, weight: 35 },   // Gymnasium to Centennial Monument
//     { from: 5, to: 10, weight: 35 },   // Centennial Monument to Gymnasium
   
//     // ADDITIONAL LOGICAL CONNECTIONS
//     { from: 36, to: 35, weight: 25 },  // Student Pavilion to Sampaguita
//     { from: 35, to: 6, weight: 30 },   // Sampaguita to Charlie del Rosario
//     { from: 11, to: 17, weight: 30 },  // Interfaith Chapel to South Wing
//     { from: 23, to: 24, weight: 20 }   // Open University to Oval Field
//   ]
// };


// COC Building Graph Data
export const cocData = {
  nodes: {
    1: { id: 1, name: "COC Building Entrance", type: "entrance", floor: 1 },
    2: { id: 2, name: "Communications Society", type: "room", floor: 1 },
    3: { id: 3, name: "Toilet (Left Wing 1st Floor)", type: "facility", floor: 1 },
    4: { id: 4, name: "Department of Broadcast Communication", type: "office", floor: 1 },
    5: { id: 5, name: "Office of the College Dean", type: "office", floor: 1 },
    6: { id: 6, name: "Faculty Room (1st Floor)", type: "room", floor: 1 },
    7: { id: 7, name: "Lecture Room 101", type: "classroom", floor: 1 },
    8: { id: 8, name: "Student Council Room", type: "room", floor: 1 },
    9: { id: 9, name: "Toilet (Right Wing 1st Floor)", type: "facility", floor: 1 },
    10: { id: 10, name: "Dental Clinic", type: "clinic", floor: 1 },
    11: { id: 11, name: "Lecture Room 105", type: "classroom", floor: 1 },
    12: { id: 12, name: "Lecture Room 106", type: "classroom", floor: 1 },
    13: { id: 13, name: "Lecture Room 107", type: "classroom", floor: 1 },
    14: { id: 14, name: "Female Toilet (Bottom Wing)", type: "facility", floor: 1 },
    15: { id: 15, name: "Male Toilet (Bottom Wing)", type: "facility", floor: 1 },
    16: { id: 16, name: "Medical Clinic", type: "clinic", floor: 1 },
    17: { id: 17, name: "Lecture Room 110", type: "classroom", floor: 1 },
    18: { id: 18, name: "Lecture Room 111", type: "classroom", floor: 1 },
    19: { id: 19, name: "Lecture Room 112", type: "classroom", floor: 1 },
    20: { id: 20, name: "Lecture Room 113", type: "classroom", floor: 1 },
    21: { id: 21, name: "Lecture Room 114", type: "classroom", floor: 1 },
    22: { id: 22, name: "Main Stairs (Left)", type: "stairs", floor: "1-2" },
    23: { id: 23, name: "Main Stairs (Right)", type: "stairs", floor: "1-2" },
    24: { id: 24, name: "Side Stairs (Left)", type: "stairs", floor: "1-2" },
    25: { id: 25, name: "Side Stairs (Right)", type: "stairs", floor: "1-2" },
    26: { id: 26, name: "Main Hallway (1st Floor)", type: "hallway", floor: 1 },
    27: { id: 27, name: "Bottom Hallway (1st Floor)", type: "hallway", floor: 1 },
  // Second Floor Nodes (28-50)
    28: { id: 28, name: "Main Stairs (Left) - 2nd Floor", type: "stairs", floor: "1-2" },
    29: { id: 29, name: "Main Stairs (Right) - 2nd Floor", type: "stairs", floor: "1-2" },
    30: { id: 30, name: "Side Stairs (Left) - 2nd Floor", type: "stairs", floor: "1-2" },
    31: { id: 31, name: "Side Stairs (Right) - 2nd Floor", type: "stairs", floor: "1-2" },
    32: { id: 32, name: "Main Hallway (2nd Floor)", type: "hallway", floor: 2 },
    33: { id: 33, name: "Bottom Hallway (2nd Floor)", type: "hallway", floor: 2 },
    34: { id: 34, name: "Lecture Room", type: "classroom", floor: 2 },
    35: { id: 35, name: "Lecture Room", type: "classroom", floor: 2 },
    36: { id: 36, name: "DAPR", type: "office", floor: 2 },
    37: { id: 37, name: "Faculty OCT", type: "room", floor: 2 },
    38: { id: 38, name: "Audio Visual Room (AVR)", type: "room", floor: 2 },
    39: { id: 39, name: "Unknown Room (Top Right)", type: "room", floor: 2 },
    40: { id: 40, name: "Student Area", type: "room", floor: 2 },
    41: { id: 41, name: "DOCR Communication Research", type: "office", floor: 2 },
    42: { id: 42, name: "Library", type: "library", floor: 2 },
    43: { id: 43, name: "Toilet (Bottom Left)", type: "facility", floor: 2 },
    44: { id: 44, name: "DACOM Room", type: "office", floor: 2 },
    45: { id: 45, name: "Main Input", type: "facility", floor: 2 },
    46: { id: 46, name: "Unknown Room (Bottom Center)", type: "room", floor: 2 },
    47: { id: 47, name: "NEWS Room", type: "room", floor: 2 },
    48: { id: 48, name: "TV Studio", type: "studio", floor: 2 },
    49: { id: 49, name: "Lecture Room 209", type: "classroom", floor: 2 },
    50: { id: 50, name: "Lecture Room 210", type: "classroom", floor: 2 },
    51: { id: 51, name: "Lecture Room 211", type: "classroom", floor: 2 },
    52: { id: 52, name: "Theater Building Entrance", type: "entrance", floor: 1 },
  },
  edges: [
    // FIRST FLOOR EDGES
    // Entrance and central hallway
    { from: 1, to: 26, weight: 5 },  // Entrance to main hallway (direct, shortest)
    { from: 1, to: 27, weight: 8 },  // Entrance to bottom hallway (optional, slightly longer)
    { from: 27, to: 26, weight: 10 }, // Bottom hallway to main hallway


    // Left wing
    { from: 26, to: 2, weight: 10 }, // Main hallway to Communications Society
    { from: 2, to: 3, weight: 5 },   // Communications Society to Toilet (Left)
    { from: 2, to: 4, weight: 5 },   // Communications Society to Dept. of Broadcast Comm
    { from: 4, to: 5, weight: 5 },   // Dept. of Broadcast Comm to Dean's Office
    { from: 5, to: 6, weight: 5 },   // Dean's Office to Faculty Room


    // Right wing
    { from: 26, to: 7, weight: 10 }, // Main hallway to Lecture Room 101
    { from: 7, to: 8, weight: 5 },   // Lecture Room 101 to Student Council Room
    { from: 8, to: 9, weight: 5 },   // Student Council Room to Toilet (Right)


    // Central vertical connections
    { from: 26, to: 10, weight: 10 }, // Main hallway to Dental Clinic


    // Bottom row of rooms (left to right)
    { from: 27, to: 11, weight: 8 },  // Bottom hallway to Lecture Room 105
    { from: 11, to: 12, weight: 5 },  // 105 to 106
    { from: 12, to: 13, weight: 5 },  // 106 to 107
    { from: 13, to: 14, weight: 5 },  // 107 to Female Toilet
    { from: 14, to: 15, weight: 5 },  // Female Toilet to Male Toilet
    { from: 15, to: 16, weight: 5 },  // Male Toilet to Medical Clinic
    { from: 16, to: 27, weight: 8 },  // Medical Clinic to bottom hallway (loop)


    // Bottom row continues to right
    { from: 16, to: 17, weight: 8 },  // Medical Clinic to Lecture Room 110
    { from: 17, to: 18, weight: 5 },  // 110 to 111
    { from: 18, to: 19, weight: 5 },  // 111 to 112
    { from: 19, to: 20, weight: 5 },  // 112 to 113
    { from: 20, to: 21, weight: 5 },  // 113 to 114
    { from: 21, to: 27, weight: 8 },  // 114 to bottom hallway (loop)


    // STAIRS CONNECTIONS (1st to 2nd floor)
    { from: 22, to: 28, weight: 10 }, // Main Stairs Left (1st to 2nd)
    { from: 23, to: 29, weight: 10 }, // Main Stairs Right (1st to 2nd)
    { from: 24, to: 30, weight: 10 }, // Side Stairs Left (1st to 2nd)
    { from: 25, to: 31, weight: 10 }, // Side Stairs Right (1st to 2nd)


    // Connect stairs to main hallway (1st floor)
    { from: 26, to: 22, weight: 5 },  // Main hallway to Main Stairs Left
    { from: 26, to: 23, weight: 5 },  // Main hallway to Main Stairs Right
    { from: 27, to: 24, weight: 5 },  // Bottom hallway to Side Stairs Left
    { from: 27, to: 25, weight: 5 },  // Bottom hallway to Side Stairs Right


    // SECOND FLOOR EDGES
    // Connect stairs to hallways (2nd floor)
    { from: 28, to: 32, weight: 5 },  // Main Stairs Left to Main Hallway (2nd)
    { from: 29, to: 32, weight: 5 },  // Main Stairs Right to Main Hallway (2nd)
    { from: 30, to: 33, weight: 5 },  // Side Stairs Left to Bottom Hallway (2nd)
    { from: 31, to: 33, weight: 5 },  // Side Stairs Right to Bottom Hallway (2nd)


    // Connect hallways (2nd floor)
    { from: 32, to: 33, weight: 10 }, // Main hallway to Bottom hallway (2nd floor)


    // Top wing (2nd floor) - Left side
    { from: 32, to: 34, weight: 8 },  // Main hallway to Lecture Room (left)
    { from: 34, to: 35, weight: 5 },  // Lecture Room to Lecture Room
    { from: 32, to: 36, weight: 10 }, // Main hallway to DAPR
    { from: 36, to: 37, weight: 5 },  // DAPR to Faculty OCT


    // Top wing (2nd floor) - Right side
    { from: 32, to: 38, weight: 10 }, // Main hallway to AVR
    { from: 38, to: 39, weight: 5 },  // AVR to Unknown Room
    { from: 32, to: 40, weight: 8 },  // Main hallway to Student Area
    { from: 40, to: 41, weight: 5 },  // Student Area to DOCR Communication Research


    // Bottom wing (2nd floor) - Left to right
    { from: 33, to: 42, weight: 8 },  // Bottom hallway to Library
    { from: 42, to: 43, weight: 5 },  // Library to Toilet
    { from: 43, to: 44, weight: 5 },  // Toilet to DACOM Room
    { from: 44, to: 45, weight: 5 },  // DACOM Room to Main Input
    { from: 45, to: 46, weight: 5 },  // Main Input to Unknown Room
    { from: 46, to: 47, weight: 5 },  // Unknown Room to NEWS Room
    { from: 47, to: 48, weight: 5 },  // NEWS Room to TV Studio
    { from: 48, to: 49, weight: 5 },  // TV Studio to Lecture Room 209
    { from: 49, to: 50, weight: 5 },  // Lecture Room 209 to 210
    { from: 50, to: 51, weight: 5 },  // Lecture Room 210 to 211
    { from: 51, to: 33, weight: 8 },  // Lecture Room 211 back to bottom hallway (loop)


    // THEATER BUILDING CONNECTION
    // Direct connection from COC to Theater Building entrance
    { from: 26, to: 52, weight: 15 }, // Main hallway to Theater Building Entrance (longer walk outside)
    { from: 7, to: 52, weight: 12 },  // Lecture Room 101 to Theater Entrance (closer route)
    { from: 10, to: 52, weight: 12 }, // Dental Clinic to Theater Entrance (alternative route)
  ]
};


// CEA Building Graph Data
export const ceaData = {
  nodes: {
    // Ground Floor / First Floor - Entrance and Main Areas
    1: { id: 1, name: "CEA Building Entrance", type: "entrance", floor: 1 },
    2: { id: 2, name: "Exit", type: "exit", floor: 1 },
    3: { id: 3, name: "Main Hallway (1st Floor)", type: "hallway", floor: 1 },
    4: { id: 4, name: "Central Corridor (1st Floor)", type: "hallway", floor: 1 },
   
    // First Floor Rooms
    5: { id: 5, name: "Room 100", type: "classroom", floor: 1 },
    6: { id: 6, name: "Room 101", type: "classroom", floor: 1 },
    7: { id: 7, name: "Room 102", type: "classroom", floor: 1 },
    8: { id: 8, name: "Room 103A", type: "classroom", floor: 1 },
    9: { id: 9, name: "Room 103B", type: "classroom", floor: 1 },
    10: { id: 10, name: "Room 104", type: "classroom", floor: 1 },
    11: { id: 11, name: "Room 105A", type: "classroom", floor: 1 },
    12: { id: 12, name: "Room 105B", type: "classroom", floor: 1 },
    13: { id: 13, name: "Room 106", type: "classroom", floor: 1 },
    14: { id: 14, name: "Tool Room", type: "facility", floor: 1 },
    15: { id: 15, name: "Room 107A", type: "classroom", floor: 1 },
    16: { id: 16, name: "Room 107B", type: "classroom", floor: 1 },
    17: { id: 17, name: "Room 108", type: "classroom", floor: 1 },
    18: { id: 18, name: "Room 109", type: "classroom", floor: 1 },
    19: { id: 19, name: "Room 110", type: "classroom", floor: 1 },
    20: { id: 20, name: "Room 111", type: "classroom", floor: 1 },
    21: { id: 21, name: "Room 112", type: "classroom", floor: 1 },
    22: { id: 22, name: "Civil Engineering Library", type: "library", floor: 1 },
    23: { id: 23, name: "Civil Engineering Dean's Office", type: "office", floor: 1 },
    24: { id: 24, name: "Civil Engineering Chairperson's Office", type: "office", floor: 1 },
    25: { id: 25, name: "Accreditation Center", type: "office", floor: 1 },
    26: { id: 26, name: "Female Toilet (1st Floor)", type: "facility", floor: 1 },
    27: { id: 27, name: "Male Toilet (1st Floor)", type: "facility", floor: 1 },
   
    // First Floor Open Courts and Stairs
    28: { id: 28, name: "Open Court (Left)", type: "open_area", floor: 1 },
    29: { id: 29, name: "Open Court (Right)", type: "open_area", floor: 1 },
    30: { id: 30, name: "Stairs (Left)", type: "stairs", floor: "1-2" },
    31: { id: 31, name: "Stairs (Center Left)", type: "stairs", floor: "1-2" },
    32: { id: 32, name: "Stairs (Center Right)", type: "stairs", floor: "1-2" },
    33: { id: 33, name: "Stairs (Right)", type: "stairs", floor: "1-2" },
   
    // Second Floor
    34: { id: 34, name: "Main Hallway (2nd Floor)", type: "hallway", floor: 2 },
    35: { id: 35, name: "Central Corridor (2nd Floor)", type: "hallway", floor: 2 },
   
    // Second Floor Rooms
    36: { id: 36, name: "CAD Laboratory Room 200", type: "laboratory", floor: 2 },
    37: { id: 37, name: "Architecture Lecture Room 201", type: "classroom", floor: 2 },
    38: { id: 38, name: "Lecture Room 201 Extension", type: "classroom", floor: 2 },
    39: { id: 39, name: "Visual Techniques Room 202", type: "classroom", floor: 2 },
    40: { id: 40, name: "Lecture Room 203", type: "classroom", floor: 2 },
    41: { id: 41, name: "Clinic Room 204", type: "clinic", floor: 2 },
    42: { id: 42, name: "I.E. Lecture Room 205", type: "classroom", floor: 2 },
    43: { id: 43, name: "Mechanical Drafting Room 3 - 206", type: "classroom", floor: 2 },
    44: { id: 44, name: "Mechanical Drafting Room 2 - 207", type: "classroom", floor: 2 },
    45: { id: 45, name: "Mechanical Drafting Room 1 - 208", type: "classroom", floor: 2 },
    46: { id: 46, name: "Classroom 209B", type: "classroom", floor: 2 },
    47: { id: 47, name: "Manufacturing Laboratory Room 209", type: "laboratory", floor: 2 },
    48: { id: 48, name: "Industrial Engineering and Printing Laboratory Room 210", type: "laboratory", floor: 2 },
    49: { id: 49, name: "Multi-Media Room 211", type: "classroom", floor: 2 },
    50: { id: 50, name: "CAFA Office Room 212", type: "office", floor: 2 },
    51: { id: 51, name: "Architecture Drafting Room 1 - 213", type: "classroom", floor: 2 },
    52: { id: 52, name: "Architecture Drafting Room 2 - 214", type: "classroom", floor: 2 },
    53: { id: 53, name: "Architecture Drafting Room 3 - 215", type: "classroom", floor: 2 },
    54: { id: 54, name: "Time and Motion Laboratory 221", type: "laboratory", floor: 2 },
    55: { id: 55, name: "Electrical Engineering Department Office", type: "office", floor: 2 },
    56: { id: 56, name: "Architecture Department Office", type: "office", floor: 2 },
    57: { id: 57, name: "Civil Engineering Department Office", type: "office", floor: 2 },
    58: { id: 58, name: "Mechanical Engineering Department Office", type: "office", floor: 2 },
    59: { id: 59, name: "IE Department Office", type: "office", floor: 2 },
    60: { id: 60, name: "Stock Room", type: "facility", floor: 2 },
    61: { id: 61, name: "Tool Room", type: "facility", floor: 2 },
    62: { id: 62, name: "Dark Room", type: "facility", floor: 2 },
    63: { id: 63, name: "Power Room", type: "facility", floor: 2 },
    64: { id: 64, name: "Female Toilet (2nd Floor)", type: "facility", floor: 2 },
    65: { id: 65, name: "Male Toilet (2nd Floor)", type: "facility", floor: 2 },
    66: { id: 66, name: "Open Court (Left 2nd Floor)", type: "open_area", floor: 2 },
    67: { id: 67, name: "Open Court (Right 2nd Floor)", type: "open_area", floor: 2 },
    68: { id: 68, name: "Deck on Second Floor", type: "open_area", floor: 2 },
   
    // Third Floor
    69: { id: 69, name: "Main Hallway (3rd Floor)", type: "hallway", floor: 3 },
    70: { id: 70, name: "Central Corridor (3rd Floor)", type: "hallway", floor: 3 },
   
    // Third Floor Rooms
    71: { id: 71, name: "CPE Multimedia Room 300", type: "classroom", floor: 3 },
    72: { id: 72, name: "Computer Engineering Laboratory Office 301", type: "office", floor: 3 },
    73: { id: 73, name: "Computer Engineering Lecture Room 302", type: "classroom", floor: 3 },
    74: { id: 74, name: "Center for Industrial Electronics Technology Room 2 - 303B", type: "laboratory", floor: 3 },
    75: { id: 75, name: "Center for Industrial Electronics Technology Room 1 - 303A", type: "laboratory", floor: 3 },
    76: { id: 76, name: "Advanced Technologies and Multimedia Center 304B", type: "laboratory", floor: 3 },
    77: { id: 77, name: "Office of the Laboratory Head Electronics Engineering Department 304A", type: "office", floor: 3 },
    78: { id: 78, name: "SMART Wireless Laboratory 305A", type: "laboratory", floor: 3 },
    79: { id: 79, name: "Communications Engineering Laboratory 305B", type: "laboratory", floor: 3 },
    80: { id: 80, name: "Electronics Engineering Lecture Room 306A", type: "classroom", floor: 3 },
    81: { id: 81, name: "Electronics Engineering Lecture Room 306B", type: "classroom", floor: 3 },
    82: { id: 82, name: "ECE Library, Research and Extension Center 307", type: "library", floor: 3 },
    83: { id: 83, name: "EE Automatic Control Laboratory 308", type: "laboratory", floor: 3 },
    84: { id: 84, name: "Computer Engineering Lecture Room 310", type: "classroom", floor: 3 },
    85: { id: 85, name: "Artificial Intelligence Laboratory Room 311", type: "laboratory", floor: 3 },
    86: { id: 86, name: "Computer Engineering Laboratory Room 312", type: "laboratory", floor: 3 },
    87: { id: 87, name: "Computer Engineering Laboratory Room 313", type: "laboratory", floor: 3 },
    88: { id: 88, name: "EMERSON Laboratory Room 314", type: "laboratory", floor: 3 },
    89: { id: 89, name: "Computer Engineering Lecture Room 315", type: "laboratory", floor: 3 },
    90: { id: 90, name: "Computer Engineering Lecture Room 316", type: "classroom", floor: 3 },
    91: { id: 91, name: "Sensors and Mechatronics Laboratory 318", type: "laboratory", floor: 3 },
    92: { id: 92, name: "Accreditation Center 319", type: "office", floor: 3 },
    93: { id: 93, name: "Faculty Checker 320", type: "office", floor: 3 },
    94: { id: 94, name: "Office of the Chairperson Computer Engineering Department 321", type: "office", floor: 3 },
    95: { id: 95, name: "Office of the Chairperson Electronics Engineering Department 322", type: "office", floor: 3 },
    96: { id: 96, name: "Office of the Chairperson Engineering Sciences Department 323", type: "office", floor: 3 },
    97: { id: 97, name: "Female Toilet (3rd Floor)", type: "facility", floor: 3 },
    98: { id: 98, name: "Male Toilet (3rd Floor)", type: "facility", floor: 3 },
    99: { id: 99, name: "Tool Room (3rd Floor)", type: "facility", floor: 3 },
    100: { id: 100, name: "Open Court (Left 3rd Floor)", type: "open_area", floor: 3 },
    101: { id: 101, name: "Open Court (Right 3rd Floor)", type: "open_area", floor: 3 },
   
    // Fourth Floor
    102: { id: 102, name: "Main Hallway (4th Floor)", type: "hallway", floor: 4 },
    103: { id: 103, name: "Central Corridor (4th Floor)", type: "hallway", floor: 4 },
   
    // Fourth Floor Rooms
    104: { id: 104, name: "Chemical Prep Room 400", type: "laboratory", floor: 4 },
    105: { id: 105, name: "Faculty Center 401", type: "office", floor: 4 },
    106: { id: 106, name: "Extension Services and Community Involvement 402", type: "office", floor: 4 },
    107: { id: 107, name: "Student Council Office 403", type: "office", floor: 4 },
    108: { id: 108, name: "Gen. Physics Lab 2 - 404", type: "laboratory", floor: 4 },
    109: { id: 109, name: "Gen. Physics Lab 2 - 405", type: "laboratory", floor: 4 },
    110: { id: 110, name: "Lecture Room 406", type: "classroom", floor: 4 },
    111: { id: 111, name: "Lecture Room 407", type: "classroom", floor: 4 },
    112: { id: 112, name: "Electrical Fundamental Lab 2 - 408", type: "laboratory", floor: 4 },
    113: { id: 113, name: "Electrical Fundamental Lab 1 - 409B", type: "laboratory", floor: 4 },
    114: { id: 114, name: "Electrical Fundamental Lab 2 - 409A", type: "laboratory", floor: 4 },
    115: { id: 115, name: "Lecture Room 411", type: "classroom", floor: 4 },
    116: { id: 116, name: "Lecture Room 412", type: "classroom", floor: 4 },
    117: { id: 117, name: "Lecture Room 413", type: "classroom", floor: 4 },
    118: { id: 118, name: "Lecture Room 414", type: "classroom", floor: 4 },
    119: { id: 119, name: "Lecture Room 415", type: "classroom", floor: 4 },
    120: { id: 120, name: "Lecture Room 416", type: "classroom", floor: 4 },
    121: { id: 121, name: "Lecture Room 417", type: "classroom", floor: 4 },
    122: { id: 122, name: "Lecture Room 418", type: "classroom", floor: 4 },
    123: { id: 123, name: "Gen. Chemistry Lab A 419", type: "laboratory", floor: 4 },
    124: { id: 124, name: "Lab Equipment Room 420", type: "facility", floor: 4 },
    125: { id: 125, name: "Gen. Chemistry Lab B 421", type: "laboratory", floor: 4 },
    126: { id: 126, name: "Natural Science Laboratory Office 422", type: "office", floor: 4 },
    127: { id: 127, name: "Department of Natural Science Faculty Room 421", type: "office", floor: 4 },
    128: { id: 128, name: "Laboratory Equipment Room", type: "facility", floor: 4 },
    129: { id: 129, name: "Spectrum Office", type: "office", floor: 4 },
    130: { id: 130, name: "CoE 300 Library", type: "library", floor: 4 },
    131: { id: 131, name: "Library", type: "library", floor: 4 },
    132: { id: 132, name: "A V R", type: "facility", floor: 4 },
    133: { id: 133, name: "Power Room (4th Floor)", type: "facility", floor: 4 },
    134: { id: 134, name: "Female Toilet (4th Floor)", type: "facility", floor: 4 },
    135: { id: 135, name: "Male Toilet (4th Floor)", type: "facility", floor: 4 },
    136: { id: 136, name: "Open Court (Left 4th Floor)", type: "open_area", floor: 4 },
    137: { id: 137, name: "Open Court (Center 4th Floor)", type: "open_area", floor: 4 },
    138: { id: 138, name: "Open Court (Right 4th Floor)", type: "open_area", floor: 4 },
   
    // Stairs connecting all floors
    139: { id: 139, name: "Main Stairs (2-3)", type: "stairs", floor: "2-3" },
    140: { id: 140, name: "Main Stairs (3-4)", type: "stairs", floor: "3-4" },
  },
  edges: [
    // First Floor Main Connections
    { from: 1, to: 3, weight: 5 },   // Entrance to main hallway
    { from: 1, to: 2, weight: 3 },   // Entrance to exit
    { from: 3, to: 4, weight: 8 },   // Main hallway to central corridor
   
    // Direct path to Accreditation Center
    { from: 1, to: 24, weight: 8 },   // Entrance to Chairperson's Office/Accreditation Center (direct path)
    { from: 24, to: 25, weight: 1 },  // Chairperson's Office to Accreditation Center (they share the same space)
    { from: 3, to: 24, weight: 5 },   // Main hallway to Chairperson's Office (alternate path)
   
    // Dean's Office connections
    { from: 3, to: 23, weight: 10 },  // Main hallway to Dean's Office
    { from: 23, to: 24, weight: 5 },  // Dean's Office to Chairperson's Office
   
    // Room 108 connections
    { from: 3, to: 17, weight: 8 },   // Main hallway to Room 108
    { from: 17, to: 23, weight: 5 },  // Room 108 to Dean's Office
   
    // Rest of the building connections
    { from: 3, to: 5, weight: 10 },  // Hallway to Room 100
    { from: 4, to: 6, weight: 8 },   // Corridor to Room 101
    { from: 4, to: 7, weight: 10 },  // Corridor to Room 102
    { from: 4, to: 8, weight: 12 },  // Corridor to Room 103A
    { from: 8, to: 9, weight: 5 },   // Room 103A to 103B
    { from: 4, to: 10, weight: 15 }, // Corridor to Room 104
    { from: 10, to: 11, weight: 5 }, // Room 104 to 105A
    { from: 11, to: 12, weight: 5 }, // Room 105A to 105B
    { from: 4, to: 13, weight: 18 }, // Corridor to Room 106
    { from: 13, to: 14, weight: 5 }, // Room 106 to Tool Room
   
    // Left wing connections
    { from: 3, to: 15, weight: 12 }, // Hallway to Room 107A
    { from: 15, to: 16, weight: 5 }, // Room 107A to 107B
    { from: 3, to: 17, weight: 15 }, // Hallway to Room 108
    { from: 17, to: 23, weight: 8 }, // Room 108 to Dean's Office
    { from: 23, to: 24, weight: 5 }, // Dean's Office to Chairperson's Office
    { from: 24, to: 25, weight: 5 }, // Chairperson's Office to Accreditation Center
    { from: 17, to: 22, weight: 10 }, // Room 108 to Library
   
    // Right wing connections
    { from: 4, to: 18, weight: 20 }, // Corridor to Room 109
    { from: 18, to: 19, weight: 5 }, // Room 109 to 110
    { from: 19, to: 20, weight: 5 }, // Room 110 to 111
    { from: 20, to: 21, weight: 5 }, // Room 111 to 112
   
    // Toilet connections
    { from: 3, to: 26, weight: 6 },  // Hallway to Female Toilet
    { from: 3, to: 27, weight: 8 },  // Hallway to Male Toilet
   
    // Open courts and stairs
    { from: 3, to: 28, weight: 12 }, // Hallway to Left Open Court
    { from: 4, to: 29, weight: 12 }, // Corridor to Right Open Court
    { from: 3, to: 30, weight: 10 }, // Hallway to Left Stairs
    { from: 17, to: 31, weight: 8 }, // Room 108 to Center Left Stairs
    { from: 4, to: 32, weight: 10 }, // Corridor to Center Right Stairs
    { from: 4, to: 33, weight: 15 }, // Corridor to Right Stairs
   
    // Stairs to second floor
    { from: 30, to: 34, weight: 15 }, // Left Stairs to 2nd Floor Hallway
    { from: 31, to: 34, weight: 12 }, // Center Left Stairs to 2nd Floor Hallway
    { from: 32, to: 35, weight: 12 }, // Center Right Stairs to 2nd Floor Corridor
    { from: 33, to: 35, weight: 15 }, // Right Stairs to 2nd Floor Corridor
   
    // Second Floor connections
    { from: 34, to: 35, weight: 10 }, // 2nd Floor Hallway to Corridor
   
    // Second floor left wing
    { from: 34, to: 36, weight: 18 }, // Hallway to CAD Lab 200
    { from: 34, to: 37, weight: 15 }, // Hallway to Architecture Lecture 201
    { from: 37, to: 38, weight: 5 },  // Room 201 to Extension
    { from: 34, to: 39, weight: 12 }, // Hallway to Visual Techniques 202
    { from: 34, to: 40, weight: 10 }, // Hallway to Lecture Room 203
    { from: 34, to: 41, weight: 8 },  // Hallway to Clinic 204
    { from: 34, to: 42, weight: 6 },  // Hallway to I.E. Lecture 205
   
    // Second floor top wing
    { from: 35, to: 43, weight: 8 },  // Corridor to Mechanical Drafting 3-206
    { from: 43, to: 44, weight: 5 },  // Room 206 to 207
    { from: 44, to: 45, weight: 5 },  // Room 207 to 208
    { from: 35, to: 46, weight: 12 }, // Corridor to Classroom 209B
    { from: 35, to: 47, weight: 15 }, // Corridor to Manufacturing Lab 209
    { from: 47, to: 48, weight: 8 },  // Manufacturing Lab to Industrial Eng Lab 210
   
    // Second floor bottom wing
    { from: 35, to: 49, weight: 20 }, // Corridor to Multi-Media 211
    { from: 49, to: 50, weight: 5 },  // Multi-Media to CAFA Office 212
    { from: 50, to: 51, weight: 5 },  // CAFA Office to Arch Drafting 1-213
    { from: 51, to: 52, weight: 5 },  // Arch Drafting 1 to 2-214
    { from: 52, to: 53, weight: 5 },  // Arch Drafting 2 to 3-215
   
    // Second floor department offices
    { from: 34, to: 54, weight: 12 }, // Hallway to Time Motion Lab 221
    { from: 34, to: 55, weight: 10 }, // Hallway to EE Dept Office
    { from: 34, to: 56, weight: 8 },  // Hallway to Arch Dept Office
    { from: 34, to: 57, weight: 6 },  // Hallway to CE Dept Office
    { from: 35, to: 58, weight: 8 },  // Corridor to ME Dept Office
    { from: 35, to: 59, weight: 10 }, // Corridor to IE Dept Office
   
    // Second floor facilities
    { from: 34, to: 60, weight: 5 },  // Hallway to Stock Room
    { from: 60, to: 61, weight: 3 },  // Stock Room to Tool Room
    { from: 61, to: 62, weight: 3 },  // Tool Room to Dark Room
    { from: 35, to: 63, weight: 18 }, // Corridor to Power Room
    { from: 34, to: 64, weight: 7 },  // Hallway to Female Toilet
    { from: 35, to: 65, weight: 7 },  // Corridor to Male Toilet
   
    // Second floor open areas
    { from: 34, to: 66, weight: 12 }, // Hallway to Left Open Court
    { from: 35, to: 67, weight: 12 }, // Corridor to Right Open Court
    { from: 35, to: 68, weight: 15 }, // Corridor to Deck
   
    // Second to Third floor stairs
    { from: 34, to: 139, weight: 8 },  // 2nd Floor Hallway to Stairs 2-3
    { from: 35, to: 139, weight: 10 }, // 2nd Floor Corridor to Stairs 2-3
    { from: 139, to: 69, weight: 12 }, // Stairs 2-3 to 3rd Floor Hallway
    { from: 139, to: 70, weight: 15 }, // Stairs 2-3 to 3rd Floor Corridor
   
    // Third Floor connections
    { from: 69, to: 70, weight: 10 }, // 3rd Floor Hallway to Corridor
   
    // Third floor right wing
    { from: 69, to: 71, weight: 18 }, // Hallway to CPE Multimedia 300
    { from: 69, to: 72, weight: 15 }, // Hallway to CPE Lab Office 301
    { from: 69, to: 73, weight: 12 }, // Hallway to CPE Lecture 302
    { from: 70, to: 74, weight: 8 },  // Corridor to Industrial Electronics 303B
    { from: 74, to: 75, weight: 5 },  // Room 303B to 303A
    { from: 70, to: 76, weight: 10 }, // Corridor to Advanced Tech 304B
    { from: 76, to: 77, weight: 5 },  // Advanced Tech to Lab Head Office 304A
    { from: 70, to: 78, weight: 12 }, // Corridor to SMART Wireless 305A
    { from: 78, to: 79, weight: 5 },  // SMART Wireless to Comm Eng Lab 305B
    { from: 70, to: 80, weight: 15 }, // Corridor to EE Lecture 306A
    { from: 80, to: 81, weight: 5 },  // EE Lecture 306A to 306B
   
    // Third floor left wing
    { from: 69, to: 82, weight: 12 }, // Hallway to ECE Library 307
    { from: 69, to: 83, weight: 10 }, // Hallway to EE Auto Control Lab 308
    { from: 69, to: 84, weight: 15 }, // Hallway to CPE Lecture 310
    { from: 70, to: 85, weight: 20 }, // Corridor to AI Lab 311
    { from: 85, to: 86, weight: 5 },  // AI Lab to CPE Lab 312
    { from: 86, to: 87, weight: 5 },  // CPE Lab 312 to 313
    { from: 87, to: 88, weight: 5 },  // CPE Lab 313 to EMERSON Lab 314
    { from: 88, to: 89, weight: 5 },  // EMERSON Lab to CPE Lecture 315
    { from: 89, to: 90, weight: 5 },  // CPE Lecture 315 to 316
    { from: 70, to: 91, weight: 15 }, // Corridor to Sensors Lab 318
   
    // Third floor offices
    { from: 69, to: 92, weight: 8 },  // Hallway to Accreditation Center 319
    { from: 69, to: 93, weight: 6 },  // Hallway to Faculty Checker 320
    { from: 70, to: 94, weight: 8 },  // Corridor to CPE Chair Office 321
    { from: 70, to: 95, weight: 10 }, // Corridor to EE Chair Office 322
    { from: 70, to: 96, weight: 12 }, // Corridor to Eng Sciences Chair Office 323
   
    // Third floor facilities
    { from: 69, to: 97, weight: 6 },  // Hallway to Female Toilet
    { from: 70, to: 98, weight: 6 },  // Corridor to Male Toilet
    { from: 69, to: 99, weight: 8 },  // Hallway to Tool Room
    { from: 69, to: 100, weight: 12 }, // Hallway to Left Open Court
    { from: 70, to: 101, weight: 12 }, // Corridor to Right Open Court
   
    // Third to Fourth floor stairs
    { from: 69, to: 140, weight: 8 },  // 3rd Floor Hallway to Stairs 3-4
    { from: 70, to: 140, weight: 10 }, // 3rd Floor Corridor to Stairs 3-4
    { from: 140, to: 102, weight: 12 }, // Stairs 3-4 to 4th Floor Hallway
    { from: 140, to: 103, weight: 15 }, // Stairs 3-4 to 4th Floor Corridor
   
    // Fourth Floor connections
    { from: 102, to: 103, weight: 10 }, // 4th Floor Hallway to Corridor
   
    // Fourth floor right wing
    { from: 102, to: 104, weight: 18 }, // Hallway to Chemical Prep 400
    { from: 102, to: 105, weight: 15 }, // Hallway to Chemical Lab 401
     { from: 102, to: 105, weight: 15 }, // Hallway to Faculty Center 401
    { from: 105, to: 106, weight: 5 },  // Faculty Center to Extension Services 402
    { from: 106, to: 107, weight: 5 },  // Extension Services to Student Council 403
    { from: 102, to: 108, weight: 12 }, // Hallway to Gen Physics Lab 404
    { from: 108, to: 109, weight: 5 },  // Gen Physics Lab 404 to 405
    { from: 102, to: 110, weight: 10 }, // Hallway to Lecture Room 406
    { from: 110, to: 111, weight: 5 },  // Lecture Room 406 to 407
   
    // Fourth floor center connections
    { from: 103, to: 112, weight: 8 },  // Corridor to Electrical Fund Lab 408
    { from: 103, to: 113, weight: 10 }, // Corridor to Electrical Fund Lab 409B
    { from: 113, to: 114, weight: 5 },  // Lab 409B to 409A
    { from: 103, to: 115, weight: 12 }, // Corridor to Lecture Room 411
    { from: 115, to: 116, weight: 5 },  // Lecture Room 411 to 412
    { from: 116, to: 117, weight: 5 },  // Lecture Room 412 to 413
    { from: 117, to: 118, weight: 5 },  // Lecture Room 413 to 414
    { from: 118, to: 119, weight: 5 },  // Lecture Room 414 to 415
    { from: 119, to: 120, weight: 5 },  // Lecture Room 415 to 416
    { from: 120, to: 121, weight: 5 },  // Lecture Room 416 to 417
    { from: 121, to: 122, weight: 5 },  // Lecture Room 417 to 418
   
    // Fourth floor right wing connections
    { from: 103, to: 123, weight: 15 }, // Corridor to Gen Chemistry Lab A 419
    { from: 123, to: 124, weight: 5 },  // Chemistry Lab A to Lab Equipment 420
    { from: 124, to: 125, weight: 5 },  // Lab Equipment to Gen Chemistry Lab B 421
    { from: 125, to: 126, weight: 5 },  // Chemistry Lab B to Natural Science Lab Office 422
    { from: 126, to: 127, weight: 5 },  // Lab Office to Natural Science Faculty Room 421
    { from: 103, to: 128, weight: 18 }, // Corridor to Laboratory Equipment Room
    { from: 103, to: 129, weight: 20 }, // Corridor to Spectrum Office
    { from: 102, to: 130, weight: 8 },  // Hallway to CoE 300 Library
    { from: 130, to: 131, weight: 5 },  // CoE 300 Library to Library
    { from: 131, to: 132, weight: 5 },  // Library to A V R
   
    // Fourth floor facilities
    { from: 103, to: 133, weight: 12 }, // Corridor to Power Room
    { from: 102, to: 134, weight: 6 },  // Hallway to Female Toilet
    { from: 103, to: 135, weight: 6 },  // Corridor to Male Toilet
   
    // Fourth floor open areas
    { from: 102, to: 136, weight: 12 }, // Hallway to Left Open Court
    { from: 103, to: 137, weight: 10 }, // Corridor to Center Open Court
    { from: 103, to: 138, weight: 15 }, // Corridor to Right Open Court
   
    // Inter-floor stair connections that were missing
    { from: 28, to: 66, weight: 15 },   // Left Open Court 1st to 2nd Floor
    { from: 29, to: 67, weight: 15 },   // Right Open Court 1st to 2nd Floor
    { from: 66, to: 100, weight: 15 },  // Left Open Court 2nd to 3rd Floor
    { from: 67, to: 101, weight: 15 },  // Right Open Court 2nd to 3rd Floor
    { from: 100, to: 136, weight: 15 }, // Left Open Court 3rd to 4th Floor
    { from: 101, to: 137, weight: 15 }, // Right Open Court 3rd to 4th Floor Center
    { from: 101, to: 138, weight: 18 }, // Right Open Court 3rd to 4th Floor Right
   
    // Additional cross-floor connections for better navigation
    { from: 26, to: 64, weight: 15 },   // Female Toilet 1st to 2nd Floor
    { from: 27, to: 65, weight: 15 },   // Male Toilet 1st to 2nd Floor
    { from: 64, to: 97, weight: 15 },   // Female Toilet 2nd to 3rd Floor
    { from: 65, to: 98, weight: 15 },   // Male Toilet 2nd to 3rd Floor
    { from: 97, to: 134, weight: 15 },  // Female Toilet 3rd to 4th Floor
    { from: 98, to: 135, weight: 15 },  // Male Toilet 3rd to 4th Floor
   
    // Tool room connections across floors
    { from: 14, to: 61, weight: 20 },   // Tool Room 1st to 2nd Floor
    { from: 61, to: 99, weight: 20 },   // Tool Room 2nd to 3rd Floor
  ]
};



