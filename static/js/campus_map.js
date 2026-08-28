// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// CUSTOM CAMPUS MAP
// ============================================================


// ============================================================
// MAP SETUP
// ============================================================

const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 3,
    zoomControl: true,
    attributionControl: false
});


// Campus coordinate area
const bounds = [[0, 0], [1000, 1600]];

map.fitBounds(bounds);


// ============================================================
// CAMPUS BACKGROUND
// ============================================================

const campusBackground = L.rectangle(
    [[0, 0], [1000, 1600]],
    {
        fillColor: "#dfeeda",
        fillOpacity: 1,
        stroke: false,
        interactive: false
    }
).addTo(map);


// ============================================================
// GREEN AREAS / TREES
// ============================================================

function greenArea(x1, y1, x2, y2) {

    L.rectangle(
        [[x1, y1], [x2, y2]],
        {
            fillColor: "#c9dfbd",
            fillOpacity: 0.55,
            color: "#b0cba4",
            weight: 1
        }
    ).addTo(map);
}


// Campus green zones

greenArea(50, 80, 260, 450);
greenArea(700, 80, 950, 450);
greenArea(50, 1050, 300, 1500);
greenArea(700, 1050, 950, 1500);


// ============================================================
// ROADS
// ============================================================

const roadStyle = {
    color: "#707070",
    weight: 28,
    opacity: 1,
    lineCap: "round",
    lineJoin: "round"
};

const roadBorder = {
    color: "#ffffff",
    weight: 34,
    opacity: 0.9,
    lineCap: "round",
    lineJoin: "round"
};


function createRoad(points) {

    // white road border
    L.polyline(points, roadBorder).addTo(map);

    // actual road
    L.polyline(points, roadStyle).addTo(map);
}


// ============================================================
// MAIN CAMPUS ROAD
// IMPORTANT:
// NO STRAIGHT ROAD THROUGH CENTRAL GARDEN
// ============================================================


// Main Gate → left side → around garden → upper-left

createRoad([
    [90, 800],
    [170, 800],
    [270, 720],
    [390, 680],
    [500, 690]
]);


// Main Gate → right side → around garden → upper-right

createRoad([
    [90, 800],
    [170, 800],
    [260, 900],
    [390, 970],
    [520, 1010],
    [650, 1070],
    [760, 1160],
    [850, 1240]
]);


// Right upper road to John Tucker

createRoad([
    [520, 1010],
    [650, 1080],
    [760, 1180],
    [840, 1270],
    [900, 1380]
]);


// Old Auditorium road

createRoad([
    [700, 1070],
    [780, 1160],
    [820, 1280],
    [850, 1400]
]);


// Left upper road

createRoad([
    [390, 680],
    [360, 570],
    [350, 450],
    [330, 300]
]);


// Right side road

createRoad([
    [650, 1070],
    [680, 900],
    [700, 750],
    [730, 560],
    [750, 400]
]);


// ============================================================
// CENTRAL GARDEN
// ============================================================

const gardenCenter = [510, 800];


// Outer garden

L.circle(gardenCenter, {
    radius: 230,
    color: "#6b9b55",
    weight: 5,
    fillColor: "#9fc987",
    fillOpacity: 0.95
}).addTo(map);


// Inner garden

L.circle(gardenCenter, {
    radius: 155,
    color: "#7ca864",
    weight: 3,
    fillColor: "#b8d89f",
    fillOpacity: 1
}).addTo(map);


// Fountain

L.circle(gardenCenter, {
    radius: 45,
    color: "#6d8e9e",
    weight: 4,
    fillColor: "#8bc4d9",
    fillOpacity: 1
}).addTo(map);


// Fountain center

L.circle(gardenCenter, {
    radius: 16,
    color: "#ffffff",
    weight: 3,
    fillColor: "#4ca3c7",
    fillOpacity: 1
}).addTo(map);


// ============================================================
// BUILDING ICON
// ============================================================

function buildingIcon(title, subtitle = "") {

    return L.divIcon({

        className: "custom-building",

        html: `
            <div class="building-card">

                <div class="building-roof"></div>

                <div class="building-body">

                    <div class="building-title">
                        ${title}
                    </div>

                    ${
                        subtitle
                        ? `<div class="building-subtitle">${subtitle}</div>`
                        : ""
                    }

                </div>

            </div>
        `,

        iconSize: [150, 80],

        iconAnchor: [75, 40]
    });
}


// ============================================================
// BUILDING FUNCTION
// ============================================================

const locations = {};


function addBuilding(
    id,
    title,
    x,
    y,
    subtitle = "",
    extraClass = ""
) {

    const marker = L.marker(
        [x, y],
        {
            icon: buildingIcon(title, subtitle),
            title: title
        }
    ).addTo(map);

    marker.bindTooltip(title, {
        direction: "top",
        offset: [0, -25],
        className: "building-tooltip"
    });

    marker.on("click", function () {

        setDestination(id);

    });

    locations[id] = {
        marker: marker,
        name: title,
        point: [x, y]
    };

    return marker;
}


// ============================================================
// BUILDINGS
// ============================================================


// -----------------------------
// TOP AREA
// -----------------------------

addBuilding(
    "chapel",
    "CHAPEL",
    875,
    250
);


addBuilding(
    "hostel",
    "HOSTEL",
    900,
    800
);


addBuilding(
    "playground",
    "PLAY GROUND",
    735,
    800
);


addBuilding(
    "canteen",
    "CANTEEN",
    820,
    1210
);


// -----------------------------
// JOHN TUCKER BLOCK
// -----------------------------

addBuilding(
    "computer_science",
    "JOHN TUCKER BLOCK",
    860,
    1410,
    "Computer Science • Food Science • B.Com S/F • English S/F"
);


// -----------------------------
// ZOOLOGY
// -----------------------------

addBuilding(
    "zoology",
    "ZOOLOGY & B.COM",
    720,
    800,
    "Aided"
);


// -----------------------------
// MAIN BLOCK
// -----------------------------

addBuilding(
    "main_block",
    "MAIN BLOCK",
    550,
    800
);


// -----------------------------
// LEFT OF MAIN BLOCK
// -----------------------------

addBuilding(
    "chemistry_physics",
    "CHEMISTRY & PHYSICS",
    570,
    560
);


// -----------------------------
// RIGHT OF MAIN BLOCK
// -----------------------------

addBuilding(
    "botany",
    "BOTANY",
    570,
    1010
);


// -----------------------------
// PARTITION HALL
// -----------------------------

addBuilding(
    "partition_hall",
    "PARTITION HALL",
    400,
    520,
    "Maths • Earth Science • S/F"
);


// -----------------------------
// NEW AUDITORIUM
// -----------------------------

addBuilding(
    "new_auditorium",
    "NEW AUDITORIUM",
    560,
    260
);


// -----------------------------
// NANO SCIENCE
// -----------------------------

addBuilding(
    "nano_science",
    "NANO SCIENCE",
    600,
    130
);


// -----------------------------
// HISTORY
// -----------------------------

addBuilding(
    "history",
    "HISTORY",
    570,
    380
);


// -----------------------------
// BCA / MCA
// -----------------------------

addBuilding(
    "bca_mca",
    "BCA / MCA",
    760,
    300
);


// -----------------------------
// OLD AUDITORIUM
// -----------------------------

addBuilding(
    "old_auditorium",
    "OLD AUDITORIUM",
    690,
    1290
);


// -----------------------------
// TAMIL / ENGLISH / ECONOMICS
// -----------------------------

addBuilding(
    "arts_block",
    "TAMIL • ENGLISH • ECONOMICS",
    690,
    1480,
    "Regular"
);


// -----------------------------
// LIBRARY
// -----------------------------

addBuilding(
    "library",
    "LIBRARY",
    420,
    1180
);


// -----------------------------
// CANARA BANK
// -----------------------------

addBuilding(
    "canara_bank",
    "CANARA BANK",
    100,
    520
);


// -----------------------------
// PARKING SHED
// -----------------------------

addBuilding(
    "parking",
    "PARKING AREA / SHED",
    100,
    1160
);


// ============================================================
// MAIN GATE
// ============================================================

const mainGateIcon = L.divIcon({

    className: "main-gate-icon",

    html: `
        <div class="gate-marker">
            📍
            <span>Main Gate</span>
        </div>
    `,

    iconSize: [100, 60],

    iconAnchor: [50, 30]
});


const mainGate = L.marker(
    [90, 800],
    {
        icon: mainGateIcon,
        title: "Main Gate"
    }
).addTo(map);


// ============================================================
// ROUTE NETWORK
// ============================================================


// Main Gate → central garden left side → upper road

const routes = {

    computer_science: [

        [90, 800],

        [170, 800],

        [260, 900],

        [390, 970],

        [520, 1010],

        [650, 1080],

        [760, 1180],

        [840, 1270],

        [900, 1380],

        [860, 1410]
    ],


    library: [

        [90, 800],

        [170, 800],

        [260, 900],

        [390, 970],

        [520, 1010],

        [620, 1080],

        [420, 1180]
    ],


    main_block: [

        [90, 800],

        [170, 800],

        [260, 720],

        [390, 680],

        [500, 690],

        [550, 800]
    ],


    partition_hall: [

        [90, 800],

        [170, 800],

        [270, 720],

        [390, 680],

        [400, 520]
    ],


    new_auditorium: [

        [90, 800],

        [170, 800],

        [270, 720],

        [390, 680],

        [360, 570],

        [560, 260]
    ],


    old_auditorium: [

        [90, 800],

        [170, 800],

        [260, 900],

        [390, 970],

        [520, 1010],

        [650, 1080],

        [780, 1160],

        [820, 1280],

        [690, 1290]
    ]

};


// ============================================================
// ROUTE DISPLAY
// ============================================================

let currentRoute = null;
let arrowMarkers = [];


function clearRoute() {

    if (currentRoute) {

        map.removeLayer(currentRoute);

        currentRoute = null;
    }


    arrowMarkers.forEach(marker => {

        map.removeLayer(marker);

    });

    arrowMarkers = [];
}


// ============================================================
// CREATE ARROWS ON ROUTE
// ============================================================

function createArrow(point, angle) {

    const arrowIcon = L.divIcon({

        className: "route-arrow",

        html: `
            <div style="
                transform: rotate(${angle}deg);
                font-size:22px;
                font-weight:bold;
                color:#1a73e8;
                text-shadow:0 1px 3px white;
            ">
                ➜
            </div>
        `,

        iconSize: [25, 25],

        iconAnchor: [12, 12]
    });


    const marker = L.marker(
        point,
        {
            icon: arrowIcon,
            interactive: false
        }
    ).addTo(map);


    arrowMarkers.push(marker);
}


// ============================================================
// DRAW ROUTE
// ============================================================

function showRoute(destinationId) {

    clearRoute();


    const points = routes[destinationId];

    if (!points) return;


    currentRoute = L.polyline(
        points,
        {
            color: "#ffffff",
            weight: 12,
            opacity: 0.9,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);


    const blueRoute = L.polyline(
        points,
        {
            color: "#1a73e8",
            weight: 7,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);


    currentRoute = L.layerGroup([
        currentRoute,
        blueRoute
    ]).addTo(map);


    // arrows

    for (let i = 0; i < points.length - 1; i++) {

        const a = points[i];

        const b = points[i + 1];

        const x = (a[0] + b[0]) / 2;

        const y = (a[1] + b[1]) / 2;


        const angle =
            Math.atan2(
                b[1] - a[1],
                b[0] - a[0]
            ) * 180 / Math.PI;


        createArrow(
            [x, y],
            angle
        );
    }
}


// ============================================================
// ROUTE PANEL
// ============================================================

const routePanel =
    document.getElementById("routePanel");

const destinationName =
    document.getElementById("destinationName");

const destinationDescription =
    document.getElementById("destinationDescription");

const routeDistance =
    document.getElementById("routeDistance");

const routeTime =
    document.getElementById("routeTime");

const directionList =
    document.getElementById("directionList");


// ============================================================
// DIRECTIONS
// ============================================================

const directionData = {

    computer_science: [

        "Start from Main Gate",

        "Follow the road around the central garden",

        "Continue on the right-side campus road",

        "Pass the Library and Old Auditorium side",

        "Continue towards Canteen",

        "Take the road towards John Tucker Block",

        "You have reached Computer Science"
    ],


    library: [

        "Start from Main Gate",

        "Follow the road around the central garden",

        "Continue towards the right side",

        "Library is near the Old Auditorium side",

        "You have reached Library"
    ],


    main_block: [

        "Start from Main Gate",

        "Follow the road around the central garden",

        "Keep left around the garden",

        "Continue towards Main Block",

        "You have reached Main Block"
    ],


    partition_hall: [

        "Start from Main Gate",

        "Take the left-side road",

        "Continue towards Partition Hall",

        "You have reached Partition Hall"
    ],


    new_auditorium: [

        "Start from Main Gate",

        "Take the left-side road",

        "Continue towards Partition Hall",

        "Continue towards New Auditorium",

        "You have reached New Auditorium"
    ],


    old_auditorium: [

        "Start from Main Gate",

        "Follow the road around the central garden",

        "Continue towards the right side",

        "Continue towards Old Auditorium",

        "You have reached Old Auditorium"
    ]

};


// ============================================================
// SET DESTINATION
// ============================================================

function setDestination(id) {

    const location = locations[id];

    if (!location) return;


    const name = location.name;


    destinationName.textContent = name;


    destinationDescription.textContent =
        "Walking route from Main Gate";


    // Approximate campus walking values
    const distanceMap = {

        computer_science: "620 m",

        library: "430 m",

        main_block: "280 m",

        partition_hall: "350 m",

        new_auditorium: "470 m",

        old_auditorium: "560 m"
    };


    const timeMap = {

        computer_science: "9 min",

        library: "6 min",

        main_block: "4 min",

        partition_hall: "5 min",

        new_auditorium: "7 min",

        old_auditorium: "8 min"
    };


    routeDistance.textContent =
        distanceMap[id] || "--";


    routeTime.textContent =
        timeMap[id] || "--";


    directionList.innerHTML = "";


    const directions =
        directionData[id] || [
            "Start from Main Gate",
            "Follow the campus road",
            `You have reached ${name}`
        ];


    directions.forEach(
        (text, index) => {

            const item =
                document.createElement("div");

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


            directionList.appendChild(item);

        }
    );


    routePanel.style.display = "block";


    showRoute(id);


    // Zoom to route

    const routePoints =
        routes[id];


    if (routePoints) {

        map.fitBounds(
            routePoints,
            {
                padding: [80, 80]
            }
        );

    }
}


// ============================================================
// SEARCH
// ============================================================

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const suggestions =
    document.getElementById("searchSuggestions");


const searchPlaces = [

    {
        id: "computer_science",
        name: "Computer Science"
    },

    {
        id: "library",
        name: "Library"
    },

    {
        id: "main_block",
        name: "Main Block"
    },

    {
        id: "partition_hall",
        name: "Partition Hall"
    },

    {
        id: "new_auditorium",
        name: "New Auditorium"
    },

    {
        id: "old_auditorium",
        name: "Old Auditorium"
    },

    {
        id: "chemistry_physics",
        name: "Chemistry & Physics"
    },

    {
        id: "botany",
        name: "Botany"
    },

    {
        id: "zoology",
        name: "Zoology & B.Com"
    },

    {
        id: "nano_science",
        name: "Nano Science"
    },

    {
        id: "history",
        name: "History"
    },

    {
        id: "canteen",
        name: "Canteen"
    },

    {
        id: "hostel",
        name: "Hostel"
    },

    {
        id: "chapel",
        name: "Chapel"
    },

    {
        id: "playground",
        name: "Play Ground"
    },

    {
        id: "bca_mca",
        name: "BCA / MCA"
    },

    {
        id: "old_auditorium",
        name: "Old Auditorium"
    }

];


// ============================================================
// SHOW SEARCH SUGGESTIONS
// ============================================================

searchInput.addEventListener(
    "input",
    function () {

        const value =
            searchInput.value
                .toLowerCase()
                .trim();


        suggestions.innerHTML = "";


        if (!value) {

            suggestions.style.display =
                "none";

            return;
        }


        const results =
            searchPlaces.filter(
                place =>
                    place.name
                        .toLowerCase()
                        .includes(value)
            );


        if (results.length === 0) {

            suggestions.style.display =
                "none";

            return;
        }


        results.forEach(place => {

            const div =
                document.createElement("div");


            div.className =
                "suggestion";


            div.textContent =
                "📍 " + place.name;


            div.onclick = function () {

                searchInput.value =
                    place.name;

                suggestions.style.display =
                    "none";

                setDestination(
                    place.id
                );
            };


            suggestions.appendChild(div);

        });


        suggestions.style.display =
            "block";
    }
);


// ============================================================
// SEARCH BUTTON
// ============================================================

function performSearch() {

    const value =
        searchInput.value
            .toLowerCase()
            .trim();


    if (!value) return;


    const result =
        searchPlaces.find(
            place =>
                place.name
                    .toLowerCase()
                    .includes(value)
        );


    if (result) {

        suggestions.style.display =
            "none";

        setDestination(
            result.id
        );

    } else {

        alert(
            "Location not found in campus map."
        );
    }
}


searchButton.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            performSearch();

        }
    }
);


// ============================================================
// CLOSE ROUTE
// ============================================================

document
    .getElementById("closeRoute")
    .addEventListener(
        "click",
        function () {

            routePanel.style.display =
                "none";

            clearRoute();

            map.fitBounds(
                bounds
            );
        }
    );


// ============================================================
// MAIN GATE BUTTON
// ============================================================

document
    .getElementById("mainGateButton")
    .addEventListener(
        "click",
        function () {

            map.setView(
                [90, 800],
                0
            );

            clearRoute();

            routePanel.style.display =
                "none";
        }
    );


// ============================================================
// INITIAL VIEW
// ============================================================

map.fitBounds(
    bounds,
    {
        padding: [20, 20]
    }
);
