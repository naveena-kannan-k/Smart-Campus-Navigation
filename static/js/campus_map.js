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
// 4. LOCATIONS
// IMPORTANT:
// DO NOT CHANGE THESE COORDINATES
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
// 5. YOUR DRAWN ROADS
// These are your original path coordinates.
// ============================================================

const roads = [

    {
        name: "Main Gate Road",
        coords: [
            [8.6988374,77.7398879],
            [8.6988400,77.7400810]
        ]
    },

    {
        name: "Main Campus Road",
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
        name: "Central Road",
        coords: [
            [8.6990121,77.7405504],
            [8.6992819,77.7410775],
            [8.6994118,77.7409944]
        ]
    },

    {
        name: "Upper Campus Road",
        coords: [
            [8.6990176,77.7405807],
            [8.6993029,77.7411164],
            [8.6993093,77.7412170],
            [8.6997017,77.7411231]
        ]
    },

    {
        name: "Upper Turn Road",
        coords: [
            [8.6996566,77.7411312],
            [8.6996301,77.7410064],
            [8.6995903,77.7408817],
            [8.6996566,77.7408656]
        ]
    },

    {
        name: "Upper Left Road",
        coords: [
            [8.6996566,77.7408656],
            [8.6996076,77.7407458],
            [8.6996486,77.7407257]
        ]
    },

    {
        name: "Botany Side Road",
        coords: [
            [8.6981822,77.7413523],
            [8.6984474,77.7413336],
            [8.6984500,77.7412518],
            [8.6984527,77.7411539],
            [8.6986489,77.7411431],
            [8.6986515,77.7412424]
        ]
    },

    {
        name: "Botany Turn Road",
        coords: [
            [8.6984527,77.7411539],
            [8.6985030,77.7410439],
            [8.6984580,77.7410251]
        ]
    },

    {
        name: "Management Side Road",
        coords: [
            [8.6985959,77.7411485],
            [8.6990387,77.7411699],
            [8.6990890,77.7410841]
        ]
    },

    {
        name: "Management Turn",
        coords: [
            [8.6990121,77.7405504],
            [8.6988371,77.7406737],
            [8.6988451,77.7407140]
        ]
    },

    {
        name: "Computer Science Down Road",
        coords: [
            [8.6979528,77.7405736],
            [8.6979581,77.7416304],
            [8.6978812,77.7416331],
            [8.6978865,77.7421132],
            [8.6977168,77.7421159]
        ]
    },

    {
        name: "Canteen Side Road",
        coords: [
            [8.6981808,77.7419523],
            [8.6978892,77.7419738]
        ]
    },

    {
        name: "Canteen Entrance",
        coords: [
            [8.6980138,77.7419684],
            [8.6980164,77.7420757]
        ]
    },

    {
        name: "Library Side Road",
        coords: [
            [8.6985667,77.7400830],
            [8.6984315,77.7400991],
            [8.6984288,77.7400723]
        ]
    },

    {
        name: "Library Road",
        coords: [
            [8.6985667,77.7400830],
            [8.6985004,77.7401957],
            [8.6983573,77.7401796]
        ]
    },

    {
        name: "Old Auditorium Road",
        coords: [
            [8.6984315,77.7405658],
            [8.6980842,77.7405819],
            [8.6980709,77.7404075]
        ]
    },

    {
        name: "Old Auditorium Turn",
        coords: [
            [8.6980842,77.7405819],
            [8.6980815,77.7406355]
        ]
    },

    {
        name: "Hostel Road",
        coords: [
            [8.6987709,77.7425364],
            [8.6987656,77.7426759]
        ]
    },

    {
        name: "Upper Left Campus",
        coords: [
            [8.6994271,77.7402956],
            [8.6995835,77.7404726]
        ]
    }
];


// ============================================================
// 6. DRAW ROADS AS PROPER ROADS
// ============================================================

roads.forEach(road => {

    // Road shadow / border
    L.polyline(
        road.coords,
        {
            color: "#ffffff",
            weight: 11,
            opacity: 0.95,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);

    // Actual road
    L.polyline(
        road.coords,
        {
            color: "#b8b8b8",
            weight: 7,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);

});


// ============================================================
// 7. SHOW LOCATIONS
// ============================================================

const markers = {};

places.forEach(place => {

    const marker = L.marker([
        place.lat,
        place.lng
    ]).addTo(map);

    marker.bindTooltip(
        place.name,
        {
            direction: "top"
        }
    );

    marker.bindPopup(`
        <b>${place.icon} ${place.name}</b>
    `);

    markers[place.name] = marker;
});


// ============================================================
// 8. SPECIAL ROUTE
// MAIN GATE → COMPUTER SCIENCE
//
// IMPORTANT:
// This is NOT a straight line.
//
// It follows the campus-road direction:
// Main Gate
// → Main road
// → Management side
// → Botany side
// → Canteen side
// → Down road
// → Computer Science
// ============================================================

const COMPUTER_SCIENCE_ROUTE = [

    // START — MAIN GATE
    [8.6988565, 77.7398880],

    // Straight from Main Gate
    [8.6988374, 77.7398879],
    [8.6988400, 77.7400810],
    [8.6988585, 77.7400764],
    [8.6990176, 77.7403795],

    // RIGHT TURN
    [8.6990176, 77.7405807],

    // Continue
    [8.6988371, 77.7406737],
    [8.6988451, 77.7407140],

    // LEFT / MANAGEMENT SIDE
    [8.6985959, 77.7411485],
    [8.6985030, 77.7410439],
    [8.6984580, 77.7410251],

    // BOTANY SIDE
    [8.6984527, 77.7411539],
    [8.6984474, 77.7413336],

    // Continue toward canteen side
    [8.6981808, 77.7419523],
    [8.6978892, 77.7419738],

    // CANTEEN SIDE
    [8.6980138, 77.7419684],
    [8.6980164, 77.7420757],

    // DOWN / SOUTH SIDE ROAD
    [8.6979528, 77.7405736],
    [8.6979581, 77.7416304],
    [8.6978812, 77.7416331],
    [8.6978865, 77.7421132],
    [8.6977168, 77.7421159],

    // COMPUTER SCIENCE DESTINATION
    [8.6975920, 77.7420998]
];


// ============================================================
// 9. OTHER DESTINATIONS
// ============================================================

const ROUTES = {

    "computer science":
        COMPUTER_SCIENCE_ROUTE,

    "computer":
        COMPUTER_SCIENCE_ROUTE,

    "cs":
        COMPUTER_SCIENCE_ROUTE

};


// ============================================================
// 10. DISTANCE CALCULATION
// ============================================================

function getDistance(a, b) {

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
        Math.sin(dLat / 2) +

        Math.cos(lat1) *
        Math.cos(lat2) *

        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    return R *
        2 *
        Math.atan2(
            Math.sqrt(x),
            Math.sqrt(1 - x)
        );
}


// ============================================================
// 11. ROUTE DISTANCE
// ============================================================

function calculateRouteDistance(coords) {

    let total = 0;

    for (
        let i = 1;
        i < coords.length;
        i++
    ) {

        total += getDistance(
            coords[i - 1],
            coords[i]
        );
    }

    return total;
}


// ============================================================
// 12. DRAW NAVIGATION ROUTE
// ============================================================

let activeRoute = null;

function showNavigationRoute(
    destinationName,
    routeCoordinates
) {

    // Remove previous route
    if (activeRoute) {

        map.removeLayer(activeRoute);
    }


    // Route border
    L.polyline(
        routeCoordinates,
        {
            color: "#ffffff",
            weight: 13,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round"
        }
    ).addTo(map);


    // Blue navigation route
    activeRoute =
        L.polyline(
            routeCoordinates,
            {
                color: "#1a73e8",
                weight: 8,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round"
            }
        ).addTo(map);


    // Start marker
    L.marker(
        routeCoordinates[0]
    )
    .addTo(map)
    .bindPopup(
        "🚪 <b>Start: Main Gate</b>"
    );


    // Destination marker
    const destination =
        findPlace(destinationName);

    if (destination) {

        L.marker([
            destination.lat,
            destination.lng
        ])
        .addTo(map)
        .bindPopup(
            "📍 <b>" +
            destination.name +
            "</b>"
        )
        .openPopup();
    }


    // Fit route
    map.fitBounds(
        activeRoute.getBounds(),
        {
            padding: [70, 70]
        }
    );


    // Distance
    const distance =
        calculateRouteDistance(
            routeCoordinates
        );

    const minutes =
        Math.max(
            1,
            Math.round(distance / 80)
        );


    document.getElementById(
        "routeInfo"
    ).innerHTML = `

        🚶 <b>Walking Route</b><br><br>

        🚪 From:
        <b>Main Gate</b><br>

        📍 To:
        <b>${destinationName}</b><br>

        📏 Distance:
        <b>${Math.round(distance)} m</b><br>

        ⏱️ Walking time:
        <b>${minutes} min</b>

    `;
}


// ============================================================
// 13. FIND PLACE
// ============================================================

function findPlace(searchText) {

    const q =
        searchText
            .toLowerCase()
            .trim();

    return places.find(place => {

        const name =
            place.name
                .toLowerCase();

        return (
            name.includes(q) ||
            q.includes(name)
        );
    });
}


// ============================================================
// 14. SEARCH
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
// 15. START NAVIGATION
// ============================================================

document
    .getElementById("navigateBtn")
    .addEventListener(
        "click",
        function () {

            const text =
                destinationInput
                    .value
                    .trim();

            if (!text) {

                alert(
                    "Please select a destination."
                );

                return;
            }


            const lower =
                text.toLowerCase();


            // ==================================================
            // COMPUTER SCIENCE
            // USE THE SPECIFIC CAMPUS ROAD
            // ==================================================

            if (
                lower.includes("computer science") ||
                lower === "computer" ||
                lower === "cs"
            ) {

                showNavigationRoute(
                    "English(sf), B.Com(sf),Computer Science, Food Science",
                    COMPUTER_SCIENCE_ROUTE
                );

                return;
            }


            // ==================================================
            // OTHER LOCATIONS
            // ==================================================

            const place =
                findPlace(text);

            if (!place) {

                alert(
                    "Destination not found."
                );

                return;
            }


            /*
             * For other destinations we only
             * show their location.
             *
             * Their coordinates are NOT changed.
             */

            map.setView(
                [
                    place.lat,
                    place.lng
                ],
                19
            );

            markers[
                place.name
            ]?.openPopup();

            document.getElementById(
                "routeInfo"
            ).innerHTML = `

                📍 <b>${place.name}</b><br>

                Location selected.<br>

                Main Gate → ${place.name}

            `;
        }
    );


// ============================================================
// 16. COLLEGE BUTTON
// ============================================================

function goToCollege() {

    map.setView(
        COLLEGE_CENTER,
        18
    );
}


// ============================================================
// 17. INITIAL MAP VIEW
// ============================================================

const allCoordinates =
    places.map(place => [
        place.lat,
        place.lng
    ]);

map.fitBounds(
    allCoordinates,
    {
        padding: [50, 50]
    }
);
