// ============================================================
// SMART CAMPUS NAVIGATION
// SARAH TUCKER COLLEGE
//
// VECTOR CAMPUS MAP
// NO CAMPUS IMAGE
//
// IMPORTANT:
// Garden = NO WALKING ROAD
// Main Gate = STARTING POINT
// Routes follow CAMPUS ROADS
// ============================================================


// ============================================================
// 1. MAP
// ============================================================

const map = L.map("campusMap", {
    zoomControl: false
});


// ============================================================
// 2. OPENSTREETMAP BACKGROUND
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 20,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 3. CAMPUS CENTER
// ============================================================

const campusCenter = [8.7250, 77.7345];

map.setView(campusCenter, 18);


// ============================================================
// 4. CAMPUS LOCATIONS
//
// Relative positions are arranged according to
// the campus layout described by you.
//
// [latitude, longitude]
// ============================================================

const locations = {


    // --------------------------------------------------------
    // MAIN ENTRANCE
    // --------------------------------------------------------

    "Main Gate": {

        coords: [8.72380, 77.73450],

        icon: "🚪",

        type: "Main Entrance",

        roadNode: "mainGate"

    },


    // --------------------------------------------------------
    // MAIN GATE LEFT
    // --------------------------------------------------------

    "Canara Bank": {

        coords: [8.72382, 77.73375],

        icon: "🏦",

        type: "Bank",

        roadNode: "bank"

    },


    // --------------------------------------------------------
    // MAIN GATE RIGHT
    // --------------------------------------------------------

    "Parking Shed": {

        coords: [8.72382, 77.73525],

        icon: "🅿️",

        type: "Parking",

        roadNode: "parking"

    },


    // --------------------------------------------------------
    // CENTRAL
    // --------------------------------------------------------

    "Garden": {

        coords: [8.72475, 77.73450],

        icon: "🌳",

        type: "Central Garden",

        roadNode: null

    },


    // --------------------------------------------------------
    // MAIN BLOCK
    // --------------------------------------------------------

    "Main Block": {

        coords: [8.72510, 77.73450],

        icon: "🏫",

        type: "Main Block",

        roadNode: "mainBlock"

    },


    "Management Office": {

        coords: [8.72505, 77.73415],

        icon: "🏢",

        type: "Management Office",

        roadNode: "management"

    },


    "Principal Office": {

        coords: [8.72505, 77.73485],

        icon: "🏢",

        type: "Principal Office",

        roadNode: "principal"

    },


    // --------------------------------------------------------
    // MAIN BLOCK FIRST FLOOR
    // --------------------------------------------------------

    "Physics": {

        coords: [8.72540, 77.73425],

        icon: "🔬",

        type: "Physics Department",

        roadNode: "physics"

    },


    "Chemistry": {

        coords: [8.72540, 77.73395],

        icon: "🧪",

        type: "Chemistry Department",

        roadNode: "chemistry"

    },


    "Botany": {

        coords: [8.72540, 77.73485],

        icon: "🌿",

        type: "Botany Department",

        roadNode: "botany"

    },


    // --------------------------------------------------------
    // OLD AUDITORIUM
    // --------------------------------------------------------

    "Old Auditorium": {

        coords: [8.72555, 77.73555],

        icon: "🏛️",

        type: "Old Auditorium",

        roadNode: "oldAuditorium"

    },


    // --------------------------------------------------------
    // OPPOSITE OLD AUDITORIUM
    // --------------------------------------------------------

    "Tamil & English": {

        coords: [8.72535, 77.73600],

        icon: "📚",

        type: "Tamil & English Department",

        roadNode: "tamilEnglish"

    },


    "Economics": {

        coords: [8.72510, 77.73600],

        icon: "📊",

        type: "Economics Department",

        roadNode: "economics"

    },


    // --------------------------------------------------------
    // LIBRARY
    // LEFT SIDE OF TAMIL / ENGLISH / ECONOMICS
    // --------------------------------------------------------

    "Library": {

        coords: [8.72485, 77.73570],

        icon: "📚",

        type: "Library",

        roadNode: "library"

    },


    // --------------------------------------------------------
    // PARTITION HALL
    // --------------------------------------------------------

    "Partition Hall": {

        coords: [8.72565, 77.73325],

        icon: "🏢",

        type: "Partition Hall",

        roadNode: "partition"

    },


    // --------------------------------------------------------
    // NEW AUDITORIUM
    // --------------------------------------------------------

    "New Auditorium": {

        coords: [8.72595, 77.73295],

        icon: "🏛️",

        type: "New Auditorium",

        roadNode: "newAuditorium"

    },


    // --------------------------------------------------------
    // NEW AUDITORIUM GROUND FLOOR
    // --------------------------------------------------------

    "Maths": {

        coords: [8.72615, 77.73305],

        icon: "📐",

        type: "Mathematics Department",

        roadNode: "maths"

    },


    "Zoology & B.Com": {

        coords: [8.72620, 77.73345],

        icon: "🧬",

        type: "Zoology & B.Com (Aided)",

        roadNode: "zoology"

    },


    // --------------------------------------------------------
    // NEW AUDITORIUM LEFT / RIGHT
    // --------------------------------------------------------

    "Nano Science": {

        coords: [8.72620, 77.73265],

        icon: "🧪",

        type: "Nano Science Department",

        roadNode: "nano"

    },


    "History": {

        coords: [8.72620, 77.73380],

        icon: "📖",

        type: "History Department",

        roadNode: "history"

    },


    // --------------------------------------------------------
    // PHYSICS / HEALTH
    // --------------------------------------------------------

    "Physics & Health": {

        coords: [8.72575, 77.73265],

        icon: "🔬",

        type: "Physics & Health",

        roadNode: "physicsHealth"

    },


    // --------------------------------------------------------
    // BCA / MCA
    // --------------------------------------------------------

    "BCA": {

        coords: [8.72610, 77.73220],

        icon: "💻",

        type: "BCA Department",

        roadNode: "bca"

    },


    "MCA": {

        coords: [8.72635, 77.73225],

        icon: "💻",

        type: "MCA Department",

        roadNode: "mca"

    },


    // --------------------------------------------------------
    // CHAPEL
    // --------------------------------------------------------

    "Chapel": {

        coords: [8.72675, 77.73235],

        icon: "⛪",

        type: "Chapel",

        roadNode: "chapel"

    },


    // --------------------------------------------------------
    // CANTEEN
    // --------------------------------------------------------

    "Canteen": {

        coords: [8.72490, 77.73590],

        icon: "🍴",

        type: "Canteen",

        roadNode: "canteen"

    },


    // --------------------------------------------------------
    // CANTEEN SIDE DEPARTMENTS
    // --------------------------------------------------------

    "English S/F": {

        coords: [8.72500, 77.73625],

        icon: "📚",

        type: "English S/F Department",

        roadNode: "englishSF"

    },


    "B.Com S/F": {

        coords: [8.72515, 77.73625],

        icon: "💼",

        type: "B.Com S/F Department",

        roadNode: "bcomSF"

    },


    "Computer Science": {

        coords: [8.72530, 77.73625],

        icon: "💻",

        type: "Computer Science Department",

        roadNode: "computerScience"

    },


    "Food Science": {

        coords: [8.72545, 77.73625],

        icon: "🧪",

        type: "Food Science Department",

        roadNode: "foodScience"

    },


    // --------------------------------------------------------
    // SPORTS
    // --------------------------------------------------------

    "Sports Room": {

        coords: [8.72480, 77.73555],

        icon: "🏃",

        type: "Sports Room",

        roadNode: "sports"

    },


    "Playground": {

        coords: [8.72470, 77.73510],

        icon: "⚽",

        type: "Playground",

        roadNode: "playground"

    },


    // --------------------------------------------------------
    // HOSTEL
    // --------------------------------------------------------

    "Hostel": {

        coords: [8.72505, 77.73510],

        icon: "🏠",

        type: "Hostel",

        roadNode: "hostel"

    }

};


// ============================================================
// 5. ROAD NETWORK
//
// IMPORTANT:
// These roads are VECTOR LINES.
// Garden itself is NOT a road.
//
// Main Gate → side road → Main Block
// Main Block → Old Auditorium
// Main Gate → left road → Partition Hall
// Main Block → Canteen side
// ============================================================

const roadNodes = {

    mainGate: [8.72380, 77.73450],

    bank: [8.72382, 77.73375],

    parking: [8.72382, 77.73525],

    southRoad: [8.72400, 77.73450],

    westRoad: [8.72450, 77.73370],

    eastRoad: [8.72450, 77.73530],

    mainBlockRoad: [8.72495, 77.73450],

    mainBlock: [8.72510, 77.73450],

    management: [8.72505, 77.73415],

    principal: [8.72505, 77.73485],

    physics: [8.72540, 77.73425],

    chemistry: [8.72540, 77.73395],

    botany: [8.72540, 77.73485],

    oldRoad: [8.72535, 77.73530],

    oldAuditorium: [8.72555, 77.73555],

    tamilEnglish: [8.72535, 77.73600],

    economics: [8.72510, 77.73600],

    libraryRoad: [8.72485, 77.73570],

    library: [8.72485, 77.73570],

    partitionRoad: [8.72565, 77.73325],

    partition: [8.72565, 77.73325],

    newAuditorium: [8.72595, 77.73295],

    maths: [8.72615, 77.73305],

    zoology: [8.72620, 77.73345],

    nano: [8.72620, 77.73265],

    history: [8.72620, 77.73380],

    physicsHealth: [8.72575, 77.73265],

    bca: [8.72610, 77.73220],

    mca: [8.72635, 77.73225],

    chapel: [8.72675, 77.73235],

    canteenRoad: [8.72490, 77.73590],

    canteen: [8.72490, 77.73590],

    englishSF: [8.72500, 77.73625],

    bcomSF: [8.72515, 77.73625],

    computerScience: [8.72530, 77.73625],

    foodScience: [8.72545, 77.73625],

    sports: [8.72480, 77.73555],

    playground: [8.72470, 77.73510],

    hostel: [8.72505, 77.73510]

};


// ============================================================
// 6. ROAD CONNECTIONS
// ============================================================

const roadConnections = [

    ["mainGate", "bank"],
    ["mainGate", "parking"],

    ["mainGate", "southRoad"],

    ["southRoad", "westRoad"],
    ["southRoad", "eastRoad"],

    ["westRoad", "partitionRoad"],
    ["partitionRoad", "partition"],
    ["partition", "newAuditorium"],

    ["newAuditorium", "maths"],
    ["newAuditorium", "zoology"],
    ["newAuditorium", "nano"],
    ["newAuditorium", "history"],

    ["nano", "physicsHealth"],
    ["physicsHealth", "bca"],
    ["bca", "mca"],
    ["mca", "chapel"],

    ["eastRoad", "mainBlockRoad"],
    ["mainBlockRoad", "mainBlock"],

    ["mainBlock", "management"],
    ["mainBlock", "principal"],

    ["mainBlock", "physics"],
    ["physics", "chemistry"],
    ["physics", "botany"],

    ["mainBlockRoad", "oldRoad"],
    ["oldRoad", "oldAuditorium"],

    ["oldAuditorium", "tamilEnglish"],
    ["tamilEnglish", "economics"],

    ["oldRoad", "libraryRoad"],
    ["libraryRoad", "library"],

    ["library", "canteenRoad"],
    ["canteenRoad", "canteen"],

    ["canteen", "englishSF"],
    ["canteen", "bcomSF"],
    ["canteen", "computerScience"],
    ["canteen", "foodScience"],

    ["canteenRoad", "sports"],
    ["sports", "playground"],
    ["playground", "hostel"]

];


// ============================================================
// 7. DRAW CAMPUS ROADS
// ============================================================

roadConnections.forEach(connection => {

    const start =
        roadNodes[connection[0]];

    const end =
        roadNodes[connection[1]];

    L.polyline(
        [start, end],
        {
            className: "campus-road"
        }
    ).addTo(map);

});


// ============================================================
// 8. DRAW GARDEN
//
// NO ROAD INSIDE GARDEN
// ============================================================

L.circle(
    [8.72475, 77.73450],
    {
        radius: 55,
        className: "campus-garden"
    }
)
.addTo(map)
.bindTooltip(
    "🌳 Central Garden",
    {
        permanent: false
    }
);


// ============================================================
// 9. MARKERS
// ============================================================

const markers = {};


// ============================================================
// 10. ICON
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
// 11. ADD MARKERS
// ============================================================

for (const place in locations) {

    const data =
        locations[place];


    const marker =
        L.marker(
            data.coords,
            {
                icon:
                    createCampusIcon(
                        data.icon
                    )
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
            offset: [0, -20],
            className: "campus-label"
        }
    );


    markers[place] =
        marker;

}


// ============================================================
// 12. CURRENT LOCATION
// ============================================================

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;


// ============================================================
// 13. DESTINATION
// ============================================================

let selectedDestination = null;


// ============================================================
// 14. ROUTE LINE
// ============================================================

let routeLine = null;


// ============================================================
// 15. FIND NEAREST CAMPUS ROAD NODE
// ============================================================

function nearestRoadNode(location) {

    let nearest = null;

    let smallestDistance =
        Infinity;


    for (
        const nodeName
        in roadNodes
    ) {

        const node =
            roadNodes[nodeName];


        const distance =
            map.distance(
                location,
                node
            );


        if (
            distance <
            smallestDistance
        ) {

            smallestDistance =
                distance;

            nearest =
                nodeName;

        }

    }


    return nearest;

}


// ============================================================
// 16. BUILD GRAPH
// ============================================================

const graph = {};


for (
    const node in roadNodes
) {

    graph[node] = [];

}


roadConnections.forEach(
    connection => {

        const a =
            connection[0];

        const b =
            connection[1];


        const distance =
            map.distance(
                roadNodes[a],
                roadNodes[b]
            );


        graph[a].push({
            node: b,
            distance: distance
        });


        graph[b].push({
            node: a,
            distance: distance
        });

    }
);


// ============================================================
// 17. DIJKSTRA ROUTE
// ============================================================

function findRoadPath(
    startNode,
    endNode
) {

    const distances = {};

    const previous = {};

    const visited = new Set();


    for (
        const node in graph
    ) {

        distances[node] =
            Infinity;

        previous[node] =
            null;

    }


    distances[startNode] = 0;


    while (
        visited.size <
        Object.keys(graph).length
    ) {

        let current = null;

        let best =
            Infinity;


        for (
            const node in distances
        ) {

            if (
                !visited.has(node) &&
                distances[node] < best
            ) {

                best =
                    distances[node];

                current =
                    node;

            }

        }


        if (!current) {
            break;
        }


        if (
            current === endNode
        ) {

            break;

        }


        visited.add(current);


        graph[current].forEach(
            edge => {

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

            }
        );

    }


    const path = [];

    let current =
        endNode;


    while (current) {

        path.unshift(current);

        current =
            previous[current];

    }


    return path;

}


// ============================================================
// 18. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (
        !locations[place]
    ) {

        return;

    }


    selectedDestination =
        place;


    // Remove old selection

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


    // Highlight

    const selectedElement =
        markers[place].getElement();


    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    markers[place]
        .openPopup();


    map.flyTo(
        locations[place].coords,
        18,
        {
            duration: 1
        }
    );


    updateInfo();


    if (
        userLocation
    ) {

        createCampusRoute();

    }

}


// ============================================================
// 19. INFORMATION
// ============================================================

function updateInfo() {

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (!info) {
        return;
    }


    if (!selectedDestination) {

        info.innerHTML = `

            <div class="info-title">
                📍 Campus Navigation
            </div>

            <div class="info-text">
                Search a building or select
                a campus location.
            </div>

        `;

        return;

    }


    info.innerHTML = `

        <div class="info-title">
            🎯 ${selectedDestination}
        </div>

        <div class="info-text">

            ${locations[selectedDestination].type}

            <br><br>

            ${
                userLocation
                ? "🧭 Ready to calculate walking route."
                : "📍 Click My Location to start navigation."
            }

        </div>

    `;

}


// ============================================================
// 20. SEARCH
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

        "gate":
            "Main Gate",

        "main gate":
            "Main Gate",

        "bank":
            "Canara Bank",

        "canara":
            "Canara Bank",

        "parking":
            "Parking Shed",

        "parking shed":
            "Parking Shed",

        "cs":
            "Computer Science",

        "computer":
            "Computer Science",

        "computer science":
            "Computer Science",

        "computer science department":
            "Computer Science",

        "food":
            "Food Science",

        "food science":
            "Food Science",

        "canteen":
            "Canteen",

        "library":
            "Library",

        "old auditorium":
            "Old Auditorium",

        "auditorium":
            "Old Auditorium",

        "new auditorium":
            "New Auditorium",

        "partition":
            "Partition Hall",

        "partition hall":
            "Partition Hall",

        "bca":
            "BCA",

        "mca":
            "MCA",

        "mba":
            "MCA",

        "chapel":
            "Chapel",

        "hostel":
            "Hostel",

        "playground":
            "Playground",

        "sports":
            "Sports Room",

        "sports room":
            "Sports Room",

        "physics":
            "Physics",

        "chemistry":
            "Chemistry",

        "botany":
            "Botany",

        "history":
            "History",

        "maths":
            "Maths",

        "mathematics":
            "Maths",

        "nano":
            "Nano Science",

        "nano science":
            "Nano Science",

        "economics":
            "Economics",

        "tamil":
            "Tamil & English",

        "english":
            "Tamil & English"

    };


    let foundPlace = null;


    // Alias first

    for (
        const key in aliases
    ) {

        if (
            key === input ||
            input.includes(key) ||
            key.includes(input)
        ) {

            foundPlace =
                aliases[key];

            break;

        }

    }


    // Exact / partial

    if (!foundPlace) {

        for (
            const place in locations
        ) {

            const name =
                place.toLowerCase();


            if (
                name === input ||
                name.includes(input) ||
                input.includes(name)
            ) {

                foundPlace =
                    place;

                break;

            }

        }

    }


    if (!foundPlace) {

        alert(
            "Location not found.\n\n" +
            "Try Library, Computer Science, " +
            "Canteen, Main Gate, Parking, " +
            "Old Auditorium, New Auditorium, " +
            "BCA, MCA, Chapel, Hostel, etc."
        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ============================================================
// 21. ENTER SEARCH
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
// 22. CURRENT LOCATION
// ============================================================

function showMyLocation() {

    if (
        !navigator.geolocation
    ) {

        alert(
            "Geolocation is not supported."
        );

        return;

    }


    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                📍 Detecting Location...
            </div>

            <div class="info-text">
                Please allow location permission.
            </div>

        `;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            const accuracy =
                position.coords.accuracy;


            userLocation = [
                latitude,
                longitude
            ];


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

                    iconSize: [
                        22,
                        22
                    ],

                    iconAnchor: [
                        11,
                        11
                    ]

                });


            userMarker =
                L.marker(
                    userLocation,
                    {
                        icon:
                            userIcon,

                        zIndexOffset:
                            2000
                    }
                )
                .addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius:
                            accuracy,

                        className:
                            "location-accuracy"
                    }
                )
                .addTo(map);


            map.flyTo(
                userLocation,
                18,
                {
                    duration: 1
                }
            );


            if (selectedDestination) {

                createCampusRoute();

            }
            else {

                if (info) {

                    info.innerHTML = `

                        <div class="info-title">
                            📍 Current Location
                        </div>

                        <div class="info-text">

                            Location detected successfully.

                            <br><br>

                            Accuracy:
                            ${Math.round(accuracy)} m

                            <br><br>

                            🎯 Select a destination.

                        </div>

                    `;

                }

            }

        },


        function(error) {

            console.error(
                error
            );


            alert(
                "Unable to access your location.\n\n" +
                "Please allow location permission."
            );

        },


        {

            enableHighAccuracy:
                true,

            timeout:
                15000,

            maximumAge:
                0

        }

    );

}


// ============================================================
// 23. CREATE CAMPUS ROUTE
//
// This is NOT OSRM.
// It follows OUR CAMPUS ROAD NETWORK.
//
// Garden is never used as a route node.
// ============================================================

function createCampusRoute() {

    if (!userLocation) {

        alert(
            "First click My Location."
        );

        return;

    }


    if (!selectedDestination) {

        alert(
            "Select a destination."
        );

        return;

    }


    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    const destination =
        locations[
            selectedDestination
        ];


    const startNode =
        nearestRoadNode(
            userLocation
        );


    const endNode =
        destination.roadNode;


    if (!endNode) {

        alert(
            "This location is not a walking destination."
        );

        return;

    }


    const path =
        findRoadPath(
            startNode,
            endNode
        );


    if (
        !path ||
        path.length < 2
    ) {

        alert(
            "No campus walking route found."
        );

        return;

    }


    const routePoints =
        [
            userLocation
        ];


    path.forEach(
        node => {

            routePoints.push(
                roadNodes[node]
            );

        }
    );


    routePoints.push(
        destination.coords
    );


    routeLine =
        L.polyline(
            routePoints,
            {

                className:
                    "campus-route-line",

                weight: 7,

                opacity: 0.9

            }
        )
        .addTo(map);


    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [
                80,
                80
            ]
        }
    );


    // Calculate distance

    let distance = 0;


    for (
        let i = 1;
        i < routePoints.length;
        i++
    ) {

        distance +=
            map.distance(
                routePoints[i - 1],
                routePoints[i]
            );

    }


    const minutes =
        Math.max(
            1,
            Math.round(
                distance / 80
            )
        );


    const distanceText =
        distance >= 1000

        ? (
            distance / 1000
        ).toFixed(2) + " km"

        : Math.round(distance) +
          " m";


    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                🧭 Walking Route
            </div>

            <div class="info-text">

                📍 From:
                <b>Current Location</b>

                <br><br>

                🎯 To:
                <b>${selectedDestination}</b>

                <br><br>

                📏 Distance:
                <b>${distanceText}</b>

                <br>

                🚶 Walking Time:
                <b>${minutes} min</b>

            </div>

        `;

    }

}


// ============================================================
// 24. NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
        );

        return;

    }


    if (!userLocation) {

        showMyLocation();

        return;

    }


    createCampusRoute();

}


// ============================================================
// 25. RESET
// ============================================================

function resetCampusView() {

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


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


    selectedDestination =
        null;

    userLocation =
        null;


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


    map.flyTo(
        campusCenter,
        18,
        {
            duration: 1
        }
    );


    updateInfo();

}


// ============================================================
// 26. ZOOM
// ============================================================

L.control.zoom({

    position:
        "bottomright"

}).addTo(map);


// ============================================================
// 27. FIT CAMPUS
// ============================================================

const allPoints =
    Object.values(
        roadNodes
    );


map.fitBounds(
    allPoints,
    {
        padding: [
            40,
            40
        ]
    }
);


// ============================================================
// 28. READY
// ============================================================

console.log(
    "✅ Sarah Tucker College Vector Campus Map Loaded"
);

console.log(
    "🚪 Main Gate = Starting Point"
);

console.log(
    "🌳 Garden = No Walking Road"
);

console.log(
    "🧭 Campus Road Navigation Ready"
);
