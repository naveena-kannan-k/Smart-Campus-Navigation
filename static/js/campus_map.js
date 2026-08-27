// ==========================================================
// SMART CAMPUS NAVIGATION
// SARAH TUCKER COLLEGE
// IMAGE BASED CAMPUS ROUTE NAVIGATION
// ==========================================================


// ==========================================================
// ORIGINAL CAMPUS IMAGE SIZE
// ==========================================================

const imageWidth = 1328;
const imageHeight = 800;


// ==========================================================
// CREATE MAP
// ==========================================================

const map = L.map("campusMap", {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3,
    zoomSnap: 0.25
});


// ==========================================================
// IMAGE BOUNDS
// ==========================================================

const bounds = [
    [0, 0],
    [imageHeight, imageWidth]
];


// ==========================================================
// CAMPUS IMAGE
// ==========================================================

L.imageOverlay(
    "/static/images/campus_layout.jpeg",
    bounds
).addTo(map);


// ==========================================================
// SHOW FULL CAMPUS
// ==========================================================

map.fitBounds(bounds);


// ==========================================================
// CAMPUS LOCATIONS
// [Y, X]
// ==========================================================

const locations = {

    // ------------------------------------------------------
    // FRONT / ENTRANCE
    // ------------------------------------------------------

    "Main Gate": {
        coords: [748, 720],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: [755, 115],
        icon: "🏦",
        type: "Bank"
    },

    "Parking Shed": {
        coords: [748, 1240],
        icon: "🅿️",
        type: "Parking"
    },


    // ------------------------------------------------------
    // CENTRAL
    // ------------------------------------------------------

    "Garden": {
        coords: [505, 735],
        icon: "🌳",
        type: "Central Garden"
    },

    "Main Block": {
        coords: [300, 735],
        icon: "🏫",
        type: "Academic Block"
    },

    "Management Office": {
        coords: [350, 800],
        icon: "🏢",
        type: "Administration"
    },


    // ------------------------------------------------------
    // RIGHT SIDE
    // ------------------------------------------------------

    "Old Auditorium": {
        coords: [280, 1120],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Economics": {
        coords: [435, 1230],
        icon: "📊",
        type: "Economics Department"
    },

    "Tamil & English": {
        coords: [405, 1230],
        icon: "📚",
        type: "Tamil & English Department"
    },

    "Library": {
        coords: [510, 1135],
        icon: "📚",
        type: "Library"
    },

    "Canteen": {
        coords: [105, 1040],
        icon: "🍴",
        type: "Canteen"
    },

    "English S/F": {
        coords: [65, 1220],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [95, 1240],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [75, 1150],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [95, 1190],
        icon: "🧪",
        type: "Food Science Department"
    },


    // ------------------------------------------------------
    // MAIN BLOCK / SCIENCE
    // ------------------------------------------------------

    "Physics": {
        coords: [205, 490],
        icon: "🔬",
        type: "Physics Department"
    },

    "Chemistry": {
        coords: [175, 505],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics S/F": {
        coords: [205, 405],
        icon: "🔬",
        type: "Physics S/F"
    },

    "B.Com & Zoology": {
        coords: [155, 700],
        icon: "🏫",
        type: "B.Com & Zoology"
    },


    // ------------------------------------------------------
    // LEFT SIDE
    // ------------------------------------------------------

    "BCA": {
        coords: [160, 240],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        coords: [220, 225],
        icon: "💻",
        type: "MCA Department"
    },

    "History": {
        coords: [270, 170],
        icon: "📖",
        type: "History Department"
    },

    "Maths": {
        coords: [285, 320],
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        coords: [385, 170],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [330, 160],
        icon: "🏛️",
        type: "New Auditorium"
    },

    "Parlour/Sion Hall": {
        coords: [330, 390],
        icon: "🏛️",
        type: "Parlour / Sion Hall"
    },


    // ------------------------------------------------------
    // TOP
    // ------------------------------------------------------

    "Chapel": {
        coords: [45, 430],
        icon: "⛪",
        type: "Chapel"
    },

    "Hostel": {
        coords: [45, 730],
        icon: "🏠",
        type: "Hostel"
    },

    "Playground": {
        coords: [100, 750],
        icon: "⚽",
        type: "Play Ground"
    },

    "Botany & Economics": {
        coords: [205, 950],
        icon: "🌿",
        type: "Botany & Economics"
    }

};


// ==========================================================
// MARKER STORAGE
// ==========================================================

const markers = {};


// ==========================================================
// ROUTE STORAGE
// ==========================================================

let routeLine = null;
let startMarker = null;
let destinationMarker = null;

let selectedDestination = null;


// ==========================================================
// CAMPUS ROUTE NETWORK
// ==========================================================
//
// These points follow the visible campus roads / pathways
// in the uploaded campus map.
//
// Format:
// [Y, X]
//
// ==========================================================

const roadNodes = {

    // Main Gate area
    GATE: [748, 720],

    SOUTH: [675, 720],
    SOUTH_LEFT: [625, 600],
    SOUTH_RIGHT: [625, 850],

    // Garden / circular road
    GARDEN_BOTTOM: [575, 720],
    GARDEN_LEFT: [505, 575],
    GARDEN_TOP: [420, 720],
    GARDEN_RIGHT: [505, 875],

    // Main block front
    MAIN_FRONT: [390, 720],

    // Main block sides
    MAIN_LEFT: [335, 570],
    MAIN_RIGHT: [335, 890],

    // Upper central road
    UPPER_LEFT: [270, 470],
    UPPER_CENTER: [260, 720],
    UPPER_RIGHT: [270, 970],

    // Far left
    LEFT_MID: [320, 350],
    LEFT_TOP: [210, 350],
    LEFT_UPPER: [140, 430],

    // Far right
    RIGHT_MID: [350, 1030],
    RIGHT_TOP: [230, 1030],
    RIGHT_FAR: [310, 1170],

    // Top road
    TOP_CENTER: [110, 720],
    TOP_LEFT: [110, 450],
    TOP_RIGHT: [110, 1000],

    // Departments right
    RIGHT_LIBRARY: [450, 1060],
    RIGHT_ECONOMICS: [410, 1180],
    RIGHT_DEPT: [250, 1160],

    // Left departments
    LEFT_DEPT: [210, 430],
    LEFT_AUDITORIUM: [300, 250],

    // Hostel / Chapel
    CHAPEL_PATH: [75, 470],
    HOSTEL_PATH: [65, 720],

    // Canteen
    CANTEEN_PATH: [120, 1000]
};


// ==========================================================
// ROAD CONNECTIONS
// ==========================================================

const roadConnections = [

    ["GATE", "SOUTH"],
    ["SOUTH", "SOUTH_LEFT"],
    ["SOUTH", "SOUTH_RIGHT"],

    ["SOUTH_LEFT", "GARDEN_BOTTOM"],
    ["SOUTH_RIGHT", "GARDEN_BOTTOM"],

    ["GARDEN_BOTTOM", "GARDEN_LEFT"],
    ["GARDEN_LEFT", "GARDEN_TOP"],
    ["GARDEN_TOP", "GARDEN_RIGHT"],
    ["GARDEN_RIGHT", "GARDEN_BOTTOM"],

    ["GARDEN_TOP", "MAIN_FRONT"],

    ["MAIN_FRONT", "MAIN_LEFT"],
    ["MAIN_FRONT", "MAIN_RIGHT"],

    ["MAIN_LEFT", "UPPER_LEFT"],
    ["MAIN_RIGHT", "UPPER_RIGHT"],

    ["UPPER_LEFT", "UPPER_CENTER"],
    ["UPPER_CENTER", "UPPER_RIGHT"],

    ["UPPER_LEFT", "LEFT_MID"],
    ["LEFT_MID", "LEFT_TOP"],
    ["LEFT_TOP", "LEFT_UPPER"],

    ["UPPER_RIGHT", "RIGHT_MID"],
    ["RIGHT_MID", "RIGHT_TOP"],
    ["RIGHT_TOP", "RIGHT_FAR"],

    ["LEFT_TOP", "TOP_LEFT"],
    ["TOP_LEFT", "TOP_CENTER"],

    ["TOP_CENTER", "TOP_RIGHT"],

    ["TOP_RIGHT", "RIGHT_TOP"],

    ["RIGHT_FAR", "RIGHT_LIBRARY"],
    ["RIGHT_LIBRARY", "RIGHT_ECONOMICS"],
    ["RIGHT_ECONOMICS", "RIGHT_DEPT"],

    ["LEFT_MID", "LEFT_DEPT"],
    ["LEFT_DEPT", "LEFT_AUDITORIUM"],

    ["TOP_LEFT", "CHAPEL_PATH"],
    ["CHAPEL_PATH", "HOSTEL_PATH"],
    ["HOSTEL_PATH", "TOP_CENTER"],

    ["TOP_RIGHT", "CANTEEN_PATH"],
    ["CANTEEN_PATH", "RIGHT_TOP"]
];


// ==========================================================
// CREATE CAMPUS ICON
// ==========================================================

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


// ==========================================================
// ADD CAMPUS MARKERS
// ==========================================================

for (const place in locations) {

    const data = locations[place];

    const marker = L.marker(
        data.coords,
        {
            icon: createCampusIcon(data.icon)
        }
    ).addTo(map);


    // ------------------------------------------------------
    // POPUP
    // ------------------------------------------------------

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


    // ------------------------------------------------------
    // LABEL
    // ------------------------------------------------------

    marker.bindTooltip(place, {

        direction: "top",

        offset: [0, -22],

        className: "campus-label",

        sticky: true

    });


    markers[place] = marker;
}


// ==========================================================
// DISTANCE FUNCTION
// ==========================================================

function distance(a, b) {

    const dy = a[0] - b[0];
    const dx = a[1] - b[1];

    return Math.sqrt(
        dy * dy +
        dx * dx
    );
}


// ==========================================================
// BUILD GRAPH
// ==========================================================

function buildGraph() {

    const graph = {};

    for (const node in roadNodes) {

        graph[node] = [];

    }


    roadConnections.forEach(connection => {

        const a = connection[0];
        const b = connection[1];

        const d = distance(
            roadNodes[a],
            roadNodes[b]
        );

        graph[a].push({
            node: b,
            distance: d
        });

        graph[b].push({
            node: a,
            distance: d
        });

    });

    return graph;
}


// ==========================================================
// FIND NEAREST ROAD NODE
// ==========================================================

function nearestRoadNode(coords) {

    let nearest = null;
    let shortest = Infinity;

    for (const node in roadNodes) {

        const d = distance(
            coords,
            roadNodes[node]
        );

        if (d < shortest) {

            shortest = d;

            nearest = node;

        }

    }

    return nearest;
}


// ==========================================================
// DIJKSTRA SHORTEST PATH
// ==========================================================

function findShortestPath(startNode, endNode) {

    const graph = buildGraph();

    const distances = {};
    const previous = {};
    const unvisited = new Set();


    for (const node in graph) {

        distances[node] = Infinity;

        previous[node] = null;

        unvisited.add(node);

    }


    distances[startNode] = 0;


    while (unvisited.size > 0) {

        let current = null;
        let currentDistance = Infinity;


        for (const node of unvisited) {

            if (
                distances[node] <
                currentDistance
            ) {

                currentDistance =
                    distances[node];

                current = node;

            }

        }


        if (current === null) {
            break;
        }


        if (current === endNode) {
            break;
        }


        unvisited.delete(current);


        graph[current].forEach(edge => {

            if (!unvisited.has(edge.node)) {
                return;
            }


            const newDistance =
                distances[current] +
                edge.distance;


            if (
                newDistance <
                distances[edge.node]
            ) {

                distances[edge.node] =
                    newDistance;

                previous[edge.node] =
                    current;

            }

        });

    }


    // ------------------------------------------------------
    // BUILD PATH
    // ------------------------------------------------------

    const path = [];

    let current = endNode;


    while (current !== null) {

        path.unshift(current);

        current = previous[current];

    }


    if (
        path.length === 0 ||
        path[0] !== startNode
    ) {

        return null;

    }


    return {

        nodes: path,

        distance: distances[endNode]

    };

}


// ==========================================================
// CREATE ROUTE
// ==========================================================

function createRoute(startCoords, destinationCoords) {

    clearRoute();


    const startNode =
        nearestRoadNode(startCoords);


    const endNode =
        nearestRoadNode(destinationCoords);


    const result =
        findShortestPath(
            startNode,
            endNode
        );


    if (!result) {

        alert(
            "Route could not be found."
        );

        return;

    }


    // ------------------------------------------------------
    // BUILD ROUTE COORDINATES
    // ------------------------------------------------------

    const routeCoords = [];


    routeCoords.push(
        startCoords
    );


    result.nodes.forEach(node => {

        routeCoords.push(
            roadNodes[node]
        );

    });


    routeCoords.push(
        destinationCoords
    );


    // ------------------------------------------------------
    // DRAW ROUTE
    // ------------------------------------------------------

    routeLine = L.polyline(

        routeCoords,

        {
            color: "#e91e63",

            weight: 7,

            opacity: 0.9,

            lineCap: "round",

            lineJoin: "round",

            dashArray: "12 8"

        }

    ).addTo(map);


    // ------------------------------------------------------
    // START MARKER
    // ------------------------------------------------------

    startMarker = L.circleMarker(

        startCoords,

        {
            radius: 9,

            color: "#ffffff",

            weight: 3,

            fillColor: "#2196f3",

            fillOpacity: 1

        }

    ).addTo(map);


    startMarker.bindTooltip(
        "📍 Start",
        {
            permanent: false
        }
    );


    // ------------------------------------------------------
    // DESTINATION MARKER
    // ------------------------------------------------------

    destinationMarker =
        L.circleMarker(

            destinationCoords,

            {
                radius: 10,

                color: "#ffffff",

                weight: 3,

                fillColor: "#e91e63",

                fillOpacity: 1

            }

        ).addTo(map);


    destinationMarker.bindTooltip(
        "🎯 Destination",
        {
            permanent: false
        }
    );


    // ------------------------------------------------------
    // FIT ROUTE
    // ------------------------------------------------------

    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [80, 80]
        }
    );


    // ------------------------------------------------------
    // DISTANCE
    // ------------------------------------------------------

    const pixels =
        calculateRouteDistance(
            routeCoords
        );


    // Approximate campus walking scale
    const meters =
        pixels * 0.55;


    const roundedMeters =
        Math.round(meters);


    const walkingMinutes =
        Math.max(
            1,
            Math.round(
                roundedMeters / 80
            )
        );


    // ------------------------------------------------------
    // UPDATE INFORMATION
    // ------------------------------------------------------

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                🧭 Navigation to ${selectedDestination}
            </div>

            <div class="info-text">

                🚶 Walking route

                <br>

                📏 Distance:
                ${roundedMeters} m

                <br>

                ⏱️ Estimated walking time:
                ${walkingMinutes} min

                <br>

                🛣️ Route follows campus paths

            </div>

        `;

    }


    // ------------------------------------------------------
    // ADD NAVIGATION CARD
    // ------------------------------------------------------

    showNavigationCard(
        startCoords,
        destinationCoords,
        result
    );

}


// ==========================================================
// CALCULATE ROUTE DISTANCE
// ==========================================================

function calculateRouteDistance(coords) {

    let total = 0;


    for (
        let i = 0;
        i < coords.length - 1;
        i++
    ) {

        total += distance(
            coords[i],
            coords[i + 1]
        );

    }


    return total;

}


// ==========================================================
// NAVIGATION CARD
// ==========================================================

function showNavigationCard(
    startCoords,
    destinationCoords,
    result
) {

    let card =
        document.getElementById(
            "navigationCard"
        );


    if (!card) {

        card =
            document.createElement(
                "div"
            );

        card.id =
            "navigationCard";


        document.body.appendChild(
            card
        );

    }


    const steps = [];


    result.nodes.forEach(
        (node, index) => {

            if (index === 0) {
                return;
            }


            steps.push(
                `➡️ Follow campus path`
            );

        }
    );


    card.innerHTML = `

        <div class="navigation-card-title">
            🧭 Navigation
        </div>

        <div class="navigation-destination">
            🎯 ${selectedDestination}
        </div>

        <div class="navigation-start">
            📍 Starting from Main Gate
        </div>

        <div class="navigation-steps">

            ${steps.slice(0, 5).map(
                step => `
                    <div class="navigation-step">
                        ${step}
                    </div>
                `
            ).join("")}

            <div class="navigation-step destination-step">
                🏁 You have reached
                ${selectedDestination}
            </div>

        </div>

    `;


    // ------------------------------------------------------
    // STYLE
    // ------------------------------------------------------

    card.style.position = "fixed";

    card.style.right = "25px";

    card.style.top = "150px";

    card.style.zIndex = "2000";

    card.style.width = "290px";

    card.style.background = "white";

    card.style.padding = "18px";

    card.style.borderRadius = "15px";

    card.style.boxShadow =
        "0 8px 30px rgba(0,0,0,.22)";

    card.style.fontFamily =
        "Poppins, Segoe UI, sans-serif";


    const title =
        card.querySelector(
            ".navigation-card-title"
        );

    if (title) {

        title.style.color =
            "#800040";

        title.style.fontSize =
            "18px";

        title.style.fontWeight =
            "700";

        title.style.marginBottom =
            "10px";

    }


    const destination =
        card.querySelector(
            ".navigation-destination"
        );

    if (destination) {

        destination.style.fontWeight =
            "700";

        destination.style.marginBottom =
            "8px";

    }


    const start =
        card.querySelector(
            ".navigation-start"
        );

    if (start) {

        start.style.fontSize =
            "13px";

        start.style.color =
            "#666";

        start.style.marginBottom =
            "12px";

    }


    const stepsElements =
        card.querySelectorAll(
            ".navigation-step"
        );


    stepsElements.forEach(
        element => {

            element.style.padding =
                "7px 0";

            element.style.borderBottom =
                "1px solid #eee";

            element.style.fontSize =
                "13px";

        }
    );

}


// ==========================================================
// CLEAR ROUTE
// ==========================================================

function clearRoute() {

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    if (startMarker) {

        map.removeLayer(
            startMarker
        );

        startMarker = null;

    }


    if (destinationMarker) {

        map.removeLayer(
            destinationMarker
        );

        destinationMarker = null;

    }


    const card =
        document.getElementById(
            "navigationCard"
        );


    if (card) {

        card.remove();

    }

}


// ==========================================================
// SELECT DESTINATION
// ==========================================================

function selectDestination(place) {

    if (!locations[place]) {
        return;
    }


    selectedDestination = place;


    // ------------------------------------------------------
    // REMOVE OLD SELECTION
    // ------------------------------------------------------

    for (const name in markers) {

        const element =
            markers[name].getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // ------------------------------------------------------
    // HIGHLIGHT DESTINATION
    // ------------------------------------------------------

    const selectedElement =
        markers[place].getElement();


    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // ------------------------------------------------------
    // CREATE ROUTE FROM MAIN GATE
    // ------------------------------------------------------

    createRoute(
        locations["Main Gate"].coords,
        locations[place].coords
    );


    // ------------------------------------------------------
    // OPEN POPUP
    // ------------------------------------------------------

    markers[place].openPopup();


    // ------------------------------------------------------
    // INFORMATION
    // ------------------------------------------------------

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                🎯 ${place}
            </div>

            <div class="info-text">
                ${locations[place].type}
                <br>
                🧭 Calculating campus route...
            </div>

        `;

    }

}


// ==========================================================
// SEARCH
// ==========================================================

function findDestination() {

    const input =
        document
            .getElementById(
                "destinationInput"
            )
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


    for (const place in locations) {

        if (
            place
                .toLowerCase()
                .includes(input)
        ) {

            foundPlace =
                place;

            break;

        }

    }


    if (!foundPlace) {

        alert(
            "Location not found.\n\n" +
            "Try Library, Canteen, " +
            "Computer Science, Main Gate, " +
            "Hostel, Main Block, etc."
        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ==========================================================
// ENTER KEY SEARCH
// ==========================================================

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


// ==========================================================
// RESET MAP
// ==========================================================

function resetCampusView() {

    clearRoute();


    map.fitBounds(
        bounds,
        {
            padding: [20, 20]
        }
    );


    selectedDestination = null;


    for (const name in markers) {

        const element =
            markers[name].getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


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
                Search a building or select a
                location on the map.
            </div>

        `;

    }

}


// ==========================================================
// MY LOCATION
// ==========================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported."
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


            const info =
                document.getElementById(
                    "locationInfo"
                );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 GPS Location Detected
                    </div>

                    <div class="info-text">

                        Latitude:
                        ${latitude.toFixed(6)}

                        <br>

                        Longitude:
                        ${longitude.toFixed(6)}

                        <br><br>

                        Select a destination to
                        start campus navigation.

                    </div>

                `;

            }

        },


        function(error) {

            console.error(error);


            alert(
                "Unable to access your location.\n\n" +
                "Please allow location permission."
            );

        },


        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0
        }

    );

}


// ==========================================================
// ZOOM CONTROL
// ==========================================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ==========================================================
// READY
// ==========================================================

console.log(
    "✅ Smart Campus Route Navigation Loaded"
);
