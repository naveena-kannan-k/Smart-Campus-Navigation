// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// REAL OPENSTREETMAP VERSION
// NO CAMPUS IMAGE
//
// FEATURES
// ------------------------------------------------------------
// • Real OpenStreetMap
// • Campus locations based on your marked campus layout
// • Search
// • Current Location
// • Destination selection
// • Walking route
// • Distance
// • Walking time
// • Reset
// ============================================================


// ============================================================
// 1. CREATE MAP
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
        maxZoom: 21,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 3. SARAH TUCKER COLLEGE CENTER
//
// Actual college area is around:
// 8.6986, 77.74165
// ============================================================

const campusCenter = [
    8.69860,
    77.74165
];


// Initial view

map.setView(
    campusCenter,
    18
);


// ============================================================
// 4. CAMPUS LOCATIONS
//
// IMPORTANT
// ------------------------------------------------------------
// These are arranged according to the campus layout
// you marked and showed.
//
// Main Gate = bottom
// Bank = left of Main Gate
// Parking = right of Main Gate
// Main Block = centre
// Library = right
// Departments = left / right groups
// Hostel / Chapel / Playground = upper area
// ============================================================

const locations = {

    // ========================================================
    // BOTTOM / ENTRANCE
    // ========================================================

    "Main Gate": {
        coords: [8.69778, 77.74165],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: [8.69798, 77.74082],
        icon: "🏦",
        type: "Canara Bank"
    },

    "Parking Area": {
        coords: [8.69798, 77.74238],
        icon: "🅿️",
        type: "Parking Area"
    },


    // ========================================================
    // CENTRAL AREA
    // ========================================================

    "Main Block": {
        coords: [8.69862, 77.74148],
        icon: "🏫",
        type: "Main Block"
    },

    "Principal Office": {
        coords: [8.69848, 77.74130],
        icon: "👩‍💼",
        type: "Principal Office"
    },

    "Management Office": {
        coords: [8.69848, 77.74172],
        icon: "🏢",
        type: "Management Office"
    },

    "Garden": {
        coords: [8.69902, 77.74155],
        icon: "🌳",
        type: "Central Garden"
    },


    // ========================================================
    // LEFT SIDE - SCIENCE / ARTS
    // ========================================================

    "Chemistry": {
        coords: [8.69872, 77.74072],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics": {
        coords: [8.69888, 77.74072],
        icon: "🔬",
        type: "Physics Department"
    },

    "Physics S/F": {
        coords: [8.69902, 77.74070],
        icon: "🔬",
        type: "Physics S/F Department"
    },

    "Maths": {
        coords: [8.69918, 77.74078],
        icon: "📐",
        type: "Mathematics Department"
    },

    "History": {
        coords: [8.69938, 77.74082],
        icon: "📖",
        type: "History Department"
    },

    "BCA": {
        coords: [8.69928, 77.74048],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        coords: [8.69948, 77.74050],
        icon: "💻",
        type: "MCA Department"
    },

    "Nano Science": {
        coords: [8.69968, 77.74068],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [8.69982, 77.74092],
        icon: "🏛️",
        type: "New Auditorium"
    },


    // ========================================================
    // RIGHT SIDE
    // ========================================================

    "Library": {
        coords: [8.69872, 77.74235],
        icon: "📚",
        type: "Library"
    },

    "Tamil & English": {
        coords: [8.69878, 77.74278],
        icon: "📚",
        type: "Tamil & English Department"
    },

    "Economics": {
        coords: [8.69898, 77.74278],
        icon: "📊",
        type: "Economics Department"
    },

    "Old Auditorium": {
        coords: [8.69922, 77.74278],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Canteen": {
        coords: [8.69948, 77.74245],
        icon: "🍴",
        type: "Canteen"
    },


    // ========================================================
    // SELF FINANCING DEPARTMENTS
    // ========================================================

    "English S/F": {
        coords: [8.69962, 77.74260],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [8.69978, 77.74260],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [8.69994, 77.74260],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [8.70010, 77.74260],
        icon: "🧪",
        type: "Food Science Department"
    },


    // ========================================================
    // OTHER CAMPUS AREAS
    // ========================================================

    "B.Com & Zoology": {
        coords: [8.69882, 77.74145],
        icon: "🏫",
        type: "B.Com & Zoology"
    },

    "Chapel": {
        coords: [8.69965, 77.73995],
        icon: "⛪",
        type: "Chapel"
    },

    "Hostel": {
        coords: [8.70015, 77.74135],
        icon: "🏠",
        type: "Hostel"
    },

    "Playground": {
        coords: [8.70005, 77.74205],
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
// 7. SELECTED DESTINATION
// ============================================================

let selectedDestination = null;


// ============================================================
// 8. ROUTE LINE
// ============================================================

let routeLine = null;


// ============================================================
// 9. ROUTE MARKERS
// ============================================================

let routeStartMarker = null;

let routeEndMarker = null;


// ============================================================
// 10. CAMPUS ICON
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
// 11. ADD CAMPUS MARKERS
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
// 12. SELECT DESTINATION
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


    // ========================================================
    // REMOVE OLD SELECTED STYLE
    // ========================================================

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // ========================================================
    // HIGHLIGHT
    // ========================================================

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // ========================================================
    // OPEN POPUP
    // ========================================================

    markers[place].openPopup();


    // ========================================================
    // INFORMATION PANEL
    // ========================================================

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
                    ? "Press Navigate to calculate walking route."
                    : "Press My Location first."
                }

            </div>

        `;

    }


    // ========================================================
    // MOVE TO DESTINATION
    // ========================================================

    map.flyTo(
        locations[place].coords,
        19,
        {
            duration: 1
        }
    );

}


// ============================================================
// 13. SEARCH
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


    // ========================================================
    // DIRECT SEARCH
    // ========================================================

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
    // ALIASES
    // ========================================================

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

            "canara":
                "Canara Bank",

            "parking":
                "Parking Area",

            "gate":
                "Main Gate",

            "main gate":
                "Main Gate",

            "principal":
                "Principal Office",

            "principal office":
                "Principal Office",

            "management":
                "Management Office",

            "office":
                "Management Office",

            "hostel":
                "Hostel",

            "chapel":
                "Chapel",

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

            "auditorium":
                "New Auditorium",

            "old auditorium":
                "Old Auditorium",

            "new auditorium":
                "New Auditorium",

            "food":
                "Food Science",

            "food science":
                "Food Science",

            "bcom":
                "B.Com S/F",

            "zoology":
                "B.Com & Zoology",

            "tamil":
                "Tamil & English",

            "english":
                "Tamil & English"

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


    // ========================================================
    // NOT FOUND
    // ========================================================

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
// 14. ENTER KEY
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
// 15. CURRENT LOCATION
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


            console.log(
                "GPS Location:",
                latitude,
                longitude
            );


            // =================================================
            // REMOVE OLD USER MARKER
            // =================================================

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
            // USER ICON
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
                        zIndexOffset: 2000
                    }
                )
                .addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // =================================================
            // ACCURACY CIRCLE
            // =================================================

            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius: accuracy,
                        className:
                            "location-accuracy"
                    }
                ).addTo(map);


            // =================================================
            // MOVE TO USER
            // =================================================

            map.flyTo(
                userLocation,
                19,
                {
                    duration: 1
                }
            );


            // =================================================
            // INFO
            // =================================================

            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 Current Location
                    </div>

                    <div class="info-text">

                        Location detected successfully.

                        <br><br>

                        Accuracy:
                        <b>${Math.round(accuracy)} m</b>

                        <br><br>

                        ${
                            selectedDestination
                            ? "🧭 Ready to navigate."
                            : "🔎 Select a destination."
                        }

                    </div>

                `;

            }


            // =================================================
            // IF DESTINATION ALREADY SELECTED
            // =================================================

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
                    "Your location is unavailable.";

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
                        ${message.replace(
                            /\n/g,
                            "<br>"
                        )}
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
// 16. CREATE WALKING ROUTE
//
// Valhalla pedestrian routing
// ============================================================

async function createRoute() {

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


    const info =
        document.getElementById(
            "locationInfo"
        );


    // ========================================================
    // REMOVE OLD ROUTE
    // ========================================================

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    if (routeStartMarker) {

        map.removeLayer(
            routeStartMarker
        );

        routeStartMarker = null;

    }


    if (routeEndMarker) {

        map.removeLayer(
            routeEndMarker
        );

        routeEndMarker = null;

    }


    // ========================================================
    // SHOW LOADING
    // ========================================================

    if (info) {

        info.innerHTML = `

            <div class="info-title">
                🧭 Finding Walking Route...
            </div>

            <div class="info-text">

                From:
                <b>Current Location</b>

                <br><br>

                To:
                <b>${selectedDestination}</b>

                <br><br>

                Please wait...

            </div>

        `;

    }


    // ========================================================
    // VALHALLA REQUEST
    // ========================================================

    const requestData = {

        locations: [

            {
                lat: userLocation[0],
                lon: userLocation[1]
            },

            {
                lat: destination[0],
                lon: destination[1]
            }

        ],

        costing: "pedestrian",

        units: "kilometers",

        directions_options: {
            units: "kilometers"
        }

    };


    try {

        const response =
            await fetch(
                "https://valhalla1.openstreetmap.de/route",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            requestData
                        )

                }
            );


        if (!response.ok) {

            throw new Error(
                "Routing server error"
            );

        }


        const data =
            await response.json();


        // ====================================================
        // CHECK ROUTE
        // ====================================================

        if (
            !data.trip ||
            !data.trip.legs ||
            data.trip.legs.length === 0
        ) {

            throw new Error(
                "No walking route found"
            );

        }


        const leg =
            data.trip.legs[0];


        const shape =
            leg.shape;


        // ====================================================
        // DECODE POLYLINE6
        // ====================================================

        const coordinates =
            decodePolyline6(
                shape
            );


        // ====================================================
        // DRAW ROUTE
        // ====================================================

        routeLine =
            L.polyline(
                coordinates,
                {

                    className:
                        "campus-route-line",

                    weight: 7,

                    opacity: 0.9,

                    lineCap: "round",

                    lineJoin: "round"

                }
            )
            .addTo(map);


        // ====================================================
        // START MARKER
        // ====================================================

        routeStartMarker =
            L.circleMarker(
                userLocation,
                {

                    radius: 9,

                    className:
                        "route-start-marker"

                }
            )
            .addTo(map);


        routeStartMarker.bindPopup(
            "📍 You are here"
        );


        // ====================================================
        // DESTINATION MARKER
        // ====================================================

        routeEndMarker =
            L.circleMarker(
                destination,
                {

                    radius: 9,

                    className:
                        "route-end-marker"

                }
            )
            .addTo(map);


        routeEndMarker.bindPopup(
            "🎯 " +
            selectedDestination
        );


        // ====================================================
        // FIT ROUTE
        // ====================================================

        map.fitBounds(
            routeLine.getBounds(),
            {
                padding: [60, 60]
            }
        );


        // ====================================================
        // DISTANCE
        // ====================================================

        let distance =
            data.trip.summary
            ? data.trip.summary.length
            : 0;


        // ====================================================
        // TIME
        // ========================================================

        let timeSeconds =
            data.trip.summary
            ? data.trip.summary.time
            : 0;


        const distanceText =
            distance < 1
            ? Math.round(distance * 1000) + " m"
            : distance.toFixed(2) + " km";


        const minutes =
            Math.max(
                1,
                Math.round(
                    timeSeconds / 60
                )
            );


        // ====================================================
        // INFO PANEL
        // ====================================================

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

                    <br><br>

                    🚶 Walking Time:
                    <b>${minutes} min</b>

                </div>

            `;

        }


        console.log(
            "Walking route created"
        );

        console.log(
            "Distance:",
            distanceText
        );

        console.log(
            "Time:",
            minutes,
            "minutes"
        );

    }

    catch (error) {

        console.error(
            "Routing Error:",
            error
        );


        // ====================================================
        // FALLBACK STRAIGHT ROUTE
        // ====================================================

        routeLine =
            L.polyline(
                [
                    userLocation,
                    destination
                ],
                {

                    className:
                        "campus-route-line",

                    weight: 7,

                    dashArray:
                        "12, 10",

                    opacity: 0.8

                }
            )
            .addTo(map);


        map.fitBounds(
            routeLine.getBounds(),
            {
                padding: [60, 60]
            }
        );


        if (info) {

            info.innerHTML = `

                <div class="info-title">
                    ⚠️ Route Service Unavailable
                </div>

                <div class="info-text">

                    The walking routing server
                    could not calculate a road route.

                    <br><br>

                    Please try again.

                </div>

            `;

        }

    }

}


// ============================================================
// 17. POLYLINE6 DECODER
// ============================================================

function decodePolyline6(encoded) {

    let index = 0;

    let lat = 0;

    let lng = 0;

    const coordinates = [];


    while (
        index <
        encoded.length
    ) {

        let result = 1;

        let shift = 0;

        let b;


        do {

            b =
                encoded.charCodeAt(
                    index++
                ) - 63;


            result +=
                (b & 0x1f) << shift;


            shift += 5;

        }

        while (b >= 0x20);


        const deltaLat =
            (result & 1)
            ? ~(result >> 1)
            : (result >> 1);


        lat += deltaLat;


        result = 1;

        shift = 0;


        do {

            b =
                encoded.charCodeAt(
                    index++
                ) - 63;


            result +=
                (b & 0x1f) << shift;


            shift += 5;

        }

        while (b >= 0x20);


        const deltaLng =
            (result & 1)
            ? ~(result >> 1)
            : (result >> 1);


        lng += deltaLng;


        coordinates.push(
            [
                lat / 1000000,
                lng / 1000000
            ]
        );

    }


    return coordinates;

}


// ============================================================
// 18. NAVIGATE BUTTON
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
// 19. RESET MAP
// ============================================================

function resetCampusView() {


    // ========================================================
    // REMOVE ROUTE
    // ========================================================

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    if (routeStartMarker) {

        map.removeLayer(
            routeStartMarker
        );

        routeStartMarker = null;

    }


    if (routeEndMarker) {

        map.removeLayer(
            routeEndMarker
        );

        routeEndMarker = null;

    }


    // ========================================================
    // REMOVE USER LOCATION
    // ========================================================

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


    // ========================================================
    // RESET VARIABLES
    // ========================================================

    userLocation = null;

    selectedDestination = null;


    // ========================================================
    // REMOVE HIGHLIGHT
    // ========================================================

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // ========================================================
    // RESET MAP
    // ========================================================

    map.flyTo(
        campusCenter,
        18,
        {
            duration: 1
        }
    );


    // ========================================================
    // CLEAR SEARCH
    // ========================================================

    const input =
        document.getElementById(
            "destinationInput"
        );


    if (input) {

        input.value = "";

    }


    // ========================================================
    // RESET INFO
    // ========================================================

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
// 20. ZOOM CONTROL
// ============================================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ============================================================
// 21. FIX MAP SIZE
//
// Important when map is inside a hidden/loaded container.
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    300
);


window.addEventListener(
    "resize",
    function() {

        map.invalidateSize();

    }
);


// ============================================================
// 22. READY
// ============================================================

console.log(
    "========================================"
);

console.log(
    "✅ SARAH TUCKER COLLEGE MAP READY"
);

console.log(
    "✅ OpenStreetMap Loaded"
);

console.log(
    "✅ Campus Locations Loaded"
);

console.log(
    "✅ Current Location Ready"
);

console.log(
    "✅ Walking Navigation Ready"
);

console.log(
    "========================================"
);
