// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
//
// IMPORTANT:
// LOCATION COORDINATES ARE NOT CHANGED.
// ROAD SYSTEM ONLY IS MODIFIED.
// ============================================================


// ============================================================
// 1. COLLEGE CENTER
// ============================================================

const COLLEGE_CENTER = [
    8.6986,
    77.7410
];


// ============================================================
// 2. CREATE MAP
// ============================================================

const map = L.map("map", {

    zoomControl: true,

    preferCanvas: true

}).setView(

    COLLEGE_CENTER,

    18
);


// ============================================================
// 3. OPEN STREET MAP
// ============================================================

L.tileLayer(

    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    {

        maxZoom: 22,

        attribution:
            "&copy; OpenStreetMap contributors"

    }

).addTo(map);


// ============================================================
// 4. LOCATIONS
//
// DO NOT CHANGE ANY COORDINATE
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
        name: "English(sf), B.Com(sf),Computer Science, Food Science",
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
// 5. YOUR DRAWN ROADS
// ============================================================

const roads = [

    {
        name: "Line 44",
        coords: [
            [8.6988374, 77.7398879],
            [8.6988400, 77.7400810]
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
            [8.6993093, 77.7412170],
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
            [8.6984500, 77.7412518],
            [8.6984527, 77.7411539],
            [8.6986489, 77.7411431],
            [8.6986515, 77.7412424]
        ]
    },

    {
        name: "Line 56",
        coords: [
            [8.6984527, 77.7411539],
            [8.6985030, 77.7410439],
            [8.6984580, 77.7410251]
        ]
    },

    {
        name: "Line 58",
        coords: [
            [8.6985959, 77.7411485],
            [8.6990387, 77.7411699],
            [8.6990890, 77.7410841]
        ]
    },

    {
        name: "Line 59",
        coords: [
            [8.6990121, 77.7405504],
            [8.6988371, 77.7406737],
            [8.6988451, 77.7407140]
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
            [8.6985667, 77.7400830],
            [8.6984315, 77.7400991],
            [8.6984288, 77.7400723]
        ]
    },

    {
        name: "Line 72",
        coords: [
            [8.6985667, 77.7400830],
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
// 6. DRAW NORMAL ROADS
//
// WHITE OUTER + GREY INNER
// ============================================================

const roadLayers = [];

roads.forEach(road => {

    /*
     * White road border
     */

    const roadBorder = L.polyline(

        road.coords,

        {
            color: "#ffffff",

            weight: 14,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            interactive: false
        }

    ).addTo(map);


    /*
     * Grey road surface
     */

    const roadSurface = L.polyline(

        road.coords,

        {
            color: "#b7b7b7",

            weight: 9,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            interactive: false
        }

    ).addTo(map);


    roadLayers.push(
        roadBorder,
        roadSurface
    );

});


// ============================================================
// 7. SHOW LOCATIONS
// ============================================================

const markers = {};

places.forEach(place => {

    const marker = L.marker(

        [
            place.lat,
            place.lng
        ]

    ).addTo(map);


    marker.bindTooltip(

        place.name,

        {
            direction: "top",

            offset: [0, -8]
        }

    );


    marker.bindPopup(`

        <b>
            ${place.icon}
            ${place.name}
        </b>

    `);


    markers[place.name] = marker;

});


// ============================================================
// 8. FIND PLACE
// ============================================================

function findPlace(text) {

    const query =
        text
            .toLowerCase()
            .trim();


    return places.find(place => {

        const name =
            place.name
                .toLowerCase();


        return (

            name.includes(query) ||

            query.includes(name) ||

            (
                query.includes("computer") &&
                name.includes("computer science")
            )

        );

    });

}


// ============================================================
// 9. MAIN GATE → COMPUTER SCIENCE
//
// IMPORTANT:
//
// NO DIRECT STRAIGHT LINE.
//
// The route follows the campus road pattern.
// ============================================================

const COMPUTER_SCIENCE_ROUTE = [

    // ==========================================
    // MAIN GATE
    // ==========================================

    [8.6988565, 77.7398880],


    // ==========================================
    // STRAIGHT FROM MAIN GATE
    // ==========================================

    [8.6988374, 77.7398879],

    [8.6988400, 77.7400810],

    [8.6988585, 77.7400764],

    [8.6990176, 77.7403795],


    // ==========================================
    // RIGHT TURN
    // ==========================================

    [8.6990176, 77.7405807],


    // ==========================================
    // MANAGEMENT / MAIN BLOCK SIDE
    // ==========================================

    [8.6990121, 77.7405504],

    [8.6988371, 77.7406737],

    [8.6988451, 77.7407140],


    // ==========================================
    // TURN TOWARDS BOTANY SIDE
    // ==========================================

    [8.6985959, 77.7411485],

    [8.6985030, 77.7410439],

    [8.6984580, 77.7410251],


    // ==========================================
    // BOTANY SIDE ROAD
    // ==========================================

    [8.6984527, 77.7411539],

    [8.6984500, 77.7412518],

    [8.6984474, 77.7413336],


    // ==========================================
    // TOWARDS CANTEEN SIDE
    // ==========================================

    [8.6981822, 77.7413523],

    [8.6981808, 77.7419523],

    [8.6978892, 77.7419738],


    // ==========================================
    // CANTEEN SIDE
    // ==========================================

    [8.6980138, 77.7419684],

    [8.6980164, 77.7420757],


    // ==========================================
    // DOWN ROAD
    // ==========================================

    [8.6979528, 77.7405736],

    [8.6979581, 77.7416304],

    [8.6978812, 77.7416331],

    [8.6978865, 77.7421132],

    [8.6977168, 77.7421159],


    // ==========================================
    // COMPUTER SCIENCE
    // ==========================================

    [8.6975920, 77.7420998]

];


// ============================================================
// 10. ACTIVE NAVIGATION VARIABLES
// ============================================================

let activeRoute = null;

let activeArrows = null;

let routeStartMarker = null;

let routeDestinationMarker = null;


// ============================================================
// 11. CLEAR OLD NAVIGATION
// ============================================================

function clearNavigation() {

    if (activeRoute) {

        map.removeLayer(
            activeRoute
        );

        activeRoute = null;
    }


    if (activeArrows) {

        map.removeLayer(
            activeArrows
        );

        activeArrows = null;
    }


    if (routeStartMarker) {

        map.removeLayer(
            routeStartMarker
        );

        routeStartMarker = null;
    }


    if (routeDestinationMarker) {

        map.removeLayer(
            routeDestinationMarker
        );

        routeDestinationMarker = null;
    }

}


// ============================================================
// 12. CALCULATE DISTANCE
// ============================================================

function distance(a, b) {

    const R = 6371000;


    const lat1 =
        a[0] *
        Math.PI /
        180;


    const lat2 =
        b[0] *
        Math.PI /
        180;


    const dLat =
        (b[0] - a[0]) *
        Math.PI /
        180;


    const dLng =
        (b[1] - a[1]) *
        Math.PI /
        180;


    const x =

        Math.sin(dLat / 2) *
        Math.sin(dLat / 2)

        +

        Math.cos(lat1) *
        Math.cos(lat2) *

        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);


    return (

        R *

        2 *

        Math.atan2(

            Math.sqrt(x),

            Math.sqrt(1 - x)

        )

    );

}


// ============================================================
// 13. TOTAL ROUTE DISTANCE
// ============================================================

function routeDistance(coords) {

    let total = 0;


    for (

        let i = 1;

        i < coords.length;

        i++

    ) {

        total += distance(

            coords[i - 1],

            coords[i]

        );

    }


    return total;

}


// ============================================================
// 14. CREATE BLUE NAVIGATION ARROWS
// ============================================================

function createNavigationArrows(coords) {

    if (

        typeof L.polylineDecorator !==
        "function"

    ) {

        console.warn(
            "Leaflet PolylineDecorator not loaded."
        );

        return null;
    }


    return L.polylineDecorator(

        coords,

        {

            patterns: [

                {

                    /*
                     * Repeated arrow
                     * along the blue route
                     */

                    offset: "8%",

                    repeat: "12%",

                    symbol:

                        L.Symbol.arrowHead({

                            pixelSize: 12,

                            polygon: true,

                            pathOptions: {

                                stroke: false,

                                fill: true,

                                fillOpacity: 1,

                                color: "#1a73e8"
                            }

                        })

                }

            ]

        }

    ).addTo(map);

}


// ============================================================
// 15. SHOW NAVIGATION
// ============================================================

function showNavigation(destinationName) {

    clearNavigation();


    // ==========================================
    // DESTINATION
    // ==========================================

    const destination =
        findPlace(destinationName);


    if (!destination) {

        alert(
            "Destination not found."
        );

        return;
    }


    // ==========================================
    // COMPUTER SCIENCE
    // ==========================================

    const isComputerScience =

        destination.name
            .toLowerCase()
            .includes(
                "computer science"
            );


    if (!isComputerScience) {

        /*
         * Locations are intentionally NOT changed.
         *
         * For now, only the specifically
         * corrected Computer Science route
         * uses the custom road navigation.
         */

        map.setView(

            [
                destination.lat,
                destination.lng
            ],

            19
        );


        markers[
            destination.name
        ]?.openPopup();


        return;
    }


    // ==========================================
    // ROUTE
    // ==========================================

    const coords =
        COMPUTER_SCIENCE_ROUTE;


    // ==========================================
    // WHITE ROUTE BORDER
    // ==========================================

    L.polyline(

        coords,

        {

            color: "#ffffff",

            weight: 14,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            interactive: false

        }

    ).addTo(map);


    // ==========================================
    // BLUE ROUTE
    // ==========================================

    activeRoute =

        L.polyline(

            coords,

            {

                color: "#1a73e8",

                weight: 8,

                opacity: 1,

                lineCap: "round",

                lineJoin: "round",

                interactive: false

            }

        ).addTo(map);


    // ==========================================
    // BLUE ARROWS
    // ==========================================

    activeArrows =
        createNavigationArrows(
            coords
        );


    // ==========================================
    // START MARKER
    // ==========================================

    routeStartMarker =

        L.circleMarker(

            coords[0],

            {

                radius: 9,

                color: "#ffffff",

                weight: 3,

                fillColor: "#1a73e8",

                fillOpacity: 1

            }

        ).addTo(map);


    routeStartMarker.bindPopup(

        "<b>🚪 Start: Main Gate</b>"

    );


    // ==========================================
    // DESTINATION MARKER
    // ==========================================

    routeDestinationMarker =

        L.marker(

            [
                destination.lat,
                destination.lng
            ]

        ).addTo(map);


    routeDestinationMarker.bindPopup(

        "<b>💻 Computer Science</b>"

    ).openPopup();


    // ==========================================
    // FIT ROUTE
    // ==========================================

    map.fitBounds(

        activeRoute.getBounds(),

        {

            padding: [80, 80]

        }

    );


    // ==========================================
    // DISTANCE
    // ==========================================

    const meters =
        routeDistance(coords);


    const minutes =

        Math.max(

            1,

            Math.round(
                meters / 80
            )

        );


    // ==========================================
    // ROUTE INFO
    // ==========================================

    const info =
        document.getElementById(
            "routeInfo"
        );


    info.classList.add(
        "show"
    );


    info.innerHTML = `

        <b>🚶 Walking Route</b>

        <br><br>

        🚪
        <b>Main Gate</b>

        <br>

        ↓ Straight

        <br>

        ↪ Right Turn

        <br>

        ↩ Left Turn

        <br>

        ↓ Continue Straight

        <br>

        🍽️ Canteen Side

        <br>

        ↓ Down Road

        <br>

        💻
        <b>Computer Science</b>

        <br><br>

        📏
        Distance:
        <b>${Math.round(meters)} m</b>

        <br>

        ⏱️
        Walking:
        <b>${minutes} min</b>

    `;

}


// ============================================================
// 16. SEARCH BOX
// ============================================================

const destinationInput =
    document.getElementById(
        "destination"
    );


const results =
    document.getElementById(
        "results"
    );


destinationInput.addEventListener(

    "input",

    function () {

        const query =
            this.value
                .toLowerCase()
                .trim();


        results.innerHTML = "";


        if (!query) {

            return;
        }


        places

            .filter(place =>

                place.name
                    .toLowerCase()
                    .includes(query)

            )

            .forEach(place => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "result-item";


                item.innerHTML =

                    `${place.icon} ${place.name}`;


                item.onclick = () => {

                    destinationInput.value =
                        place.name;

                    results.innerHTML = "";

                };


                results.appendChild(
                    item
                );

            });

    }

);


// ============================================================
// 17. NAVIGATION BUTTON
// ============================================================

document
    .getElementById("navigateBtn")
    .addEventListener(

        "click",

        function () {

            const value =
                destinationInput
                    .value
                    .trim();


            if (!value) {

                alert(
                    "Please select a destination."
                );

                return;
            }


            showNavigation(
                value
            );

        }

    );


// ============================================================
// 18. ENTER KEY
// ============================================================

destinationInput.addEventListener(

    "keydown",

    function (event) {

        if (
            event.key === "Enter"
        ) {

            document
                .getElementById(
                    "navigateBtn"
                )
                .click();

        }

    }

);


// ============================================================
// 19. GO TO COLLEGE
// ============================================================

function goToCollege() {

    map.setView(

        COLLEGE_CENTER,

        18

    );

}


// ============================================================
// 20. INITIAL VIEW
// ============================================================

const allPoints =

    places.map(place => [

        place.lat,

        place.lng

    ]);


map.fitBounds(

    allPoints,

    {

        padding: [50, 50]

    }

);
