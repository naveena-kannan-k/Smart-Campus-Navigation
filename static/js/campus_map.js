// ============================================================
// SMART CAMPUS NAVIGATION
// SARAH TUCKER COLLEGE
// NORMAL OPENSTREETMAP
// CAMPUS IMAGE NOT USED
// ============================================================


// ============================================================
// 1. CREATE MAP
// ============================================================

const map = L.map("campusMap", {
    zoomControl: false
});


// ============================================================
// 2. OPEN STREET MAP
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 20,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 3. MAIN GATE = BASE POINT
//
// Sarah Tucker College:
// approximately 8.6986, 77.74165
//
// Main Gate is treated as the reference point.
// Other points are positioned relative to the
// marked campus layout you provided.
// ============================================================

const MAIN_GATE_LAT = 8.69860;
const MAIN_GATE_LNG = 77.74165;


// ============================================================
// 4. LOCAL CAMPUS COORDINATE SYSTEM
//
// x = east / west
// y = north / south
//
// These are campus-relative positions based on
// your marked layout.
// ============================================================

const SCALE = 0.25;


// Latitude / longitude conversion

const METERS_PER_LAT = 111320;

const METERS_PER_LNG =
    111320 *
    Math.cos(
        MAIN_GATE_LAT * Math.PI / 180
    );


// Convert local position to GPS

function localToGPS(x, y) {

    const longitude =
        MAIN_GATE_LNG +
        (x * SCALE) / METERS_PER_LNG;

    const latitude =
        MAIN_GATE_LAT +
        (y * SCALE) / METERS_PER_LAT;

    return [
        latitude,
        longitude
    ];

}


// ============================================================
// 5. CAMPUS LOCATIONS
//
// Positions follow the marked campus arrangement:
// Main Gate bottom-center
// Bank left
// Parking right
// Main Block above
// Library right
// Science departments left
// S/F departments right
// Hostel / Chapel / Playground top
// ============================================================

const locations = {

    // --------------------------------------------------------
    // ENTRANCE
    // --------------------------------------------------------

    "Main Gate": {
        pos: [0, 0],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        pos: [-330, 20],
        icon: "🏦",
        type: "Bank"
    },

    "Parking Area": {
        pos: [340, 5],
        icon: "🅿️",
        type: "Parking Area"
    },


    // --------------------------------------------------------
    // MAIN BLOCK AREA
    // --------------------------------------------------------

    "Principal Office": {
        pos: [70, 270],
        icon: "🏢",
        type: "Principal Office"
    },

    "Management Office": {
        pos: [190, 270],
        icon: "🏢",
        type: "Management Office"
    },

    "Main Block": {
        pos: [150, 350],
        icon: "🏫",
        type: "Main Block"
    },


    // --------------------------------------------------------
    // CENTRAL AREA
    // --------------------------------------------------------

    "Garden": {
        pos: [150, 470],
        icon: "🌳",
        type: "Garden"
    },

    "Zoology": {
        pos: [110, 540],
        icon: "🦋",
        type: "Zoology Department"
    },

    "B.Com (Aided)": {
        pos: [200, 540],
        icon: "💼",
        type: "B.Com Aided"
    },


    // --------------------------------------------------------
    // SCIENCE AREA - LEFT OF MAIN BLOCK
    // --------------------------------------------------------

    "Chemistry": {
        pos: [-60, 410],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics": {
        pos: [60, 410],
        icon: "🔬",
        type: "Physics Department"
    },

    "Physics S/F": {
        pos: [10, 450],
        icon: "🔬",
        type: "Physics S/F"
    },

    "Botany": {
        pos: [230, 410],
        icon: "🌿",
        type: "Botany Department"
    },


    // --------------------------------------------------------
    // LEFT SIDE
    // --------------------------------------------------------

    "Partition Hall": {
        pos: [-300, 300],
        icon: "🏛️",
        type: "Partition Hall"
    },

    "History": {
        pos: [-430, 650],
        icon: "📖",
        type: "History Department"
    },

    "BCA": {
        pos: [-410, 590],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        pos: [-420, 520],
        icon: "💻",
        type: "MCA Department"
    },

    "Maths": {
        pos: [-330, 480],
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        pos: [-390, 720],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        pos: [-350, 800],
        icon: "🏛️",
        type: "New Auditorium"
    },


    // --------------------------------------------------------
    // RIGHT SIDE
    // --------------------------------------------------------

    "Library": {
        pos: [360, 190],
        icon: "📚",
        type: "Library"
    },

    "Tamil & English": {
        pos: [560, 200],
        icon: "📚",
        type: "Tamil & English"
    },

    "Economics": {
        pos: [560, 250],
        icon: "📊",
        type: "Economics Department"
    },

    "Old Auditorium": {
        pos: [570, 500],
        icon: "🏛️",
        type: "Old Auditorium"
    },


    // --------------------------------------------------------
    // RIGHT TOP / S.F.
    // --------------------------------------------------------

    "Canteen": {
        pos: [390, 690],
        icon: "🍴",
        type: "Canteen"
    },

    "English S/F": {
        pos: [600, 690],
        icon: "📚",
        type: "English S/F"
    },

    "B.Com S/F": {
        pos: [600, 750],
        icon: "💼",
        type: "B.Com S/F"
    },

    "Computer Science": {
        pos: [600, 810],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        pos: [600, 870],
        icon: "🧪",
        type: "Food Science Department"
    },


    // --------------------------------------------------------
    // TOP AREA
    // --------------------------------------------------------

    "Playground": {
        pos: [100, 760],
        icon: "⚽",
        type: "Playground"
    },

    "Sports Room": {
        pos: [350, 780],
        icon: "🏃",
        type: "Sports Room"
    },

    "Hostel": {
        pos: [250, 950],
        icon: "🏠",
        type: "Hostel"
    },

    "Chapel": {
        pos: [-300, 950],
        icon: "⛪",
        type: "Chapel"
    }

};


// ============================================================
// 6. CONVERT ALL LOCATIONS TO GPS
// ============================================================

for (const place in locations) {

    locations[place].coords =
        localToGPS(
            locations[place].pos[0],
            locations[place].pos[1]
        );

}


// ============================================================
// 7. FIND ALL CAMPUS POINTS
// ============================================================

const allPoints = [];

for (const place in locations) {

    allPoints.push(
        locations[place].coords
    );

}


// ============================================================
// 8. SHOW CAMPUS
// ============================================================

map.fitBounds(allPoints, {
    padding: [70, 70]
});


// ============================================================
// 9. MARKER STORAGE
// ============================================================

const markers = {};


// ============================================================
// 10. USER LOCATION
// ============================================================

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;


// ============================================================
// 11. ROUTE
// ============================================================

let routeControl = null;


// ============================================================
// 12. SELECTED DESTINATION
// ============================================================

let selectedDestination = null;


// ============================================================
// 13. CAMPUS ICON
// ============================================================

function createCampusIcon(icon) {

    return L.divIcon({

        className: "custom-campus-marker",

        html: `
            <div class="campus-marker">
                ${icon}
            </div>
        `,

        iconSize: [38, 38],

        iconAnchor: [19, 19]

    });

}


// ============================================================
// 14. ADD CAMPUS MARKERS
// ============================================================

for (const place in locations) {

    const data = locations[place];

    const marker =
        L.marker(
            data.coords,
            {
                icon:
                    createCampusIcon(
                        data.icon
                    )
            }
        ).addTo(map);


    // --------------------------------------------------------
    // POPUP
    // --------------------------------------------------------

    marker.bindPopup(`

        <div class="campus-popup">

            <div class="popup-icon">
                ${data.icon}
            </div>

            <div class="popup-title">
                ${place}
            </div>

            <div class="popup-type">
                ${data.type}
            </div>

            <button
                class="navigate-btn"
                onclick="selectDestination(${JSON.stringify(place)})"
            >
                🧭 Navigate
            </button>

        </div>

    `);


    // --------------------------------------------------------
    // LABEL
    // --------------------------------------------------------

    marker.bindTooltip(
        place,
        {
            direction: "top",
            offset: [0, -20],
            className: "campus-label",
            sticky: true
        }
    );


    markers[place] = marker;

}


// ============================================================
// 15. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {
        return;
    }


    selectedDestination = place;


    // Remove previous selection

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // Highlight selected marker

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // Move to destination

    map.flyTo(
        locations[place].coords,
        19,
        {
            duration: 1
        }
    );


    // Open popup

    markers[place].openPopup();


    // Information

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                📍 ${place}
            </div>

            <div class="info-text">

                ${locations[place].type}

                <br><br>

                ${
                    userLocation
                    ? "🧭 Ready for navigation."
                    : "📍 Click My Location first."
                }

            </div>

        `;

    }


    // Automatically route if GPS exists

    if (userLocation) {

        createRoute();

    }

}


// ============================================================
// 16. SEARCH
// ============================================================

function findDestination() {

    const inputElement =
        document.getElementById(
            "destinationInput"
        );


    if (!inputElement) {
        return;
    }


    const input =
        inputElement.value
        .trim()
        .toLowerCase();


    if (!input) {

        alert(
            "Please enter a campus location."
        );

        return;

    }


    let foundPlace = null;


    // Exact / partial

    for (const place in locations) {

        const name =
            place.toLowerCase();


        if (
            name === input ||
            name.includes(input) ||
            input.includes(name)
        ) {

            foundPlace = place;

            break;

        }

    }


    // Aliases

    if (!foundPlace) {

        const aliases = {

            "cs": "Computer Science",

            "computer":
                "Computer Science",

            "computer science department":
                "Computer Science",

            "library":
                "Library",

            "canteen":
                "Canteen",

            "bank":
                "Canara Bank",

            "parking":
                "Parking Area",

            "gate":
                "Main Gate",

            "main gate":
                "Main Gate",

            "hostel":
                "Hostel",

            "chapel":
                "Chapel",

            "sports":
                "Sports Room",

            "play ground":
                "Playground",

            "playground":
                "Playground",

            "bca":
                "BCA",

            "mca":
                "MCA",

            "physics":
                "Physics",

            "chemistry":
                "Chemistry",

            "maths":
                "Maths",

            "mathematics":
                "Maths",

            "history":
                "History",

            "economics":
                "Economics",

            "botany":
                "Botany",

            "zoology":
                "Zoology",

            "auditorium":
                "New Auditorium"

        };


        for (const key in aliases) {

            if (
                key === input ||
                key.includes(input) ||
                input.includes(key)
            ) {

                foundPlace =
                    aliases[key];

                break;

            }

        }

    }


    if (!foundPlace) {

        alert(
            "Location not found.\n\n" +
            "Try Library, Canteen, " +
            "Computer Science, Main Gate, " +
            "Hostel, Physics, Chemistry..."
        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ============================================================
// 17. ENTER KEY
// ============================================================

const destinationInput =
    document.getElementById(
        "destinationInput"
    );


if (destinationInput) {

    destinationInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                findDestination();

            }

        }
    );

}


// ============================================================
// 18. CURRENT LOCATION
// ============================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported."
        );

        return;

    }


    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                📍 Detecting Location...
            </div>

            <div class="info-text">
                Please allow location permission.
            </div>

        `;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            const accuracy =
                position.coords.accuracy;


            userLocation = [
                latitude,
                longitude
            ];


            // Remove old marker

            if (userMarker) {

                map.removeLayer(
                    userMarker
                );

            }


            if (accuracyCircle) {

                map.removeLayer(
                    accuracyCircle
                );

            }


            // User icon

            const userIcon =
                L.divIcon({

                    className:
                        "user-location-marker",

                    html: `
                        <div class="user-location-dot">
                            <div class="user-location-pulse"></div>
                        </div>
                    `,

                    iconSize: [30, 30],

                    iconAnchor: [15, 15]

                });


            userMarker =
                L.marker(
                    userLocation,
                    {
                        icon: userIcon,
                        zIndexOffset: 2000
                    }
                )
                .addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // Accuracy

            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius: accuracy
                    }
                ).addTo(map);


            // Move to user

            map.flyTo(
                userLocation,
                18,
                {
                    duration: 1
                }
            );


            // Information

            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 Current Location
                    </div>

                    <div class="info-text">

                        Location detected.

                        <br><br>

                        Accuracy:
                        <b>
                            ${Math.round(accuracy)}
                            meters
                        </b>

                        <br><br>

                        ${
                            selectedDestination
                            ? "🧭 Calculating route..."
                            : "🎯 Select a destination."
                        }

                    </div>

                `;

            }


            // Route

            if (selectedDestination) {

                createRoute();

            }

        },

        function(error) {

            console.error(
                "GPS Error:",
                error
            );


            let message =
                "Unable to access your location.";


            if (error.code === 1) {

                message =
                    "Location permission denied.";

            }

            else if (error.code === 2) {

                message =
                    "Location unavailable.";

            }

            else if (error.code === 3) {

                message =
                    "Location request timed out.";

            }


            alert(message);

        },

        {
            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}


// ============================================================
// 19. CREATE ROUTE
// ============================================================

function createRoute() {

    if (!userLocation) {

        alert(
            "First click My Location."
        );

        return;

    }


    if (!selectedDestination) {

        alert(
            "Please select a destination."
        );

        return;

    }


    const destination =
        locations[
            selectedDestination
        ].coords;


    // Remove old route

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                🧭 Finding Route
            </div>

            <div class="info-text">

                From:
                <b>Current Location</b>

                <br>

                To:
                <b>${selectedDestination}</b>

                <br><br>

                Calculating route...

            </div>

        `;

    }


    // Leaflet Routing Machine

    routeControl =
        L.Routing.control({

            waypoints: [

                L.latLng(
                    userLocation[0],
                    userLocation[1]
                ),

                L.latLng(
                    destination[0],
                    destination[1]
                )

            ],

            router:
                L.Routing.osrmv1({

                    serviceUrl:
                        "https://router.project-osrm.org/route/v1"

                }),


            lineOptions: {

                styles: [

                    {
                        className:
                            "campus-route-line",

                        weight: 7
                    }

                ]

            },


            addWaypoints: false,

            draggableWaypoints: false,

            routeWhileDragging: false,

            fitSelectedRoutes: true,

            showAlternatives: false,

            collapsible: true,


            createMarker: function() {

                return null;

            }

        })

        .addTo(map);


    // Route found

    routeControl.on(
        "routesfound",
        function(event) {

            if (
                !event.routes ||
                event.routes.length === 0
            ) {

                return;

            }


            const summary =
                event.routes[0].summary;


            const distance =
                summary.totalDistance;


            const time =
                summary.totalTime;


            const distanceText =
                distance >= 1000
                ? (
                    distance / 1000
                ).toFixed(2) + " km"
                : Math.round(distance) + " m";


            const minutes =
                Math.max(
                    1,
                    Math.round(
                        time / 60
                    )
                );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        🧭 Route Found
                    </div>

                    <div class="info-text">

                        📍 From:
                        <b>Current Location</b>

                        <br><br>

                        🎯 To:
                        <b>${selectedDestination}</b>

                        <br><br>

                        📏 Distance:
                        <b>${distanceText}</b>

                        <br>

                        🚶 Time:
                        <b>${minutes} min</b>

                    </div>

                `;

            }

        }
    );


    // Route error

    routeControl.on(
        "routingerror",
        function(error) {

            console.error(
                "Routing error:",
                error
            );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        ⚠️ Route unavailable
                    </div>

                    <div class="info-text">

                        Unable to calculate the route.

                        <br><br>

                        Please check your
                        internet connection.

                    </div>

                `;

            }

        }
    );

}


// ============================================================
// 20. NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
        );

        return;

    }


    if (!userLocation) {

        showMyLocation();

        return;

    }


    createRoute();

}


// ============================================================
// 21. RESET
// ============================================================

function resetCampusView() {

    // Remove route

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    // Remove user marker

    if (userMarker) {

        map.removeLayer(
            userMarker
        );

        userMarker = null;

    }


    // Remove accuracy

    if (accuracyCircle) {

        map.removeLayer(
            accuracyCircle
        );

        accuracyCircle = null;

    }


    userLocation = null;

    selectedDestination = null;


    // Remove selection

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // Reset view

    map.fitBounds(
        allPoints,
        {
            padding: [70, 70]
        }
    );


    // Reset information

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (info) {

        info.innerHTML = `

            <div class="info-title">
                📍 Campus Navigation
            </div>

            <div class="info-text">
                Search a building or select
                a campus location.
            </div>

        `;

    }

}


// ============================================================
// 22. ZOOM
// ============================================================

L.control.zoom({
    position: "bottomright"
}).addTo(map);


// ============================================================
// 23. READY
// ============================================================

console.log(
    "✅ Sarah Tucker College Campus Map Loaded"
);

console.log(
    "📍 Marked campus locations loaded"
);

console.log(
    "🧭 Current Location + Navigation ready"
);
