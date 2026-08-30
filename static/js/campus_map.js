// ============================================================
// SARAH TUCKER COLLEGE - SMART CAMPUS NAVIGATION
// ============================================================

const COLLEGE_CENTER = [8.69880, 77.74120];

const map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
    dragging: true,
    doubleClickZoom: true,
    touchZoom: true
}).setView(COLLEGE_CENTER, 18);


// ============================================================
// MAP LAYERS
// ============================================================

const streetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
);

const satelliteMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        maxZoom: 22,
        attribution: "Tiles &copy; Esri"
    }
);

const satelliteLabels = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    {
        maxZoom: 22,
        attribution: "Labels &copy; Esri"
    }
);

satelliteMap.addTo(map);
satelliteLabels.addTo(map);

L.control.layers(
    {
        "Satellite": satelliteMap,
        "Street Map": streetMap
    },
    {
        "Satellite Labels": satelliteLabels
    }
).addTo(map);


// ============================================================
// CAMPUS LOCATIONS
// ============================================================

const places = {

    "botony": {
        name: "Botany",
        lat: 8.6984368,
        lng: 77.7409389
    },

    "physics regular": {
        name: "Physics (Regular)",
        lat: 8.6989193,
        lng: 77.7407981
    },

    "chemistry": {
        name: "Chemistry",
        lat: 8.6991182,
        lng: 77.7410046
    },

    "zoology bcom aided": {
        name: "Zoology & B.Com (Aided)",
        lat: 8.6987364,
        lng: 77.7413077
    },

    "old auditorium": {
        name: "Old Auditorium",
        lat: 8.6980713,
        lng: 77.7407428
    },

    "library": {
        name: "Library",
        lat: 8.6983229,
        lng: 77.7401688
    },

    "parking area": {
        name: "Parking Area",
        lat: 8.6984369,
        lng: 77.7400521
    },

    "tamil english economics": {
        name: "Tamil, English, Economics",
        lat: 8.6980622,
        lng: 77.7403781
    },

    "toilet": {
        name: "Toilet",
        lat: 8.6977444,
        lng: 77.7415160
    },

    "computer science": {
        name: "Computer Science",
        lat: 8.6975920,
        lng: 77.7420998
    },

    "sports room": {
        name: "Sports Room",
        lat: 8.6981680,
        lng: 77.7421669
    },

    "canteen": {
        name: "Canteen",
        lat: 8.6980195,
        lng: 77.7421696
    },

    "playground": {
        name: "Play Ground",
        lat: 8.6987290,
        lng: 77.7418037
    },

    "hostel": {
        name: "Hostel",
        lat: 8.6987209,
        lng: 77.7427011
    },

    "new auditorium": {
        name: "New Auditorium",
        lat: 8.6996460,
        lng: 77.7406171
    },

    "history tamil english": {
        name: "History (Tamil & English)",
        lat: 8.6996990,
        lng: 77.7407055
    },

    "nano science": {
        name: "Nano Science",
        lat: 8.6996354,
        lng: 77.7404803
    },

    "maths": {
        name: "Maths",
        lat: 8.6994790,
        lng: 77.7406680
    },

    "physics sf": {
        name: "Physics (SF)",
        lat: 8.6994551,
        lng: 77.7409470
    },

    "bca": {
        name: "BCA",
        lat: 8.6997309,
        lng: 77.7409014
    },

    "mca": {
        name: "MCA",
        lat: 8.6997653,
        lng: 77.7410918
    },

    "main gate": {
        name: "Main Gate",
        lat: 8.6988565,
        lng: 77.7398880
    },

    "ncc room": {
        name: "NCC Room",
        lat: 8.6990958,
        lng: 77.7422827
    }
};


// ============================================================
// CAMPUS ROADS
// ============================================================

const campusRoads = [

    [
        [8.6988374,77.7398879],
        [8.6988400,77.7400810]
    ],

    [
        [8.6988479,77.7399128],
        [8.6988585,77.7400764],
        [8.6990176,77.7403795],
        [8.6990176,77.7405807],
        [8.6991714,77.7408516],
        [8.6993411,77.7407577]
    ],

    [
        [8.6991865,77.7408710],
        [8.6992819,77.7410775],
        [8.6994118,77.7409944]
    ],

    [
        [8.6992528,77.7410145],
        [8.6993029,77.7411164],
        [8.6993093,77.7412170],
        [8.6997017,77.7411231]
    ],

    [
        [8.6996566,77.7411312],
        [8.6996301,77.7410064],
        [8.6995903,77.7408817],
        [8.6996566,77.7408656]
    ],

    [
        [8.6996566,77.7408656],
        [8.6996076,77.7407458],
        [8.6996486,77.7407257]
    ],

    [
        [8.6981822,77.7413523],
        [8.6984474,77.7413336],
        [8.6984500,77.7412518],
        [8.6984527,77.7411539],
        [8.6986489,77.7411431],
        [8.6986515,77.7412424]
    ],

    [
        [8.6984527,77.7411539],
        [8.6985030,77.7410439],
        [8.6984580,77.7410251]
    ],

    [
        [8.6985959,77.7411485],
        [8.6990387,77.7411699],
        [8.6990890,77.7410841]
    ],

    [
        [8.6990121,77.7405504],
        [8.6988371,77.7406737],
        [8.6988451,77.7407140]
    ],

    [
        [8.6979528,77.7405736],
        [8.6979581,77.7416304],
        [8.6978812,77.7416331],
        [8.6978865,77.7421132],
        [8.6977168,77.7421159]
    ],

    [
        [8.6981808,77.7419523],
        [8.6978892,77.7419738]
    ],

    [
        [8.6980138,77.7419684],
        [8.6980164,77.7420757]
    ],

    [
        [8.6985667,77.7400830],
        [8.6984315,77.7400991],
        [8.6984288,77.7400723]
    ],

    [
        [8.6985667,77.7400830],
        [8.6985004,77.7401957],
        [8.6983573,77.7401796]
    ],

    [
        [8.6984315,77.7405658],
        [8.6980842,77.7405819],
        [8.6980709,77.7404075]
    ],

    [
        [8.6980842,77.7405819],
        [8.6980815,77.7406355]
    ],

    [
        [8.6987709,77.7425364],
        [8.6987656,77.7426759]
    ],

    [
        [8.6994271,77.7402956],
        [8.6995835,77.7404726]
    ]
];


// ============================================================
// DRAW ROADS
// ============================================================

const roadLayer = L.layerGroup().addTo(map);

campusRoads.forEach((road, index) => {

    L.polyline(road, {
        color: "#666666",
        weight: 7,
        opacity: 0.85,
        lineCap: "round",
        lineJoin: "round"
    })
    .bindTooltip("Campus Road " + (index + 1))
    .addTo(roadLayer);

});


// ============================================================
// ICONS
// ============================================================

const gateIcon = L.divIcon({

    className: "gate-marker",

    html: `
        <div style="
            background:#16a34a;
            width:38px;
            height:38px;
            border-radius:50%;
            border:4px solid white;
            box-shadow:0 3px 10px rgba(0,0,0,.55);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:18px;">
            🚪
        </div>
    `,

    iconSize: [38,38],
    iconAnchor: [19,19]
});


const placeIcon = L.divIcon({

    className: "place-marker",

    html: `
        <div style="
            background:#1976d2;
            width:30px;
            height:30px;
            border-radius:50%;
            border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,.5);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;">
            ●
        </div>
    `,

    iconSize: [30,30],
    iconAnchor: [15,15]
});


const destinationIcon = L.divIcon({

    className: "destination-marker",

    html: `
        <div style="
            background:#e53935;
            width:40px;
            height:40px;
            border-radius:50%;
            border:3px solid white;
            box-shadow:0 3px 12px rgba(0,0,0,.55);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:20px;">
            📍
        </div>
    `,

    iconSize: [40,40],
    iconAnchor: [20,20]
});


const userIcon = L.divIcon({

    className: "user-marker",

    html: `
        <div style="
            width:20px;
            height:20px;
            background:#2563eb;
            border:4px solid white;
            border-radius:50%;
            box-shadow:
                0 0 0 8px rgba(37,99,235,.20),
                0 2px 8px rgba(0,0,0,.4);">
        </div>
    `,

    iconSize: [20,20],
    iconAnchor: [10,10]
});


// ============================================================
// STATE
// ============================================================

let currentMarker = null;
let routeLine = null;
let userMarker = null;
let currentUserLocation = null;
let selectedDestinationKey = null;
let watchId = null;


// ============================================================
// DISTANCE FUNCTION
// ============================================================

function distanceMeters(a, b) {

    const R = 6371000;

    const lat1 = a.lat * Math.PI / 180;
    const lat2 = b.lat * Math.PI / 180;

    const dLat =
        (b.lat - a.lat) * Math.PI / 180;

    const dLng =
        (b.lng - a.lng) * Math.PI / 180;

    const x =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(dLng / 2) ** 2;

    return 2 * R *
        Math.atan2(
            Math.sqrt(x),
            Math.sqrt(1 - x)
        );
}


function formatDistance(meters) {

    meters = Math.round(meters);

    if (meters < 1000) {
        return meters + " m";
    }

    return (meters / 1000).toFixed(2) + " km";
}


// ============================================================
// ESCAPE HTML
// ============================================================

function escapeHtml(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ============================================================
// ROAD GRAPH
// ============================================================

const GRAPH_MERGE_METERS = 12;

const graphNodes = [];


function addGraphNode(lat, lng) {

    for (let i = 0; i < graphNodes.length; i++) {

        const d = distanceMeters(
            graphNodes[i],
            {lat: lat, lng: lng}
        );

        if (d <= GRAPH_MERGE_METERS) {
            return i;
        }
    }

    graphNodes.push({
        lat: lat,
        lng: lng,
        edges: []
    });

    return graphNodes.length - 1;
}


function addGraphEdge(a, b) {

    if (a === b) return;

    const d = distanceMeters(
        graphNodes[a],
        graphNodes[b]
    );

    graphNodes[a].edges.push({
        to: b,
        weight: d
    });

    graphNodes[b].edges.push({
        to: a,
        weight: d
    });
}


campusRoads.forEach(road => {

    for (let i = 0; i < road.length - 1; i++) {

        const a = addGraphNode(
            road[i][0],
            road[i][1]
        );

        const b = addGraphNode(
            road[i + 1][0],
            road[i + 1][1]
        );

        addGraphEdge(a, b);
    }

});
