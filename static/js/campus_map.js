```javascript
// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// CORRECTED VERSION
//
// IMPORTANT:
// - LOCATION COORDINATES ARE NOT CHANGED
// - ORIGINAL ROAD COORDINATES ARE NOT CHANGED
// - ROADS ARE DRAWN CLEANLY
// - NAVIGATION FOLLOWS CAMPUS ROADS
// - PARKING / GARDEN SHORTCUT IS NOT USED
// ============================================================


// ============================================================
// 1. COLLEGE CENTER
// ============================================================

const COLLEGE_CENTER = [
    8.6986,
    77.74165
];


// ============================================================
// 2. LOCATIONS
// ============================================================

const places = [
    {
        name: "Botony",
        lat: 8.6984368,
        lng: 77.7409389,
        icon: "🏫"
    },

    {
        name: "Physics(regular)",
        lat: 8.6989193,
        lng: 77.7407981,
        icon: "🏫"
    },

    {
        name: "Chemistry",
        lat: 8.6991182,
        lng: 77.7410046,
        icon: "🏫"
    },

    {
        name: "Zoology&B.Com(Aided)",
        lat: 8.6987364,
        lng: 77.7413077,
        icon: "🏫"
    },

    {
        name: "Old Auditorium",
        lat: 8.6980713,
        lng: 77.7407428,
        icon: "🏛️"
    },

    {
        name: "Library",
        lat: 8.6983229,
        lng: 77.7401688,
        icon: "📚"
    },

    {
        name: "Parking Area",
        lat: 8.6984369,
        lng: 77.7400521,
        icon: "🅿️"
    },

    {
        name: "Tamil, English(regular), Economics",
        lat: 8.6980622,
        lng: 77.7403781,
        icon: "🏫"
    },

    {
        name: "Toilet",
        lat: 8.6977444,
        lng: 77.741516,
        icon: "🚻"
    },

    {
        name: "English(sf), B. Com(sf),Computer Science, Food Science",
        lat: 8.697592,
        lng: 77.7420998,
        icon: "🏫"
    },

    {
        name: "Sports Room",
        lat: 8.698168,
        lng: 77.7421669,
        icon: "🚪"
    },

    {
        name: "Canteen",
        lat: 8.6980195,
        lng: 77.7421696,
        icon: "🍽️"
    },

    {
        name: "Play Ground",
        lat: 8.698729,
        lng: 77.7418037,
        icon: "⚽"
    },

    {
        name: "Hostel",
        lat: 8.6987209,
        lng: 77.7427011,
        icon: "🏠"
    },

    {
        name: "New Auditorium",
        lat: 8.699646,
        lng: 77.7406171,
        icon: "🏛️"
    },

    {
        name: "History(Tamil&English)",
        lat: 8.699699,
        lng: 77.7407055,
        icon: "🏫"
    },

    {
        name: "Nano Science",
        lat: 8.6996354,
        lng: 77.7404803,
        icon: "🏫"
    },

    {
        name: "Maths",
        lat: 8.699479,
        lng: 77.740668,
        icon: "🏫"
    },

    {
        name: "Physics(sf)",
        lat: 8.6994551,
        lng: 77.740947,
        icon: "🏫"
    },

    {
        name: "BCA",
        lat: 8.6997309,
        lng: 77.7409014,
        icon: "🏫"
    },

    {
        name: "MCA",
        lat: 8.6997653,
        lng: 77.7410918,
        icon: "🏫"
    },

    {
        name: "Main Gate",
        lat: 8.6988565,
        lng: 77.739888,
        icon: "🚪"
    },

    {
        name: "NCC Room",
        lat: 8.6990958,
        lng: 77.7422827,
        icon: "🚪"
    },

    {
        name: "principal office",
        lat: 8.6988395,
        lng: 77.7408101,
        icon: "🏢"
    },

    {
        name: "Management office",
        lat: 8.6985889,
        lng: 77.7408047,
        icon: "🏢"
    }
];


// ============================================================
// 3. ORIGINAL ROAD DATA
// ============================================================

const roads = [

    {
        name: "Line 44",
        coords: [
            [8.6988374, 77.7398879],
            [8.69884, 77.740081]
        ]
    },

    {
        name: "Line 45",
        coords: [
            [8.6988479, 77.7399128],
            [8.6988585, 77.7400764],
            [8.6990176, 77.7403795],
            [8.6990176, 77.7405807],
            [8.6991714, 77.7408516],
            [8.6993411, 77.7407577]
        ]
    },

    {
        name: "Line 48",
        coords: [
            [8.6990121, 77.7405504],
            [8.6992819, 77.7410775],
            [8.6994118, 77.7409944]
        ]
    },

    {
        name: "Line 50",
        coords: [
            [8.6990176, 77.7405807],
            [8.6993029, 77.7411164],
            [8.6993093, 77.741217],
            [8.6997017, 77.7411231]
        ]
    },

    {
        name: "Line 51",
        coords: [
            [8.6996566, 77.7411312],
            [8.6996301, 77.7410064],
            [8.6995903, 77.7408817],
            [8.6996566, 77.7408656]
        ]
    },

    {
        name: "Line 53",
        coords: [
            [8.6996566, 77.7408656],
            [8.6996076, 77.7407458],
            [8.6996486, 77.7407257]
        ]
    },

    {
        name: "Line 55",
        coords: [
            [8.6981822, 77.7413523],
            [8.6984474, 77.7413336],
            [8.69845, 77.7412518],
            [8.6984527, 77.7411539],
            [8.6986489, 77.7411431],
            [8.6986515, 77.7412424]
        ]
    },

    {
        name: "Line 56",
        coords: [
            [8.6984527, 77.7411539],
            [8.698503, 77.7410439],
            [8.698458, 77.7410251]
        ]
    },

    {
        name: "Line 58",
        coords: [
            [8.6985959, 77.7411485],
            [8.6990387, 77.7411699],
            [8.699089, 77.7410841]
        ]
    },

    {
        name: "Line 59",
        coords: [
            [8.6990121, 77.7405504],
            [8.6988371, 77.7406737],
            [8.6988451, 77.740714]
        ]
    },

    {
        name: "Line 65",
        coords: [
            [8.6979528, 77.7405736],
            [8.6979581, 77.7416304],
            [8.6978812, 77.7416331],
            [8.6978865, 77.7421132],
            [8.6977168, 77.7421159]
        ]
    },

    {
        name: "Line 67",
        coords: [
            [8.6981808, 77.7419523],
            [8.6978892, 77.7419738]
        ]
    },

    {
        name: "Line 68",
        coords: [
            [8.6980138, 77.7419684],
            [8.6980164, 77.7420757]
        ]
    },

    {
        name: "Line 71",
        coords: [
            [8.6985667, 77.740083],
            [8.6984315, 77.7400991],
            [8.6984288, 77.7400723]
        ]
    },

    {
        name: "Line 72",
        coords: [
            [8.6985667, 77.740083],
            [8.6985004, 77.7401957],
            [8.6983573, 77.7401796]
        ]
    },

    {
        name: "Line 73",
        coords: [
            [8.6984315, 77.7405658],
            [8.6980842, 77.7405819],
            [8.6980709, 77.7404075]
        ]
    },

    {
        name: "Line 74",
        coords: [
            [8.6980842, 77.7405819],
            [8.6980815, 77.7406355]
        ]
    },

    {
        name: "Line 75",
        coords: [
            [8.6987709, 77.7425364],
            [8.6987656, 77.7426759]
        ]
    },

    {
        name: "Line 76",
        coords: [
            [8.6994271, 77.7402956],
            [8.6995835, 77.7404726]
        ]
    }
];


// ============================================================
// 4. CREATE MAP
// ============================================================

const map = L.map("map", {
    zoomControl: true
});


// ============================================================
// 5. OPENSTREETMAP
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 6. MARKERS
// ============================================================

const markerList = [];

places.forEach(function(place) {

    const marker = L.marker([
        place.lat,
        place.lng
    ]).addTo(map);

    marker.bindPopup(
        "<b>" +
        place.icon +
        " " +
        place.name +
        "</b>"
    );

    marker.bindTooltip(
        place.name,
        {
            direction: "top"
        }
    );

    markerList.push({
        marker: marker,
        place: place
    });
});


// ============================================================
// 7. ROAD STYLE
//
// WHITE BORDER
// GREY ROAD
// ============================================================

function drawRoad(coords) {

    // WHITE ROAD EDGE
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
            color: "#8a8a8a",
            weight: 12,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            smoothFactor: 1,
            interactive: false
        }
    ).addTo(map);
}


// ============================================================
// 8. DRAW ALL ROADS
// ============================================================

roads.forEach(function(road) {

    if (
        road.coords &&
        road.coords.length > 1
    ) {
        drawRoad(road.coords);
    }

});


// ============================================================
// 9. NAVIGATION VARIABLES
// ============================================================

let activeNavigation = [];


// ============================================================
// 10. CLEAR OLD NAVIGATION
// ============================================================

function clearNavigation() {

    activeNavigation.forEach(
        function(layer) {

            map.removeLayer(layer);

        }
    );

    activeNavigation = [];
}


// ============================================================
// 11. COMPUTER SCIENCE NAVIGATION
//
// Main Gate
// ↓
// Straight road
// ↓
// Right
// ↓
// Left
// ↓
// Canteen side
// ↓
// Down road
// ↓
// Computer Science
//
// Parking is NOT used.
// Playground shortcut is NOT used.
// ============================================================

const computerScienceRoute = [

    [8.6988565, 77.739888],

    // Main Gate → first road
    [8.6988374, 77.7398879],
    [8.69884, 77.740081],

    // Straight
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],
    [8.6990176, 77.7405807],

    // RIGHT TURN
    [8.6990121, 77.7405504],
    [8.6988371, 77.7406737],
    [8.6988451, 77.740714],

    // LEFT / MANAGEMENT SIDE
    [8.6985959, 77.7411485],

    // Road turn
    [8.698503, 77.7410439],
    [8.698458, 77.7410251],

    // Continue
    [8.6984527, 77.7411539],
    [8.69845, 77.7412518],
    [8.6984474, 77.7413336],

    // Canteen-side road
    [8.6981822, 77.7413523],
    [8.6981808, 77.7419523],

    // Canteen junction
    [8.6978892, 77.7419738],
    [8.6980138, 77.7419684],
    [8.6980164, 77.7420757],

    // DOWN ROAD
    [8.6979528, 77.7405736],
    [8.6979581, 77.7416304],
    [8.6978812, 77.7416331],
    [8.6978865, 77.7421132],
    [8.6977168, 77.7421159],

    // Destination
    [8.697592, 77.7420998]
];


// ============================================================
// 12. LIBRARY NAVIGATION
// ============================================================

const libraryRoute = [

    [8.6988565, 77.739888],

    // Main Gate road
    [8.6988374, 77.7398879],
    [8.69884, 77.740081],

    // Main road
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],

    // Library side
    [8.6985667, 77.740083],
    [8.6985004, 77.7401957],
    [8.6983573, 77.7401796],

    // Library
    [8.6983229, 77.7401688]
];


// ============================================================
// 13. BLUE NAVIGATION ARROW
// ============================================================

function createArrow(angle) {

    return L.divIcon({

        className: "blue-navigation-arrow",

        html:
            '<div style="' +
            'width:32px;' +
            'height:32px;' +
            'display:flex;' +
            'align-items:center;' +
            'justify-content:center;' +
            'font-size:25px;' +
            'font-weight:bold;' +
            'color:#1a73e8;' +
            'text-shadow:0 0 3px white;' +
            'transform:rotate(' +
            angle +
            'deg);' +
            '">➤</div>',

        iconSize: [32, 32],

        iconAnchor: [16, 16]
    });
}


// ============================================================
// 14. GET ARROW ANGLE
// ============================================================

function getDirectionAngle(a, b) {

    const dx =
        b[1] - a[1];

    const dy =
        b[0] - a[0];

    return (
        Math.atan2(dx, dy) *
        180 /
        Math.PI
    );
}


// ============================================================
// 15. ADD BLUE ARROWS
// ============================================================

function addRouteArrows(route) {

    const arrowGroup =
        L.layerGroup().addTo(map);

    for (
        let i = 1;
        i < route.length;
        i += 2
    ) {

        const previous =
            route[i - 1];

        const current =
            route[i];

        const angle =
            getDirectionAngle(
                previous,
                current
            );

        L.marker(
            current,
            {
                icon: createArrow(angle),
                interactive: false,
                zIndexOffset: 1000
            }
        ).addTo(arrowGroup);
    }

    return arrowGroup;
}


// ============================================================
// 16. START NAVIGATION
// ============================================================

function startNavigation(route, destination) {

    clearNavigation();


    // WHITE OUTER BORDER
    const whiteRoute =
        L.polyline(
            route,
            {
                color: "#ffffff",
                weight: 14,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                smoothFactor: 1,
                interactive: false
            }
        ).addTo(map);


    activeNavigation.push(
        whiteRoute
    );


    // BLUE ROUTE
    const blueRoute =
        L.polyline(
            route,
            {
                color: "#1a73e8",
                weight: 7,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                smoothFactor: 1,
                interactive: false
            }
        ).addTo(map);


    activeNavigation.push(
        blueRoute
    );


    // BLUE ARROWS
    const arrows =
        addRouteArrows(route);

    activeNavigation.push(
        arrows
    );


    // START MARKER
    const startMarker =
        L.circleMarker(
            route[0],
            {
                radius: 8,
                color: "#ffffff",
                weight: 3,
                fillColor: "#1a73e8",
                fillOpacity: 1
            }
        ).addTo(map);

    activeNavigation.push(
        startMarker
    );


    // DESTINATION MARKER
    const destinationMarker =
        L.marker(
            [
                destination.lat,
                destination.lng
            ]
        )
        .addTo(map)
        .bindPopup(
            "<b>📍 " +
            destination.name +
            "</b>"
        )
        .openPopup();

    activeNavigation.push(
        destinationMarker
    );


    // SHOW ROUTE
    map.fitBounds(
        blueRoute.getBounds(),
        {
            padding: [
                80,
                80
            ]
        }
    );


    // ROUTE INFO
    const routeInfo =
        document.getElementById(
            "routeInfo"
        );

    if (routeInfo) {

        routeInfo.style.display =
            "block";

        routeInfo.innerHTML =
            "<b>🚶 Navigation Started</b>" +
            "<br><br>" +
            "🚪 Main Gate" +
            "<br>↓" +
            "<br>➡️ Follow the road" +
            "<br>↪️ Turn Right" +
            "<br>↩️ Turn Left" +
            "<br>↓" +
            "<br>🍽️ Canteen side" +
            "<br>↓" +
            "<br>📍 <b>" +
            destination.name +
            "</b>";
    }
}


// ============================================================
// 17. FIND PLACE
// ============================================================

function findPlace(query) {

    const value =
        query
        .toLowerCase()
        .trim();

    return places.find(
        function(place) {

            const name =
                place.name
                .toLowerCase();


            if (
                value === "cs" ||
                value.includes(
                    "computer science"
                )
            ) {

                return name.includes(
                    "computer science"
                );
            }


            if (
                value.includes("library")
            ) {

                return name ===
                    "library";
            }


            return name.includes(
                value
            );
        }
    );
}


// ============================================================
// 18. DESTINATION SEARCH
// ============================================================

const destinationInput =
    document.getElementById(
        "destination"
    );

const resultsBox =
    document.getElementById(
        "results"
    );


let selectedDestination =
    null;


// ============================================================
// 19. SHOW SEARCH RESULTS
// ============================================================

function showDestinationResults(
    query
) {

    if (!resultsBox) {
        return;
    }

    resultsBox.innerHTML = "";


    const value =
        query
        .toLowerCase()
        .trim();


    if (!value) {
        return;
    }


    const matches =
        places.filter(
            function(place) {

                const name =
                    place.name
                    .toLowerCase();

                return (
                    name.includes(value) ||
                    (
                        value.includes(
                            "computer"
                        ) &&
                        name.includes(
                            "computer science"
                        )
                    ) ||
                    (
                        value === "cs" &&
                        name.includes(
                            "computer science"
                        )
                    )
                );
            }
        );


    matches.forEach(
        function(place) {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "result";

            item.textContent =
                place.icon +
                " " +
                place.name;


            item.addEventListener(
                "click",
                function() {

                    selectedDestination =
                        place;

                    destinationInput.value =
                        place.name;

                    resultsBox.innerHTML = "";

                }
            );


            resultsBox.appendChild(
                item
            );
        }
    );
}


// ============================================================
// 20. INPUT EVENT
// ============================================================

if (destinationInput) {

    destinationInput.addEventListener(
        "input",
        function(event) {

            selectedDestination =
                null;

            showDestinationResults(
                event.target.value
            );

        }
    );
}


// ============================================================
// 21. NAVIGATION BUTTON
// ============================================================

const navigateButton =
    document.getElementById(
        "navigateBtn"
    );


if (navigateButton) {

    navigateButton.addEventListener(
        "click",
        function() {

            const typed =
                destinationInput
                ? destinationInput.value
                : "";


            const destination =
                selectedDestination ||
                findPlace(typed);


            if (!destination) {

                alert(
                    "Please select a valid destination."
                );

                return;
            }


            // COMPUTER SCIENCE
            if (
                destination.name
                .toLowerCase()
                .includes(
                    "computer science"
                )
            ) {

                startNavigation(
                    computerScienceRoute,
                    destination
                );

                return;
            }


            // LIBRARY
            if (
                destination.name
                .toLowerCase()
                .includes(
                    "library"
                )
            ) {

                startNavigation(
                    libraryRoute,
                    destination
                );

                return;
            }


            // OTHER LOCATIONS
            clearNavigation();

            map.setView(
                [
                    destination.lat,
                    destination.lng
                ],
                19
            );


            const marker =
                markerList.find(
                    function(item) {

                        return (
                            item.place.name ===
                            destination.name
                        );
                    }
                );


            if (marker) {

                marker.marker.openPopup();

            }

        }
    );
}


// ============================================================
// 22. GO TO COLLEGE
// ============================================================

function goToCollege() {

    map.setView(
        COLLEGE_CENTER,
        18
    );
}


// ============================================================
// 23. INITIAL MAP VIEW
// ============================================================

map.setView(
    COLLEGE_CENTER,
    18
);


// ============================================================
// 24. FIX MAP SIZE
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    500
);
```
