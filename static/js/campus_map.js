// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
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
    zoomControl: true
}).setView(COLLEGE_CENTER, 18);


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
// 4. YOUR PLACES DATA
// ============================================================

const places = [
    {"name":"Botony","lat":8.6984368,"lng":77.7409389,"icon":"🏫"},
    {"name":"Physics(regular)","lat":8.6989193,"lng":77.7407981,"icon":"🏫"},
    {"name":"Chemistry","lat":8.6991182,"lng":77.7410046,"icon":"🏫"},
    {"name":"Zoology&B.Com(Aided)","lat":8.6987364,"lng":77.7413077,"icon":"🏫"},
    {"name":"Old Auditorium","lat":8.6980713,"lng":77.7407428,"icon":"🏛️"},
    {"name":"Library","lat":8.6983229,"lng":77.7401688,"icon":"📚"},
    {"name":"Parking Area","lat":8.6984369,"lng":77.7400521,"icon":"🅿️"},
    {"name":"Tamil, English(regular), Economics","lat":8.6980622,"lng":77.7403781,"icon":"🏫"},
    {"name":"Toilet","lat":8.6977444,"lng":77.741516,"icon":"🚻"},
    {"name":"English(sf), B.Com(sf),Computer Science, Food Science","lat":8.697592,"lng":77.7420998,"icon":"🏫"},
    {"name":"Sports Room","lat":8.698168,"lng":77.7421669,"icon":"🚪"},
    {"name":"Canteen","lat":8.6980195,"lng":77.7421696,"icon":"🍽️"},
    {"name":"Play Ground","lat":8.698729,"lng":77.7418037,"icon":"⚽"},
    {"name":"Hostel","lat":8.6987209,"lng":77.7427011,"icon":"🏠"},
    {"name":"New Auditorium","lat":8.699646,"lng":77.7406171,"icon":"🏛️"},
    {"name":"History(Tamil&English)","lat":8.699699,"lng":77.7407055,"icon":"🏫"},
    {"name":"Nano Science","lat":8.6996354,"lng":77.7404803,"icon":"🏫"},
    {"name":"Maths","lat":8.699479,"lng":77.740668,"icon":"🏫"},
    {"name":"Physics(sf)","lat":8.6994551,"lng":77.740947,"icon":"🏫"},
    {"name":"BCA","lat":8.6997309,"lng":77.7409014,"icon":"🏫"},
    {"name":"MCA","lat":8.6997653,"lng":77.7410918,"icon":"🏫"},
    {"name":"Main Gate","lat":8.6988565,"lng":77.739888,"icon":"🚪"},
    {"name":"NCC Room","lat":8.6990958,"lng":77.7422827,"icon":"🚪"},
    {"name":"principal office","lat":8.6988395,"lng":77.7408101,"icon":"🏢"},
    {"name":"Management office","lat":8.6985889,"lng":77.7408047,"icon":"🏢"}
];


// ============================================================
// 5. YOUR DRAWN CAMPUS PATHS
// ============================================================

const routes = [
    {
        name: "Line 44",
        coords: [
            [8.6988374,77.7398879],
            [8.69884,77.740081]
        ]
    },

    {
        name: "Line 45",
        coords: [
            [8.6988479,77.7399128],
            [8.6988585,77.7400764],
            [8.6990176,77.7403795],
            [8.6990176,77.7405807],
            [8.6991714,77.7408516],
            [8.6993411,77.7407577]
        ]
    },

    {
        name: "Line 48",
        coords: [
            [8.6990121,77.7405504],
            [8.6992819,77.7410775],
            [8.6994118,77.7409944]
        ]
    },

    {
        name: "Line 50",
        coords: [
            [8.6990176,77.7405807],
            [8.6993029,77.7411164],
            [8.6993093,77.741217],
            [8.6997017,77.7411231]
        ]
    },

    {
        name: "Line 51",
        coords: [
            [8.6996566,77.7411312],
            [8.6996301,77.7410064],
            [8.6995903,77.7408817],
            [8.6996566,77.7408656]
        ]
    },

    {
        name: "Line 53",
        coords: [
            [8.6996566,77.7408656],
            [8.6996076,77.7407458],
            [8.6996486,77.7407257]
        ]
    },

    {
        name: "Line 55",
        coords: [
            [8.6981822,77.7413523],
            [8.6984474,77.7413336],
            [8.69845,77.7412518],
            [8.6984527,77.7411539],
            [8.6986489,77.7411431],
            [8.6986515,77.7412424]
        ]
    },

    {
        name: "Line 56",
        coords: [
            [8.6984527,77.7411539],
            [8.698503,77.7410439],
            [8.698458,77.7410251]
        ]
    },

    {
        name: "Line 58",
        coords: [
            [8.6985959,77.7411485],
            [8.6990387,77.7411699],
            [8.699089,77.7410841]
        ]
    },

    {
        name: "Line 59",
        coords: [
            [8.6990121,77.7405504],
            [8.6988371,77.7406737],
            [8.6988451,77.740714]
        ]
    },

    {
        name: "Line 65",
        coords: [
            [8.6979528,77.7405736],
            [8.6979581,77.7416304],
            [8.6978812,77.7416331],
            [8.6978865,77.7421132],
            [8.6977168,77.7421159]
        ]
    },

    {
        name: "Line 67",
        coords: [
            [8.6981808,77.7419523],
            [8.6978892,77.7419738]
        ]
    },

    {
        name: "Line 68",
        coords: [
            [8.6980138,77.7419684],
            [8.6980164,77.7420757]
        ]
    },

    {
        name: "Line 71",
        coords: [
            [8.6985667,77.740083],
            [8.6984315,77.7400991],
            [8.6984288,77.7400723]
        ]
    },

    {
        name: "Line 72",
        coords: [
            [8.6985667,77.740083],
            [8.6985004,77.7401957],
            [8.6983573,77.7401796]
        ]
    },

    {
        name: "Line 73",
        coords: [
            [8.6984315,77.7405658],
            [8.6980842,77.7405819],
            [8.6980709,77.7404075]
        ]
    },

    {
        name: "Line 74",
        coords: [
            [8.6980842,77.7405819],
            [8.6980815,77.7406355]
        ]
    },

    {
        name: "Line 75",
        coords: [
            [8.6987709,77.7425364],
            [8.6987656,77.7426759]
        ]
    },

    {
        name: "Line 76",
        coords: [
            [8.6994271,77.7402956],
            [8.6995835,77.7404726]
        ]
    }
];


// ============================================================
// 6. SHOW ALL PLACES
// ============================================================

const markers = {};

places.forEach(place => {

    const marker = L.marker([
        place.lat,
        place.lng
    ]).addTo(map);

    marker.bindPopup(`
        <b>${place.icon} ${place.name}</b>
    `);

    marker.bindTooltip(place.name);

    markers[place.name] = marker;
});


// ============================================================
// 7. SHOW YOUR ORIGINAL PATHS
// ============================================================

routes.forEach(route => {

    L.polyline(
        route.coords,
        {
            color: "#777",
            weight: 4,
            opacity: 0.65
        }
    ).addTo(map);

});


// ============================================================
// 8. FIND PLACE
// ============================================================

function findPlace(name) {

    const search = name
        .toLowerCase()
        .trim();

    return places.find(place =>
        place.name.toLowerCase().includes(search) ||
        search.includes(place.name.toLowerCase())
    );
}


// ============================================================
// 9. DISTANCE BETWEEN TWO POINTS
// ============================================================

function distance(a, b) {

    const R = 6371000;

    const lat1 = a[0] * Math.PI / 180;
    const lat2 = b[0] * Math.PI / 180;

    const dLat =
        (b[0] - a[0]) * Math.PI / 180;

    const dLng =
        (b[1] - a[1]) * Math.PI / 180;

    const x =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +
        Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    return R * 2 * Math.atan2(
        Math.sqrt(x),
        Math.sqrt(1 - x)
    );
}


// ============================================================
// 10. FIND NEAREST PATH POINT
// ============================================================

function nearestPathPoint(point) {

    let nearest = null;
    let smallest = Infinity;

    routes.forEach(route => {

        route.coords.forEach(coord => {

            const d = distance(
                point,
                coord
            );

            if (d < smallest) {

                smallest = d;

                nearest = {
                    coord: coord,
                    route: route
                };
            }

        });

    });

    return nearest;
}


// ============================================================
// 11. BUILD ROUTE
// ============================================================

function buildRoute(startPlace, destinationPlace) {

    const start = [
        startPlace.lat,
        startPlace.lng
    ];

    const end = [
        destinationPlace.lat,
        destinationPlace.lng
    ];

    const startNearest =
        nearestPathPoint(start);

    const endNearest =
        nearestPathPoint(end);

    if (!startNearest || !endNearest) {

        alert("Campus path not found.");

        return;
    }

    let routeCoordinates = [];

    routeCoordinates.push(start);

    routeCoordinates.push(
        startNearest.coord
    );


    // Same path
    if (
        startNearest.route.name ===
        endNearest.route.name
    ) {

        const coords =
            startNearest.route.coords;

        let startIndex =
            coords.findIndex(c =>
                c[0] === startNearest.coord[0] &&
                c[1] === startNearest.coord[1]
            );

        let endIndex =
            coords.findIndex(c =>
                c[0] === endNearest.coord[0] &&
                c[1] === endNearest.coord[1]
            );

        if (startIndex > endIndex) {

            const temp = startIndex;

            startIndex = endIndex;

            endIndex = temp;
        }

        for (
            let i = startIndex;
            i <= endIndex;
            i++
        ) {

            routeCoordinates.push(
                coords[i]
            );
        }

    } else {

        /*
         * Connect the nearest campus paths.
         * This keeps the route based on
         * your drawn campus paths.
         */

        routeCoordinates.push(
            endNearest.coord
        );
    }

    routeCoordinates.push(end);


    // ========================================================
    // REMOVE OLD ROUTE
    // ========================================================

    if (window.activeRoute) {

        map.removeLayer(
            window.activeRoute
        );
    }


    // ========================================================
    // DRAW ACTIVE ROUTE
    // ========================================================

    window.activeRoute =
        L.polyline(
            routeCoordinates,
            {
                color: "#1a73e8",
                weight: 8,
                opacity: 1
            }
        ).addTo(map);


    // ========================================================
    // START MARKER
    // ========================================================

    L.marker(start)
        .addTo(map)
        .bindPopup(
            "🚪 <b>Start: Main Gate</b>"
        )
        .openPopup();


    // ========================================================
    // DESTINATION MARKER
    // ========================================================

    L.marker(end)
        .addTo(map)
        .bindPopup(
            "📍 <b>Destination: " +
            destinationPlace.name +
            "</b>"
        );


    // ========================================================
    // FIT ROUTE
    // ========================================================

    map.fitBounds(
        window.activeRoute.getBounds(),
        {
            padding: [80, 80]
        }
    );


    // ========================================================
    // DISTANCE
    // ========================================================

    let totalDistance = 0;

    for (
        let i = 1;
        i < routeCoordinates.length;
        i++
    ) {

        totalDistance += distance(
            routeCoordinates[i - 1],
            routeCoordinates[i]
        );
    }


    const walkingMinutes =
        Math.max(
            1,
            Math.round(
                totalDistance / 80
            )
        );


    document.getElementById(
        "routeInfo"
    ).innerHTML = `

        🚶 <b>Route Found</b><br>

        From:
        <b>${startPlace.name}</b><br>

        To:
        <b>${destinationPlace.name}</b><br>

        📏 Distance:
        ${Math.round(totalDistance)} m<br>

        ⏱️ Walking:
        ${walkingMinutes} min

    `;
}


// ============================================================
// 12. NAVIGATION BUTTON
// ============================================================

document
    .getElementById("navigateBtn")
    .addEventListener("click", () => {

        const destination =
            document
                .getElementById("destination")
                .value;

        const place =
            findPlace(destination);

        if (!place) {

            alert(
                "Destination not found. Please select a building."
            );

            return;
        }

        const start =
            findPlace("Main Gate");

        buildRoute(
            start,
            place
        );

    });


// ============================================================
// 13. SEARCH SUGGESTIONS
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

        const value =
            this.value
                .toLowerCase()
                .trim();

        results.innerHTML = "";

        if (!value) {
            return;
        }

        places
            .filter(place =>
                place.name
                    .toLowerCase()
                    .includes(value)
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

                results.appendChild(item);
            });
    }
);


// ============================================================
// 14. GO TO COLLEGE
// ============================================================

function goToCollege() {

    map.setView(
        COLLEGE_CENTER,
        18
    );
}


// ============================================================
// 15. INITIAL VIEW
// ============================================================

const allPoints =
    places.map(place => [
        place.lat,
        place.lng
    ]);

if (allPoints.length) {

    map.fitBounds(
        allPoints,
        {
            padding: [50, 50]
        }
    );
}
