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
// ============================================================
// FIND NEAREST ROAD NODE
// ============================================================

function nearestGraphNode(point) {

    let bestIndex = -1;
    let bestDistance = Infinity;

    graphNodes.forEach((node, index) => {

        const d = distanceMeters(
            point,
            node
        );

        if (d < bestDistance) {

            bestDistance = d;
            bestIndex = index;
        }
    });

    return {
        index: bestIndex,
        distance: bestDistance
    };
}


// ============================================================
// DIJKSTRA SHORTEST PATH
// ============================================================

function shortestGraphPath(startIndex, endIndex) {

    if (
        startIndex < 0 ||
        endIndex < 0
    ) {
        return null;
    }

    if (startIndex === endIndex) {
        return [startIndex];
    }

    const distances =
        Array(graphNodes.length).fill(Infinity);

    const previous =
        Array(graphNodes.length).fill(-1);

    const visited =
        Array(graphNodes.length).fill(false);


    distances[startIndex] = 0;


    for (
        let step = 0;
        step < graphNodes.length;
        step++
    ) {

        let current = -1;
        let best = Infinity;


        for (
            let i = 0;
            i < graphNodes.length;
            i++
        ) {

            if (
                !visited[i] &&
                distances[i] < best
            ) {

                best = distances[i];
                current = i;
            }
        }


        if (current === -1) {
            break;
        }


        if (current === endIndex) {
            break;
        }


        visited[current] = true;


        for (
            const edge of graphNodes[current].edges
        ) {

            if (visited[edge.to]) {
                continue;
            }


            const newDistance =
                distances[current] +
                edge.weight;


            if (
                newDistance <
                distances[edge.to]
            ) {

                distances[edge.to] =
                    newDistance;

                previous[edge.to] =
                    current;
            }
        }
    }


    if (
        !Number.isFinite(
            distances[endIndex]
        )
    ) {

        return null;
    }


    const path = [];

    let current = endIndex;


    while (current !== -1) {

        path.unshift(current);

        current =
            previous[current];
    }


    return path;
}


// ============================================================
// BUILD ROUTE
// ============================================================

function buildRoute(
    startPoint,
    destinationPoint
) {

    const startNearest =
        nearestGraphNode(startPoint);

    const destinationNearest =
        nearestGraphNode(destinationPoint);


    // Maximum allowed distance
    // from a location to a campus road.
    if (
        startNearest.distance > 80 ||
        destinationNearest.distance > 80
    ) {

        return null;
    }


    const nodePath =
        shortestGraphPath(
            startNearest.index,
            destinationNearest.index
        );


    if (
        !nodePath ||
        nodePath.length === 0
    ) {

        return null;
    }


    const routePoints = [];


    // Start location
    routePoints.push([
        startPoint.lat,
        startPoint.lng
    ]);


    // Road network
    nodePath.forEach(index => {

        routePoints.push([
            graphNodes[index].lat,
            graphNodes[index].lng
        ]);

    });


    // Destination
    routePoints.push([
        destinationPoint.lat,
        destinationPoint.lng
    ]);


    return routePoints;
}


// ============================================================
// CREATE CAMPUS MARKERS
// ============================================================

function createMarkers() {

    Object.keys(places).forEach(key => {

        const place = places[key];


        const marker =
            L.marker(
                [
                    place.lat,
                    place.lng
                ],
                {
                    icon:
                        key === "main gate"
                            ? gateIcon
                            : placeIcon
                }
            )
            .addTo(map);


        marker.bindTooltip(
            place.name,
            {
                direction: "top",
                offset: [0, -10]
            }
        );


        marker.bindPopup(`
            <div style="
                min-width:210px;
                font-family:Arial;
            ">

                <h3 style="
                    margin:0 0 10px;
                    color:#173f63;
                ">
                    ${escapeHtml(place.name)}
                </h3>


                <button
                    onclick="selectPlace('${key}')"
                    style="
                        padding:9px 16px;
                        border:0;
                        border-radius:6px;
                        background:#173f63;
                        color:white;
                        cursor:pointer;
                        font-weight:bold;
                    "
                >
                    Navigate Here
                </button>

            </div>
        `);


        marker.on(
            "click",
            function() {

                selectPlace(key);

            }
        );
    });
}


// Create all markers
createMarkers();


// ============================================================
// CALCULATE TOTAL ROUTE DISTANCE
// ============================================================

function calculateRouteDistance(points) {

    let totalDistance = 0;


    for (
        let i = 0;
        i < points.length - 1;
        i++
    ) {

        totalDistance +=
            distanceMeters(
                L.latLng(points[i]),
                L.latLng(points[i + 1])
            );
    }


    return Math.round(
        totalDistance
    );
}


// ============================================================
// SHOW RESULT CARD
// ============================================================

function showResult(
    key,
    place,
    distance,
    startName
) {

    const result =
        document.getElementById(
            "result"
        );


    if (!result) {
        return;
    }


    result.innerHTML = `

        <div style="
            padding:5px;
        ">

            <div style="
                display:flex;
                align-items:center;
                gap:10px;
                margin-bottom:12px;
            ">

                <div style="
                    font-size:30px;
                ">
                    🎯
                </div>


                <div>

                    <div style="
                        font-size:10px;
                        color:#7a8794;
                        font-weight:bold;
                    ">
                        DESTINATION
                    </div>


                    <div style="
                        font-size:16px;
                        font-weight:bold;
                        color:#173f63;
                    ">
                        ${escapeHtml(
                            place.name
                        )}
                    </div>

                </div>

            </div>


            <div style="
                padding:10px;
                background:#f5f8fb;
                border-radius:8px;
                margin-bottom:10px;
            ">

                📍 From:
                <b>
                    ${escapeHtml(
                        startName
                    )}
                </b>

                <br><br>

                🛣️ Distance:
                <b>
                    ${formatDistance(
                        distance
                    )}
                </b>

            </div>


            <div style="
                padding:10px;
                border-left:4px solid #2563eb;
                background:#eff6ff;
                border-radius:6px;
            ">

                <b>
                    🔵 Route Ready
                </b>

                <br><br>

                📍 ${escapeHtml(
                    startName
                )}

                <br>

                ↓

                <br>

                🚶 Campus Road

                <br>

                ↓

                <br>

                🎯 ${escapeHtml(
                    place.name
                )}

            </div>

        </div>
    `;
}


// ============================================================
// SELECT DESTINATION
// ============================================================

function selectPlace(key) {

    if (!places[key]) {
        return;
    }


    selectedDestinationKey =
        key;


    const place =
        places[key];


    // Remove old route
    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;
    }


    // Remove old destination marker
    if (currentMarker) {

        map.removeLayer(
            currentMarker
        );

        currentMarker = null;
    }


    const destination =
        L.latLng(
            place.lat,
            place.lng
        );


    // --------------------------------------------------------
    // START LOCATION
    // --------------------------------------------------------
    // If GPS is available -> use GPS.
    // Otherwise -> use Main Gate.
    // --------------------------------------------------------

    let startPoint;
    let startName;


    if (currentUserLocation) {

        startPoint =
            L.latLng(
                currentUserLocation.lat,
                currentUserLocation.lng
            );

        startName =
            "Your Current Location";

    } else {

        startPoint =
            L.latLng(
                places["main gate"].lat,
                places["main gate"].lng
            );

        startName =
            "Main Gate";
    }


    // --------------------------------------------------------
    // BUILD BLUE ROUTE
    // --------------------------------------------------------

    const routePoints =
        buildRoute(
            startPoint,
            destination
        );


    // --------------------------------------------------------
    // IF NO ROUTE FOUND
    // --------------------------------------------------------

    if (!routePoints) {

        const result =
            document.getElementById(
                "result"
            );


        if (result) {

            result.innerHTML = `

                <div style="
                    text-align:center;
                    padding:15px;
                ">

                    <div style="
                        font-size:30px;
                    ">
                        ⚠️
                    </div>


                    <h3>
                        Route Not Found
                    </h3>


                    <p style="
                        color:#718096;
                        font-size:13px;
                    ">

                        The selected location
                        is not connected to
                        the campus road network.

                    </p>

                </div>

            `;
        }


        currentMarker =
            L.marker(
                destination,
                {
                    icon:
                        destinationIcon,
                    zIndexOffset: 2000
                }
            )
            .addTo(map);


        map.setView(
            destination,
            19
        );


        return;
    }


    // --------------------------------------------------------
    // DRAW BLUE NAVIGATION LINE
    // --------------------------------------------------------

    routeLine =
        L.polyline(
            routePoints,
            {

                color: "#2563eb",

                weight: 7,

                opacity: 0.95,

                lineCap: "round",

                lineJoin: "round",

                className:
                    "campus-navigation-route"

            }
        )
        .addTo(map);


    // --------------------------------------------------------
    // DESTINATION MARKER
    // --------------------------------------------------------

    currentMarker =
        L.marker(
            destination,
            {
                icon:
                    destinationIcon,

                zIndexOffset: 2000
            }
        )
        .addTo(map);


    currentMarker.bindPopup(`

        <div style="
            min-width:200px;
            font-family:Arial;
        ">

            <h3 style="
                color:#e53935;
                margin:0 0 8px;
            ">

                🎯
                ${escapeHtml(
                    place.name
                )}

            </h3>


            <p>
                Destination
            </p>

        </div>

    `);


    // --------------------------------------------------------
    // DISTANCE
    // --------------------------------------------------------

    const distance =
        calculateRouteDistance(
            routePoints
        );


    // --------------------------------------------------------
    // RESULT
    // --------------------------------------------------------

    showResult(
        key,
        place,
        distance,
        startName
    );


    // --------------------------------------------------------
    // NEARBY PLACES
    // --------------------------------------------------------

    showNearbyPlaces(
        key
    );


    // --------------------------------------------------------
    // FIT ROUTE ON SCREEN
    // --------------------------------------------------------

    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [
                80,
                80
            ]
        }
    );


    // Update search box
    const input =
        document.getElementById(
            "placeInput"
        );


    if (input) {

        input.value =
            place.name;
    }


    const suggestions =
        document.getElementById(
            "suggestions"
        );


    if (suggestions) {

        suggestions.innerHTML =
            "";
    }
}
// ============================================================
// SEARCH
// ============================================================

function findPlace() {

    const input =
        document.getElementById("placeInput");

    if (!input) return;

    const query =
        input.value.trim().toLowerCase();

    if (!query) {
        return;
    }


    // Exact match
    if (places[query]) {

        selectPlace(query);

        return;
    }


    // Partial match
    const matchedKey =
        Object.keys(places).find(
            key =>
                key.includes(query) ||
                places[key].name
                    .toLowerCase()
                    .includes(query)
        );


    if (matchedKey) {

        selectPlace(
            matchedKey
        );

        return;
    }


    const result =
        document.getElementById(
            "result"
        );


    if (result) {

        result.innerHTML = `

            <div style="
                text-align:center;
                padding:15px;
            ">

                <div style="
                    font-size:32px;
                ">
                    🔎
                </div>

                <h3>
                    Location Not Found
                </h3>

                <p style="
                    color:#718096;
                    font-size:13px;
                ">
                    Try searching for a
                    campus building or department.
                </p>

            </div>

        `;
    }
}


// ============================================================
// SEARCH SUGGESTIONS
// ============================================================

function updateSuggestions() {

    const input =
        document.getElementById(
            "placeInput"
        );

    const box =
        document.getElementById(
            "suggestions"
        );


    if (!input || !box) {
        return;
    }


    const query =
        input.value.trim().toLowerCase();


    box.innerHTML = "";


    if (!query) {
        return;
    }


    const matches =
        Object.keys(places)
            .filter(key =>
                key.includes(query) ||
                places[key].name
                    .toLowerCase()
                    .includes(query)
            )
            .slice(0, 8);


    matches.forEach(key => {

        const item =
            document.createElement(
                "div"
            );


        item.style.padding =
            "10px 12px";

        item.style.cursor =
            "pointer";

        item.style.borderBottom =
            "1px solid #eee";

        item.textContent =
            places[key].name;


        item.addEventListener(
            "click",
            function() {

                input.value =
                    places[key].name;

                box.innerHTML =
                    "";

                selectPlace(key);
            }
        );


        box.appendChild(item);

    });
}


// Search while typing
const placeInput =
    document.getElementById(
        "placeInput"
    );


if (placeInput) {

    placeInput.addEventListener(
        "input",
        updateSuggestions
    );


    placeInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                findPlace();
            }
        }
    );
}


// ============================================================
// NEARBY LOCATIONS
// ============================================================

function showNearbyPlaces(
    selectedKey
) {

    const leftBox =
        document.getElementById(
            "leftPlaces"
        );

    const rightBox =
        document.getElementById(
            "rightPlaces"
        );


    if (!leftBox || !rightBox) {
        return;
    }


    leftBox.innerHTML = "";
    rightBox.innerHTML = "";


    const selected =
        places[selectedKey];


    const selectedPoint =
        L.latLng(
            selected.lat,
            selected.lng
        );


    const nearby =
        Object.keys(places)

            .filter(
                key =>
                    key !== selectedKey &&
                    key !== "main gate"
            )

            .map(key => {

                const point =
                    L.latLng(
                        places[key].lat,
                        places[key].lng
                    );

                return {

                    key: key,

                    name:
                        places[key].name,

                    distance:
                        distanceMeters(
                            selectedPoint,
                            point
                        ),

                    lng:
                        places[key].lng

                };

            })

            .sort(
                (a,b) =>
                    a.distance -
                    b.distance
            )

            .slice(0, 8);


    const centerLng =
        selected.lng;


    nearby.forEach(item => {

        const targetBox =
            item.lng < centerLng
                ? leftBox
                : rightBox;


        const div =
            document.createElement(
                "div"
            );


        div.style.padding =
            "7px 4px";

        div.style.cursor =
            "pointer";

        div.style.fontSize =
            "13px";

        div.innerHTML = `
            <span style="
                color:#1976d2;
                font-weight:bold;
            ">
                📍
            </span>
            ${escapeHtml(
                item.name
            )}
            <br>
            <small style="
                color:#7a8794;
            ">
                ${formatDistance(
                    item.distance
                )}
            </small>
        `;


        div.addEventListener(
            "click",
            function() {

                selectPlace(
                    item.key
                );

            }
        );


        targetBox.appendChild(
            div
        );

    });


    if (!leftBox.children.length) {

        leftBox.innerHTML =
            `<p class="small-text">
                No nearby locations
            </p>`;
    }


    if (!rightBox.children.length) {

        rightBox.innerHTML =
            `<p class="small-text">
                No nearby locations
            </p>`;
    }
}


// ============================================================
// MY LOCATION / GPS
// ============================================================

function locateUser() {

    if (
        !navigator.geolocation
    ) {

        alert(
            "Geolocation is not supported by this browser."
        );

        return;
    }


    const result =
        document.getElementById(
            "result"
        );


    if (result) {

        result.innerHTML = `

            <div style="
                text-align:center;
                padding:15px;
            ">

                <div style="
                    font-size:30px;
                ">
                    📍
                </div>

                <h3>
                    Getting your location...
                </h3>

                <p>
                    Please allow location access.
                </p>

            </div>

        `;
    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;


            currentUserLocation = {
                lat: lat,
                lng: lng
            };


            // Remove old user marker
            if (userMarker) {

                map.removeLayer(
                    userMarker
                );
            }


            // Add current location marker
            userMarker =
                L.marker(
                    [lat, lng],
                    {
                        icon:
                            userIcon,
                        zIndexOffset:
                            3000
                    }
                )
                .addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            map.setView(
                [lat, lng],
                19
            );


            // If destination already selected,
            // automatically rebuild route.
            if (
                selectedDestinationKey &&
                places[
                    selectedDestinationKey
                ]
            ) {

                selectPlace(
                    selectedDestinationKey
                );

            } else {

                if (result) {

                    result.innerHTML = `

                        <div style="
                            padding:8px;
                        ">

                            <h3>
                                📍 Your Location
                            </h3>

                            <p>
                                Current location
                                detected successfully.
                            </p>

                            <p style="
                                font-size:12px;
                                color:#718096;
                            ">
                                Now select a
                                destination to
                                create the blue route.
                            </p>

                        </div>

                    `;
                }
            }

        },

        function(error) {

            let message =
                "Unable to get your location.";


            if (
                error.code ===
                error.PERMISSION_DENIED
            ) {

                message =
                    "Location permission was denied. Please allow location access in your browser.";

            } else if (
                error.code ===
                error.POSITION_UNAVAILABLE
            ) {

                message =
                    "Your location is currently unavailable.";

            } else if (
                error.code ===
                error.TIMEOUT
            ) {

                message =
                    "Location request timed out.";

            }


            alert(message);


            // Fallback to Main Gate
            currentUserLocation =
                null;


            if (
                selectedDestinationKey
            ) {

                selectPlace(
                    selectedDestinationKey
                );
            }

        },

        {
            enableHighAccuracy:
                true,

            timeout:
                15000,

            maximumAge:
                5000
        }
    );
}


// ============================================================
// SHOW WHOLE CAMPUS
// ============================================================

function showWholeCampus() {

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;
    }


    if (currentMarker) {

        map.removeLayer(
            currentMarker
        );

        currentMarker = null;
    }


    selectedDestinationKey =
        null;


    const allPoints = [];


    campusRoads.forEach(
        road => {

            road.forEach(
                point => {

                    allPoints.push(
                        point
                    );

                }
            );

        }
    );


    Object.keys(
        places
    ).forEach(
        key => {

            allPoints.push([
                places[key].lat,
                places[key].lng
            ]);

        }
    );


    if (
        allPoints.length
    ) {

        map.fitBounds(
            allPoints,
            {
                padding: [
                    50,
                    50
                ]
            }
        );
    }


    const input =
        document.getElementById(
            "placeInput"
        );


    if (input) {
        input.value = "";
    }


    const result =
        document.getElementById(
            "result"
        );


    if (result) {

        result.innerHTML = `

            <div style="
                text-align:center;
                padding:10px;
            ">

                <div style="
                    font-size:30px;
                ">
                    🏫
                </div>

                <h3>
                    Whole Campus
                </h3>

                <p>
                    Select a destination
                    to start navigation.
                </p>

            </div>

        `;
    }


    const left =
        document.getElementById(
            "leftPlaces"
        );

    const right =
        document.getElementById(
            "rightPlaces"
        );


    if (left) {

        left.innerHTML =
            `<p class="small-text">
                Select a location
            </p>`;
    }


    if (right) {

        right.innerHTML =
            `<p class="small-text">
                Select a location
            </p>`;
    }
}


// ============================================================
// CLEAR NAVIGATION
// ============================================================

function clearNavigation() {

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;
    }


    if (currentMarker) {

        map.removeLayer(
            currentMarker
        );

        currentMarker = null;
    }


    selectedDestinationKey =
        null;


    const input =
        document.getElementById(
            "placeInput"
        );


    if (input) {

        input.value = "";
    }


    const suggestions =
        document.getElementById(
            "suggestions"
        );


    if (suggestions) {

        suggestions.innerHTML =
            "";
    }


    const result =
        document.getElementById(
            "result"
        );


    if (result) {

        result.innerHTML = `

            <div class="empty-result">

                <div class="empty-icon">
                    📍
                </div>

                <h3>
                    Select a Destination
                </h3>

                <p>
                    Search or click a location
                    to start navigation.
                </p>

            </div>

        `;
    }


    const left =
        document.getElementById(
            "leftPlaces"
        );

    const right =
        document.getElementById(
            "rightPlaces"
        );


    if (left) {

        left.innerHTML =
            `<p class="small-text">
                Select a location
            </p>`;
    }


    if (right) {

        right.innerHTML =
            `<p class="small-text">
                Select a location
            </p>`;
    }
}


// ============================================================
// INITIAL CAMPUS VIEW
// ============================================================

showWholeCampus();


// ============================================================
// MAP RESIZE FIX
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    500
);


// ============================================================
// OPTIONAL GPS WATCH
// ============================================================

function startLocationTracking() {

    if (
        !navigator.geolocation
    ) {
        return;
    }


    if (watchId !== null) {

        navigator.geolocation.clearWatch(
            watchId
        );
    }


    watchId =
        navigator.geolocation.watchPosition(

            function(position) {

                currentUserLocation = {

                    lat:
                        position.coords.latitude,

                    lng:
                        position.coords.longitude

                };


                if (userMarker) {

                    userMarker.setLatLng([
                        currentUserLocation.lat,
                        currentUserLocation.lng
                    ]);

                } else {

                    userMarker =
                        L.marker(
                            [
                                currentUserLocation.lat,
                                currentUserLocation.lng
                            ],
                            {
                                icon:
                                    userIcon,
                                zIndexOffset:
                                    3000
                            }
                        )
                        .addTo(map);

                }


                // Automatically update
                // route when user moves.
                if (
                    selectedDestinationKey
                ) {

                    selectPlace(
                        selectedDestinationKey
                    );

                }

            },

            function() {
                // Ignore background GPS errors.
            },

            {
                enableHighAccuracy:
                    true,

                maximumAge:
                    3000,

                timeout:
                    10000
            }
        );
}


// ============================================================
// FINISHED
// ============================================================

console.log(
    "Sarah Tucker College Campus Navigation loaded successfully."
);

console.log(
    "Road nodes:",
    graphNodes.length
);

console.log(
    "Campus places:",
    Object.keys(places).length
);
