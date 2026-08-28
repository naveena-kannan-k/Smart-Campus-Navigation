// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// CUSTOM CAMPUS MAP
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================
    // MAP SETUP
    // ========================================================

    const map = L.map("map", {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 3,
        zoomControl: true,
        attributionControl: false
    });

    const mapWidth = 1600;
    const mapHeight = 1000;

    const bounds = [
        [0, 0],
        [mapHeight, mapWidth]
    ];

    map.fitBounds(bounds);


    // ========================================================
    // HELPER
    // ========================================================

    function point(x, y) {
        return [y, x];
    }


    // ========================================================
    // CAMPUS BACKGROUND
    // ========================================================

    const campusBackground = L.rectangle(
        bounds,
        {
            color: "#b7d69b",
            weight: 0,
            fillColor: "#dcebcf",
            fillOpacity: 1
        }
    ).addTo(map);


    // ========================================================
    // GARDEN
    // ========================================================

    const garden = L.circle(
        point(800, 560),
        {
            radius: 180,
            color: "#76a85b",
            weight: 4,
            fillColor: "#a9d18e",
            fillOpacity: 0.95
        }
    ).addTo(map);

    garden.bindTooltip(
        "Central Garden",
        {
            permanent: true,
            direction: "center",
            className: "garden-label"
        }
    );


    // ========================================================
    // CENTRAL ROUND FOUNTAIN
    // ========================================================

    L.circle(
        point(800, 560),
        {
            radius: 38,
            color: "#6d8f65",
            weight: 4,
            fillColor: "#b8e0e8",
            fillOpacity: 1
        }
    ).addTo(map);

    L.circle(
        point(800, 560),
        {
            radius: 14,
            color: "#4b91aa",
            fillColor: "#d9f3f7",
            fillOpacity: 1
        }
    ).addTo(map);


    // ========================================================
    // ROADS
    // IMPORTANT:
    // NO STRAIGHT ROAD THROUGH CENTRAL GARDEN
    // ========================================================

    const roadStyle = {
        color: "#ffffff",
        weight: 34,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round"
    };

    const roadInnerStyle = {
        color: "#777777",
        weight: 24,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round"
    };


    // Main entrance road
    const mainRoad = [
        point(800, 980),
        point(800, 900),
        point(800, 820),
        point(800, 720)
    ];

    L.polyline(mainRoad, roadStyle).addTo(map);
    L.polyline(mainRoad, roadInnerStyle).addTo(map);


    // LEFT SIDE ROAD around garden
    const leftRoad = [
        point(800, 720),
        point(650, 720),
        point(570, 650),
        point(570, 560),
        point(600, 470),
        point(650, 390)
    ];

    L.polyline(leftRoad, roadStyle).addTo(map);
    L.polyline(leftRoad, roadInnerStyle).addTo(map);


    // RIGHT SIDE ROAD around garden
    const rightRoad = [
        point(800, 720),
        point(950, 720),
        point(1040, 650),
        point(1040, 560),
        point(1000, 470),
        point(950, 390)
    ];

    L.polyline(rightRoad, roadStyle).addTo(map);
    L.polyline(rightRoad, roadInnerStyle).addTo(map);


    // TOP ROAD
    const topRoad = [
        point(650, 390),
        point(800, 360),
        point(950, 390)
    ];

    L.polyline(topRoad, roadStyle).addTo(map);
    L.polyline(topRoad, roadInnerStyle).addTo(map);


    // LEFT UPPER ROAD
    const leftUpperRoad = [
        point(570, 560),
        point(450, 500),
        point(380, 420),
        point(300, 350)
    ];

    L.polyline(leftUpperRoad, roadStyle).addTo(map);
    L.polyline(leftUpperRoad, roadInnerStyle).addTo(map);


    // RIGHT UPPER ROAD
    const rightUpperRoad = [
        point(1040, 560),
        point(1150, 500),
        point(1220, 420),
        point(1320, 350)
    ];

    L.polyline(rightUpperRoad, roadStyle).addTo(map);
    L.polyline(rightUpperRoad, roadInnerStyle).addTo(map);


    // ========================================================
    // BUILDING FUNCTION
    // ========================================================

    function createBuilding(
        name,
        subtitle,
        x,
        y,
        width,
        height,
        extraClass = ""
    ) {

        const html = `
            <div class="campus-building ${extraClass}">
                <div class="building-roof"></div>
                <div class="building-body">
                    <div class="building-name">${name}</div>
                    ${
                        subtitle
                        ? `<div class="building-subtitle">${subtitle}</div>`
                        : ""
                    }
                    <div class="building-windows">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;

        const icon = L.divIcon({
            className: "building-marker",
            html: html,
            iconSize: [width, height],
            iconAnchor: [width / 2, height / 2]
        });

        return L.marker(
            point(x, y),
            {
                icon: icon,
                interactive: true
            }
        ).addTo(map);
    }


    // ========================================================
    // BUILDINGS
    // ========================================================

    const buildings = {};


    // --------------------------------------------------------
    // MAIN BLOCK
    // --------------------------------------------------------

    buildings["Main Block"] = createBuilding(
        "Main Block",
        "Management / Principal Office",
        800,
        430,
        270,
        125,
        "main-block"
    );


    // --------------------------------------------------------
    // LEFT OF MAIN BLOCK
    // --------------------------------------------------------

    buildings["Chemistry & Physics"] = createBuilding(
        "Chemistry & Physics",
        "First Floor",
        600,
        430,
        170,
        95
    );


    // --------------------------------------------------------
    // RIGHT OF MAIN BLOCK
    // --------------------------------------------------------

    buildings["Botany"] = createBuilding(
        "Botany",
        "Department",
        1000,
        430,
        160,
        90
    );


    // --------------------------------------------------------
    // BEHIND MAIN BLOCK
    // --------------------------------------------------------

    buildings["Zoology & B.Com (Aided)"] = createBuilding(
        "Zoology & B.Com",
        "Aided",
        800,
        280,
        280,
        85
    );


    // ========================================================
    // NEW AUDITORIUM AREA - LEFT
    // ========================================================

    buildings["New Auditorium"] = createBuilding(
        "New Auditorium",
        "First Floor",
        360,
        300,
        220,
        115,
        "auditorium"
    );


    buildings["Nano Science"] = createBuilding(
        "Nano Science",
        "Ground Floor",
        250,
        350,
        150,
        75
    );


    buildings["History"] = createBuilding(
        "History",
        "Department",
        480,
        300,
        130,
        70
    );


    // ========================================================
    // PARTITION HALL
    // ========================================================

    buildings["Partition Hall"] = createBuilding(
        "Partition Hall",
        "Maths • Earth Science • S/F",
        500,
        470,
        190,
        80
    );


    // ========================================================
    // CHAPEL
    // ========================================================

    buildings["Chapel"] = createBuilding(
        "Chapel",
        "",
        300,
        150,
        120,
        70
    );


    // ========================================================
    // HOSTEL
    // ========================================================

    buildings["Hostel"] = createBuilding(
        "Hostel",
        "",
        800,
        120,
        230,
        90
    );


    // ========================================================
    // PLAYGROUND
    // ========================================================

    const playground = L.rectangle(
        [
            point(590, 220),
            point(1010, 360)
        ],
        {
            color: "#739b55",
            weight: 4,
            fillColor: "#b6d990",
            fillOpacity: 1
        }
    ).addTo(map);

    playground.bindTooltip(
        "Play Ground",
        {
            permanent: true,
            direction: "center",
            className: "playground-label"
        }
    );


    // ========================================================
    // CANTEEN
    // ========================================================

    buildings["Canteen"] = createBuilding(
        "Canteen",
        "",
        1160,
        270,
        150,
        75
    );


    // ========================================================
    // JOHN TUCKER BLOCK
    // ========================================================

    buildings["Computer Science"] = createBuilding(
        "John Tucker Block",
        "Computer Science • Food Science • B.Com S/F • English S/F",
        1340,
        330,
        250,
        120,
        "john-tucker"
    );


    // ========================================================
    // OLD AUDITORIUM
    // ========================================================

    buildings["Old Auditorium"] = createBuilding(
        "Old Auditorium",
        "",
        1230,
        510,
        210,
        100,
        "auditorium"
    );


    // ========================================================
    // TAMIL / ENGLISH / ECONOMICS
    // ========================================================

    buildings["Tamil & English"] = createBuilding(
        "Tamil & English",
        "Regular",
        1400,
        570,
        170,
        90
    );


    buildings["Economics"] = createBuilding(
        "Economics",
        "",
        1400,
        680,
        150,
        75
    );


    // ========================================================
    // LIBRARY
    // ========================================================

    buildings["Library"] = createBuilding(
        "Library",
        "",
        1210,
        690,
        160,
        90
    );


    // ========================================================
    // PARKING
    // ONE PARKING AREA ONLY
    // ========================================================

    const parking = L.rectangle(
        [
            point(980, 820),
            point(1220, 940)
        ],
        {
            color: "#777777",
            weight: 4,
            fillColor: "#a7a7a7",
            fillOpacity: 0.85
        }
    ).addTo(map);

    parking.bindTooltip(
        "Parking Area / Parking Shed",
        {
            permanent: true,
            direction: "center",
            className: "parking-label"
        }
    );


    // ========================================================
    // CANARA BANK
    // ========================================================

    buildings["Canara Bank"] = createBuilding(
        "Canara Bank",
        "",
        550,
        850,
        160,
        80
    );


    // ========================================================
    // MAP DESTINATIONS
    // ========================================================

    const destinations = {

        "main gate": {
            name: "Main Gate",
            x: 800,
            y: 960
        },

        "main block": {
            name: "Main Block",
            x: 800,
            y: 430
        },

        "chemistry": {
            name: "Chemistry & Physics",
            x: 600,
            y: 430
        },

        "physics": {
            name: "Chemistry & Physics",
            x: 600,
            y: 430
        },

        "botany": {
            name: "Botany",
            x: 1000,
            y: 430
        },

        "zoology": {
            name: "Zoology & B.Com (Aided)",
            x: 800,
            y: 280
        },

        "new auditorium": {
            name: "New Auditorium",
            x: 360,
            y: 300
        },

        "nano science": {
            name: "Nano Science",
            x: 250,
            y: 350
        },

        "history": {
            name: "History",
            x: 480,
            y: 300
        },

        "partition hall": {
            name: "Partition Hall",
            x: 500,
            y: 470
        },

        "chapel": {
            name: "Chapel",
            x: 300,
            y: 150
        },

        "hostel": {
            name: "Hostel",
            x: 800,
            y: 120
        },

        "playground": {
            name: "Play Ground",
            x: 800,
            y: 285
        },

        "canteen": {
            name: "Canteen",
            x: 1160,
            y: 270
        },

        "computer science": {
            name: "Computer Science",
            x: 1340,
            y: 330
        },

        "food science": {
            name: "Food Science",
            x: 1340,
            y: 330
        },

        "b.com sf": {
            name: "B.Com S/F",
            x: 1340,
            y: 330
        },

        "english sf": {
            name: "English S/F",
            x: 1340,
            y: 330
        },

        "john tucker block": {
            name: "John Tucker Block",
            x: 1340,
            y: 330
        },

        "old auditorium": {
            name: "Old Auditorium",
            x: 1230,
            y: 510
        },

        "tamil": {
            name: "Tamil & English",
            x: 1400,
            y: 570
        },

        "english": {
            name: "Tamil & English",
            x: 1400,
            y: 570
        },

        "economics": {
            name: "Economics",
            x: 1400,
            y: 680
        },

        "library": {
            name: "Library",
            x: 1210,
            y: 690
        },

        "parking": {
            name: "Parking Area / Parking Shed",
            x: 1100,
            y: 880
        },

        "canara bank": {
            name: "Canara Bank",
            x: 550,
            y: 850
        }
    };


    // ========================================================
    // ROUTES
    // ========================================================

    const routes = {

        "main block": [
            point(800, 960),
            point(800, 880),
            point(900, 780),
            point(970, 680),
            point(970, 570),
            point(900, 480),
            point(800, 430)
        ],

        "computer science": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1080, 580),
            point(1100, 480),
            point(1180, 400),
            point(1270, 350),
            point(1340, 330)
        ],

        "food science": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1080, 580),
            point(1100, 480),
            point(1180, 400),
            point(1270, 350),
            point(1340, 330)
        ],

        "john tucker block": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1080, 580),
            point(1100, 480),
            point(1180, 400),
            point(1270, 350),
            point(1340, 330)
        ],

        "canteen": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1080, 580),
            point(1100, 480),
            point(1150, 380),
            point(1160, 270)
        ],

        "library": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1150, 620),
            point(1210, 690)
        ],

        "old auditorium": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1080, 580),
            point(1160, 520),
            point(1230, 510)
        ],

        "botany": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1100, 650),
            point(1050, 530),
            point(1000, 430)
        ],

        "chemistry": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(570, 560),
            point(600, 430)
        ],

        "physics": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(570, 560),
            point(600, 430)
        ],

        "partition hall": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(500, 600),
            point(500, 470)
        ],

        "new auditorium": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(500, 600),
            point(450, 500),
            point(360, 300)
        ],

        "nano science": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(500, 600),
            point(400, 450),
            point(250, 350)
        ],

        "history": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(500, 600),
            point(450, 500),
            point(480, 300)
        ],

        "zoology": [
            point(800, 960),
            point(800, 850),
            point(800, 700),
            point(800, 570),
            point(800, 430),
            point(800, 280)
        ],

        "hostel": [
            point(800, 960),
            point(800, 850),
            point(800, 700),
            point(800, 600),
            point(700, 500),
            point(700, 360),
            point(800, 120)
        ],

        "chapel": [
            point(800, 960),
            point(700, 900),
            point(620, 800),
            point(570, 700),
            point(500, 600),
            point(400, 450),
            point(300, 150)
        ],

        "canara bank": [
            point(800, 960),
            point(700, 930),
            point(600, 900),
            point(550, 850)
        ],

        "parking": [
            point(800, 960),
            point(900, 940),
            point(1000, 900),
            point(1100, 880)
        ],

        "playground": [
            point(800, 960),
            point(800, 850),
            point(800, 700),
            point(800, 570),
            point(800, 400),
            point(800, 285)
        ],

        "tamil": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1250, 620),
            point(1400, 570)
        ],

        "economics": [
            point(800, 960),
            point(900, 900),
            point(1020, 850),
            point(1100, 780),
            point(1120, 680),
            point(1250, 650),
            point(1400, 680)
        ]
    };


    // ========================================================
    // ROUTE DRAWING
    // ========================================================

    let currentRoute = null;
    let currentMarkers = [];


    function clearRoute() {

        if (currentRoute) {
            map.removeLayer(currentRoute);
            currentRoute = null;
        }

        currentMarkers.forEach(marker => {
            map.removeLayer(marker);
        });

        currentMarkers = [];
    }


    function drawArrows(routePoints) {

        for (let i = 0; i < routePoints.length - 1; i++) {

            const p1 = routePoints[i];
            const p2 = routePoints[i + 1];

            const middle = [
                (p1[0] + p2[0]) / 2,
                (p1[1] + p2[1]) / 2
            ];

            const dx = p2[1] - p1[1];
            const dy = p2[0] - p1[0];

            let angle = Math.atan2(dy, dx) * 180 / Math.PI;

            const arrow = L.marker(
                middle,
                {
                    icon: L.divIcon({
                        className: "route-arrow",
                        html: `
                            <div style="
                                transform: rotate(${angle}deg);
                            ">
                                ➜
                            </div>
                        `,
                        iconSize: [25, 25],
                        iconAnchor: [12, 12]
                    }),
                    interactive: false
                }
            ).addTo(map);

            currentMarkers.push(arrow);
        }
    }


    // ========================================================
    // SHOW ROUTE
    // ========================================================

    function showRoute(key) {

        clearRoute();

        if (!routes[key]) {
            return;
        }

        const routePoints = routes[key];

        currentRoute = L.polyline(
            routePoints,
            {
                color: "#1769e0",
                weight: 9,
                opacity: 0.95,
                lineCap: "round",
                lineJoin: "round"
            }
        ).addTo(map);

        drawArrows(routePoints);


        // Destination marker
        const destination = destinations[key];

        if (destination) {

            const marker = L.marker(
                point(destination.x, destination.y),
                {
                    icon: L.divIcon({
                        className: "destination-marker",
                        html: `
                            <div class="destination-pin">
                                📍
                            </div>
                        `,
                        iconSize: [45, 45],
                        iconAnchor: [22, 42]
                    })
                }
            ).addTo(map);

            currentMarkers.push(marker);
        }


        // Fit route
        map.fitBounds(
            currentRoute.getBounds(),
            {
                padding: [80, 80]
            }
        );


        updateRoutePanel(key);
    }


    // ========================================================
    // ROUTE PANEL
    // ========================================================

    function updateRoutePanel(key) {

        const destination = destinations[key];

        if (!destination) return;

        const routePanel = document.getElementById("routePanel");

        document.getElementById("destinationName").textContent =
            destination.name;

        document.getElementById("destinationDescription").textContent =
            "Walking route from Main Gate";

        const distance =
            Math.round(
                routes[key].length * 55
            );

        const time =
            Math.max(
                1,
                Math.round(distance / 70)
            );

        document.getElementById("routeDistance").textContent =
            distance + " m";

        document.getElementById("routeTime").textContent =
            time + " min";


        const directionList =
            document.getElementById("directionList");

        directionList.innerHTML = "";


        const directionTexts = [
            "Start from Main Gate",
            "Follow the campus road",
            "Keep around the Central Garden",
            "Continue towards " + destination.name,
            "Follow the marked blue route",
            "You have reached " + destination.name
        ];


        directionTexts.forEach(
            function (text, index) {

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
    }


    // ========================================================
    // SEARCH
    // ========================================================

    const searchInput =
        document.getElementById("searchInput");

    const searchButton =
        document.getElementById("searchButton");

    const suggestionsBox =
        document.getElementById("searchSuggestions");


    function normalize(text) {

        return text
            .toLowerCase()
            .trim();
    }


    function findDestination(text) {

        const value = normalize(text);

        const keys = Object.keys(destinations);

        // Exact match
        if (destinations[value]) {
            return value;
        }

        // Partial match
        for (const key of keys) {

            if (
                key.includes(value) ||
                value.includes(key)
            ) {
                return key;
            }
        }

        return null;
    }


    function searchPlace() {

        const text =
            normalize(searchInput.value);

        if (!text) return;

        const key =
            findDestination(text);

        if (!key) {

            alert(
                "Location not found. Try Computer Science, Library, Main Block, Canteen, etc."
            );

            return;
        }

        searchInput.value =
            destinations[key].name;

        suggestionsBox.style.display =
            "none";

        showRoute(key);
    }


    searchButton.addEventListener(
        "click",
        searchPlace
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                searchPlace();
            }
        }
    );


    // ========================================================
    // SEARCH SUGGESTIONS
    // ========================================================

    searchInput.addEventListener(
        "input",
        function () {

            const value =
                normalize(searchInput.value);

            suggestionsBox.innerHTML = "";

            if (!value) {

                suggestionsBox.style.display =
                    "none";

                return;
            }


            const matches =
                Object.keys(destinations)
                    .filter(
                        key =>
                            key.includes(value)
                    );


            if (matches.length === 0) {

                suggestionsBox.style.display =
                    "none";

                return;
            }


            matches.slice(0, 7).forEach(
                function (key) {

                    const div =
                        document.createElement("div");

                    div.className =
                        "suggestion";

                    div.textContent =
                        destinations[key].name;

                    div.addEventListener(
                        "click",
                        function () {

                            searchInput.value =
                                destinations[key].name;

                            suggestionsBox.style.display =
                                "none";

                            showRoute(key);
                        }
                    );

                    suggestionsBox.appendChild(div);
                }
            );


            suggestionsBox.style.display =
                "block";
        }
    );


    // ========================================================
    // CLOSE ROUTE
    // ========================================================

    document
        .getElementById("closeRoute")
        .addEventListener(
            "click",
            function () {

                clearRoute();

                document.getElementById(
                    "routePanel"
                ).style.display = "none";
            }
        );


    // ========================================================
    // MAIN GATE BUTTON
    // ========================================================

    document
        .getElementById("mainGateButton")
        .addEventListener(
            "click",
            function () {

                clearRoute();

                document.getElementById(
                    "routePanel"
                ).style.display = "none";

                map.setView(
                    point(800, 960),
                    1
                );
            }
        );


    // ========================================================
    // BUILDING CLICK
    // ========================================================

    Object.keys(buildings).forEach(
        function (key) {

            const building =
                buildings[key];

            building.on(
                "click",
                function () {

                    const searchKey =
                        findDestination(
                            key
                        );

                    if (searchKey) {
                        showRoute(searchKey);
                    }
                }
            );
        }
    );


    // ========================================================
    // INITIAL VIEW
    // ========================================================

    map.setView(
        point(800, 650),
        0
    );

});
