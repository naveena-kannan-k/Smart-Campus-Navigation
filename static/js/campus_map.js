// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// GOOGLE-MAP STYLE
// NO CAMPUS IMAGE
// ============================================================


// ============================================================
// 1. CREATE MAP
// ============================================================

const map = L.map("campusMap", {
    zoomControl: false
});


// ============================================================
// 2. OPENSTREETMAP BASE MAP
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 21,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 3. SARAH TUCKER COLLEGE CENTER
// ============================================================

const campusCenter = [
    8.69860,
    77.74165
];

map.setView(campusCenter, 18);


// ============================================================
// 4. CAMPUS LOCATIONS
//
// IMPORTANT:
// These positions follow YOUR CAMPUS SKETCH.
// Latitude  = up/down
// Longitude = left/right
// ============================================================

const locations = {

    // ========================================================
    // SOUTH / MAIN ENTRANCE
    // ========================================================

    "Main Gate": {
        coords: [8.69772, 77.74165],
        icon: "🚪",
        type: "Main Gate"
    },

    "Canara Bank": {
        coords: [8.69790, 77.74085],
        icon: "🏦",
        type: "Canara Bank"
    },

    "Parking Area": {
        coords: [8.69792, 77.74245],
        icon: "🅿️",
        type: "Parking Area"
    },


    // ========================================================
    // CENTRAL AREA
    // ========================================================

    "Principal Office": {
        coords: [8.69842, 77.74142],
        icon: "🏢",
        type: "Principal Office"
    },

    "Management Office": {
        coords: [8.69848, 77.74172],
        icon: "🏢",
        type: "Management Office"
    },

    "Main Block": {
        coords: [8.69868, 77.74155],
        icon: "🏫",
        type: "Main Block"
    },

    "Garden": {
        coords: [8.69892, 77.74148],
        icon: "🌳",
        type: "Garden"
    },


    // ========================================================
    // RIGHT SIDE
    // ========================================================

    "Library": {
        coords: [8.69878, 77.74225],
        icon: "📚",
        type: "Library"
    },

    "Tamil": {
        coords: [8.69902, 77.74242],
        icon: "📚",
        type: "Tamil Department"
    },

    "Economics": {
        coords: [8.69912, 77.74258],
        icon: "📊",
        type: "Economics Department"
    },

    "Old Auditorium": {
        coords: [8.69935, 77.74272],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Canteen": {
        coords: [8.69958, 77.74238],
        icon: "🍴",
        type: "Canteen"
    },


    // ========================================================
    // RIGHT UPPER DEPARTMENTS
    // ========================================================

    "English S/F": {
        coords: [8.69978, 77.74255],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [8.69990, 77.74270],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [8.70002, 77.74285],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [8.70014, 77.74268],
        icon: "🧪",
        type: "Food Science Department"
    },


    // ========================================================
    // LEFT OF MAIN BLOCK
    // ========================================================

    "Physics": {
        coords: [8.69865, 77.74105],
        icon: "🔬",
        type: "Physics Department"
    },

    "Chemistry": {
        coords: [8.69848, 77.74098],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics S/F": {
        coords: [8.69832, 77.74088],
        icon: "🔬",
        type: "Physics S/F"
    },

    "B.Com & Zoology": {
        coords: [8.69855, 77.74125],
        icon: "🏫",
        type: "B.Com & Zoology"
    },


    // ========================================================
    // LEFT SIDE DEPARTMENTS
    // ========================================================

    "Maths": {
        coords: [8.69872, 77.74055],
        icon: "📐",
        type: "Mathematics Department"
    },

    "History": {
        coords: [8.69892, 77.74040],
        icon: "📖",
        type: "History Department"
    },

    "MCA": {
        coords: [8.69908, 77.74030],
        icon: "💻",
        type: "MCA Department"
    },

    "BCA": {
        coords: [8.69925, 77.74028],
        icon: "💻",
        type: "BCA Department"
    },

    "Nano Science": {
        coords: [8.69945, 77.74045],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [8.69972, 77.74058],
        icon: "🏛️",
        type: "New Auditorium"
    },


    // ========================================================
    // NORTH / TOP AREA
    // ========================================================

    "Playground": {
        coords: [8.70018, 77.74160],
        icon: "⚽",
        type: "Playground"
    },

    "Hostel": {
        coords: [8.70042, 77.74175],
        icon: "🏠",
        type: "Hostel"
    },

    "Chapel": {
        coords: [8.70008, 77.74080],
        icon: "⛪",
        type: "Chapel"
    }

};


// ============================================================
// 5. MARKER STORAGE
// ============================================================

const markers = {};


// ============================================================
// 6. USER LOCATION
// ============================================================

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;


// ============================================================
// 7. SELECTED DESTINATION
// ============================================================

let selectedDestination = null;


// ============================================================
// 8. ROUTE
// ============================================================

let routeControl = null;


// ============================================================
// 9. CUSTOM CAMPUS ICON
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
// 10. ADD CAMPUS MARKERS
// ============================================================

for (const place in locations) {

    const data = locations[place];

    const marker = L.marker(
        data.coords,
        {
            icon: createCampusIcon(data.icon)
        }
    ).addTo(map);


    // ========================================================
    // POPUP
    // ========================================================

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
                onclick="selectDestination('${place}')"
            >
                🧭 Navigate
            </button>

        </div>

    `);


    // ========================================================
    // LABEL
    // ========================================================

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
// 11. SELECT DESTINATION
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


    // Open popup

    markers[place].openPopup();


    // Move to destination

    map.flyTo(
        locations[place].coords,
        19,
        {
            duration: 1
        }
    );


    // Information panel

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
                    : "📍 Click My Location to start navigation."
                }

            </div>

        `;

    }

}


// ============================================================
// 12. SEARCH
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


    // Exact / partial match

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


    // ========================================================
    // SEARCH ALIASES
    // ========================================================

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

        "canara":
            "Canara Bank",

        "parking":
            "Parking Area",

        "gate":
            "Main Gate",

        "main gate":
            "Main Gate",

        "hostel":
            "Hostel",

        "playground":
            "Playground",

        "chapel":
            "Chapel",

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

        "tamil":
            "Tamil",

        "english":
            "English S/F",

        "bca":
            "BCA",

        "mca":
            "MCA",

        "food science":
            "Food Science",

        "bcom":
            "B.Com S/F",

        "auditorium":
            "New Auditorium"

    };


    if (!foundPlace) {

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
            "Try Library, Computer Science, " +
            "Canteen, Main Gate, Hostel, " +
            "Physics, Chemistry, etc."
        );

        return;

    }


    selectDestination(foundPlace);

}


// ============================================================
// 13. ENTER KEY
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
// 14. CURRENT LOCATION
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


            // =================================================
            // BLUE GPS DOT
            // =================================================

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
                        zIndexOffset: 1000
                    }
                ).addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // Accuracy circle

            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius: accuracy,
                        className:
                            "location-accuracy"
                    }
                ).addTo(map);


            // Move map

            map.flyTo(
                userLocation,
                19,
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
                        ${Math.round(accuracy)} m

                        <br><br>

                        ${
                            selectedDestination
                            ? "🧭 Destination selected."
                            : "🔎 Select a destination."
                        }

                    </div>

                `;

            }


            // If destination already selected

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
// 15. ROUTE
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
            "Select a destination first."
        );

        return;

    }


    const destination =
        locations[selectedDestination].coords;


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
                🧭 Navigation
            </div>

            <div class="info-text">

                From:
                <b>Current Location</b>

                <br><br>

                To:
                <b>${selectedDestination}</b>

                <br><br>

                Finding route...

            </div>

        `;

    }


    // ========================================================
    // LEAFLET ROUTING MACHINE
    // ========================================================

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

        }).addTo(map);


    // ========================================================
    // ROUTE FOUND
    // ========================================================

    routeControl.on(
        "routesfound",
        function(event) {

            const route =
                event.routes[0];

            if (!route) {
                return;
            }


            const summary =
                route.summary;


            const distance =
                summary.totalDistance;


            const time =
                summary.totalTime;


            const distanceText =
                distance >= 1000
                ? (distance / 1000).toFixed(2) + " km"
                : Math.round(distance) + " m";


            const minutes =
                Math.max(
                    1,
                    Math.round(time / 60)
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

                        🚶 Estimated Time:
                        <b>${minutes} min</b>

                    </div>

                `;

            }

        }
    );


    // ========================================================
    // ROUTE ERROR
    // ========================================================

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
                        ⚠️ Route Not Available
                    </div>

                    <div class="info-text">

                        Unable to calculate route.

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
// 16. NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination."
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
// 17. RESET
// ============================================================

function resetCampusView() {

    // Remove route

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    // Remove GPS marker

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


    // Remove selected style

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // Return to campus

    map.flyTo(
        campusCenter,
        18,
        {
            duration: 1
        }
    );


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
// 18. ZOOM CONTROL
// ============================================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ============================================================
// 19. FIX MAP SIZE
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    300
);


// ============================================================
// 20. READY
// ============================================================

console.log(
    "✅ Sarah Tucker College Campus Map Loaded"
);

console.log(
    "📍 Campus locations loaded:",
    Object.keys(locations).length
);
