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
    26: { id: 26, name: "Pasig River", type: "landmark" , x:67, y:372},
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
    81: { id: 81, type: "path", x: 368, y: 408 },

    // === MAIN BUILDING - 1st FLOOR ROOMS ===
    // EAST WING
    1001: { id: 1001, name: "Office of Student Services", type: "office", floor: 1, parent: 15 },
    1002: { id: 1002, name: "Department of Military Science and Tactics", type: "office", floor: 1, parent: 15 },
    1003: { id: 1003, name: "HRDO Records Office", type: "office", floor: 1, parent: 15 },
    1004: { id: 1004, name: "Medical Clinic Services", type: "office", floor: 1, parent: 15 },
    1005: { id: 1005, name: "Dental Clinic Services", type: "office", floor: 1, parent: 15 },
    1006: { id: 1006, name: "Office of the Director - Student Services", type: "office", floor: 1, parent: 15 },
    1007: { id: 1007, name: "Office of the Director - Student Affairs", type: "office", floor: 1, parent: 15 },

    // NORTH WING
    1008: { id: 1008, name: "Commission on Audit Office", type: "office", floor: 1, parent: 16 },
    1009: { id: 1009, name: "Procurement Office", type: "office", floor: 1, parent: 16 },
    1010: { id: 1010, name: "Campus Ministry", type: "office", floor: 1, parent: 16 },
    1011: { id: 1011, name: "Security Office", type: "office", floor: 1, parent: 16 },

    // WEST WING
    1012: { id: 1012, name: "Office of the University Registrar - Records Retrieval Section", type: "office", floor: 1, parent: 18 },
    1013: { id: 1013, name: "Office of the Scholarship and Financial Assistance", type: "office", floor: 1, parent: 18 },
    1014: { id: 1014, name: "Admission and Registration Office", type: "office", floor: 1, parent: 18 },

    // SOUTH WING
    1015: { id: 1015, name: "Human Resource Management Division", type: "office", floor: 1, parent: 17 },
    1016: { id: 1016, name: "Students Records Office", type: "office", floor: 1, parent: 17 },
    1017: { id: 1017, name: "Office of the University Registrar", type: "office", floor: 1, parent: 17 },
    1018: { id: 1018, name: "Cashier", type: "office", floor: 1, parent: 17 },
    1019: { id: 1019, name: "Accounting Office", type: "office", floor: 1, parent: 17 },
    1020: { id: 1020, name: "Budget Services", type: "office", floor: 1, parent: 17 },
    1021: { id: 1021, name: "Property Extension Office", type: "office", floor: 1, parent: 17 },

    // DOME AND CENTRAL AREA
    1022: { id: 1022, name: "1st Floor Dome", type: "facility", floor: 1, parent: 14 },
    1023: { id: 1023, name: "Dome Hallway", type: "hallway", floor: 1, parent: 14 },

    // STAIRS
    1024: { id: 1024, name: "North Wing Left Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 16 },
    1025: { id: 1025, name: "North Wing Right Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 16 },
    1026: { id: 1026, name: "North Wing Center Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 16 },
    1027: { id: 1027, name: "South Wing Left Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 17 },
    1028: { id: 1028, name: "South Wing Center Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 17 },
    1029: { id: 1029, name: "South Wing Right Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 17 },
    1034: { id: 1034, name: "East Wing Left Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 15 },
    1035: { id: 1035, name: "East Wing Right Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 15 },
    1036: { id: 1036, name: "West Wing Left Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 18 },
    1037: { id: 1037, name: "West Wing Right Stairs (1st floor)", type: "stairs", floor: "1-2", parent: 18 },

    // HALLWAYS
    1030: { id: 1030, name: "East Wing Hallway (1st floor)", type: "hallway", floor: 1, parent: 15 },
    1031: { id: 1031, name: "North Wing Hallway (1st floor)", type: "hallway", floor: 1, parent: 16 },
    1032: { id: 1032, name: "West Wing Hallway (1st floor)", type: "hallway", floor: 1, parent: 18 },
    1033: { id: 1033, name: "South Wing Hallway (1st floor)", type: "hallway", floor: 1, parent: 17 },

    // === MAIN BUILDING - 2nd FLOOR ROOMS ===
    // EAST WING
    2001: { id: 2001, name: "E219", type: "room", floor: 2, parent: 15 },
    2002: { id: 2002, name: "E217", type: "room", floor: 2, parent: 15 },
    2003: { id: 2003, name: "E215", type: "room", floor: 2, parent: 15 },
    2004: { id: 2004, name: "E213", type: "room", floor: 2, parent: 15 },
    2005: { id: 2005, name: "E211", type: "room", floor: 2, parent: 15 },
    2006: { id: 2006, name: "E209", type: "room", floor: 2, parent: 15 },
    2007: { id: 2007, name: "E207", type: "room", floor: 2, parent: 15 },
    2008: { id: 2008, name: "E206", type: "room", floor: 2, parent: 15 },
    2009: { id: 2009, name: "E208", type: "room", floor: 2, parent: 15 },
    2010: { id: 2010, name: "E210", type: "room", floor: 2, parent: 15 },
    2011: { id: 2011, name: "E212", type: "room", floor: 2, parent: 15 },
    2012: { id: 2012, name: "E214", type: "room", floor: 2, parent: 15 },
    2013: { id: 2013, name: "E216", type: "room", floor: 2, parent: 15 },
    2014: { id: 2014, name: "E218", type: "room", floor: 2, parent: 15 },
    2015: { id: 2015, name: "E220", type: "room", floor: 2, parent: 15 },

    // WEST WING
    2016: { id: 2016, name: "W220", type: "room", floor: 2, parent: 18 },
    2017: { id: 2017, name: "W218", type: "room", floor: 2, parent: 18 },
    2018: { id: 2018, name: "W216", type: "room", floor: 2, parent: 18 },
    2019: { id: 2019, name: "W214", type: "room", floor: 2, parent: 18 },
    2020: { id: 2020, name: "W212", type: "room", floor: 2, parent: 18 },
    2021: { id: 2021, name: "W210", type: "room", floor: 2, parent: 18 },
    2022: { id: 2022, name: "W208", type: "room", floor: 2, parent: 18 },
    2023: { id: 2023, name: "W206", type: "room", floor: 2, parent: 18 },
    2024: { id: 2024, name: "W204", type: "room", floor: 2, parent: 18 },
    2025: { id: 2025, name: "W202", type: "room", floor: 2, parent: 18 },
    2026: { id: 2026, name: "W200", type: "room", floor: 2, parent: 18 },
    2027: { id: 2027, name: "W205", type: "room", floor: 2, parent: 18 },
    2028: { id: 2028, name: "W207", type: "room", floor: 2, parent: 18 },
    2029: { id: 2029, name: "W209", type: "room", floor: 2, parent: 18 },
    2030: { id: 2030, name: "W213", type: "room", floor: 2, parent: 18 },
    2031: { id: 2031, name: "W215", type: "room", floor: 2, parent: 18 },
    2032: { id: 2032, name: "Faculty Circle", type: "room", floor: 2, parent: 18 },
    2033: { id: 2033, name: "PUPFFA Office", type: "office", floor: 2, parent: 18 },
    2034: { id: 2034, name: "Research Center", type: "office", floor: 2, parent: 18 },

    // NORTH WING
    2035: { id: 2035, name: "College of Science Office", type: "office", floor: 2, parent: 16 },
    2036: { id: 2036, name: "College of Languages and Linguistics Office", type: "office", floor: 2, parent: 16 },
    2037: { id: 2037, name: "College of Arts Office", type: "office", floor: 2, parent: 16 },
    2038: { id: 2038, name: "College of Accountancy Office", type: "office", floor: 2, parent: 16 },
    2039: { id: 2039, name: "College of Business Office", type: "office", floor: 2, parent: 16 },
    2040: { id: 2040, name: "College of Education Office", type: "office", floor: 2, parent: 16 },

    // SOUTH WING
    2041: { id: 2041, name: "Office of the President", type: "office", floor: 2, parent: 17 },
    2042: { id: 2042, name: "Dr. Pablo T. Mateo Jr. Conference Room", type: "room", floor: 2, parent: 17 },
    2043: { id: 2043, name: "Office of the University Board Secretary", type: "office", floor: 2, parent: 17 },
    2044: { id: 2044, name: "Office of the VP for Academic Affairs", type: "office", floor: 2, parent: 17 },
    2045: { id: 2045, name: "Office of the VP for Administration", type: "office", floor: 2, parent: 17 },
    2046: { id: 2046, name: "Dr. Ofelia M. Carague Conference Room", type: "room", floor: 2, parent: 17 },
    2047: { id: 2047, name: "Office of the VP for Research, Extension, and Development", type: "office", floor: 2, parent: 17 },

    // DOME AND CENTRAL AREA
    2101: { id: 2101, name: "2nd Floor Dome", type: "facility", floor: 2, parent: 14 },
    2102: { id: 2102, name: "Dome Hallway", type: "hallway", floor: 2, parent: 14 },

    // STAIRS (2nd to 3rd floor)
    2103: { id: 2103, name: "North Wing Left Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 16 },
    2104: { id: 2104, name: "North Wing Right Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 16 },
    2106: { id: 2106, name: "South Wing Left Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 17 },
    2107: { id: 2107, name: "South Wing Center Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 17 },
    2108: { id: 2108, name: "South Wing Right Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 17 },
    2113: { id: 2113, name: "East Wing Left Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 15 },
    2114: { id: 2114, name: "East Wing Right Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 15 },
    2115: { id: 2115, name: "West Wing Left Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 18 },
    2116: { id: 2116, name: "West Wing Right Stairs (2nd floor)", type: "stairs", floor: "2-3", parent: 18 },

    // HALLWAYS
    2109: { id: 2109, name: "East Wing Hallway (2nd floor)", type: "hallway", floor: 2, parent: 15 },
    2110: { id: 2110, name: "North Wing Hallway (2nd floor)", type: "hallway", floor: 2, parent: 16 },
    2111: { id: 2111, name: "West Wing Hallway (2nd floor)", type: "hallway", floor: 2, parent: 18 },
    2112: { id: 2112, name: "South Wing Hallway (2nd floor)", type: "hallway", floor: 2, parent: 17 },

    // === MAIN BUILDING - 3rd FLOOR ROOMS ===
    // EAST WING
    3001: { id: 3001, name: "E313", type: "room", floor: 3, parent: 15 },
    3002: { id: 3002, name: "E311", type: "room", floor: 3, parent: 15 },
    3003: { id: 3003, name: "E309", type: "room", floor: 3, parent: 15 },
    3004: { id: 3004, name: "E307", type: "room", floor: 3, parent: 15 },
    3005: { id: 3005, name: "E305", type: "room", floor: 3, parent: 15 },
    3006: { id: 3006, name: "E305A", type: "room", floor: 3, parent: 15 },
    3007: { id: 3007, name: "E303", type: "room", floor: 3, parent: 15 },
    3008: { id: 3008, name: "E301", type: "room", floor: 3, parent: 15 },
    3009: { id: 3009, name: "Male Toilet (East)", type: "facility", floor: 3, parent: 15 },
    3010: { id: 3010, name: "Female Toilet (East)", type: "facility", floor: 3, parent: 15 },
    3011: { id: 3011, name: "E310", type: "room", floor: 3, parent: 15 },
    3012: { id: 3012, name: "E308", type: "room", floor: 3, parent: 15 },
    3013: { id: 3013, name: "E306", type: "room", floor: 3, parent: 15 },
    3014: { id: 3014, name: "E304", type: "room", floor: 3, parent: 15 },
    3015: { id: 3015, name: "E302", type: "room", floor: 3, parent: 15 },
    3016: { id: 3016, name: "E300", type: "room", floor: 3, parent: 15 },
    3017: { id: 3017, name: "E300A", type: "room", floor: 3, parent: 15 },

    // WEST WING
    3018: { id: 3018, name: "W318", type: "room", floor: 3, parent: 18 },
    3019: { id: 3019, name: "W316", type: "room", floor: 3, parent: 18 },
    3020: { id: 3020, name: "W314", type: "room", floor: 3, parent: 18 },
    3021: { id: 3021, name: "W310", type: "room", floor: 3, parent: 18 },
    3022: { id: 3022, name: "W312", type: "room", floor: 3, parent: 18 },
    3023: { id: 3023, name: "W308", type: "room", floor: 3, parent: 18 },
    3024: { id: 3024, name: "W306", type: "room", floor: 3, parent: 18 },
    3025: { id: 3025, name: "W304", type: "room", floor: 3, parent: 18 },
    3026: { id: 3026, name: "COABTE Faculty Office", type: "office", floor: 3, parent: 18 },
    3027: { id: 3027, name: "W311", type: "room", floor: 3, parent: 18 },
    3028: { id: 3028, name: "W309", type: "room", floor: 3, parent: 18 },
    3029: { id: 3029, name: "W307", type: "room", floor: 3, parent: 18 },
    3030: { id: 3030, name: "W305", type: "room", floor: 3, parent: 18 },
    3031: { id: 3031, name: "W303", type: "room", floor: 3, parent: 18 },
    3032: { id: 3032, name: "W301", type: "room", floor: 3, parent: 18 },
    3033: { id: 3033, name: "Female Toilet (West)", type: "facility", floor: 3, parent: 18 },
    3034: { id: 3034, name: "Male Toilet (West)", type: "facility", floor: 3, parent: 18 },

    // NORTH WING
    3035: { id: 3035, name: "N301", type: "room", floor: 3, parent: 16 },
    3036: { id: 3036, name: "N303", type: "room", floor: 3, parent: 16 },
    3037: { id: 3037, name: "N313", type: "room", floor: 3, parent: 16 },
    3038: { id: 3038, name: "N315", type: "room", floor: 3, parent: 16 },
    3039: { id: 3039, name: "N317", type: "room", floor: 3, parent: 16 },
    3040: { id: 3040, name: "Male Toilet (North Left)", type: "facility", floor: 3, parent: 16 },
    3041: { id: 3041, name: "Female Toilet (North Left)", type: "facility", floor: 3, parent: 16 },
    3042: { id: 3042, name: "N304", type: "room", floor: 3, parent: 16 },
    3043: { id: 3043, name: "N306", type: "room", floor: 3, parent: 16 },
    3044: { id: 3044, name: "N308", type: "room", floor: 3, parent: 16 },
    3045: { id: 3045, name: "N310", type: "room", floor: 3, parent: 16 },
    3046: { id: 3046, name: "N312", type: "room", floor: 3, parent: 16 },
    3047: { id: 3047, name: "N314", type: "room", floor: 3, parent: 16 },
    3048: { id: 3048, name: "N316", type: "room", floor: 3, parent: 16 },
    3049: { id: 3049, name: "N318", type: "room", floor: 3, parent: 16 },

    // SOUTH WING
    3050: { id: 3050, name: "Chief Legal", type: "office", floor: 3, parent: 17 },
    3051: { id: 3051, name: "Staff Legal", type: "office", floor: 3, parent: 17 },
    3052: { id: 3052, name: "Internal Audit", type: "office", floor: 3, parent: 17 },
    3053: { id: 3053, name: "BAC", type: "office", floor: 3, parent: 17 },
    3054: { id: 3054, name: "PPDO", type: "office", floor: 3, parent: 17 },
    3055: { id: 3055, name: "Research Extension", type: "office", floor: 3, parent: 17 },
    3056: { id: 3056, name: "Electronic Data Processing", type: "office", floor: 3, parent: 17 },
    3057: { id: 3057, name: "Placement Office", type: "office", floor: 3, parent: 17 },
    3058: { id: 3058, name: "PFO", type: "office", floor: 3, parent: 17 },
    3059: { id: 3059, name: "Alumni Relations", type: "office", floor: 3, parent: 17 },
    3060: { id: 3060, name: "Server", type: "facility", floor: 3, parent: 17 },
    3061: { id: 3061, name: "Publication Office", type: "office", floor: 3, parent: 17 },
    3062: { id: 3062, name: "CRO", type: "office", floor: 3, parent: 17 },
    3063: { id: 3063, name: "CRBDO", type: "office", floor: 3, parent: 17 },
    3064: { id: 3064, name: "PAO", type: "office", floor: 3, parent: 17 },
    3065: { id: 3065, name: "AVP Research", type: "office", floor: 3, parent: 17 },
    3066: { id: 3066, name: "OVPRED", type: "office", floor: 3, parent: 17 },

    // DOME AND CENTRAL AREA
    3067: { id: 3067, name: "3rd Floor Dome", type: "facility", floor: 3, parent: 14 },
    3068: { id: 3068, name: "Dome Hallway (3rd Floor)", type: "hallway", floor: 3, parent: 14 },
    3069: { id: 3069, name: "East Wing Hallway (3rd Floor)", type: "hallway", floor: 3, parent: 15 },
    3070: { id: 3070, name: "West Wing Hallway (3rd Floor)", type: "hallway", floor: 3, parent: 18 },
    3071: { id: 3071, name: "North Wing Hallway (3rd Floor)", type: "hallway", floor: 3, parent: 16 },
    3072: { id: 3072, name: "South Wing Hallway (3rd Floor)", type: "hallway", floor: 3, parent: 17 },

    // Add missing stair nodes for third floor
    3073: { id: 3073, name: "North Wing Left Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 16 },
    3074: { id: 3074, name: "North Wing Right Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 16 },
    3076: { id: 3076, name: "South Wing Left Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 17 },
    3077: { id: 3077, name: "South Wing Center Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 17 },
    3078: { id: 3078, name: "South Wing Right Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 17 },
    3079: { id: 3079, name: "East Wing Left Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 15 },
    3080: { id: 3080, name: "East Wing Right Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 15 },
    3081: { id: 3081, name: "West Wing Left Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 18 },
    3082: { id: 3082, name: "West Wing Right Stairs (3rd Floor)", type: "stairs", floor: "3-4", parent: 18 },

    // === MAIN BUILDING - 4th FLOOR ROOMS ===
    // EAST WING
    4001: { id: 4001, name: "E417", type: "room", floor: 4, parent: 15 },
    4002: { id: 4002, name: "E415", type: "room", floor: 4, parent: 15 },
    4003: { id: 4003, name: "E413", type: "room", floor: 4, parent: 15 },
    4004: { id: 4004, name: "E411", type: "room", floor: 4, parent: 15 },
    4005: { id: 4005, name: "E409", type: "room", floor: 4, parent: 15 },
    4006: { id: 4006, name: "E407", type: "room", floor: 4, parent: 15 },
    4007: { id: 4007, name: "E405", type: "room", floor: 4, parent: 15 },
    4008: { id: 4008, name: "E403", type: "room", floor: 4, parent: 15 },
    4009: { id: 4009, name: "E401", type: "room", floor: 4, parent: 15 },
    4010: { id: 4010, name: "Male Toilet (East)", type: "facility", floor: 4, parent: 15 },
    4011: { id: 4011, name: "Female Toilet (East)", type: "facility", floor: 4, parent: 15 },
    4012: { id: 4012, name: "Office (East)", type: "office", floor: 4, parent: 15 },
    4013: { id: 4013, name: "E418", type: "room", floor: 4, parent: 15 },
    4014: { id: 4014, name: "E416", type: "room", floor: 4, parent: 15 },
    4015: { id: 4015, name: "E414", type: "room", floor: 4, parent: 15 },
    4016: { id: 4016, name: "E412", type: "room", floor: 4, parent: 15 },
    4017: { id: 4017, name: "E410", type: "room", floor: 4, parent: 15 },
    4018: { id: 4018, name: "E408", type: "room", floor: 4, parent: 15 },
    4019: { id: 4019, name: "E406", type: "room", floor: 4, parent: 15 },
    4020: { id: 4020, name: "E404", type: "room", floor: 4, parent: 15 },
    4021: { id: 4021, name: "E402", type: "room", floor: 4, parent: 15 },
    4022: { id: 4022, name: "E400", type: "room", floor: 4, parent: 15 },

    // WEST WING
    4023: { id: 4023, name: "W420", type: "room", floor: 4, parent: 18 },
    4024: { id: 4024, name: "W414", type: "room", floor: 4, parent: 18 },
    4025: { id: 4025, name: "W412", type: "room", floor: 4, parent: 18 },
    4026: { id: 4026, name: "W410", type: "room", floor: 4, parent: 18 },
    4027: { id: 4027, name: "W408", type: "room", floor: 4, parent: 18 },
    4028: { id: 4028, name: "W406", type: "room", floor: 4, parent: 18 },
    4029: { id: 4029, name: "W404", type: "room", floor: 4, parent: 18 },
    4030: { id: 4030, name: "Faculty Office (West)", type: "office", floor: 4, parent: 18 },
    4031: { id: 4031, name: "Department Head Office", type: "office", floor: 4, parent: 18 },
    4032: { id: 4032, name: "W417", type: "room", floor: 4, parent: 18 },
    4033: { id: 4033, name: "W415", type: "room", floor: 4, parent: 18 },
    4034: { id: 4034, name: "W413", type: "room", floor: 4, parent: 18 },
    4035: { id: 4035, name: "W409", type: "room", floor: 4, parent: 18 },
    4036: { id: 4036, name: "W407", type: "room", floor: 4, parent: 18 },
    4037: { id: 4037, name: "W405", type: "room", floor: 4, parent: 18 },
    4038: { id: 4038, name: "W403", type: "room", floor: 4, parent: 18 },
    4039: { id: 4039, name: "W401", type: "room", floor: 4, parent: 18 },
    4040: { id: 4040, name: "Female Toilet (West)", type: "facility", floor: 4, parent: 18 },
    4041: { id: 4041, name: "Male Toilet (West)", type: "facility", floor: 4, parent: 18 },

    // NORTH WING
    4042: { id: 4042, name: "Office", type: "office", floor: 4, parent: 16 },
    4043: { id: 4043, name: "N400", type: "room", floor: 4, parent: 16 },
    4044: { id: 4044, name: "N402", type: "room", floor: 4, parent: 16 },
    4045: { id: 4045, name: "N404", type: "room", floor: 4, parent: 16 },
    4046: { id: 4046, name: "N406", type: "room", floor: 4, parent: 16 },
    4047: { id: 4047, name: "N408", type: "room", floor: 4, parent: 16 },
    4048: { id: 4048, name: "N410", type: "room", floor: 4, parent: 16 },
    4049: { id: 4049, name: "N412", type: "room", floor: 4, parent: 16 },
    4050: { id: 4050, name: "N414", type: "room", floor: 4, parent: 16 },
    4051: { id: 4051, name: "N416", type: "room", floor: 4, parent: 16 },
    4052: { id: 4052, name: "N418", type: "room", floor: 4, parent: 16 },
    4053: { id: 4053, name: "Male Toilet (North - 4th floor)", type: "facility", floor: 4, parent: 16 },
    4054: { id: 4054, name: "Female Toilet (North - 4th floor)", type: "facility", floor: 4, parent: 16 },
    4055: { id: 4055, name: "N401", type: "room", floor: 4, parent: 16 },
    4056: { id: 4056, name: "N403", type: "room", floor: 4, parent: 16 },
    4057: { id: 4057, name: "N405", type: "room", floor: 4, parent: 16 },
    4058: { id: 4058, name: "N407", type: "room", floor: 4, parent: 16 },
    4059: { id: 4059, name: "N409", type: "room", floor: 4, parent: 16 },
    4060: { id: 4060, name: "N411", type: "room", floor: 4, parent: 16 },
    4061: { id: 4061, name: "N413", type: "room", floor: 4, parent: 16 },
    4062: { id: 4062, name: "N415", type: "room", floor: 4, parent: 16 },
    4063: { id: 4063, name: "N417", type: "room", floor: 4, parent: 16 },

    // SOUTH WING
    4064: { id: 4064, name: "Vacant Room", type: "room", floor: 4, parent: 17 },
    4065: { id: 4065, name: "Institutional Planning Office", type: "office", floor: 4, parent: 17 },
    4066: { id: 4066, name: "Office", type: "office", floor: 4, parent: 17 },
    4067: { id: 4067, name: "Classroom", type: "room", floor: 4, parent: 17 },
    4068: { id: 4068, name: "ITSO", type: "office", floor: 4, parent: 17 },
    4069: { id: 4069, name: "Research Chef's Lounge", type: "room", floor: 4, parent: 17 },
    4070: { id: 4070, name: "CHE Faculty Room", type: "office", floor: 4, parent: 17 },
    4071: { id: 4071, name: "SCITECH Research Office", type: "office", floor: 4, parent: 17 },
    4072: { id: 4072, name: "PUP Film Center", type: "facility", floor: 4, parent: 17 },
    4073: { id: 4073, name: "Institute of Social History", type: "office", floor: 4, parent: 17 },
    4074: { id: 4074, name: "Director Global Warning Studies", type: "office", floor: 4, parent: 17 },
    4075: { id: 4075, name: "IBITS Office", type: "office", floor: 4, parent: 17 },
    4076: { id: 4076, name: "Office", type: "office", floor: 4, parent: 17 },
    4077: { id: 4077, name: "CLL Audio Visual Room", type: "room", floor: 4, parent: 17 },
    4078: { id: 4078, name: "Branches Office", type: "office", floor: 4, parent: 17 },
    4079: { id: 4079, name: "Office", type: "office", floor: 4, parent: 17 },
    4080: { id: 4080, name: "Speech Laboratory", type: "laboratory", floor: 4, parent: 17 },
    4081: { id: 4081, name: "Training Center", type: "room", floor: 4, parent: 17 },
    4082: { id: 4082, name: "Training Center", type: "room", floor: 4, parent: 17 },
    4083: { id: 4083, name: "CLL Library", type: "library", floor: 4, parent: 17 },
    4084: { id: 4084, name: "Class Room", type: "room", floor: 4, parent: 17 },
    4085: { id: 4085, name: "Class Room", type: "room", floor: 4, parent: 17 },
    4086: { id: 4086, name: "Extension Center", type: "office", floor: 4, parent: 17 },
    4087: { id: 4087, name: "Student Center", type: "room", floor: 4, parent: 17 },
    4088: { id: 4088, name: "Student Lounge", type: "room", floor: 4, parent: 17 },

    // DOME AND CENTRAL AREA
    4089: { id: 4089, name: "4th Floor Dome", type: "facility", floor: 4, parent: 14 },
    4090: { id: 4090, name: "Dome Hallway (4th Floor)", type: "hallway", floor: 4, parent: 14 },
    4091: { id: 4091, name: "East Wing Hallway (4th Floor)", type: "hallway", floor: 4, parent: 15 },
    4092: { id: 4092, name: "West Wing Hallway (4th Floor)", type: "hallway", floor: 4, parent: 18 },
    4093: { id: 4093, name: "North Wing Hallway (4th Floor)", type: "hallway", floor: 4, parent: 16 },
    4094: { id: 4094, name: "South Wing Hallway (4th Floor)", type: "hallway", floor: 4, parent: 17 },

    //STAIRS
    4095: { id: 4095, name: "South Wing Left Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 17 },
    4096: { id: 4096, name: "South Wing Center Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 17 },
    4097: { id: 4097, name: "South Wing Right Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 17 },
    4098: { id: 4098, name: "East Wing Left Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 15 },
    4099: { id: 4099, name: "East Wing Right Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 15 },
    4100: { id: 4100, name: "West Wing Left Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 18 },
    4101: { id: 4101, name: "West Wing Right Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 18 },
    4102: { id: 4102, name: "North Wing Left Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 16 },
    4103: { id: 4103, name: "North Wing Right Stairs (4th Floor)", type: "stairs", floor: "4-5", parent: 16 },

    // === MAIN BUILDING - FIFTH FLOOR ROOMS ===
    // SOUTH WING
    5001: { id: 5001, name: "S501", type: "room", floor: 5, parent: 17 },
    5002: { id: 5002, name: "S502", type: "room", floor: 5, parent: 17 },
    5003: { id: 5003, name: "S503A", type: "room", floor: 5, parent: 17 },
    5004: { id: 5004, name: "S503B", type: "room", floor: 5, parent: 17 },
    5005: { id: 5005, name: "S504", type: "room", floor: 5, parent: 17 },
    5006: { id: 5006, name: "S505", type: "room", floor: 5, parent: 17 },
    5007: { id: 5007, name: "S508", type: "room", floor: 5, parent: 17 },
    5008: { id: 5008, name: "S509", type: "room", floor: 5, parent: 17 },
    5009: { id: 5009, name: "S510", type: "room", floor: 5, parent: 17 },
    5010: { id: 5010, name: "S511", type: "room", floor: 5, parent: 17 },
    5011: { id: 5011, name: "S512B", type: "room", floor: 5, parent: 17 },
    5012: { id: 5012, name: "S513", type: "room", floor: 5, parent: 17 },
    5013: { id: 5013, name: "S515", type: "room", floor: 5, parent: 17 },
    5014: { id: 5014, name: "S517", type: "room", floor: 5, parent: 17 },
    5015: { id: 5015, name: "S518", type: "room", floor: 5, parent: 17 },
    5016: { id: 5016, name: "CCMT/Server Room", type: "facility", floor: 5, parent: 17 },
    5017: { id: 5017, name: "Curriculum Planning & Development Office", type: "office", floor: 5, parent: 17 },
    5018: { id: 5018, name: "College of Science Faculty Room", type: "office", floor: 5, parent: 17 },
    5019: { id: 5019, name: "College of Science Accreditation Center", type: "office", floor: 5, parent: 17 },
    5020: { id: 5020, name: "SCI-TECH Research & Development Center", type: "facility", floor: 5, parent: 17 },

    // EAST WING
    5021: { id: 5021, name: "E501", type: "room", floor: 5, parent: 15 },
    5022: { id: 5022, name: "E502", type: "room", floor: 5, parent: 15 },
    5023: { id: 5023, name: "JPIA Office", type: "office", floor: 5, parent: 15 },
    5024: { id: 5024, name: "E504", type: "room", floor: 5, parent: 15 },
    5025: { id: 5025, name: "E506", type: "room", floor: 5, parent: 15 },
    5026: { id: 5026, name: "E508", type: "room", floor: 5, parent: 15 },
    5027: { id: 5027, name: "E510", type: "room", floor: 5, parent: 15 },
    5028: { id: 5028, name: "E512", type: "room", floor: 5, parent: 15 },
    5029: { id: 5029, name: "E514", type: "room", floor: 5, parent: 15 },
    5030: { id: 5030, name: "E516", type: "room", floor: 5, parent: 15 },
    5031: { id: 5031, name: "E518", type: "room", floor: 5, parent: 15 },
    5032: { id: 5032, name: "E503", type: "room", floor: 5, parent: 15 },
    5033: { id: 5033, name: "E505", type: "room", floor: 5, parent: 15 },
    5034: { id: 5034, name: "E507", type: "room", floor: 5, parent: 15 },
    5035: { id: 5035, name: "E509", type: "room", floor: 5, parent: 15 },
    5036: { id: 5036, name: "E511", type: "room", floor: 5, parent: 15 },
    5037: { id: 5037, name: "E513", type: "room", floor: 5, parent: 15 },
    5038: { id: 5038, name: "E515", type: "room", floor: 5, parent: 15 },
    5039: { id: 5039, name: "E517", type: "room", floor: 5, parent: 15 },
    5088: { id: 5088, name: "College of Accountancy Student Council Office", type: "office", floor: 5, parent: 15 },

    // WEST WING
    5040: { id: 5040, name: "W500", type: "room", floor: 5, parent: 18 },
    5041: { id: 5041, name: "W501", type: "room", floor: 5, parent: 18 },
    5042: { id: 5042, name: "W502", type: "room", floor: 5, parent: 18 },
    5043: { id: 5043, name: "W503", type: "room", floor: 5, parent: 18 },
    5044: { id: 5044, name: "W504", type: "room", floor: 5, parent: 18 },
    5045: { id: 5045, name: "W505", type: "room", floor: 5, parent: 18 },
    5046: { id: 5046, name: "W506", type: "room", floor: 5, parent: 18 },
    5047: { id: 5047, name: "W507", type: "room", floor: 5, parent: 18 },
    5048: { id: 5048, name: "W508", type: "room", floor: 5, parent: 18 },
    5049: { id: 5049, name: "W509", type: "room", floor: 5, parent: 18 },
    5050: { id: 5050, name: "W510", type: "room", floor: 5, parent: 18 },
    5051: { id: 5051, name: "W511", type: "room", floor: 5, parent: 18 },
    5052: { id: 5052, name: "W512", type: "room", floor: 5, parent: 18 },
    5053: { id: 5053, name: "W513", type: "room", floor: 5, parent: 18 },
    5054: { id: 5054, name: "W514", type: "room", floor: 5, parent: 18 },
    5055: { id: 5055, name: "W515", type: "room", floor: 5, parent: 18 },
    5056: { id: 5056, name: "W516", type: "room", floor: 5, parent: 18 },
    5057: { id: 5057, name: "W518", type: "room", floor: 5, parent: 18 },
    5058: { id: 5058, name: "W527", type: "room", floor: 5, parent: 18 },
    5089: { id: 5089, name: "Bayan Muna/NNARA/Gabriela Office", type: "office", floor: 5, parent: 18 },

    // NORTH WING
    5059: { id: 5059, name: "College of Accountancy Faculty Room", type: "office", floor: 5, parent: 16 },
    5060: { id: 5060, name: "N500", type: "room", floor: 5, parent: 16 },
    5061: { id: 5061, name: "N501", type: "room", floor: 5, parent: 16 },
    5062: { id: 5062, name: "N502", type: "room", floor: 5, parent: 16 },
    5063: { id: 5063, name: "N503", type: "room", floor: 5, parent: 16 },
    5064: { id: 5064, name: "N504", type: "room", floor: 5, parent: 16 },
    5065: { id: 5065, name: "N505", type: "room", floor: 5, parent: 16 },
    5066: { id: 5066, name: "N506", type: "room", floor: 5, parent: 16 },
    5067: { id: 5067, name: "N507", type: "room", floor: 5, parent: 16 },
    5068: { id: 5068, name: "N508", type: "room", floor: 5, parent: 16 },
    5069: { id: 5069, name: "N509", type: "room", floor: 5, parent: 16 },
    5070: { id: 5070, name: "N510", type: "room", floor: 5, parent: 16 },
    5071: { id: 5071, name: "N511", type: "room", floor: 5, parent: 16 },
    5072: { id: 5072, name: "N512", type: "room", floor: 5, parent: 16 },
    5073: { id: 5073, name: "N513", type: "room", floor: 5, parent: 16 },
    5074: { id: 5074, name: "N514", type: "room", floor: 5, parent: 16 },
    5075: { id: 5075, name: "N515", type: "room", floor: 5, parent: 16 },
    5076: { id: 5076, name: "N516", type: "room", floor: 5, parent: 16 },
    5077: { id: 5077, name: "N517", type: "room", floor: 5, parent: 16 },
    5078: { id: 5078, name: "N518", type: "room", floor: 5, parent: 16 },
    5079: { id: 5079, name: "SAMASA COA", type: "office", floor: 5, parent: 16 },

    // FACILITIES
    5082: { id: 5082, name: "Male Toilet East Wing - 5th floor", type: "facility", floor: 5, parent: 15 },
    5083: { id: 5083, name: "Female Toilet East Wing - 5th Floor", type: "facility", floor: 5, parent: 15 },
    5084: { id: 5084, name: "Male Toilet West Wing - 5th Floor", type: "facility", floor: 5, parent: 18 },
    5085: { id: 5085, name: "Female Toilet West Wing - 5th Floor", type: "facility", floor: 5, parent: 18 },
    5086: { id: 5086, name: "Male Toilet North Wing - 5th Floor", type: "facility", floor: 5, parent: 16 },
    5087: { id: 5087, name: "Female Toilet North Wing - 5th Floor", type: "facility", floor: 5, parent: 16 },

    // HALLWAYS AND SPECIAL AREAS
    5091: { id: 5091, name: "East Wing Hallway (5th Floor)", type: "hallway", floor: 5, parent: 15 },
    5092: { id: 5092, name: "West Wing Hallway (5th Floor)", type: "hallway", floor: 5, parent: 18 },
    5093: { id: 5093, name: "North Wing Hallway (5th Floor)", type: "hallway", floor: 5, parent: 16 },
    5094: { id: 5094, name: "South Wing Hallway (5th Floor)", type: "hallway", floor: 5, parent: 17 },
    5095: { id: 5095, name: "5th Floor Dome", type: "facility", floor: 5, parent: 14 },

    5096: { id: 5096, name: "South Wing Left Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 17 },
    5097: { id: 5097, name: "South Wing Center Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 17 },
    5098: { id: 5098, name: "South Wing Right Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 17 },
    5099: { id: 5099, name: "East Wing Left Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 15 },
    5100: { id: 5100, name: "East Wing Right Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 15 },
    5101: { id: 5101, name: "West Wing Left Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 18 },
    5102: { id: 5102, name: "West Wing Right Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 18 },
    5103: { id: 5103, name: "North Wing Left Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 16 },
    5104: { id: 5104, name: "North Wing Right Stairs (5th Floor)", type: "stairs", floor: "4-5", parent: 16 },

     // === MAIN BUILDING - 6TH FLOOR ROOMS ===
    // CLARO M. RECTO HALL (SOUTH WING)
    6001: { id: 6001, name: "Office", type: "office", floor: 6, parent: 17 },
    6002: { id: 6002, name: "Class Room", type: "room", floor: 6, parent: 17 },
    6003: { id: 6003, name: "Extension and Communication Relation", type: "office", floor: 6, parent: 17 },
    6004: { id: 6004, name: "CA Student Center", type: "facility", floor: 6, parent: 17 },
    6005: { id: 6005, name: "CA Learning Resource Center", type: "facility", floor: 6, parent: 17 },
    6006: { id: 6006, name: "CA Accreditation", type: "office", floor: 6, parent: 17 },
    6007: { id: 6007, name: "Student Lounge", type: "facility", floor: 6, parent: 17 },
    6008: { id: 6008, name: "Experimental Room", type: "room", floor: 6, parent: 17 },
    6009: { id: 6009, name: "Psychological Center", type: "facility", floor: 6, parent: 17 },
    6010: { id: 6010, name: "Class Room", type: "room", floor: 6, parent: 17 },
    6011: { id: 6011, name: "PUP SRM", type: "facility", floor: 6, parent: 17 },

    // EAST WING
    6020: { id: 6020, name: "CS Laboratory Storage Room 615", type: "storage", floor: 6, parent: 15 },
    6021: { id: 6021, name: "CS Laboratory Room 613", type: "laboratory", floor: 6, parent: 15 },
    6022: { id: 6022, name: "CS Laboratory Room 611", type: "laboratory", floor: 6, parent: 15 },
    6023: { id: 6023, name: "CS Laboratory Room 609", type: "laboratory", floor: 6, parent: 15 },
    6024: { id: 6024, name: "Faculty Room 605", type: "office", floor: 6, parent: 15 },
    6025: { id: 6025, name: "Faculty Room 603", type: "office", floor: 6, parent: 15 },
    6026: { id: 6026, name: "Class Room 601", type: "room", floor: 6, parent: 15 },
    6027: { id: 6027, name: "CS Laboratory Room 607", type: "laboratory", floor: 6, parent: 15 },
    6028: { id: 6028, name: "CS Laboratory Room 605", type: "laboratory", floor: 6, parent: 15 },
    6029: { id: 6029, name: "Insectarium", type: "facility", floor: 6, parent: 15 },


    // WEST WING
    6030: { id: 6030, name: "CLMC Faculty Room 602-604", type: "office", floor: 6, parent: 18 },
    6031: { id: 6031, name: "Class Room 606", type: "room", floor: 6, parent: 18 },
    6032: { id: 6032, name: "Class Room 608", type: "room", floor: 6, parent: 18 },
    6033: { id: 6033, name: "Class Room 610", type: "room", floor: 6, parent: 18 },
    6034: { id: 6034, name: "Class Room 612", type: "room", floor: 6, parent: 18 },
    6035: { id: 6035, name: "Class Room 614", type: "room", floor: 6, parent: 18 },
    6036: { id: 6036, name: "Class Room 616", type: "room", floor: 6, parent: 18 },
    6037: { id: 6037, name: "Class Room 618", type: "room", floor: 6, parent: 18 },
    6038: { id: 6038, name: "Class Room 620", type: "room", floor: 6, parent: 18 },
    6039: { id: 6039, name: "Laboratory Room 605", type: "laboratory", floor: 6, parent: 18 },
    6040: { id: 6040, name: "Class Room 603", type: "room", floor: 6, parent: 18 },
    6068: { id: 6068, name: "Class Room 601", type: "room", floor: 6, parent: 18 },


    // NORTH WING
    6041: { id: 6041, name: "Class Room 632", type: "room", floor: 6, parent: 16 },
    6042: { id: 6042, name: "Class Room 633", type: "room", floor: 6, parent: 16 },
    6043: { id: 6043, name: "Class Room 634", type: "room", floor: 6, parent: 16 },
    6044: { id: 6044, name: "Class Room 635", type: "room", floor: 6, parent: 16 },
    6045: { id: 6045, name: "Class Room 636", type: "room", floor: 6, parent: 16 },
    6046: { id: 6046, name: "Class Room 637", type: "room", floor: 6, parent: 16 },
    6047: { id: 6047, name: "Class Room 638", type: "room", floor: 6, parent: 16 },
    6048: { id: 6048, name: "Class Room 639", type: "room", floor: 6, parent: 16 },
    6049: { id: 6049, name: "Class Room 640", type: "room", floor: 6, parent: 16 },


    // FACILITIES
    6060: { id: 6060, name: "Male Toilet South Wing (6th floor)", type: "facility", floor: 6, parent: 17 },
    6061: { id: 6061, name: "Female Toilet South Wing (6th floor)", type: "facility", floor: 6, parent: 17 },
    6062: { id: 6062, name: "Male Toilet East Wing (6th floor)", type: "facility", floor: 6, parent: 15 },
    6063: { id: 6063, name: "Female Toilet East Wing (6th floor) ", type: "facility", floor: 6, parent: 15 },
    6064: { id: 6064, name: "Male Toilet West Wing (6th floor)", type: "facility", floor: 6, parent: 18 },
    6065: { id: 6065, name: "Female Toilet West Wing (6th floor)", type: "facility", floor: 6, parent: 18 },
    6066: { id: 6066, name: "Male Toilet North Wing (6th floor)", type: "facility", floor: 6, parent: 16 },
    6067: { id: 6067, name: "Female Toilet North Wing (6th floor)", type: "facility", floor: 6, parent: 16 },


    // HALLWAYS AND SPECIAL AREAS
    6090: { id: 6090, name: "East Wing Hallway (6th Floor)", type: "hallway", floor: 6, parent: 15 },
    6091: { id: 6091, name: "West Wing Hallway (6th Floor)", type: "hallway", floor: 6, parent: 18 },
    6092: { id: 6092, name: "North Wing Hallway (6th Floor)", type: "hallway", floor: 6, parent: 16 },
    6093: { id: 6093, name: "South Wing Hallway (6th Floor)", type: "hallway", floor: 6, parent: 17 },
    6094: { id: 6094, name: "6th Floor Dome", type: "facility", floor: 6, parent: 14 },
    6095: { id: 6095, name: "Dome Hallway (6th Floor)", type: "hallway", floor: 6, parent: 14 },

    // STAIRS
    6096: { id: 6096, name: "South Wing Left Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 17 },
    6097: { id: 6097, name: "South Wing Center Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 17 },
    6098: { id: 6098, name: "South Wing Right Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 17 },
    6099: { id: 6099, name: "East Wing Left Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 15 },
    6100: { id: 6100, name: "East Wing Right Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 15 },
    6101: { id: 6101, name: "West Wing Left Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 18 },
    6102: { id: 6102, name: "West Wing Right Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 18 },
    6103: { id: 6103, name: "North Wing Left Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 16 },
    6104: { id: 6104, name: "North Wing Right Stairs (6th Floor)", type: "stairs", floor: "5-6", parent: 16 },

    // NORTH WING
    6050: { id: 6050, name: "Class Room 600", type: "room", floor: 6, parent: 16 },
    6051: { id: 6051, name: "Class Room 602", type: "room", floor: 6, parent: 16 },
    6052: { id: 6052, name: "Class Room 604", type: "room", floor: 6, parent: 16 },
    6053: { id: 6053, name: "Class Room 606", type: "room", floor: 6, parent: 16 },
    6054: { id: 6054, name: "Class Room 608", type: "room", floor: 6, parent: 16 },
    6055: { id: 6055, name: "Class Room 610", type: "room", floor: 6, parent: 16 },
    6056: { id: 6056, name: "Class Room 612", type: "room", floor: 6, parent: 16 },
    6057: { id: 6057, name: "Class Room 614", type: "room", floor: 6, parent: 16 },
    6058: { id: 6058, name: "Class Room 616", type: "room", floor: 6, parent: 16 },
    6059: { id: 6059, name: "Class Room 617", type: "room", floor: 6, parent: 16 }
}

export const mainCampusData = {
  nodes, 
  edges: [
    { from: 1, to: 13, weight: calculateDistance(nodes[1], nodes[13]) },
  { from: 1, to: 58, weight: calculateDistance(nodes[1], nodes[58]) },
  { from: 1, to: 72, weight: calculateDistance(nodes[1], nodes[72]) },
  { from: 1, to: 73, weight: calculateDistance(nodes[1], nodes[73]) },
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
  { from: 5, to: 73, weight: calculateDistance(nodes[5], nodes[73]) },
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
  { from: 80, to: 41, weight: calculateDistance(nodes[80], nodes[41]) },

    // Add connection from West Wing Hallway and stairs to Lagoon path
    { from: 1032, to: 18, weight: 20 },  // West Wing Hallway to Lagoon
    { from: 18, to: 1032, weight: 20 },  // Lagoon to West Wing Hallway
    { from: 1036, to: 18, weight: 15 },  // West Wing Left Stairs to Lagoon
    { from: 18, to: 1036, weight: 15 },   // Lagoon to West Wing Left Stairs
      
    // Connect main building wings to their hallways
    { from: 15, to: 1030, weight: 5 },  // East Wing to East Wing Hallway
    { from: 16, to: 1031, weight: 5 },  // North Wing to North Wing Hallway
    { from: 17, to: 1033, weight: 5 },  // South Wing to South Wing Hallway
    // Removing direct building-to-hallway connection that bypasses stairs
    // { from: 18, to: 1032, weight: 5 },  // West Wing to West Wing Hallway
    { from: 14, to: 1023, weight: 5 },  // Dome to Dome Hallway

    // Connect main building wings to their 2nd floor hallways
    { from: 15, to: 2109, weight: 5 },  // East Wing to 2nd Floor East Wing Hallway
    { from: 16, to: 2110, weight: 5 },  // North Wing to 2nd Floor North Wing Hallway
    { from: 17, to: 2112, weight: 5 },  // South Wing to 2nd Floor South Wing Hallway
    // Removing direct building-to-hallway connection that bypasses stairs
    // { from: 18, to: 2111, weight: 5 },  // West Wing to 2nd Floor West Wing Hallway
    { from: 14, to: 2102, weight: 5 },  // Dome to 2nd Floor Dome Hallway


    // === MAIN BUILDING 1ST FLOOR INTERNAL CONNECTIONS ===
    // East Wing Connections through Hallway
    { from: 1030, to: 1001, weight: 5 }, // Hallway to Office of Student Services
    { from: 1030, to: 1002, weight: 5 }, // Hallway to Military Science
    { from: 1030, to: 1003, weight: 5 }, // Hallway to HRDO Records
    { from: 1030, to: 1004, weight: 5 }, // Hallway to Medical Clinic
    { from: 1030, to: 1005, weight: 5 }, // Hallway to Dental Clinic Services
    { from: 1030, to: 1006, weight: 5 }, // Hallway to Director Student Services
    { from: 1030, to: 1007, weight: 5 }, // Hallway to Director Student Affairs
    
    // North Wing Connections through Hallway
    { from: 1031, to: 1008, weight: 5 }, // Hallway to Commission on Audit
    { from: 1031, to: 1009, weight: 5 }, // Hallway to Procurement
    { from: 1031, to: 1010, weight: 5 }, // Hallway to Campus Ministry
    { from: 1031, to: 1011, weight: 5 }, // Hallway to Security Office
    
    // West Wing Connections through Hallway
    { from: 1032, to: 1012, weight: 5 }, // Hallway to Registrar Records
    { from: 1032, to: 1013, weight: 5 }, // Hallway to Scholarship Office
    { from: 1032, to: 1014, weight: 5 }, // Hallway to Admission Office
    
    // South Wing Connections through Hallway
    { from: 1033, to: 1015, weight: 5 }, // Hallway to HR Management
    { from: 1033, to: 1016, weight: 5 }, // Hallway to Students Records
    { from: 1033, to: 1017, weight: 5 }, // Hallway to University Registrar
    { from: 1033, to: 1018, weight: 5 }, // Hallway to Cashier
    { from: 1033, to: 1019, weight: 5 }, // Hallway to Accounting
    { from: 1033, to: 1020, weight: 5 }, // Hallway to Budget Services
    { from: 1033, to: 1021, weight: 5 }, // Hallway to Property Extension
    
    // Dome Area Connections
    { from: 1023, to: 1022, weight: 3 }, // Dome Hallway to Dome
    
    // Hallway to Stairs Connections
    { from: 1030, to: 1024, weight: 25 }, // East Wing Hallway to North Left Stairs
    { from: 1031, to: 1025, weight: 25 }, // North Wing Hallway to North Right Stairs
    { from: 1031, to: 1026, weight: 25 }, // North Wing Hallway to North Center Stairs
    { from: 1026, to: 2110, weight: 25 }, // North Center Stairs to 2nd floor hallway

    { from: 1033, to: 1027, weight: 25 }, // South Wing Hallway to South Left Stairs
    { from: 1033, to: 1028, weight: 25 }, // South Wing Hallway to South Center Stairs
    { from: 1033, to: 1029, weight: 25 }, // South Wing Hallway to South Right Stairs
    
    // Hallway to Dome Hallway Connections
    { from: 1023, to: 1030, weight: 10 }, // Dome Hallway to East Wing Hallway
    { from: 1023, to: 1031, weight: 10 }, // Dome Hallway to North Wing Hallway
    { from: 1023, to: 1032, weight: 10 }, // Dome Hallway to West Wing Hallway
    { from: 1023, to: 1033, weight: 10 }, // Dome Hallway to South Wing Hallway
    
    // Hallway Interconnections
    { from: 1030, to: 1031, weight: 15 }, // East Wing to North Wing Hallway
    { from: 1031, to: 1032, weight: 15 }, // North Wing to West Wing Hallway
    { from: 1032, to: 1033, weight: 15 }, // West Wing to South Wing Hallway
    { from: 1033, to: 1030, weight: 15 }, // South Wing to East Wing Hallway

    // === MAIN BUILDING 2ND FLOOR INTERNAL CONNECTIONS ===
    // Stairs from 1st to 2nd floor connections
    { from: 1024, to: 2110, weight: 25 }, // North Wing Left Stairs to 2nd floor hallway
    { from: 1025, to: 2110, weight: 25 }, // North Wing Right Stairs to 2nd floor hallway

    { from: 1027, to: 2112, weight: 25 }, // South Wing Left Stairs to 2nd floor hallway
    { from: 1028, to: 2112, weight: 25 }, // South Wing Center Stairs to 2nd floor hallway
    { from: 1029, to: 2112, weight: 25 }, // South Wing Right Stairs to 2nd floor hallway

    // East Wing Connections through Hallway
    { from: 2109, to: 2001, weight: 5 }, // Hallway to E219
    { from: 2109, to: 2002, weight: 5 }, // Hallway to E217
    { from: 2109, to: 2003, weight: 5 }, // Hallway to E215
    { from: 2109, to: 2004, weight: 5 }, // Hallway to E213
    { from: 2109, to: 2005, weight: 5 }, // Hallway to E211
    { from: 2109, to: 2006, weight: 5 }, // Hallway to E209
    { from: 2109, to: 2007, weight: 5 }, // Hallway to E207
    { from: 2109, to: 2008, weight: 5 }, // Hallway to E206
    { from: 2109, to: 2009, weight: 5 }, // Hallway to E208
    { from: 2109, to: 2010, weight: 5 }, // Hallway to E210
    { from: 2109, to: 2011, weight: 5 }, // Hallway to E212
    { from: 2109, to: 2012, weight: 5 }, // Hallway to E214
    { from: 2109, to: 2013, weight: 5 }, // Hallway to E216
    { from: 2109, to: 2014, weight: 5 }, // Hallway to E218
    { from: 2109, to: 2015, weight: 5 }, // Hallway to E220

    // West Wing Connections
    { from: 2111, to: 2016, weight: 5 }, // Hallway to W220
    { from: 2111, to: 2017, weight: 5 }, // Hallway to W218
    { from: 2111, to: 2018, weight: 5 }, // Hallway to W216
    { from: 2111, to: 2019, weight: 5 }, // Hallway to W214
    { from: 2111, to: 2020, weight: 5 }, // Hallway to W212
    { from: 2111, to: 2021, weight: 5 }, // Hallway to W210
    { from: 2111, to: 2022, weight: 5 }, // Hallway to W208
    { from: 2111, to: 2023, weight: 5 }, // Hallway to W206
    { from: 2111, to: 2024, weight: 5 }, // Hallway to W204
    { from: 2111, to: 2025, weight: 5 }, // Hallway to W202
    { from: 2111, to: 2026, weight: 5 }, // Hallway to W200
    { from: 2111, to: 2027, weight: 5 }, // Hallway to W205
    { from: 2111, to: 2028, weight: 5 }, // Hallway to W207
    { from: 2111, to: 2029, weight: 5 }, // Hallway to W209
    { from: 2111, to: 2030, weight: 5 }, // Hallway to W213
    { from: 2111, to: 2031, weight: 5 }, // Hallway to W215
    { from: 2111, to: 2032, weight: 5 }, // Hallway to Faculty Circle
    { from: 2111, to: 2033, weight: 5 }, // Hallway to PUPFFA Office
    { from: 2111, to: 2034, weight: 5 }, // Hallway to Research Center

    // North Wing Connections through Hallway
    { from: 2110, to: 2035, weight: 5 }, // Hallway to College of Science
    { from: 2110, to: 2036, weight: 5 }, // Hallway to College of Languages
    { from: 2110, to: 2037, weight: 5 }, // Hallway to College of Arts
    { from: 2110, to: 2038, weight: 5 }, // Hallway to College of Accountancy
    { from: 2110, to: 2039, weight: 5 }, // Hallway to College of Business
    { from: 2110, to: 2040, weight: 5 }, // Hallway to College of Education

    // South Wing Connections through Hallway
    { from: 2112, to: 2041, weight: 5 }, // Hallway to President's Office
    { from: 2112, to: 2042, weight: 5 }, // Hallway to Mateo Conference Room
    { from: 2112, to: 2043, weight: 5 }, // Hallway to Board Secretary
    { from: 2112, to: 2044, weight: 5 }, // Hallway to VP Academic Affairs
    { from: 2112, to: 2045, weight: 5 }, // Hallway to VP Administration
    { from: 2112, to: 2046, weight: 5 }, // Hallway to Carague Conference Room
    { from: 2112, to: 2047, weight: 5 }, // Hallway to VP Research

    // Dome Area Connections
    { from: 2102, to: 2101, weight: 3 }, // Dome Hallway to Dome

    // Hallway to Stairs Connections (2nd to 3rd floor)
    { from: 2109, to: 2103, weight: 25 }, // East Wing Hallway to North Left Stairs
    { from: 2110, to: 2104, weight: 25 }, // North Wing Hallway to North Right Stairs

    { from: 2112, to: 2106, weight: 10 }, // South Wing Hallway to South Left Stairs
    { from: 2112, to: 2107, weight: 5 },  // South Wing Hallway to South Center Stairs - lower weight for preferred path
    { from: 2112, to: 2108, weight: 10 }, // South Wing Hallway to South Right Stairs

    // Hallway to Dome Hallway Connections
    { from: 2102, to: 2109, weight: 10 }, // Dome Hallway to East Wing Hallway
    { from: 2102, to: 2110, weight: 10 }, // Dome Hallway to North Wing Hallway
    { from: 2102, to: 2111, weight: 10 }, // Dome Hallway to West Wing Hallway
    { from: 2102, to: 2112, weight: 10 }, // Dome Hallway to South Wing Hallway

    // Hallway Interconnections
    { from: 2109, to: 2110, weight: 15 }, // East Wing to North Wing Hallway
    { from: 2110, to: 2111, weight: 15 }, // North Wing to West Wing Hallway
    { from: 2111, to: 2112, weight: 15 }, // West Wing to South Wing Hallway
    { from: 2112, to: 2109, weight: 15 }, // South Wing to East Wing Hallway

    // 2nd Floor Connections are already defined above

    // Adjacent Room Connections
    { from: 2001, to: 2002, weight: 3 }, // E219 to E217
    { from: 2002, to: 2003, weight: 3 }, // E217 to E215
    { from: 2003, to: 2004, weight: 3 }, // E215 to E213
    { from: 2004, to: 2005, weight: 3 }, // E213 to E211
    { from: 2005, to: 2006, weight: 3 }, // E211 to E209
    { from: 2006, to: 2007, weight: 3 }, // E209 to E207

    { from: 2016, to: 2017, weight: 3 }, // W220 to W218
    { from: 2017, to: 2018, weight: 3 }, // W218 to W216
    { from: 2018, to: 2019, weight: 3 }, // W216 to W214
    { from: 2019, to: 2020, weight: 3 }, // W214 to W212
    { from: 2020, to: 2021, weight: 3 }, // W212 to W210
    { from: 2021, to: 2022, weight: 3 }, // W210 to W208

    { from: 2041, to: 2042, weight: 3 }, // President's Office to Mateo Conference Room
    { from: 2042, to: 2043, weight: 3 }, // Mateo Conference Room to Board Secretary
    { from: 2044, to: 2045, weight: 3 }, // VP Academic to VP Admin
    { from: 2045, to: 2046, weight: 3 }, // VP Admin to Carague Conference Room

    // Add new edges for 3rd floor
    // East Wing Connections
    { from: 3069, to: 3001, weight: 5 }, // Hallway to E313
    { from: 3069, to: 3002, weight: 5 }, // Hallway to E311
    { from: 3069, to: 3003, weight: 5 }, // Hallway to E309
    { from: 3069, to: 3004, weight: 5 }, // Hallway to E307
    { from: 3069, to: 3005, weight: 5 }, // Hallway to E305
    { from: 3069, to: 3006, weight: 5 }, // Hallway to E305A
    { from: 3069, to: 3007, weight: 5 }, // Hallway to E303
    { from: 3069, to: 3008, weight: 5 }, // Hallway to E301
    { from: 3069, to: 3009, weight: 5 }, // Hallway to Male Toilet
    { from: 3069, to: 3010, weight: 5 }, // Hallway to Female Toilet
    { from: 3069, to: 3011, weight: 5 }, // Hallway to E310
    { from: 3069, to: 3012, weight: 5 }, // Hallway to E308
    { from: 3069, to: 3013, weight: 5 }, // Hallway to E306
    { from: 3069, to: 3014, weight: 5 }, // Hallway to E304
    { from: 3069, to: 3015, weight: 5 }, // Hallway to E302
    { from: 3069, to: 3016, weight: 5 }, // Hallway to E300
    { from: 3069, to: 3017, weight: 5 }, // Hallway to E300A

    // West Wing Connections
    { from: 3070, to: 3018, weight: 5 }, // Hallway to W318
    { from: 3070, to: 3019, weight: 5 }, // Hallway to W316
    { from: 3070, to: 3020, weight: 5 }, // Hallway to W314
    { from: 3070, to: 3021, weight: 5 }, // Hallway to W310
    { from: 3070, to: 3022, weight: 5 }, // Hallway to W312
    { from: 3070, to: 3023, weight: 5 }, // Hallway to W308
    { from: 3070, to: 3024, weight: 5 }, // Hallway to W306
    { from: 3070, to: 3025, weight: 5 }, // Hallway to W304
    { from: 3070, to: 3026, weight: 5 }, // Hallway to COABTE Faculty Office
    { from: 3070, to: 3027, weight: 5 }, // Hallway to W311
    { from: 3070, to: 3028, weight: 5 }, // Hallway to W309
    { from: 3070, to: 3029, weight: 5 }, // Hallway to W307
    { from: 3070, to: 3030, weight: 5 }, // Hallway to W305
    { from: 3070, to: 3031, weight: 5 }, // Hallway to W303
    { from: 3070, to: 3032, weight: 5 }, // Hallway to W301
    { from: 3070, to: 3033, weight: 5 }, // Hallway to Female Toilet
    { from: 3070, to: 3034, weight: 5 }, // Hallway to Male Toilet

    // North Wing Connections
    { from: 3071, to: 3035, weight: 5 }, // Hallway to N301
    { from: 3071, to: 3036, weight: 5 }, // Hallway to N303
    { from: 3071, to: 3037, weight: 5 }, // Hallway to N313
    { from: 3071, to: 3038, weight: 5 }, // Hallway to N315
    { from: 3071, to: 3039, weight: 5 }, // Hallway to N317
    { from: 3071, to: 3040, weight: 5 }, // Hallway to Male Toilet
    { from: 3071, to: 3041, weight: 5 }, // Hallway to Female Toilet
    { from: 3071, to: 3042, weight: 5 }, // Hallway to N304
    { from: 3071, to: 3043, weight: 5 }, // Hallway to N306
    { from: 3071, to: 3044, weight: 5 }, // Hallway to N308
    { from: 3071, to: 3045, weight: 5 }, // Hallway to N310
    { from: 3071, to: 3046, weight: 5 }, // Hallway to N312
    { from: 3071, to: 3047, weight: 5 }, // Hallway to N314
    { from: 3071, to: 3048, weight: 5 }, // Hallway to N316
    { from: 3071, to: 3049, weight: 5 }, // Hallway to N318

    // South Wing Connections
    { from: 3072, to: 3050, weight: 5 }, // Hallway to Chief Legal
    { from: 3072, to: 3051, weight: 5 }, // Hallway to Staff Legal
    { from: 3072, to: 3052, weight: 5 }, // Hallway to Internal Audit
    { from: 3072, to: 3053, weight: 5 }, // Hallway to BAC
    { from: 3072, to: 3054, weight: 5 }, // Hallway to PPDO
    { from: 3072, to: 3055, weight: 5 }, // Hallway to Research Extension
    { from: 3072, to: 3056, weight: 5 }, // Hallway to Electronic Data Processing
    { from: 3072, to: 3057, weight: 5 }, // Hallway to Placement Office
    { from: 3072, to: 3058, weight: 5 }, // Hallway to PFO
    { from: 3072, to: 3059, weight: 5 }, // Hallway to Alumni Relations
    { from: 3072, to: 3060, weight: 5 }, // Hallway to Server
    { from: 3072, to: 3061, weight: 5 }, // Hallway to Publication Office
    { from: 3072, to: 3062, weight: 5 }, // Hallway to CRO
    { from: 3072, to: 3063, weight: 5 }, // Hallway to CRBDO
    { from: 3072, to: 3064, weight: 5 }, // Hallway to PAO
    { from: 3072, to: 3065, weight: 5 }, // Hallway to AVP Research
    { from: 3072, to: 3066, weight: 5 }, // Hallway to OVPRED

    // Dome and Central Area Connections
    { from: 3068, to: 3067, weight: 3 }, // Dome Hallway to Dome
    { from: 3068, to: 3069, weight: 10 }, // Dome Hallway to East Wing Hallway
    { from: 3068, to: 3070, weight: 10 }, // Dome Hallway to West Wing Hallway
    { from: 3068, to: 3071, weight: 10 }, // Dome Hallway to North Wing Hallway
    { from: 3068, to: 3072, weight: 10 }, // Dome Hallway to South Wing Hallway

    // Adjacent Room Connections
    { from: 3001, to: 3002, weight: 3 }, // E313 to E311
    { from: 3002, to: 3003, weight: 3 }, // E311 to E309
    { from: 3003, to: 3004, weight: 3 }, // E309 to E307
    { from: 3004, to: 3005, weight: 3 }, // E307 to E305
    { from: 3005, to: 3006, weight: 3 }, // E305 to E305A
    { from: 3006, to: 3007, weight: 3 }, // E305A to E303

    { from: 3018, to: 3019, weight: 3 }, // W318 to W316
    { from: 3019, to: 3020, weight: 3 }, // W316 to W314
    { from: 3020, to: 3021, weight: 3 }, // W314 to W310
    { from: 3021, to: 3022, weight: 3 }, // W310 to W312
    { from: 3022, to: 3023, weight: 3 }, // W312 to W308

    { from: 3050, to: 3051, weight: 3 }, // Chief Legal to Staff Legal
    { from: 3051, to: 3052, weight: 3 }, // Staff Legal to Internal Audit
    { from: 3052, to: 3053, weight: 3 }, // Internal Audit to BAC
    { from: 3053, to: 3054, weight: 3 }, // BAC to PPDO
    { from: 3054, to: 3055, weight: 3 }, // PPDO to Research Extension

    // Stairs Connections (2nd to 3rd floor)
    { from: 2103, to: 3071, weight: 25 }, // North Wing Left Stairs to 3rd floor hallway
    { from: 2104, to: 3071, weight: 25 }, // North Wing Right Stairs to 3rd floor hallway

    { from: 2106, to: 3072, weight: 25 }, // South Wing Left Stairs to 3rd floor hallway
    { from: 2107, to: 3072, weight: 15 }, // South Wing Center Stairs to 3rd floor hallway - lower weight for preferred path
    { from: 2108, to: 3072, weight: 25 }, // South Wing Right Stairs to 3rd floor hallway

    // Add new edges for 4th floor
    // East Wing Connections
    { from: 4091, to: 4001, weight: 5 }, // Hallway to E417
    { from: 4091, to: 4002, weight: 5 }, // Hallway to E415
    { from: 4091, to: 4003, weight: 5 }, // Hallway to E413
    { from: 4091, to: 4004, weight: 5 }, // Hallway to E411
    { from: 4091, to: 4005, weight: 5 }, // Hallway to E409
    { from: 4091, to: 4006, weight: 5 }, // Hallway to E407
    { from: 4091, to: 4007, weight: 5 }, // Hallway to E405
    { from: 4091, to: 4008, weight: 5 }, // Hallway to E403
    { from: 4091, to: 4009, weight: 5 }, // Hallway to E401
    { from: 4091, to: 4010, weight: 5 }, // Hallway to Male Toilet
    { from: 4091, to: 4011, weight: 5 }, // Hallway to Female Toilet
    { from: 4091, to: 4012, weight: 5 }, // Hallway to Office
    { from: 4091, to: 4013, weight: 5 }, // Hallway to E418
    { from: 4091, to: 4014, weight: 5 }, // Hallway to E416
    { from: 4091, to: 4015, weight: 5 }, // Hallway to E414
    { from: 4091, to: 4016, weight: 5 }, // Hallway to E412
    { from: 4091, to: 4017, weight: 5 }, // Hallway to E410
    { from: 4091, to: 4018, weight: 5 }, // Hallway to E408
    { from: 4091, to: 4019, weight: 5 }, // Hallway to E406
    { from: 4091, to: 4020, weight: 5 }, // Hallway to E404
    { from: 4091, to: 4021, weight: 5 }, // Hallway to E402
    { from: 4091, to: 4022, weight: 5 }, // Hallway to E400

    // West Wing Connections
    { from: 4092, to: 4023, weight: 5 }, // Hallway to W420
    { from: 4092, to: 4024, weight: 5 }, // Hallway to W414
    { from: 4092, to: 4025, weight: 5 }, // Hallway to W412
    { from: 4092, to: 4026, weight: 5 }, // Hallway to W410
    { from: 4092, to: 4027, weight: 5 }, // Hallway to W408
    { from: 4092, to: 4028, weight: 5 }, // Hallway to W406
    { from: 4092, to: 4029, weight: 5 }, // Hallway to W404
    { from: 4092, to: 4030, weight: 5 }, // Hallway to Faculty Office
    { from: 4092, to: 4031, weight: 5 }, // Hallway to Department Head Office
    { from: 4092, to: 4032, weight: 5 }, // Hallway to W417
    { from: 4092, to: 4033, weight: 5 }, // Hallway to W415
    { from: 4092, to: 4034, weight: 5 }, // Hallway to W413
    { from: 4092, to: 4035, weight: 5 }, // Hallway to W409
    { from: 4092, to: 4036, weight: 5 }, // Hallway to W407
    { from: 4092, to: 4037, weight: 5 }, // Hallway to W405
    { from: 4092, to: 4038, weight: 5 }, // Hallway to W403
    { from: 4092, to: 4039, weight: 5 }, // Hallway to W401
    { from: 4092, to: 4040, weight: 5 }, // Hallway to Female Toilet
    { from: 4092, to: 4041, weight: 5 }, // Hallway to Male Toilet

    // North Wing Connections
    { from: 4093, to: 4042, weight: 5 }, // Hallway to Office
    { from: 4093, to: 4043, weight: 5 }, // Hallway to N400
    { from: 4093, to: 4044, weight: 5 }, // Hallway to N402
    { from: 4093, to: 4045, weight: 5 }, // Hallway to N404
    { from: 4093, to: 4046, weight: 5 }, // Hallway to N406
    { from: 4093, to: 4047, weight: 5 }, // Hallway to N408
    { from: 4093, to: 4048, weight: 5 }, // Hallway to N410
    { from: 4093, to: 4049, weight: 5 }, // Hallway to N412
    { from: 4093, to: 4050, weight: 5 }, // Hallway to N414
    { from: 4093, to: 4051, weight: 5 }, // Hallway to N416
    { from: 4093, to: 4052, weight: 5 }, // Hallway to N418
    { from: 4093, to: 4053, weight: 5 }, // Hallway to Male Toilet
    { from: 4093, to: 4054, weight: 5 }, // Hallway to Female Toilet
    { from: 4093, to: 4055, weight: 5 }, // Hallway to N401
    { from: 4093, to: 4056, weight: 5 }, // Hallway to N403
    { from: 4093, to: 4057, weight: 5 }, // Hallway to N405
    { from: 4093, to: 4058, weight: 5 }, // Hallway to N407
    { from: 4093, to: 4059, weight: 5 }, // Hallway to N409
    { from: 4093, to: 4060, weight: 5 }, // Hallway to N411
    { from: 4093, to: 4061, weight: 5 }, // Hallway to N413
    { from: 4093, to: 4062, weight: 5 }, // Hallway to N415
    { from: 4093, to: 4063, weight: 5 }, // Hallway to N417

    // South Wing Connections
    { from: 4094, to: 4067, weight: 5 }, // Hallway to Classroom
    { from: 4094, to: 4068, weight: 5 }, // Hallway to ITSO
    { from: 4094, to: 4069, weight: 5 }, // Hallway to Research Chef's Lounge
    { from: 4094, to: 4070, weight: 5 }, // Hallway to CHE Faculty Room
    { from: 4094, to: 4071, weight: 5 }, // Hallway to SCITECH Research Office
    { from: 4094, to: 4072, weight: 5 }, // Hallway to PUP Film Center
    { from: 4094, to: 4073, weight: 5 }, // Hallway to Institute of Social History
    { from: 4094, to: 4074, weight: 5 }, // Hallway to Director Global Warning Studies
    { from: 4094, to: 4075, weight: 5 }, // Hallway to IBITS Office
    { from: 4094, to: 4076, weight: 5 }, // Hallway to Office
    { from: 4094, to: 4077, weight: 5 }, // Hallway to CLL Audio Visual Room
    { from: 4094, to: 4078, weight: 5 }, // Hallway to Branches Office
    { from: 4094, to: 4079, weight: 5 }, // Hallway to Office
    { from: 4094, to: 4080, weight: 5 }, // Hallway to Speech Laboratory
    { from: 4094, to: 4081, weight: 5 }, // Hallway to Training Center
    { from: 4094, to: 4082, weight: 5 }, // Hallway to Training Center
    { from: 4094, to: 4083, weight: 5 }, // Hallway to CLL Library
    { from: 4094, to: 4084, weight: 5 }, // Hallway to Class Room
    { from: 4094, to: 4085, weight: 5 }, // Hallway to Class Room
    { from: 4094, to: 4086, weight: 5 }, // Hallway to Extension Center
    { from: 4094, to: 4087, weight: 5 }, // Hallway to Student Center
    { from: 4094, to: 4088, weight: 5 }, // Hallway to Student Lounge

    // Dome and Central Area Connections
    { from: 4090, to: 4089, weight: 3 }, // Dome Hallway to Dome
    { from: 4090, to: 4091, weight: 10 }, // Dome Hallway to East Wing Hallway
    { from: 4090, to: 4092, weight: 10 }, // Dome Hallway to West Wing Hallway
    { from: 4090, to: 4093, weight: 10 }, // Dome Hallway to North Wing Hallway
    { from: 4090, to: 4094, weight: 10 }, // Dome Hallway to South Wing Hallway

    // Adjacent Room Connections
    { from: 4001, to: 4002, weight: 3 }, // E417 to E415
    { from: 4002, to: 4003, weight: 3 }, // E415 to E413
    { from: 4003, to: 4004, weight: 3 }, // E413 to E411
    { from: 4004, to: 4005, weight: 3 }, // E411 to E409
    { from: 4005, to: 4006, weight: 3 }, // E409 to E407
    { from: 4006, to: 4007, weight: 3 }, // E407 to E405
    { from: 4007, to: 4008, weight: 3 }, // E405 to E403
    { from: 4008, to: 4009, weight: 3 }, // E403 to E401

    { from: 4013, to: 4014, weight: 3 }, // E418 to E416
    { from: 4014, to: 4015, weight: 3 }, // E416 to E414
    { from: 4015, to: 4016, weight: 3 }, // E414 to E412
    { from: 4016, to: 4017, weight: 3 }, // E412 to E410
    { from: 4017, to: 4018, weight: 3 }, // E410 to E408
    { from: 4018, to: 4019, weight: 3 }, // E408 to E406
    { from: 4019, to: 4020, weight: 3 }, // E406 to E404
    { from: 4020, to: 4021, weight: 3 }, // E404 to E402
    { from: 4021, to: 4022, weight: 3 }, // E402 to E400

    { from: 4023, to: 4024, weight: 3 }, // W420 to W414
    { from: 4024, to: 4025, weight: 3 }, // W414 to W412
    { from: 4025, to: 4026, weight: 3 }, // W412 to W410
    { from: 4026, to: 4027, weight: 3 }, // W410 to W408
    { from: 4027, to: 4028, weight: 3 }, // W408 to W406
    { from: 4028, to: 4029, weight: 3 }, // W406 to W404

    { from: 4032, to: 4033, weight: 3 }, // W417 to W415
    { from: 4033, to: 4034, weight: 3 }, // W415 to W413
    { from: 4034, to: 4035, weight: 3 }, // W413 to W409
    { from: 4035, to: 4036, weight: 3 }, // W409 to W407
    { from: 4036, to: 4037, weight: 3 }, // W407 to W405
    { from: 4037, to: 4038, weight: 3 }, // W405 to W403
    { from: 4038, to: 4039, weight: 3 }, // W403 to W401


    // === FIFTH FLOOR CONNECTIONS ===
    
    // South Wing Connections
    { from: 5094, to: 5001, weight: 3 }, // South Wing Hallway to S501
    { from: 5001, to: 5002, weight: 3 }, // S501 to S502
    { from: 5002, to: 5003, weight: 3 }, // S502 to S503A
    { from: 5003, to: 5004, weight: 3 }, // S503A to S503B
    { from: 5004, to: 5005, weight: 3 }, // S503B to S504
    { from: 5005, to: 5006, weight: 3 }, // S504 to S505
    { from: 5006, to: 5017, weight: 3 }, // S505 to Curriculum Planning & Development Office
    
    { from: 5007, to: 5008, weight: 3 }, // S508 to S509
    { from: 5008, to: 5009, weight: 3 }, // S509 to S510
    { from: 5009, to: 5010, weight: 3 }, // S510 to S511
    { from: 5010, to: 5011, weight: 3 }, // S511 to S512B
    { from: 5011, to: 5012, weight: 3 }, // S512B to S513
    { from: 5007, to: 5020, weight: 3 }, // S508 to SCI-TECH Research & Development Center
    
    { from: 5013, to: 5014, weight: 3 }, // S515 to S517
    { from: 5014, to: 5015, weight: 3 }, // S517 to S518
    { from: 5015, to: 5016, weight: 3 }, // S518 to CCMT/Server Room
    { from: 5016, to: 5017, weight: 3 }, // CCMT/Server Room to Curriculum Planning Office

    // East Wing Connections
    { from: 5020, to: 5021, weight: 3 }, // E502 to E504
    { from: 5021, to: 5022, weight: 3 }, // E504 to E506
    { from: 5022, to: 5023, weight: 3 }, // E506 to JPIA Office
    { from: 5023, to: 5024, weight: 3 }, // JPIA Office to E508
    { from: 5024, to: 5025, weight: 3 }, // E508 to E510
    { from: 5025, to: 5026, weight: 3 }, // E510 to E512
    { from: 5026, to: 5027, weight: 3 }, // E512 to E514
    { from: 5027, to: 5028, weight: 3 }, // E514 to E516
    { from: 5091, to: 5023, weight: 2 }, // East Wing Hallway to JPIA Office
    { from: 5091, to: 5088, weight: 2 }, // East Wing Hallway to College of Accountancy Student Council Office
    { from: 5088, to: 5039, weight: 3 }, // College of Accountancy Student Council Office to E517

    { from: 5029, to: 5030, weight: 3 }, // E501 to E503
    { from: 5030, to: 5031, weight: 3 }, // E503 to E505
    { from: 5031, to: 5032, weight: 3 }, // E505 to E507
    { from: 5032, to: 5033, weight: 3 }, // E507 to E509
    { from: 5033, to: 5034, weight: 3 }, // E509 to E511
    { from: 5034, to: 5035, weight: 3 }, // E511 to E513
    { from: 5035, to: 5036, weight: 3 }, // E513 to E515
    { from: 5036, to: 5037, weight: 3 }, // E515 to E517
    { from: 5037, to: 5082, weight: 2 }, // E517 to Male Toilet
    { from: 5037, to: 5083, weight: 2 }, // E517 to Female Toilet

    // West Wing Connections
    { from: 5040, to: 5041, weight: 3 }, // W502 to W504
    { from: 5041, to: 5042, weight: 3 }, // W504 to W506
    { from: 5042, to: 5043, weight: 3 }, // W506 to W508
    { from: 5043, to: 5044, weight: 3 }, // W508 to W510
    { from: 5044, to: 5045, weight: 3 }, // W510 to W512
    { from: 5045, to: 5046, weight: 3 }, // W512 to W514
    { from: 5046, to: 5047, weight: 3 }, // W514 to W516
    { from: 5047, to: 5048, weight: 3 }, // W516 to W518
    { from: 5049, to: 5050, weight: 3 }, // W501 to W503
    { from: 5050, to: 5051, weight: 3 }, // W503 to W505
    { from: 5051, to: 5052, weight: 3 }, // W505 to W507
    { from: 5052, to: 5053, weight: 3 }, // W507 to W509
    { from: 5053, to: 5054, weight: 3 }, // W509 to W511
    { from: 5054, to: 5055, weight: 3 }, // W511 to W513
    { from: 5055, to: 5056, weight: 3 }, // W513 to W515
    { from: 5056, to: 5057, weight: 3 }, // W515 to W517
    { from: 5057, to: 5089, weight: 3 }, // W517 to Bayan Muna Office
    { from: 5092, to: 5089, weight: 2 }, // West Wing Hallway to Bayan Muna Office

    // North Wing Connections
    { from: 5060, to: 5061, weight: 3 }, // N502 to N504
    { from: 5061, to: 5062, weight: 3 }, // N504 to N506
    { from: 5062, to: 5063, weight: 3 }, // N506 to N508
    { from: 5063, to: 5064, weight: 3 }, // N508 to N510
    { from: 5064, to: 5065, weight: 3 }, // N510 to N512
    { from: 5065, to: 5066, weight: 3 }, // N512 to N514
    { from: 5066, to: 5067, weight: 3 }, // N514 to N516
    { from: 5067, to: 5068, weight: 3 }, // N516 to N518

    { from: 5069, to: 5070, weight: 3 }, // N501 to N503
    { from: 5070, to: 5071, weight: 3 }, // N503 to N505
    { from: 5071, to: 5072, weight: 3 }, // N505 to N507
    { from: 5072, to: 5073, weight: 3 }, // N507 to N509
    { from: 5073, to: 5074, weight: 3 }, // N509 to N511
    { from: 5074, to: 5075, weight: 3 }, // N511 to N513
    { from: 5075, to: 5076, weight: 3 }, // N513 to N515
    { from: 5076, to: 5077, weight: 3 }, // N515 to N517

    // Proper stair connections between 4th and 5th floors
    // Left Stairs
    { from: 5094, to: 5096, weight: 35 }, // 5th floor hallway to left stairs
    { from: 5096, to: 4095, weight: 25 }, // 5th floor left stairs to 4th floor left stairs
    { from: 4095, to: 4094, weight: 25 }, // 4th floor left stairs to hallway
    { from: 4094, to: 4095, weight: 25 }, // 4th floor hallway to left stairs
    { from: 4095, to: 5096, weight: 25 }, // 4th floor left stairs to 5th floor left stairs
    { from: 5096, to: 5094, weight: 35 }, // 5th floor left stairs to hallway

    // Center Stairs
    { from: 5094, to: 5097, weight: 20 }, // 5th floor hallway to center stairs
    { from: 5097, to: 4096, weight: 25 }, // 5th floor center stairs to 4th floor center stairs
    { from: 4096, to: 4094, weight: 25 }, // 4th floor center stairs to hallway
    { from: 4094, to: 4096, weight: 25 }, // 4th floor hallway to center stairs
    { from: 4096, to: 5097, weight: 25 }, // 4th floor center stairs to 5th floor center stairs
    { from: 5097, to: 5094, weight: 20 }, // 5th floor center stairs to hallway

    // Right Stairs
    { from: 5094, to: 5098, weight: 30 }, // 5th floor hallway to right stairs
    { from: 5098, to: 4097, weight: 25 }, // 5th floor right stairs to 4th floor right stairs
    { from: 4097, to: 4094, weight: 25 }, // 4th floor right stairs to hallway
    { from: 4094, to: 4097, weight: 25 }, // 4th floor hallway to right stairs
    { from: 4097, to: 5098, weight: 25 }, // 4th floor right stairs to 5th floor right stairs
    { from: 5098, to: 5094, weight: 30 }, // 5th floor right stairs to hallway

    // Connect 4th floor stairs to 3rd floor stairs
    { from: 4095, to: 3076, weight: 25 }, // 4th floor left stairs to 3rd floor left stairs
    { from: 4096, to: 3077, weight: 15 }, // 4th floor center stairs to 3rd floor center stairs
    { from: 4097, to: 3078, weight: 25 }, // 4th floor right stairs to 3rd floor right stairs

    // Wing Connections to Central Area
    { from: 5093, to: 5095, weight: 5 }, // North Wing to Central Area
    { from: 5095, to: 5094, weight: 5 }, // Central Area to South Wing
    { from: 5095, to: 5091, weight: 5 }, // Central Area to East Wing
    { from: 5095, to: 5092, weight: 5 }, // Central Area to West Wing

    // Wing Hallway Connections
    { from: 5093, to: 5060, weight: 2 }, // North Wing Central to Right Hallway
    { from: 5093, to: 5069, weight: 2 }, // North Wing Central to Left Hallway
    { from: 5094, to: 5001, weight: 2 }, // South Wing Central to Left Hallway
    { from: 5094, to: 5007, weight: 2 }, // South Wing Central to Right Hallway
    { from: 5091, to: 5020, weight: 2 }, // East Wing Central to Bottom Hallway
    { from: 5091, to: 5029, weight: 2 }, // East Wing Central to Top Hallway
    { from: 5092, to: 5040, weight: 2 }, // West Wing Central to Bottom Hallway
    { from: 5092, to: 5049, weight: 2 }, // West Wing Central to Top Hallway

    { from: 5029, to: 5030, weight: 3 }, // E501 to E503

    // === 6TH FLOOR CONNECTIONS ===
    // Dome and Central Area Connections
    { from: 6094, to: 6095, weight: 3 },  // 6th Floor Dome to Dome Hallway
    { from: 6095, to: 6090, weight: 10 }, // Dome Hallway to East Wing Hallway
    { from: 6095, to: 6091, weight: 10 }, // Dome Hallway to West Wing Hallway
    { from: 6095, to: 6092, weight: 10 }, // Dome Hallway to North Wing Hallway
    { from: 6095, to: 6093, weight: 10 }, // Dome Hallway to South Wing Hallway


    // Hallway Interconnections
    { from: 6090, to: 6092, weight: 15 }, // East Wing to North Wing Hallway
    { from: 6092, to: 6091, weight: 15 }, // North Wing to West Wing Hallway
    { from: 6091, to: 6093, weight: 15 }, // West Wing to South Wing Hallway
    { from: 6093, to: 6090, weight: 15 }, // South Wing to East Wing Hallway


    // South Wing (Claro M. Recto Hall) Connections
    { from: 6093, to: 6001, weight: 5 }, // Hallway to Office
    { from: 6093, to: 6002, weight: 5 }, // Hallway to Class Room
    { from: 6093, to: 6003, weight: 5 }, // Hallway to Extension and Communication Relation
    { from: 6093, to: 6004, weight: 5 }, // Hallway to CA Student Center
    { from: 6093, to: 6005, weight: 5 }, // Hallway to CA Learning Resource Center
    { from: 6093, to: 6006, weight: 5 }, // Hallway to CA Accreditation
    { from: 6093, to: 6007, weight: 5 }, // Hallway to Student Lounge
    { from: 6093, to: 6008, weight: 5 }, // Hallway to Experimental Room
    { from: 6093, to: 6009, weight: 5 }, // Hallway to Psychological Center
    { from: 6093, to: 6010, weight: 5 }, // Hallway to Class Room
    { from: 6093, to: 6011, weight: 5 }, // Hallway to PUP SRM
    { from: 6093, to: 6060, weight: 5 }, // Hallway to Male Toilet South Wing
    { from: 6093, to: 6061, weight: 5 }, // Hallway to Female Toilet South Wing


    // Adjacent Room Connections in South Wing
    { from: 6001, to: 6002, weight: 3 }, // Office to Class Room
    { from: 6002, to: 6003, weight: 3 }, // Class Room to Extension and Communication Relation
    { from: 6003, to: 6004, weight: 3 }, // Extension to CA Student Center
    { from: 6004, to: 6005, weight: 3 }, // CA Student Center to Learning Resource Center
    { from: 6005, to: 6006, weight: 3 }, // Learning Resource Center to CA Accreditation
    { from: 6006, to: 6007, weight: 3 }, // CA Accreditation to Student Lounge
    { from: 6007, to: 6008, weight: 3 }, // Student Lounge to Experimental Room
    { from: 6008, to: 6009, weight: 3 }, // Experimental Room to Psychological Center
    { from: 6009, to: 6010, weight: 3 }, // Psychological Center to Class Room
    { from: 6010, to: 6011, weight: 3 }, // Class Room to PUP SRM


    // East Wing Connections
    { from: 6090, to: 6020, weight: 5 }, // Hallway to CS Laboratory Storage Room 615
    { from: 6090, to: 6021, weight: 5 }, // Hallway to CS Laboratory Room 613
    { from: 6090, to: 6022, weight: 5 }, // Hallway to CS Laboratory Room 611
    { from: 6090, to: 6023, weight: 5 }, // Hallway to CS Laboratory Room 609
    { from: 6090, to: 6024, weight: 5 }, // Hallway to Faculty Room 605
    { from: 6090, to: 6025, weight: 5 }, // Hallway to Faculty Room 603
    { from: 6090, to: 6026, weight: 5 }, // Hallway to Class Room 601
    { from: 6090, to: 6027, weight: 5 }, // Hallway to CS Laboratory Room 607
    { from: 6090, to: 6028, weight: 5 }, // Hallway to CS Laboratory Room 605
    { from: 6090, to: 6029, weight: 5 }, // Hallway to Insectarium
    { from: 6090, to: 6062, weight: 5 }, // Hallway to Male Toilet East Wing
    { from: 6090, to: 6063, weight: 5 }, // Hallway to Female Toilet East Wing


    // Adjacent Room Connections in East Wing
    { from: 6020, to: 6021, weight: 3 }, // Storage 615 to Lab Room 613
    { from: 6021, to: 6022, weight: 3 }, // Lab Room 613 to 611
    { from: 6022, to: 6023, weight: 3 }, // Lab Room 611 to 609
    { from: 6023, to: 6027, weight: 3 }, // Lab Room 609 to 607
    { from: 6027, to: 6028, weight: 3 }, // Lab Room 607 to 605
    { from: 6028, to: 6024, weight: 3 }, // Lab Room 605 to Faculty Room 605
    { from: 6024, to: 6025, weight: 3 }, // Faculty Room 605 to 603
    { from: 6025, to: 6026, weight: 3 }, // Faculty Room 603 to Class Room 601
    { from: 6026, to: 6029, weight: 3 }, // Class Room 601 to Insectarium
    { from: 6062, to: 6063, weight: 2 }, // Male to Female Toilet East Wing
    { from: 6064, to: 6065, weight: 2 }, // Male to Female Toilet West Wing
    { from: 6066, to: 6067, weight: 2 }, // Male to Female Toilet North Wing
    { from: 6060, to: 6061, weight: 2 }, // Male to Female Toilet South Wing


    // West Wing Connections
    { from: 6091, to: 6030, weight: 5 }, // Hallway to CLMC Faculty Room 602-604
    { from: 6091, to: 6031, weight: 5 }, // Hallway to Class Room 606
    { from: 6091, to: 6032, weight: 5 }, // Hallway to Class Room 608
    { from: 6091, to: 6033, weight: 5 }, // Hallway to Class Room 610
    { from: 6091, to: 6034, weight: 5 }, // Hallway to Class Room 612
    { from: 6091, to: 6035, weight: 5 }, // Hallway to Class Room 614
    { from: 6091, to: 6036, weight: 5 }, // Hallway to Class Room 616
    { from: 6091, to: 6037, weight: 5 }, // Hallway to Class Room 618
    { from: 6091, to: 6038, weight: 5 }, // Hallway to Class Room 620
    { from: 6091, to: 6039, weight: 5 }, // Hallway to Laboratory Room 605
    { from: 6091, to: 6040, weight: 5 }, // Hallway to Class Room 603
    { from: 6091, to: 6068, weight: 5 }, // Hallway to Class Room 601
    { from: 6091, to: 6064, weight: 5 }, // Hallway to Male Toilet West Wing
    { from: 6091, to: 6065, weight: 5 }, // Hallway to Female Toilet West Wing


    // Adjacent Room Connections in West Wing
    { from: 6030, to: 6031, weight: 3 }, // Faculty Room 602-604 to Class Room 606
    { from: 6031, to: 6032, weight: 3 }, // Class Room 606 to 608
    { from: 6032, to: 6033, weight: 3 }, // Class Room 608 to 610
    { from: 6033, to: 6034, weight: 3 }, // Class Room 610 to 612
    { from: 6034, to: 6035, weight: 3 }, // Class Room 612 to 614
    { from: 6035, to: 6036, weight: 3 }, // Class Room 614 to 616
    { from: 6036, to: 6037, weight: 3 }, // Class Room 616 to 618
    { from: 6037, to: 6038, weight: 3 }, // Class Room 618 to 620
    { from: 6068, to: 6040, weight: 3 }, // Class Room 601 to 603
    { from: 6040, to: 6039, weight: 3 }, // Class Room 603 to Laboratory Room 605


    // North Wing Connections
    { from: 6092, to: 6050, weight: 5 }, // Hallway to Class Room 600
    { from: 6092, to: 6051, weight: 5 }, // Hallway to Class Room 602
    { from: 6092, to: 6052, weight: 5 }, // Hallway to Class Room 604
    { from: 6092, to: 6053, weight: 5 }, // Hallway to Class Room 606
    { from: 6092, to: 6054, weight: 5 }, // Hallway to Class Room 608
    { from: 6092, to: 6055, weight: 5 }, // Hallway to Class Room 610
    { from: 6092, to: 6056, weight: 5 }, // Hallway to Class Room 612
    { from: 6092, to: 6057, weight: 5 }, // Hallway to Class Room 614
    { from: 6092, to: 6058, weight: 5 }, // Hallway to Class Room 616
    { from: 6092, to: 6059, weight: 5 }, // Hallway to Class Room 617
    { from: 6092, to: 6041, weight: 5 }, // Hallway to Class Room 632
    { from: 6092, to: 6042, weight: 5 }, // Hallway to Class Room 633
    { from: 6092, to: 6043, weight: 5 }, // Hallway to Class Room 634
    { from: 6092, to: 6044, weight: 5 }, // Hallway to Class Room 635
    { from: 6092, to: 6045, weight: 5 }, // Hallway to Class Room 636
    { from: 6092, to: 6046, weight: 5 }, // Hallway to Class Room 637
    { from: 6092, to: 6047, weight: 5 }, // Hallway to Class Room 638
    { from: 6092, to: 6048, weight: 5 }, // Hallway to Class Room 639
    { from: 6092, to: 6049, weight: 5 }, // Hallway to Class Room 640
    { from: 6092, to: 6066, weight: 5 }, // Hallway to Male Toilet North Wing
    { from: 6092, to: 6067, weight: 5 }, // Hallway to Female Toilet North Wing


    // Adjacent Room Connections in North Wing (600s)
    { from: 6050, to: 6051, weight: 3 }, // Class Room 600 to 602
    { from: 6051, to: 6052, weight: 3 }, // Class Room 602 to 604
    { from: 6052, to: 6053, weight: 3 }, // Class Room 604 to 606
    { from: 6053, to: 6054, weight: 3 }, // Class Room 606 to 608
    { from: 6054, to: 6055, weight: 3 }, // Class Room 608 to 610
    { from: 6055, to: 6056, weight: 3 }, // Class Room 610 to 612
    { from: 6056, to: 6057, weight: 3 }, // Class Room 612 to 614
    { from: 6057, to: 6058, weight: 3 }, // Class Room 614 to 616
    { from: 6058, to: 6059, weight: 3 }, // Class Room 616 to 617


    // Adjacent Room Connections in North Wing (630s)
    { from: 6041, to: 6042, weight: 3 }, // Class Room 632 to 633
    { from: 6042, to: 6043, weight: 3 }, // Class Room 633 to 634
    { from: 6043, to: 6044, weight: 3 }, // Class Room 634 to 635
    { from: 6044, to: 6045, weight: 3 }, // Class Room 635 to 636
    { from: 6045, to: 6046, weight: 3 }, // Class Room 636 to 637
    { from: 6046, to: 6047, weight: 3 }, // Class Room 637 to 638
    { from: 6047, to: 6048, weight: 3 }, // Class Room 638 to 639
    { from: 6048, to: 6049, weight: 3 }, // Class Room 639 to 640


    // Remove direct connection between 4th and 5th floors
    { from: 4093, to: 5093, weight: 25 }, // North Wing Stairs to 5th floor hallway - USING STAIRS

    { from: 4094, to: 5094, weight: 25 }, // South Wing Stairs to 5th floor hallway - USING STAIRS

    // Stair connections from 5th to 6th floor
    { from: 5091, to: 6090, weight: 25 }, // East Wing Stairs
    { from: 5092, to: 6091, weight: 25 }, // West Wing Stairs
    { from: 5093, to: 6092, weight: 25 }, // North Wing Stairs
    { from: 5094, to: 6093, weight: 25 }, // South Wing Stairs
    { from: 5095, to: 6094, weight: 25 },  // Dome Stairs

    // Add stair connections for third floor
    { from: 2103, to: 3073, weight: 25 }, // North Wing Left Stairs 2nd to 3rd
    { from: 2104, to: 3074, weight: 25 }, // North Wing Right Stairs 2nd to 3rd

    { from: 2106, to: 3076, weight: 25 }, // South Wing Left Stairs 2nd to 3rd
    { from: 2107, to: 3077, weight: 25 }, // South Wing Center Stairs 2nd to 3rd
    { from: 2108, to: 3078, weight: 25 }, // South Wing Right Stairs 2nd to 3rd

    // Connect third floor stairs to hallways
    { from: 3073, to: 3071, weight: 25 }, // North Wing Left Stairs to hallway
    { from: 3074, to: 3071, weight: 25 }, // North Wing Right Stairs to hallway

    { from: 3076, to: 3072, weight: 35 }, // South Wing Left Stairs to hallway (farther from dome)
    { from: 3077, to: 3072, weight: 15 }, // South Wing Center Stairs to hallway (closest to dome)
    { from: 3078, to: 3072, weight: 35 }, // South Wing Right Stairs to hallway (farther from dome)

    // Connect third floor stairs to fourth floor
    { from: 3073, to: 4093, weight: 25 }, // North Wing Left Stairs to 4th floor
    { from: 3074, to: 4093, weight: 25 }, // North Wing Right Stairs to 4th floor

    { from: 3076, to: 4094, weight: 25 }, // South Wing Left Stairs to 4th floor
    { from: 3077, to: 4094, weight: 25 }, // South Wing Center Stairs to 4th floor
    { from: 3078, to: 4094, weight: 25 }, // South Wing Right Stairs to 4th floor

    // Add proper stair connections for South Wing (5th to 1st floor)
    // 5th to 4th floor
    { from: 5094, to: 5076, weight: 25 }, // South Wing Hallway to South Wing Stairs (5th floor)
    { from: 5076, to: 4094, weight: 25 }, // South Wing Stairs to South Wing Hallway (4th floor)

    // 4th to 3rd floor
    { from: 4094, to: 4076, weight: 25 }, // South Wing Hallway to South Wing Stairs (4th floor)
    { from: 4076, to: 3076, weight: 25 }, // South Wing Stairs to South Wing Hallway (3rd floor)
    { from: 3076, to: 3072, weight: 25 }, // South Wing Stairs to South Wing Hallway (3rd floor)

    // 3rd to 2nd floor
    { from: 3072, to: 3077, weight: 15 }, // South Wing Hallway to Center Stairs (closest to dome)
    { from: 3072, to: 3076, weight: 35 }, // South Wing Hallway to Left Stairs (farther from dome)
    { from: 3072, to: 3078, weight: 35 }, // South Wing Hallway to Right Stairs (farther from dome)
    { from: 3076, to: 2106, weight: 25 }, // Left Stairs down to 2nd floor
    { from: 3077, to: 2107, weight: 25 }, // Center Stairs down to 2nd floor
    { from: 3078, to: 2108, weight: 25 }, // Right Stairs down to 2nd floor

    // 2nd to 1st floor
    { from: 2112, to: 2106, weight: 25 }, // South Wing Hallway to South Wing Stairs (2nd floor)
    { from: 2106, to: 1027, weight: 25 }, // 2nd floor stairs to 1st floor stairs
    { from: 1027, to: 1033, weight: 25 }, // Stairs to South Wing Hallway (1st floor)

    // East Wing Stair Connections (1st to 2nd floor)
    { from: 1030, to: 1034, weight: 25 }, // East Wing Hallway to Left Stairs (1st floor)
    { from: 1030, to: 1035, weight: 25 }, // East Wing Hallway to Right Stairs (1st floor)
    { from: 1034, to: 2113, weight: 25 }, // East Wing Left Stairs (1st to 2nd floor)
    { from: 1035, to: 2114, weight: 25 }, // East Wing Right Stairs (1st to 2nd floor)
    { from: 2113, to: 2109, weight: 25 }, // East Wing Left Stairs to Hallway (2nd floor)
    { from: 2114, to: 2109, weight: 25 }, // East Wing Right Stairs to Hallway (2nd floor)
    
    // Add reverse connections for East Wing
    { from: 2109, to: 2113, weight: 25 }, // East Wing Hallway to Left Stairs (2nd floor)
    { from: 2109, to: 2114, weight: 25 }, // East Wing Hallway to Right Stairs (2nd floor)
    { from: 2113, to: 1034, weight: 25 }, // East Wing Left Stairs (2nd to 1st floor)
    { from: 2114, to: 1035, weight: 25 }, // East Wing Right Stairs (2nd to 1st floor)
    { from: 1034, to: 1030, weight: 25 }, // East Wing Left Stairs to Hallway (1st floor)
    { from: 1035, to: 1030, weight: 25 }, // East Wing Right Stairs to Hallway (1st floor)

    // West Wing Stair Connections (1st to 2nd floor)
    { from: 1032, to: 1036, weight: 25 }, // West Wing Hallway to Left Stairs (1st floor)
    { from: 1032, to: 1037, weight: 25 }, // West Wing Hallway to Right Stairs (1st floor)
    { from: 1036, to: 2115, weight: 25 }, // West Wing Left Stairs (1st to 2nd floor)
    { from: 1037, to: 2116, weight: 25 }, // West Wing Right Stairs (1st to 2nd floor)
    { from: 2115, to: 2111, weight: 25 }, // West Wing Left Stairs to Hallway (2nd floor)
    { from: 2116, to: 2111, weight: 25 }, // West Wing Right Stairs to Hallway (2nd floor)
    
    // Add reverse connections for West Wing
    { from: 2111, to: 2115, weight: 25 }, // West Wing Hallway to Left Stairs (2nd floor)
    { from: 2111, to: 2116, weight: 25 }, // West Wing Hallway to Right Stairs (2nd floor)
    { from: 2115, to: 1036, weight: 25 }, // West Wing Left Stairs (2nd to 1st floor)
    { from: 2116, to: 1037, weight: 25 }, // West Wing Right Stairs (2nd to 1st floor)
    { from: 1036, to: 1032, weight: 25 }, // West Wing Left Stairs to Hallway (1st floor)
    { from: 1037, to: 1032, weight: 25 }, // West Wing Right Stairs to Hallway (1st floor)

    // Connect 4th floor stairs to 3rd floor stairs
    { from: 4095, to: 3076, weight: 25 }, // 4th floor left stairs to 3rd floor left stairs
    { from: 4096, to: 3077, weight: 15 }, // 4th floor center stairs to 3rd floor center stairs
    { from: 4097, to: 3078, weight: 25 }, // 4th floor right stairs to 3rd floor right stairs

    // Add connections for East Wing 3rd floor stairs
    { from: 3079, to: 3069, weight: 25 }, // East Wing Left Stairs to East Wing Hallway (3rd floor)
    { from: 3080, to: 3069, weight: 25 }, // East Wing Right Stairs to East Wing Hallway (3rd floor)
    { from: 3069, to: 3079, weight: 25 }, // East Wing Hallway to East Wing Left Stairs (3rd floor)
    { from: 3069, to: 3080, weight: 25 }, // East Wing Hallway to East Wing Right Stairs (3rd floor)

    // Add connections for West Wing 3rd floor stairs
    { from: 3081, to: 3070, weight: 25 }, // West Wing Left Stairs to West Wing Hallway (3rd floor)
    { from: 3082, to: 3070, weight: 25 }, // West Wing Right Stairs to West Wing Hallway (3rd floor)
    { from: 3070, to: 3081, weight: 25 }, // West Wing Hallway to West Wing Left Stairs (3rd floor)
    { from: 3070, to: 3082, weight: 25 }, // West Wing Hallway to West Wing Right Stairs (3rd floor)

    // Connect to 2nd floor stairs
    { from: 2113, to: 3069, weight: 25 }, // East Wing Left Stairs (2nd) to East Wing Hallway (3rd)
    { from: 2114, to: 3069, weight: 25 }, // East Wing Right Stairs (2nd) to East Wing Hallway (3rd)
      { from: 2115, to: 3070, weight: 25 }, // West Wing Left Stairs (2nd) to West Wing Hallway (3rd)
    { from: 2116, to: 3070, weight: 25 }, // West Wing Right Stairs (2nd) to West Wing Hallway (3rd)

    // Connect to 4th floor stairs
    { from: 3079, to: 4091, weight: 25 }, // East Wing Left Stairs (3rd) to East Wing Hallway (4th)
    { from: 3080, to: 4091, weight: 25 }, // East Wing Right Stairs (3rd) to East Wing Hallway (4th)
    { from: 3081, to: 4092, weight: 25 }, // West Wing Left Stairs (3rd) to West Wing Hallway (4th)
    { from: 3082, to: 4092, weight: 25 }, // West Wing Right Stairs (3rd) to West Wing Hallway (4th)

    // Connect to 4th floor hallways
    { from: 4098, to: 4091, weight: 25 }, // East Wing Left Stairs to East Wing Hallway (4th floor)
    { from: 4099, to: 4091, weight: 25 }, // East Wing Right Stairs to East Wing Hallway (4th floor)
    { from: 4091, to: 4098, weight: 25 }, // East Wing Hallway to East Wing Left Stairs (4th floor)
    { from: 4091, to: 4099, weight: 25 }, // East Wing Hallway to East Wing Right Stairs (4th floor)

    { from: 4100, to: 4092, weight: 25 }, // West Wing Left Stairs to West Wing Hallway (4th floor)
    { from: 4101, to: 4092, weight: 25 }, // West Wing Right Stairs to West Wing Hallway (4th floor)
    { from: 4092, to: 4100, weight: 25 }, // West Wing Hallway to West Wing Left Stairs (4th floor)
    { from: 4092, to: 4101, weight: 25 }, // West Wing Hallway to West Wing Right Stairs (4th floor)

    // Connect to 3rd floor stairs
    { from: 3079, to: 4098, weight: 25 }, // East Wing Left Stairs (3rd) to East Wing Left Stairs (4th)
    { from: 3080, to: 4099, weight: 25 }, // East Wing Right Stairs (3rd) to East Wing Right Stairs (4th)
    { from: 3081, to: 4100, weight: 25 }, // West Wing Left Stairs (3rd) to West Wing Left Stairs (4th)
    { from: 3082, to: 4101, weight: 25 }, // West Wing Right Stairs (3rd) to West Wing Right Stairs (4th)

    // Connect to 5th floor stairs (assuming they exist with IDs 5098-5101)
    { from: 4098, to: 5098, weight: 25 }, // East Wing Left Stairs (4th) to East Wing Left Stairs (5th)
    { from: 4099, to: 5099, weight: 25 }, // East Wing Right Stairs (4th) to East Wing Right Stairs (5th)
    { from: 4100, to: 5100, weight: 25 }, // West Wing Left Stairs (4th) to West Wing Left Stairs (5th)
    { from: 4101, to: 5101, weight: 25 }, // West Wing Right Stairs (4th) to West Wing Right Stairs (5th)

    // Connect North Wing 4th floor stairs to hallways
    { from: 4102, to: 4093, weight: 25 }, // North Wing Left Stairs to North Wing Hallway (4th floor)
    { from: 4103, to: 4093, weight: 25 }, // North Wing Right Stairs to North Wing Hallway (4th floor)
    { from: 4093, to: 4102, weight: 25 }, // North Wing Hallway to North Wing Left Stairs (4th floor)
    { from: 4093, to: 4103, weight: 25 }, // North Wing Hallway to North Wing Right Stairs (4th floor)

    // Connect to 3rd floor stairs
    { from: 3073, to: 4102, weight: 25 }, // North Wing Left Stairs (3rd) to North Wing Left Stairs (4th)
    { from: 3074, to: 4103, weight: 25 }, // North Wing Right Stairs (3rd) to North Wing Right Stairs (4th)

    // Connect to 5th floor stairs (assuming they exist with IDs 5102-5103)
    { from: 4102, to: 5102, weight: 25 }, // North Wing Left Stairs (4th) to North Wing Left Stairs (5th)
    { from: 4103, to: 5103, weight: 25 }, // North Wing Right Stairs (4th) to North Wing Right Stairs (5th)
    // Connect 5th floor stairs to their hallways and 4th floor stairs
    // East Wing
    { from: 5091, to: 5099, weight: 35 }, // 5th floor hallway to left stairs
    { from: 5099, to: 4098, weight: 25 }, // 5th floor left stairs to 4th floor left stairs
    { from: 4098, to: 5099, weight: 25 }, // 4th floor left stairs to 5th floor left stairs
    { from: 5099, to: 5091, weight: 35 }, // 5th floor left stairs to hallway

    { from: 5091, to: 5100, weight: 35 }, // 5th floor hallway to right stairs
    { from: 5100, to: 4099, weight: 25 }, // 5th floor right stairs to 4th floor right stairs
    { from: 4099, to: 5100, weight: 25 }, // 4th floor right stairs to 5th floor right stairs
    { from: 5100, to: 5091, weight: 35 }, // 5th floor right stairs to hallway

    // West Wing
    { from: 5092, to: 5101, weight: 35 }, // 5th floor hallway to left stairs
    { from: 5101, to: 4100, weight: 25 }, // 5th floor left stairs to 4th floor left stairs
    { from: 4100, to: 5101, weight: 25 }, // 4th floor left stairs to 5th floor left stairs
    { from: 5101, to: 5092, weight: 35 }, // 5th floor left stairs to hallway

    { from: 5092, to: 5102, weight: 35 }, // 5th floor hallway to right stairs
    { from: 5102, to: 4101, weight: 25 }, // 5th floor right stairs to 4th floor right stairs
    { from: 4101, to: 5102, weight: 25 }, // 4th floor right stairs to 5th floor right stairs
    { from: 5102, to: 5092, weight: 35 }, // 5th floor right stairs to hallway

    // North Wing
    { from: 5093, to: 5103, weight: 35 }, // 5th floor hallway to left stairs
    { from: 5103, to: 4102, weight: 25 }, // 5th floor left stairs to 4th floor left stairs
    { from: 4102, to: 5103, weight: 25 }, // 4th floor left stairs to 5th floor left stairs
    { from: 5103, to: 5093, weight: 35 }, // 5th floor left stairs to hallway

    { from: 5093, to: 5104, weight: 35 }, // 5th floor hallway to right stairs
    { from: 5104, to: 4103, weight: 25 }, // 5th floor right stairs to 4th floor right stairs
    { from: 4103, to: 5104, weight: 25 }, // 4th floor right stairs to 5th floor right stairs
    { from: 5104, to: 5093, weight: 35 }, // 5th floor right stairs to hallway

    // 6th Floor Stairs Connections
    // South Wing
    { from: 6093, to: 6096, weight: 35 }, // 6th floor hallway to left stairs
    { from: 6096, to: 5096, weight: 25 }, // 6th floor left stairs to 5th floor left stairs
    { from: 5096, to: 6096, weight: 25 }, // 5th floor left stairs to 6th floor left stairs
    { from: 6096, to: 6093, weight: 35 }, // 6th floor left stairs to hallway

    { from: 6093, to: 6097, weight: 20 }, // 6th floor hallway to center stairs
    { from: 6097, to: 5097, weight: 25 }, // 6th floor center stairs to 5th floor center stairs
    { from: 5097, to: 6097, weight: 25 }, // 5th floor center stairs to 6th floor center stairs
    { from: 6097, to: 6093, weight: 20 }, // 6th floor center stairs to hallway

    { from: 6093, to: 6098, weight: 35 }, // 6th floor hallway to right stairs
    { from: 6098, to: 5098, weight: 25 }, // 6th floor right stairs to 5th floor right stairs
    { from: 5098, to: 6098, weight: 25 }, // 5th floor right stairs to 6th floor right stairs
    { from: 6098, to: 6093, weight: 35 }, // 6th floor right stairs to hallway

    // East Wing
    { from: 6090, to: 6099, weight: 35 }, // 6th floor hallway to left stairs
    { from: 6099, to: 5099, weight: 25 }, // 6th floor left stairs to 5th floor left stairs
    { from: 5099, to: 6099, weight: 25 }, // 5th floor left stairs to 6th floor left stairs
    { from: 6099, to: 6090, weight: 35 }, // 6th floor left stairs to hallway

    { from: 6090, to: 6100, weight: 35 }, // 6th floor hallway to right stairs
    { from: 6100, to: 5100, weight: 25 }, // 6th floor right stairs to 5th floor right stairs
    { from: 5100, to: 6100, weight: 25 }, // 5th floor right stairs to 6th floor right stairs
    { from: 6100, to: 6090, weight: 35 }, // 6th floor right stairs to hallway

    // West Wing
    { from: 6091, to: 6101, weight: 35 }, // 6th floor hallway to left stairs
    { from: 6101, to: 5101, weight: 25 }, // 6th floor left stairs to 5th floor left stairs
    { from: 5101, to: 6101, weight: 25 }, // 5th floor left stairs to 6th floor left stairs
    { from: 6101, to: 6091, weight: 35 }, // 6th floor left stairs to hallway

    { from: 6091, to: 6102, weight: 35 }, // 6th floor hallway to right stairs
    { from: 6102, to: 5102, weight: 25 }, // 6th floor right stairs to 5th floor right stairs
    { from: 5102, to: 6102, weight: 25 }, // 5th floor right stairs to 6th floor right stairs
    { from: 6102, to: 6091, weight: 35 }, // 6th floor right stairs to hallway

    // North Wing
    { from: 6092, to: 6103, weight: 35 }, // 6th floor hallway to left stairs
    { from: 6103, to: 5103, weight: 25 }, // 6th floor left stairs to 5th floor left stairs
    { from: 5103, to: 6103, weight: 25 }, // 5th floor left stairs to 6th floor left stairs
    { from: 6103, to: 6092, weight: 35 }, // 6th floor left stairs to hallway

    { from: 6092, to: 6104, weight: 35 }, // 6th floor hallway to right stairs
    { from: 6104, to: 5104, weight: 25 }, // 6th floor right stairs to 5th floor right stairs
    { from: 5104, to: 6104, weight: 25 }, // 5th floor right stairs to 6th floor right stairs
    { from: 6104, to: 6092, weight: 35 } // 6th floor right stairs to hallway
  ]
};
// COC Building Graph Data
// COC Building Graph Data
export const cocData = {
  nodes: {
    0: { id: 0, name: "COC Building", type: "building", x:545, y:252},
    57: { id: 57, name: "COC Gate", type: "entrance", x:562, y:21},  // Adding COC gate node
    59: { id: 59, name: "Parking Area", type: "landmark", x:674, y:134},  // Parking Area
    666: { id: 666, type: "pathway", x:545, y:252},


    1: { id: 1, name: "COC Building Entrance", type: "entrance", floor: 1, parent: 0},
    2: { id: 2, name: "Communications Society", type: "room", floor: 1, parent: 0},
    3: { id: 3, name: "Toilet (Left Wing 1st Floor)", type: "facility", floor: 1, parent: 0},
    4: { id: 4, name: "Department of Broadcast Communication", type: "office", floor: 1, parent: 0},
    5: { id: 5, name: "Office of the College Dean", type: "office", floor: 1, parent: 0},
    6: { id: 6, name: "Faculty Room (1st Floor)", type: "room", floor: 1, parent: 0},
    7: { id: 7, name: "Lecture Room 101", type: "classroom", floor: 1, parent: 0},
    8: { id: 8, name: "Student Council Room", type: "room", floor: 1, parent: 0},
    9: { id: 9, name: "Toilet (Right Wing 1st Floor)", type: "facility", floor: 1, parent: 0},
    10: { id: 10, name: "Dental Clinic", type: "clinic", floor: 1, parent: 0},
    11: { id: 11, name: "Lecture Room 105", type: "classroom", floor: 1, parent: 0},
    12: { id: 12, name: "Lecture Room 106", type: "classroom", floor: 1, parent: 0},
    13: { id: 13, name: "Lecture Room 107", type: "classroom", floor: 1, parent: 0},
    14: { id: 14, name: "Female Toilet (Bottom Wing)", type: "facility", floor: 1, parent: 0},
    15: { id: 15, name: "Male Toilet (Bottom Wing)", type: "facility", floor: 1, parent: 0},
    16: { id: 16, name: "Medical Clinic", type: "clinic", floor: 1, parent: 0},
    17: { id: 17, name: "Lecture Room 110", type: "classroom", floor: 1, parent: 0},
    18: { id: 18, name: "Lecture Room 111", type: "classroom", floor: 1, parent: 0},
    19: { id: 19, name: "Lecture Room 112", type: "classroom", floor: 1, parent: 0},
    20: { id: 20, name: "Lecture Room 113", type: "classroom", floor: 1, parent: 0},
    21: { id: 21, name: "Lecture Room 114", type: "classroom", floor: 1, parent: 0},


    //STAIRS - 1ST FLOOR
    22: { id: 22, name: "Upper Left Stairs", type: "stairs", floor: "1-2", parent: 0},
    23: { id: 23, name: "Upper Right Stairs", type: "stairs", floor: "1-2", parent: 0},
    24: { id: 24, name: "Lower Left Stairs", type: "stairs", floor: "1-2", parent: 0},
    25: { id: 25, name: "Lower Right Stairs", type: "stairs", floor: "1-2", parent: 0},
    53: { id: 53, name: "Center Stairs", type: "stairs", floor: "1-2", parent: 0},
    //hallways
    26: { id: 26, name: "Center Hallway (1st Floor)", type: "hallway", floor: 1, parent: 0}, // Renamed from Main Hallway
    27: { id: 27, name: "Bottom Hallway (1st Floor)", type: "hallway", floor: 1, parent: 0},
    55: { id: 55, name: "Top Hallway (1st Floor)", type: "hallway", floor: 1, parent: 0},
   


//STAIRS - 2ND FLOOR
    28: { id: 28, name: "Upper Left Stairs - 2nd Floor", type: "stairs", floor: "1-2", parent: 0},
    29: { id: 29, name: "Upper Right Stairs - 2nd Floor", type: "stairs", floor: "1-2", parent: 0},
    30: { id: 30, name: "Lower Left Stairs - 2nd Floor", type: "stairs", floor: "1-2", parent: 0},
    31: { id: 31, name: "Lower Right Stairs - 2nd Floor", type: "stairs", floor: "1-2", parent: 0},
    54: { id: 54, name: "Center Stairs - 2nd Floor", type: "stairs", floor: "1-2", parent: 0},
    //hallways
    32: { id: 32, name: "Center Hallway (2nd Floor)", type: "hallway", floor: 2, parent: 0}, // Renamed from Main Hallway
    33: { id: 33, name: "Bottom Hallway (2nd Floor)", type: "hallway", floor: 2, parent: 0},
    56: { id: 56, name: "Top Hallway (2nd Floor)", type: "hallway", floor: 2, parent: 0},
    //rooms
    34: { id: 34, name: "Lecture Room", type: "classroom", floor: 2, parent: 0},
    35: { id: 35, name: "Lecture Room", type: "classroom", floor: 2, parent: 0},
    36: { id: 36, name: "DAPR", type: "office", floor: 2, parent: 0},
    37: { id: 37, name: "Faculty OCT", type: "room", floor: 2, parent: 0},
    38: { id: 38, name: "Audio Visual Room (AVR)", type: "room", floor: 2, parent: 0},
    39: { id: 39, name: "Unknown Room (Top Right)", type: "room", floor: 2, parent: 0},
    40: { id: 40, name: "Student Area", type: "room", floor: 2, parent: 0},
    41: { id: 41, name: "DOCR Communication Research", type: "office", floor: 2, parent: 0},
    42: { id: 42, name: "Library", type: "library", floor: 2, parent: 0},
    43: { id: 43, name: "Toilet (Bottom Left)", type: "facility", floor: 2, parent: 0},
    44: { id: 44, name: "DACOM Room", type: "office", floor: 2, parent: 0},
    45: { id: 45, name: "Main Input", type: "facility", floor: 2, parent: 0},
    46: { id: 46, name: "Unknown Room (Bottom Center)", type: "room", floor: 2, parent: 0},
    47: { id: 47, name: "NEWS Room", type: "room", floor: 2, parent: 0},
    48: { id: 48, name: "TV Studio", type: "studio", floor: 2, parent: 0},
    49: { id: 49, name: "Lecture Room 209", type: "classroom", floor: 2, parent: 0},
    50: { id: 50, name: "Lecture Room 210", type: "classroom", floor: 2, parent: 0},
    51: { id: 51, name: "Lecture Room 211", type: "classroom", floor: 2, parent: 0},

    52: { id: 52, name: "Theater Building Entrance", type: "entrance", floor: 1, parent: 58},
    58: { id: 58, name: "Theater Building ", type: "building", x:232, y:113},
  },
  edges: [

    { from: 57, to: 666, weight: 2 },
    { from: 666, to: 1, weight: 2},

    // 0: { id: 0, name: "COC Building", type: "building", floor: 1, x:545, y:252},
    // 57: { id: 57, name: "COC Gate", type: "entrance", floor: 1, x:562, y:21},  // Adding COC gate node
    // 59: { id: 59, name: "Parking Area", type: "landmark", floor: 1, x:674, y:134},  // Parking Area
    // 58: { id: 58, name: "Theater Building ", type: "building", floor: 1, x:232, y:113},

    // Building connections
    { from: 57, to: 0, weight: 30 },  // COC Gate to COC Building - using fixed weight
    { from: 0, to: 58, weight: 40 },  // COC Building to Theater Building - using fixed weight
    
    // FIRST FLOOR EDGES
    // Gate to entrance connection
    { from: 57, to: 1, weight: 5 },     // COC Gate to Building Entrance
   
    // Entrance and hallway connections
    { from: 1, to: 26, weight: 5 },     // Entrance to center hallway
    { from: 26, to: 55, weight: 5 },    // Center hallway to top hallway
    { from: 26, to: 27, weight: 5 },    // Center hallway to bottom hallway
   
    // Top hallway connections
    { from: 55, to: 2, weight: 5 },     // Top hallway to Communications Society
    { from: 55, to: 3, weight: 5 },     // Top hallway to Toilet
    { from: 55, to: 4, weight: 5 },     // Top hallway to Dept. of Broadcast Comm
    { from: 55, to: 5, weight: 5 },     // Top hallway to Dean's Office
    { from: 55, to: 6, weight: 5 },     // Top hallway to Faculty Room
    { from: 55, to: 7, weight: 5 },     // Top hallway to Lecture Room 101
    { from: 55, to: 8, weight: 5 },     // Top hallway to Student Council Room
    { from: 55, to: 9, weight: 5 },     // Top hallway to Right Wing Toilet


    // Center hallway connections
    { from: 26, to: 10, weight: 5 },    // Center hallway to Dental Clinic
    { from: 26, to: 53, weight: 5 },    // Center hallway to Center Stairs
    { from: 26, to: 36, weight: 5 },    // Center hallway to DAPR
    { from: 26, to: 37, weight: 5 },    // Center hallway to Faculty OCT


    // Bottom hallway connections
    { from: 27, to: 11, weight: 5 },    // Bottom hallway to Lecture Room 105
    { from: 27, to: 12, weight: 5 },    // Bottom hallway to Lecture Room 106
    { from: 27, to: 13, weight: 5 },    // Bottom hallway to Lecture Room 107
    { from: 27, to: 14, weight: 5 },    // Bottom hallway to Female Toilet
    { from: 27, to: 15, weight: 5 },    // Bottom hallway to Male Toilet
    { from: 27, to: 16, weight: 5 },    // Bottom hallway to Medical Clinic
    { from: 27, to: 17, weight: 5 },    // Bottom hallway to Lecture Room 110
    { from: 27, to: 18, weight: 5 },    // Bottom hallway to Lecture Room 111
    { from: 27, to: 19, weight: 5 },    // Bottom hallway to Lecture Room 112
    { from: 27, to: 20, weight: 5 },    // Bottom hallway to Lecture Room 113
    { from: 27, to: 21, weight: 5 },    // Bottom hallway to Lecture Room 114


    // Room-to-room connections (alternative routes)
    { from: 2, to: 4, weight: 5 },      // Communications Society to Dept. of Broadcast Comm
    { from: 4, to: 5, weight: 5 },      // Dept. of Broadcast Comm to Dean's Office
    { from: 5, to: 6, weight: 5 },      // Dean's Office to Faculty Room
    { from: 7, to: 8, weight: 5 },      // Lecture Room 101 to Student Council Room
    { from: 11, to: 12, weight: 5 },    // Lecture Room 105 to 106
    { from: 12, to: 13, weight: 5 },    // Lecture Room 106 to 107
    { from: 13, to: 14, weight: 5 },    // Lecture Room 107 to Female Toilet
    { from: 14, to: 15, weight: 5 },    // Female Toilet to Male Toilet
    { from: 15, to: 16, weight: 5 },    // Male Toilet to Medical Clinic
    { from: 16, to: 17, weight: 5 },    // Medical Clinic to Lecture Room 110
    { from: 17, to: 18, weight: 5 },    // Lecture Room 110 to 111
    { from: 18, to: 19, weight: 5 },    // Lecture Room 111 to 112
    { from: 19, to: 20, weight: 5 },    // Lecture Room 112 to 113
    { from: 20, to: 21, weight: 5 },    // Lecture Room 113 to 114


    // Stairs connections
    { from: 22, to: 28, weight: 25 },   // Upper Left Stairs (1st to 2nd)
    { from: 23, to: 29, weight: 25 },   // Upper Right Stairs (1st to 2nd)
    { from: 24, to: 30, weight: 25 },   // Lower Left Stairs (1st to 2nd)
    { from: 25, to: 31, weight: 25 },   // Lower Right Stairs (1st to 2nd)
    { from: 53, to: 54, weight: 15 },   // Center Stairs (1st to 2nd) - lower weight as it's central


    // Connect stairs to hallways (1st floor)
    { from: 55, to: 22, weight: 5 },    // Top hallway to Upper Left Stairs
    { from: 55, to: 23, weight: 5 },    // Top hallway to Upper Right Stairs
    { from: 27, to: 24, weight: 5 },    // Bottom hallway to Lower Left Stairs
    { from: 27, to: 25, weight: 5 },    // Bottom hallway to Lower Right Stairs


    // SECOND FLOOR EDGES
    // Connect hallways
    { from: 32, to: 56, weight: 5 },    // Center hallway to top hallway (2nd floor)
    { from: 32, to: 33, weight: 5 },    // Center hallway to bottom hallway (2nd floor)


    // Connect stairs to hallways (2nd floor)
    { from: 56, to: 28, weight: 5 },    // Top hallway to Upper Left Stairs
    { from: 56, to: 29, weight: 5 },    // Top hallway to Upper Right Stairs
    { from: 33, to: 30, weight: 5 },    // Bottom hallway to Lower Left Stairs
    { from: 33, to: 31, weight: 5 },    // Bottom hallway to Lower Right Stairs
    { from: 32, to: 54, weight: 5 },    // Center hallway to Center Stairs


    // Top hallway connections (2nd floor)
    { from: 56, to: 34, weight: 5 },    // Top hallway to Lecture Room
    { from: 56, to: 35, weight: 5 },    // Top hallway to Lecture Room
    { from: 56, to: 36, weight: 5 },    // Top hallway to DAPR
    { from: 56, to: 37, weight: 5 },    // Top hallway to Faculty OCT
    { from: 56, to: 38, weight: 5 },    // Top hallway to AVR
    { from: 56, to: 39, weight: 5 },    // Top hallway to Unknown Room
    { from: 56, to: 40, weight: 5 },    // Top hallway to Student Area
    { from: 56, to: 41, weight: 5 },    // Top hallway to DOCR


    // Bottom hallway connections (2nd floor)
    { from: 33, to: 42, weight: 5 },    // Bottom hallway to Library
    { from: 33, to: 43, weight: 5 },    // Bottom hallway to Toilet
    { from: 33, to: 44, weight: 5 },    // Bottom hallway to DACOM Room
    { from: 33, to: 45, weight: 5 },    // Bottom hallway to Main Input
    { from: 33, to: 46, weight: 5 },    // Bottom hallway to Unknown Room
    { from: 33, to: 47, weight: 5 },    // Bottom hallway to NEWS Room
    { from: 33, to: 48, weight: 5 },    // Bottom hallway to TV Studio
    { from: 33, to: 49, weight: 5 },    // Bottom hallway to Lecture Room 209
    { from: 33, to: 50, weight: 5 },    // Bottom hallway to Lecture Room 210
    { from: 33, to: 51, weight: 5 },    // Bottom hallway to Lecture Room 211


    // Room-to-room connections (2nd floor)
    { from: 34, to: 35, weight: 5 },    // Lecture Room to Lecture Room
    { from: 36, to: 37, weight: 5 },    // DAPR to Faculty OCT
    { from: 38, to: 39, weight: 5 },    // AVR to Unknown Room
    { from: 40, to: 41, weight: 5 },    // Student Area to DOCR
    { from: 42, to: 43, weight: 5 },    // Library to Toilet
    { from: 43, to: 44, weight: 5 },    // Toilet to DACOM Room
    { from: 44, to: 45, weight: 5 },    // DACOM Room to Main Input
    { from: 45, to: 46, weight: 5 },    // Main Input to Unknown Room
    { from: 46, to: 47, weight: 5 },    // Unknown Room to NEWS Room
    { from: 47, to: 48, weight: 5 },    // NEWS Room to TV Studio
    { from: 48, to: 49, weight: 5 },    // TV Studio to Lecture Room 209
    { from: 49, to: 50, weight: 5 },    // Lecture Room 209 to 210
    { from: 50, to: 51, weight: 5 },    // Lecture Room 210 to 211


    // Theater Building connections
    { from: 26, to: 52, weight: 15 },   // Center hallway to Theater Building Entrance
    { from: 7, to: 52, weight: 12 },    // Lecture Room 101 to Theater Entrance
    { from: 10, to: 52, weight: 12 }    // Dental Clinic to Theater Entrance
  ]
};






// CEA Building Graph Data
export const ceaData = {
  nodes: {

    166: { id: 0, type: "path", floor: 1, x: 446, y: 284 },

    // Ground Floor / First Floor - Entrance and Main Areas
    0: { id: 0, name: "CEA Building", type: "building", floor: 1, x: 446, y: 284 },
    143: { id: 143, name: "CEA Gate", type: "gate", floor: 1, x:434, y:460 },

    1: { id: 1, name: "CEA Building Entrance", type: "entrance", floor: 1, parent: 0},
    2: { id: 2, name: "Exit", type: "exit", floor: 1, parent: 0},
    3: { id: 3, name: "Main Hallway (1st Floor)", type: "hallway", floor: 1, parent: 0},
    4: { id: 4, name: "Central Corridor (1st Floor)", type: "hallway", floor: 1, parent: 0},
   
    // First Floor Rooms
    5: { id: 5, name: "Room 100", type: "classroom", floor: 1, parent: 0},
    6: { id: 6, name: "Room 101", type: "classroom", floor: 1, parent: 0},
    7: { id: 7, name: "Room 102", type: "classroom", floor: 1, parent: 0},
    8: { id: 8, name: "Room 103A", type: "classroom", floor: 1, parent: 0},
    9: { id: 9, name: "Room 103B", type: "classroom", floor: 1,  parent: 0},
    10: { id: 10, name: "Room 104", type: "classroom", floor: 1, parent: 0},
    11: { id: 11, name: "Room 105A", type: "classroom", floor: 1, parent: 0},
    12: { id: 12, name: "Room 105B", type: "classroom", floor: 1, parent: 0},
    13: { id: 13, name: "Room 106", type: "classroom", floor: 1, parent: 0},
    14: { id: 14, name: "Tool Room", type: "facility", floor: 1, parent: 0},
    15: { id: 15, name: "Room 107A", type: "classroom", floor: 1, parent: 0},
    16: { id: 16, name: "Room 107B", type: "classroom", floor: 1, parent: 0},
    17: { id: 17, name: "Room 108", type: "classroom", floor: 1, parent: 0},
    18: { id: 18, name: "Room 109", type: "classroom", floor: 1 , parent: 0},
    19: { id: 19, name: "Room 110", type: "classroom", floor: 1 , parent: 0},
    20: { id: 20, name: "Room 111", type: "classroom", floor: 1 , parent: 0},
    21: { id: 21, name: "Room 112", type: "classroom", floor: 1 , parent: 0},
    22: { id: 22, name: "Civil Engineering Library", type: "library", floor: 1 , parent: 0},
    23: { id: 23, name: "Civil Engineering Dean's Office", type: "office", floor: 1 , parent: 0},
    24: { id: 24, name: "Civil Engineering Chairperson's Office", type: "office", floor: 1 , parent: 0},
    25: { id: 25, name: "Accreditation Center", type: "office", floor: 1 , parent: 0},
    26: { id: 26, name: "Female Toilet (Upper Left - 1st Floor)", type: "facility", floor: 1 , parent: 0},
    27: { id: 27, name: "Male Toilet (Lower Left - 1st Floor)", type: "facility", floor: 1 , parent: 0},
    141: { id: 141, name: "Female Toilet (Upper Right - 1st Floor)", type: "facility", floor: 1 , parent: 0},
    142: { id: 142, name: "Male Toilet (Lower Right - 1st Floor)", type: "facility", floor: 1 , parent: 0},


    // First Floor Open Courts and Stairs
    28: { id: 28, name: "Open Court (Left)", type: "open_area", floor: 1 , parent: 0},
    29: { id: 29, name: "Open Court (Right)", type: "open_area", floor: 1 , parent: 0},
    30: { id: 30, name: "Stairs (Left)", type: "stairs", floor: "1-2" , parent: 0},
    31: { id: 31, name: "Stairs (Center Left)", type: "stairs", floor: "1-2" , parent: 0},
    32: { id: 32, name: "Stairs (Center Right)", type: "stairs", floor: "1-2" , parent: 0},
    33: { id: 33, name: "Stairs (Right)", type: "stairs", floor: "1-2" , parent: 0},
   
   
    // Second Floor
    34: { id: 34, name: "Main Hallway (2nd Floor)", type: "hallway", floor: 2 , parent: 0},
    35: { id: 35, name: "Central Corridor (2nd Floor)", type: "hallway", floor: 2 , parent: 0},
   
    // Second Floor Rooms
    36: { id: 36, name: "CAD Laboratory Room 200", type: "laboratory", floor: 2 , parent: 0},
    37: { id: 37, name: "Architecture Lecture Room 201", type: "classroom", floor: 2 , parent: 0},
    38: { id: 38, name: "Lecture Room 201 Extension", type: "classroom", floor: 2 , parent: 0},
    39: { id: 39, name: "Visual Techniques Room 202", type: "classroom", floor: 2 , parent: 0},
    40: { id: 40, name: "Lecture Room 203", type: "classroom", floor: 2 , parent: 0},
    41: { id: 41, name: "Clinic Room 204", type: "clinic", floor: 2 , parent: 0},
    42: { id: 42, name: "I.E. Lecture Room 205", type: "classroom", floor: 2 , parent: 0},
    43: { id: 43, name: "Mechanical Drafting Room 3 - 206", type: "classroom", floor: 2 , parent: 0},
    44: { id: 44, name: "Mechanical Drafting Room 2 - 207", type: "classroom", floor: 2 , parent: 0},
    45: { id: 45, name: "Mechanical Drafting Room 1 - 208", type: "classroom", floor: 2 , parent: 0},
    46: { id: 46, name: "Classroom 209B", type: "classroom", floor: 2 , parent: 0},
    47: { id: 47, name: "Manufacturing Laboratory Room 209", type: "laboratory", floor: 2 , parent: 0},
    48: { id: 48, name: "Industrial Engineering and Printing Laboratory Room 210", type: "laboratory", floor: 2 , parent: 0},
    49: { id: 49, name: "Multi-Media Room 211", type: "classroom", floor: 2 , parent: 0},
    50: { id: 50, name: "CAFA Office Room 212", type: "office", floor: 2 , parent: 0},
    51: { id: 51, name: "Architecture Drafting Room 1 - 213", type: "classroom", floor: 2 , parent: 0},
    52: { id: 52, name: "Architecture Drafting Room 2 - 214", type: "classroom", floor: 2 , parent: 0},
    53: { id: 53, name: "Architecture Drafting Room 3 - 215", type: "classroom", floor: 2 , parent: 0},
    54: { id: 54, name: "Time and Motion Laboratory 221", type: "laboratory", floor: 2 , parent: 0},
    55: { id: 55, name: "Electrical Engineering Department Office", type: "office", floor: 2 , parent: 0},
    56: { id: 56, name: "Architecture Department Office", type: "office", floor: 2 , parent: 0},
    57: { id: 57, name: "Civil Engineering Department Office", type: "office", floor: 2 , parent: 0},
    58: { id: 58, name: "Mechanical Engineering Department Office", type: "office", floor: 2 , parent: 0},
    59: { id: 59, name: "IE Department Office", type: "office", floor: 2 , parent: 0},
    60: { id: 60, name: "Stock Room", type: "facility", floor: 2 , parent: 0},
    61: { id: 61, name: "Tool Room", type: "facility", floor: 2 , parent: 0},
    62: { id: 62, name: "Dark Room", type: "facility", floor: 2 , parent: 0},
    63: { id: 63, name: "Power Room", type: "facility", floor: 2 , parent: 0},
    64: { id: 64, name: "Female Toilet (2nd Floor)", type: "facility", floor: 2 , parent: 0},
    65: { id: 65, name: "Male Toilet (2nd Floor)", type: "facility", floor: 2 , parent: 0},
    66: { id: 66, name: "Open Court (Left 2nd Floor)", type: "open_area", floor: 2 , parent: 0},
    67: { id: 67, name: "Open Court (Right 2nd Floor)", type: "open_area", floor: 2 , parent: 0},
    68: { id: 68, name: "Deck on Second Floor", type: "open_area", floor: 2 , parent: 0},
   
    // Third Floor
    69: { id: 69, name: "Main Hallway (3rd Floor)", type: "hallway", floor: 3 , parent: 0},
    70: { id: 70, name: "Central Corridor (3rd Floor)", type: "hallway", floor: 3 , parent: 0},
   
    // Third Floor Rooms
    71: { id: 71, name: "CPE Multimedia Room 300", type: "classroom", floor: 3 , parent: 0},
    72: { id: 72, name: "Computer Engineering Laboratory Office 301", type: "office", floor: 3 , parent: 0},
    73: { id: 73, name: "Computer Engineering Lecture Room 302", type: "classroom", floor: 3 , parent: 0},
    74: { id: 74, name: "Center for Industrial Electronics Technology Room 2 - 303B", type: "laboratory", floor: 3 , parent: 0},
    75: { id: 75, name: "Center for Industrial Electronics Technology Room 1 - 303A", type: "laboratory", floor: 3 , parent: 0},
    76: { id: 76, name: "Advanced Technologies and Multimedia Center 304B", type: "laboratory", floor: 3 , parent: 0},
    77: { id: 77, name: "Office of the Laboratory Head Electronics Engineering Department 304A", type: "office", floor: 3 , parent: 0},
    78: { id: 78, name: "SMART Wireless Laboratory 305A", type: "laboratory", floor: 3 , parent: 0},
    79: { id: 79, name: "Communications Engineering Laboratory 305B", type: "laboratory", floor: 3 , parent: 0},
    80: { id: 80, name: "Electronics Engineering Lecture Room 306A", type: "classroom", floor: 3 , parent: 0},
    81: { id: 81, name: "Electronics Engineering Lecture Room 306B", type: "classroom", floor: 3 , parent: 0},
    82: { id: 82, name: "ECE Library, Research and Extension Center 307", type: "library", floor: 3 , parent: 0},
    83: { id: 83, name: "EE Automatic Control Laboratory 308", type: "laboratory", floor: 3 , parent: 0},
    84: { id: 84, name: "Computer Engineering Lecture Room 310", type: "classroom", floor: 3 , parent: 0},
    85: { id: 85, name: "Artificial Intelligence Laboratory Room 311", type: "laboratory", floor: 3 , parent: 0},
    86: { id: 86, name: "Computer Engineering Laboratory Room 312", type: "laboratory", floor: 3 , parent: 0},
    87: { id: 87, name: "Computer Engineering Laboratory Room 313", type: "laboratory", floor: 3 , parent: 0},
    88: { id: 88, name: "EMERSON Laboratory Room 314", type: "laboratory", floor: 3 , parent: 0 },
    89: { id: 89, name: "Computer Engineering Lecture Room 315", type: "laboratory", floor: 3 , parent: 0},
    90: { id: 90, name: "Computer Engineering Lecture Room 316", type: "classroom", floor: 3 , parent: 0},
    91: { id: 91, name: "Sensors and Mechatronics Laboratory 318", type: "laboratory", floor: 3 , parent: 0},
    92: { id: 92, name: "Accreditation Center 319", type: "office", floor: 3 , parent: 0},
    93: { id: 93, name: "Faculty Checker 320", type: "office", floor: 3 , parent: 0},
    94: { id: 94, name: "Office of the Chairperson Computer Engineering Department 323", type: "office", floor: 3 , parent: 0},
    95: { id: 95, name: "Office of the Chairperson Electronics Engineering Department 322", type: "office", floor: 3 , parent: 0},
    96: { id: 96, name: "Office of the Chairperson Engineering Sciences Department 323", type: "office", floor: 3 , parent: 0},
    97: { id: 97, name: "Female Toilet (Left Side - 3rd Floor)", type: "facility", floor: 3 , parent: 0},
    98: { id: 98, name: "Male Toilet (Left Side - 3rd Floor)", type: "facility", floor: 3 , parent: 0},
    99: { id: 99, name: "Tool Room (3rd Floor)", type: "facility", floor: 3 , parent: 0},
    100: { id: 100, name: "Open Court (Left 3rd Floor)", type: "open_area", floor: 3 , parent: 0},
    101: { id: 101, name: "Open Court (Right 3rd Floor)", type: "open_area", floor: 3 , parent: 0},
   
    // Third Floor Stairs
    3001: { id: 3001, name: "Left Stairs (3rd Floor)", type: "stairs", floor: 3, parent: 0 },
    3002: { id: 3002, name: "Center Stairs (3rd Floor)", type: "stairs", floor: 3, parent: 0 },
    3003: { id: 3003, name: "Right Stairs (3rd Floor)", type: "stairs", floor: 3, parent: 0 },
    // Adding right side toilets for third floor
    3036: { id: 3036, name: "Male Toilet (Right Side - 3rd Floor)", type: "facility", floor: 3, parent: 0 },
    3037: { id: 3037, name: "Female Toilet (Right Side - 3rd Floor)", type: "facility", floor: 3, parent: 0 },
   
   
    // Fourth Floor
    102: { id: 102, name: "Main Hallway (4th Floor)", type: "hallway", floor: 4, parent: 0 },
    103: { id: 103, name: "Central Corridor (4th Floor)", type: "hallway", floor: 4, parent: 0 },
   
    // Fourth Floor Rooms
    104: { id: 104, name: "Chemical Prep Room 400", type: "laboratory", floor: 4 , parent: 0 },
    105: { id: 105, name: "Faculty Center 401", type: "office", floor: 4 , parent: 0 },
    106: { id: 106, name: "Extension Services and Community Involvement 402", type: "office", floor: 4 , parent: 0 },
    107: { id: 107, name: "Student Council Office 403", type: "office", floor: 4 , parent: 0 },
    108: { id: 108, name: "Gen. Physics Lab 2 - 404", type: "laboratory", floor: 4 , parent: 0 },
    109: { id: 109, name: "Gen. Physics Lab 2 - 405", type: "laboratory", floor: 4 , parent: 0 },
    110: { id: 110, name: "Lecture Room 406", type: "classroom", floor: 4 , parent: 0 },
    111: { id: 111, name: "Lecture Room 407", type: "classroom", floor: 4 , parent: 0 },
    112: { id: 112, name: "Electrical Fundamental Lab 2 - 408", type: "laboratory", floor: 4 , parent: 0 },
    113: { id: 113, name: "Electrical Fundamental Lab 1 - 409B", type: "laboratory", floor: 4 , parent: 0 },
    114: { id: 114, name: "Electrical Fundamental Lab 2 - 409A", type: "laboratory", floor: 4 , parent: 0 },
    115: { id: 115, name: "Lecture Room 411", type: "classroom", floor: 4 , parent: 0 },
    116: { id: 116, name: "Lecture Room 412", type: "classroom", floor: 4 , parent: 0 },
    117: { id: 117, name: "Lecture Room 413", type: "classroom", floor: 4 , parent: 0 },
    118: { id: 118, name: "Lecture Room 414", type: "classroom", floor: 4 , parent: 0 },
    119: { id: 119, name: "Lecture Room 415", type: "classroom", floor: 4 , parent: 0 },
    120: { id: 120, name: "Lecture Room 416", type: "classroom", floor: 4 , parent: 0 },
    121: { id: 121, name: "Lecture Room 417", type: "classroom", floor: 4 , parent: 0 },
    122: { id: 122, name: "Lecture Room 418", type: "classroom", floor: 4 , parent: 0 },
    123: { id: 123, name: "Gen. Chemistry Lab A 419", type: "laboratory", floor: 4 , parent: 0 },
    124: { id: 124, name: "Lab Equipment Room 420", type: "facility", floor: 4 , parent: 0 },
    125: { id: 125, name: "Gen. Chemistry Lab B 421", type: "laboratory", floor: 4 , parent: 0 },
    126: { id: 126, name: "Natural Science Laboratory Office 422", type: "office", floor: 4 , parent: 0 },
    127: { id: 127, name: "Department of Natural Science Faculty Room 421", type: "office", floor: 4 , parent: 0 },
    128: { id: 128, name: "Laboratory Equipment Room", type: "facility", floor: 4 , parent: 0 },
    129: { id: 129, name: "Spectrum Office", type: "office", floor: 4,parent: 0 },
    130: { id: 130, name: "CoE 300 Library", type: "library", floor: 4 , parent: 0},
    131: { id: 131, name: "Library", type: "library", floor: 4, parent: 0},
    132: { id: 132, name: "A V R", type: "facility", floor: 4, parent: 0 },
    133: { id: 133, name: "Power Room (4th Floor)", type: "facility", floor: 4, parent: 0 },
    134: { id: 134, name: "Female Toilet (4th Floor)", type: "facility", floor: 4, parent: 0 },
    135: { id: 135, name: "Male Toilet (4th Floor)", type: "facility", floor: 4, parent: 0 },
    136: { id: 136, name: "Open Court (Left 4th Floor)", type: "open_area", floor: 4, parent: 0 },
    137: { id: 137, name: "Open Court (Center 4th Floor)", type: "open_area", floor: 4, parent: 0 },
    138: { id: 138, name: "Open Court (Right 4th Floor)", type: "open_area", floor: 4, parent: 0 },
   
    // Stairs connecting all floors
    139: { id: 139, name: "Main Stairs (2-3)", type: "stairs", floor: "2-3", parent: 0 },
    140: { id: 140, name: "Main Stairs (3-4)", type: "stairs", floor: "3-4", parent: 0 },
  },

  edges: [

    { from: 143, to: 166, weight: 2},
    { from: 166, to: 1, weight: 2},

    { from: 143, to: 0, weight: 3 },

    { from: 143, to: 1, weight: 5 },    // CEA Gate to CEA Building Entrance
    { from: 143, to: 2, weight: 5 },     // CEA Gate to Exit
    { from: 143, to: 3, weight: 15 },    // CEA Gate to Main Hallway (1st Floor)
    
    // // Existing connections - modify to route through gate
    // { from: 1, to: 3, weight: 5 },     // Building Entrance to Main Hallway
    // { from: 1, to: 4, weight: 10 },    // Building Entrance to Central Corridor
    // { from: 2, to: 3, weight: 5 },     // Exit to Main Hallway
    // { from: 3, to: 4, weight: 10 },    // Main Hallway to Central Corridor

    { from: 143, to: 1, weight: 5 },    // CEA Gate to CEA Building Entrance
    { from: 1, to: 3, weight: 5 },     // Building Entrance to Main Hallway
    { from: 1, to: 4, weight: 10 },    // Building Entrance to Central Corridor
    { from: 2, to: 3, weight: 5 },     // Exit to Main Hallway
    { from: 3, to: 4, weight: 10 },    // Main Hallway to Central Corridor
    
    // Main path from Main Gate
    { from: 1, to: 2, weight: 190 },
    { from: 2, to: 3, weight: 150 },
    { from: 3, to: 4, weight: 100 },
    { from: 4, to: 5, weight: 120 },
    { from: 5, to: 6, weight: 80 },
    
    // Connecting paths
    { from: 6, to: 7, weight: 90 },
    { from: 7, to: 8, weight: 70 },
    { from: 8, to: 9, weight: 110 },
    { from: 9, to: 10, weight: 130 },
    
    // Path to CEA
    { from: 10, to: 11, weight: 100 },
    { from: 11, to: 12, weight: 85 },
    { from: 12, to: 13, weight: 95 },
    { from: 13, to: 14, weight: 75 },
    { from: 14, to: 15, weight: 120 },
    { from: 15, to: 16, weight: 140 },
    { from: 16, to: 17, weight: 90 },
    { from: 17, to: 18, weight: 110 },
    { from: 18, to: 19, weight: 80 },
    { from: 19, to: 20, weight: 100 },
    { from: 20, to: 21, weight: 150 }, // Connection to CEA entrance
    
    // Path to COC
    { from: 15, to: 22, weight: 180 }, // Connection to COC entrance
    
    // Alternative paths
    { from: 6, to: 11, weight: 160 },
    { from: 9, to: 13, weight: 140 },
    { from: 14, to: 18, weight: 170 },
    { from: 16, to: 20, weight: 200 },

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
    
    // Toilet connections - updated with all four toilets
    { from: 3, to: 26, weight: 6 },  // Hallway to Female Toilet (Upper Left)
    { from: 3, to: 27, weight: 8 },  // Hallway to Male Toilet (Lower Left)
    { from: 4, to: 141, weight: 6 }, // Corridor to Female Toilet (Upper Right)
    { from: 4, to: 142, weight: 8 }, // Corridor to Male Toilet (Lower Right)
    
    // Additional connections for the toilets based on floor plan
    { from: 7, to: 141, weight: 5 },  // Room 102 to Female Toilet (Upper Right)
    { from: 21, to: 142, weight: 5 }, // Room 112 to Male Toilet (Lower Right)
    { from: 16, to: 26, weight: 5 },  // Room 107B to Female Toilet (Upper Left)
    { from: 22, to: 27, weight: 5 },  // Library to Male Toilet (Lower Left)
    
    // Open courts and stairs
    { from: 3, to: 28, weight: 12 }, // Hallway to Left Open Court
    { from: 4, to: 29, weight: 12 }, // Corridor to Right Open Court
    { from: 3, to: 30, weight: 25 }, // Hallway to Left Stairs
    { from: 17, to: 31, weight: 25 }, // Room 108 to Center Left Stairs
    { from: 4, to: 32, weight: 25 }, // Corridor to Center Right Stairs
    { from: 4, to: 33, weight: 25 }, // Corridor to Right Stairs
    
    // Stairs to second floor
    { from: 30, to: 34, weight: 25 }, // Left Stairs to 2nd Floor Hallway
    { from: 31, to: 34, weight: 25 }, // Center Left Stairs to 2nd Floor Hallway
    { from: 32, to: 35, weight: 25 }, // Center Right Stairs to 2nd Floor Corridor
    { from: 33, to: 35, weight: 25 }, // Right Stairs to 2nd Floor Corridor
    
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
    { from: 34, to: 139, weight: 25 },  // 2nd Floor Hallway to Stairs 2-3
    { from: 35, to: 139, weight: 25 }, // 2nd Floor Corridor to Stairs 2-3
    { from: 139, to: 69, weight: 25 }, // Stairs 2-3 to 3rd Floor Hallway
    { from: 139, to: 70, weight: 25 }, // Stairs 2-3 to 3rd Floor Corridor
    
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
    { from: 69, to: 140, weight: 25 },  // 3rd Floor Hallway to Stairs 3-4
    { from: 70, to: 140, weight: 25 }, // 3rd Floor Corridor to Stairs 3-4
    { from: 140, to: 102, weight: 25 }, // Stairs 3-4 to 4th Floor Hallway
    { from: 140, to: 103, weight: 25 }, // Stairs 3-4 to 4th Floor Corridor
    
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
}



export const overviewData = {

  nodes: {
    1: { id: 1, name: "Main Gate", type: "landmark", x: 846, y: 159},
    2: { id: 2, name: "Twin's Brew", type: "landmark", x: 729, y: 50},
    3: { id: 3, name: "Grace Bedspacer", type: "landmark", x: 695, y: 41},
    4: { id: 4, name: "Road 11", type: "landmark", x: 570, y: 107},
    5: { id: 5, name: "MACT Enterprise", type: "landmark", x: 542, y: 58},
    6: { id: 6, name: "Road 10", type: "landmark", x: 562, y: 89},
    7: { id: 7, name: "node 7", type: "landmark", x: 527, y: 23},
    8: { id: 8, name: "Dream Rolls", type: "landmark", x: 499, y: 74},
    9: { id: 9, name: "Kim Let Store", type: "landmark", x: 433, y: 58},
    10: { id: 10, name: "PUP Food testing Center", type: "landmark", x: 306, y: 145},
    11: { id: 11, name: "Jeng Jeng Store", type: "landmark", x: 302, y: 98},
    12: { id: 12, name: "Mc Tulin's Crib", type: "landmark", x: 299, y: 55},
    13: { id: 13, name: "Road 2", type: "landmark", x: 262, y: 58},
    14: { id: 14, name: "Road 3", type: "landmark", x: 226, y: 61},
    15: { id: 15, name: "Study Corner", type: "landmark", x: 235, y: 114},
    16: { id: 16, name: "COC entrance", type: "landmark", x: 252, y: 175},
    17: { id: 17, name: "Arkneth Store", type: "landmark", x: 157, y: 199},
    18: { id: 18, name: "Node 18", type: "landmark", x: 154, y: 150},
    19: { id: 19, name: "Crab Motor", type: "landmark", x: 154, y: 70},
    20: { id: 20, name: "Node 20", type: "landmark", x: 173, y: 27},
    21: { id: 21, name: "CEA entrance", type: "landmark", x: 51, y: 201},
    22: { id: 22, name: "node 22", type: "landmark", x: 5, y: 234},
    23: { id: 23, name: "node 23", type: "landmark", x: 15, y: 243},
    24: { id: 24, name: "node 24", type: "landmark", x: 482, y: 44},
    25: { id: 25, name: "node 25", type: "landmark", x: 404, y: 109}
  },
  edges: [
    // Main path from Main Gate
    { from: 1, to: 2, weight: calculateDistance(nodes[1], nodes[2])},
    { from: 2, to: 3, weight: calculateDistance(nodes[2], nodes[3])},
    { from: 3, to: 5, weight: calculateDistance(nodes[3], nodes[5]) },
    { from: 5, to: 6, weight: calculateDistance(nodes[5], nodes[6]) },
    { from: 5, to: 7, weight: calculateDistance(nodes[5], nodes[7]) },
    { from: 5, to: 8, weight: calculateDistance(nodes[5], nodes[8]) },
    
    // Connecting paths
    { from: 6, to: 4, weight: calculateDistance(nodes[6], nodes[4])},
    { from: 8, to: 24, weight: (calculateDistance(nodes[8], nodes[24])+1000)},
    { from: 24, to: 9, weight: calculateDistance(nodes[24], nodes[9])},
    { from: 8, to: 25, weight: calculateDistance(nodes[8], nodes[25])},
    { from: 25, to: 10, weight: calculateDistance(nodes[25], nodes[10])},
    { from: 9, to: 12, weight: calculateDistance(nodes[9], nodes[12])},
    { from: 9, to: 11, weight: calculateDistance(nodes[9], nodes[11])},
    
    // Path to COC
    { from: 10, to: 11, weight: calculateDistance(nodes[10], nodes[11])},
    { from: 10, to: 16, weight: calculateDistance(nodes[10], nodes[16])},
    { from: 11, to: 12, weight: calculateDistance(nodes[11], nodes[12])},
    { from: 11, to: 15, weight: calculateDistance(nodes[11], nodes[15])},
    { from: 12, to: 13, weight: calculateDistance(nodes[12], nodes[13])},
    { from: 13, to: 14, weight: calculateDistance(nodes[13], nodes[14])},
    { from: 14, to: 15, weight: calculateDistance(nodes[14], nodes[15])},
    { from: 14, to: 19, weight: calculateDistance(nodes[14], nodes[19])},
    { from: 15, to: 18, weight: calculateDistance(nodes[15], nodes[18])},
    { from: 16, to: 17, weight: calculateDistance(nodes[16], nodes[17])},
    { from: 18, to: 19, weight: calculateDistance(nodes[18], nodes[19])},
    { from: 18, to: 17, weight: calculateDistance(nodes[18], nodes[17])},
    { from: 17, to: 21, weight: calculateDistance(nodes[17], nodes[21]) }, // Connection to CEA entrance
    
    // Path to CEA
    { from: 21, to: 22, weight: calculateDistance(nodes[21], nodes[22])}, // Connection to COC entrance
    { from: 21, to: 23, weight: calculateDistance(nodes[21], nodes[23]) },
    { from: 17, to: 22, weight: calculateDistance(nodes[17], nodes[22]) },
    { from: 17, to: 23, weight: calculateDistance(nodes[17], nodes[23]) },
  ]
};

// ... rest of the code ...