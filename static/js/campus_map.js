// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// FINAL CLEAN VERSION
// BASED ON YOUR MY MAPS KMZ
// ============================================================


// ============================================================
// 1. CAMPUS CENTER
// ============================================================

const COLLEGE_CENTER = [8.6988565, 77.739888];


// ============================================================
// 2. CREATE MAP
// ============================================================

const map = L.map("map", {
    zoomControl: true
});


// ============================================================
// 3. OPEN STREET MAP
// ============================================================

const osmLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

// ============================================================
// 4. INITIAL LOCATION
// ============================================================

map.setView(COLLEGE_CENTER, 18);


// ============================================================
// 5. LOCATIONS
// DO NOT CHANGE
// ============================================================

const places = [

    ["Botony", 8.6984368, 77.7409389],

    ["Physics (regular)", 8.6989193, 77.7407981],

    ["Chemistry", 8.6991182, 77.7410046],

    ["Zoology & B.Com (Aided)", 8.6987364, 77.7413077],

    ["Old Auditorium", 8.6980713, 77.7407428],

    ["Library", 8.6983083, 77.7402171],

    ["Parking Area", 8.6984369, 77.7400521],

    ["Tamil, English (regular), Economics",
        8.6980622, 77.7403781],

    ["Toilet", 8.6977444, 77.7415160],

    ["English (SF), B.Com (SF), Computer Science, Food Science",
        8.6975920, 77.7420998],

    ["Sports Room", 8.6981680, 77.7421669],

    ["Canteen", 8.6980195, 77.7421696],

    ["Play Ground", 8.6987290, 77.7418037],

    ["Hostel", 8.6987209, 77.7427011],

    ["New Auditorium", 8.6996460, 77.7406171],

    ["History (Tamil & English)", 8.6996990, 77.7407055],

    ["Nano Science", 8.6996354, 77.7404803],

    ["Maths", 8.6994790, 77.7406680],

    ["Physics (SF)", 8.6994551, 77.7409470],

    ["BCA", 8.6997309, 77.7409014],

    ["MCA", 8.6997653, 77.7410918],

    ["Main Gate", 8.6988565, 77.7398880],

    ["NCC Room", 8.6990958, 77.7422827],

    ["Principal Office", 8.6988395, 77.7408101],

    ["Management Office", 8.6985889, 77.7408047]
];


// ============================================================
// 6. LOCATION MARKERS
// ============================================================

places.forEach(function(place) {

    const marker = L.marker([
        place[1],
        place[2]
    ]).addTo(map);

    marker.bindTooltip(place[0], {
        direction: "top",
        sticky: true
    });

    marker.bindPopup(
        "<b>📍 " + place[0] + "</b>"
    );
});


// ============================================================
// 7. MY MAPS ROAD NETWORK
// EXACT ROAD POINTS FROM KMZ
// ============================================================

const roads = [

    // ========================================================
    // LINE 45
    // MAIN GATE + ROUND ROAD
    // ========================================================

    [
        [8.6988523, 77.7399115],
        [8.6988630, 77.7400725],
        [8.6989796, 77.7402602],
        [8.6990247, 77.7404480],
        [8.6989929, 77.7405687],
        [8.6988470, 77.7406733],
        [8.6986800, 77.7406894],
        [8.6985554, 77.7406304],
        [8.6984652, 77.7405177],
        [8.6984334, 77.7404158],
        [8.6984626, 77.7402683],
        [8.6985421, 77.7401449],
        [8.6985183, 77.7401958]
    ],


    // ========================================================
    // LINE 46
    // ROUND ROAD → LIBRARY SIDE
    // ========================================================

    [
        [8.6984865, 77.7402119],
        [8.6983413, 77.7402146]
    ],


    // ========================================================
    // LINE 48
    // LOWER ROAD
    // ========================================================

    [
        [8.6984950, 77.7405567],
        [8.6980993, 77.7405909],
        [8.6980999, 77.7404461],
        [8.6980982, 77.7404069]
    ],


    // ========================================================
    // LINE 50
    // LOWER ROAD CONNECTION
    // ========================================================

    [
        [8.6980993, 77.7405909],
        [8.6980990, 77.7406429]
    ],


    // ========================================================
    // LINE 52
    // CENTRAL → CANTEEN SIDE
    // ========================================================

    [
        [8.6984143, 77.7405872],
        [8.6981571, 77.7411800],
        [8.6981996, 77.7419417],
        [8.6979556, 77.7419511],
        [8.6977144, 77.7420973],
        [8.6977276, 77.7421080]
    ],


    // ========================================================
    // LINE 55
    // CANTEEN CONNECTION
    // ========================================================

    [
        [8.6980260, 77.7419489],
        [8.6980260, 77.7420709],
        [8.6980267, 77.7420800]
    ],


    // ========================================================
    // LINE 56
    // CANTEEN SIDE
    // ========================================================

    [
        [8.6981996, 77.7419417],
        [8.6982033, 77.7420787]
    ],


    // ========================================================
    // LINE 61
    // CENTRAL ROAD
    // ========================================================

    [
        [8.6981794, 77.7414377],
        [8.6984207, 77.7414189]
    ],


    // ========================================================
    // LINE 62
    // CENTRAL TURN
    // ========================================================

    [
        [8.6984207, 77.7414189],
        [8.6984923, 77.7410970],
        [8.6984339, 77.7410541]
    ],


    // ========================================================
    // LINE 63
    // CENTRAL SIDE
    // ========================================================

    [
        [8.6984830, 77.7411529],
        [8.6987058, 77.7411542],
        [8.6987097, 77.7412441]
    ],


    // ========================================================
    // LINE 65
    // UPPER CENTRAL ROAD
    // ========================================================

    [
        [8.6987058, 77.7411542],
        [8.6990431, 77.7411568],
        [8.6989887, 77.7410536],
        [8.6990616, 77.7410160],
        [8.6990497, 77.7410173]
    ],


    // ========================================================
    // LINE 66
    // MAIN GATE LOWER CONNECTION
    // ========================================================

    [
        [8.6985592, 77.7399331],
        [8.6985910, 77.7401047]
    ],


    // ========================================================
    // LINE 67
    // UPPER CAMPUS ROAD
    // ========================================================

    [
        [8.6989929, 77.7405687],
        [8.6992734, 77.7410220],
        [8.6993106, 77.7412044],
        [8.6996022, 77.7411883],
        [8.6995996, 77.7411050],
        [8.6997136, 77.7410969]
    ],


    // ========================================================
    // LINE 68
    // TOP CONNECTION
    // ========================================================

    [
        [8.6995996, 77.7411050],
        [8.6995837, 77.7409360],
        [8.6996831, 77.7409213]
    ],


    // ========================================================
    // LINE 69
    // UPPER LEFT
    // ========================================================

    [
        [8.6991860, 77.7408739],
        [8.6993450, 77.7407773]
    ],


    // ========================================================
    // LINE 70
    // UPPER CONNECTION
    // ========================================================

    [
        [8.6992854, 77.7410603],
        [8.6994100, 77.7409798]
    ],


    // ========================================================
    // LINE 71
    // TOP ROAD
    // ========================================================

    [
        [8.6990018, 77.7405711],
        [8.6990919, 77.7405174],
        [8.6991900, 77.7404906],
        [8.6993438, 77.7403552],
        [8.6994287, 77.7402988]
    ],


    // ========================================================
    // LINE 73
    // TOP ROAD CONNECTION
    // ========================================================

    [
        [8.6994287, 77.7402988],
        [8.6995162, 77.7402452],
        [8.6996249, 77.7404531]
    ],


    // ========================================================
    // LINE 74
    // TOP SIDE
    // ========================================================

    [
        [8.6995837, 77.7409360],
        [8.6995451, 77.7407950],
        [8.6996617, 77.7407387]
    ],


    // ========================================================
    // LINE 75
    // UPPER RIGHT
    // ========================================================

    [
        [8.6995066, 77.7411985],
        [8.6995186, 77.7418583]
    ],


    // ========================================================
    // LINE 76
    // HOSTEL ROAD
    // ========================================================

    [
        [8.6993233, 77.7412721],
        [8.6993286, 77.7426990],
        [8.6987400, 77.7425381],
        [8.6987209, 77.7427011]
    ]
];


// ============================================================
// 8. DRAW PROFESSIONAL WHITE ROADS
// ============================================================

roads.forEach(function(road) {

    // Soft road edge
    L.polyline(road, {
        color: "#d6d6d6",
        weight: 19,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1,
        interactive: false
    }).addTo(map);


    // White road
    L.polyline(road, {
        color: "#ffffff",
        weight: 14,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1,
        interactive: false
    }).addTo(map);

});


// ============================================================
// 9. NAVIGATION LAYERS
// ============================================================

let navigationLayers = [];


// ============================================================
// 10. CLEAR NAVIGATION
// ============================================================

function clearNavigation() {

    navigationLayers.forEach(function(layer) {

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
        }

    });

    navigationLayers = [];
}


// ============================================================
// 11. LIBRARY ROUTE
//
// MAIN GATE
//     ↓
// MAIN ROAD
//     ↓
// ROUND ROAD
//     ↓
// FOLLOW ROUND
//     ↓
// EXIT
//     ↓
// LIBRARY
// ============================================================

const libraryRoute = [

    // Main Gate
    [8.6988565, 77.7398880],

    // Enter actual Line 45
    [8.6988523, 77.7399115],
    [8.6988630, 77.7400725],
    [8.6989796, 77.7402602],
    [8.6990247, 77.7404480],

    // ROUND ROAD
    [8.6989929, 77.7405687],
    [8.6988470, 77.7406733],
    [8.6986800, 77.7406894],
    [8.6985554, 77.7406304],
    [8.6984652, 77.7405177],
    [8.6984334, 77.7404158],
    [8.6984626, 77.7402683],
    [8.6985421, 77.7401449],

    // Exit towards Library
    [8.6985183, 77.7401958],
    [8.6984865, 77.7402119],
    [8.6983413, 77.7402146],

    // Library
    [8.6983083, 77.7402171]
];


// ============================================================
// 12. COMPUTER SCIENCE ROUTE
//
// MAIN GATE
//     ↓
// MAIN ROAD
//     ↓
// ROUND / CENTRAL CONNECTION
//     ↓
// CENTRAL ROAD
//     ↓
// CANTEEN SIDE
//     ↓
// COMPUTER SCIENCE
// ============================================================

const computerScienceRoute = [

    // Main Gate
    [8.6988565, 77.7398880],

    // Main road
    [8.6988523, 77.7399115],
    [8.6988630, 77.7400725],
    [8.6989796, 77.7402602],
    [8.6990247, 77.7404480],

    // Follow actual road
    [8.6989929, 77.7405687],
    [8.6988470, 77.7406733],
    [8.6986800, 77.7406894],
    [8.6985554, 77.7406304],
    [8.6984652, 77.7405177],

    // Central connection
    [8.6984143, 77.7405872],
    [8.6981571, 77.7411800],
    [8.6981996, 77.7419417],

    // Canteen-side road
    [8.6979556, 77.7419511],
    [8.6977144, 77.7420973],

    // Final approach
    [8.6977276, 77.7421080],
    [8.6975920, 77.7420998]
];


// ============================================================
// 13. ARROW ICON
// ============================================================

function createArrowIcon(angle) {

    return L.divIcon({

        className: "campus-navigation-arrow",

        html:
            '<div style="' +
            'width:0;' +
            'height:0;' +
            'border-left:8px solid transparent;' +
            'border-right:8px solid transparent;' +
            'border-bottom:18px solid #1677ff;' +
            'filter:drop-shadow(0 1px 2px rgba(0,0,0,.5));' +
            'transform:rotate(' + angle + 'deg);' +
            '"></div>',

        iconSize: [22, 22],

        iconAnchor: [11, 11]

    });
}


// ============================================================
// 14. ANGLE
// ============================================================

function getAngle(a, b) {

    const dx = b[1] - a[1];
    const dy = b[0] - a[0];

    return Math.atan2(dx, dy) * 180 / Math.PI;
}


// ============================================================
// 15. DRAW NAVIGATION
// ============================================================

function drawNavigation(route, destinationName) {

    clearNavigation();


    // White outline
    const outline = L.polyline(route, {

        color: "#ffffff",
        weight: 13,
        opacity: 1,

        lineCap: "round",
        lineJoin: "round",

        smoothFactor: 0,

        interactive: false

    }).addTo(map);


    // Blue route
    const blueRoute = L.polyline(route, {

        color: "#1677ff",
        weight: 6,
        opacity: 1,

        lineCap: "round",
        lineJoin: "round",

        smoothFactor: 0,

        interactive: false

    }).addTo(map);


    navigationLayers.push(outline);
    navigationLayers.push(blueRoute);


    // ========================================================
    // ARROWS
    // ========================================================

    for (
        let i = 1;
        i < route.length;
        i += 2
    ) {

        const angle = getAngle(
            route[i - 1],
            route[i]
        );


        const arrow = L.marker(
            route[i],
            {
                icon: createArrowIcon(angle),
                interactive: false,
                zIndexOffset: 2000
            }
        ).addTo(map);


        navigationLayers.push(arrow);
    }


    // ========================================================
    // START MARKER
    // ========================================================

    const startMarker =
        L.circleMarker(
            route[0],
            {
                radius: 8,
                color: "#ffffff",
                weight: 3,
                fillColor: "#1677ff",
                fillOpacity: 1
            }
        ).addTo(map);


    navigationLayers.push(startMarker);


    // ========================================================
    // DESTINATION
    // ========================================================

    const destination =
        places.find(function(place) {

            return place[0] === destinationName;

        });


    if (destination) {

        const destinationMarker =
            L.marker([
                destination[1],
                destination[2]
            ])
            .addTo(map)
            .bindPopup(
                "<b>📍 " +
                destination[0] +
                "</b>"
            );


        destinationMarker.openPopup();

        navigationLayers.push(
            destinationMarker
        );
    }


    // ========================================================
    // FIT ROUTE
    // ========================================================

    map.fitBounds(
        blueRoute.getBounds(),
        {
            padding: [60, 60]
        }
    );


    // ========================================================
    // ROUTE INFO
    // ========================================================

    const info =
        document.getElementById("routeInfo");


    if (info) {

        info.style.display = "block";


        info.innerHTML =
            "<b>🔵 Navigation Started</b>" +
            "<br><br>" +
            "🚪 Main Gate" +
            "<br>↓" +
            "🛣️ Follow the road" +
            "<br>↓" +
            "🔄 Follow the round road" +
            "<br>↓" +
            "➡️ Continue on the road" +
            "<br>↓" +
            "📍 <b>" +
            destinationName +
            "</b>";
    }
}


// ============================================================
// 16. SEARCH
// ============================================================

const destinationInput =
    document.getElementById("destination");

const resultsBox =
    document.getElementById("results");

let selectedPlace = null;


if (destinationInput && resultsBox) {

    destinationInput.addEventListener(
        "input",
        function() {

            const text =
                destinationInput.value
                .toLowerCase()
                .trim();


            selectedPlace = null;

            resultsBox.innerHTML = "";


            if (!text) {
                return;
            }


            places.forEach(function(place) {

                const name =
                    place[0].toLowerCase();


                const match =
                    name.includes(text) ||

                    (
                        text === "cs" &&
                        name.includes(
                            "computer science"
                        )
                    );


                if (match) {

                    const result =
                        document.createElement(
                            "div"
                        );


                    result.className =
                        "result";


                    result.textContent =
                        "📍 " + place[0];


                    result.addEventListener(
                        "click",
                        function() {

                            selectedPlace =
                                place;


                            destinationInput.value =
                                place[0];


                            resultsBox.innerHTML =
                                "";

                        }
                    );


                    resultsBox.appendChild(
                        result
                    );
                }

            });

        }
    );
}


// ============================================================
// 17. NAVIGATION BUTTON
// ============================================================

const navigateBtn =
    document.getElementById("navigateBtn");


if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function() {

            if (!destinationInput) {
                return;
            }


            let destination =
                selectedPlace;


            // Search destination
            if (!destination) {

                const text =
                    destinationInput.value
                    .toLowerCase()
                    .trim();


                destination =
                    places.find(
                        function(place) {

                            const name =
                                place[0]
                                .toLowerCase();


                            return (
                                name.includes(text) ||
                                (
                                    text === "cs" &&
                                    name.includes(
                                        "computer science"
                                    )
                                )
                            );

                        }
                    );
            }


            // No destination
            if (!destination) {

                alert(
                    "Please select a destination."
                );

                return;
            }


            const destinationName =
                destination[0];


            // =================================================
            // LIBRARY
            // =================================================

            if (
                destinationName
                .toLowerCase()
                .includes("library")
            ) {

                drawNavigation(
                    libraryRoute,
                    destinationName
                );

                return;
            }


            // =================================================
            // COMPUTER SCIENCE
            // =================================================

            if (
                destinationName
                .toLowerCase()
                .includes("computer science")
            ) {

                drawNavigation(
                    computerScienceRoute,
                    destinationName
                );

                return;
            }


            // =================================================
            // OTHER LOCATIONS
            // =================================================

            clearNavigation();


            map.setView(
                [
                    destination[1],
                    destination[2]
                ],
                19
            );

        }
    );
}


// ============================================================
// 18. GO TO COLLEGE
// ============================================================

function goToCollege() {

    map.setView(
        COLLEGE_CENTER,
        18
    );

}


// ============================================================
// 19. FINAL MAP SIZE FIX
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    1000
);
