// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
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

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 4. SET CAMPUS LOCATION
// ============================================================

map.setView(COLLEGE_CENTER, 18);


// ============================================================
// 5. EXISTING LOCATIONS
// DO NOT CHANGE THESE COORDINATES
// ============================================================

const places = [

    ["Botony", 8.6984368, 77.7409389],

    ["Physics (regular)", 8.6989193, 77.7407981],

    ["Chemistry", 8.6991182, 77.7410046],

    ["Zoology & B.Com (Aided)", 8.6987364, 77.7413077],

    ["Old Auditorium", 8.6980713, 77.7407428],

    ["Library", 8.6983229, 77.7401688],

    ["Parking Area", 8.6984369, 77.7400521],

    ["Tamil, English (regular), Economics", 8.6980622, 77.7403781],

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
// 6. ADD EXISTING LOCATIONS
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
// 7. CAMPUS ROAD NETWORK
//
// IMPORTANT:
// THESE ARE ROADS ONLY.
// LOCATIONS ARE NOT MODIFIED.
//
// White outer road
// Light grey road surface
// Round corners
// Round ends
// ============================================================

const roads = [

    // --------------------------------------------------------
    // MAIN GATE ROAD
    // --------------------------------------------------------

    [
        [8.6988374, 77.7398879],
        [8.6988400, 77.7400810]
    ],


    // --------------------------------------------------------
    // MAIN ROAD → UPPER CAMPUS
    // --------------------------------------------------------

    [
        [8.6988479, 77.7399128],
        [8.6988585, 77.7400764],
        [8.6990176, 77.7403795],
        [8.6990176, 77.7405807],
        [8.6991714, 77.7408516],
        [8.6993411, 77.7407577]
    ],


    // --------------------------------------------------------
    // UPPER RIGHT CONNECTION
    // --------------------------------------------------------

    [
        [8.6990121, 77.7405504],
        [8.6992819, 77.7410775],
        [8.6994118, 77.7409944]
    ],


    // --------------------------------------------------------
    // UPPER ROAD → RIGHT SIDE
    // --------------------------------------------------------

    [
        [8.6990176, 77.7405807],
        [8.6993029, 77.7411164],
        [8.6993093, 77.7412170],
        [8.6997017, 77.7411231]
    ],


    // --------------------------------------------------------
    // TOP ROAD TURN
    // --------------------------------------------------------

    [
        [8.6996566, 77.7411312],
        [8.6996301, 77.7410064],
        [8.6995903, 77.7408817],
        [8.6996566, 77.7408656]
    ],


    // --------------------------------------------------------
    // TOP LEFT CONNECTION
    // --------------------------------------------------------

    [
        [8.6996566, 77.7408656],
        [8.6996076, 77.7407458],
        [8.6996486, 77.7407257]
    ],


    // --------------------------------------------------------
    // CENTRAL ROAD
    // --------------------------------------------------------

    [
        [8.6981822, 77.7413523],
        [8.6984474, 77.7413336],
        [8.6984500, 77.7412518],
        [8.6984527, 77.7411539],
        [8.6986489, 77.7411431],
        [8.6986515, 77.7412424]
    ],


    // --------------------------------------------------------
    // CENTRAL SIDE TURN
    // --------------------------------------------------------

    [
        [8.6984527, 77.7411539],
        [8.6985030, 77.7410439],
        [8.6984580, 77.7410251]
    ],


    // --------------------------------------------------------
    // MANAGEMENT SIDE ROAD
    // --------------------------------------------------------

    [
        [8.6985959, 77.7411485],
        [8.6990387, 77.7411699],
        [8.6990890, 77.7410841]
    ],


    // --------------------------------------------------------
    // MAIN BLOCK CONNECTION
    // --------------------------------------------------------

    [
        [8.6990121, 77.7405504],
        [8.6988371, 77.7406737],
        [8.6988451, 77.7407140]
    ],


    // --------------------------------------------------------
    // LOWER ROAD → CANTEEN SIDE
    // --------------------------------------------------------

    [
        [8.6979528, 77.7405736],
        [8.6979581, 77.7416304],
        [8.6978812, 77.7416331],
        [8.6978865, 77.7421132],
        [8.6977168, 77.7421159]
    ],


    // --------------------------------------------------------
    // CANTEEN SIDE CROSS ROAD
    // --------------------------------------------------------

    [
        [8.6981808, 77.7419523],
        [8.6978892, 77.7419738]
    ],


    // --------------------------------------------------------
    // CANTEEN SHORT CONNECTION
    // --------------------------------------------------------

    [
        [8.6980138, 77.7419684],
        [8.6980164, 77.7420757]
    ],


    // --------------------------------------------------------
    // LIBRARY SIDE ROAD
    // --------------------------------------------------------

    [
        [8.6985667, 77.7400830],
        [8.6984315, 77.7400991],
        [8.6984288, 77.7400723]
    ],


    // --------------------------------------------------------
    // LIBRARY CONNECTION
    // --------------------------------------------------------

    [
        [8.6985667, 77.7400830],
        [8.6985004, 77.7401957],
        [8.6983573, 77.7401796]
    ],


    // --------------------------------------------------------
    // LOWER LEFT ROAD
    // --------------------------------------------------------

    [
        [8.6984315, 77.7405658],
        [8.6980842, 77.7405819],
        [8.6980709, 77.7404075]
    ],


    // --------------------------------------------------------
    // LOWER LEFT SMALL CONNECTION
    // --------------------------------------------------------

    [
        [8.6980842, 77.7405819],
        [8.6980815, 77.7406355]
    ],


    // --------------------------------------------------------
    // HOSTEL SIDE ROAD
    // --------------------------------------------------------

    [
        [8.6987709, 77.7425364],
        [8.6987656, 77.7426759]
    ],


    // --------------------------------------------------------
    // TOP ROAD CONNECTION
    // --------------------------------------------------------

    [
        [8.6994271, 77.7402956],
        [8.6995835, 77.7404726]
    ]
];


// ============================================================
// 8. DRAW PROFESSIONAL ROADS
// ============================================================

roads.forEach(function(coords) {

    // OUTER ROAD BORDER
    L.polyline(coords, {
        color: "#d0d0d0",
        weight: 18,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1
    }).addTo(map);


    // MAIN WHITE ROAD
    L.polyline(coords, {
        color: "#ffffff",
        weight: 14,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1
    }).addTo(map);

});


// ============================================================
// 9. NAVIGATION LAYER
// ============================================================

let navigationLayers = [];


// ============================================================
// 10. CLEAR NAVIGATION
// ============================================================

function clearNavigation() {

    navigationLayers.forEach(function(layer) {

        map.removeLayer(layer);

    });

    navigationLayers = [];
}


// ============================================================
// 11. COMPUTER SCIENCE ROUTE
//
// MAIN GATE
//      ↓
// STRAIGHT
//      ↓
// RIGHT
//      ↓
// LEFT
//      ↓
// CANTEEN SIDE
//      ↓
// DOWN
//      ↓
// COMPUTER SCIENCE
//
// NO PARKING SHORTCUT
// NO GARDEN SHORTCUT
// ============================================================

const computerScienceRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // STRAIGHT FROM MAIN GATE
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],

    // CONTINUE STRAIGHT
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // RIGHT TURN
    [8.6993029, 77.7411164],

    // LEFT TURN
    [8.6990387, 77.7411699],

    // MANAGEMENT SIDE
    [8.6985959, 77.7411485],

    // CONNECT TO LOWER ROAD
    [8.6985030, 77.7410439],
    [8.6984580, 77.7410251],

    // TURN TOWARDS CANTEEN SIDE
    [8.6984527, 77.7411539],
    [8.6984500, 77.7412518],
    [8.6984474, 77.7413336],
    [8.6981822, 77.7413523],

    // CANTEEN SIDE
    [8.6981808, 77.7419523],
    [8.6978892, 77.7419738],

    // GO DOWN
    [8.6979581, 77.7416304],
    [8.6978812, 77.7416331],
    [8.6978865, 77.7421132],
    [8.6977168, 77.7421159],

    // DESTINATION
    [8.6975920, 77.7420998]
];


// ============================================================
// 12. LIBRARY ROUTE
// ============================================================

const libraryRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // MAIN ROAD
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],

    // LIBRARY SIDE
    [8.6985667, 77.7400830],
    [8.6985004, 77.7401957],
    [8.6983573, 77.7401796],

    // LIBRARY
    [8.6983229, 77.7401688]
];


// ============================================================
// 13. BLUE ARROW ICON
// ============================================================

function createArrowIcon(angle) {

    return L.divIcon({

        className: "",

        html:
            '<div style="' +
            'font-size:26px;' +
            'font-weight:bold;' +
            'color:#1677ff;' +
            'text-shadow:0 0 3px white;' +
            'transform:rotate(' + angle + 'deg);' +
            '">' +
            '➤' +
            '</div>',

        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}


// ============================================================
// 14. CALCULATE ARROW ANGLE
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


    // WHITE OUTLINE
    const whiteRoute = L.polyline(route, {

        color: "#ffffff",
        weight: 13,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1

    }).addTo(map);


    // BLUE NAVIGATION LINE
    const blueRoute = L.polyline(route, {

        color: "#1677ff",
        weight: 7,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        smoothFactor: 1

    }).addTo(map);


    navigationLayers.push(whiteRoute);
    navigationLayers.push(blueRoute);


    // ========================================================
    // BLUE ARROWS
    // ========================================================

    for (let i = 1; i < route.length; i += 2) {

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

    const startMarker = L.circleMarker(
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
    // DESTINATION MARKER
    // ========================================================

    const destination = places.find(function(place) {

        return place[0] === destinationName;

    });


    if (destination) {

        const destinationMarker = L.marker([
            destination[1],
            destination[2]
        ])
        .addTo(map)
        .bindPopup(
            "<b>📍 " + destination[0] + "</b>"
        )
        .openPopup();

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
            padding: [50, 50]
        }
    );


    // ========================================================
    // ROUTE INFORMATION
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
            "<br>➡️ Go straight" +
            "<br>↓" +
            "<br>↪️ Turn right" +
            "<br>↓" +
            "<br>↩️ Turn left" +
            "<br>↓" +
            "<br>🍽️ Canteen side" +
            "<br>↓" +
            "<br>📍 <b>" +
            destinationName +
            "</b>";
    }
}


// ============================================================
// 16. DESTINATION SEARCH
// ============================================================

const destinationInput =
    document.getElementById("destination");

const resultsBox =
    document.getElementById("results");

let selectedPlace = null;


if (destinationInput) {

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


                const isMatch =
                    name.includes(text) ||
                    (
                        text === "cs" &&
                        name.includes("computer science")
                    ) ||
                    (
                        text.includes("computer science") &&
                        name.includes("computer science")
                    );


                if (isMatch) {

                    const result =
                        document.createElement("div");

                    result.className = "result";

                    result.textContent =
                        "📍 " + place[0];


                    result.addEventListener(
                        "click",
                        function() {

                            selectedPlace = place;

                            destinationInput.value =
                                place[0];

                            resultsBox.innerHTML = "";
                        }
                    );


                    resultsBox.appendChild(result);
                }

            });

        }
    );
}


// ============================================================
// 17. NAVIGATE BUTTON
// ============================================================

const navigateBtn =
    document.getElementById("navigateBtn");


if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function() {

            let destination =
                selectedPlace;


            // SEARCH DIRECTLY
            if (!destination) {

                const text =
                    destinationInput.value
                    .toLowerCase()
                    .trim();


                destination =
                    places.find(function(place) {

                        const name =
                            place[0].toLowerCase();


                        return (
                            name.includes(text) ||
                            (
                                text === "cs" &&
                                name.includes(
                                    "computer science"
                                )
                            ) ||
                            (
                                text.includes(
                                    "computer science"
                                ) &&
                                name.includes(
                                    "computer science"
                                )
                            )
                        );

                    });
            }


            // NO DESTINATION
            if (!destination) {

                alert(
                    "Please select a destination."
                );

                return;
            }


            const destinationName =
                destination[0];


            // COMPUTER SCIENCE
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


            // LIBRARY
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


            // OTHER LOCATIONS
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

setTimeout(function() {

    map.invalidateSize();

}, 700);
