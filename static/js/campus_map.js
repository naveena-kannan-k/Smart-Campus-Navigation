// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// ============================================================


// ============================================================
// MAP
// ============================================================

const map = L.map("map", {

    crs: L.CRS.Simple,

    minZoom: -2,

    maxZoom: 3,

    zoomControl: true

});


// Campus area

const campusBounds = [
    [0, 0],
    [120, 180]
];


L.rectangle(
    campusBounds,
    {
        stroke: false,
        fillColor: "#e8f2e4",
        fillOpacity: 1
    }
).addTo(map);


map.fitBounds(campusBounds);


// ============================================================
// ROAD NETWORK
//
// IMPORTANT:
// இந்த coordinates actual GPS coordinates இல்லை.
// இது நம்ம campus-ன் custom map coordinates.
// ============================================================


// Main road:
//
// Main Gate
//     |
//     |
// Partition Hall
//     |
// New Auditorium
//     |
// Physics ELF
//     |
// Chapel
//     |
// Hostel
//

const nodes = {

    // START
    mainGate: [10, 90],

    // Main straight road
    junctionGate: [22, 90],

    partitionJunction: [45, 90],

    newAuditoriumJunction: [62, 90],

    physicsJunction: [80, 90],

    chapelJunction: [98, 90],

    hostelJunction: [112, 90],


    // Left side from Main Gate
    bank: [22, 50],


    // Right side from Main Gate
    mainBlockRoad: [25, 125],

    mainBlock: [42, 125],

    zoology: [48, 145],

    bcomMain: [55, 145],


    // Partition Hall
    partitionHall: [45, 70],


    // New Auditorium
    newAuditorium: [62, 72],

    mathsEarth: [62, 62],

    nanoScience: [53, 72],

    history: [71, 72],


    // Physics ELF
    physicsELF: [80, 72],

    bscAMsc: [80, 58],


    // Chapel
    chapel: [98, 72],


    // Hostel
    hostel: [112, 72],


    // Old Auditorium branch
    oldAuditoriumRoad: [42, 90],

    oldAuditorium: [42, 112],

    tamilEnglishEconomics: [42, 130],

    library: [42, 150],

    parking: [42, 170],


    // Canteen side
    canteenRoad: [62, 112],

    canteen: [62, 130],

    computerRoad: [62, 145],

    computerScience: [62, 158],


    // Sports
    sportsRoom: [48, 130],

    playground: [32, 130]

};


// ============================================================
// ROAD CONNECTIONS
//
// இந்த graph-ல் connection இல்லாத buildings-க்கு
// route செல்ல முடியாது.
// ============================================================

const graph = {

    mainGate: [
        "junctionGate"
    ],

    junctionGate: [
        "mainGate",
        "partitionJunction",
        "bank",
        "mainBlockRoad"
    ],

    bank: [
        "junctionGate"
    ],

    mainBlockRoad: [
        "junctionGate",
        "mainBlock"
    ],

    mainBlock: [
        "mainBlockRoad",
        "zoology",
        "oldAuditoriumRoad"
    ],

    zoology: [
        "mainBlock"
    ],

    bcomMain: [
        "zoology"
    ],


    partitionJunction: [
        "junctionGate",
        "newAuditoriumJunction",
        "partitionHall",
        "oldAuditoriumRoad"
    ],

    partitionHall: [
        "partitionJunction"
    ],


    newAuditoriumJunction: [
        "partitionJunction",
        "physicsJunction",
        "newAuditorium"
    ],

    newAuditorium: [
        "newAuditoriumJunction",
        "mathsEarth",
        "nanoScience",
        "history"
    ],

    mathsEarth: [
        "newAuditorium"
    ],

    nanoScience: [
        "newAuditorium"
    ],

    history: [
        "newAuditorium"
    ],


    physicsJunction: [
        "newAuditoriumJunction",
        "chapelJunction",
        "physicsELF"
    ],

    physicsELF: [
        "physicsJunction",
        "bscAMsc"
    ],

    bscAMsc: [
        "physicsELF"
    ],


    chapelJunction: [
        "physicsJunction",
        "hostelJunction",
        "chapel"
    ],

    chapel: [
        "chapelJunction"
    ],


    hostelJunction: [
        "chapelJunction",
        "hostel"
    ],

    hostel: [
        "hostelJunction"
    ],


    // Old Auditorium route

    oldAuditoriumRoad: [
        "mainBlock",
        "partitionJunction",
        "oldAuditorium"
    ],

    oldAuditorium: [
        "oldAuditoriumRoad",
        "tamilEnglishEconomics",
        "canteenRoad"
    ],

    tamilEnglishEconomics: [
        "oldAuditorium",
        "library"
    ],

    library: [
        "tamilEnglishEconomics",
        "parking"
    ],

    parking: [
        "library"
    ],


    // Canteen

    canteenRoad: [
        "oldAuditorium",
        "canteen",
        "sportsRoom"
    ],

    canteen: [
        "canteenRoad",
        "computerRoad"
    ],

    computerRoad: [
        "canteen",
        "computerScience"
    ],

    computerScience: [
        "computerRoad"
    ],


    // Sports

    sportsRoom: [
        "canteenRoad",
        "playground"
    ],

    playground: [
        "sportsRoom"
    ]

};


// ============================================================
// DESTINATIONS
// ============================================================

const destinations = {

    "main gate": {
        name: "Main Gate",
        node: "mainGate",
        description: "Main Entrance"
    },

    "canara bank": {
        name: "Canara Bank",
        node: "bank",
        description: "Left side of Main Gate"
    },

    "bank": {
        name: "Canara Bank",
        node: "bank",
        description: "Left side of Main Gate"
    },

    "parking": {
        name: "Parking Area",
        node: "parking",
        description: "Campus Parking Area"
    },

    "partition hall": {
        name: "Partition Hall",
        node: "partitionHall",
        description: "Left side of main road"
    },

    "new auditorium": {
        name: "New Auditorium",
        node: "newAuditorium",
        description: "New Auditorium"
    },

    "maths": {
        name: "Maths",
        node: "mathsEarth",
        description: "New Auditorium Ground Floor"
    },

    "mathematics": {
        name: "Mathematics",
        node: "mathsEarth",
        description: "New Auditorium Ground Floor"
    },

    "earth science": {
        name: "Earth Science",
        node: "mathsEarth",
        description: "New Auditorium Ground Floor"
    },

    "nano science": {
        name: "Nano Science",
        node: "nanoScience",
        description: "New Auditorium area"
    },

    "history": {
        name: "History",
        node: "history",
        description: "New Auditorium area"
    },

    "physics elf": {
        name: "Physics ELF",
        node: "physicsELF",
        description: "Physics ELF Department"
    },

    "physics": {
        name: "Physics",
        node: "physicsELF",
        description: "Physics ELF Department"
    },

    "bsc a": {
        name: "B.Sc A / M.Sc",
        node: "bscAMsc",
        description: "Behind Physics ELF"
    },

    "msc": {
        name: "B.Sc A / M.Sc",
        node: "bscAMsc",
        description: "Behind Physics ELF"
    },

    "chapel": {
        name: "Chapel",
        node: "chapel",
        description: "Chapel"
    },

    "hostel": {
        name: "Hostel",
        node: "hostel",
        description: "College Hostel"
    },

    "main block": {
        name: "Main Block",
        node: "mainBlock",
        description: "Main Block"
    },

    "management office": {
        name: "Management Office",
        node: "mainBlock",
        description: "Main Block - Ground Floor"
    },

    "principal office": {
        name: "Principal Office",
        node: "mainBlock",
        description: "Main Block - Ground Floor"
    },

    "chemistry": {
        name: "Chemistry",
        node: "mainBlock",
        description: "Main Block - First Floor"
    },

    "botany": {
        name: "Botany",
        node: "mainBlock",
        description: "Main Block"
    },

    "zoology": {
        name: "Zoology",
        node: "zoology",
        description: "Behind Main Block"
    },

    "bcom": {
        name: "B.Com",
        node: "bcomMain",
        description: "Behind Main Block"
    },

    "b.com": {
        name: "B.Com",
        node: "bcomMain",
        description: "Behind Main Block"
    },

    "old auditorium": {
        name: "Old Auditorium",
        node: "oldAuditorium",
        description: "Old Auditorium"
    },

    "tamil": {
        name: "Tamil",
        node: "tamilEnglishEconomics",
        description: "Tamil Regular"
    },

    "english": {
        name: "English",
        node: "tamilEnglishEconomics",
        description: "English Regular / SF"
    },

    "economics": {
        name: "Economics",
        node: "tamilEnglishEconomics",
        description: "Economics Department"
    },

    "library": {
        name: "Library",
        node: "library",
        description: "Campus Library"
    },

    "canteen": {
        name: "Canteen",
        node: "canteen",
        description: "College Canteen"
    },

    "computer science": {
        name: "Computer Science",
        node: "computerScience",
        description: "Computer Science Department"
    },

    "computer science department": {
        name: "Computer Science",
        node: "computerScience",
        description: "Computer Science Department"
    },

    "food science": {
        name: "Food Science",
        node: "computerScience",
        description: "Food Science"
    },

    "sf english": {
        name: "English SF",
        node: "computerScience",
        description: "English SF"
    },

    "sports room": {
        name: "Sports Room",
        node: "sportsRoom",
        description: "Sports Room"
    },

    "playground": {
        name: "Playground",
        node: "playground",
        description: "College Playground"
    }

};


// ============================================================
// ROAD DRAWING
// ============================================================

const roadStyle = {

    color: "#ffffff",

    weight: 15,

    opacity: 1,

    lineCap: "round",

    lineJoin: "round"
};


const roadBorder = {

    color: "#b8bec6",

    weight: 20,

    opacity: 1,

    lineCap: "round",

    lineJoin: "round"
};


// Draw every graph connection only once

const drawnRoads = new Set();


Object.keys(graph).forEach(start => {

    graph[start].forEach(end => {

        const key =
            [start, end]
                .sort()
                .join("-");


        if (drawnRoads.has(key)) {
            return;
        }


        drawnRoads.add(key);


        const road = [

            nodes[start],

            nodes[end]

        ];


        L.polyline(
            road,
            roadBorder
        ).addTo(map);


        L.polyline(
            road,
            roadStyle
        ).addTo(map);

    });

});


// ============================================================
// BUILDING MARKER
// ============================================================

function addBuilding(
    name,
    nodeName,
    subtitle
) {

    const icon =
        L.divIcon({

            className: "",

            html: `
                <div class="building-label">
                    ${name}
                    <span>${subtitle}</span>
                </div>
            `,

            iconSize: [120, 42],

            iconAnchor: [60, 21]

        });


    L.marker(
        nodes[nodeName],
        {
            icon: icon
        }
    ).addTo(map);

}


// ============================================================
// BUILDINGS
// ============================================================

addBuilding(
    "MAIN GATE",
    "mainGate",
    "Entrance"
);

addBuilding(
    "Canara Bank",
    "bank",
    "Left side"
);

addBuilding(
    "Parking Area",
    "parking",
    "Parking"
);

addBuilding(
    "Partition Hall",
    "partitionHall",
    "Left side"
);

addBuilding(
    "New Auditorium",
    "newAuditorium",
    "First Floor"
);

addBuilding(
    "Maths / Earth Science",
    "mathsEarth",
    "Ground Floor"
);

addBuilding(
    "Nano Science",
    "nanoScience",
    "Department"
);

addBuilding(
    "History",
    "history",
    "Department"
);

addBuilding(
    "Physics ELF",
    "physicsELF",
    "Department"
);

addBuilding(
    "B.Sc A / M.Sc",
    "bscAMsc",
    "Behind Physics"
);

addBuilding(
    "Chapel",
    "chapel",
    "Chapel"
);

addBuilding(
    "Hostel",
    "hostel",
    "Hostel"
);

addBuilding(
    "Main Block",
    "mainBlock",
    "Management / Principal"
);

addBuilding(
    "Zoology",
    "zoology",
    "Behind Main Block"
);

addBuilding(
    "B.Com",
    "bcomMain",
    "Behind Main Block"
);

addBuilding(
    "Old Auditorium",
    "oldAuditorium",
    "Auditorium"
);

addBuilding(
    "Tamil / English / Economics",
    "tamilEnglishEconomics",
    "Opposite Old Auditorium"
);

addBuilding(
    "Library",
    "library",
    "Library"
);

addBuilding(
    "Canteen",
    "canteen",
    "Canteen"
);

addBuilding(
    "Computer Science",
    "computerScience",
    "CS / Food Science / B.Com / SF"
);

addBuilding(
    "Sports Room",
    "sportsRoom",
    "Sports"
);

addBuilding(
    "Playground",
    "playground",
    "Ground"
);


// ============================================================
// START MARKER
// ============================================================

const startIcon =
    L.divIcon({

        className: "",

        html: `
            <div style="
                width:30px;
                height:30px;
                border-radius:50%;
                background:#1a73e8;
                border:4px solid white;
                box-shadow:0 2px 8px rgba(0,0,0,.35);
            "></div>
        `,

        iconSize: [30, 30],

        iconAnchor: [15, 15]

    });


L.marker(
    nodes.mainGate,
    {
        icon: startIcon
    }
)
.addTo(map)
.bindTooltip(
    "Starting Point - Main Gate"
);


// ============================================================
// DISTANCE FUNCTION
// ============================================================

function distance(a, b) {

    const x =
        nodes[a][0] -
        nodes[b][0];

    const y =
        nodes[a][1] -
        nodes[b][1];

    return Math.sqrt(
        x * x +
        y * y
    );

}


// ============================================================
// SHORTEST PATH
// ============================================================

function shortestPath(
    start,
    destination
) {

    const distances = {};

    const previous = {};

    const unvisited =
        new Set(
            Object.keys(nodes)
        );


    Object.keys(nodes).forEach(node => {

        distances[node] =
            Infinity;

        previous[node] =
            null;

    });


    distances[start] = 0;


    while (unvisited.size > 0) {

        let current = null;


        unvisited.forEach(node => {

            if (
                current === null ||
                distances[node] <
                distances[current]
            ) {

                current = node;

            }

        });


        if (current === null) {
            break;
        }


        unvisited.delete(current);


        if (current === destination) {
            break;
        }


        const neighbours =
            graph[current] || [];


        neighbours.forEach(neighbour => {

            if (
                !unvisited.has(neighbour)
            ) {
                return;
            }


            const newDistance =
                distances[current] +
                distance(
                    current,
                    neighbour
                );


            if (
                newDistance <
                distances[neighbour]
            ) {

                distances[neighbour] =
                    newDistance;

                previous[neighbour] =
                    current;

            }

        });

    }


    const path = [];

    let current = destination;


    while (current !== null) {

        path.unshift(current);

        current =
            previous[current];

    }


    if (
        path.length === 0 ||
        path[0] !== start
    ) {

        return [];

    }


    return path;

}


// ============================================================
// ROUTE VARIABLES
// ============================================================

let activeRoute = null;

let arrowMarkers = [];

let destinationMarker = null;


// ============================================================
// CLEAR ROUTE
// ============================================================

function clearRoute() {

    if (activeRoute) {

        map.removeLayer(
            activeRoute
        );

        activeRoute = null;
    }


    arrowMarkers.forEach(
        marker => {

            map.removeLayer(
                marker
            );

        }
    );


    arrowMarkers = [];


    if (destinationMarker) {

        map.removeLayer(
            destinationMarker
        );

        destinationMarker = null;

    }

}


// ============================================================
// ARROW
// ============================================================

function arrowIcon(angle) {

    return L.divIcon({

        className: "",

        html: `
            <div style="
                transform: rotate(${angle}deg);
                color:#1a73e8;
                font-size:21px;
                font-weight:bold;
                text-shadow:
                0 0 2px white,
                0 0 2px white;
            ">➤</div>
        `,

        iconSize: [25, 25],

        iconAnchor: [12, 12]

    });

}


// ============================================================
// DRAW NAVIGATION ROUTE
// ============================================================

function drawNavigationRoute(
    path
) {

    clearRoute();


    const coordinates =
        path.map(
            node => nodes[node]
        );


    // Google Maps style blue line

    activeRoute =
        L.polyline(
            coordinates,
            {
                color: "#1a73e8",

                weight: 7,

                opacity: 0.95,

                lineCap: "round",

                lineJoin: "round"
            }
        ).addTo(map);


    // ========================================================
    // DIRECTION ARROWS
    // ========================================================

    for (
        let i = 0;
        i < coordinates.length - 1;
        i++
    ) {

        const a =
            coordinates[i];

        const b =
            coordinates[i + 1];


        const middle = [

            (a[0] + b[0]) / 2,

            (a[1] + b[1]) / 2

        ];


        const dx =
            b[1] - a[1];

        const dy =
            b[0] - a[0];


        const angle =
            Math.atan2(
                dx,
                dy
            ) *
            180 /
            Math.PI;


        const marker =
            L.marker(
                middle,
                {
                    icon:
                        arrowIcon(
                            angle
                        )
                }
            ).addTo(map);


        arrowMarkers.push(
            marker
        );

    }


    // ========================================================
    // DESTINATION MARKER
    // ========================================================

    const destination =
        coordinates[
            coordinates.length - 1
        ];


    const destinationIcon =
        L.divIcon({

            className: "",

            html: `
                <div style="
                    width:30px;
                    height:30px;
                    background:#d93025;
                    border:4px solid white;
                    border-radius:50%;
                    box-shadow:
                    0 2px 8px rgba(0,0,0,.35);
                ">
                </div>
            `,

            iconSize: [30, 30],

            iconAnchor: [15, 15]

        });


    destinationMarker =
        L.marker(
            destination,
            {
                icon:
                    destinationIcon
            }
        ).addTo(map);

}


// ============================================================
// DISTANCE
// ============================================================

function getRouteDistance(
    path
) {

    let total = 0;


    for (
        let i = 0;
        i < path.length - 1;
        i++
    ) {

        total +=
            distance(
                path[i],
                path[i + 1]
            );

    }


    // Custom campus scale
    // Later actual measured distances
    // can be entered here.

    return Math.round(
        total * 1.5
    );

}


// ============================================================
// DIRECTIONS
// ============================================================

function getDirections(
    path
) {

    const result = [];


    result.push(
        "Start from Main Gate"
    );


    for (
        let i = 0;
        i < path.length - 1;
        i++
    ) {

        const current =
            path[i];

        const next =
            path[i + 1];


        let text = "";


        // Special landmark directions

        if (
            next === "bank"
        ) {

            text =
                "Take the left side road towards Canara Bank";

        }

        else if (
            next === "mainBlockRoad"
        ) {

            text =
                "Take the right side road towards Main Block";

        }

        else if (
            next === "partitionHall"
        ) {

            text =
                "Continue on the main road; Partition Hall is on the left";

        }

        else if (
            next === "newAuditorium"
        ) {

            text =
                "Continue ahead to New Auditorium";

        }

        else if (
            next === "physicsELF"
        ) {

            text =
                "Continue on the road towards Physics ELF Department";

        }

        else if (
            next === "chapel"
        ) {

            text =
                "Continue ahead towards Chapel";

        }

        else if (
            next === "hostel"
        ) {

            text =
                "Continue ahead; Hostel is further along the road";

        }

        else if (
            next === "oldAuditorium"
        ) {

            text =
                "Continue towards Old Auditorium";

        }

        else if (
            next === "library"
        ) {

            text =
                "Continue to Library";

        }

        else if (
            next === "canteen"
        ) {

            text =
                "Take the road towards Canteen";

        }

        else if (
            next === "computerScience"
        ) {

            text =
                "Continue on the road; Computer Science is ahead";

        }

        else if (
            next === "sportsRoom"
        ) {

            text =
                "Take the left side towards Sports Room";

        }

        else if (
            next === "playground"
        ) {

            text =
                "Continue left to Playground";

        }

        else {

            text =
                "Continue on the campus road";

        }


        result.push(text);

    }


    result.push(
        "You have reached your destination"
    );


    return result;

}


// ============================================================
// NAVIGATE
// ============================================================

function navigateTo(
    key
) {

    const destination =
        destinations[key];


    if (!destination) {

        alert(
            "Destination not found."
        );

        return;

    }


    const path =
        shortestPath(
            "mainGate",
            destination.node
        );


    if (
        path.length === 0
    ) {

        alert(
            "No connected road route found."
        );

        return;

    }


    drawNavigationRoute(
        path
    );


    // Zoom route

    const routeCoordinates =
        path.map(
            node => nodes[node]
        );


    map.fitBounds(
        L.latLngBounds(
            routeCoordinates
        ),
        {
            padding: [100, 100]
        }
    );


    // Distance

    const metres =
        getRouteDistance(
            path
        );


    const minutes =
        Math.max(
            1,
            Math.ceil(
                metres / 75
            )
        );


    // Panel

    document.getElementById(
        "destinationName"
    ).textContent =
        destination.name;


    document.getElementById(
        "destinationDescription"
    ).textContent =
        destination.description;


    document.getElementById(
        "routeDistance"
    ).textContent =
        metres + " m";


    document.getElementById(
        "routeTime"
    ).textContent =
        minutes + " min";


    // Directions

    const directionList =
        document.getElementById(
            "directionList"
        );


    directionList.innerHTML =
        "";


    const directions =
        getDirections(path);


    directions.forEach(
        (text, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "direction-item";


            item.innerHTML = `

                <div class="direction-number">
                    ${index + 1}
                </div>

                <div>
                    ${text}
                </div>

            `;


            directionList.appendChild(
                item
            );

        }
    );


    document.getElementById(
        "routePanel"
    ).style.display =
        "block";

}


// ============================================================
// SEARCH
// ============================================================

const searchInput =
    document.getElementById(
        "searchInput"
    );


const searchButton =
    document.getElementById(
        "searchButton"
    );


const suggestions =
    document.getElementById(
        "searchSuggestions"
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


        suggestions.innerHTML =
            "";


        if (!value) {

            suggestions.style.display =
                "none";

            return;

        }


        const matches =
            Object.keys(
                destinations
            )
            .filter(
                key =>
                    key.includes(value)
            )
            .slice(0, 7);


        if (
            matches.length === 0
        ) {

            suggestions.style.display =
                "none";

            return;

        }


        matches.forEach(
            key => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "suggestion";


                item.textContent =
                    "📍 " +
                    destinations[key].name;


                item.onclick =
                    function () {

                        searchInput.value =
                            destinations[key].name;


                        suggestions.style.display =
                            "none";


                        navigateTo(key);

                    };


                suggestions.appendChild(
                    item
                );

            }
        );


        suggestions.style.display =
            "block";

    }
);


// ============================================================
// SEARCH BUTTON
// ============================================================

searchButton.addEventListener(
    "click",
    performSearch
);


// ============================================================
// ENTER
// ============================================================

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

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


    if (!value) {
        return;
    }


    let found = null;


    // Exact

    if (
        destinations[value]
    ) {

        found = value;

    }

    else {

        // Partial

        found =
            Object.keys(
                destinations
            ).find(
                key =>
                    key.includes(value)
            );

    }


    if (found) {

        suggestions.style.display =
            "none";

        navigateTo(found);

    }

    else {

        alert(
            "Destination not found.\n\n" +
            "Try:\n" +
            "Computer Science\n" +
            "Library\n" +
            "Canteen\n" +
            "Main Block\n" +
            "New Auditorium\n" +
            "Physics ELF\n" +
            "Hostel\n" +
            "Parking"
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
        ).style.display =
            "none";

    }
);


// ============================================================
// MAIN GATE
// ============================================================

document.getElementById(
    "mainGateButton"
).addEventListener(
    "click",
    function () {

        clearRoute();


        document.getElementById(
            "routePanel"
        ).style.display =
            "none";


        searchInput.value =
            "";


        map.setView(
            nodes.mainGate,
            0
        );

    }
);


// ============================================================
// MAP CLICK
// ============================================================

map.on(
    "click",
    function () {

        suggestions.style.display =
            "none";

    }
);
