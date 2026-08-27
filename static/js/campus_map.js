// ============================================================
// SMART CAMPUS NAVIGATION
// Campus Map + Location Search + Dijkstra Route
// ============================================================


// ============================================================
// IMAGE SIZE
// ============================================================

const imageWidth = 1583;
const imageHeight = 957;


// ============================================================
// CREATE LEAFLET MAP
// ============================================================

const map = L.map("campusMap", {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3,
    zoomSnap: 0.25,
    zoomControl: false
});


// ============================================================
// IMAGE BOUNDS
// ============================================================

const bounds = [
    [0, 0],
    [imageHeight, imageWidth]
];


// ============================================================
// CAMPUS IMAGE
// ============================================================

L.imageOverlay(
    "/static/images/campus_layout.jpeg",
    bounds
).addTo(map);


// Show complete campus initially
map.fitBounds(bounds);


// ============================================================
// CAMPUS LOCATIONS
// ============================================================

const locations = {

    "Main Gate": {
        coords: [40, 845],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: [58, 160],
        icon: "🏦",
        type: "Bank"
    },

    "Parking Shed": {
        coords: [78, 1450],
        icon: "🅿️",
        type: "Parking"
    },

    "Garden": {
        coords: [360, 850],
        icon: "🌳",
        type: "Central Garden"
    },

    "Main Block": {
        coords: [625, 875],
        icon: "🏫",
        type: "Academic Block"
    },

    "Management Office": {
        coords: [565, 970],
        icon: "🏢",
        type: "Administration"
    },

    "Old Auditorium": {
        coords: [625, 1390],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Economics": {
        coords: [405, 1400],
        icon: "📊",
        type: "Economics Department"
    },

    "Tamil & English": {
        coords: [455, 1490],
        icon: "📚",
        type: "Tamil & English Department"
    },

    "Library": {
        coords: [360, 1370],
        icon: "📚",
        type: "Library"
    },

    "Canteen": {
        coords: [812, 1240],
        icon: "🍴",
        type: "Canteen"
    },

    "English S/F": {
        coords: [885, 1360],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [900, 1390],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [915, 1420],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [930, 1390],
        icon: "🧪",
        type: "Food Science Department"
    },

    "Physics": {
        coords: [690, 620],
        icon: "🔬",
        type: "Physics Department"
    },

    "Chemistry": {
        coords: [750, 620],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics S/F": {
        coords: [720, 470],
        icon: "🔬",
        type: "Physics S/F"
    },

    "B.Com & Zoology": {
        coords: [775, 850],
        icon: "🏫",
        type: "B.Com & Zoology"
    },

    "BCA": {
        coords: [735, 280],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        coords: [685, 275],
        icon: "💻",
        type: "MCA Department"
    },

    "History": {
        coords: [645, 205],
        icon: "📖",
        type: "History Department"
    },

    "Maths": {
        coords: [610, 350],
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        coords: [515, 170],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [575, 145],
        icon: "🏛️",
        type: "New Auditorium"
    },

    "Chapel": {
        coords: [900, 520],
        icon: "⛪",
        type: "Chapel"
    },

    "Hostel": {
        coords: [900, 870],
        icon: "🏠",
        type: "Hostel"
    },

    "Playground": {
        coords: [845, 875],
        icon: "⚽",
        type: "Playground"
    }
};


// ============================================================
// MARKER STORAGE
// ============================================================

const markers = {};


// ============================================================
// CREATE CUSTOM MARKER
// ============================================================

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


// ============================================================
// ADD MARKERS
// ============================================================

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
// VARIABLES
// ============================================================

let selectedDestination = null;
let campusRoute = null;
let userMarker = null;
let userLocation = null;


// ============================================================
// ROAD NETWORK
// ============================================================
//
// Each location is a NODE.
// The connections below represent campus paths.
//
// Dijkstra will find the shortest available
// path between Main Gate and destination.
// ============================================================

const roadNetwork = {};


// ============================================================
// ADD NODE
// ============================================================

function addNode(name) {

    if (!roadNetwork[name]) {

        roadNetwork[name] = [];

    }

}


// ============================================================
// ADD ROAD
// ============================================================

function addRoad(from, to) {

    addNode(from);
    addNode(to);

    const distanceValue =
        calculateDistance(
            locations[from].coords,
            locations[to].coords
        );

    roadNetwork[from].push({
        node: to,
        weight: distanceValue
    });

    roadNetwork[to].push({
        node: from,
        weight: distanceValue
    });

}


// ============================================================
// CREATE ALL NODES
// ============================================================

for (const place in locations) {

    addNode(place);

}


// ============================================================
// CAMPUS ROAD CONNECTIONS
// ============================================================
//
// MAIN ROAD
// ============================================================

addRoad("Main Gate", "Main Block");
addRoad("Main Gate", "New Auditorium");
addRoad("Main Gate", "Management Office");


// ============================================================
// MAIN BLOCK AREA
// ============================================================

addRoad("Main Block", "Management Office");
addRoad("Main Block", "Physics");
addRoad("Main Block", "Chemistry");
addRoad("Main Block", "Botany");
addRoad("Main Block", "B.Com & Zoology");


// ============================================================
// FIX LOCATION NAME
// ============================================================
//
// Your original location object uses
// "B.Com & Zoology" for the combined block.
// Botany is represented through this area.
// ============================================================


// ============================================================
// MANAGEMENT AREA
// ============================================================

addRoad("Management Office", "B.Com & Zoology");
addRoad("Management Office", "Old Auditorium");


// ============================================================
// OLD AUDITORIUM AREA
// ============================================================

addRoad("Old Auditorium", "Library");
addRoad("Old Auditorium", "Economics");
addRoad("Old Auditorium", "Tamil & English");
addRoad("Old Auditorium", "English S/F");
addRoad("Old Auditorium", "B.Com S/F");


// ============================================================
// JOHN TUCKER / CANTEEN AREA
// ============================================================

addRoad("B.Com S/F", "Canteen");
addRoad("English S/F", "Canteen");
addRoad("Canteen", "Computer Science");
addRoad("Canteen", "Food Science");


// ============================================================
// CSE AREA
// ============================================================

addRoad("Computer Science", "Food Science");
addRoad("Computer Science", "Hostel");
addRoad("Canteen", "Hostel");


// ============================================================
// NEW AUDITORIUM AREA
// ============================================================

addRoad("New Auditorium", "Nano Science");
addRoad("New Auditorium", "History");
addRoad("New Auditorium", "Maths");
addRoad("New Auditorium", "BCA");
addRoad("New Auditorium", "MCA");
addRoad("New Auditorium", "Physics S/F");


// ============================================================
// NEW AUDITORIUM / PHYSICS AREA
// ============================================================

addRoad("Physics S/F", "BCA");
addRoad("Physics S/F", "MCA");
addRoad("Physics S/F", "History");
addRoad("Physics S/F", "Maths");


// ============================================================
// CAMPUS OTHER AREAS
// ============================================================

addRoad("Main Block", "Garden");
addRoad("Garden", "Playground");
addRoad("Playground", "Hostel");
addRoad("Playground", "Chapel");


// ============================================================
// PARKING / BANK
// ============================================================

addRoad("Main Gate", "Canara Bank");
addRoad("Main Gate", "Parking Shed");


// ============================================================
// DISTANCE CALCULATION
// ============================================================

function calculateDistance(a, b) {

    const dy = a[0] - b[0];
    const dx = a[1] - b[1];

    return Math.sqrt(
        (dy * dy) +
        (dx * dx)
    );

}


// ============================================================
// DIJKSTRA SHORTEST PATH
// ============================================================

function findShortestPath(startNode, endNode) {

    const distances = {};
    const previous = {};
    const unvisited = new Set();


    // ------------------------------------------
    // INITIALIZE
    // ------------------------------------------

    for (const node in roadNetwork) {

        distances[node] = Infinity;
        previous[node] = null;

        unvisited.add(node);

    }


    distances[startNode] = 0;


    // ------------------------------------------
    // PROCESS NODES
    // ------------------------------------------

    while (unvisited.size > 0) {

        let currentNode = null;
        let smallestDistance = Infinity;


        for (const node of unvisited) {

            if (
                distances[node] <
                smallestDistance
            ) {

                smallestDistance =
                    distances[node];

                currentNode = node;

            }

        }


        // No route
        if (currentNode === null) {

            break;

        }


        // Destination reached
        if (currentNode === endNode) {

            break;

        }


        unvisited.delete(currentNode);


        // --------------------------------------
        // CHECK NEIGHBOURS
        // --------------------------------------

        for (
            const connection
            of roadNetwork[currentNode]
        ) {

            const neighbour =
                connection.node;

            if (!unvisited.has(neighbour)) {

                continue;

            }


            const newDistance =
                distances[currentNode] +
                connection.weight;


            if (
                newDistance <
                distances[neighbour]
            ) {

                distances[neighbour] =
                    newDistance;

                previous[neighbour] =
                    currentNode;

            }

        }

    }


    // ========================================================
    // BUILD PATH
    // ========================================================

    const path = [];

    let current = endNode;


    if (
        previous[current] === null &&
        current !== startNode
    ) {

        return null;

    }


    while (current !== null) {

        path.unshift(current);

        current =
            previous[current];

    }


    return {

        path: path,

        distance: distances[endNode]

    };

}


// ============================================================
// CONVERT PATH TO MAP COORDINATES
// ============================================================

function pathToCoordinates(path) {

    return path.map(
        name => locations[name].coords
    );

}


// ============================================================
// REMOVE OLD ROUTE
// ============================================================

function clearRoute() {

    if (campusRoute) {

        map.removeLayer(campusRoute);

        campusRoute = null;

    }

}


// ============================================================
// DRAW ROUTE
// ============================================================

function drawCampusRoute(
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
            "No route found between these locations."
        );

        return;

    }


    const routeCoordinates =
        pathToCoordinates(
            result.path
        );


    // ========================================================
    // ROUTE SHADOW
    // ========================================================

    const routeShadow =
        L.polyline(

            routeCoordinates,

            {

                color: "#ffffff",

                weight: 12,

                opacity: 0.9,

                lineCap: "round",

                lineJoin: "round"

            }

        ).addTo(map);


    // ========================================================
    // BLUE GOOGLE-MAPS STYLE ROUTE
    // ========================================================

    const routeLine =
        L.polyline(

            routeCoordinates,

            {

                color: "#4285F4",

                weight: 7,

                opacity: 1,

                lineCap: "round",

                lineJoin: "round"

            }

        ).addTo(map);


    // Keep both layers together
    campusRoute =
        L.layerGroup([
            routeShadow,
            routeLine
        ]).addTo(map);


    // ========================================================
    // START POINT
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

        ).addTo(campusRoute);


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

        ).addTo(campusRoute);


    destinationMarker.bindTooltip(
        "Destination: " +
        destinationName
    );


    // ========================================================
    // DISPLAY ROUTE INFORMATION
    // ========================================================

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        const distanceUnits =
            result.distance;


        // Image coordinates are not real metres.
        // Therefore this is a map-unit estimate.
        const approximateMetres =
            Math.round(
                distanceUnits
            );


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

                📍 Route:

                <br>

                ${result.path.join(
                    " → "
                )}

                <br><br>

                📏 Approx. map distance:
                ${approximateMetres} m

            </div>

        `;

    }


    // ========================================================
    // FIT MAP TO ROUTE
    // ========================================================

    map.fitBounds(

        routeLine.getBounds(),

        {

            padding: [80, 80]

        }

    );


    // ========================================================
    // OPEN DESTINATION POPUP
    // ========================================================

    if (
        markers[destinationName]
    ) {

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


    // ========================================================
    // REMOVE OLD HIGHLIGHTS
    // ========================================================

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


    // ========================================================
    // HIGHLIGHT SELECTED DESTINATION
    // ========================================================

    const selectedElement =
        markers[place].getElement();


    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // ========================================================
    // MAIN GATE → DESTINATION
    // ========================================================

    drawCampusRoute(
        "Main Gate",
        place
    );


    // ========================================================
    // FLY TO DESTINATION
    // ========================================================

    map.flyTo(

        locations[place].coords,

        1.5,

        {

            duration: 1

        }

    );


    // ========================================================
    // OPEN POPUP
    // ========================================================

    markers[place].openPopup();

}


// ============================================================
// SEARCH DESTINATION
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
            "Please enter a campus location."
        );

        return;

    }


    let foundPlace = null;


    // Exact match first
    for (
        const place in locations
    ) {

        if (
            place.toLowerCase() ===
            input
        ) {

            foundPlace = place;

            break;

        }

    }


    // Partial match
    if (!foundPlace) {

        for (
            const place in locations
        ) {

            if (
                place
                    .toLowerCase()
                    .includes(input)
            ) {

                foundPlace = place;

                break;

            }

        }

    }


    // ========================================================
    // NOT FOUND
    // ========================================================

    if (!foundPlace) {

        alert(

            "Location not found.\n\n" +

            "Try:\n" +

            "Library\n" +

            "Computer Science\n" +

            "Canteen\n" +

            "Main Block\n" +

            "New Auditorium\n" +

            "Old Auditorium\n" +

            "Hostel"

        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ============================================================
// ENTER KEY SEARCH
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
// MY LOCATION
// ============================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported by this browser."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            console.log(
                "GPS:",
                latitude,
                longitude
            );


            // =================================================
            // GPS INFORMATION
            // =================================================

            const info =
                document.getElementById(
                    "locationInfo"
                );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 My Location
                    </div>

                    <div class="info-text">

                        GPS location detected.

                        <br><br>

                        Latitude:
                        ${latitude.toFixed(6)}

                        <br>

                        Longitude:
                        ${longitude.toFixed(6)}

                        <br><br>

                        ⚠️ Campus image GPS
                        calibration is required
                        for an exact blue-dot
                        position on the image.

                    </div>

                `;

            }


            // =================================================
            // CURRENT GPS MARKER
            // =================================================

            if (userMarker) {

                map.removeLayer(
                    userMarker
                );

            }


            /*
             * IMPORTANT:
             *
             * GPS coordinates are latitude/
             * longitude.
             *
             * Campus image coordinates are
             * custom X/Y coordinates.
             *
             * Therefore GPS cannot be
             * directly placed on the image
             * until calibration is completed.
             */


            if (selectedDestination) {

                alert(

                    "GPS location detected.\n\n" +

                    "Your campus image needs " +

                    "GPS calibration before " +

                    "real-time blue-dot navigation " +

                    "can be displayed."

                );

            }

        },

        function(error) {

            console.error(
                "GPS Error:",
                error
            );


            alert(

                "Unable to access your location.\n\n" +

                "Please allow location permission " +

                "in your browser."

            );

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


// ============================================================
// RESET CAMPUS VIEW
// ============================================================

function resetCampusView() {

    map.fitBounds(

        bounds,

        {

            padding: [20, 20]

        }

    );


    selectedDestination =
        null;


    clearRoute();


    // Remove marker selections
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


    // Reset information box
    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                📍 Campus Navigation
            </div>

            <div class="info-text">

                Search a building or
                select a location on the map.

            </div>

        `;

    }

}


// ============================================================
// ZOOM CONTROL
// ============================================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ============================================================
// FINISHED
// ============================================================

console.log(
    "✅ Smart Campus Navigation loaded successfully."
);

console.log(
    "✅ Dijkstra routing enabled."
);

console.log(
    "✅ Campus locations:",
    Object.keys(locations).length
);
