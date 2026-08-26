// ==========================================
// SMART CAMPUS NAVIGATION
// CAMPUS MAP - CORRECTED LOCATION VERSION
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
    zoomSnap: 0.25
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
// SHOW FULL IMAGE
// ==========================================

map.fitBounds(bounds);


// ==========================================
// CORRECT CAMPUS LOCATIONS
//
// Coordinates are based on the positions
// marked in your uploaded campus image.
//
// Leaflet format:
// [Y, X]
//
// Y = vertical position
// X = horizontal position
// ==========================================

const locations = {

    // ======================================
    // FRONT / ENTRANCE
    // ======================================

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


    // ======================================
    // CENTRAL
    // ======================================

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


    // ======================================
    // RIGHT SIDE
    // ======================================

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

    // ======================================
    // MAIN BLOCK / SCIENCE
    // ======================================

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


    // ======================================
    // LEFT SIDE
    // ======================================

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


    // ======================================
    // TOP
    // ======================================

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

        iconSize: [38, 38],

        iconAnchor: [19, 19]

    });

}


// ==========================================
// ADD MARKERS
// ==========================================

for (const place in locations) {

    const data = locations[place];

    const marker = L.marker(
        data.coords,
        {
            icon: createCampusIcon(data.icon)
        }
    ).addTo(map);


    // ======================================
    // POPUP
    // ======================================

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


    // ======================================
    // LABEL
    // ======================================

    marker.bindTooltip(place, {
    direction: "top",
    offset: [0, -22],
    className: "campus-label",
    sticky: true
});



    markers[place] = marker;

}


// ==========================================
// SELECT DESTINATION
// ==========================================

let selectedDestination = null;


function selectDestination(place) {

    if (!locations[place]) {
        return;
    }


    selectedDestination = place;


    // Remove old selection

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


    // Zoom

    map.flyTo(
        locations[place].coords,
        1.5,
        {
            duration: 1
        }
    );


    // Popup

    markers[place].openPopup();


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
                <br>
                Destination selected.
            </div>

        `;

    }

}


// ==========================================
// SEARCH
// ==========================================

function findDestination() {

    const input =
        document
        .getElementById("destinationInput")
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
            "Try Library, Canteen, Main Gate, " +
            "Hostel, Main Block, etc."
        );

        return;

    }


    selectDestination(foundPlace);

}


// ==========================================
// ENTER KEY
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
// RESET MAP
// ==========================================

function resetCampusView() {

    map.fitBounds(
        bounds,
        {
            padding: [20, 20]
        }
    );


    selectedDestination = null;


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
                Search a building or select a
                location on the map.
            </div>

        `;

    }

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


            const info =
                document.getElementById(
                    "locationInfo"
                );


            if (info) {

                info.innerHTML = `

                    <div class="info-title">
                        📍 GPS Location Detected
                    </div>

                    <div class="info-text">

                        Latitude:
                        ${latitude.toFixed(6)}

                        <br>

                        Longitude:
                        ${longitude.toFixed(6)}

                    </div>

                `;

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
// ZOOM CONTROL
// ==========================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ==========================================
// READY
// ==========================================

console.log(
    "✅ Corrected Smart Campus Map Loaded"
);
