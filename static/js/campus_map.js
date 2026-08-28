/* =====================================================
   SMART CAMPUS NAVIGATION
   Sarah Tucker College

   IMPORTANT:
   Coordinates below are CUSTOM CAMPUS coordinates.
   They are NOT real latitude / longitude.

   Layout follows the handwritten master map.
===================================================== */


/* =====================================================
   MAP INITIALIZATION
===================================================== */

const CAMPUS_BOUNDS = [
    [0, 0],
    [1000, 1500]
];

const map = L.map("map", {

    crs: L.CRS.Simple,

    minZoom: -2,

    maxZoom: 2,

    zoomControl: false,

    attributionControl: false

});


map.fitBounds(CAMPUS_BOUNDS);


/* =====================================================
   CAMPUS BACKGROUND
===================================================== */

L.rectangle(
    CAMPUS_BOUNDS,
    {
        color: "#8a8a8a",
        weight: 2,
        fillColor: "#dfe8c9",
        fillOpacity: 1
    }
).addTo(map);


/* =====================================================
   LOCATION DATA
===================================================== */

const locations = [

    /* =========================
       MAIN ENTRANCE
    ========================= */

    {
        id: "main-gate",
        name: "Main Gate",
        type: "Entrance",
        category: "entrance",
        lat: 80,
        lng: 750,
        description:
            "Main entrance of Sarah Tucker College."
    },


    /* =========================
       LEFT BOTTOM
    ========================= */

    {
        id: "canara-bank",
        name: "Canara Bank",
        type: "Bank",
        category: "facility",
        lat: 150,
        lng: 410,
        description:
            "Canara Bank located near the main entrance."
    },


    {
        id: "partition-hall",
        name: "Partition Hall",
        type: "Hall",
        category: "academic",
        lat: 390,
        lng: 390,
        description:
            "Partition Hall / academic facility."
    },


    /* =========================
       LEFT SIDE
    ========================= */

    {
        id: "new-auditorium",
        name: "New Auditorium",
        type: "Auditorium",
        category: "facility",
        lat: 650,
        lng: 260,
        description:
            "New Auditorium."
    },


    {
        id: "history",
        name: "History",
        type: "Department",
        category: "academic",
        lat: 740,
        lng: 190,
        description:
            "History Department."
    },


    {
        id: "nano-science",
        name: "Nano Science",
        type: "Department",
        category: "academic",
        lat: 570,
        lng: 180,
        description:
            "Nano Science Department."
    },


    {
        id: "maths",
        name: "Maths (Aided & S/F)",
        type: "Department",
        category: "academic",
        lat: 680,
        lng: 410,
        description:
            "Mathematics Department – Aided and Self Financing."
    },


    {
        id: "mca",
        name: "MCA",
        type: "Department",
        category: "academic",
        lat: 805,
        lng: 255,
        description:
            "MCA Department."
    },


    {
        id: "bca",
        name: "BCA",
        type: "Department",
        category: "academic",
        lat: 850,
        lng: 160,
        description:
            "BCA Department."
    },


    {
        id: "physics-sf",
        name: "Physics S/F",
        type: "Department",
        category: "academic",
        lat: 800,
        lng: 475,
        description:
            "Physics Self Financing section."
    },


    /* =========================
       CENTRAL
    ========================= */

    {
        id: "principal-office",
        name: "Principal Office",
        type: "Administration",
        category: "facility",
        lat: 410,
        lng: 665,
        description:
            "Principal Office."
    },


    {
        id: "management-office",
        name: "Management Office",
        type: "Administration",
        category: "facility",
        lat: 410,
        lng: 835,
        description:
            "Management Office."
    },


    {
        id: "main-block",
        name: "Main Block",
        type: "Academic & Administration",
        category: "academic",
        lat: 520,
        lng: 750,
        description:
            "Main Block of Sarah Tucker College."
    },


    {
        id: "chemistry",
        name: "Chemistry",
        type: "Department",
        category: "academic",
        lat: 620,
        lng: 600,
        description:
            "Chemistry Department."
    },


    {
        id: "physics",
        name: "Physics (Regular)",
        type: "Department",
        category: "academic",
        lat: 620,
        lng: 900,
        description:
            "Physics Regular Department."
    },


    {
        id: "botany",
        name: "Botany",
        type: "Department",
        category: "academic",
        lat: 530,
        lng: 1010,
        description:
            "Botany Department."
    },


    {
        id: "economics-botany",
        name: "Botany & Economics",
        type: "Academic Block",
        category: "academic",
        lat: 610,
        lng: 1070,
        description:
            "Botany and Economics academic area."
    },


    /* =========================
       TOP CENTER
    ========================= */

    {
        id: "zoology",
        name: "Zoology & B.Com (Aided)",
        type: "Academic Block",
        category: "academic",
        lat: 805,
        lng: 750,
        description:
            "Zoology and B.Com Aided block."
    },


    {
        id: "playground",
        name: "Play Ground",
        type: "Sports",
        category: "sports",
        lat: 910,
        lng: 750,
        description:
            "College playground."
    },


    {
        id: "hostel",
        name: "Hostel",
        type: "Hostel",
        category: "facility",
        lat: 950,
        lng: 780,
        description:
            "College hostel."
    },


    {
        id: "chapel",
        name: "Chapel",
        type: "Campus Facility",
        category: "facility",
        lat: 900,
        lng: 470,
        description:
            "College chapel."
    },


    /* =========================
       RIGHT TOP
    ========================= */

    {
        id: "canteen",
        name: "Canteen",
        type: "Food Facility",
        category: "facility",
        lat: 850,
        lng: 1080,
        description:
            "College canteen."
    },


    {
        id: "john-tucker",
        name: "John Tucker Block",
        type: "Academic Block",
        category: "academic",
        lat: 860,
        lng: 1280,
        description:
            "John Tucker Block."
    },


    {
        id: "computer-science",
        name: "Computer Science",
        type: "Department",
        category: "academic",
        lat: 800,
        lng: 1300,
        description:
            "Computer Science Department."
    },


    {
        id: "food-science",
        name: "Food Science",
        type: "Department",
        category: "academic",
        lat: 730,
        lng: 1300,
        description:
            "Food Science Department."
    },


    {
        id: "bcom-sf",
        name: "B.Com S/F",
        type: "Department",
        category: "academic",
        lat: 660,
        lng: 1300,
        description:
            "B.Com Self Financing."
    },


    {
        id: "english-sf",
        name: "English S/F",
        type: "Department",
        category: "academic",
        lat: 590,
        lng: 1300,
        description:
            "English Self Financing."
    },


    /* =========================
       RIGHT SIDE
    ========================= */

    {
        id: "old-auditorium",
        name: "Old Auditorium",
        type: "Auditorium",
        category: "facility",
        lat: 540,
        lng: 1130,
        description:
            "Old Auditorium."
    },


    {
        id: "library",
        name: "Library",
        type: "Library",
        category: "facility",
        lat: 400,
        lng: 1120,
        description:
            "College Library."
    },


    {
        id: "tamil-english",
        name: "Tamil & English (Regular)",
        type: "Department",
        category: "academic",
        lat: 300,
        lng: 1200,
        description:
            "Tamil and English Regular Departments."
    },


    {
        id: "economics",
        name: "Economics",
        type: "Department",
        category: "academic",
        lat: 210,
        lng: 1200,
        description:
            "Economics Department."
    },


    /* =========================
       PARKING
    ========================= */

    {
        id: "parking",
        name: "Parking Area",
        type: "Parking",
        category: "facility",
        lat: 120,
        lng: 1110,
        description:
            "Campus parking area."
    }

];


/* =====================================================
   HELPER
===================================================== */

function getLocation(name) {

    return locations.find(
        location =>
            location.name.toLowerCase() ===
            name.toLowerCase()
    );

}


/* =====================================================
   BUILDING ICON
===================================================== */

function createMarkerIcon(category) {

    let symbol = "●";

    if (category === "entrance") {
        symbol = "●";
    }

    if (category === "academic") {
        symbol = "◆";
    }

    if (category === "facility") {
        symbol = "■";
    }

    if (category === "sports") {
        symbol = "▲";
    }


    return L.divIcon({

        className: "campus-marker",

        html: `
            <div class="marker-pin marker-${category}">
                <span>${symbol}</span>
            </div>
        `,

        iconSize: [34, 42],

        iconAnchor: [17, 40]

    });

}


/* =====================================================
   MARKERS
===================================================== */

const markerObjects = {};

locations.forEach(location => {

    const marker = L.marker(
        [location.lat, location.lng],
        {
            icon:
                createMarkerIcon(
                    location.category
                )
        }
    ).addTo(map);


    marker.bindTooltip(
        location.name,
        {
            direction: "top",
            offset: [0, -30],
            className: "campus-tooltip"
        }
    );


    marker.on(
        "click",
        function () {

            showLocation(location);

        }
    );


    markerObjects[location.id] = marker;

});


/* =====================================================
   CAMPUS ROADS
===================================================== */

/*
   The roads are created as walking/vehicle paths.
   The central circular garden is preserved.
*/


/* MAIN ENTRY ROAD */

const mainRoad = [
    [70, 750],
    [180, 750],
    [280, 750],
    [390, 750]
];

drawRoad(mainRoad, 18);


/* ROAD TOWARDS CIRCULAR GARDEN */

drawRoad(
    [
        [390, 750],
        [430, 650],
        [500, 570]
    ],
    14
);


/* LEFT CURVED ROAD */

drawRoad(
    [
        [390, 750],
        [350, 610],
        [390, 470],
        [500, 400],
        [620, 390]
    ],
    14
);


/* RIGHT CURVED ROAD */

drawRoad(
    [
        [390, 750],
        [350, 900],
        [430, 1010],
        [550, 1080],
        [680, 1110]
    ],
    14
);


/* TOP CENTRAL ROAD */

drawRoad(
    [
        [620, 390],
        [700, 500],
        [750, 650],
        [750, 800],
        [750, 930]
    ],
    13
);


/* LEFT UPPER ROAD */

drawRoad(
    [
        [620, 390],
        [600, 520],
        [500, 620],
        [350, 700],
        [220, 820],
        [170, 930]
    ],
    11
);


/* RIGHT UPPER ROAD */

drawRoad(
    [
        [680, 390],
        [850, 430],
        [1010, 500],
        [1110, 620],
        [1200, 760],
        [1300, 860]
    ],
    11
);


/* RIGHT LOWER ROAD */

drawRoad(
    [
        [1080, 850],
        [1120, 700],
        [1130, 540],
        [1200, 300],
        [1200, 210]
    ],
    11
);


/* HOSTEL ROAD */

drawRoad(
    [
        [750, 930],
        [750, 980],
        [780, 1030]
    ],
    9
);


/* =====================================================
   ROAD FUNCTION
===================================================== */

function drawRoad(points, width = 12) {

    /* Outer road */

    L.polyline(
        points,
        {
            color: "#6e6e6e",
            weight: width + 7,
            opacity: 0.95,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);


    /* Inner road */

    L.polyline(
        points,
        {
            color: "#bcbcbc",
            weight: width,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);

}


/* =====================================================
   CENTRAL GARDEN
===================================================== */

const gardenCenter = [400, 750];


/* Outer garden */

L.circle(
    gardenCenter,
    {
        radius: 180,
        color: "#5c8a4c",
        weight: 4,
        fillColor: "#b8d69f",
        fillOpacity: 0.75
    }
).addTo(map);


/* Inner garden */

L.circle(
    gardenCenter,
    {
        radius: 105,
        color: "#6b9a56",
        weight: 3,
        fillColor: "#d6e8bb",
        fillOpacity: 0.9
    }
).addTo(map);


/* Fountain */

L.circleMarker(
    gardenCenter,
    {
        radius: 20,
        color: "#4c7182",
        weight: 3,
        fillColor: "#b9d8e8",
        fillOpacity: 1
    }
).addTo(map);


/* Garden pathways */

[
    [
        [400,750],
        [400,570]
    ],

    [
        [400,750],
        [400,930]
    ],

    [
        [400,750],
        [220,750]
    ],

    [
        [400,750],
        [580,750]
    ]

].forEach(path => {

    L.polyline(
        path,
        {
            color: "#eeeeee",
            weight: 8,
            opacity: 1
        }
    ).addTo(map);

});


/* =====================================================
   MAIN GATE LABEL
===================================================== */

L.marker(
    [70,750],
    {
        interactive: false,
        icon: L.divIcon({

            className: "map-label-icon",

            html:
                `<div class="map-main-label">
                    MAIN GATE
                 </div>`,

            iconSize: [100,30],

            iconAnchor: [50,-15]

        })
    }
).addTo(map);


/* =====================================================
   LOCATION PANEL
===================================================== */

let selectedLocation = null;


function showLocation(location) {

    selectedLocation = location;


    document.getElementById(
        "modalTitle"
    ).textContent =
        location.name;


    document.getElementById(
        "modalType"
    ).textContent =
        location.type;


    document.getElementById(
        "modalDescription"
    ).textContent =
        location.description;


    document
        .getElementById("locationModal")
        .classList
        .remove("hidden");


    map.setView(
        [location.lat, location.lng],
        0
    );

}


/* =====================================================
   CLOSE MODAL
===================================================== */

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("locationModal")
                .classList
                .add("hidden");

        }
    );


document
    .getElementById("locationModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                this.classList.add(
                    "hidden"
                );

            }

        }
    );


/* =====================================================
   MODAL DIRECTIONS
===================================================== */

document
    .getElementById("modalDirectionBtn")
    .addEventListener(
        "click",
        function () {

            if (!selectedLocation)
                return;


            document
                .getElementById("locationModal")
                .classList
                .add("hidden");


            document
                .getElementById("toInput")
                .value =
                selectedLocation.name;


            calculateRoute();

        }
    );


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchResults =
    document.getElementById(
        "searchResults"
    );


function performSearch() {

    const value =
        searchInput.value
            .trim()
            .toLowerCase();


    searchResults.innerHTML = "";


    if (!value) {

        searchResults.style.display =
            "none";

        return;

    }


    const matches =
        locations.filter(
            location =>
                location.name
                    .toLowerCase()
                    .includes(value)
        );


    if (matches.length === 0) {

        searchResults.innerHTML =
            `
            <div class="search-result">
                <strong>No location found</strong>
                <span>Try another campus location</span>
            </div>
            `;

        searchResults.style.display =
            "block";

        return;

    }


    matches.forEach(location => {

        const result =
            document.createElement(
                "div"
            );


        result.className =
            "search-result";


        result.innerHTML =
            `
            <strong>
                📍 ${location.name}
            </strong>

            <span>
                ${location.type}
            </span>
            `;


        result.addEventListener(
            "click",
            function () {

                searchInput.value =
                    location.name;

                searchResults.style.display =
                    "none";

                showLocation(location);

            }
        );


        searchResults.appendChild(
            result
        );

    });


    searchResults.style.display =
        "block";

}


searchInput.addEventListener(
    "input",
    performSearch
);


document
    .getElementById("searchButton")
    .addEventListener(
        "click",
        performSearch
    );


searchInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            performSearch();

        }

    }
);


/* =====================================================
   FROM / TO
===================================================== */

const fromInput =
    document.getElementById(
        "fromInput"
    );

const toInput =
    document.getElementById(
        "toInput"
    );


/* =====================================================
   ROUTE LAYER
===================================================== */

let routeLayer = null;


/* =====================================================
   CAMPUS ROUTE NETWORK
===================================================== */

/*
   These nodes follow the actual campus road
   structure rather than drawing a random
   straight line between buildings.
*/

const routeNodes = {

    gate: [80,750],

    south: [180,750],

    gardenSouth: [300,750],

    gardenWest: [400,570],

    gardenCenter: [400,750],

    gardenEast: [400,930],

    westJunction: [500,400],

    eastJunction: [550,1080],

    northCenter: [750,750],

    northWest: [620,390],

    northEast: [680,390],

    eastRoad: [1010,500],

    oldAud: [1110,620],

    library: [1120,700],

    eastBottom: [1200,300],

    johnTucker: [1300,860],

    hostel: [780,1030],

    leftTop: [220,820]

};


/* =====================================================
   GRAPH
===================================================== */

const graph = {

    gate: ["south"],

    south: [
        "gate",
        "gardenSouth"
    ],

    gardenSouth: [
        "south",
        "gardenWest",
        "gardenEast"
    ],

    gardenWest: [
        "gardenSouth",
        "westJunction"
    ],

    gardenEast: [
        "gardenSouth",
        "eastJunction",
        "hostel"
    ],

    westJunction: [
        "gardenWest",
        "northWest",
        "leftTop"
    ],

    eastJunction: [
        "gardenEast",
        "northEast",
        "eastRoad"
    ],

    northWest: [
        "westJunction",
        "northCenter"
    ],

    northEast: [
        "eastJunction",
        "northCenter"
    ],

    northCenter: [
        "northWest",
        "northEast",
        "hostel"
    ],

    eastRoad: [
        "eastJunction",
        "oldAud",
        "johnTucker"
    ],

    oldAud: [
        "eastRoad",
        "library"
    ],

    library: [
        "oldAud",
        "eastBottom"
    ],

    eastBottom: [
        "library",
        "johnTucker"
    ],

    johnTucker: [
        "eastRoad",
        "eastBottom"
    ],

    hostel: [
        "gardenEast",
        "northCenter"
    ],

    leftTop: [
        "westJunction"
    ]

};


/* =====================================================
   NODE DISTANCE
===================================================== */

function nodeDistance(a, b) {

    const dx =
        routeNodes[a][0] -
        routeNodes[b][0];

    const dy =
        routeNodes[a][1] -
        routeNodes[b][1];

    return Math.sqrt(
        dx * dx + dy * dy
    );

}


/* =====================================================
   FIND SHORTEST NODE PATH
===================================================== */

function shortestPath(
    start,
    end
) {

    const distances = {};
    const previous = {};
    const unvisited = new Set(
        Object.keys(routeNodes)
    );


    Object.keys(routeNodes)
        .forEach(node => {

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


        if (
            current === null ||
            distances[current] === Infinity
        ) {

            break;

        }


        unvisited.delete(current);


        if (current === end) {

            break;

        }


        graph[current].forEach(
            neighbor => {

                if (
                    !unvisited.has(
                        neighbor
                    )
                ) {

                    return;

                }


                const distance =
                    distances[current] +
                    nodeDistance(
                        current,
                        neighbor
                    );


                if (
                    distance <
                    distances[neighbor]
                ) {

                    distances[neighbor] =
                        distance;

                    previous[neighbor] =
                        current;

                }

            }
        );

    }


    const path = [];

    let current = end;


    while (current !== null) {

        path.unshift(current);

        current =
            previous[current];

    }


    return {

        path,

        distance:
            distances[end]

    };

}


/* =====================================================
   FIND CLOSEST ROUTE NODE
===================================================== */

function closestNode(location) {

    let closest = null;

    let smallest =
        Infinity;


    Object.keys(routeNodes)
        .forEach(node => {

            const dx =
                location.lat -
                routeNodes[node][0];

            const dy =
                location.lng -
                routeNodes[node][1];

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                smallest
            ) {

                smallest =
                    distance;

                closest =
                    node;

            }

        });


    return closest;

}


/* =====================================================
   ROUTE FROM GATE
===================================================== */

function calculateRoute() {

    const fromName =
        fromInput.value.trim();

    const toName =
        toInput.value.trim();


    const from =
        locations.find(
            location =>
                location.name
                    .toLowerCase() ===
                fromName.toLowerCase()
        );


    const to =
        locations.find(
            location =>
                location.name
                    .toLowerCase() ===
                toName.toLowerCase()
        );


    if (!from) {

        alert(
            "Starting location not found."
        );

        return;

    }


    if (!to) {

        alert(
            "Destination not found."
        );

        return;

    }


    const startNode =
        closestNode(from);

    const endNode =
        closestNode(to);


    const result =
        shortestPath(
            startNode,
            endNode
        );


    if (
        !result.path.length
    ) {

        alert(
            "Route could not be calculated."
        );

        return;

    }


    /* Clear old route */

    if (routeLayer) {

        map.removeLayer(
            routeLayer
        );

    }


    /* Route coordinates */

    const routeCoordinates = [];


    routeCoordinates.push([
        from.lat,
        from.lng
    ]);


    result.path.forEach(
        node => {

            routeCoordinates.push(
                routeNodes[node]
            );

        }
    );


    routeCoordinates.push([
        to.lat,
        to.lng
    ]);


    /* Draw route */

    routeLayer =
        L.polyline(
            routeCoordinates,
            {
                color: "#1a73e8",
                weight: 9,
                opacity: 0.95,
                lineCap: "round",
                lineJoin: "round"
            }
        ).addTo(map);


    /* Route arrows */

    L.polylineDecorator;


    /* Fit route */

    map.fitBounds(
        routeLayer.getBounds(),
        {
            padding: [80, 80]
        }
    );


    /* Calculate approximate distance */

    const distanceMeters =
        calculatePolylineDistance(
            routeCoordinates
        );


    const walkingMinutes =
        Math.max(
            1,
            Math.round(
                distanceMeters / 75
            )
        );


    document.getElementById(
        "distanceValue"
    ).textContent =
        Math.round(
            distanceMeters
        ) + " m";


    document.getElementById(
        "timeValue"
    ).textContent =
        walkingMinutes + " min";


    document
        .getElementById(
            "routeSummary"
        )
        .classList
        .remove("hidden");


    generateDirectionSteps(
        from,
        to,
        result.path
    );

}


/* =====================================================
   POLYLINE DISTANCE
===================================================== */

function calculatePolylineDistance(
    coordinates
) {

    let total = 0;


    for (
        let i = 1;
        i < coordinates.length;
        i++
    ) {

        const dx =
            coordinates[i][0] -
            coordinates[i - 1][0];

        const dy =
            coordinates[i][1] -
            coordinates[i - 1][1];


        total += Math.sqrt(
            dx * dx +
            dy * dy
        );

    }


    /*
       Custom campus coordinate scale.
       Adjust later when actual campus
       measurements are available.
    */

    return total * 1.15;

}


/* =====================================================
   DIRECTION STEPS
===================================================== */

function generateDirectionSteps(
    from,
    to,
    path
) {

    const container =
        document.getElementById(
            "directionSteps"
        );


    container.innerHTML = "";


    const steps = [

        `Start from ${from.name}.`,

        `Continue along the campus road.`,

        `Follow the road around the central garden.`,

        `Continue towards the ${to.name} side of the campus.`,

        `Follow the connecting pathway.`,

        `You have reached ${to.name}.`

    ];


    steps.forEach(
        (text, index) => {

            const step =
                document.createElement(
                    "div"
                );


            step.className =
                "direction-step";


            step.innerHTML = `

                <div class="step-number">
                    ${index + 1}
                </div>

                <div class="step-text">
                    ${text}
                </div>

            `;


            container.appendChild(
                step
            );

        }
    );

}


/* =====================================================
   DIRECTION BUTTON
===================================================== */

document
    .getElementById(
        "directionBtn"
    )
    .addEventListener(
        "click",
        calculateRoute
    );


/* =====================================================
   CLEAR ROUTE
===================================================== */

document
    .getElementById(
        "clearRouteBtn"
    )
    .addEventListener(
        "click",
        function () {

            if (routeLayer) {

                map.removeLayer(
                    routeLayer
                );

                routeLayer = null;

            }


            toInput.value = "";


            document
                .getElementById(
                    "routeSummary"
                )
                .classList
                .add("hidden");


            document
                .getElementById(
                    "directionSteps"
                )
                .innerHTML = `

                    <div class="empty-direction">

                        <div class="empty-icon">
                            🧭
                        </div>

                        <p>
                            Select a destination to see
                            walking directions.
                        </p>

                    </div>

                `;

        }
    );


/* =====================================================
   MAP ZOOM
===================================================== */

document
    .getElementById(
        "zoomInBtn"
    )
    .addEventListener(
        "click",
        function () {

            map.zoomIn();

        }
    );


document
    .getElementById(
        "zoomOutBtn"
    )
    .addEventListener(
        "click",
        function () {

            map.zoomOut();

        }
    );


/* =====================================================
   MY LOCATION
===================================================== */

document
    .getElementById(
        "myLocationBtn"
    )
    .addEventListener(
        "click",
        function () {

            const gate =
                getLocation(
                    "Main Gate"
                );


            map.setView(
                [
                    gate.lat,
                    gate.lng
                ],
                1
            );


            document
                .getElementById(
                    "currentLocation"
                )
                .classList
                .remove("hidden");

        }
    );


/* =====================================================
   MAIN GATE AS DEFAULT
===================================================== */

fromInput.value =
    "Main Gate";


/* =====================================================
   MAP START POSITION
===================================================== */

map.setView(
    [500, 750],
    -0.5
);
