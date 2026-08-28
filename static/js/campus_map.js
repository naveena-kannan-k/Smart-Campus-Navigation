/* ============================================================
   SARAH TUCKER COLLEGE
   SMART CAMPUS NAVIGATION
   CUSTOM CAMPUS MAP
============================================================ */


/* ============================================================
   MAP INITIALIZATION
============================================================ */

const map = L.map("map", {

    crs: L.CRS.Simple,

    minZoom: -2,

    maxZoom: 2,

    zoomControl: true

});


const mapWidth = 1600;
const mapHeight = 1000;

const bounds = [
    [0, 0],
    [mapHeight, mapWidth]
];

map.fitBounds(bounds);


/* ============================================================
   HELPER
============================================================ */

function point(x, y) {

    return [y, x];

}


/* ============================================================
   CAMPUS BACKGROUND
============================================================ */

L.rectangle(
    bounds,
    {
        fillColor: "#dcebd4",
        fillOpacity: 1,
        color: "#b8cbb0",
        weight: 2
    }
).addTo(map);


/* ============================================================
   TREES
============================================================ */

function addTree(x, y) {

    L.marker(
        point(x, y),
        {
            icon: L.divIcon({
                className: "",
                html: `
                    <div style="
                        width:20px;
                        height:20px;
                        background:#4f9d55;
                        border-radius:50%;
                        border:3px solid #2e6f36;
                        box-shadow:0 2px 5px rgba(0,0,0,.25);
                    "></div>
                `,
                iconSize: [20,20],
                iconAnchor: [10,10]
            })
        }
    ).addTo(map);

}


/* Decorative trees */

[
    [120,120],
    [240,150],
    [350,110],
    [470,150],
    [580,100],
    [720,130],
    [900,110],
    [1030,150],
    [1200,120],
    [1400,150],

    [120,400],
    [180,520],
    [300,580],

    [1280,400],
    [1410,500],
    [1500,580],

    [180,800],
    [320,850],
    [1200,850],
    [1400,800]
].forEach(t => addTree(t[0], t[1]));


/* ============================================================
   ROADS
============================================================ */


/*
    IMPORTANT:

    Main Gate -> Main Block
    நேராக road கிடையாது.

    Central Garden தான் நடுவில் இருக்கும்.

    Road garden-ஐ சுற்றி செல்கிறது.
*/


const roads = [];


function addRoad(coords) {

    L.polyline(
        coords,
        {
            color: "#8d9297",
            weight: 32,
            opacity: 1,
            className: "route-line"
        }
    ).addTo(map);


    L.polyline(
        coords,
        {
            color: "#ffffff",
            weight: 3,
            opacity: 0.9,
            dashArray: "10 10"
        }
    ).addTo(map);

}


/* =========================
   MAIN CAMPUS ROAD
========================= */


/*
                 NORTH

       LEFT ROAD       RIGHT ROAD
            \          /
             \ GARDEN /
              \      /
               \    /
                GATE
*/


const mainRoad = [

    point(800, 950),

    point(800, 820),

    point(690, 700),

    point(570, 620),

    point(500, 520),

    point(500, 390),

    point(620, 330),

    point(800, 320),

    point(1000, 330),

    point(1120, 390),

    point(1180, 500),

    point(1200, 650),

    point(1260, 780)

];

addRoad(mainRoad);


/* LEFT ROAD */

addRoad([

    point(800, 820),
    point(700, 760),
    point(600, 720),
    point(500, 650),
    point(430, 540),
    point(430, 400)

]);


/* RIGHT ROAD */

addRoad([

    point(800, 820),
    point(900, 760),
    point(1050, 700),
    point(1160, 650),
    point(1230, 550),
    point(1260, 420)

]);


/* ============================================================
   CENTRAL GARDEN
============================================================ */

const gardenIcon = L.divIcon({

    className: "",

    html: `
        <div class="central-garden">

            <div class="fountain"></div>

        </div>
    `,

    iconSize: [210,150],

    iconAnchor: [105,75]

});


L.marker(
    point(800, 570),
    {
        icon: gardenIcon,
        interactive: false
    }
).addTo(map);


/* Garden label */

L.marker(
    point(800, 570),
    {
        icon: L.divIcon({

            className: "",

            html: `
                <div class="garden-label">
                    🌳 Central Garden
                </div>
            `,

            iconSize: [130,25],

            iconAnchor: [65,-70]

        }),

        interactive: false

    }
).addTo(map);


/* ============================================================
   BUILDING FUNCTION
============================================================ */

function addBuilding(
    id,
    name,
    subtitle,
    x,
    y,
    width = 125
) {

    const icon = L.divIcon({

        className: "",

        html: `
            <div
                class="building"
                id="building-${id}"
                style="min-width:${width}px;"
            >

                ${name}

                <small>
                    ${subtitle || ""}
                </small>

            </div>
        `,

        iconSize: [width, 70],

        iconAnchor: [width / 2, 35]

    });


    const marker = L.marker(
        point(x, y),
        {
            icon: icon
        }
    ).addTo(map);


    marker.on("click", function () {

        showRoute(id);

    });


    return marker;
}


/* ============================================================
   BUILDINGS
============================================================ */


/* =========================
   TOP AREA
========================= */

addBuilding(
    "hostel",
    "HOSTEL",
    "Student Hostel",
    800,
    110,
    130
);


addBuilding(
    "chapel",
    "CHAPEL",
    "Chapel",
    480,
    120,
    110
);


addBuilding(
    "playground",
    "PLAY GROUND",
    "Campus Playground",
    800,
    220,
    150
);


/* =========================
   LEFT SIDE
========================= */

addBuilding(
    "bca_mca",
    "BCA / MCA",
    "Computer Applications",
    260,
    330,
    120
);


addBuilding(
    "new_auditorium",
    "NEW AUDITORIUM",
    "Nano Science",
    360,
    430,
    155
);


addBuilding(
    "nano_science",
    "NANO SCIENCE",
    "New Auditorium - Ground Floor",
    430,
    320,
    130
);


/*
    User correction:
    Partition Hall location.
    Maths / History / SF associated here.
*/

addBuilding(
    "partition_hall",
    "PARTITION HALL",
    "Maths / History / S.F",
    540,
    420,
    160
);


/* =========================
   MAIN BLOCK
========================= */

addBuilding(
    "main_block",
    "MAIN BLOCK",
    "Main Academic Block",
    800,
    430,
    190
);


/*
    Main Block left side
*/

addBuilding(
    "chemistry_physics",
    "CHEMISTRY & PHYSICS",
    "First Floor",
    665,
    390,
    150
);


/*
    Main Block right side
*/

addBuilding(
    "botany",
    "BOTANY",
    "Department",
    950,
    390,
    115
);


/*
    Behind Main Block
*/

addBuilding(
    "zoology_bcom",
    "ZOOLOGY & B.COM",
    "Aided",
    800,
    275,
    175
);


/* =========================
   RIGHT SIDE
========================= */

addBuilding(
    "old_auditorium",
    "OLD AUDITORIUM",
    "Auditorium",
    1180,
    430,
    155
);


addBuilding(
    "tamil_english_economics",
    "TAMIL / ENGLISH",
    "Regular & Economics",
    1320,
    510,
    175
);


addBuilding(
    "library",
    "LIBRARY",
    "Central Library",
    1190,
    600,
    120
);


addBuilding(
    "canteen",
    "CANTEEN",
    "Food Court",
    1160,
    250,
    115
);


/* =========================
   JOHN TUCKER BLOCK
========================= */

addBuilding(
    "john_tucker",
    "JOHN TUCKER BLOCK",
    "Computer Science • Food Science • B.Com S.F • English S.F",
    1350,
    230,
    260
);


/* =========================
   LOWER RIGHT
========================= */

addBuilding(
    "parking_shed",
    "PARKING SHED",
    "Parking Area",
    1370,
    780,
    145
);


/* =========================
   CANARA BANK
========================= */

addBuilding(
    "canara_bank",
    "CANARA BANK",
    "Bank",
    360,
    820,
    125
);


/* ============================================================
   MAIN GATE
============================================================ */

const mainGate = point(800, 950);


L.marker(
    mainGate,
    {
        icon: L.divIcon({

            className: "",

            html: `
                <div class="main-gate">
                    📍 MAIN GATE
                </div>
            `,

            iconSize: [130,50],

            iconAnchor: [65,25]

        })
    }
).addTo(map);


/* ============================================================
   ROUTE NETWORK
============================================================ */


/*
    These are the actual navigation points.

    Main Gate is at bottom.

    The route DOES NOT go straight through
    the central garden.
*/


const routeNetwork = {

    mainGate: [
        point(800,950),
        point(800,820),
        point(690,700),
        point(570,620)
    ],

    leftJunction: [
        point(570,620),
        point(500,520),
        point(500,390)
    ],

    rightJunction: [
        point(690,700),
        point(900,760),
        point(1050,700),
        point(1160,650)
    ],

    rightUpper: [
        point(1160,650),
        point(1230,550),
        point(1200,500),
        point(1200,390)
    ]

};


/* ============================================================
   DESTINATION ROUTES
============================================================ */


/*
    Each destination follows the campus road network.
*/


const destinationRoutes = {


    main_block: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(800,570),
        point(800,430)
    ],


    chemistry_physics: [
        ...routeNetwork.mainGate,
        ...routeNetwork.leftJunction,
        point(665,390)
    ],


    partition_hall: [
        ...routeNetwork.mainGate,
        ...routeNetwork.leftJunction,
        point(540,420)
    ],


    new_auditorium: [
        ...routeNetwork.mainGate,
        ...routeNetwork.leftJunction,
        point(360,430)
    ],


    nano_science: [
        ...routeNetwork.mainGate,
        ...routeNetwork.leftJunction,
        point(430,320)
    ],


    bca_mca: [
        ...routeNetwork.mainGate,
        ...routeNetwork.leftJunction,
        point(260,330)
    ],


    chapel: [
        ...routeNetwork.mainGate,
        ...routeNetwork.leftJunction,
        point(430,250),
        point(480,120)
    ],


    hostel: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(800,570),
        point(900,330),
        point(800,110)
    ],


    playground: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(800,570),
        point(800,220)
    ],


    zoology_bcom: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(800,570),
        point(800,275)
    ],


    botany: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(900,760),
        point(950,390)
    ],


    old_auditorium: [
        ...routeNetwork.mainGate,
        ...routeNetwork.rightJunction,
        point(1180,430)
    ],


    tamil_english_economics: [
        ...routeNetwork.mainGate,
        ...routeNetwork.rightJunction,
        point(1230,550),
        point(1320,510)
    ],


    library: [
        ...routeNetwork.mainGate,
        ...routeNetwork.rightJunction,
        point(1190,600)
    ],


    canteen: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(900,760),
        point(1050,700),
        point(1160,650),
        point(1160,250)
    ],


    john_tucker: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(900,760),
        point(1050,700),
        point(1160,650),
        point(1230,550),
        point(1260,420),
        point(1350,230)
    ],


    parking_shed: [
        ...routeNetwork.mainGate,
        point(690,700),
        point(900,760),
        point(1100,800),
        point(1370,780)
    ],


    canara_bank: [
        ...routeNetwork.mainGate,
        point(700,820),
        point(500,850),
        point(360,820)
    ]

};


/* ============================================================
   BUILDING DATA
============================================================ */

const buildings = {

    main_block: {
        name: "Main Block",
        description: "Main Academic Block"
    },

    chemistry_physics: {
        name: "Chemistry & Physics",
        description: "First Floor"
    },

    partition_hall: {
        name: "Partition Hall",
        description: "Maths / History / S.F"
    },

    new_auditorium: {
        name: "New Auditorium",
        description: "Auditorium"
    },

    nano_science: {
        name: "Nano Science",
        description: "New Auditorium"
    },

    bca_mca: {
        name: "BCA / MCA",
        description: "Computer Applications"
    },

    chapel: {
        name: "Chapel",
        description: "Chapel"
    },

    hostel: {
        name: "Hostel",
        description: "Student Hostel"
    },

    playground: {
        name: "Play Ground",
        description: "Campus Playground"
    },

    zoology_bcom: {
        name: "Zoology & B.Com",
        description: "Aided"
    },

    botany: {
        name: "Botany",
        description: "Department"
    },

    old_auditorium: {
        name: "Old Auditorium",
        description: "Auditorium"
    },

    tamil_english_economics: {
        name: "Tamil / English",
        description: "Regular & Economics"
    },

    library: {
        name: "Library",
        description: "Central Library"
    },

    canteen: {
        name: "Canteen",
        description: "Food Court"
    },

    john_tucker: {
        name: "John Tucker Block",
        description: "Computer Science / Food Science / B.Com S.F / English S.F"
    },

    parking_shed: {
        name: "Parking Shed",
        description: "Parking Area"
    },

    canara_bank: {
        name: "Canara Bank",
        description: "Bank"
    }

};


/* ============================================================
   ROUTE LAYER
============================================================ */

let activeRoute = null;

let arrowMarkers = [];


function clearRoute() {

    if (activeRoute) {

        map.removeLayer(activeRoute);

        activeRoute = null;

    }


    arrowMarkers.forEach(marker => {

        map.removeLayer(marker);

    });

    arrowMarkers = [];

}


/* ============================================================
   ADD ARROWS TO ROUTE
============================================================ */

function addRouteArrows(coords) {

    for (let i = 0; i < coords.length - 1; i++) {

        const a = coords[i];
        const b = coords[i + 1];

        const midLat = (a[0] + b[0]) / 2;
        const midLng = (a[1] + b[1]) / 2;


        const angle =
            Math.atan2(
                b[1] - a[1],
                b[0] - a[0]
            ) * 180 / Math.PI;


        const marker = L.marker(
            [midLat, midLng],
            {

                icon: L.divIcon({

                    className: "",

                    html: `
                        <div
                            class="route-arrow"
                            style="transform:rotate(${angle}deg)"
                        >
                            ➜
                        </div>
                    `,

                    iconSize: [25,25],

                    iconAnchor: [12,12]

                }),

                interactive: false

            }
        ).addTo(map);


        arrowMarkers.push(marker);

    }

}


/* ============================================================
   DISTANCE CALCULATION
============================================================ */

function calculateDistance(coords) {

    let total = 0;


    for (let i = 0; i < coords.length - 1; i++) {

        const a = coords[i];
        const b = coords[i + 1];


        const dx = b[1] - a[1];
        const dy = b[0] - a[0];


        total += Math.sqrt(
            dx * dx + dy * dy
        );

    }


    /*
        Campus drawing units converted
        approximately to metres.
    */

    return Math.round(total * 0.75);

}


/* ============================================================
   SHOW ROUTE
============================================================ */

function showRoute(id) {

    if (!destinationRoutes[id]) {

        return;

    }


    clearRoute();


    const coords = destinationRoutes[id];


    activeRoute = L.polyline(
        coords,
        {

            color: "#1769e0",

            weight: 7,

            opacity: 0.95,

            className: "route-line"

        }
    ).addTo(map);


    addRouteArrows(coords);


    const distance = calculateDistance(coords);


    const walkingTime =
        Math.max(
            1,
            Math.ceil(distance / 70)
        );


    const data = buildings[id];


    document.getElementById(
        "destinationName"
    ).textContent = data.name;


    document.getElementById(
        "destinationDescription"
    ).textContent =
        "Walking route from Main Gate";


    document.getElementById(
        "routeDistance"
    ).textContent =
        distance + " m";


    document.getElementById(
        "routeTime"
    ).textContent =
        walkingTime + " min";


    createDirections(id);


    document.getElementById(
        "routePanel"
    ).style.display = "block";


    map.fitBounds(
        activeRoute.getBounds(),
        {
            padding: [80, 80]
        }
    );

}


/* ============================================================
   DIRECTIONS
============================================================ */

function createDirections(id) {

    const list =
        document.getElementById(
            "directionList"
        );


    list.innerHTML = "";


    const directionText = {


        main_block: [
            "Start from Main Gate.",
            "Follow the campus road.",
            "Keep to the road around the Central Garden.",
            "Continue towards Main Block.",
            "You have reached Main Block."
        ],


        chemistry_physics: [
            "Start from Main Gate.",
            "Follow the left-side campus road.",
            "Continue towards Partition Hall.",
            "Continue towards Chemistry & Physics.",
            "You have reached Chemistry & Physics."
        ],


        partition_hall: [
            "Start from Main Gate.",
            "Take the left-side road around the garden.",
            "Continue towards Partition Hall.",
            "You have reached Partition Hall."
        ],


        new_auditorium: [
            "Start from Main Gate.",
            "Take the left-side road.",
            "Continue straight towards New Auditorium.",
            "You have reached New Auditorium."
        ],


        nano_science: [
            "Start from Main Gate.",
            "Take the left-side road.",
            "Continue towards New Auditorium.",
            "Nano Science is at the designated side of the New Auditorium."
        ],


        old_auditorium: [
            "Start from Main Gate.",
            "Follow the road around the Central Garden.",
            "Continue towards the Old Auditorium road.",
            "You have reached Old Auditorium."
        ],


        library: [
            "Start from Main Gate.",
            "Follow the right-side road around the Central Garden.",
            "Continue towards the Old Auditorium side.",
            "Library is slightly behind the road.",
            "You have reached Library."
        ],


        john_tucker: [
            "Start from Main Gate.",
            "Follow the right-side road around the Central Garden.",
            "Continue towards the upper-right campus road.",
            "Continue towards John Tucker Block.",
            "Computer Science is inside John Tucker Block.",
            "You have reached John Tucker Block."
        ],


        parking_shed: [
            "Start from Main Gate.",
            "Follow the right-side road.",
            "Continue towards the Parking Area.",
            "Parking Shed and Parking Area are the same location.",
            "You have reached Parking Shed."
        ],


        canteen: [
            "Start from Main Gate.",
            "Follow the right-side campus road.",
            "Continue towards Canteen.",
            "You have reached Canteen."
        ],


        botany: [
            "Start from Main Gate.",
            "Follow the road around the Central Garden.",
            "Take the right-side road.",
            "Continue towards Botany.",
            "You have reached Botany."
        ],


        zoology_bcom: [
            "Start from Main Gate.",
            "Follow the campus road around the garden.",
            "Continue towards the area behind Main Block.",
            "You have reached Zoology & B.Com."
        ],


        tamil_english_economics: [
            "Start from Main Gate.",
            "Follow the right-side road.",
            "Continue towards Old Auditorium.",
            "Tamil, English and Economics are beside Old Auditorium.",
            "You have reached the destination."
        ],


        playground: [
            "Start from Main Gate.",
            "Follow the campus road around the Central Garden.",
            "Continue towards the Play Ground.",
            "You have reached Play Ground."
        ],


        hostel: [
            "Start from Main Gate.",
            "Follow the road around the Central Garden.",
            "Continue towards the northern campus.",
            "You have reached Hostel."
        ],


        chapel: [
            "Start from Main Gate.",
            "Follow the left-side campus road.",
            "Continue towards Chapel.",
            "You have reached Chapel."
        ],


        bca_mca: [
            "Start from Main Gate.",
            "Take the left-side campus road.",
            "Continue towards BCA / MCA.",
            "You have reached BCA / MCA."
        ],


        canara_bank: [
            "Start from Main Gate.",
            "Follow the left-side road.",
            "Continue towards Canara Bank.",
            "You have reached Canara Bank."
        ]

    };


    const directions =
        directionText[id] || [
            "Start from Main Gate.",
            "Follow the campus road.",
            "Continue towards the destination.",
            "You have reached the destination."
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


            list.appendChild(item);

        }
    );

}


/* ============================================================
   SEARCH DATA
============================================================ */

const searchData = [

    ["computer science", "john_tucker"],
    ["cs", "john_tucker"],
    ["john tucker", "john_tucker"],

    ["food science", "john_tucker"],

    ["bcom sf", "john_tucker"],

    ["english sf", "john_tucker"],

    ["main block", "main_block"],

    ["chemistry", "chemistry_physics"],

    ["physics", "chemistry_physics"],

    ["partition hall", "partition_hall"],

    ["maths", "partition_hall"],

    ["new auditorium", "new_auditorium"],

    ["nano science", "nano_science"],

    ["nano", "nano_science"],

    ["bca", "bca_mca"],

    ["mca", "bca_mca"],

    ["chapel", "chapel"],

    ["hostel", "hostel"],

    ["playground", "playground"],

    ["play ground", "playground"],

    ["zoology", "zoology_bcom"],

    ["bcom", "zoology_bcom"],

    ["botany", "botany"],

    ["old auditorium", "old_auditorium"],

    ["library", "library"],

    ["canteen", "canteen"],

    ["parking", "parking_shed"],

    ["parking shed", "parking_shed"],

    ["tamil", "tamil_english_economics"],

    ["english", "tamil_english_economics"],

    ["economics", "tamil_english_economics"],

    ["canara bank", "canara_bank"],

    ["bank", "canara_bank"]

];


/* ============================================================
   SEARCH
============================================================ */

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


function performSearch() {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    if (!query) {

        return;

    }


    const result =
        searchData.find(
            item =>
                item[0] === query
        );


    if (result) {

        showRoute(result[1]);

        suggestions.style.display =
            "none";

        return;

    }


    const partial =
        searchData.find(
            item =>
                item[0].includes(query)
        );


    if (partial) {

        showRoute(partial[1]);

        suggestions.style.display =
            "none";

        return;

    }


    alert(
        "Building not found. Try: Computer Science, Library, Canteen, Main Block, etc."
    );

}


/* Search button */

searchButton.addEventListener(
    "click",
    performSearch
);


/* Enter key */

searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


/* ============================================================
   LIVE SUGGESTIONS
============================================================ */

searchInput.addEventListener(
    "input",
    function() {

        const query =
            this.value
                .toLowerCase()
                .trim();


        suggestions.innerHTML = "";


        if (!query) {

            suggestions.style.display =
                "none";

            return;

        }


        const results =
            searchData
                .filter(
                    item =>
                        item[0]
                            .includes(query)
                )
                .slice(0, 6);


        if (!results.length) {

            suggestions.style.display =
                "none";

            return;

        }


        results.forEach(
            result => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "suggestion";


                item.textContent =
                    result[0]
                        .replace(
                            /\b\w/g,
                            c => c.toUpperCase()
                        );


                item.addEventListener(
                    "click",
                    function() {

                        searchInput.value =
                            result[0];

                        suggestions.style.display =
                            "none";

                        showRoute(
                            result[1]
                        );

                    }
                );


                suggestions.appendChild(
                    item
                );

            }
        );


        suggestions.style.display =
            "block";

    }
);


/* ============================================================
   CLOSE ROUTE
============================================================ */

document
    .getElementById("closeRoute")
    .addEventListener(
        "click",
        function() {

            clearRoute();

            document.getElementById(
                "routePanel"
            ).style.display = "none";

            map.fitBounds(bounds);

        }
    );


/* ============================================================
   MAIN GATE BUTTON
============================================================ */

document
    .getElementById("mainGateButton")
    .addEventListener(
        "click",
        function() {

            clearRoute();

            document.getElementById(
                "routePanel"
            ).style.display = "none";

            map.setView(
                mainGate,
                0
            );

        }
    );


/* ============================================================
   CLICK OUTSIDE SEARCH
============================================================ */

document.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.closest(
                ".search-container"
            )
        ) {

            suggestions.style.display =
                "none";

        }

    }
);
