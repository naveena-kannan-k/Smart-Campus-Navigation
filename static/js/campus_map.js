// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// CLEAN FINAL VERSION
// ============================================================


// ============================================================
// 1. COLLEGE CENTER
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

L.tileLayer(
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
// 5. CAMPUS LOCATIONS
// DO NOT CHANGE
// ============================================================

const places = [

    ["Botony", 8.6984368, 77.7409389],

    ["Physics (regular)", 8.6989193, 77.7407981],

    ["Chemistry", 8.6991182, 77.7410046],

    ["Zoology & B.Com (Aided)", 8.6987364, 77.7413077],

    ["Old Auditorium", 8.6980713, 77.7407428],

    ["Library", 8.6983229, 77.7401688],

    ["Parking Area", 8.6984369, 77.7400521],

    ["Tamil, English (regular), Economics",
        8.6980622, 77.7403781],

    ["Toilet", 8.6977444, 77.741516],

    ["English (SF), B.Com (SF), Computer Science, Food Science",
        8.697592, 77.7420998],

    ["Sports Room", 8.698168, 77.7421669],

    ["Canteen", 8.6980195, 77.7421696],

    ["Play Ground", 8.698729, 77.7418037],

    ["Hostel", 8.6987209, 77.7427011],

    ["New Auditorium", 8.699646, 77.7406171],

    ["History (Tamil & English)", 8.699699, 77.7407055],

    ["Nano Science", 8.6996354, 77.7404803],

    ["Maths", 8.699479, 77.740668],

    ["Physics (SF)", 8.6994551, 77.740947],

    ["BCA", 8.6997309, 77.7409014],

    ["MCA", 8.6997653, 77.7410918],

    ["Main Gate", 8.6988565, 77.739888],

    ["NCC Room", 8.6990958, 77.7422827],

    ["Principal Office", 8.6988395, 77.7408101],

    ["Management Office", 8.6985889, 77.7408047]

];


// ============================================================
// 6. ADD LOCATION MARKERS
// ============================================================

places.forEach(function(place) {

    const marker = L.marker([
        place[1],
        place[2]
    ]).addTo(map);

    marker.bindTooltip(
        place[0],
        {
            direction: "top",
            sticky: true
        }
    );

    marker.bindPopup(
        "<b>📍 " + place[0] + "</b>"
    );

});


// ============================================================
// 7. NAVIGATION VARIABLES
// ============================================================

let navigationLayers = [];


// ============================================================
// 8. CLEAR NAVIGATION
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
// 9. FIND PLACE
// ============================================================

function findPlace(searchText) {

    if (!searchText) {
        return null;
    }

    const text =
        searchText.toLowerCase().trim();


    // COMPUTER SCIENCE SHORT NAME
    if (
        text === "cs" ||
        text === "computer science"
    ) {

        return places.find(function(place) {

            return place[0]
                .toLowerCase()
                .includes("computer science");

        });

    }


    // NORMAL SEARCH
    return places.find(function(place) {

        return place[0]
            .toLowerCase()
            .includes(text);

    });

}

const computerScienceRoute = [
    [8.6988326, 77.7399079],  // Main Gate
    [8.6988645, 77.7400903],
    [8.6990156, 77.7403773],
    [8.6989944, 77.7405275],

    // FRONT ROUND - follow this exact road
    [8.6988698, 77.7406857],
    [8.6986205, 77.7406777],
    [8.6984535, 77.7405516],

    // LEFT / continue on the road
    [8.6984111, 77.7406079],
    [8.6981565, 77.7411631],

    // STRAIGHT TOWARDS CANTEEN
    [8.6981996, 77.7419417],

    // DOWN
    [8.6979556, 77.7419511],
    [8.6976979, 77.7421073],

    // COMPUTER SCIENCE
    [8.6975920, 77.7420998]
];
// ============================================================
// LIBRARY ROUTE
// BASED ON YOUR ACTUAL KMZ ROAD NETWORK
// ============================================================

const libraryRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // MAIN GATE → STRAIGHT
    [8.6988523, 77.7399115],
    [8.6988630, 77.7400725],
    [8.6989796, 77.7402602],
    [8.6990247, 77.7404480],

    // ========================================================
    // FRONT ROUND ROAD
    // FOLLOW THE ROUND
    // ========================================================

    [8.6989929, 77.7405687],
    [8.6988470, 77.7406733],
    [8.6986800, 77.7406894],
    [8.6985554, 77.7406304],
    [8.6984652, 77.7405177],
    [8.6984334, 77.7404158],
    [8.6984626, 77.7402683],
    [8.6985421, 77.7401449],

    // ========================================================
    // LIBRARY SIDE ROAD
    // ========================================================

    [8.6985183, 77.7401958],
    [8.6984865, 77.7402119],

    // STRAIGHT TO LIBRARY
    [8.6983413, 77.7402146],

    // ========================================================
    // LIBRARY
    // ========================================================

    [8.6983083, 77.7402171]
];

// ============================================================
// MAIN BLOCK - COMMON ROUTE
// ============================================================

const officeBuildingRoute = [

    [8.6988565, 77.739888],   // Main Gate

    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // Front Round → Main Block
    [8.6990121, 77.7405504],
    [8.6988371, 77.7406737],
    [8.6988451, 77.7407140]
];


// ============================================================
// MANAGEMENT OFFICE
// RIGHT SIDE - GROUND FLOOR
// ============================================================

const managementOfficeRoute = [
    ...officeBuildingRoute,

    [8.6985889, 77.7408047]
];


// ============================================================
// PRINCIPAL OFFICE
// LEFT SIDE - GROUND FLOOR
// ============================================================

const principalOfficeRoute = [
    ...officeBuildingRoute,

    [8.6988395, 77.7408101]
];


// ============================================================
// PHYSICS (REGULAR)
// FIRST FLOOR - MAIN BLOCK
// ============================================================

const physicsRegularRoute = [
    ...officeBuildingRoute,

    [8.6989193, 77.7407981]
];
// ============================================================
// OLD AUDITORIUM ROUTE
// MAIN GATE → FRONT ROUND → OLD AUDITORIUM
// ============================================================

const oldAuditoriumRoute = [

    // Main Gate
    [8.6988565, 77.739888],

    // Straight inside
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // Front round
    [8.6990121, 77.7405504],
    [8.6988371, 77.7406737],
    [8.6986800, 77.7406894],
    [8.6985554, 77.7406304],
    [8.6984652, 77.7405177],

    // Old Auditorium side
    [8.6983000, 77.7406500],
    [8.6980713, 77.7407428]
];


// ============================================================
// TAMIL + ENGLISH (REGULAR) + ECONOMICS
// OPPOSITE SIDE OF OLD AUDITORIUM
// ============================================================

const tamilEnglishEconomicsRoute = [

    // Main Gate
    [8.6988565, 77.739888],

    // Straight inside
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // Front round
    [8.6990121, 77.7405504],
    [8.6988371, 77.7406737],
    [8.6986800, 77.7406894],
    [8.6985554, 77.7406304],
    [8.6984652, 77.7405177],

    // Opposite side
    [8.6983000, 77.7404500],
    [8.6980622, 77.7403781]
];
// ============================================================
// 12. DRAW NAVIGATION
// ============================================================

function drawNavigation(
    route,
    destinationName
) {

    clearNavigation();


    // ========================================================
    // WHITE OUTLINE
    // ========================================================

    const whiteLine =
        L.polyline(
            route,
            {
                color: "#ffffff",
                weight: 12,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                interactive: false
            }
        ).addTo(map);


    navigationLayers.push(
        whiteLine
    );


    // ========================================================
    // BLUE ROUTE
    // ========================================================

    const blueLine =
        L.polyline(
            route,
            {
                color: "#1677ff",
                weight: 6,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                interactive: false
            }
        ).addTo(map);


    navigationLayers.push(
        blueLine
    );


    // ========================================================
    // START
    // ========================================================

    const start =
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


    start.bindPopup(
        "<b>🚪 Main Gate</b>"
    );


    navigationLayers.push(
        start
    );


    // ========================================================
    // DESTINATION
    // ========================================================

    const destination =
        findPlace(destinationName);


    if (destination) {

        const end =
            L.marker(
                [
                    destination[1],
                    destination[2]
                ]
            ).addTo(map);


        end.bindPopup(
            "<b>📍 " +
            destination[0] +
            "</b>"
        );


        end.openPopup();


        navigationLayers.push(
            end
        );

    }


    // ========================================================
    // ARROWS
    // ========================================================

    for (
        let i = 2;
        i < route.length;
        i += 3
    ) {

        const current =
            route[i];

        const next =
            route[
                Math.min(
                    i + 1,
                    route.length - 1
                )
            ];


        const angle =
            Math.atan2(
                next[1] - current[1],
                next[0] - current[0]
            ) * 180 / Math.PI;


        const arrow =
            L.marker(
                current,
                {
                    icon:
                        L.divIcon({

                            className:
                                "campus-route-arrow",

                            html:
                                '<div style="' +
                                'font-size:24px;' +
                                'font-weight:bold;' +
                                'color:#1677ff;' +
                                'text-shadow:0 0 3px white;' +
                                'transform:rotate(' +
                                angle +
                                'deg);">' +
                                '➤' +
                                '</div>',

                            iconSize:
                                [28, 28],

                            iconAnchor:
                                [14, 14]

                        }),

                    interactive: false,

                    zIndexOffset: 1000
                }
            ).addTo(map);


        navigationLayers.push(
            arrow
        );

    }


    // ========================================================
    // FIT ROUTE
    // ========================================================

    map.fitBounds(
        blueLine.getBounds(),
        {
            padding: [
                50,
                50
            ]
        }
    );


    // ========================================================
    // ROUTE INFORMATION
    // ========================================================

    const info =
        document.getElementById(
            "routeInfo"
        );


    if (info) {

        info.style.display =
            "block";


        info.innerHTML =

            "<b>🔵 Navigation Started</b>" +

            "<br><br>" +

            "🚪 Main Gate" +

            "<br>↓" +

            "🔄 Follow round road" +

            "<br>↓" +

            "➡️ Continue inside campus" +

            "<br>↓" +

            "↩️ Take left turn" +

            "<br>↓" +

            "➡️ Go straight" +

            "<br>↓" +

            "🍽️ Canteen side" +

            "<br>↓" +

            "⬇️ Go down" +

            "<br>↓" +

            "📍 <b>" +

            destinationName +

            "</b>";

    }

}


// ============================================================
// 13. FROM / TO
// ============================================================

const fromInput =
    document.getElementById(
        "from"
    );


const destinationInput =
    document.getElementById(
        "destination"
    );


const navigateBtn =
    document.getElementById(
        "navigateBtn"
    );


// ============================================================
// 14. NAVIGATE
// ============================================================

if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function () {

            const fromText =
                fromInput
                    ? fromInput.value.trim()
                    : "Main Gate";


            const toText =
                destinationInput
                    ? destinationInput.value.trim()
                    : "";


            if (!toText) {

                alert(
                    "Please select a destination."
                );

                return;

            }


            const destination =
                findPlace(toText);


            if (!destination) {

                alert(
                    "Destination not found."
                );

                return;

            }


            const destinationName =
                destination[0];
            // =================================================
// MANAGEMENT OFFICE
// =================================================

if (
    destinationName
        .toLowerCase()
        .includes("management office")
) {
    drawNavigation(
        managementOfficeRoute,
        destinationName
    );

    return;
}


// =================================================
// PRINCIPAL OFFICE
// =================================================

if (
    destinationName
        .toLowerCase()
        .includes("principal office")
) {
    drawNavigation(
        principalOfficeRoute,
        destinationName
    );

    return;
}


// =================================================
// PHYSICS (REGULAR)
// =================================================

if (
    destinationName
        .toLowerCase()
        .includes("physics (regular)")
) {
    drawNavigation(
        physicsRegularRoute,
        destinationName
    );

    return;
}
            // OLD AUDITORIUM
if (
    destinationName
        .toLowerCase()
        .includes("old auditorium")
) {
    drawNavigation(
        oldAuditoriumRoute,
        destinationName
    );
    return;
}


// TAMIL / ENGLISH / ECONOMICS
if (
    destinationName
        .toLowerCase()
        .includes("tamil, english (regular), economics")
) {
    drawNavigation(
        tamilEnglishEconomicsRoute,
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
                    .includes(
                        "computer science"
                    )
            ) {

                drawNavigation(
                    computerScienceRoute,
                    destinationName
                );

                return;

            }


            // =================================================
            // LIBRARY
            // =================================================

            if (
                destinationName
                    .toLowerCase()
                    .includes(
                        "library"
                    )
            ) {

                drawNavigation(
                    libraryRoute,
                    destinationName
                );

                return;

            }


            // =================================================
            // OTHER LOCATION
            // =================================================

            clearNavigation();


            map.setView(
                [
                    destination[1],
                    destination[2]
                ],
                19
            );


            destinationMarker =
                L.marker(
                    [
                        destination[1],
                        destination[2]
                    ]
                ).addTo(map);


            destinationMarker
                .bindPopup(
                    "<b>📍 " +
                    destinationName +
                    "</b>"
                )
                .openPopup();


            navigationLayers.push(
                destinationMarker
            );

        }
    );

}


// ============================================================
// 15. SEARCH SUGGESTIONS
// ============================================================

if (
    destinationInput
) {

    const resultsBox =
        document.getElementById(
            "results"
        );


    if (resultsBox) {

        destinationInput
            .addEventListener(
                "input",
                function () {

                    const text =
                        destinationInput.value
                            .toLowerCase()
                            .trim();


                    resultsBox.innerHTML =
                        "";


                    if (!text) {
                        return;
                    }


                    places.forEach(
                        function(place) {

                            const name =
                                place[0]
                                    .toLowerCase();


                            if (
                                name.includes(
                                    text
                                ) ||
                                (
                                    text === "cs" &&
                                    name.includes(
                                        "computer science"
                                    )
                                )
                            ) {

                                const item =
                                    document.createElement(
                                        "div"
                                    );


                                item.className =
                                    "result";


                                item.textContent =
                                    "📍 " +
                                    place[0];


                                item.addEventListener(
                                    "click",
                                    function() {

                                        destinationInput.value =
                                            place[0];


                                        resultsBox.innerHTML =
                                            "";

                                    }
                                );


                                resultsBox.appendChild(
                                    item
                                );

                            }

                        }
                    );

                }
            );

    }

}


// ============================================================
// 16. GO TO COLLEGE
// ============================================================

function goToCollege() {

    clearNavigation();


    map.setView(
        COLLEGE_CENTER,
        18
    );

}


// ============================================================
// 17. MAP SIZE FIX
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    800
);
