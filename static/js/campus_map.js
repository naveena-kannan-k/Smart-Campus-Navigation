// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// REAL OPENSTREETMAP + CUSTOM CAMPUS LOCATIONS
// NO CAMPUS IMAGE
// GPS + SEARCH + DESTINATION + WALKING ROUTE
// ============================================================


// ============================================================
// 1. MAP
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
// 3. CAMPUS REFERENCE
//
// Sarah Tucker College:
// approximately 8.6986, 77.74165
//
// Main Gate is used as the custom campus reference point.
// ============================================================

const MAIN_GATE = [
    8.69795,
    77.74165
];


// ============================================================
// 4. CONVERT METERS TO LAT/LNG
//
// This lets us create the campus layout from your drawing.
// North = up
// East  = right
// West  = left
// ============================================================

function offsetFromGate(
    northMeters,
    eastMeters
) {

    const lat =
        MAIN_GATE[0] +
        (northMeters / 111320);

    const lng =
        MAIN_GATE[1] +
        (
            eastMeters /
            (
                111320 *
                Math.cos(
                    MAIN_GATE[0] *
                    Math.PI / 180
                )
            )
        );

    return [
        lat,
        lng
    ];
}


// ============================================================
// 5. CAMPUS LOCATIONS
//
// Layout follows your hand-drawn campus map.
// ============================================================

const locations = {

    // --------------------------------------------------------
    // SOUTH / ENTRANCE
    // --------------------------------------------------------

    "Main Gate": {
        coords: offsetFromGate(0, 0),
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: offsetFromGate(5, -55),
        icon: "🏦",
        type: "Canara Bank"
    },

    "Parking Area": {
        coords: offsetFromGate(5, 55),
        icon: "🅿️",
        type: "Parking Area"
    },


    // --------------------------------------------------------
    // CENTRAL MAIN BLOCK
    // --------------------------------------------------------

    "Main Block": {
        coords: offsetFromGate(45, 0),
        icon: "🏫",
        type: "Main Block"
    },

    "Principal Office": {
        coords: offsetFromGate(52, -12),
        icon: "👩‍💼",
        type: "Principal Office"
    },

    "Management Office": {
        coords: offsetFromGate(52, 18),
        icon: "🏢",
        type: "Management Office"
    },

    "Ground Floor": {
        coords: offsetFromGate(40, 0),
        icon: "🏫",
        type: "Ground Floor"
    },

    "First Floor": {
        coords: offsetFromGate(57, 2),
        icon: "🏢",
        type: "First Floor"
    },


    // --------------------------------------------------------
    // CENTRAL SCIENCE
    // --------------------------------------------------------

    "Chemistry": {
        coords: offsetFromGate(60, 28),
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics": {
        coords: offsetFromGate(67, 28),
        icon: "🔬",
        type: "Physics Department"
    },

    "Botany": {
        coords: offsetFromGate(72, 12),
        icon: "🌿",
        type: "Botany Department"
    },

    "Zoology": {
        coords: offsetFromGate(72, -5),
        icon: "🦋",
        type: "Zoology Department"
    },

    "B.Com & Zoology": {
        coords: offsetFromGate(72, -5),
        icon: "🏫",
        type: "B.Com & Zoology"
    },


    // --------------------------------------------------------
    // CENTRAL GARDEN
    // --------------------------------------------------------

    "Garden": {
        coords: offsetFromGate(72, 45),
        icon: "🌳",
        type: "Central Garden"
    },


    // --------------------------------------------------------
    // LEFT / WEST SIDE
    // --------------------------------------------------------

    "Partition Hall": {
        coords: offsetFromGate(75, -50),
        icon: "🏛️",
        type: "Partition Hall"
    },

    "New Auditorium": {
        coords: offsetFromGate(95, -65),
        icon: "🏛️",
        type: "New Auditorium"
    },

    "History": {
        coords: offsetFromGate(105, -42),
        icon: "📖",
        type: "History Department"
    },

    "Maths": {
        coords: offsetFromGate(93, -35),
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        coords: offsetFromGate(82, -62),
        icon: "🧪",
        type: "Nano Science Department"
    },

    "Physics S/F": {
        coords: offsetFromGate(86, -15),
        icon: "🔬",
        type: "Physics Self Financing"
    },


    // --------------------------------------------------------
    // NORTH
    // --------------------------------------------------------

    "Hostel": {
        coords: offsetFromGate(125, 5),
        icon: "🏠",
        type: "Hostel"
    },

    "Chapel": {
        coords: offsetFromGate(112, 28),
        icon: "⛪",
        type: "Chapel"
    },

    "Playground": {
        coords: offsetFromGate(105, 55),
        icon: "⚽",
        type: "Playground"
    },


    // --------------------------------------------------------
    // EAST / RIGHT SIDE
    // --------------------------------------------------------

    "Library": {
        coords: offsetFromGate(58, 52),
        icon: "📚",
        type: "Library"
    },

    "Economics": {
        coords: offsetFromGate(70, 65),
        icon: "📊",
        type: "Economics Department"
    },

    "Tamil": {
        coords: offsetFromGate(76, 70),
        icon: "📚",
        type: "Tamil Department"
    },

    "Tamil & English": {
        coords: offsetFromGate(76, 70),
        icon: "📚",
        type: "Tamil & English Department"
    },


    // --------------------------------------------------------
    // CANTEEN / JOHN TUCKER BLOCK
    // --------------------------------------------------------

    "Canteen": {
        coords: offsetFromGate(80, 48),
        icon: "🍴",
        type: "Canteen"
    },

    "Sports Room": {
        coords: offsetFromGate(100, 48),
        icon: "🏃",
        type: "Sports Room"
    },

    "John Tucker Block": {
        coords: offsetFromGate(85, 80),
        icon: "🏫",
        type: "John Tucker Block"
    },

    "Food Science": {
        coords: offsetFromGate(82, 92),
        icon: "🧪",
        type: "Food Science Department"
    },

    "Computer Science": {
        coords: offsetFromGate(90, 92),
        icon: "💻",
        type: "Computer Science Department"
    },

    "B.Com S/F": {
        coords: offsetFromGate(97, 92),
        icon: "💼",
        type: "B.Com Self Financing"
    },

    "English S/F": {
        coords: offsetFromGate(104, 92),
        icon: "📚",
        type: "English Self Financing"
    },


    // --------------------------------------------------------
    // OLD AUDITORIUM
    // --------------------------------------------------------

    "Old Auditorium": {
        coords: offsetFromGate(118, 88),
        icon: "🏛️",
        type: "Old Auditorium"
    }

};


// ============================================================
// 6. MAP VIEW
// ============================================================

const allPoints =
    Object.values(locations)
    .map(place => place.coords);

const campusBounds =
    L.latLngBounds(allPoints);

map.fitBounds(
    campusBounds,
    {
        padding: [50, 50]
    }
);


// ============================================================
// 7. MARKERS
// ============================================================

const markers = {};


// ============================================================
// 8. CUSTOM ICON
// ============================================================

function createCampusIcon(icon) {

    return L.divIcon({

        className:
            "custom-campus-marker",

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
// 9. ADD MARKERS
// ============================================================

for (
    const place in locations
) {

    const data =
        locations[place];


    const marker =
        L.marker(
            data.coords,
            {
                icon:
                    createCampusIcon(
                        data.icon
                    )
            }
        )
        .addTo(map);


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
                onclick="
                    selectDestination(
                        '${place}'
                    )
                "
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
            className:
                "campus-label"
        }
    );


    markers[place] =
        marker;

}


// ============================================================
// 10. VARIABLES
// ============================================================

let selectedDestination =
    null;

let userLocation =
    null;

let userMarker =
    null;

let accuracyCircle =
    null;

let routeLine =
    null;


// ============================================================
// 11. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {
        return;
    }


    selectedDestination =
        place;


    // Remove old selection

    for (
        const name in markers
    ) {

        const element =
            markers[name]
            .getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // Highlight selected marker

    const selectedElement =
        markers[place]
        .getElement();


    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    markers[place]
        .openPopup();


    map.flyTo(
        locations[place].coords,
        18,
        {
            duration: 1
        }
    );


    updateInfo(
        "🎯 Destination Selected",
        `
        <b>${place}</b>

        <br><br>

        ${locations[place].type}

        <br><br>

        ${
            userLocation
            ? "🧭 Creating route..."
            : "📍 Click My Location to navigate."
        }
        `
    );


    if (userLocation) {

        createRoute();

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


    let foundPlace =
        null;


    // Exact / partial name

    for (
        const place in locations
    ) {

        const name =
            place.toLowerCase();


        if (
            name === input ||
            name.includes(input) ||
            input.includes(name)
        ) {

            foundPlace =
                place;

            break;

        }

    }


    // ========================================================
    // ALIASES
    // ========================================================

    if (!foundPlace) {

        const aliases = {

            "cs":
                "Computer Science",

            "computer":
                "Computer Science",

            "computer science department":
                "Computer Science",

            "bca":
                "BCA",

            "mca":
                "MCA",

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

            "parking area":
                "Parking Area",

            "gate":
                "Main Gate",

            "main gate":
                "Main Gate",

            "hostel":
                "Hostel",

            "chapel":
                "Chapel",

            "playground":
                "Playground",

            "history":
                "History",

            "maths":
                "Maths",

            "mathematics":
                "Maths",

            "chemistry":
                "Chemistry",

            "physics":
                "Physics",

            "botany":
                "Botany",

            "zoology":
                "Zoology",

            "economics":
                "Economics",

            "tamil":
                "Tamil",

            "english":
                "English S/F",

            "food science":
                "Food Science",

            "auditorium":
                "New Auditorium",

            "old auditorium":
                "Old Auditorium",

            "new auditorium":
                "New Auditorium",

            "sports":
                "Sports Room",

            "john tucker":
                "John Tucker Block"

        };


        for (
            const key in aliases
        ) {

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
            "Canteen, Main Gate, Parking, " +
            "Hostel, Physics, Chemistry, " +
            "History or John Tucker Block."
        );

        return;
    }


    selectDestination(
        foundPlace
    );

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

            if (
                event.key === "Enter"
            ) {

                findDestination();

            }

        }
    );

}


// ============================================================
// 14. INFO PANEL
// ============================================================

function updateInfo(
    title,
    text
) {

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
// 15. CURRENT LOCATION
// ============================================================

function showMyLocation() {

    if (
        !navigator.geolocation
    ) {

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


            // Remove previous

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
                        <div
                            class="user-location-dot"
                        >
                            <div
                                class="user-location-pulse"
                            ></div>
                        </div>
                    `,

                    iconSize: [30, 30],

                    iconAnchor: [15, 15]

                });


            userMarker =
                L.marker(
                    userLocation,
                    {
                        icon:
                            userIcon,

                        zIndexOffset:
                            1000
                    }
                )
                .addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // Accuracy circle

            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius:
                            accuracy
                    }
                )
                .addTo(map);


            // Move map

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
                Location detected.

                <br><br>

                Accuracy:
                <b>
                    ${Math.round(
                        accuracy
                    )} meters
                </b>

                <br><br>

                ${
                    selectedDestination
                    ? "🧭 Calculating route..."
                    : "🎯 Select a destination."
                }
                `
            );


            if (
                selectedDestination
            ) {

                createRoute();

            }

        },


        function(error) {

            console.error(
                error
            );


            let message =
                "Unable to access your location.";


            if (
                error.code === 1
            ) {

                message =
                    "Location permission denied.";

            }
            else if (
                error.code === 2
            ) {

                message =
                    "Location unavailable.";

            }
            else if (
                error.code === 3
            ) {

                message =
                    "Location request timed out.";

            }


            alert(
                message +
                "\n\nPlease allow location permission."
            );


            updateInfo(
                "⚠️ Location Error",
                message
            );

        },

        {
            enableHighAccuracy:
                true,

            timeout:
                15000,

            maximumAge:
                0
        }

    );

}


// ============================================================
// 16. WALKING ROUTE
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
            "Select a destination."
        );

        return;
    }


    const destination =
        locations[
            selectedDestination
        ].coords;


    // Remove old route

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine =
            null;

    }


    updateInfo(
        "🧭 Finding Route",
        `
        From:
        <b>Current Location</b>

        <br><br>

        To:
        <b>${selectedDestination}</b>

        <br><br>

        Calculating walking route...
        `
    );


    try {

        // ====================================================
        // VALHALLA WALKING ROUTER
        // ====================================================

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
                        JSON.stringify({

                            locations: [

                                {
                                    lat:
                                        userLocation[0],

                                    lon:
                                        userLocation[1]
                                },

                                {
                                    lat:
                                        destination[0],

                                    lon:
                                        destination[1]
                                }

                            ],

                            costing:
                                "pedestrian",

                            units:
                                "kilometers"

                        })
                }
            );


        if (!response.ok) {

            throw new Error(
                "Routing server unavailable"
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
        // DECODE ROUTE
        // ====================================================

        const decoded =
            decodePolyline(
                data.trip.legs[0].shape
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

                    weight:
                        7,

                    opacity:
                        0.9,

                    lineCap:
                        "round",

                    lineJoin:
                        "round"
                }
            )
            .addTo(map);


        // ====================================================
        // FIT MAP
        // ====================================================

        map.fitBounds(
            routeLine.getBounds(),
            {
                padding:
                    [60, 60]
            }
        );


        // ====================================================
        // DISTANCE
        // ====================================================

        let distanceText =
            "Available";


        if (
            data.trip.summary
        ) {

            const distance =
                data.trip.summary.length;


            if (
                distance < 1
            ) {

                distanceText =
                    Math.round(
                        distance * 1000
                    ) + " m";

            }
            else {

                distanceText =
                    distance.toFixed(2) +
                    " km";

            }

        }


        // ====================================================
        // TIME
        // ====================================================

        let timeText =
            "Walking";


        if (
            data.trip.summary
        ) {

            const seconds =
                data.trip.summary.time;


            const minutes =
                Math.max(
                    1,
                    Math.round(
                        seconds / 60
                    )
                );


            timeText =
                minutes +
                " min";

        }


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

    }

    catch (error) {

        console.error(
            "Route error:",
            error
        );


        // ====================================================
        // FALLBACK DIRECT ROUTE
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

                    weight:
                        6,

                    dashArray:
                        "10 8",

                    opacity:
                        0.8
                }
            )
            .addTo(map);


        map.fitBounds(
            routeLine.getBounds(),
            {
                padding:
                    [60, 60]
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

            Walking road route is
            temporarily unavailable.

            <br><br>

            Showing direct route preview.
            `
        );

    }

}


// ============================================================
// 17. POLYLINE DECODER
// ============================================================

function decodePolyline(
    encoded
) {

    let index = 0;

    let lat = 0;

    let lon = 0;

    const coordinates = [];


    while (
        index <
        encoded.length
    ) {

        let result = 1;

        let shift = 0;

        let byte;


        do {

            byte =
                encoded.charCodeAt(
                    index++
                ) - 63;


            result +=
                (
                    byte & 0x1f
                ) << shift;


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


        lat +=
            deltaLat;


        result = 1;

        shift = 0;


        do {

            byte =
                encoded.charCodeAt(
                    index++
                ) - 63;


            result +=
                (
                    byte & 0x1f
                ) << shift;


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


        lon +=
            deltaLon;


        coordinates.push(
            [
                lat / 1000000,
                lon / 1000000
            ]
        );

    }


    return coordinates;

}


// ============================================================
// 18. NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (
        !selectedDestination
    ) {

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
// 19. RESET
// ============================================================

function resetCampusView() {

    selectedDestination =
        null;


    userLocation =
        null;


    // Remove route

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine =
            null;

    }


    // Remove user

    if (userMarker) {

        map.removeLayer(
            userMarker
        );

        userMarker =
            null;

    }


    // Remove accuracy

    if (accuracyCircle) {

        map.removeLayer(
            accuracyCircle
        );

        accuracyCircle =
            null;

    }


    // Remove selected marker

    for (
        const name in markers
    ) {

        const element =
            markers[name]
            .getElement();


        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // Reset map

    map.fitBounds(
        campusBounds,
        {
            padding:
                [50, 50]
        }
    );


    updateInfo(
        "📍 Campus Navigation",
        "Search a building or select a campus location."
    );

}


// ============================================================
// 20. ZOOM
// ============================================================

L.control.zoom({

    position:
        "bottomright"

}).addTo(map);


// ============================================================
// 21. FIX MAP SIZE
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    500
);


// ============================================================
// READY
// ============================================================

console.log(
    "✅ Sarah Tucker College Real Map Loaded"
);

console.log(
    "📍 GPS Navigation Ready"
);

console.log(
    "🎯 Destination Search Ready"
);

console.log(
    "🚶 Walking Route Ready"
);
