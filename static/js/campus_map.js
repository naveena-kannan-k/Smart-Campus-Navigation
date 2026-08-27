// ==========================================
// SMART CAMPUS NAVIGATION
// GOOGLE MAPS STYLE CAMPUS NAVIGATION
// ==========================================

// ==========================================
// ORIGINAL IMAGE SIZE
// ==========================================

const imageWidth = 1583;
const imageHeight = 957;


// ==========================================
// CREATE MAP
// ==========================================

const map = L.map("campusMap", {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3,
    zoomSnap: 0.25,
    zoomControl: false
});


// ==========================================
// IMAGE BOUNDS
// ==========================================

const bounds = [
    [0, 0],
    [imageHeight, imageWidth]
];


// ==========================================
// CAMPUS IMAGE
// ==========================================

L.imageOverlay(
    "/static/images/campus_layout.jpeg",
    bounds
).addTo(map);


// ==========================================
// SHOW FULL CAMPUS
// ==========================================

map.fitBounds(bounds);


// ==========================================
// CAMPUS LOCATIONS
// ==========================================

const locations = {

    "Main Gate": {
        coords: [40, 845],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: [58, 160],
        icon: "🏦",
        type: "Bank"
    },

    "Parking Shed": {
        coords: [78, 1450],
        icon: "🅿️",
        type: "Parking"
    },

    "Garden": {
        coords: [360, 850],
        icon: "🌳",
        type: "Central Garden"
    },

    "Main Block": {
        coords: [625, 875],
        icon: "🏫",
        type: "Academic Block"
    },

    "Management Office": {
        coords: [565, 970],
        icon: "🏢",
        type: "Administration"
    },

    "Old Auditorium": {
        coords: [625, 1390],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Economics": {
        coords: [405, 1400],
        icon: "📊",
        type: "Economics Department"
    },

    "Tamil & English": {
        coords: [455, 1490],
        icon: "📚",
        type: "Tamil & English Department"
    },

    "Library": {
        coords: [360, 1370],
        icon: "📚",
        type: "Library"
    },

    "Canteen": {
        coords: [812, 1240],
        icon: "🍴",
        type: "Canteen"
    },

    "English S/F": {
        coords: [885, 1360],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [900, 1390],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [915, 1420],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [930, 1390],
        icon: "🧪",
        type: "Food Science Department"
    },

    "Physics": {
        coords: [690, 620],
        icon: "🔬",
        type: "Physics Department"
    },

    "Chemistry": {
        coords: [750, 620],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics S/F": {
        coords: [720, 470],
        icon: "🔬",
        type: "Physics S/F"
    },

    "B.Com & Zoology": {
        coords: [775, 850],
        icon: "🏫",
        type: "B.Com & Zoology"
    },

    "BCA": {
        coords: [735, 280],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        coords: [685, 275],
        icon: "💻",
        type: "MCA Department"
    },

    "History": {
        coords: [645, 205],
        icon: "📖",
        type: "History Department"
    },

    "Maths": {
        coords: [610, 350],
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        coords: [515, 170],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [575, 145],
        icon: "🏛️",
        type: "New Auditorium"
    },

    "Chapel": {
        coords: [900, 520],
        icon: "⛪",
        type: "Chapel"
    },

    "Hostel": {
        coords: [900, 870],
        icon: "🏠",
        type: "Hostel"
    },

    "Playground": {
        coords: [845, 875],
        icon: "⚽",
        type: "Playground"
    }

};


// ==========================================
// MARKER STORAGE
// ==========================================

const markers = {};


// ==========================================
// CUSTOM ICON
// ==========================================

function createCampusIcon(icon) {

    return L.divIcon({

        className: "custom-campus-marker",

        html: `
            <div class="campus-marker">
                ${icon}
            </div>
        `,

        iconSize: [42, 42],
        iconAnchor: [21, 21]

    });

}


// ==========================================
// ADD CAMPUS MARKERS
// ==========================================

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


    marker.bindTooltip(place, {

        direction: "top",
        offset: [0, -22],
        className: "campus-label",
        sticky: true

    });


    markers[place] = marker;

}


// ==========================================
// VARIABLES
// ==========================================

let selectedDestination = null;

let campusRoute = null;

let userMarker = null;

let userLocation = null;


// ==========================================
// CAMPUS PATH NETWORK
// ==========================================
//
// These are navigation points.
// We connect campus areas through
// intermediate points instead of using
// one straight line.
// ==========================================

const campusPaths = [

    locations["Main Gate"].coords,

    [100, 845],

    [200, 845],

    [300, 850],

    locations["Garden"].coords,

    [450, 850],

    locations["Main Block"].coords,

    [700, 850],

    locations["Playground"].coords,

    [800, 1000],

    locations["Canteen"].coords,

    [700, 1200],

    [600, 1300],

    locations["Library"].coords,

    [400, 1450],

    locations["Tamil & English"].coords,

    [600, 1400],

    locations["Old Auditorium"].coords,

    [850, 1400],

    locations["Computer Science"].coords

];


// ==========================================
// FIND CLOSEST POINT
// ==========================================

function distance(a, b) {

    const dy = a[0] - b[0];
    const dx = a[1] - b[1];

    return Math.sqrt(
        dy * dy + dx * dx
    );

}


function closestPathPoint(point) {

    let closest = campusPaths[0];

    let minDistance = Infinity;

    for (const pathPoint of campusPaths) {

        const d = distance(
            point,
            pathPoint
        );

        if (d < minDistance) {

            minDistance = d;

            closest = pathPoint;

        }

    }

    return closest;

}


// ==========================================
// CREATE GOOGLE-MAPS STYLE ROUTE
// ==========================================

function drawCampusRoute(start, destination) {

    if (campusRoute) {

        map.removeLayer(
            campusRoute
        );

    }


    const startPoint =
        closestPathPoint(start);

    const destinationPoint =
        closestPathPoint(destination);


    const routePoints = [

        start,
        startPoint,

        ...campusPaths,

        destinationPoint,
        destination

    ];


    campusRoute = L.polyline(

        routePoints,

        {

            color: "#4285F4",

            weight: 8,

            opacity: 0.95,

            lineCap: "round",

            lineJoin: "round"

        }

    ).addTo(map);


    // ======================================
    // START MARKER
    // ======================================

    L.circleMarker(

        start,

        {

            radius: 9,

            color: "#ffffff",

            weight: 4,

            fillColor: "#4285F4",

            fillOpacity: 1

        }

    ).addTo(campusRoute);


    // ======================================
    // DESTINATION
    // ======================================

    markers[selectedDestination]
        .openPopup();


    // ======================================
    // ZOOM ROUTE
    // ======================================

    map.fitBounds(

        campusRoute.getBounds(),

        {

            padding: [70, 70]

        }

    );

}


// ==========================================
// SELECT DESTINATION
// ==========================================

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


    // Highlight destination

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // ======================================
    // UPDATE INFORMATION
    // ======================================

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
                <br>
                🧭 Destination selected.
            </div>

        `;

    }


    // ======================================
    // IF GPS AVAILABLE
    // ======================================

    if (userLocation) {

        drawCampusRoute(

            userLocation,
            locations[place].coords

        );

    }

    else {

        // Default starting point
        // Main Gate

        drawCampusRoute(

            locations["Main Gate"].coords,

            locations[place].coords

        );

    }


    // Fly to destination

    map.flyTo(

        locations[place].coords,

        1.5,

        {

            duration: 1

        }

    );


    markers[place].openPopup();

}


// ==========================================
// SEARCH DESTINATION
// ==========================================

function findDestination() {

    const input =
        document
        .getElementById(
            "destinationInput"
        )
        .value
        .trim()
        .toLowerCase();


    if (!input) {

        alert(
            "Please enter a campus location."
        );

        return;

    }


    let foundPlace = null;


    for (const place in locations) {

        if (

            place
            .toLowerCase()
            .includes(input)

        ) {

            foundPlace = place;

            break;

        }

    }


    if (!foundPlace) {

        alert(

            "Location not found.\n\n" +

            "Try Library, Computer Science, " +

            "Canteen, Main Gate, Hostel, " +

            "Main Block, etc."

        );

        return;

    }


    selectDestination(
        foundPlace
    );

}


// ==========================================
// ENTER KEY SEARCH
// ==========================================

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


// ==========================================
// MY LOCATION
// ==========================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            console.log(
                "GPS:",
                latitude,
                longitude
            );


            /*
             * IMPORTANT:
             *
             * Browser GPS gives real-world
             * latitude/longitude.
             *
             * Your campus image uses
             * custom X/Y coordinates.
             *
             * So GPS cannot directly be
             * placed on the image until
             * campus GPS boundaries are
             * mapped.
             */


            const info =
                document.getElementById(
                    "locationInfo"
                );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 My Location
                    </div>

                    <div class="info-text">

                        GPS Location Detected

                        <br>

                        Latitude:
                        ${latitude.toFixed(6)}

                        <br>

                        Longitude:
                        ${longitude.toFixed(6)}

                    </div>

                `;

            }


            /*
             * Temporary visual marker.
             *
             * This is only for showing
             * GPS detection.
             */

            if (userMarker) {

                map.removeLayer(
                    userMarker
                );

            }


            /*
             * We cannot convert GPS
             * directly to image coordinates
             * without campus calibration.
             */

            if (selectedDestination) {

                alert(

                    "GPS location detected.\n\n" +

                    "For exact blue-dot navigation " +

                    "inside the campus image, " +

                    "the campus GPS boundary needs " +

                    "to be calibrated first."

                );

            }

        },


        function(error) {

            console.error(error);

            alert(

                "Unable to access your location.\n\n" +

                "Please allow location permission."

            );

        },


        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


// ==========================================
// RESET CAMPUS VIEW
// ==========================================

function resetCampusView() {

    map.fitBounds(

        bounds,

        {

            padding: [20, 20]

        }

    );


    selectedDestination = null;


    if (campusRoute) {

        map.removeLayer(
            campusRoute
        );

        campusRoute = null;

    }


    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


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
                a location on the map.
            </div>

        `;

    }

}


// ==========================================
// ZOOM CONTROL
// ==========================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ==========================================
// READY
// ==========================================

console.log(
    "✅ Google Maps Style Smart Campus Navigation Loaded"
);
