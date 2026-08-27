// ============================================================
// SMART CAMPUS NAVIGATION
// Working Campus Map + Search + Route + Directions
// ============================================================

// -------------------------
// MAP / IMAGE
// -------------------------

const imageWidth = 1583;
const imageHeight = 957;

const map = L.map("campusMap", {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3,
    zoomSnap: 0.25,
    zoomControl: false
});

const bounds = [
    [0, 0],
    [imageHeight, imageWidth]
];

L.imageOverlay(
    "/static/images/campus_layout.jpeg",
    bounds
).addTo(map);

map.fitBounds(bounds);


// ============================================================
// LOCATIONS
// ============================================================

const locations = {

    "Main Gate": {
        coords: [40, 845],
        icon: "🚪",
        type: "Main Entrance",
        aliases: ["gate", "main gate", "entrance"]
    },

    "Canara Bank": {
        coords: [58, 160],
        icon: "🏦",
        type: "Bank",
        aliases: ["bank", "canara"]
    },

    "Parking Shed": {
        coords: [78, 1450],
        icon: "🅿️",
        type: "Parking",
        aliases: ["parking"]
    },

    "Garden": {
        coords: [360, 850],
        icon: "🌳",
        type: "Central Garden",
        aliases: ["garden"]
    },

    "Main Block": {
        coords: [625, 875],
        icon: "🏫",
        type: "Academic Block",
        aliases: ["main", "main block", "academic block"]
    },

    "Management Office": {
        coords: [565, 970],
        icon: "🏢",
        type: "Management Office",
        aliases: ["management", "office", "management office"]
    },

    "Old Auditorium": {
        coords: [625, 1390],
        icon: "🏛️",
        type: "Old Auditorium",
        aliases: ["old auditorium", "old audi"]
    },

    "Economics": {
        coords: [405, 1400],
        icon: "📊",
        type: "Economics Department",
        aliases: ["economics", "economics department"]
    },

    "Tamil & English": {
        coords: [455, 1490],
        icon: "📚",
        type: "Tamil & English Department",
        aliases: [
            "tamil",
            "english",
            "tamil english",
            "tamil and english"
        ]
    },

    "Library": {
        coords: [360, 1370],
        icon: "📚",
        type: "Library",
        aliases: ["library"]
    },

    "Canteen": {
        coords: [812, 1240],
        icon: "🍴",
        type: "Canteen",
        aliases: ["canteen", "food", "canteen"]
    },

    "English S/F": {
        coords: [885, 1360],
        icon: "📚",
        type: "English Self Department",
        aliases: [
            "english sf",
            "english self",
            "english self department"
        ]
    },

    "B.Com S/F": {
        coords: [900, 1390],
        icon: "💼",
        type: "B.Com Self Department",
        aliases: [
            "bcom sf",
            "b.com sf",
            "bcom self",
            "b.com self"
        ]
    },

    "Computer Science": {
        coords: [915, 1420],
        icon: "💻",
        type: "Computer Science Department",
        aliases: [
            "computer",
            "computer science",
            "computer science department",
            "cse",
            "cs"
        ]
    },

    "Food Science": {
        coords: [930, 1390],
        icon: "🧪",
        type: "Food Science Department",
        aliases: [
            "food",
            "food science",
            "food science department"
        ]
    },

    "Physics": {
        coords: [690, 620],
        icon: "🔬",
        type: "Physics Regular Department",
        aliases: [
            "physics",
            "physics regular",
            "physics department"
        ]
    },

    "Chemistry": {
        coords: [750, 620],
        icon: "🧪",
        type: "Chemistry Department",
        aliases: ["chemistry", "chemistry department"]
    },

    "Physics S/F": {
        coords: [720, 470],
        icon: "🔬",
        type: "Physics Self Department",
        aliases: [
            "physics sf",
            "physics self",
            "physics self department"
        ]
    },

    "B.Com & Zoology": {
        coords: [775, 850],
        icon: "🏫",
        type: "B.Com & Zoology Area",
        aliases: [
            "bcom",
            "b.com",
            "zoology",
            "zoology aided",
            "bcom zoology"
        ]
    },

    "BCA": {
        coords: [735, 280],
        icon: "💻",
        type: "Bachelor of Computer Applications",
        aliases: [
            "bca",
            "bca department",
            "bachelor of computer applications"
        ]
    },

    "MCA": {
        coords: [685, 275],
        icon: "💻",
        type: "MCA Department",
        aliases: ["mca", "mca department"]
    },

    "History": {
        coords: [645, 205],
        icon: "📖",
        type: "History Department",
        aliases: ["history", "history department"]
    },

    "Maths": {
        coords: [610, 350],
        icon: "📐",
        type: "Mathematics Department",
        aliases: [
            "maths",
            "math",
            "mathematics",
            "maths department"
        ]
    },

    "Nano Science": {
        coords: [515, 170],
        icon: "🧪",
        type: "Nano Science Department",
        aliases: [
            "nano",
            "nano science",
            "nano science department"
        ]
    },

    "New Auditorium": {
        coords: [575, 145],
        icon: "🏛️",
        type: "New Auditorium",
        aliases: [
            "new auditorium",
            "new audi"
        ]
    },

    "Chapel": {
        coords: [900, 520],
        icon: "⛪",
        type: "Chapel",
        aliases: ["chapel"]
    },

    "Hostel": {
        coords: [900, 870],
        icon: "🏠",
        type: "Hostel",
        aliases: ["hostel"]
    },

    "Playground": {
        coords: [845, 875],
        icon: "⚽",
        type: "Playground",
        aliases: ["playground", "ground"]
    }
};


// ============================================================
// MARKERS
// ============================================================

const markers = {};

function createCampusIcon(icon) {

    return L.divIcon({
        className: "custom-campus-marker",

        html: `
            <div class="campus-marker">
                ${icon}
            </div>
        `,

        iconSize: [42, 42],
        iconAnchor: [21, 21]
    });
}


for (const place in locations) {

    const data = locations[place];

    const marker = L.marker(
        data.coords,
        {
            icon: createCampusIcon(data.icon)
        }
    ).addTo(map);

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

    marker.bindTooltip(place, {
        direction: "top",
        offset: [0, -22],
        className: "campus-label",
        sticky: true
    });

    markers[place] = marker;
}


// ============================================================
// ROAD NETWORK
// ============================================================

const roads = {};

function addNode(name) {

    if (!roads[name]) {
        roads[name] = [];
    }
}


function mapDistance(a, b) {

    const dy = a[0] - b[0];
    const dx = a[1] - b[1];

    return Math.sqrt(
        (dx * dx) +
        (dy * dy)
    );
}


function addRoad(a, b) {

    if (!locations[a] || !locations[b]) {
        console.warn(
            "Road skipped:",
            a,
            b
        );
        return;
    }

    addNode(a);
    addNode(b);

    const d = mapDistance(
        locations[a].coords,
        locations[b].coords
    );

    roads[a].push({
        node: b,
        weight: d
    });

    roads[b].push({
        node: a,
        weight: d
    });
}


// ============================================================
// CREATE ROAD NETWORK
// ============================================================

for (const name in locations) {
    addNode(name);
}


// Main Gate routes
addRoad("Main Gate", "Main Block");
addRoad("Main Gate", "New Auditorium");
addRoad("Main Gate", "Management Office");
addRoad("Main Gate", "Canara Bank");
addRoad("Main Gate", "Parking Shed");


// Main Block area
addRoad("Main Block", "Garden");
addRoad("Main Block", "Management Office");
addRoad("Main Block", "Physics");
addRoad("Main Block", "Chemistry");
addRoad("Main Block", "B.Com & Zoology");


// Garden / south side
addRoad("Garden", "Playground");
addRoad("Playground", "Hostel");
addRoad("Playground", "Chapel");


// Management area
addRoad("Management Office", "B.Com & Zoology");
addRoad("Management Office", "Old Auditorium");


// Old Auditorium area
addRoad("Old Auditorium", "Library");
addRoad("Old Auditorium", "Economics");
addRoad("Old Auditorium", "Tamil & English");
addRoad("Old Auditorium", "English S/F");
addRoad("Old Auditorium", "B.Com S/F");


// Canteen / John Tucker area
addRoad("Canteen", "English S/F");
addRoad("Canteen", "B.Com S/F");
addRoad("Canteen", "Computer Science");
addRoad("Canteen", "Food Science");


// Computer Science area
addRoad("Computer Science", "Food Science");
addRoad("Computer Science", "Hostel");


// New Auditorium area
addRoad("New Auditorium", "Nano Science");
addRoad("New Auditorium", "History");
addRoad("New Auditorium", "Maths");
addRoad("New Auditorium", "BCA");
addRoad("New Auditorium", "MCA");
addRoad("New Auditorium", "Physics S/F");


// Physics SF area
addRoad("Physics S/F", "BCA");
addRoad("Physics S/F", "MCA");
addRoad("Physics S/F", "History");
addRoad("Physics S/F", "Maths");


// ============================================================
// DIJKSTRA
// ============================================================

function findShortestPath(start, destination) {

    const distances = {};
    const previous = {};
    const remaining = new Set();

    for (const node in roads) {

        distances[node] = Infinity;
        previous[node] = null;

        remaining.add(node);
    }

    distances[start] = 0;


    while (remaining.size > 0) {

        let current = null;
        let smallest = Infinity;

        for (const node of remaining) {

            if (distances[node] < smallest) {

                smallest = distances[node];
                current = node;
            }
        }

        if (current === null) {
            break;
        }

        remaining.delete(current);

        if (current === destination) {
            break;
        }


        for (const connection of roads[current]) {

            const next = connection.node;

            if (!remaining.has(next)) {
                continue;
            }

            const newDistance =
                distances[current] +
                connection.weight;

            if (
                newDistance <
                distances[next]
            ) {

                distances[next] =
                    newDistance;

                previous[next] =
                    current;
            }
        }
    }


    if (
        distances[destination] === Infinity
    ) {

        return null;
    }


    const path = [];

    let current = destination;

    while (current !== null) {

        path.unshift(current);

        current =
            previous[current];
    }


    return {
        path: path,
        distance: distances[destination]
    };
}


// ============================================================
// ROUTE VARIABLES
// ============================================================

let routeLayer = null;
let selectedDestination = null;


// ============================================================
// CLEAR ROUTE
// ============================================================

function clearRoute() {

    if (routeLayer) {

        map.removeLayer(routeLayer);

        routeLayer = null;
    }
}


// ============================================================
// ROUTE DIRECTIONS
// ============================================================

function getDirectionText(previousPoint, currentPoint) {

    const dy =
        currentPoint[0] -
        previousPoint[0];

    const dx =
        currentPoint[1] -
        previousPoint[1];


    if (Math.abs(dx) > Math.abs(dy)) {

        if (dx > 0) {
            return "Move right";
        }

        return "Move left";
    }


    if (dy > 0) {
        return "Move down";
    }

    return "Move up";
}


// ============================================================
// DRAW ROUTE
// ============================================================

function drawRoute(
    startName,
    destinationName
) {

    clearRoute();


    const result =
        findShortestPath(
            startName,
            destinationName
        );


    if (!result) {

        alert(
            "No route found."
        );

        return;
    }


    const points =
        result.path.map(
            name => locations[name].coords
        );


    // ========================================================
    // WHITE OUTLINE
    // ========================================================

    const routeOutline =
        L.polyline(
            points,
            {
                color: "#ffffff",
                weight: 12,
                opacity: 0.9,
                lineCap: "round",
                lineJoin: "round"
            }
        );


    // ========================================================
    // BLUE ROUTE
    // ========================================================

    const route =
        L.polyline(
            points,
            {
                color: "#4285F4",
                weight: 7,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round"
            }
        );


    // ========================================================
    // START MARKER
    // ========================================================

    const startMarker =
        L.circleMarker(
            locations[startName].coords,
            {
                radius: 9,
                color: "#ffffff",
                weight: 4,
                fillColor: "#4285F4",
                fillOpacity: 1
            }
        );


    startMarker.bindTooltip(
        "Start: " + startName
    );


    // ========================================================
    // DESTINATION MARKER
    // ========================================================

    const destinationMarker =
        L.circleMarker(
            locations[destinationName].coords,
            {
                radius: 10,
                color: "#ffffff",
                weight: 4,
                fillColor: "#EA4335",
                fillOpacity: 1
            }
        );


    destinationMarker.bindTooltip(
        "Destination: " +
        destinationName
    );


    routeLayer =
        L.layerGroup([
            routeOutline,
            route,
            startMarker,
            destinationMarker
        ]).addTo(map);


    // ========================================================
    // DIRECTIONS
    // ========================================================

    let directionsHTML = "";

    result.path.forEach(
        (place, index) => {

            if (index === 0) {

                directionsHTML += `
                    <div>
                        🟢 Start at
                        <strong>${place}</strong>
                    </div>
                `;

                return;
            }


            const previousPlace =
                result.path[index - 1];


            const previousCoords =
                locations[
                    previousPlace
                ].coords;


            const currentCoords =
                locations[
                    place
                ].coords;


            const direction =
                getDirectionText(
                    previousCoords,
                    currentCoords
                );


            directionsHTML += `
                <div style="margin-top:6px;">
                    ${index}. ${direction}
                    → <strong>${place}</strong>
                </div>
            `;
        }
    );


    // ========================================================
    // INFORMATION BOX
    // ========================================================

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                🧭 Route Found
            </div>

            <div class="info-text">

                <strong>From:</strong>
                ${startName}

                <br>

                <strong>To:</strong>
                ${destinationName}

                <br><br>

                <strong>📏 Distance:</strong>
                ${Math.round(result.distance)}
                map units

                <br><br>

                <strong>🛣️ Directions</strong>

                <div style="margin-top:8px;">
                    ${directionsHTML}
                </div>

            </div>
        `;
    }


    // ========================================================
    // SHOW WHOLE ROUTE
    // ========================================================

    map.fitBounds(
        route.getBounds(),
        {
            padding: [80, 80]
        }
    );


    // ========================================================
    // DESTINATION POPUP
    // ========================================================

    if (markers[destinationName]) {

        markers[destinationName]
            .openPopup();
    }
}


// ============================================================
// SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {
        return;
    }


    selectedDestination =
        place;


    // Remove old selection
    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );
        }
    }


    // Highlight destination
    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );
    }


    // Main Gate → Destination
    drawRoute(
        "Main Gate",
        place
    );


    markers[place].openPopup();
}


// ============================================================
// SEARCH
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
        inputElement
            .value
            .trim()
            .toLowerCase();


    if (!input) {

        alert(
            "Please enter a destination."
        );

        return;
    }


    let foundPlace = null;


    // Exact name
    for (const place in locations) {

        if (
            place.toLowerCase() ===
            input
        ) {

            foundPlace = place;
            break;
        }
    }


    // Alias / partial search
    if (!foundPlace) {

        for (const place in locations) {

            const aliases =
                locations[place].aliases || [];


            if (
                place
                    .toLowerCase()
                    .includes(input)
            ) {

                foundPlace = place;
                break;
            }


            for (
                const alias
                of aliases
            ) {

                if (
                    alias
                        .toLowerCase()
                        .includes(input) ||
                    input.includes(
                        alias.toLowerCase()
                    )
                ) {

                    foundPlace = place;
                    break;
                }
            }


            if (found
