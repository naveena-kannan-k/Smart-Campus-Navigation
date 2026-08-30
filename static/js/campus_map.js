// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
//
// IMPORTANT:
// LOCATION COORDINATES ARE NOT MODIFIED.
// ONLY ROAD DISPLAY + ROAD CONNECTION + NAVIGATION ARE CHANGED.
// ============================================================


// ============================================================
// 1. COLLEGE CENTER
// ============================================================

const COLLEGE_CENTER = [
    8.6986,
    77.7410
];


// ============================================================
// 2. MAP
// ============================================================

const map = L.map("map", {

    zoomControl: true,

    preferCanvas: true

});

map.setView(
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
// DO NOT CHANGE THESE LOCATIONS
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
// 5. YOUR ORIGINAL ROAD DATA
//
// SAME ROAD COORDINATES
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
// 6. NORMAL ROAD STYLE
//
// WHITE OUTSIDE
// GREY INSIDE
// ============================================================

roads.forEach(road => {

    // WHITE ROAD BORDER
    L.polyline(

        road.coords,

        {
            color: "#ffffff",

            weight: 16,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            interactive: false
        }

    ).addTo(map);


    // GREY ROAD SURFACE
    L.polyline(

        road.coords,

        {
            color: "#9e9e9e",

            weight: 11,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            interactive: false
        }

    ).addTo(map);

});


// ============================================================
// 7. ROAD CONNECTORS
//
// CONNECT NEARBY ROAD ENDS
// WITHOUT TOUCHING LOCATION COORDINATES
// ============================================================

function distanceMeters(a, b) {

    const R = 6371000;

    const lat1 =
        a[0] * Math.PI / 180;

    const lat2 =
        b[0] * Math.PI / 180;

    const dLat =
        (b[0] - a[0]) * Math.PI / 180;

    const dLng =
        (b[1] - a[1]) * Math.PI / 180;

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
// 8. CONNECTOR POINTS
//
// ONLY SMALL ROAD GAPS ARE CONNECTED
// ============================================================

const roadEnds = [];

roads.forEach((road, index) => {

    roadEnds.push({

        road: index,

        side: "start",

        point: road.coords[0]

    });


    roadEnds.push({

        road: index,

        side: "end",

        point:
            road.coords[
                road.coords.length - 1
            ]

    });

});


// maximum automatic road gap
const MAX_CONNECT_DISTANCE = 35;


// avoid duplicate connectors
const connectorKeys = new Set();


for (
    let i = 0;
    i < roadEnds.length;
    i++
) {

    for (
        let j = i + 1;
        j < roadEnds.length;
        j++
    ) {

        const A = roadEnds[i];

        const B = roadEnds[j];


        if (
            A.road === B.road
        ) {

            continue;
        }


        const d =
            distanceMeters(
                A.point,
                B.point
            );


        if (
            d <= MAX_CONNECT_DISTANCE
        ) {

            const key =
                [
                    A.road,
                    B.road
                ]
                .sort()
                .join("-");


            if (
                connectorKeys.has(key)
            ) {

                continue;
            }


            connectorKeys.add(key);


            const connector = [

                A.point,

                B.point

            ];


            // WHITE
            L.polyline(

                connector,

                {
                    color: "#ffffff",

                    weight: 16,

                    opacity: 1,

                    lineCap: "round",

                    lineJoin: "round",

                    interactive: false
                }

            ).addTo(map);


            // GREY
            L.polyline(

                connector,

                {
                    color: "#9e9e9e",

                    weight: 11,

                    opacity: 1,

                    lineCap: "round",

                    lineJoin: "round",

                    interactive: false
                }

            ).addTo(map);

        }

    }

}


// ============================================================
// 9. MARKERS
// ============================================================

const markers = {};


places.forEach(place => {

    const marker =

        L.marker([

            place.lat,

            place.lng

        ])

        .addTo(map);


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


    markers[
        place.name
    ] = marker;

});


// ============================================================
// 10. COMPUTER SCIENCE ROUTE
//
// MAIN GATE
// ↓
// MAIN ROAD
// ↓
// RIGHT
// ↓
// MANAGEMENT SIDE
// ↓
// BOTANY SIDE
// ↓
// CANTEEN SIDE
// ↓
// DOWN
// ↓
// COMPUTER SCIENCE
// ============================================================

const COMPUTER_SCIENCE_ROUTE = [

    // MAIN GATE

    [
        8.6988565,
        77.739888
    ],


    // GATE ROAD

    [
        8.6988374,
        77.7398879
    ],

    [
        8.6988400,
        77.7400810
    ],


    // MAIN ROAD

    [
        8.6988585,
        77.7400764
    ],

    [
        8.6990176,
        77.7403795
    ],


    // RIGHT TURN

    [
        8.6990176,
        77.7405807
    ],


    // MANAGEMENT SIDE

    [
        8.6990121,
        77.7405504
    ],

    [
        8.6988371,
        77.7406737
    ],

    [
        8.6988451,
        77.7407140
    ],


    // TURN TO BOTANY SIDE

    [
        8.6985959,
        77.7411485
    ],

    [
        8.6985030,
        77.7410439
    ],

    [
        8.6984580,
        77.7410251
    ],


    // BOTANY ROAD

    [
        8.6984527,
        77.7411539
    ],

    [
        8.6984500,
        77.7412518
    ],

    [
        8.6984474,
        77.7413336
    ],


    // TOWARDS CANTEEN

    [
        8.6981822,
        77.7413523
    ],

    [
        8.6981808,
        77.7419523
    ],

    [
        8.6978892,
        77.7419738
    ],


    // CANTEEN SIDE

    [
        8.6980138,
        77.7419684
    ],

    [
        8.6980164,
        77.7420757
    ],


    // DOWN ROAD

    [
        8.6979528,
        77.7405736
    ],

    [
        8.6979581,
        77.7416304
    ],

    [
        8.6978812,
        77.7416331
    ],

    [
        8.6978865,
        77.7421132
    ],

    [
        8.6977168,
        77.7421159
    ],


    // DESTINATION

    [
        8.697592,
        77.7420998
    ]

];


// ============================================================
// 11. LIBRARY ROUTE
//
// MAIN GATE
// → MAIN ROAD
// → LIBRARY SIDE ROAD
// → LIBRARY
// ============================================================

const LIBRARY_ROUTE = [

    // MAIN GATE

    [
        8.6988565,
        77.739888
    ],


    // MAIN GATE ROAD

    [
        8.6988374,
        77.7398879
    ],

    [
        8.6988400,
        77.7400810
    ],


    // MAIN ROAD

    [
        8.6988585,
        77.7400764
    ],

    [
        8.6990176,
        77.7403795
    ],


    // RETURN TOWARDS LIBRARY SIDE

    [
        8.6985667,
        77.7400830
    ],

    [
        8.6985004,
        77.7401957
    ],

    [
        8.6983573,
        77.7401796
    ],


    // LIBRARY

    [
        8.6983229,
        77.7401688
    ]

];


// ============================================================
// 12. ACTIVE ROUTE
// ============================================================

let activeRoute = null;

let activeRouteArrows = null;

let routeStartMarker = null;

let routeDestinationMarker = null;


// ============================================================
// 13. CLEAR PREVIOUS ROUTE
// ============================================================

function clearNavigation() {

    if (activeRoute) {

        map.removeLayer(
            activeRoute
        );

        activeRoute = null;
    }


    if (activeRouteArrows) {

        map.removeLayer(
            activeRouteArrows
        );

        activeRouteArrows = null;
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
// 14. BLUE ARROW ICON
// ============================================================

function createArrowIcon(angle) {

    return L.divIcon({

        className: "",

        html: `

            <div

                style="

                    transform:
                    rotate(${angle}deg);

                    color:#1a73e8;

                    font-size:24px;

                    font-weight:900;

                    text-shadow:
                    0 0 3px #ffffff,
                    0 0 3px #ffffff;

                    width:26px;

                    height:26px;

                    text-align:center;

                    line-height:26px;

                "

            >

                ➤

            </div>

        `,

        iconSize: [
            26,
            26
        ],

        iconAnchor: [
            13,
            13
        ]

    });

}


// ============================================================
// 15. CALCULATE ANGLE
// ============================================================

function getAngle(a, b) {

    const dx =
        b[1] - a[1];

    const dy =
        b[0] - a[0];

    return (

        Math.atan2(
            dx,
            dy
        )

        *

        180

        /

        Math.PI

    );

}


// ============================================================
// 16. PUT BLUE ARROWS ON ROUTE
// ============================================================

function addRouteArrows(coords) {

    const arrowLayer =
        L.layerGroup().addTo(map);


    /*
     * Put arrows every few points.
     */

    for (
        let i = 1;
        i < coords.length;
        i += 2
    ) {

        const previous =
            coords[i - 1];

        const current =
            coords[i];


        const angle =
            getAngle(
                previous,
                current
            );


        L.marker(

            current,

            {

                icon:
                    createArrowIcon(
                        angle
                    ),

                interactive: false,

                zIndexOffset: 1000

            }

        ).addTo(
            arrowLayer
        );

    }


    return arrowLayer;

}


// ============================================================
// 17. DISTANCE
// ============================================================

function calculateDistance(a, b) {

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
// 18. ROUTE DISTANCE
// ============================================================

function getRouteDistance(coords) {

    let total = 0;


    for (
        let i = 1;
        i < coords.length;
        i++
    ) {

        total +=

            calculateDistance(

                coords[i - 1],

                coords[i]

            );

    }


    return total;

}


// ============================================================
// 19. START NAVIGATION
// ============================================================

function navigate(route, destination) {

    clearNavigation();


    // ==========================================
    // WHITE BORDER
    // ==========================================

    L.polyline(

        route,

        {

            color: "#ffffff",

            weight: 15,

            opacity: 1,

            lineCap: "round",

            lineJoin: "round",

            interactive: false

        }

    ).addTo(map);


    // ==========================================
    // BLUE NAVIGATION ROAD
    // ==========================================

    activeRoute =

        L.polyline(

            route,

            {

                color: "#1a73e8",

                weight: 9,

                opacity: 1,

                lineCap: "round",

                lineJoin: "round",

                interactive: false

            }

        ).addTo(map);


    // ==========================================
    // BLUE ARROWS
    // ==========================================

    activeRouteArrows =
        addRouteArrows(
            route
        );


    // ==========================================
    // START
    // ==========================================

    routeStartMarker =

        L.circleMarker(

            route[0],

            {

                radius: 9,

                color: "#ffffff",

                weight: 3,

                fillColor: "#1a73e8",

                fillOpacity: 1

            }

        ).addTo(map);


    routeStartMarker.bindPopup(
        "<b>🚪 Main Gate</b>"
    );


    // ==========================================
    // DESTINATION
    // ==========================================

    routeDestinationMarker =

        L.marker(

            [
                destination.lat,
                destination.lng
            ]

        ).addTo(map);


    routeDestinationMarker

        .bindPopup(

            `<b>
                ${destination.icon}
                ${destination.name}
            </b>`

        )

        .openPopup();


    // ==========================================
    // FIT ROUTE
    // ==========================================

    map.fitBounds(

        activeRoute.getBounds(),

        {

            padding: [
                80,
                80
            ]

        }

    );


    // ==========================================
    // INFORMATION
    // ==========================================

    const meters =
        getRouteDistance(
            route
        );


    const minutes =
        Math.max(

            1,

            Math.round(
                meters / 80
            )

        );


    const info =
        document.getElementById(
            "routeInfo"
        );


    info.classList.add(
        "show"
    );


    info.innerHTML = `

        <b>🚶 Navigation Started</b>

        <br><br>

        🚪
        Main Gate

        <br>

        ➜ Follow the road

        <br>

        ↪ Turn Right

        <br>

        ↩ Turn Left

        <br>

        ➜ Continue through campus road

        <br>

        🍽️ Canteen side

        <br>

        ↓ Continue down the road

        <br><br>

        📍
        <b>${destination.name}</b>

        <br><br>

        📏
        ${Math.round(meters)} metres

        <br>

        ⏱️
        ${minutes} minutes

    `;

}


// ============================================================
// 20. FIND DESTINATION
// ============================================================

function findPlace(text) {

    const q =
        text
            .toLowerCase()
            .trim();


    return places.find(
        place => {

            const name =
                place.name
                    .toLowerCase();


            if (
                name.includes(q)
            ) {

                return true;
            }


            if (
                q.includes(
                    "computer science"
                )

                &&

                name.includes(
                    "computer science"
                )

            ) {

                return true;
            }


            if (
                q === "cs"

                &&

                name.includes(
                    "computer science"
                )

            ) {

                return true;
            }


            return false;

        }
    );

}


// ============================================================
// 21. SEARCH
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

        const q =
            this.value
                .toLowerCase()
                .trim();


        results.innerHTML = "";


        if (!q) {

            return;

        }


        places

            .filter(place =>

                place.name
                    .toLowerCase()
                    .includes(q)

            )

            .forEach(place => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "result-item";


                item.innerHTML =

                    `${place.icon}
                     ${place.name}`;


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
// 22. NAVIGATION BUTTON
// ============================================================

document
    .getElementById(
        "navigateBtn"
    )
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


            const destination =
                findPlace(
                    value
                );


            if (!destination) {

                alert(
                    "Destination not found."
                );

                return;
            }


            // ======================================
            // COMPUTER SCIENCE
            // ======================================

            if (

                destination.name
                    .toLowerCase()
                    .includes(
                        "computer science"
                    )

            ) {

                navigate(

                    COMPUTER_SCIENCE_ROUTE,

                    destination

                );

                return;

            }


            // ======================================
            // LIBRARY
            // ======================================

            if (

                destination.name
                    .toLowerCase()
                    .includes(
                        "library"
                    )

            ) {

                navigate(

                    LIBRARY_ROUTE,

                    destination

                );

                return;

            }


            // ======================================
            // OTHER LOCATIONS
            //
            // LOCATION IS NOT MOVED
            // ======================================

            clearNavigation();


            map.setView(

                [
                    destination.lat,
                    destination.lng
                ],

                19

            );


            if (
                markers[
                    destination.name
                ]
            ) {

                markers[
                    destination.name
                ].openPopup();

            }

        }

    );


// ============================================================
// 23. ENTER KEY
// ============================================================

destinationInput.addEventListener(

    "keydown",

    function(event) {

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
// 24. GO TO COLLEGE
// ============================================================

function goToCollege() {

    clearNavigation();


    map.setView(

        COLLEGE_CENTER,

        18

    );

}


// ============================================================
// 25. INITIAL MAP
// ============================================================

const bounds = [];


places.forEach(place => {

    bounds.push([

        place.lat,

        place.lng

    ]);

});


roads.forEach(road => {

    road.coords.forEach(point => {

        bounds.push(point);

    });

});


if (bounds.length) {

    map.fitBounds(

        bounds,

        {

            padding: [
                40,
                40
            ]

        }

    );

}
