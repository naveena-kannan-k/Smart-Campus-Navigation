// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// Google Maps Style Campus Routing
// ============================================================


// ============================================================
// MAP SETUP
// ============================================================

const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 3,
    zoomControl: true
});


// Campus coordinate area
const bounds = [
    [0, 0],
    [100, 120]
];

map.fitBounds(bounds);


// ============================================================
// CAMPUS BACKGROUND
// ============================================================

L.rectangle(bounds, {
    color: "#dcebd8",
    weight: 1,
    fillColor: "#e8f2e5",
    fillOpacity: 1
}).addTo(map);


// ============================================================
// ROAD STYLE
// ============================================================

const roadStyle = {
    color: "#ffffff",
    weight: 14,
    opacity: 1,
    lineCap: "round",
    lineJoin: "round"
};

const roadBorderStyle = {
    color: "#c5c9ce",
    weight: 18,
    opacity: 1,
    lineCap: "round",
    lineJoin: "round"
};


// ============================================================
// CAMPUS ROADS
// Based on your hand-drawn map
// ============================================================

const roads = [

    // Main Gate → Central Road
    [[8, 48], [25, 48], [45, 48], [65, 48], [85, 48]],

    // Main Gate → Parking
    [[8, 48], [8, 80]],

    // Main Gate → Canada Bank
    [[8, 48], [8, 20]],

    // Central road → Partition Hall
    [[42, 48], [42, 30], [42, 20]],

    // Central road → Main Block
    [[45, 48], [45, 60], [45, 70]],

    // Main Block → Garden / Zoology
    [[70, 48], [70, 70], [82, 70]],

    // Central road → right side
    [[60, 48], [60, 82], [75, 82], [90, 82]],

    // Right vertical road
    [[8, 80], [30, 80], [50, 80], [70, 80], [90, 80]],

    // Upper road
    [[85, 48], [85, 65], [85, 85], [85, 100]],

    // Zoology road
    [[70, 70], [82, 70], [95, 70]],

    // Hostel / Chapel upper road
    [[85, 85], [70, 85], [55, 85]],

    // History / Auditorium road
    [[48, 85], [48, 98], [35, 98]],

    // Maths / Physics / Chemistry road
    [[48, 70], [35, 70], [25, 70]]

];


// ============================================================
// DRAW ROADS
// ============================================================

roads.forEach(road => {

    L.polyline(road, roadBorderStyle).addTo(map);

    L.polyline(road, roadStyle).addTo(map);

});


// ============================================================
// ROAD NODE GRAPH
// ============================================================

const graph = {

    mainGate: [
        "central1",
        "parking",
        "bank"
    ],

    central1: [
        "mainGate",
        "partition",
        "mainBlock"
    ],

    partition: [
        "central1",
        "partitionHall"
    ],

    partitionHall: [
        "partition"
    ],

    mainBlock: [
        "central1",
        "gardenRoad",
        "rightRoad"
    ],

    gardenRoad: [
        "mainBlock",
        "zoology",
        "rightRoad"
    ],

    zoology: [
        "gardenRoad",
        "johnTucker"
    ],

    johnTucker: [
        "zoology",
        "canteen"
    ],

    canteen: [
        "johnTucker",
        "sports"
    ],

    sports: [
        "canteen",
        "hostel"
    ],

    hostel: [
        "sports",
        "chapel"
    ],

    chapel: [
        "hostel",
        "history"
    ],

    history: [
        "chapel",
        "auditorium"
    ],

    auditorium: [
        "history",
        "tamilEnglish"
    ],

    tamilEnglish: [
        "auditorium",
        "rightRoad"
    ],

    rightRoad: [
        "mainBlock",
        "gardenRoad",
        "tamilEnglish",
        "parkingRoad"
    ],

    parkingRoad: [
        "rightRoad",
        "parking"
    ],

    parking: [
        "parkingRoad",
        "mainGate"
    ],

    bank: [
        "mainGate"
    ]
};


// ============================================================
// NODE COORDINATES
// ============================================================

const nodes = {

    mainGate: [8, 48],

    central1: [45, 48],

    partition: [42, 30],

    partitionHall: [42, 20],

    mainBlock: [45, 70],

    gardenRoad: [70, 70],

    zoology: [82, 70],

    johnTucker: [95, 70],

    canteen: [95, 82],

    sports: [95, 92],

    hostel: [70, 85],

    chapel: [55, 85],

    history: [35, 98],

    auditorium: [35, 90],

    tamilEnglish: [60, 82],

    rightRoad: [60, 48],

    parkingRoad: [8, 80],

    parking: [8, 95],

    bank: [8, 20]
};


// ============================================================
// DESTINATIONS
// ============================================================

const destinations = {

    "main gate": {
        name: "Main Gate",
        node: "mainGate",
        description: "College Main Entrance"
    },

    "parking": {
        name: "Parking Area",
        node: "parking",
        description: "Main Parking Area"
    },

    "canara bank": {
        name: "Canara Bank",
        node: "bank",
        description: "Canara Bank"
    },

    "partition hall": {
        name: "Partition Hall",
        node: "partitionHall",
        description: "Partition Hall"
    },

    "main block": {
        name: "Main Block",
        node: "mainBlock",
        description: "Main Block"
    },

    "computer science": {
        name: "Computer Science",
        node: "johnTucker",
        description: "John Tucker Block"
    },

    "computer science department": {
        name: "Computer Science",
        node: "johnTucker",
        description: "John Tucker Block"
    },

    "john tucker block": {
        name: "John Tucker Block",
        node: "johnTucker",
        description: "Computer Science / English / Food Science"
    },

    "food science": {
        name: "Food Science",
        node: "johnTucker",
        description: "John Tucker Block"
    },

    "english": {
        name: "English",
        node: "tamilEnglish",
        description: "English Department"
    },

    "tamil": {
        name: "Tamil",
        node: "tamilEnglish",
        description: "Tamil Department"
    },

    "economics": {
        name: "Economics",
        node: "tamilEnglish",
        description: "Economics Department"
    },

    "zoology": {
        name: "Zoology",
        node: "zoology",
        description: "B.Sc / Aided"
    },

    "botany": {
        name: "Botany",
        node: "gardenRoad",
        description: "Botany Department"
    },

    "physics": {
        name: "Physics",
        node: "mainBlock",
        description: "Physics Department"
    },

    "chemistry": {
        name: "Chemistry",
        node: "mainBlock",
        description: "Chemistry Department"
    },

    "mathematics": {
        name: "Mathematics",
        node: "mainBlock",
        description: "Mathematics Department"
    },

    "history": {
        name: "History",
        node: "history",
        description: "History Department"
    },

    "auditorium": {
        name: "Old Auditorium",
        node: "auditorium",
        description: "Old Auditorium"
    },

    "old auditorium": {
        name: "Old Auditorium",
        node: "auditorium",
        description: "Old Auditorium"
    },

    "canteen": {
        name: "Canteen",
        node: "canteen",
        description: "College Canteen"
    },

    "sports": {
        name: "Sports Ground",
        node: "sports",
        description: "Sports Ground"
    },

    "sports ground": {
        name: "Sports Ground",
        node: "sports",
        description: "Sports Ground"
    },

    "hostel": {
        name: "Hostel",
        node: "hostel",
        description: "College Hostel"
    },

    "chapel": {
        name: "Chapel",
        node: "chapel",
        description: "Chapel"
    }
};


// ============================================================
// BUILDING MARKERS
// ============================================================

function addBuilding(name, coordinate, subtitle) {

    const icon = L.divIcon({

        className: "",

        html: `
            <div class="building-label">
                ${name}
                <small>${subtitle || ""}</small>
            </div>
        `,

        iconSize: [120, 45],

        iconAnchor: [60, 22]

    });

    L.marker(coordinate, {
        icon: icon
    })
    .addTo(map);
}


// ============================================================
// BUILDINGS FROM YOUR MAP
// ============================================================

addBuilding(
    "Main Gate",
    nodes.mainGate,
    "Entrance"
);

addBuilding(
    "Parking Area",
    nodes.parking,
    "Parking"
);

addBuilding(
    "Canara Bank",
    nodes.bank,
    "Bank"
);

addBuilding(
    "Partition Hall",
    nodes.partitionHall,
    "Hall"
);

addBuilding(
    "Main Block",
    nodes.mainBlock,
    "Departments"
);

addBuilding(
    "Zoology",
    nodes.zoology,
    "B.Sc / Aided"
);

addBuilding(
    "John Tucker Block",
    nodes.johnTucker,
    "Computer Science"
);

addBuilding(
    "Canteen",
    nodes.canteen,
    "Food"
);

addBuilding(
    "Sports Ground",
    nodes.sports,
    "Sports"
);

addBuilding(
    "Hostel",
    nodes.hostel,
    "Hostel"
);

addBuilding(
    "Chapel",
    nodes.chapel,
    "Chapel"
);

addBuilding(
    "History",
    nodes.history,
    "Department"
);

addBuilding(
    "Old Auditorium",
    nodes.auditorium,
    "Auditorium"
);

addBuilding(
    "Tamil / English",
    nodes.tamilEnglish,
    "Departments"
);


// ============================================================
// MAIN GATE MARKER
// ============================================================

const gateIcon = L.divIcon({

    className: "",

    html: `
        <div style="
            width:34px;
            height:34px;
            border-radius:50%;
            background:#1a73e8;
            border:4px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,.35);
        "></div>
    `,

    iconSize: [34, 34],

    iconAnchor: [17, 17]
});


L.marker(nodes.mainGate, {
    icon: gateIcon
})
.addTo(map)
.bindTooltip("Your starting point - Main Gate");


// ============================================================
// DIJKSTRA SHORTEST PATH
// ============================================================

function distance(a, b) {

    const dx = nodes[a][0] - nodes[b][0];

    const dy = nodes[a][1] - nodes[b][1];

    return Math.sqrt(dx * dx + dy * dy);
}


function shortestPath(start, end) {

    const distances = {};
    const previous = {};
    const unvisited = new Set(Object.keys(nodes));

    Object.keys(nodes).forEach(node => {

        distances[node] = Infinity;

        previous[node] = null;

    });

    distances[start] = 0;


    while (unvisited.size > 0) {

        let current = null;

        unvisited.forEach(node => {

            if (
                current === null ||
                distances[node] < distances[current]
            ) {
                current = node;
            }

        });


        if (current === null) break;

        if (current === end) break;

        unvisited.delete(current);


        const neighbours = graph[current] || [];


        neighbours.forEach(neighbour => {

            if (!unvisited.has(neighbour)) return;


            const newDistance =
                distances[current] +
                distance(current, neighbour);


            if (newDistance < distances[neighbour]) {

                distances[neighbour] = newDistance;

                previous[neighbour] = current;

            }

        });

    }


    const path = [];

    let current = end;


    while (current !== null) {

        path.unshift(current);

        current = previous[current];

    }


    if (path[0] !== start) {

        return [];

    }


    return path;
}


// ============================================================
// ROUTE LINE
// ============================================================

let routeLine = null;

let arrowMarkers = [];

let destinationMarker = null;


// ============================================================
// CLEAR ROUTE
// ============================================================

function clearRoute() {

    if (routeLine) {

        map.removeLayer(routeLine);

        routeLine = null;

    }


    arrowMarkers.forEach(marker => {

        map.removeLayer(marker);

    });

    arrowMarkers = [];


    if (destinationMarker) {

        map.removeLayer(destinationMarker);

        destinationMarker = null;

    }

}


// ============================================================
// ARROW ICON
// ============================================================

function createArrowIcon(angle) {

    return L.divIcon({

        className: "",

        html: `
            <div style="
                transform:rotate(${angle}deg);
                color:#1a73e8;
                font-size:22px;
                font-weight:bold;
                text-shadow:
                    0 0 2px white,
                    0 0 2px white;
            ">➤</div>
        `,

        iconSize: [24, 24],

        iconAnchor: [12, 12]

    });
}


// ============================================================
// DRAW ROUTE
// ============================================================

function drawRoute(path) {

    clearRoute();


    const coordinates = path.map(
        node => nodes[node]
    );


    // Main blue Google-style route
    routeLine = L.polyline(

        coordinates,

        {
            color: "#1a73e8",

            weight: 7,

            opacity: 0.95,

            lineCap: "round",

            lineJoin: "round"
        }

    ).addTo(map);


    // Direction arrows
    for (let i = 0; i < coordinates.length - 1; i++) {

        const start = coordinates[i];

        const end = coordinates[i + 1];


        const mid = [
            (start[0] + end[0]) / 2,
            (start[1] + end[1]) / 2
        ];


        const dx = end[1] - start[1];

        const dy = end[0] - start[0];


        let angle =
            Math.atan2(dx, dy) * 180 / Math.PI;


        const arrow = L.marker(
            mid,
            {
                icon: createArrowIcon(angle)
            }
        ).addTo(map);


        arrowMarkers.push(arrow);

    }


    // Destination marker
    const destination = coordinates[
        coordinates.length - 1
    ];


    const destinationIcon = L.divIcon({

        className: "",

        html: `
            <div style="
                width:32px;
                height:32px;
                background:#d93025;
                border:4px solid white;
                border-radius:50% 50% 50% 0;
                transform:rotate(-45deg);
                box-shadow:0 2px 7px rgba(0,0,0,.35);
            ">
                <div style="
                    width:8px;
                    height:8px;
                    background:white;
                    border-radius:50%;
                    margin:8px;
                "></div>
            </div>
        `,

        iconSize: [32, 32],

        iconAnchor: [16, 32]

    });


    destinationMarker = L.marker(
        destination,
        {
            icon: destinationIcon
        }
    ).addTo(map);


    return coordinates;
}


// ============================================================
// DISTANCE
// ============================================================

function calculateDistance(path) {

    let total = 0;


    for (let i = 0; i < path.length - 1; i++) {

        total += distance(
            path[i],
            path[i + 1]
        );

    }


    // Scale for campus map
    const metres = Math.round(total * 2.2);


    return metres;
}


// ============================================================
// DIRECTION TEXT
// ============================================================

function getDirectionText(path) {

    const directions = [];


    directions.push(
        "Start from Main Gate"
    );


    for (let i = 0; i < path.length - 1; i++) {

        const current = path[i];

        const next = path[i + 1];


        const a = nodes[current];

        const b = nodes[next];


        const dx = b[1] - a[1];

        const dy = b[0] - a[0];


        let direction;


        if (Math.abs(dx) > Math.abs(dy)) {

            direction =
                dx > 0
                    ? "Walk towards the right"
                    : "Walk towards the left";

        } else {

            direction =
                dy > 0
                    ? "Walk straight ahead"
                    : "Walk back";

        }


        if (i > 0) {

            direction =
                "Continue on the campus road";

        }


        directions.push(direction);

    }


    directions.push(
        "You have reached your destination"
    );


    return directions;
}


// ============================================================
// SHOW ROUTE
// ============================================================

function navigateTo(destinationKey) {

    const destination =
        destinations[destinationKey];


    if (!destination) {

        alert(
            "Destination not found. Please select a campus building."
        );

        return;

    }


    const start = "mainGate";

    const end = destination.node;


    const path = shortestPath(
        start,
        end
    );


    if (path.length === 0) {

        alert(
            "No road route available."
        );

        return;

    }


    const coordinates =
        drawRoute(path);


    // Fit route
    map.fitBounds(
        L.latLngBounds(coordinates),
        {
            padding: [100, 100]
        }
    );


    const metres =
        calculateDistance(path);


    const walkingMinutes =
        Math.max(
            1,
            Math.ceil(metres / 80)
        );


    document.getElementById(
        "routeTitle"
    ).textContent =
        destination.name;


    document.getElementById(
        "routeSubtitle"
    ).textContent =
        "From Main Gate • " +
        destination.description;


    document.getElementById(
        "distance"
    ).textContent =
        metres + " m";


    document.getElementById(
        "walkingTime"
    ).textContent =
        walkingMinutes + " min";


    const list =
        document.getElementById(
            "directionsList"
        );


    list.innerHTML = "";


    getDirectionText(path)
        .forEach(text => {

            const li =
                document.createElement("li");

            li.textContent = text;

            list.appendChild(li);

        });


    document.getElementById(
        "routePanel"
    ).style.display = "block";

}


// ============================================================
// SEARCH
// ============================================================

const searchInput =
    document.getElementById(
        "destinationSearch"
    );


const searchButton =
    document.getElementById(
        "searchBtn"
    );


const suggestions =
    document.getElementById(
        "suggestions"
    );


// ============================================================
// SEARCH SUGGESTIONS
// ============================================================

searchInput.addEventListener(
    "input",
    function () {

        const value =
            this.value
                .toLowerCase()
                .trim();


        suggestions.innerHTML = "";


        if (!value) {

            suggestions.style.display =
                "none";

            return;

        }


        const matches =
            Object.keys(destinations)
                .filter(key =>
                    key.includes(value)
                )
                .slice(0, 6);


        if (matches.length === 0) {

            suggestions.style.display =
                "none";

            return;

        }


        matches.forEach(key => {

            const item =
                document.createElement("div");


            item.className =
                "suggestion";


            item.textContent =
                "📍 " +
                destinations[key].name;


            item.onclick = function () {

                searchInput.value =
                    destinations[key].name;

                suggestions.style.display =
                    "none";

                navigateTo(key);

            };


            suggestions.appendChild(item);

        });


        suggestions.style.display =
            "block";

    }
);


// ============================================================
// SEARCH BUTTON
// ============================================================

searchButton.addEventListener(
    "click",
    function () {

        performSearch();

    }
);


// ============================================================
// ENTER KEY
// ============================================================

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


// ============================================================
// PERFORM SEARCH
// ============================================================

function performSearch() {

    const value =
        searchInput.value
            .toLowerCase()
            .trim();


    if (!value) return;


    let found = null;


    // Exact match
    if (destinations[value]) {

        found = value;

    } else {

        // Partial match
        const keys =
            Object.keys(destinations);


        found =
            keys.find(key =>
                key.includes(value)
            );

    }


    if (found) {

        suggestions.style.display =
            "none";

        navigateTo(found);

    } else {

        alert(
            "Destination not found.\n\nTry: Computer Science, Library, Canteen, Physics, Chemistry, Zoology, Main Block, Parking..."
        );

    }

}


// ============================================================
// CLOSE ROUTE
// ============================================================

document.getElementById(
    "closeRoute"
).addEventListener(
    "click",
    function () {

        clearRoute();

        document.getElementById(
            "routePanel"
        ).style.display = "none";

    }
);


// ============================================================
// RESET TO MAIN GATE
// ============================================================

document.getElementById(
    "resetBtn"
).addEventListener(
    "click",
    function () {

        clearRoute();

        document.getElementById(
            "routePanel"
        ).style.display = "none";

        searchInput.value = "";

        map.setView(
            nodes.mainGate,
            0
        );

    }
);


// ============================================================
// CLOSE SUGGESTIONS WHEN CLICKING MAP
// ============================================================

map.on(
    "click",
    function () {

        suggestions.style.display =
            "none";

    }
);
