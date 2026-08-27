// ======================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// Professional Campus Map
// ======================================================

const IMAGE_WIDTH = 1583;
const IMAGE_HEIGHT = 957;

// ======================================================
// MAP
// ======================================================

const map = L.map("campusMap", {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3,
    zoomSnap: 0.25,
    zoomControl: false
});

const bounds = [
    [0, 0],
    [IMAGE_HEIGHT, IMAGE_WIDTH]
];

L.imageOverlay(
    "/static/images/campus_layout.jpeg",
    bounds
).addTo(map);

map.fitBounds(bounds);

// ======================================================
// CAMPUS LOCATIONS
// ======================================================

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
        type: "Management Office"
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

    "Tamil Department": {
        coords: [455, 1490],
        icon: "📚",
        type: "Tamil Department"
    },

    "English Regular": {
        coords: [455, 1490],
        icon: "📚",
        type: "English Regular Department"
    },

    "English Aided": {
        coords: [455, 1490],
        icon: "📚",
        type: "English Aided Department"
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

    "English Self": {
        coords: [885, 1360],
        icon: "📚",
        type: "English Self Department"
    },

    "B.Com Self": {
        coords: [900, 1390],
        icon: "💼",
        type: "B.Com Self Department"
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

    "Physics Regular": {
        coords: [690, 620],
        icon: "🔬",
        type: "Physics Regular Department"
    },

    "Chemistry": {
        coords: [750, 620],
        icon: "🧪",
        type: "Chemistry Department"
    },

    "Physics Self": {
        coords: [720, 470],
        icon: "🔬",
        type: "Physics Self Department"
    },

    "B.Com Aided": {
        coords: [775, 850],
        icon: "💼",
        type: "B.Com Aided Department"
    },

    "Zoology Aided": {
        coords: [775, 850],
        icon: "🧬",
        type: "Zoology Aided Department"
    },

    "BCA": {
        coords: [735, 280],
        icon: "💻",
        type: "Bachelor of Computer Applications"
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

    "Maths Regular": {
        coords: [610, 350],
        icon: "📐",
        type: "Mathematics Regular Department"
    },

    "Maths Self": {
        coords: [610, 350],
        icon: "📐",
        type: "Mathematics Self Department"
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

// ======================================================
// MARKERS
// ======================================================

const markers = {};

function createIcon(icon) {

    return L.divIcon({
        className: "campus-marker-wrapper",

        html: `
            <div class="campus-marker">
                ${icon}
            </div>
        `,

        iconSize: [42, 42],
        iconAnchor: [21, 21]
    });
}

for (const name in locations) {

    const data = locations[name];

    const marker = L.marker(
        data.coords,
        {
            icon: createIcon(data.icon)
        }
    ).addTo(map);

    marker.bindPopup(`
        <div class="campus-popup">

            <div class="popup-icon">
                ${data.icon}
            </div>

            <div class="popup-title">
                ${name}
            </div>

            <div class="popup-type">
                ${data.type}
            </div>

            <button
                class="navigate-btn"
                onclick="navigateTo('${name}')"
            >
                🧭 Navigate
            </button>

        </div>
    `);

    marker.bindTooltip(
        name,
        {
            direction: "top",
            offset: [0, -22],
            className: "campus-label"
        }
    );

    markers[name] = marker;
}

// ======================================================
// SEARCH ALIASES
// ======================================================

const aliases = {

    "cse": "Computer Science",
    "cs": "Computer Science",
    "computer": "Computer Science",
