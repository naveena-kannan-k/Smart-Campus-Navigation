// ==========================================
// SMART CAMPUS NAVIGATION
// CAMPUS MAP - PHASE 1
// Corrected Image Coordinates
// ==========================================


// ==========================================
// ORIGINAL IMAGE SIZE
// ==========================================

const imageWidth = 1328;
const imageHeight = 800;


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
// CAMPUS LOCATIONS
// ==========================================
// Format:
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
        coords: [755, 735],
        icon: "🚪",
        type: "Main Entrance"
    },

    "Canara Bank": {
        coords: [770, 120],
        icon: "🏦",
        type: "Bank"
    },

    "Parking Shed": {
        coords: [735, 1235],
        icon: "🅿️",
        type: "Parking"
    },


    // ======================================
    // CENTRAL
    // ======================================

    "Garden": {
        coords: [500, 670],
        icon: "🌳",
        type: "Central Garden"
    },

    "Main Block": {
        coords: [320, 735],
        icon: "🏫",
        type: "Academic Block"
    },

    "Management Office": {
        coords: [350, 590],
        icon: "🏢",
        type: "Administration"
    },


    // ======================================
    // RIGHT SIDE
    // ======================================

    "Old Auditorium": {
        coords: [325, 1150],
        icon: "🏛️",
        type: "Old Auditorium"
    },

    "Economics": {
        coords: [430, 1225],
        icon: "📊",
        type: "Economics Department"
    },

    "Tamil & English": {
        coords: [395, 1240],
        icon: "📚",
        type: "Tamil & English Department"
    },

    "Library": {
        coords: [505, 1190],
        icon: "📚",
        type: "Library"
    },

    "Canteen": {
        coords: [120, 1050],
        icon: "🍴",
        type: "Canteen"
    },

    "English S/F": {
        coords: [70, 1190],
        icon: "📚",
        type: "English S/F Department"
    },

    "B.Com S/F": {
        coords: [105, 1230],
        icon: "💼",
        type: "B.Com S/F Department"
    },

    "Computer Science": {
        coords: [70, 1150],
        icon: "💻",
        type: "Computer Science Department"
    },

    "Food Science": {
        coords: [80, 1210],
        icon: "🧪",
        type: "Food Science Department"
    },


    // ======================================
    // MAIN BLOCK / SCIENCE
    // ======================================

    "Physics": {
        coords: [190, 475],
        icon: "🔬",
        type: "Physics Department"
    },

    "Chemistry": {
        coords: [165, 515],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics S/F": {
        coords: [195, 385],
        icon: "🔬",
        type: "Physics S/F"
    },

    "B.Com & Zoology": {
        coords: [165, 735],
        icon: "🏫",
        type: "B.Com & Zoology"
    },


    // ======================================
    // LEFT SIDE
    // ======================================

    "BCA": {
        coords: [150, 255],
        icon: "💻",
        type: "BCA Department"
    },

    "MCA": {
        coords: [225, 220],
        icon: "💻",
        type: "MCA Department"
    },

    "History": {
        coords: [270, 175],
        icon: "📖",
        type: "History Department"
    },

    "Maths": {
        coords: [285, 350],
        icon: "📐",
        type: "Mathematics Department"
    },

    "Nano Science": {
        coords: [365, 185],
        icon: "🧪",
        type: "Nano Science Department"
    },

    "New Auditorium": {
        coords: [275, 125],
        icon: "🏛️",
        type: "New Auditorium"
    },


    // ======================================
    // TOP
    // ======================================

    "Chapel": {
        coords: [45, 425],
        icon: "⛪",
        type: "Chapel"
    },

    "Hostel": {
        coords: [55, 720],
        icon: "🏠",
        type: "Hostel"
    },

    "Playground": {
        coords: [110, 750],
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


    // ======================================
    // REMOVE OLD SELECTION
    // ======================================

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // ======================================
    // HIGHLIGHT SELECTED MARKER
    // ======================================

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // ======================================
    // ZOOM
    // ======================================

    map.flyTo(
        locations[place].coords,
        1.5,
        {
            duration: 1
        }
    );


    // ======================================
    // POPUP
    // ======================================

    markers[place].openPopup();


    // ======================================
    // INFORMATION PANEL
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


    // ======================================
    // REMOVE SELECTION
    // ======================================

    for (const name in markers) {

        const element =
            markers[name].getElement();

        if (element) {

            element.classList.remove(
                "selected-marker"
            );

        }

    }


    // ======================================
    // RESET INFO
    // ======================================

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
    "✅ Smart Campus Map - Phase 1 Loaded"
);
