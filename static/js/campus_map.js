// ============================================================
// SMART CAMPUS NAVIGATION
// VECTOR CAMPUS MAP
// NO IMAGE
//
// Layout based on the campus arrangement supplied by user.
//
// Main Gate        = bottom center
// Canara Bank      = bottom left
// Parking Shed     = bottom right
// Garden           = center
// Main Block       = center/top
// Left departments = left side
// Right departments= right side
// ============================================================


// ============================================================
// 1. MAP
// ============================================================

const map = L.map("campusMap", {

    crs: L.CRS.Simple,

    minZoom: -1,

    maxZoom: 3,

    zoomSnap: 0.25,

    zoomControl: false

});


// ============================================================
// 2. CAMPUS SIZE
// ============================================================

const CAMPUS_WIDTH = 1400;

const CAMPUS_HEIGHT = 900;


const campusBounds = [

    [0, 0],

    [CAMPUS_HEIGHT, CAMPUS_WIDTH]

];


// ============================================================
// 3. BACKGROUND
// ============================================================

L.rectangle(

    campusBounds,

    {

        stroke: false,

        fill: true,

        fillColor: "#edf2e9",

        fillOpacity: 1

    }

).addTo(map);


// ============================================================
// 4. CAMPUS LOCATIONS
//
// [Y, X]
//
// This is LOCAL CAMPUS COORDINATE SYSTEM.
// NOT latitude / longitude.
// ============================================================

const locations = {

    // --------------------------------------------------------
    // BOTTOM / ENTRANCE
    // --------------------------------------------------------

    "Main Gate": {

        coords: [820, 700],

        icon: "🚪",

        type: "Main Entrance"

    },


    "Canara Bank": {

        coords: [790, 150],

        icon: "🏦",

        type: "Bank"

    },


    "Parking Shed": {

        coords: [790, 1240],

        icon: "🅿️",

        type: "Parking Shed"

    },


    // --------------------------------------------------------
    // CENTRAL GARDEN
    // --------------------------------------------------------

    "Garden": {

        coords: [555, 700],

        icon: "🌳",

        type: "Central Garden"

    },


    "Fountain": {

        coords: [555, 700],

        icon: "⛲",

        type: "Central Fountain"

    },


    // --------------------------------------------------------
    // CENTRAL BUILDINGS
    // --------------------------------------------------------

    "Main Block": {

        coords: [390, 690],

        icon: "🏫",

        type: "Main Block"

    },


    "Principal Office": {

        coords: [455, 575],

        icon: "🏢",

        type: "Principal Office"

    },


    "Management Office": {

        coords: [455, 815],

        icon: "🏢",

        type: "Management Office"

    },


    // --------------------------------------------------------
    // TOP CENTER
    // --------------------------------------------------------

    "B.Com & Zoology": {

        coords: [245, 700],

        icon: "🏫",

        type: "Zoology & B.Com (Aided)"

    },


    "Playground": {

        coords: [105, 700],

        icon: "⚽",

        type: "Play Ground"

    },


    "Hostel": {

        coords: [70, 810],

        icon: "🏠",

        type: "Hostel"

    },


    "Chapel": {

        coords: [75, 520],

        icon: "⛪",

        type: "Chapel"

    },


    // --------------------------------------------------------
    // LEFT SIDE
    // --------------------------------------------------------

    "BCA": {

        coords: [230, 180],

        icon: "💻",

        type: "BCA Department"

    },


    "MCA": {

        coords: [305, 215],

        icon: "💻",

        type: "MCA Department"

    },


    "History": {

        coords: [385, 205],

        icon: "📖",

        type: "History Department"

    },


    "Maths": {

        coords: [420, 330],

        icon: "📐",

        type: "Mathematics Department"

    },


    "Physics S/F": {

        coords: [330, 390],

        icon: "🔬",

        type: "Physics S/F"

    },


    "Physics": {

        coords: [455, 390],

        icon: "🔬",

        type: "Physics Department"

    },


    "Chemistry": {

        coords: [290, 470],

        icon: "🧪",

        type: "Chemistry Department"

    },


    "New Auditorium": {

        coords: [440, 115],

        icon: "🏛️",

        type: "New Auditorium"

    },


    "Nano Science": {

        coords: [510, 150],

        icon: "🧪",

        type: "Nano Science Department"

    },


    // --------------------------------------------------------
    // RIGHT SIDE
    // --------------------------------------------------------

    "Botany": {

        coords: [355, 1060],

        icon: "🌿",

        type: "Botany Department"

    },


    "Old Auditorium": {

        coords: [365, 1180],

        icon: "🏛️",

        type: "Old Auditorium"

    },


    "Library": {

        coords: [500, 1100],

        icon: "📚",

        type: "Library"

    },


    "Tamil & English": {

        coords: [590, 1190],

        icon: "📚",

        type: "Tamil & English Department"

    },


    "Economics": {

        coords: [650, 1180],

        icon: "📊",

        type: "Economics Department"

    },


    // --------------------------------------------------------
    // TOP RIGHT
    // --------------------------------------------------------

    "Canteen": {

        coords: [170, 1120],

        icon: "🍴",

        type: "Canteen"

    },


    "Computer Science": {

        coords: [90, 1050],

        icon: "💻",

        type: "Computer Science Department"

    },


    "Food Science": {

        coords: [135, 1050],

        icon: "🧪",

        type: "Food Science Department"

    },


    "English S/F": {

        coords: [80, 1220],

        icon: "📚",

        type: "English S/F Department"

    },


    "B.Com S/F": {

        coords: [130, 1220],

        icon: "💼",

        type: "B.Com S/F Department"

    }

};


// ============================================================
// 5. BUILDINGS
//
// Vector rectangles.
// NO IMAGE.
// ============================================================

function addBuilding(

    name,
    center,
    width,
    height

) {

    const y = center[0];

    const x = center[1];

    const bounds = [

        [
            y - height / 2,
            x - width / 2
        ],

        [
            y + height / 2,
            x + width / 2
        ]

    ];


    L.rectangle(

        bounds,

        {

            color: "#94a3b8",

            weight: 2,

            fillColor: "#ffffff",

            fillOpacity: 0.92

        }

    )

    .addTo(map)

    .bindTooltip(

        name,

        {

            permanent: false,

            direction: "center"

        }

    );

}


// ============================================================
// BUILDINGS
// ============================================================

addBuilding(
    "Main Block",
    locations["Main Block"].coords,
    260,
    100
);


addBuilding(
    "B.Com & Zoology",
    locations["B.Com & Zoology"].coords,
    230,
    70
);


addBuilding(
    "BCA",
    locations["BCA"].coords,
    120,
    75
);


addBuilding(
    "History",
    locations["History"].coords,
    115,
    55
);


addBuilding(
    "Maths",
    locations["Maths"].coords,
    130,
    55
);


addBuilding(
    "Physics",
    locations["Physics"].coords,
    120,
    65
);


addBuilding(
    "Chemistry",
    locations["Chemistry"].coords,
    130,
    65
);


addBuilding(
    "New Auditorium",
    locations["New Auditorium"].coords,
    190,
    100
);


addBuilding(
    "Nano Science",
    locations["Nano Science"].coords,
    120,
    60
);


addBuilding(
    "Botany",
    locations["Botany"].coords,
    150,
    150
);


addBuilding(
    "Old Auditorium",
    locations["Old Auditorium"].coords,
    130,
    110
);


addBuilding(
    "Library",
    locations["Library"].coords,
    140,
    105
);


addBuilding(
    "Tamil & English",
    locations["Tamil & English"].coords,
    125,
    90
);


addBuilding(
    "Economics",
    locations["Economics"].coords,
    120,
    65
);


addBuilding(
    "Computer Science",
    locations["Computer Science"].coords,
    170,
    55
);


addBuilding(
    "Food Science",
    locations["Food Science"].coords,
    170,
    55
);


addBuilding(
    "English S/F",
    locations["English S/F"].coords,
    120,
    55
);


addBuilding(
    "B.Com S/F",
    locations["B.Com S/F"].coords,
    120,
    55
);


addBuilding(
    "Canteen",
    locations["Canteen"].coords,
    110,
    70
);


addBuilding(
    "Hostel",
    locations["Hostel"].coords,
    130,
    65
);


addBuilding(
    "Chapel",
    locations["Chapel"].coords,
    120,
    65
);


addBuilding(
    "Parking Shed",
    locations["Parking Shed"].coords,
    150,
    75
);


addBuilding(
    "Canara Bank",
    locations["Canara Bank"].coords,
    125,
    65
);


// ============================================================
// 6. CENTRAL ROUND GARDEN
// ============================================================

L.circle(

    locations["Garden"].coords,

    {

        radius: 170,

        color: "#65a30d",

        weight: 5,

        fillColor: "#d9f99d",

        fillOpacity: 0.65

    }

).addTo(map);


// ============================================================
// 7. INNER GARDEN
// ============================================================

L.circle(

    locations["Fountain"].coords,

    {

        radius: 25,

        color: "#2563eb",

        weight: 4,

        fillColor: "#bfdbfe",

        fillOpacity: 1

    }

).addTo(map);


// ============================================================
// 8. PARTITION WALL
// ============================================================

const partitionWall = [

    [405, 475],

    [405, 925]

];


L.polyline(

    partitionWall,

    {

        color: "#475569",

        weight: 6,

        opacity: 0.85,

        dashArray: "10 8"

    }

)

.addTo(map)

.bindTooltip(

    "Partition Wall",

    {

        sticky: true

    }

);


// ============================================================
// 9. CAMPUS INTERNAL ROADS
// ============================================================

const roadStyle = {

    color: "#ffffff",

    weight: 24,

    opacity: 1,

    lineCap: "round",

    lineJoin: "round"

};


const roadBorderStyle = {

    color: "#cbd5e1",

    weight: 30,

    opacity: 1,

    lineCap: "round",

    lineJoin: "round"

};


// ============================================================
// MAIN ROAD FROM GATE
// ============================================================

const mainRoad = [

    [820, 700],

    [730, 700],

    [650, 700],

    [555, 700],

    [455, 700],

    [390, 700]

];


L.polyline(
    mainRoad,
    roadBorderStyle
).addTo(map);


L.polyline(
    mainRoad,
    roadStyle
).addTo(map);


// ============================================================
// ROUND GARDEN ROAD
// ============================================================

const roundRoad = [];

const radius = 190;

const centerY = 555;

const centerX = 700;


for (
    let angle = 0;
    angle <= 360;
    angle += 8
) {

    const radians =
        angle * Math.PI / 180;


    roundRoad.push([

        centerY +
        radius *
        Math.sin(radians),

        centerX +
        radius *
        Math.cos(radians)

    ]);

}


L.polyline(
    roundRoad,
    roadBorderStyle
).addTo(map);


L.polyline(
    roundRoad,
    roadStyle
).addTo(map);


// ============================================================
// LEFT CAMPUS ROAD
// ============================================================

const leftRoad = [

    [555, 510],

    [455, 470],

    [390, 400],

    [330, 390],

    [290, 470],

    [230, 430],

    [180, 300],

    [230, 180]

];


L.polyline(
    leftRoad,
    roadBorderStyle
).addTo(map);


L.polyline(
    leftRoad,
    roadStyle
).addTo(map);


// ============================================================
// RIGHT CAMPUS ROAD
// ============================================================

const rightRoad = [

    [555, 890],

    [455, 925],

    [390, 1000],

    [355, 1060],

    [365, 1180],

    [500, 1100],

    [590, 1190],

    [650, 1180]

];


L.polyline(
    rightRoad,
    roadBorderStyle
).addTo(map);


L.polyline(
    rightRoad,
    roadStyle
).addTo(map);


// ============================================================
// TOP ROAD
// ============================================================

const topRoad = [

    [390, 700],

    [300, 700],

    [245, 700],

    [170, 700],

    [105, 700]

];


L.polyline(
    topRoad,
    roadBorderStyle
).addTo(map);


L.polyline(
    topRoad,
    roadStyle
).addTo(map);


// ============================================================
// RIGHT TOP ROAD
// ============================================================

const topRightRoad = [

    [245, 700],

    [210, 850],

    [170, 1050],

    [135, 1050],

    [90, 1050]

];


L.polyline(
    topRightRoad,
    roadBorderStyle
).addTo(map);


L.polyline(
    topRightRoad,
    roadStyle
).addTo(map);


// ============================================================
// 10. MARKERS
// ============================================================

const markers = {};


// ============================================================
// CUSTOM ICON
// ============================================================

function createCampusIcon(icon) {

    return L.divIcon({

        className:
            "custom-campus-marker",

        html: `

            <div class="campus-marker">

                ${icon}

            </div>

        `,

        iconSize: [38, 38],

        iconAnchor: [19, 19]

    });

}


// ============================================================
// ADD MARKERS
// ============================================================

for (const place in locations) {

    const data =
        locations[place];


    // Do not create duplicate visible marker
    // for Fountain if desired.

    const marker = L.marker(

        data.coords,

        {

            icon:
                createCampusIcon(
                    data.icon
                ),

            zIndexOffset: 500

        }

    )

    .addTo(map);


    marker.bindPopup(`

        <div class="campus-popup">

            <div class="popup-icon">

                ${data.icon}

            </div>

            <div class="popup-title">

                ${place}

            </div>

            <div class="popup-type">

                ${data.type}

            </div>

            <button
                class="navigate-btn"
                onclick="selectDestination('${place}')"
            >

                🧭 Navigate

            </button>

        </div>

    `);


    marker.bindTooltip(

        place,

        {

            direction: "top",

            offset: [0, -22],

            className:
                "campus-label",

            sticky: true

        }

    );


    markers[place] = marker;

}


// ============================================================
// 11. CURRENT LOCATION
// ============================================================

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;


// ============================================================
// 12. DESTINATION
// ============================================================

let selectedDestination = null;

let routeLines = [];


// ============================================================
// 13. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {

        console.error(
            "Destination not found:",
            place
        );

        return;

    }


    selectedDestination = place;


    // Remove old highlight

    for (
        const name in markers
    ) {

        const element =
            markers[name].getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // Highlight selected

    const selectedElement =
        markers[place].getElement();


    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // Open popup

    markers[place].openPopup();


    // Zoom destination

    map.flyTo(

        locations[place].coords,

        1.5,

        {

            duration: 0.8

        }

    );


    updateInfo(

        "📍 " + place,

        locations[place].type +
        "<br><br>" +
        (
            userLocation
            ? "Press Navigate to show walking route."
            : "Press My Location to detect your location."
        )

    );

}


// ============================================================
// 14. SEARCH
// ============================================================

function findDestination() {

    const inputElement =
        document.getElementById(
            "destinationInput"
        );


    if (!inputElement) {

        return;

    }


    const input =
        inputElement.value
        .trim()
        .toLowerCase();


    if (!input) {

        alert(
            "Please enter a campus location."
        );

        return;

    }


    const aliases = {

        "cs":
            "Computer Science",

        "computer":
            "Computer Science",

        "computer science department":
            "Computer Science",

        "food":
            "Food Science",

        "library":
            "Library",

        "canteen":
            "Canteen",

        "bank":
            "Canara Bank",

        "canara":
            "Canara Bank",

        "parking":
            "Parking Shed",

        "parking shed":
            "Parking Shed",

        "gate":
            "Main Gate",

        "main gate":
            "Main Gate",

        "hostel":
            "Hostel",

        "bca":
            "BCA",

        "mca":
            "MCA",

        "physics":
            "Physics",

        "chemistry":
            "Chemistry",

        "maths":
            "Maths",

        "mathematics":
            "Maths",

        "history":
            "History",

        "economics":
            "Economics",

        "chapel":
            "Chapel",

        "playground":
            "Playground",

        "play ground":
            "Playground",

        "auditorium":
            "New Auditorium",

        "new auditorium":
            "New Auditorium",

        "old auditorium":
            "Old Auditorium",

        "botany":
            "Botany",

        "tamil":
            "Tamil & English",

        "english":
            "English S/F",

        "bcom":
            "B.Com S/F",

        "zoology":
            "B.Com & Zoology",

        "nano":
            "Nano Science",

        "fountain":
            "Fountain"

    };


    let foundPlace = null;


    // Exact alias

    if (aliases[input]) {

        foundPlace =
            aliases[input];

    }


    // Exact location

    if (!foundPlace) {

        for (
            const place in locations
        ) {

            if (
                place.toLowerCase() === input
            ) {

                foundPlace = place;

                break;

            }

        }

    }


    // Partial location

    if (!foundPlace) {

        for (
            const place in locations
        ) {

            const name =
                place.toLowerCase();


            if (
                name.includes(input) ||
                input.includes(name)
            ) {

                foundPlace = place;

                break;

            }

        }

    }


    // Partial aliases

    if (!foundPlace) {

        for (
            const key in aliases
        ) {

            if (
                key.includes(input) ||
                input.includes(key)
            ) {

                foundPlace =
                    aliases[key];

                break;

            }

        }

    }


    if (!foundPlace) {

        alert(

            "Location not found.\n\n" +

            "Try:\n" +

            "Library\n" +

            "Computer Science\n" +

            "Canteen\n" +

            "Main Gate\n" +

            "Parking Shed\n" +

            "BCA\n" +

            "MCA\n" +

            "Physics\n" +

            "Chemistry\n" +

            "Botany"

        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ============================================================
// 15. ENTER KEY
// ============================================================

const destinationInput =
    document.getElementById(
        "destinationInput"
    );


if (destinationInput) {

    destinationInput.addEventListener(

        "keydown",

        function(event) {

            if (
                event.key === "Enter"
            ) {

                findDestination();

            }

        }

    );

}


// ============================================================
// 16. INFORMATION
// ============================================================

function updateInfo(
    title,
    text
) {

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (!info) {

        return;

    }


    info.innerHTML = `

        <div class="info-title">

            ${title}

        </div>

        <div class="info-text">

            ${text}

        </div>

    `;

}


// ============================================================
// 17. CAMPUS ROUTE GRAPH
//
// Routes follow the drawn campus roads.
// No OSRM.
// No external routing server.
// ============================================================

const routeNetwork = {

    "Main Gate": [
        "Garden"
    ],

    "Garden": [
        "Main Gate",
        "Main Block",
        "BCA",
        "Physics",
        "Library",
        "Botany",
        "Canteen"
    ],

    "Main Block": [
        "Garden",
        "B.Com & Zoology",
        "Principal Office",
        "Management Office"
    ],

    "B.Com & Zoology": [
        "Main Block",
        "Playground"
    ],

    "Playground": [
        "B.Com & Zoology",
        "Hostel",
        "Chapel"
    ],

    "BCA": [
        "Garden",
        "MCA",
        "History"
    ],

    "MCA": [
        "BCA",
        "History"
    ],

    "History": [
        "MCA",
        "Maths"
    ],

    "Maths": [
        "History",
        "Physics S/F",
        "Physics"
    ],

    "Physics S/F": [
        "Maths",
        "Chemistry"
    ],

    "Physics": [
        "Maths",
        "Chemistry",
        "Main Block"
    ],

    "Chemistry": [
        "Physics",
        "New Auditorium"
    ],

    "New Auditorium": [
        "Chemistry",
        "Nano Science"
    ],

    "Nano Science": [
        "New Auditorium"
    ],

    "Botany": [
        "Garden",
        "Old Auditorium"
    ],

    "Old Auditorium": [
        "Botany",
        "Library"
    ],

    "Library": [
        "Garden",
        "Old Auditorium",
        "Tamil & English"
    ],

    "Tamil & English": [
        "Library",
        "Economics"
    ],

    "Economics": [
        "Tamil & English"
    ],

    "Canteen": [
        "Garden",
        "Computer Science"
    ],

    "Computer Science": [
        "Canteen",
        "Food Science",
        "English S/F",
        "B.Com S/F"
    ],

    "Food Science": [
        "Computer Science"
    ],

    "English S/F": [
        "Computer Science",
        "B.Com S/F"
    ],

    "B.Com S/F": [
        "English S/F",
        "Computer Science"
    ],

    "Hostel": [
        "Playground"
    ],

    "Chapel": [
        "Playground"
    ],

    "Principal Office": [
        "Main Block"
    ],

    "Management Office": [
        "Main Block"
    ],

    "Fountain": [
        "Garden"
    ],

    "Canara Bank": [
        "Main Gate"
    ],

    "Parking Shed": [
        "Main Gate"
    ]

};


// ============================================================
// 18. FIND ROUTE USING BFS
// ============================================================

function findCampusPath(
    start,
    destination
) {

    if (
        start === destination
    ) {

        return [start];

    }


    const queue = [start];

    const visited = new Set();

    const previous = {};


    visited.add(start);


    while (
        queue.length > 0
    ) {

        const current =
            queue.shift();


        const neighbours =
            routeNetwork[current] || [];


        for (
            const next of neighbours
        ) {

            if (
                visited.has(next)
            ) {

                continue;

            }


            visited.add(next);

            previous[next] =
                current;


            if (
                next === destination
            ) {

                const path = [];

                let node =
                    destination;


                while (node) {

                    path.unshift(
                        node
                    );

                    node =
                        previous[node];

                }


                return path;

            }


            queue.push(next);

        }

    }


    return null;

}


// ============================================================
// 19. DRAW ROUTE
// ============================================================

function createRoute() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
        );

        return;

    }


    /*
       IMPORTANT:

       Browser GPS coordinates cannot be directly
       placed on this hand-designed local campus map
       without a real GPS calibration.

       Therefore, if My Location has not been
       calibrated to the campus diagram, the route
       starts from Main Gate.
    */


    let startPoint =
        "Main Gate";


    // If a local user point exists,
    // use the nearest campus location.

    if (userLocation) {

        startPoint =
            findNearestCampusLocation(
                userLocation
            );

    }


    const path =
        findCampusPath(
            startPoint,
            selectedDestination
        );


    if (!path) {

        updateInfo(

            "⚠️ Route Not Available",

            "No connected campus path was found."

        );

        return;

    }


    // Remove previous route

    clearRoute();


    const routeCoordinates =
        path.map(

            function(place) {

                return locations[place]
                    .coords;

            }

        );


    // Draw route shadow

    const routeShadow =
        L.polyline(

            routeCoordinates,

            {

                color: "#ffffff",

                weight: 13,

                opacity: 0.95,

                lineCap: "round",

                lineJoin: "round"

            }

        ).addTo(map);


    // Draw route

    const routeLine =
        L.polyline(

            routeCoordinates,

            {

                color: "#2563eb",

                weight: 7,

                opacity: 1,

                lineCap: "round",

                lineJoin: "round",

                className:
                    "campus-route-line"

            }

        ).addTo(map);


    routeLines.push(
        routeShadow
    );

    routeLines.push(
        routeLine
    );


    // Route distance

    let distance = 0;


    for (
        let i = 0;
        i < routeCoordinates.length - 1;
        i++
    ) {

        distance +=
            approximateDistance(
                routeCoordinates[i],
                routeCoordinates[i + 1]
            );

    }


    const minutes =
        Math.max(
            1,
            Math.round(
                distance / 70
            )
        );


    updateInfo(

        "🧭 Route Found",

        `

        📍 From:
        <b>${startPoint}</b>

        <br><br>

        🎯 To:
        <b>${selectedDestination}</b>

        <br><br>

        📏 Approx. Distance:
        <b>${Math.round(distance)} m</b>

        <br>

        🚶 Walking Time:
        <b>${minutes} min</b>

        <br><br>

        🛣️ Route:
        <b>${path.join(" → ")}</b>

        `

    );


    // Fit route

    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [100, 100]
        }
    );

}


// ============================================================
// 20. APPROXIMATE LOCAL DISTANCE
// ============================================================

function approximateDistance(
    a,
    b
) {

    const dy =
        a[0] - b[0];

    const dx =
        a[1] - b[1];


    /*
       Local campus drawing scale.
       Approximately 1 local unit = 1 metre.
    */

    return Math.sqrt(
        dx * dx +
        dy * dy
    );

}


// ============================================================
// 21. CLEAR ROUTE
// ============================================================

function clearRoute() {

    for (
        const line of routeLines
    ) {

        map.removeLayer(line);

    }


    routeLines = [];

}


// ============================================================
// 22. DIRECT NAVIGATE
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
        );

        return;

    }


    createRoute();

}


// ============================================================
// 23. CURRENT GPS LOCATION
// ============================================================

function showMyLocation() {

    if (
        !navigator.geolocation
    ) {

        alert(
            "Geolocation is not supported by this browser."
        );

        return;

    }


    updateInfo(

        "📍 Detecting Location...",

        "Please allow location permission."

    );


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            const accuracy =
                position.coords.accuracy;


            /*
               Store REAL GPS coordinates.

               They are displayed to the user.
            */

            userLocation = {

                latitude:
                    latitude,

                longitude:
                    longitude,

                accuracy:
                    accuracy

            };


            console.log(
                "GPS:",
                latitude,
                longitude
            );


            // Remove old marker

            if (userMarker) {

                map.removeLayer(
                    userMarker
                );

            }


            if (accuracyCircle) {

                map.removeLayer(
                    accuracyCircle
                );

            }


            // User icon

            const userIcon =
                L.divIcon({

                    className:
                        "user-location-marker",

                    html: `

                        <div class="user-location-dot">

                            <div
                                class="user-location-pulse">
                            </div>

                        </div>

                    `,

                    iconSize: [30, 30],

                    iconAnchor: [15, 15]

                });


            /*
               IMPORTANT:

               GPS latitude/longitude cannot be placed
               on this local schematic map directly.

               We show the GPS position in the panel
               and use the nearest logical campus
               starting point for navigation.
            */


            const nearest =
                getLogicalGPSLocation(
                    latitude,
                    longitude
                );


            userMarker =
                L.marker(

                    nearest.coords,

                    {

                        icon:
                            userIcon,

                        zIndexOffset:
                            2000

                    }

                )

                .addTo(map);


            userMarker.bindPopup(

                "📍 Current Location"

            );


            accuracyCircle =
                L.circle(

                    nearest.coords,

                    {

                        radius:
                            Math.min(
                                accuracy,
                                60
                            ),

                        color:
                            "#2563eb",

                        fillColor:
                            "#60a5fa",

                        fillOpacity:
                            0.15,

                        weight: 1

                    }

                )

                .addTo(map);


            map.flyTo(

                nearest.coords,

                1.5,

                {

                    duration: 1

                }

            );


            updateInfo(

                "📍 Current Location",

                `

                GPS detected successfully.

                <br><br>

                Latitude:
                <b>${latitude.toFixed(6)}</b>

                <br>

                Longitude:
                <b>${longitude.toFixed(6)}</b>

                <br>

                Accuracy:
                <b>${Math.round(accuracy)} m</b>

                <br><br>

                Campus position:
                <b>${nearest.name}</b>

                `

            );


            // Create route if destination selected

            if (
                selectedDestination
            ) {

                createRoute();

            }

        },


        function(error) {

            console.error(
                "GPS Error:",
                error
            );


            let message =
                "Unable to access your location.";


            if (
                error.code === 1
            ) {

                message =
                    "Location permission denied. Please allow location access.";

            }

            else if (
                error.code === 2
            ) {

                message =
                    "Your location is currently unavailable.";

            }

            else if (
                error.code === 3
            ) {

                message =
                    "Location request timed out.";

            }


            alert(message);


            updateInfo(

                "⚠️ Location Error",

                message

            );

        },

        {

            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}


// ============================================================
// 24. LOGICAL GPS LOCATION
//
// Temporary calibration logic.
// Actual campus GPS calibration can be added later.
// ============================================================

function getLogicalGPSLocation(
    latitude,
    longitude
) {

    /*
       Since the provided campus diagram is a local
       schematic and does not contain GPS coordinates,
       we cannot mathematically convert real GPS into
       exact drawing coordinates yet.

       For now:

       GPS detected -> Main Gate logical starting point.

       This prevents the GPS marker from appearing
       in a completely unrelated place.
    */


    return {

        name: "Main Gate",

        coords:
            locations["Main Gate"].coords

    };

}


// ============================================================
// 25. FIND NEAREST CAMPUS LOCATION
// ============================================================

function findNearestCampusLocation(
    gps
) {

    /*
       Until GPS calibration points are supplied,
       Main Gate is used as the safe campus starting
       point.
    */

    return "Main Gate";

}


// ============================================================
// 26. RESET
// ============================================================

function resetCampusView() {

    clearRoute();


    selectedDestination =
        null;


    userLocation =
        null;


    if (userMarker) {

        map.removeLayer(
            userMarker
        );

        userMarker = null;

    }


    if (accuracyCircle) {

        map.removeLayer(
            accuracyCircle
        );

        accuracyCircle = null;

    }


    // Remove selected marker style

    for (
        const name in markers
    ) {

        const element =
            markers[name].getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    map.fitBounds(

        campusBounds,

        {

            padding: [30, 30]

        }

    );


    updateInfo(

        "📍 Campus Navigation",

        "Search a building or select a campus location."

    );

}


// ============================================================
// 27. ZOOM CONTROL
// ============================================================

L.control.zoom({

    position:
        "bottomright"

}).addTo(map);


// ============================================================
// 28. INITIAL VIEW
// ============================================================

map.fitBounds(

    campusBounds,

    {

        padding: [30, 30]

    }

);


// ============================================================
// 29. MAP READY
// ============================================================

console.log(
    "✅ Smart Campus Vector Map Loaded"
);

console.log(
    "✅ No campus image used"
);

console.log(
    "✅ Campus buildings loaded"
);

console.log(
    "✅ Campus roads loaded"
);

console.log(
    "✅ Partition wall loaded"
);

console.log(
    "✅ Search loaded"
);

console.log(
    "✅ Navigation loaded"
);

console.log(
    "✅ GPS detection loaded"
);
