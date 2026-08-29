// ============================================================
// SMART CAMPUS NAVIGATION
// CORRECTED CAMPUS POSITION VERSION
//
// NO CAMPUS IMAGE
// NO STRAIGHT-LINE NAVIGATION
//
// Main Gate
//   LEFT  -> Canara Bank
//   RIGHT -> Parking Shed
//
// Main Gate -> Roundabout -> Main Block
//
// Garden is NOT a walking path.
// Walking routes use roads around the garden.
//
// Current Location -> Campus Road -> Destination
// ============================================================


// ============================================================
// 1. REAL CAMPUS CENTER
// ============================================================

const CAMPUS_CENTER = [
    8.6987,
    77.7407
];


// ============================================================
// 2. CREATE MAP
// ============================================================

const map = L.map("campusMap", {

    zoomControl: false,

    preferCanvas: true

});


// ============================================================
// 3. OPEN STREET MAP
// ============================================================

L.tileLayer(

    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    {

        maxZoom: 20,

        attribution:
            "&copy; OpenStreetMap contributors"

    }

).addTo(map);


// ============================================================
// 4. LOCAL CAMPUS COORDINATE SYSTEM
//
// x = East / West
// y = North / South
//
// This allows us to position campus buildings
// according to the campus layout.
// ============================================================

function campusPoint(x, y) {

    const latitude =
        CAMPUS_CENTER[0] +
        (y / 111320);


    const longitude =
        CAMPUS_CENTER[1] +
        (
            x /
            (
                111320 *
                Math.cos(
                    CAMPUS_CENTER[0] *
                    Math.PI /
                    180
                )
            )
        );


    return [
        latitude,
        longitude
    ];

}


// ============================================================
// 5. CAMPUS LOCATIONS
//
// POSITIONING IS BASED ON THE CAMPUS LAYOUT
// PROVIDED BY YOU.
//
// Main Gate = bottom center
// Bank = left of gate
// Parking = right of gate
// Main Block = center
// Library = right
// Canteen + CS = upper-right
// Left departments = left side
// ============================================================

const locations = {


    // --------------------------------------------------------
    // ENTRANCE
    // --------------------------------------------------------

    "Main Gate": {

        xy: [0, -110],

        icon: "🚪",

        type: "Main Entrance"

    },


    "Canara Bank": {

        xy: [-55, -105],

        icon: "🏦",

        type: "Bank - Left Side of Main Gate"

    },


    "Parking Shed": {

        xy: [65, -105],

        icon: "🅿️",

        type: "Parking - Right Side of Main Gate"

    },


    // --------------------------------------------------------
    // CENTER
    // --------------------------------------------------------

    "Garden": {

        xy: [0, -35],

        icon: "🌳",

        type: "Central Garden"

    },


    "Main Block": {

        xy: [0, 10],

        icon: "🏫",

        type: "Main Academic Block"

    },


    "Management Office": {

        xy: [20, 10],

        icon: "🏢",

        type: "Management Office"

    },


    "Principal Office": {

        xy: [20, -5],

        icon: "👩‍💼",

        type: "Principal Office"

    },


    "Partition Hall": {

        xy: [-40, -25],

        icon: "🏛️",

        type: "Partition Hall"

    },


    // --------------------------------------------------------
    // LEFT SIDE
    // --------------------------------------------------------

    "New Auditorium": {

        xy: [-100, 15],

        icon: "🏛️",

        type: "New Auditorium"

    },


    "Nano Science": {

        xy: [-100, -5],

        icon: "🧪",

        type: "Nano Science"

    },


    "Maths": {

        xy: [-65, 25],

        icon: "📐",

        type: "Mathematics Department"

    },


    "History": {

        xy: [-95, 30],

        icon: "📖",

        type: "History Department"

    },


    "MCA": {

        xy: [-90, 55],

        icon: "💻",

        type: "MCA Department"

    },


    "BCA": {

        xy: [-90, 70],

        icon: "💻",

        type: "BCA Department"

    },


    "Physics S/F": {

        xy: [-55, 70],

        icon: "🔬",

        type: "Physics S/F"

    },


    "Physics": {

        xy: [-35, 70],

        icon: "🔬",

        type: "Physics Department"

    },


    "Chemistry": {

        xy: [-35, 60],

        icon: "🧪",

        type: "Chemistry Department"

    },


    // --------------------------------------------------------
    // TOP
    // --------------------------------------------------------

    "Zoology & B.Com": {

        xy: [0, 70],

        icon: "🏫",

        type: "Zoology & B.Com (Aided)"

    },


    "Chapel": {

        xy: [-75, 100],

        icon: "⛪",

        type: "Chapel"

    },


    "Hostel": {

        xy: [0, 105],

        icon: "🏠",

        type: "Hostel"

    },


    "Playground": {

        xy: [20, 90],

        icon: "⚽",

        type: "Playground"

    },


    // --------------------------------------------------------
    // RIGHT SIDE
    // --------------------------------------------------------

    "Botany": {

        xy: [85, 65],

        icon: "🌿",

        type: "Botany Department"

    },


    "Canteen": {

        xy: [65, 55],

        icon: "🍴",

        type: "Canteen"

    },


    "Computer Science": {

        xy: [85, 55],

        icon: "💻",

        type: "Computer Science Department"

    },


    "English S/F": {

        xy: [90, 80],

        icon: "📚",

        type: "English S/F Department"

    },


    "B.Com S/F": {

        xy: [75, 78],

        icon: "💼",

        type: "B.Com S/F Department"

    },


    "Old Auditorium": {

        xy: [105, 55],

        icon: "🏛️",

        type: "Old Auditorium"

    },


    "Tamil & English": {

        xy: [95, 20],

        icon: "📚",

        type: "Tamil & English Department"

    },


    "Economics": {

        xy: [92, 25],

        icon: "📊",

        type: "Economics Department"

    },


    "Library": {

        xy: [75, 5],

        icon: "📚",

        type: "Library"

    }

};


// ============================================================
// 6. CONVERT LOCATION XY TO LAT/LNG
// ============================================================

for (const place in locations) {

    locations[place].coords =
        campusPoint(
            locations[place].xy[0],
            locations[place].xy[1]
        );

}


// ============================================================
// 7. CAMPUS ROAD NETWORK
//
// IMPORTANT:
//
// Roads are NOT passing through the garden.
//
// Main Gate
//     |
// Roundabout
//   /     \
// Bank    Parking
//     |
// Main Road
//     |
// Main Block
//   /     \
// Left    Right
//
// ============================================================

const roadNodes = {

    "gate": [0, -110],

    "bank": [-55, -105],

    "parking": [65, -105],

    "roundabout": [0, -70],

    "roundaboutLeft": [-55, -70],

    "roundaboutRight": [55, -70],

    "mainRoad": [0, -10],

    "mainBlock": [0, 10],

    "mainLeft": [-35, 5],

    "mainRight": [35, 5],


    // LEFT ROAD

    "leftRoad1": [-60, 25],

    "leftRoad2": [-85, 45],

    "leftRoad3": [-65, 65],

    "leftRoad4": [-90, 75],


    // SCIENCE

    "science": [-35, 60],

    "physicsRoad": [-35, 70],

    "physicsSF": [-55, 70],


    // TOP

    "zoology": [0, 70],

    "topRoad": [0, 80],

    "chapelRoad": [-75, 95],

    "hostelRoad": [0, 105],

    "playgroundRoad": [20, 90],


    // RIGHT

    "rightRoad1": [45, 25],

    "libraryRoad": [75, 5],

    "rightRoad2": [65, 45],

    "rightRoad3": [85, 55],

    "rightRoad4": [95, 20],

    "rightRoad5": [105, 55]

};


// ============================================================
// 8. ROAD CONNECTIONS
// ============================================================

const roadConnections = [

    // ENTRANCE

    ["gate", "roundabout"],

    ["gate", "bank"],

    ["gate", "parking"],


    // ROUNDABOUT

    ["bank", "roundaboutLeft"],

    ["parking", "roundaboutRight"],

    ["roundaboutLeft", "roundabout"],

    ["roundabout", "roundaboutRight"],


    // MAIN ROAD

    ["roundabout", "mainRoad"],

    ["mainRoad", "mainBlock"],


    // MAIN BLOCK

    ["mainBlock", "mainLeft"],

    ["mainBlock", "mainRight"],


    // LEFT SIDE

    ["mainLeft", "leftRoad1"],

    ["leftRoad1", "leftRoad2"],

    ["leftRoad2", "leftRoad3"],

    ["leftRoad3", "leftRoad4"],


    // SCIENCE

    ["leftRoad3", "science"],

    ["science", "physicsRoad"],

    ["physicsRoad", "physicsSF"],


    // TOP

    ["science", "zoology"],

    ["zoology", "topRoad"],

    ["topRoad", "chapelRoad"],

    ["topRoad", "hostelRoad"],

    ["topRoad", "playgroundRoad"],


    // RIGHT

    ["mainRight", "libraryRoad"],

    ["mainRight", "rightRoad1"],

    ["rightRoad1", "rightRoad2"],

    ["libraryRoad", "rightRoad2"],

    ["rightRoad2", "rightRoad3"],

    ["rightRoad3", "rightRoad5"],

    ["rightRoad1", "rightRoad4"],

    ["rightRoad4", "rightRoad5"],

    ["rightRoad3", "playgroundRoad"]

];


// ============================================================
// 9. DRAW CAMPUS ROADS
// ============================================================

const roadLayers = [];

for (const connection of roadConnections) {

    const a =
        campusPoint(
            roadNodes[connection[0]][0],
            roadNodes[connection[0]][1]
        );

    const b =
        campusPoint(
            roadNodes[connection[1]][0],
            roadNodes[connection[1]][1]
        );


    const road =
        L.polyline(
            [a, b],
            {

                color: "#ffffff",

                weight: 10,

                opacity: 0.95,

                lineCap: "round",

                lineJoin: "round"

            }
        ).addTo(map);


    const roadEdge =
        L.polyline(
            [a, b],
            {

                color: "#c8cdd5",

                weight: 2,

                opacity: 0.9,

                lineCap: "round",

                lineJoin: "round"

            }
        ).addTo(map);


    roadLayers.push(
        road,
        roadEdge
    );

}


// ============================================================
// 10. DRAW GARDEN
//
// Garden is an area, not a walking road.
// ============================================================

const gardenCenter =
    campusPoint(0, -35);


L.circle(
    gardenCenter,
    {

        radius: 34,

        color: "#73a65b",

        weight: 2,

        fillColor: "#b9d99d",

        fillOpacity: 0.30

    }
).addTo(map);


// ============================================================
// 11. DRAW GARDEN WALKWAY
// ============================================================

const gardenWalk = [];


for (let angle = 0; angle <= 360; angle += 15) {

    const radians =
        angle * Math.PI / 180;


    const x =
        Math.cos(radians) * 42;


    const y =
        -35 +
        Math.sin(radians) * 42;


    gardenWalk.push(
        campusPoint(x, y)
    );

}


L.polyline(
    gardenWalk,
    {

        color: "#ffffff",

        weight: 7,

        opacity: 0.95,

        lineCap: "round",

        lineJoin: "round"

    }
).addTo(map);


L.polyline(
    gardenWalk,
    {

        color: "#c7ccd5",

        weight: 2,

        opacity: 0.9,

        lineCap: "round",

        lineJoin: "round"

    }
).addTo(map);


// ============================================================
// 12. MARKER STORAGE
// ============================================================

const markers = {};


// ============================================================
// 13. USER LOCATION
// ============================================================

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;


// ============================================================
// 14. ROUTE
// ============================================================

let routeLine = null;

let routeStartMarker = null;

let routeEndMarker = null;


// ============================================================
// 15. DESTINATION
// ============================================================

let selectedDestination = null;


// ============================================================
// 16. CAMPUS ICON
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
// 17. ADD CAMPUS MARKERS
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
        ).addTo(map);


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
                onclick="selectDestination('${place}')">

                🧭 Navigate

            </button>

        </div>

    `);


    markers[place] =
        marker;

}


// ============================================================
// 18. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {

        console.error(
            "Destination not found:",
            place
        );

        return;

    }


    selectedDestination =
        place;


    // REMOVE OLD HIGHLIGHT

    for (const name in markers) {

        const element =
            markers[name].getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // ADD NEW HIGHLIGHT

    const selectedElement =
        markers[place].getElement();


    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    markers[place].openPopup();


    map.flyTo(
        locations[place].coords,
        18,
        {
            duration: 1
        }
    );


    updateInfo();


    if (userLocation) {

        createRoute();

    }

}


// ============================================================
// 19. QUICK SELECT
// ============================================================

function quickSelect(place) {

    selectDestination(place);

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


    let foundPlace = null;


    // EXACT / PARTIAL

    for (const place in locations) {

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


    // ALIASES

    if (!foundPlace) {

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

            "parking area":
                "Parking Shed",

            "cs":
                "Computer Science",

            "computer":
                "Computer Science",

            "computer science":
                "Computer Science",

            "computer science department":
                "Computer Science",

            "library":
                "Library",

            "canteen":
                "Canteen",

            "auditorium":
                "New Auditorium",

            "old auditorium":
                "Old Auditorium",

            "new auditorium":
                "New Auditorium",

            "science":
                "Physics",

            "science block":
                "Physics",

            "physics":
                "Physics",

            "chemistry":
                "Chemistry",

            "physics sf":
                "Physics S/F",

            "bca":
                "BCA",

            "mca":
                "MCA",

            "history":
                "History",

            "maths":
                "Maths",

            "mathematics":
                "Maths",

            "nano":
                "Nano Science",

            "chapel":
                "Chapel",

            "hostel":
                "Hostel",

            "playground":
                "Playground",

            "zoology":
                "Zoology & B.Com",

            "bcom zoology":
                "Zoology & B.Com",

            "botany":
                "Botany",

            "english":
                "English S/F",

            "english sf":
                "English S/F",

            "bcom":
                "B.Com S/F",

            "bcom sf":
                "B.Com S/F",

            "tamil":
                "Tamil & English",

            "economics":
                "Economics",

            "partition":
                "Partition Hall",

            "partition hall":
                "Partition Hall",

            "management":
                "Management Office",

            "principal":
                "Principal Office"

        };


        for (const key in aliases) {

            if (
                key === input ||
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

            "Canara Bank\n" +

            "Parking Shed\n" +

            "Physics\n" +

            "Chemistry\n" +

            "BCA\n" +

            "MCA"

        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ============================================================
// 21. ENTER KEY
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
// 22. UPDATE INFORMATION
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
                ?
                "🧭 Click Navigate to start walking navigation."
                :
                "📍 Click My Location first."
            }

        </div>

    `;

}


// ============================================================
// 23. GET CURRENT LOCATION
// ============================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported by this browser."
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


            console.log(
                "Current GPS:",
                latitude,
                longitude
            );


            // REMOVE OLD

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


            // USER ICON

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


            userMarker =
                L.marker(
                    userLocation,
                    {

                        icon: userIcon,

                        zIndexOffset: 2000

                    }
                ).addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // ACCURACY

            accuracyCircle =
                L.circle(
                    userLocation,
                    {

                        radius: accuracy,

                        color: "#1976d2",

                        weight: 1,

                        fillColor: "#1976d2",

                        fillOpacity: 0.08

                    }
                ).addTo(map);


            // MOVE

            map.flyTo(
                userLocation,
                18,
                {
                    duration: 1
                }
            );


            // INFO

            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 Current Location
                    </div>

                    <div class="info-text">

                        Location detected successfully.

                        <br><br>

                        Accuracy:
                        <b>
                            ${Math.round(accuracy)} m
                        </b>

                        <br><br>

                        ${
                            selectedDestination
                            ?
                            "🧭 Creating route..."
                            :
                            "🎯 Select a destination."
                        }

                    </div>

                `;

            }


            // CREATE ROUTE

            if (selectedDestination) {

                createRoute();

            }

        },


        function(error) {

            console.error(
                "GPS error:",
                error
            );


            let message =
                "Unable to access your location.";


            if (error.code === 1) {

                message =
                    "Location permission denied.\n\n" +
                    "Please allow location access.";

            }


            else if (error.code === 2) {

                message =
                    "Location is currently unavailable.";

            }


            else if (error.code === 3) {

                message =
                    "Location request timed out.";

            }


            alert(message);


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        ⚠️ Location Error
                    </div>

                    <div class="info-text">

                        ${message.replace(
                            /\n/g,
                            "<br>"
                        )}

                    </div>

                `;

            }

        },


        {

            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}


// ============================================================
// 24. DISTANCE BETWEEN XY POINTS
// ============================================================

function distanceXY(a, b) {

    return Math.sqrt(

        Math.pow(
            a[0] - b[0],
            2
        )

        +

        Math.pow(
            a[1] - b[1],
            2
        )

    );

}


// ============================================================
// 25. BUILD GRAPH
// ============================================================

const graph = {};


for (const node in roadNodes) {

    graph[node] = [];

}


for (const edge of roadConnections) {

    const a = edge[0];

    const b = edge[1];


    const distance =
        distanceXY(
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


// ============================================================
// 26. SHORTEST PATH
// ============================================================

function shortestPath(
    start,
    end
) {

    const distances = {};

    const previous = {};

    const visited = new Set();


    for (const node in graph) {

        distances[node] =
            Infinity;

        previous[node] =
            null;

    }


    distances[start] = 0;


    while (true) {

        let current = null;

        let smallest =
            Infinity;


        for (const node in distances) {

            if (
                !visited.has(node) &&
                distances[node] < smallest
            ) {

                smallest =
                    distances[node];

                current =
                    node;

            }

        }


        if (current === null) {

            break;

        }


        if (current === end) {

            break;

        }


        visited.add(current);


        for (
            const connection
            of graph[current]
        ) {

            const newDistance =
                distances[current] +
                connection.distance;


            if (
                newDistance <
                distances[connection.node]
            ) {

                distances[connection.node] =
                    newDistance;

                previous[connection.node] =
                    current;

            }

        }

    }


    const path = [];


    let current =
        end;


    while (current !== null) {

        path.unshift(
            current
        );

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
// 27. FIND NEAREST ROAD NODE
// ============================================================

function nearestRoadNode(
    xyPoint
) {

    let nearest = null;

    let smallest =
        Infinity;


    for (const node in roadNodes) {

        const d =
            distanceXY(
                xyPoint,
                roadNodes[node]
            );


        if (d < smallest) {

            smallest =
                d;

            nearest =
                node;

        }

    }


    return nearest;

}


// ============================================================
// 28. LAT/LNG TO LOCAL XY
// ============================================================

function latLngToXY(
    latitude,
    longitude
) {

    const y =
        (
            latitude -
            CAMPUS_CENTER[0]
        ) * 111320;


    const x =
        (
            longitude -
            CAMPUS_CENTER[1]
        ) *

        111320 *

        Math.cos(
            CAMPUS_CENTER[0] *
            Math.PI /
            180
        );


    return [
        x,
        y
    ];

}


// ============================================================
// 29. ROUTE NAME
// ============================================================

function roadNodeName(node) {

    const names = {

        "gate":
            "Main Gate",

        "bank":
            "Canara Bank side",

        "parking":
            "Parking Shed side",

        "roundabout":
            "Main Roundabout",

        "mainRoad":
            "Main Campus Road",

        "mainBlock":
            "Main Block",

        "mainLeft":
            "Main Block left road",

        "mainRight":
            "Main Block right road",

        "leftRoad1":
            "Left-side road",

        "leftRoad2":
            "Left departments road",

        "leftRoad3":
            "Science side road",

        "leftRoad4":
            "BCA side road",

        "science":
            "Science Block",

        "physicsRoad":
            "Physics side",

        "physicsSF":
            "Physics S/F side",

        "zoology":
            "Zoology & B.Com",

        "topRoad":
            "Top campus road",

        "chapelRoad":
            "Chapel side",

        "hostelRoad":
            "Hostel side",

        "playgroundRoad":
            "Playground side",

        "rightRoad1":
            "Library side road",

        "libraryRoad":
            "Library road",

        "rightRoad2":
            "Canteen side road",

        "rightRoad3":
            "Computer Science side",

        "rightRoad4":
            "Tamil & English side",

        "rightRoad5":
            "Old Auditorium side"

    };


    return (
        names[node] ||
        "Campus Road"
    );

}


// ============================================================
// 30. CREATE WALKING ROUTE
// ============================================================

function createRoute() {

    if (!userLocation) {

        alert(
            "First click My Location."
        );

        return;

    }


    if (!selectedDestination) {

        alert(
            "Please select a destination."
        );

        return;

    }


    // REMOVE OLD ROUTE

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    if (routeStartMarker) {

        map.removeLayer(
            routeStartMarker
        );

        routeStartMarker = null;

    }


    if (routeEndMarker) {

        map.removeLayer(
            routeEndMarker
        );

        routeEndMarker = null;

    }


    // USER XY

    const userXY =
        latLngToXY(
            userLocation[0],
            userLocation[1]
        );


    // DESTINATION XY

    const destinationXY =
        locations[
            selectedDestination
        ].xy;


    // NEAREST ROAD

    const startNode =
        nearestRoadNode(
            userXY
        );


    const endNode =
        nearestRoadNode(
            destinationXY
        );


    // SHORTEST CAMPUS ROAD

    const nodePath =
        shortestPath(
            startNode,
            endNode
        );


    if (
        nodePath.length === 0
    ) {

        alert(
            "Campus route could not be created."
        );

        return;

    }


    // BUILD ROUTE

    const routeCoordinates = [];


    // CURRENT LOCATION

    routeCoordinates.push(
        userLocation
    );


    // USER -> ROAD NODE

    routeCoordinates.push(
        campusPoint(
            roadNodes[startNode][0],
            roadNodes[startNode][1]
        )
    );


    // ROAD NETWORK

    for (
        const node
        of nodePath
    ) {

        routeCoordinates.push(

            campusPoint(
                roadNodes[node][0],
                roadNodes[node][1]
            )

        );

    }


    // ROAD -> DESTINATION

    routeCoordinates.push(
        locations[
            selectedDestination
        ].coords
    );


    // DRAW ROUTE

    routeLine =
        L.polyline(
            routeCoordinates,
            {

                color: "#2864f0",

                weight: 7,

                opacity: 0.95,

                lineCap: "round",

                lineJoin: "round",

                className:
                    "campus-route-line"

            }
        ).addTo(map);


    // START MARKER

    routeStartMarker =
        L.circleMarker(
            userLocation,
            {

                radius: 7,

                color: "#ffffff",

                weight: 3,

                fillColor: "#1976d2",

                fillOpacity: 1

            }
        ).addTo(map);


    // END MARKER

    routeEndMarker =
        L.circleMarker(
            locations[
                selectedDestination
            ].coords,
            {

                radius: 8,

                color: "#ffffff",

                weight: 3,

                fillColor: "#e53935",

                fillOpacity: 1

            }
        ).addTo(map);


    // FIT ROUTE

    map.fitBounds(
        routeLine.getBounds(),
        {

            padding: [80, 80]

        }
    );


    // DISTANCE

    let totalDistance = 0;


    for (
        let i = 1;
        i < routeCoordinates.length;
        i++
    ) {

        totalDistance +=
            map.distance(
                routeCoordinates[i - 1],
                routeCoordinates[i]
            );

    }


    const walkingMinutes =
        Math.max(
            1,
            Math.round(
                totalDistance /
                80
            )
        );


    const distanceText =

        totalDistance >= 1000

        ?

        (
            totalDistance /
            1000
        ).toFixed(2) + " km"

        :

        Math.round(
            totalDistance
        ) + " m";


    // ROUTE STEPS

    let stepsHTML = "";


    nodePath.forEach(
        function(node, index) {

            if (index === 0) {

                return;

            }


            stepsHTML += `

                <div class="route-step">

                    <div class="step-number">
                        ${index}
                    </div>

                    <div>

                        Walk towards
                        <b>
                            ${roadNodeName(node)}
                        </b>

                    </div>

                </div>

            `;

        }
    );


    stepsHTML += `

        <div class="route-step">

            <div class="step-number">
                ✓
            </div>

            <div>

                Reach
                <b>
                    ${selectedDestination}
                </b>

            </div>

        </div>

    `;


    // INFO PANEL

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
                <b>${walkingMinutes} min</b>

                <br><br>

                ${stepsHTML}

            </div>

        `;

    }


    console.log(
        "Route:",
        nodePath
    );


    console.log(
        "Distance:",
        distanceText
    );

}


// ============================================================
// 31. NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
        );

        return;

    }


    if (!userLocation) {

        alert(
            "Please click My Location first."
        );

        showMyLocation();

        return;

    }


    createRoute();

}


// ============================================================
// 32. RESET
// ============================================================

function resetCampusView() {

    // REMOVE ROUTE

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    if (routeStartMarker) {

        map.removeLayer(
            routeStartMarker
        );

        routeStartMarker = null;

    }


    if (routeEndMarker) {

        map.removeLayer(
            routeEndMarker
        );

        routeEndMarker = null;

    }


    // REMOVE GPS

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


    userLocation =
        null;


    selectedDestination =
        null;


    // REMOVE HIGHLIGHT

    for (const name in markers) {

        const element =
            markers[name].getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // RESET INPUT

    const input =
        document.getElementById(
            "destinationInput"
        );


    if (input) {

        input.value = "";

    }


    // RESET VIEW

    map.flyTo(
        CAMPUS_CENTER,
        17.5,
        {

            duration: 1

        }
    );


    // RESET INFO

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

                Search a building or select
                a campus location.

            </div>

        `;

    }

}


// ============================================================
// 33. ZOOM CONTROL
// ============================================================

L.control.zoom({

    position:
        "bottomright"

}).addTo(map);


// ============================================================
// 34. INITIAL VIEW
// ============================================================

map.setView(
    CAMPUS_CENTER,
    17.5
);


// ============================================================
// 35. MAP READY
// ============================================================

console.log(
    "================================="
);

console.log(
    "✅ SMART CAMPUS MAP READY"
);

console.log(
    "📍 Main Gate = Starting Point"
);

console.log(
    "🏦 Bank = Left of Main Gate"
);

console.log(
    "🅿️ Parking = Right of Main Gate"
);

console.log(
    "🏫 Main Block = Center"
);

console.log(
    "📚 Library = Right Side"
);

console.log(
    "🍴 Canteen + 💻 CS = Upper Right"
);

console.log(
    "🌳 Garden = Area only, NOT a road"
);

console.log(
    "🧭 Campus Road Navigation Ready"
);

console.log(
    "================================="
);
