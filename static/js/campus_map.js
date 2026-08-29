// ============================================================
// SMART CAMPUS NAVIGATION
// REAL MAP - NO IMAGE
// GPS + DESTINATION + ROUTE
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
// 3. CAMPUS CENTER
// ============================================================

const campusCenter = [8.7257, 77.7345];

map.setView(campusCenter, 17);


// ============================================================
// 4. CAMPUS LOCATIONS
// [LATITUDE, LONGITUDE]
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
// 5. VARIABLES
// ============================================================

const markers = {};

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;

let routeLine = null;

let selectedDestination = null;


// ============================================================
// 6. CAMPUS MARKER ICON
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
// 7. ADD CAMPUS MARKERS
// ============================================================

for (const place in locations) {

    const data = locations[place];

    const marker = L.marker(
        data.coords,
        {
            icon: createCampusIcon(data.icon)
        }
    ).addTo(map);


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


    marker.bindTooltip(
        place,
        {
            direction: "top",
            offset: [0, -22],
            className: "campus-label"
        }
    );


    markers[place] = marker;
}


// ============================================================
// 8. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {
        return;
    }


    selectedDestination = place;


    // Remove previous selected style

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }
    }


    // Add selected style

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // Open popup

    markers[place].openPopup();


    // Move map

    map.flyTo(
        locations[place].coords,
        18,
        {
            duration: 1
        }
    );


    updateInfo(
        "📍 Destination Selected",
        `
        Destination:
        <b>${place}</b>

        <br><br>

        ${locations[place].type}

        <br><br>

        ${
            userLocation
            ? "🧭 Route is being calculated..."
            : "📍 Click My Location to start navigation."
        }
        `
    );


    // If current location already exists

    if (userLocation) {

        createRoute();

    }

}


// ============================================================
// 9. SEARCH
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


    // Search location names

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


    // Search aliases

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


    if (!foundPlace) {

        alert(
            "Location not found.\n\n" +
            "Try Library, Computer Science, " +
            "Canteen, Main Gate, Hostel, " +
            "Physics or Chemistry."
        );

        return;
    }


    selectDestination(foundPlace);

}


// ============================================================
// 10. ENTER KEY
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
// 11. INFORMATION PANEL
// ============================================================

function updateInfo(title, text) {

    const info =
        document.getElementById(
            "locationInfo"
        );


    if (!info) {
        return;
    }


    info.innerHTML = `

        <div class="info-title">
            ${title}
        </div>

        <div class="info-text">
            ${text}
        </div>

    `;

}


// ============================================================
// 12. MY LOCATION
// ============================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported."
        );

        return;
    }


    updateInfo(
        "📍 Detecting Location",
        "Please allow location permission..."
    );


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
                        zIndexOffset: 1000
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


            updateInfo(
                "📍 Current Location",
                `
                Location detected successfully.

                <br><br>

                Accuracy:
                <b>${Math.round(accuracy)} meters</b>

                <br><br>

                ${
                    selectedDestination
                    ? "🧭 Creating route..."
                    : "🔎 Select a destination."
                }
                `
            );


            // Create route

            if (selectedDestination) {

                createRoute();

            }

        },


        function(error) {

            console.error(
                "GPS Error:",
                error
            );


            if (error.code === 1) {

                alert(
                    "Location permission denied.\n\n" +
                    "Please allow location access."
                );

            }

            else if (error.code === 2) {

                alert(
                    "Your location is unavailable."
                );

            }

            else if (error.code === 3) {

                alert(
                    "Location request timed out."
                );

            }

            else {

                alert(
                    "Unable to access your location."
                );
            }


            updateInfo(
                "⚠️ Location Error",
                "Please allow browser location permission and try again."
            );

        },

        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }

    );

}


// ============================================================
// 13. CREATE ROUTE
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
        locations[selectedDestination].coords;


    updateInfo(
        "🧭 Finding Route",
        `
        From:
        <b>Current Location</b>

        <br><br>

        To:
        <b>${selectedDestination}</b>

        <br><br>

        Calculating route...
        `
    );


    // Remove previous route

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    try {

        // ====================================================
        // VALHALLA WALKING ROUTING
        // ====================================================

        const url =
            "https://valhalla1.openstreetmap.de/route";


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


        const response =
            await fetch(
                url,
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


        if (
            !data.trip ||
            !data.trip.legs ||
            !data.trip.legs.length
        ) {

            throw new Error(
                "No route found"
            );

        }


        // ====================================================
        // GET ROUTE SHAPE
        // ====================================================

        const shape =
            data.trip.legs[0].shape;


        const decoded =
            decodePolyline(
                shape
            );


        // ====================================================
        // DRAW ROUTE
        // ====================================================

        routeLine =
            L.polyline(
                decoded,
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
        // FIT ROUTE
        // ====================================================

        map.fitBounds(
            routeLine.getBounds(),
            {
                padding: [70, 70]
            }
        );


        // ====================================================
        // DISTANCE
        // ====================================================

        const distance =
            data.trip.summary
            ? data.trip.summary.length
            : null;


        const time =
            data.trip.summary
            ? data.trip.summary.time
            : null;


        let distanceText =
            "Route available";


        if (distance !== null) {

            if (distance < 1) {

                distanceText =
                    Math.round(
                        distance * 1000
                    ) + " m";

            } else {

                distanceText =
                    distance.toFixed(2) +
                    " km";

            }

        }


        let timeText =
            "Walking";


        if (time !== null) {

            const minutes =
                Math.max(
                    1,
                    Math.round(
                        time / 60
                    )
                );


            timeText =
                minutes +
                " min";

        }


        // ====================================================
        // SHOW RESULT
        // ====================================================

        updateInfo(
            "🧭 Route Found",
            `
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
            <b>${timeText}</b>
            `
        );


        console.log(
            "✅ Walking route created"
        );

    }

    catch (error) {

        console.error(
            "Route Error:",
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

                    weight: 6,

                    opacity: 0.8,

                    dashArray: "10 8"
                }
            )
            .addTo(map);


        map.fitBounds(
            routeLine.getBounds(),
            {
                padding: [70, 70]
            }
        );


        updateInfo(
            "🧭 Route Preview",
            `
            📍 From:
            <b>Current Location</b>

            <br><br>

            🎯 To:
            <b>${selectedDestination}</b>

            <br><br>

            ⚠️ Walking road route is
            temporarily unavailable.

            <br><br>

            Showing direct route preview.
            `
        );

    }

}


// ============================================================
// 14. DECODE VALHALLA POLYLINE
// ============================================================

function decodePolyline(encoded) {

    let index = 0;

    let lat = 0;

    let lon = 0;

    const coordinates = [];


    while (
        index < encoded.length
    ) {

        let result = 1;

        let shift = 0;

        let byte;


        do {

            byte =
                encoded.charCodeAt(index++)
                - 63;

            result +=
                (byte & 0x1f)
                << shift;

            shift += 5;

        }
        while (
            byte >= 0x20
        );


        const deltaLat =
            (
                result & 1
            )
            ? ~(result >> 1)
            : (result >> 1);


        lat += deltaLat;


        result = 1;

        shift = 0;


        do {

            byte =
                encoded.charCodeAt(index++)
                - 63;

            result +=
                (byte & 0x1f)
                << shift;

            shift += 5;

        }
        while (
            byte >= 0x20
        );


        const deltaLon =
            (
                result & 1
            )
            ? ~(result >> 1)
            : (result >> 1);


        lon += deltaLon;


        coordinates.push(
            [
                lat / 1e6,
                lon / 1e6
            ]
        );

    }


    return coordinates;

}


// ============================================================
// 15. NAVIGATE BUTTON
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
// 16. RESET MAP
// ============================================================

function resetCampusView() {

    selectedDestination = null;


    // Remove route

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

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


    // Reset view

    map.flyTo(
        campusCenter,
        17,
        {
            duration: 1
        }
    );


    updateInfo(
        "📍 Campus Navigation",
        "Search a building or select a campus location."
    );

}


// ============================================================
// 17. ZOOM
// ============================================================

L.control.zoom({
    position: "bottomright"
}).addTo(map);


// ============================================================
// 18. MAP INVALIDATE SIZE
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    500
);


// ============================================================
// 19. READY
// ============================================================

console.log(
    "✅ Smart Campus Real Map Loaded"
);

console.log(
    "📍 GPS Ready"
);

console.log(
    "🧭 Destination Ready"
);

console.log(
    "🚶 Walking Route Ready"
);
