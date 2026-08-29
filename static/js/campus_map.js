```javascript
// ============================================================
// SMART CAMPUS NAVIGATION
// REAL MAP VERSION
// NO CAMPUS IMAGE
// CURRENT LOCATION → DESTINATION → WALKING ROUTE
// ============================================================


// ============================================================
// 1. CREATE REAL MAP
// ============================================================

const map = L.map("campusMap", {
    zoomControl: false
});


// ============================================================
// 2. OPENSTREETMAP
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 20,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 3. DEFAULT CAMPUS CENTER
// ============================================================

// Sarah Tucker College area
const campusCenter = [8.7257, 77.7345];

map.setView(campusCenter, 17);


// ============================================================
// 4. CAMPUS LOCATIONS
//
// IMPORTANT:
// coords = [latitude, longitude]
// ============================================================

const locations = {

    "Main Gate": {
        coords: [8.72595, 77.73385],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: [8.72620, 77.73405],
        icon: "🏦",
        type: "Bank"
    },

    "Parking Shed": {
        coords: [8.72580, 77.73515],
        icon: "🅿️",
        type: "Parking"
    },

    "Garden": {
        coords: [8.72520, 77.73440],
        icon: "🌳",
        type: "Central Garden"
    },

    "Main Block": {
        coords: [8.72485, 77.73450],
        icon: "🏫",
        type: "Academic Block"
    },

    "Management Office": {
        coords: [8.72505, 77.73475],
        icon: "🏢",
        type: "Administration"
    },

    "Old Auditorium": {
        coords: [8.72490, 77.73520],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Economics": {
        coords: [8.72545, 77.73520],
        icon: "📊",
        type: "Economics Department"
    },

    "Tamil & English": {
        coords: [8.72520, 77.73535],
        icon: "📚",
        type: "Tamil & English Department"
    },

    "Library": {
        coords: [8.72555, 77.73505],
        icon: "📚",
        type: "Library"
    },

    "Canteen": {
        coords: [8.72420, 77.73500],
        icon: "🍴",
        type: "Canteen"
    },

    "English S/F": {
        coords: [8.72395, 77.73515],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [8.72390, 77.73530],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [8.72385, 77.73545],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [8.72375, 77.73530],
        icon: "🧪",
        type: "Food Science Department"
    },

    "Physics": {
        coords: [8.72460, 77.73420],
        icon: "🔬",
        type: "Physics Department"
    },

    "Chemistry": {
        coords: [8.72445, 77.73420],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics S/F": {
        coords: [8.72430, 77.73395],
        icon: "🔬",
        type: "Physics S/F"
    },

    "B.Com & Zoology": {
        coords: [8.72415, 77.73450],
        icon: "🏫",
        type: "B.Com & Zoology"
    },

    "BCA": {
        coords: [8.72425, 77.73370],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        coords: [8.72445, 77.73370],
        icon: "💻",
        type: "MCA Department"
    },

    "History": {
        coords: [8.72470, 77.73355],
        icon: "📖",
        type: "History Department"
    },

    "Maths": {
        coords: [8.72495, 77.73375],
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        coords: [8.72540, 77.73355],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [8.72555, 77.73345],
        icon: "🏛️",
        type: "New Auditorium"
    },

    "Chapel": {
        coords: [8.72395, 77.73420],
        icon: "⛪",
        type: "Chapel"
    },

    "Hostel": {
        coords: [8.72390, 77.73470],
        icon: "🏠",
        type: "Hostel"
    },

    "Playground": {
        coords: [8.72415, 77.73485],
        icon: "⚽",
        type: "Playground"
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
// 7. ROUTE
// ============================================================

let routeControl = null;


// ============================================================
// 8. SELECTED DESTINATION
// ============================================================

let selectedDestination = null;


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

        iconSize: [40, 40],

        iconAnchor: [20, 20]

    });

}


// ============================================================
// 10. ADD ALL CAMPUS MARKERS
// ============================================================

for (const place in locations) {

    const data = locations[place];

    const marker = L.marker(
        data.coords,
        {
            icon: createCampusIcon(data.icon)
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
                onclick="selectDestination('${place}')"
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
            offset: [0, -22],
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

        console.error(
            "Destination not found:",
            place
        );

        return;

    }


    selectedDestination = place;


    // --------------------------------------------------------
    // REMOVE OLD SELECTED STYLE
    // --------------------------------------------------------

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // --------------------------------------------------------
    // HIGHLIGHT DESTINATION
    // --------------------------------------------------------

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // --------------------------------------------------------
    // OPEN POPUP
    // --------------------------------------------------------

    markers[place].openPopup();


    // --------------------------------------------------------
    // SHOW DESTINATION
    // --------------------------------------------------------

    map.flyTo(
        locations[place].coords,
        18,
        {
            duration: 1
        }
    );


    // --------------------------------------------------------
    // INFORMATION PANEL
    // --------------------------------------------------------

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
                    ? "Click Navigate to calculate route."
                    : "Click My Location first to start navigation."
                }

            </div>

        `;

    }


    // --------------------------------------------------------
    // IF GPS EXISTS
    // AUTOMATICALLY CREATE ROUTE
    // --------------------------------------------------------

    if (userLocation) {

        createRoute();

    }

}


// ============================================================
// 12. SEARCH DESTINATION
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


    // --------------------------------------------------------
    // EXACT / PARTIAL SEARCH
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // SPECIAL SEARCH WORDS
    // --------------------------------------------------------

    if (!foundPlace) {

        const aliases = {

            "cs": "Computer Science",
            "computer": "Computer Science",
            "computer science department":
                "Computer Science",

            "library":
                "Library",

            "canteen":
                "Canteen",

            "bank":
                "Canara Bank",

            "parking":
                "Parking Shed",

            "gate":
                "Main Gate",

            "hostel":
                "Hostel",

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

            "chapel":
                "Chapel",

            "playground":
                "Playground",

            "auditorium":
                "New Auditorium"

        };


        for (const key in aliases) {

            if (
                key.includes(input) ||
                input.includes(key)
            ) {

                foundPlace =
                    aliases[key];

                break;

            }

        }

    }


    // --------------------------------------------------------
    // NOT FOUND
    // --------------------------------------------------------

    if (!foundPlace) {

        alert(
            "Location not found.\n\n" +
            "Try:\n" +
            "Library\n" +
            "Computer Science\n" +
            "Canteen\n" +
            "Main Gate\n" +
            "Hostel\n" +
            "Physics\n" +
            "Chemistry"
        );

        return;

    }


    selectDestination(foundPlace);

}


// ============================================================
// 13. ENTER KEY SEARCH
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
// 14. GET CURRENT LOCATION
// ============================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported by this browser."
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


            console.log(
                "Current Location:",
                latitude,
                longitude
            );


            // ------------------------------------------------
            // REMOVE OLD USER MARKER
            // ------------------------------------------------

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


            // ------------------------------------------------
            // USER LOCATION ICON
            // ------------------------------------------------

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
                )
                .addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // ------------------------------------------------
            // ACCURACY CIRCLE
            // ------------------------------------------------

            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius: accuracy,
                        className:
                            "location-accuracy"
                    }
                ).addTo(map);


            // ------------------------------------------------
            // MOVE MAP TO USER
            // ------------------------------------------------

            map.flyTo(
                userLocation,
                18,
                {
                    duration: 1
                }
            );


            // ------------------------------------------------
            // INFORMATION
            // ------------------------------------------------

            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 Current Location
                    </div>

                    <div class="info-text">

                        Location detected successfully.

                        <br><br>

                        Accuracy:
                        ${Math.round(accuracy)} meters

                        <br><br>

                        ${
                            selectedDestination
                            ? "🧭 Calculating route..."
                            : "🔎 Select a destination."
                        }

                    </div>

                `;

            }


            // ------------------------------------------------
            // CREATE ROUTE IF DESTINATION EXISTS
            // ------------------------------------------------

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
                    "Location permission denied.\n\n" +
                    "Please allow location access.";

            }

            else if (error.code === 2) {

                message =
                    "Your location is currently unavailable.";

            }

            else if (error.code === 3) {

                message =
                    "Location request timed out.";

            }


            alert(message);


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        ⚠️ Location Error
                    </div>

                    <div class="info-text">
                        ${message.replace(/\n/g, "<br>")}
                    </div>

                `;

            }

        },


        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }

    );

}


// ============================================================
// 15. CREATE WALKING ROUTE
// ============================================================

function createRoute() {

    if (!userLocation) {

        alert(
            "First click My Location to detect your current location."
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
        locations[selectedDestination].coords;


    // --------------------------------------------------------
    // REMOVE OLD ROUTE
    // --------------------------------------------------------

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    // --------------------------------------------------------
    // UPDATE INFORMATION
    // --------------------------------------------------------

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

                Calculating walking route...

            </div>

        `;

    }


    // --------------------------------------------------------
    // OSRM ROUTING
    //
    // Foot routing depends on the routing server.
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
                        "https://router.project-osrm.org/route/v1",

                    profile:
                        "foot"

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

            show: true,

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


    // --------------------------------------------------------
    // ROUTE FOUND
    // --------------------------------------------------------

    routeControl.on(
        "routesfound",
        function(event) {

            const routes =
                event.routes;


            if (
                !routes ||
                routes.length === 0
            ) {

                return;

            }


            const summary =
                routes[0].summary;


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

                        🚶 Walking Time:
                        <b>${minutes} min</b>

                    </div>

                `;

            }


            console.log(
                "Route distance:",
                distanceText
            );

            console.log(
                "Walking time:",
                minutes,
                "minutes"
            );

        }
    );


    // --------------------------------------------------------
    // ROUTE ERROR
    // --------------------------------------------------------

    routeControl.on(
        "routingerror",
        function(error) {

            console.error(
                "Routing Error:",
                error
            );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        ⚠️ Route Not Available
                    </div>

                    <div class="info-text">

                        Unable to calculate the route.

                        <br><br>

                        Please check your
                        internet connection
                        and try again.

                    </div>

                `;

            }

        }
    );

}


// ============================================================
// 16. DIRECT NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
        );

        return;

    }


    if (!userLocation) {

        alert(
            "Please click My Location first."
        );

        showMyLocation();

        return;

    }


    createRoute();

}


// ============================================================
// 17. RESET MAP
// ============================================================

function resetCampusView() {

    // --------------------------------------------------------
    // REMOVE ROUTE
    // --------------------------------------------------------

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    // --------------------------------------------------------
    // REMOVE USER LOCATION
    // --------------------------------------------------------

    if (userMarker) {

        map.removeLayer(
            userMarker
        );

        userMarker = null;

    }


    if (accuracyCircle) {

        map.removeLayer(
            accuracyCircle
        );

        accuracyCircle = null;

    }


    // --------------------------------------------------------
    // RESET SELECTION
    // --------------------------------------------------------

    selectedDestination = null;


    // --------------------------------------------------------
    // REMOVE MARKER HIGHLIGHT
    // --------------------------------------------------------

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // --------------------------------------------------------
    // RESET MAP VIEW
    // --------------------------------------------------------

    map.flyTo(
        campusCenter,
        17,
        {
            duration: 1
        }
    );


    // --------------------------------------------------------
    // RESET INFORMATION
    // --------------------------------------------------------

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
// 19. MAP READY
// ============================================================

console.log(
    "✅ Real Smart Campus Map Loaded"
);

console.log(
    "📍 GPS + Destination + Route Navigation Ready"
);
```
