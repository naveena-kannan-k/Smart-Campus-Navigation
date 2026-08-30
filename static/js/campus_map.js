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
// 3. OPENSTREETMAP
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 4. CAMPUS VIEW
// ============================================================

map.setView(COLLEGE_CENTER, 18);


// ============================================================
// 5. LOCATIONS
// IMPORTANT: DO NOT CHANGE
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

    marker.bindTooltip(place[0], {
        direction: "top",
        sticky: true
    });

    marker.bindPopup(
        "<b>📍 " + place[0] + "</b>"
    );
});


// ============================================================
// 7. CAMPUS INTERNAL ROAD NETWORK
// ============================================================
//
// IMPORTANT:
//
// These are ONLY the manually defined campus paths.
// Locations are NOT changed.
//
// Existing OSM roads remain visible underneath.
// ============================================================

const roads = [

    // --------------------------------------------------------
    // MAIN GATE → MAIN ROAD
    // --------------------------------------------------------

    [
        [8.6988565, 77.739888],
        [8.6988479, 77.7399128],
        [8.6988585, 77.7400764],
        [8.6990176, 77.7403795],
        [8.6990176, 77.7405807]
    ],


    // --------------------------------------------------------
    // MAIN ROAD → MANAGEMENT / MAIN BLOCK
    // --------------------------------------------------------

    [
        [8.6990176, 77.7405807],
        [8.6990121, 77.7405504],
        [8.6988371, 77.7406737],
        [8.6988451, 77.7407140]
    ],


    // --------------------------------------------------------
    // MAIN ROAD → RIGHT SIDE
    // --------------------------------------------------------

    [
        [8.6990176, 77.7405807],
        [8.6993029, 77.7411164],
        [8.6993093, 77.7412170],
        [8.6997017, 77.7411231]
    ],


    // --------------------------------------------------------
    // UPPER RIGHT ROAD
    // --------------------------------------------------------

    [
        [8.6993029, 77.7411164],
        [8.6992819, 77.7410775],
        [8.6994118, 77.7409944]
    ],


    // --------------------------------------------------------
    // TOP ROAD
    // --------------------------------------------------------

    [
        [8.6997017, 77.7411231],
        [8.6996566, 77.7411312],
        [8.6996301, 77.7410064],
        [8.6995903, 77.7408817],
        [8.6996566, 77.7408656]
    ],


    // --------------------------------------------------------
    // TOP LEFT ROAD
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
    // CENTRAL TURN
    // --------------------------------------------------------

    [
        [8.6984527, 77.7411539],
        [8.6985030, 77.7410439],
        [8.6984580, 77.7410251]
    ],


    // --------------------------------------------------------
    // MANAGEMENT SIDE
    // --------------------------------------------------------

    [
        [8.6985959, 77.7411485],
        [8.6990387, 77.7411699],
        [8.6990890, 77.7410841]
    ],


    // --------------------------------------------------------
    // CENTRAL → CANTEEN SIDE
    // --------------------------------------------------------

    [
        [8.6984474, 77.7413336],
        [8.6981808, 77.7419523],
        [8.6978892, 77.7419738]
    ],


    // --------------------------------------------------------
    // CANTEEN SIDE → DOWN
    // --------------------------------------------------------

    [
        [8.6978892, 77.7419738],
        [8.6979581, 77.7416304],
        [8.6978812, 77.7416331],
        [8.6978865, 77.7421132],
        [8.6977168, 77.7421159]
    ],


    // --------------------------------------------------------
    // CANTEEN SHORT ROAD
    // --------------------------------------------------------

    [
        [8.6980138, 77.7419684],
        [8.6980164, 77.7420757]
    ],


    // --------------------------------------------------------
    // LIBRARY ROAD
    // --------------------------------------------------------

    [
        [8.6985667, 77.7400830],
        [8.6985004, 77.7401957],
        [8.6983573, 77.7401796],
        [8.6983229, 77.7401688]
    ],


    // --------------------------------------------------------
    // LIBRARY SIDE
    // --------------------------------------------------------

    [
        [8.6985667, 77.7400830],
        [8.6984315, 77.7400991],
        [8.6984288, 77.7400723]
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
    // HOSTEL SIDE
    // --------------------------------------------------------

    [
        [8.6987709, 77.7425364],
        [8.6987656, 77.7426759]
    ]

];


// ============================================================
// 8. DRAW CAMPUS ROADS
// ============================================================

const campusRoadLayer =
    L.layerGroup().addTo(map);


// ============================================================
// ROAD BORDER
// ============================================================

roads.forEach(function(coords) {

    L.polyline(coords, {

        color: "#d0d0d0",

        weight: 17,

        opacity: 1,

        lineCap: "round",

        lineJoin: "round",

        smoothFactor: 1,

        interactive: false

    }).addTo(campusRoadLayer);

});


// ============================================================
// WHITE ROAD SURFACE
// ============================================================

roads.forEach(function(coords) {

    L.polyline(coords, {

        color: "#ffffff",

        weight: 12,

        opacity: 1,

        lineCap: "round",

        lineJoin: "round",

        smoothFactor: 1,

        interactive: false

    }).addTo(campusRoadLayer);

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
// 11. COMPUTER SCIENCE ROUTE
// ============================================================
//
// Main Gate
//     ↓
// Straight
//     ↓
// Right
//     ↓
// Left
//     ↓
// Management/Main Block side
//     ↓
// Canteen side
//     ↓
// Down
//     ↓
// Computer Science
//
// NO PARKING ROUTE
// NO GARDEN SHORTCUT
// ============================================================

const computerScienceRoute = [

    [8.6988565, 77.739888],

    // MAIN GATE → STRAIGHT
    [8.6988479, 77.7399128],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // RIGHT
    [8.6993029, 77.7411164],
    [8.6993093, 77.7412170],

    // LEFT
    [8.6985959, 77.7411485],

    // MANAGEMENT SIDE
    [8.6985030, 77.7410439],
    [8.6984580, 77.7410251],

    // CENTRAL ROAD
    [8.6984527, 77.7411539],
    [8.6984500, 77.7412518],
    [8.6984474, 77.7413336],

    // CANTEEN SIDE
    [8.6981808, 77.7419523],
    [8.6978892, 77.7419738],

    // DOWN
    [8.6979581, 77.7416304],
    [8.6978812, 77.7416331],
    [8.6978865, 77.7421132],
    [8.6977168, 77.7421159],

    // COMPUTER SCIENCE
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

        className: "navigation-arrow",

        html:
            '<div style="' +
            'width:0;' +
            'height:0;' +
            'border-left:10px solid transparent;' +
            'border-right:10px solid transparent;' +
            'border-bottom:22px solid #1677ff;' +
            'filter:drop-shadow(0 1px 2px rgba(0,0,0,.45));' +
            'transform:rotate(' + angle + 'deg);' +
            'transform-origin:center;' +
            '"></div>',

        iconSize: [25, 25],

        iconAnchor: [12, 12]
    });
}


// ============================================================
// 14. ARROW DIRECTION
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


    // ========================================================
    // WHITE OUTLINE
    // ========================================================

    const whiteRoute =
        L.polyline(route, {

            color: "#ffffff",

            weight: 12,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            smoothFactor: 1,

            interactive: false,

            zIndexOffset: 1000

        }).addTo(map);


    // ========================================================
    // BLUE ROUTE
    // ========================================================

    const blueRoute =
        L.polyline(route, {

            color: "#1677ff",

            weight: 6,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            smoothFactor: 1,

            interactive: false,

            zIndexOffset: 1100

        }).addTo(map);


    navigationLayers.push(whiteRoute);
    navigationLayers.push(blueRoute);


    // ========================================================
    // BLUE DIRECTION ARROWS
    // ========================================================

    for (
        let i = 1;
        i < route.length;
        i += 2
    ) {

        const angle =
            getAngle(
                route[i - 1],
                route[i]
            );


        const arrow =
            L.marker(

                route[i],

                {
                    icon:
                        createArrowIcon(angle),

                    interactive: false,

                    zIndexOffset: 3000
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

                fillOpacity: 1,

                zIndexOffset: 2500

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
            padding: [60, 60]
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

        info.style.display = "block";


        info.innerHTML =

            "<b>🔵 Navigation Started</b>" +

            "<br><br>" +

            "🚪 Main Gate" +

            "<br>↓" +

            "➡️ Go straight" +

            "<br>↓" +

            "↪️ Turn right" +

            "<br>↓" +

            "↩️ Turn left" +

            "<br>↓" +

            "🏫 Main Block / Management side" +

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
// 16. SEARCH
// ============================================================

const destinationInput =
    document.getElementById(
        "destination"
    );


const resultsBox =
    document.getElementById(
        "results"
    );


let selectedPlace = null;


if (
    destinationInput &&
    resultsBox
) {

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


            places.forEach(
                function(place) {

                    const name =
                        place[0]
                        .toLowerCase();


                    const match =

                        name.includes(text)

                        ||

                        (
                            text === "cs" &&
                            name.includes(
                                "computer science"
                            )
                        )

                        ||

                        (
                            text.includes(
                                "computer science"
                            ) &&
                            name.includes(
                                "computer science"
                            )
                        )

                        ||

                        (
                            text.includes(
                                "library"
                            ) &&
                            name.includes(
                                "library"
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

                }
            );

        }
    );

}


// ============================================================
// 17. NAVIGATE BUTTON
// ============================================================

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


            // ------------------------------------------------
            // FIND DESTINATION FROM TEXT
            // ------------------------------------------------

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

                                name.includes(text)

                                ||

                                (
                                    text === "cs" &&
                                    name.includes(
                                        "computer science"
                                    )
                                )

                                ||

                                (
                                    text.includes(
                                        "computer science"
                                    ) &&
                                    name.includes(
                                        "computer science"
                                    )
                                )

                                ||

                                (
                                    text.includes(
                                        "library"
                                    ) &&
                                    name.includes(
                                        "library"
                                    )
                                )

                            );

                        }
                    );

            }


            // ------------------------------------------------
            // NO DESTINATION
            // ------------------------------------------------

            if (!destination) {

                alert(
                    "Please select a destination."
                );

                return;

            }


            const destinationName =
                destination[0];


            // ------------------------------------------------
            // COMPUTER SCIENCE
            // ------------------------------------------------

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


            // ------------------------------------------------
            // LIBRARY
            // ------------------------------------------------

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


            // ------------------------------------------------
            // OTHER LOCATIONS
            // ------------------------------------------------

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
// 19. MAP SIZE FIX
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    700
);
