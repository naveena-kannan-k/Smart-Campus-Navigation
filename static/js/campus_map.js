// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// FINAL CLEAN LEAFLET VERSION
// ============================================================


// ============================================================
// 1. CAMPUS CENTER
// ============================================================

const COLLEGE_CENTER = [8.6988565, 77.739888];


// ============================================================
// 2. CREATE MAP
// ============================================================

const campusMap = L.map("map", {
    zoomControl: true,
    preferCanvas: true
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
).addTo(campusMap);


// ============================================================
// 4. INITIAL VIEW
// ============================================================

campusMap.setView(COLLEGE_CENTER, 18);


// ============================================================
// 5. ALL LOCATIONS
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

    ["History (Tamil & English)",
        8.699699, 77.7407055],

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
// 6. LOCATION MARKERS
// ============================================================

places.forEach(function (place) {

    const marker = L.marker([
        place[1],
        place[2]
    ]).addTo(campusMap);

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
// These are the roads.
// Locations above are NOT changed.
//
// White road
// Round corners
// Round ends
// Connected junctions
// ============================================================

const campusRoads = [

    // ========================================================
    // MAIN GATE → ROUNDABOUT APPROACH
    // ========================================================

    [
        [8.6988565, 77.739888],
        [8.6988500, 77.739950],
        [8.6988800, 77.740020],
        [8.6989300, 77.740080]
    ],


    // ========================================================
    // ROUNDABOUT - WEST / ENTRY
    // ========================================================

    [
        [8.6989300, 77.740080],
        [8.6990000, 77.740030],
        [8.6990700, 77.740070]
    ],


    // ========================================================
    // ROUNDABOUT - TOP
    // ========================================================

    [
        [8.6990700, 77.740070],
        [8.6991300, 77.740140],
        [8.6991350, 77.740230]
    ],


    // ========================================================
    // ROUNDABOUT - EAST
    // ========================================================

    [
        [8.6991350, 77.740230],
        [8.6991000, 77.740300],
        [8.6990300, 77.740330]
    ],


    // ========================================================
    // ROUNDABOUT - SOUTH
    // ========================================================

    [
        [8.6990300, 77.740330],
        [8.6989600, 77.740300],
        [8.6989000, 77.740230],
        [8.6989300, 77.740080]
    ],


    // ========================================================
    // ROUNDABOUT → MAIN CAMPUS ROAD
    // ========================================================

    [
        [8.6990300, 77.740330],
        [8.6990176, 77.7403795],
        [8.6990176, 77.7405807]
    ],


    // ========================================================
    // MAIN CAMPUS ROAD → RIGHT
    // ========================================================

    [
        [8.6990176, 77.7405807],
        [8.6991000, 77.7407600],
        [8.6992000, 77.7409500],
        [8.6993029, 77.7411164],
        [8.6993093, 77.7412170]
    ],


    // ========================================================
    // RIGHT ROAD → EAST
    // ========================================================

    [
        [8.6993093, 77.7412170],
        [8.6995000, 77.7411900],
        [8.6997017, 77.7411231]
    ],


    // ========================================================
    // TOP EAST ROAD
    // ========================================================

    [
        [8.6997017, 77.7411231],
        [8.6996566, 77.7411312],
        [8.6996301, 77.7410064],
        [8.6995903, 77.7408817],
        [8.6996566, 77.7408656]
    ],


    // ========================================================
    // TOP LEFT CONNECTION
    // ========================================================

    [
        [8.6996566, 77.7408656],
        [8.6996076, 77.7407458],
        [8.6996486, 77.7407257]
    ],


    // ========================================================
    // MAIN BLOCK ROAD
    // ========================================================

    [
        [8.6990176, 77.7405807],
        [8.6989500, 77.7406200],
        [8.6988371, 77.7406737],
        [8.6988451, 77.7407140]
    ],


    // ========================================================
    // MANAGEMENT OFFICE ROAD
    // ========================================================

    [
        [8.6988451, 77.7407140],
        [8.6987000, 77.7407600],
        [8.6985889, 77.7408047],
        [8.6985959, 77.7411485]
    ],


    // ========================================================
    // MANAGEMENT ROAD → CENTRAL
    // ========================================================

    [
        [8.6985959, 77.7411485],
        [8.6988000, 77.7411550],
        [8.6990387, 77.7411699],
        [8.6990890, 77.7410841]
    ],


    // ========================================================
    // CENTRAL VERTICAL ROAD
    // ========================================================

    [
        [8.6985959, 77.7411485],
        [8.6985030, 77.7410439],
        [8.6984580, 77.7410251],
        [8.6984527, 77.7411539],
        [8.6984500, 77.7412518],
        [8.6984474, 77.7413336]
    ],


    // ========================================================
    // CENTRAL ROAD → WEST
    // ========================================================

    [
        [8.6984474, 77.7413336],
        [8.6983000, 77.7413400],
        [8.6981822, 77.7413523]
    ],


    // ========================================================
    // CENTRAL → CANTEEN SIDE
    // ========================================================

    [
        [8.6984474, 77.7413336],
        [8.6983500, 77.7415500],
        [8.6981808, 77.7419523]
    ],


    // ========================================================
    // CANTEEN SIDE → EAST
    // ========================================================

    [
        [8.6981808, 77.7419523],
        [8.6980500, 77.7419700],
        [8.6978892, 77.7419738]
    ],


    // ========================================================
    // LOWER ROAD
    // ========================================================

    [
        [8.6978892, 77.7419738],
        [8.6979581, 77.7416304],
        [8.6978812, 77.7416331],
        [8.6978865, 77.7421132],
        [8.6977168, 77.7421159]
    ],


    // ========================================================
    // CANTEEN SHORT ROAD
    // ========================================================

    [
        [8.6980138, 77.7419684],
        [8.6980164, 77.7420757]
    ],


    // ========================================================
    // LIBRARY ROAD
    // ========================================================

    [
        [8.6985667, 77.7400830],
        [8.6985004, 77.7401957],
        [8.6983573, 77.7401796],
        [8.6983229, 77.7401688]
    ],


    // ========================================================
    // LIBRARY SIDE CONNECTION
    // ========================================================

    [
        [8.6985667, 77.7400830],
        [8.6984315, 77.7400991],
        [8.6984288, 77.7400723]
    ],


    // ========================================================
    // LIBRARY SIDE → LOWER WEST
    // ========================================================

    [
        [8.6984315, 77.7405658],
        [8.6980842, 77.7405819],
        [8.6980709, 77.7404075]
    ],


    // ========================================================
    // HOSTEL ROAD
    // ========================================================

    [
        [8.6987709, 77.7425364],
        [8.6987656, 77.7426759]
    ],


    // ========================================================
    // UPPER BUILDING CONNECTION
    // ========================================================

    [
        [8.6994271, 77.7402956],
        [8.6995835, 77.7404726]
    ]
];


// ============================================================
// 8. DRAW CAMPUS ROADS
//
// ONLY ONE WHITE ROAD LAYER
// NO GREY DOUBLE ROAD
// ============================================================

campusRoads.forEach(function (road) {

    L.polyline(road, {

        color: "#ffffff",

        weight: 11,

        opacity: 0.98,

        lineCap: "round",

        lineJoin: "round",

        smoothFactor: 1,

        interactive: false,

        bubblingMouseEvents: false

    }).addTo(campusMap);

});


// ============================================================
// 9. NAVIGATION LAYERS
// ============================================================

let navigationLayers = [];


// ============================================================
// 10. CLEAR NAVIGATION
// ============================================================

function clearNavigation() {

    navigationLayers.forEach(function (layer) {

        if (campusMap.hasLayer(layer)) {

            campusMap.removeLayer(layer);

        }

    });

    navigationLayers = [];
}


// ============================================================
// 11. FIXED NAVIGATION ROUTES
//
// These routes follow the campus road network.
// ============================================================


// ============================================================
// LIBRARY
//
// Main Gate
// ↓
// Roundabout
// ↓
// Main Road
// ↓
// Management Office Road
// ↓
// LEFT
// ↓
// Library
// ============================================================

const libraryRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // ENTER ROUNDABOUT
    [8.6988500, 77.739950],
    [8.6988800, 77.740020],
    [8.6989300, 77.740080],

    // ROUNDABOUT
    [8.6990000, 77.740030],
    [8.6990700, 77.740070],
    [8.6991300, 77.740140],
    [8.6991350, 77.740230],
    [8.6991000, 77.740300],
    [8.6990300, 77.740330],

    // MAIN ROAD
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // MANAGEMENT SIDE
    [8.6989500, 77.7406200],
    [8.6988371, 77.7406737],
    [8.6988451, 77.7407140],

    // MANAGEMENT OFFICE ROAD
    [8.6987000, 77.7407600],
    [8.6985889, 77.7408047],

    // LEFT / LIBRARY CONNECTION
    [8.6985667, 77.7400830],
    [8.6985004, 77.7401957],
    [8.6983573, 77.7401796],

    // LIBRARY
    [8.6983229, 77.7401688]
];


// ============================================================
// COMPUTER SCIENCE
//
// Main Gate
// ↓
// Roundabout
// ↓
// Main Road
// ↓
// Right
// ↓
// Management/Central Road
// ↓
// Canteen Side
// ↓
// Down
// ↓
// Computer Science
// ============================================================

const computerScienceRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // ROUNDABOUT ENTRY
    [8.6988500, 77.739950],
    [8.6988800, 77.740020],
    [8.6989300, 77.740080],

    // ROUNDABOUT
    [8.6990000, 77.740030],
    [8.6990700, 77.740070],
    [8.6991300, 77.740140],
    [8.6991350, 77.740230],
    [8.6991000, 77.740300],
    [8.6990300, 77.740330],

    // MAIN ROAD
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // RIGHT TURN
    [8.6991000, 77.7407600],
    [8.6992000, 77.7409500],
    [8.6993029, 77.7411164],
    [8.6993093, 77.7412170],

    // LEFT TURN
    [8.6992000, 77.7411800],
    [8.6990387, 77.7411699],

    // MANAGEMENT ROAD
    [8.6988000, 77.7411550],
    [8.6985959, 77.7411485],

    // CENTRAL ROAD
    [8.6985030, 77.7410439],
    [8.6984580, 77.7410251],
    [8.6984527, 77.7411539],
    [8.6984500, 77.7412518],
    [8.6984474, 77.7413336],

    // CANTEEN SIDE
    [8.6983500, 77.7415500],
    [8.6981808, 77.7419523],
    [8.6980500, 77.7419700],
    [8.6978892, 77.7419738],

    // DOWN ROAD
    [8.6979581, 77.7416304],
    [8.6978812, 77.7416331],
    [8.6978865, 77.7421132],
    [8.6977168, 77.7421159],

    // COMPUTER SCIENCE DESTINATION
    [8.6975920, 77.7420998]
];


// ============================================================
// 12. ARROW ICON
// ============================================================

function createNavigationArrow(angle) {

    return L.divIcon({

        className: "campus-navigation-arrow",

        html:
            '<div style="' +
            'width:0;' +
            'height:0;' +
            'border-left:7px solid transparent;' +
            'border-right:7px solid transparent;' +
            'border-bottom:17px solid #1677ff;' +
            'filter:drop-shadow(0 1px 2px rgba(0,0,0,.45));' +
            'transform:rotate(' + angle + 'deg);' +
            'transform-origin:center;' +
            '"></div>',

        iconSize: [22, 22],

        iconAnchor: [11, 11]

    });
}


// ============================================================
// 13. ANGLE
// ============================================================

function getNavigationAngle(a, b) {

    const dx = b[1] - a[1];

    const dy = b[0] - a[0];

    return Math.atan2(dx, dy) * 180 / Math.PI;
}


// ============================================================
// 14. DRAW NAVIGATION
// ============================================================

function drawNavigation(route, destinationName) {

    clearNavigation();


    // ========================================================
    // WHITE OUTLINE
    // ========================================================

    const routeOutline = L.polyline(route, {

        color: "#ffffff",

        weight: 12,

        opacity: 1,

        lineCap: "round",

        lineJoin: "round",

        smoothFactor: 1,

        interactive: false

    }).addTo(campusMap);


    // ========================================================
    // BLUE NAVIGATION LINE
    // ========================================================

    const blueRoute = L.polyline(route, {

        color: "#1677ff",

        weight: 6,

        opacity: 0.98,

        lineCap: "round",

        lineJoin: "round",

        smoothFactor: 1,

        interactive: false

    }).addTo(campusMap);


    navigationLayers.push(routeOutline);

    navigationLayers.push(blueRoute);


    // ========================================================
    // NAVIGATION ARROWS
    // ========================================================

    for (
        let i = 1;
        i < route.length;
        i += 2
    ) {

        const angle = getNavigationAngle(
            route[i - 1],
            route[i]
        );


        const arrow = L.marker(
            route[i],
            {
                icon: createNavigationArrow(angle),

                interactive: false,

                zIndexOffset: 3000
            }
        ).addTo(campusMap);


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
        ).addTo(campusMap);


    navigationLayers.push(startMarker);


    // ========================================================
    // DESTINATION MARKER
    // ========================================================

    const destination =
        places.find(function (place) {

            return place[0] === destinationName;

        });


    if (destination) {

        const destinationMarker =
            L.marker([
                destination[1],
                destination[2]
            ])
            .addTo(campusMap)
            .bindPopup(
                "<b>📍 " +
                destination[0] +
                "</b>"
            );


        navigationLayers.push(
            destinationMarker
        );

        destinationMarker.openPopup();

    }


    // ========================================================
    // FIT ROUTE
    // ========================================================

    campusMap.fitBounds(
        blueRoute.getBounds(),
        {
            padding: [60, 60]
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
            "🔄 Follow Roundabout" +
            "<br>↓" +
            "➡️ Follow Campus Road" +
            "<br>↓" +
            "↪️ Follow the correct turn" +
            "<br>↓" +
            "➡️ Continue straight" +
            "<br>↓" +
            "📍 <b>" +
            destinationName +
            "</b>";

    }

}


// ============================================================
// 15. DESTINATION SEARCH
// ============================================================

const destinationInput =
    document.getElementById("destination");


const resultsBox =
    document.getElementById("results");


let selectedPlace = null;


if (
    destinationInput &&
    resultsBox
) {

    destinationInput.addEventListener(
        "input",
        function () {

            const text =
                destinationInput.value
                .toLowerCase()
                .trim();


            selectedPlace = null;

            resultsBox.innerHTML = "";


            if (!text) {

                return;

            }


            places.forEach(function (place) {

                const name =
                    place[0]
                    .toLowerCase();


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
                        "📍 " +
                        place[0];


                    result.addEventListener(
                        "click",
                        function () {

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
// 16. NAVIGATE BUTTON
// ============================================================

const navigateBtn =
    document.getElementById(
        "navigateBtn"
    );


if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function () {

            if (!destinationInput) {

                return;

            }


            let destination =
                selectedPlace;


            // =================================================
            // FIND DESTINATION
            // =================================================

            if (!destination) {

                const text =
                    destinationInput.value
                    .toLowerCase()
                    .trim();


                destination =
                    places.find(
                        function (place) {

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


            // =================================================
            // NO DESTINATION
            // =================================================

            if (!destination) {

                alert(
                    "Please select a destination."
                );

                return;

            }


            const destinationName =
                destination[0];


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
            // OTHER LOCATIONS
            // =================================================

            clearNavigation();


            const destinationMarker =
                L.marker([
                    destination[1],
                    destination[2]
                ])
                .addTo(campusMap)
                .bindPopup(
                    "<b>📍 " +
                    destinationName +
                    "</b>"
                )
                .openPopup();


            navigationLayers.push(
                destinationMarker
            );


            campusMap.setView(
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
// 17. GO TO COLLEGE
// ============================================================

function goToCollege() {

    clearNavigation();

    campusMap.setView(
        COLLEGE_CENTER,
        18
    );

}


// ============================================================
// 18. MAP SIZE FIX
// ============================================================

setTimeout(
    function () {

        campusMap.invalidateSize();

    },
    800
);


// ============================================================
// 19. WINDOW RESIZE FIX
// ============================================================

window.addEventListener(
    "resize",
    function () {

        campusMap.invalidateSize();

    }
);
