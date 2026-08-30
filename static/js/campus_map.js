// ============================================================
// SARAH TUCKER COLLEGE
// CAMPUS MAP + CLEAN ROADS
// ============================================================

// ------------------------------------------------------------
// 1. MAP CENTER
// ------------------------------------------------------------

const COLLEGE_CENTER = [8.6988565, 77.739888];


// ------------------------------------------------------------
// 2. CREATE MAP
// ------------------------------------------------------------

const map = L.map("map");

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

map.setView(COLLEGE_CENTER, 18);


// ------------------------------------------------------------
// 3. YOUR EXISTING LOCATIONS
// IMPORTANT: COORDINATES ARE NOT CHANGED
// ------------------------------------------------------------

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
    ["English (SF), B.Com (SF), Computer Science, Food Science", 8.697592, 77.7420998],
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


// ------------------------------------------------------------
// 4. ADD LOCATIONS
// ------------------------------------------------------------

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
        "<b>" + place[0] + "</b>"
    );
});


// ------------------------------------------------------------
// 5. YOUR ORIGINAL ROAD LINES
// IMPORTANT:
// These are the existing road coordinates.
// LOCATIONS ARE NOT CHANGED.
// ------------------------------------------------------------

const roads = [

    // Line 44
    [
        [8.6988374, 77.7398879],
        [8.6988400, 77.7400810]
    ],

    // Line 45
    [
        [8.6988479, 77.7399128],
        [8.6988585, 77.7400764],
        [8.6990176, 77.7403795],
        [8.6990176, 77.7405807],
        [8.6991714, 77.7408516],
        [8.6993411, 77.7407577]
    ],

    // Line 48
    [
        [8.6990121, 77.7405504],
        [8.6992819, 77.7410775],
        [8.6994118, 77.7409944]
    ],

    // Line 50
    [
        [8.6990176, 77.7405807],
        [8.6993029, 77.7411164],
        [8.6993093, 77.7412170],
        [8.6997017, 77.7411231]
    ],

    // Line 51
    [
        [8.6996566, 77.7411312],
        [8.6996301, 77.7410064],
        [8.6995903, 77.7408817],
        [8.6996566, 77.7408656]
    ],

    // Line 53
    [
        [8.6996566, 77.7408656],
        [8.6996076, 77.7407458],
        [8.6996486, 77.7407257]
    ],

    // Line 55
    [
        [8.6981822, 77.7413523],
        [8.6984474, 77.7413336],
        [8.6984500, 77.7412518],
        [8.6984527, 77.7411539],
        [8.6986489, 77.7411431],
        [8.6986515, 77.7412424]
    ],

    // Line 56
    [
        [8.6984527, 77.7411539],
        [8.6985030, 77.7410439],
        [8.6984580, 77.7410251]
    ],

    // Line 58
    [
        [8.6985959, 77.7411485],
        [8.6990387, 77.7411699],
        [8.6990890, 77.7410841]
    ],

    // Line 59
    [
        [8.6990121, 77.7405504],
        [8.6988371, 77.7406737],
        [8.6988451, 77.7407140]
    ],

    // Line 65
    [
        [8.6979528, 77.7405736],
        [8.6979581, 77.7416304],
        [8.6978812, 77.7416331],
        [8.6978865, 77.7421132],
        [8.6977168, 77.7421159]
    ],

    // Line 67
    [
        [8.6981808, 77.7419523],
        [8.6978892, 77.7419738]
    ],

    // Line 68
    [
        [8.6980138, 77.7419684],
        [8.6980164, 77.7420757]
    ],

    // Line 71
    [
        [8.6985667, 77.7400830],
        [8.6984315, 77.7400991],
        [8.6984288, 77.7400723]
    ],

    // Line 72
    [
        [8.6985667, 77.7400830],
        [8.6985004, 77.7401957],
        [8.6983573, 77.7401796]
    ],

    // Line 73
    [
        [8.6984315, 77.7405658],
        [8.6980842, 77.7405819],
        [8.6980709, 77.7404075]
    ],

    // Line 74
    [
        [8.6980842, 77.7405819],
        [8.6980815, 77.7406355]
    ],

    // Line 75
    [
        [8.6987709, 77.7425364],
        [8.6987656, 77.7426759]
    ],

    // Line 76
    [
        [8.6994271, 77.7402956],
        [8.6995835, 77.7404726]
    ]
];


// ------------------------------------------------------------
// 6. CLEAN ROAD RENDERING
//
// Outer white border
// Inner grey road
// Round joins
// Round ends
// ------------------------------------------------------------

roads.forEach(function(coords) {

    // WHITE ROAD BORDER
    L.polyline(
        coords,
        {
            color: "#ffffff",
            weight: 18,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            smoothFactor: 1,
            interactive: false
        }
    ).addTo(map);


    // GREY ROAD SURFACE
    L.polyline(
        coords,
        {
            color: "#8f8f8f",
            weight: 12,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            smoothFactor: 1,
            interactive: false
        }
    ).addTo(map);

});


// ------------------------------------------------------------
// 7. MAIN GATE → COMPUTER SCIENCE
//
// This route uses the campus road direction.
// No garden shortcut.
// No parking shortcut.
// ------------------------------------------------------------

const computerScienceRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // Main road
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],

    // STRAIGHT
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // RIGHT TURN
    [8.6993029, 77.7411164],

    // LEFT / MANAGEMENT SIDE
    [8.6990387, 77.7411699],
    [8.6985959, 77.7411485],

    // CONNECT TO LOWER CAMPUS ROAD
    [8.6985030, 77.7410439],
    [8.6984580, 77.7410251],

    // CANTEEN SIDE
    [8.6984527, 77.7411539],
    [8.6984500, 77.7412518],
    [8.6984474, 77.7413336],
    [8.6981822, 77.7413523],

    // TURN TOWARDS CANTEEN
    [8.6981808, 77.7419523],
    [8.6978892, 77.7419738],

    // DOWN ROAD
    [8.6979581, 77.7416304],
    [8.6978812, 77.7416331],
    [8.6978865, 77.7421132],
    [8.6977168, 77.7421159],

    // COMPUTER SCIENCE
    [8.6975920, 77.7420998]
];


// ------------------------------------------------------------
// 8. LIBRARY ROUTE
// ------------------------------------------------------------

const libraryRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // MAIN ROAD
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],

    // LIBRARY SIDE ROAD
    [8.6985667, 77.7400830],
    [8.6985004, 77.7401957],
    [8.6983573, 77.7401796],

    // LIBRARY
    [8.6983229, 77.7401688]
];


// ------------------------------------------------------------
// 9. NAVIGATION LAYERS
// ------------------------------------------------------------

let navigationLayers = [];


// ------------------------------------------------------------
// 10. CLEAR NAVIGATION
// ------------------------------------------------------------

function clearNavigation() {

    navigationLayers.forEach(function(layer) {

        map.removeLayer(layer);

    });

    navigationLayers = [];
}


// ------------------------------------------------------------
// 11. CREATE BLUE ARROW
// ------------------------------------------------------------

function createArrowIcon(angle) {

    return L.divIcon({

        className: "",

        html:
            '<div style="' +
            'width:30px;' +
            'height:30px;' +
            'display:flex;' +
            'align-items:center;' +
            'justify-content:center;' +
            'font-size:24px;' +
            'font-weight:bold;' +
            'color:#1677ff;' +
            'text-shadow:0 0 3px #ffffff;' +
            'transform:rotate(' + angle + 'deg);' +
            '">' +
            '➤' +
            '</div>',

        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}


// ------------------------------------------------------------
// 12. ARROW ANGLE
// ------------------------------------------------------------

function getAngle(a, b) {

    const dx = b[1] - a[1];
    const dy = b[0] - a[0];

    return Math.atan2(dx, dy) * 180 / Math.PI;
}


// ------------------------------------------------------------
// 13. DRAW BLUE NAVIGATION
// ------------------------------------------------------------

function drawNavigation(route, destinationName) {

    clearNavigation();


    // WHITE OUTLINE
    const outline = L.polyline(
        route,
        {
            color: "#ffffff",
            weight: 13,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            smoothFactor: 1,
            interactive: false
        }
    ).addTo(map);


    // BLUE ROUTE
    const blueLine = L.polyline(
        route,
        {
            color: "#1677ff",
            weight: 7,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            smoothFactor: 1,
            interactive: false
        }
    ).addTo(map);


    navigationLayers.push(outline);
    navigationLayers.push(blueLine);


    // BLUE ARROWS
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


    // START POINT
    const startPoint = L.circleMarker(
        route[0],
        {
            radius: 8,
            color: "#ffffff",
            weight: 3,
            fillColor: "#1677ff",
            fillOpacity: 1
        }
    ).addTo(map);

    navigationLayers.push(startPoint);


    // DESTINATION
    const destination = places.find(
        function(place) {

            return place[0] === destinationName;

        }
    );


    if (destination) {

        const destinationMarker = L.marker(
            [
                destination[1],
                destination[2]
            ]
        )
        .addTo(map)
        .bindPopup(
            "<b>📍 " +
            destination[0] +
            "</b>"
        )
        .openPopup();

        navigationLayers.push(
            destinationMarker
        );
    }


    // FIT ROUTE
    map.fitBounds(
        blueLine.getBounds(),
        {
            padding: [60, 60]
        }
    );


    // ROUTE INFO
    const info =
        document.getElementById("routeInfo");

    if (info) {

        info.style.display = "block";

        info.innerHTML =
            "<b>🔵 Navigation Started</b>" +
            "<br><br>" +
            "🚪 Main Gate" +
            "<br>↓" +
            "<br>➡️ Follow the campus road" +
            "<br>↪️ Turn Right" +
            "<br>↓" +
            "<br>↩️ Turn Left" +
            "<br>↓" +
            "<br>🍽️ Canteen side" +
            "<br>↓" +
            "<br>📍 <b>" +
            destinationName +
            "</b>";
    }
}


// ------------------------------------------------------------
// 14. DESTINATION SEARCH
// ------------------------------------------------------------

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


                const match =
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
                    );


                if (match) {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.className = "result";

                    item.textContent =
                        "📍 " + place[0];


                    item.addEventListener(
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


                    resultsBox.appendChild(item);
                }

            });

        }
    );
}


// ------------------------------------------------------------
// 15. NAVIGATE BUTTON
// ------------------------------------------------------------

const navigateBtn =
    document.getElementById(
        "navigateBtn"
    );


if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function() {

            let destination =
                selectedPlace;


            // SEARCH IF USER DID NOT CLICK RESULT
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
                        }
                    );
            }


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


            // LIBRARY
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


            // OTHER LOCATION
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


// ------------------------------------------------------------
// 16. LOCATION BUTTON
// ------------------------------------------------------------

function goToCollege() {

    map.setView(
        COLLEGE_CENTER,
        18
    );

}


// ------------------------------------------------------------
// 17. FINAL MAP SIZE FIX
// ------------------------------------------------------------

setTimeout(function() {

    map.invalidateSize();

}, 700);
