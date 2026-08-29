// ============================================================
// SARAH TUCKER COLLEGE
// AI DRIVEN SMART CAMPUS NAVIGATION
// FULL CAMPUS MAP JAVASCRIPT
// ============================================================


// ============================================================
// 1. COLLEGE CENTER
// ============================================================

const COLLEGE_CENTER = [

    8.69835,
    77.74185

];


// ============================================================
// 2. CREATE MAP
// ============================================================

const map = L.map("map", {

    zoomControl: true,

    scrollWheelZoom: true,

    dragging: true,

    doubleClickZoom: true,

    touchZoom: true,

    attributionControl: true

}).setView(

    COLLEGE_CENTER,

    17

);


// ============================================================
// 3. STREET MAP
// ============================================================

const streetMap = L.tileLayer(

    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    {

        maxZoom: 22,

        attribution:
            "&copy; OpenStreetMap contributors"

    }

);


// ============================================================
// 4. SATELLITE MAP
// ============================================================

const satelliteMap = L.tileLayer(

    "https://server.arcgisonline.com/ArcGIS/rest/services/" +
    "World_Imagery/MapServer/tile/{z}/{y}/{x}",

    {

        maxZoom: 22,

        attribution:
            "Tiles &copy; Esri"

    }

);


// ============================================================
// 5. SATELLITE LABELS
// ============================================================

const satelliteLabels = L.tileLayer(

    "https://server.arcgisonline.com/ArcGIS/rest/services/" +
    "Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",

    {

        maxZoom: 22,

        attribution:
            "Labels &copy; Esri"

    }

);


// ============================================================
// 6. DEFAULT MAP
// ============================================================

satelliteMap.addTo(map);

satelliteLabels.addTo(map);


// ============================================================
// 7. MAP LAYER CONTROL
// ============================================================

const baseMaps = {

    "Satellite": satelliteMap,

    "Street Map": streetMap

};


const overlayMaps = {

    "Satellite Labels": satelliteLabels

};


L.control.layers(

    baseMaps,

    overlayMaps,

    {

        collapsed: false

    }

).addTo(map);


// ============================================================
// 8. CAMPUS PLACES
// ============================================================
// Based on the reference image layout.
// Coordinates are approximate campus coordinates.
// ============================================================

const places = {


    // --------------------------------------------------------
    // MAIN GATE
    // --------------------------------------------------------

    "main gate": {

        lat: 8.69895,

        lng: 77.74135,

        description:
            "Main entrance of Sarah Tucker College."

    },


    // --------------------------------------------------------
    // PARKING
    // --------------------------------------------------------

    "parking": {

        lat: 8.69855,

        lng: 77.74110,

        description:
            "College parking area."

    },


    // --------------------------------------------------------
    // LIBRARY
    // --------------------------------------------------------

    "library": {

        lat: 8.69845,

        lng: 77.74115,

        description:
            "College library providing books, reference materials and learning resources."

    },


    // --------------------------------------------------------
    // OLD AUDITORIUM
    // --------------------------------------------------------

    "old auditorium": {

        lat: 8.69825,

        lng: 77.74115,

        description:
            "Old auditorium area of Sarah Tucker College."

    },


    // --------------------------------------------------------
    // COMPUTER SCIENCE
    // --------------------------------------------------------

    "computer science": {

        lat: 8.69795,

        lng: 77.74120,

        description:
            "Department of Computer Science."

    },


    // --------------------------------------------------------
    // FOOD SCIENCE
    // --------------------------------------------------------

    "food science": {

        lat: 8.69785,

        lng: 77.74120,

        description:
            "Food Science department and related facilities."

    },


    // --------------------------------------------------------
    // MAIN BLOCK
    // --------------------------------------------------------

    "main block": {

        lat: 8.69845,

        lng: 77.74170,

        description:
            "Main academic and administrative block."

    },


    // --------------------------------------------------------
    // ADMINISTRATION
    // --------------------------------------------------------

    "administration": {

        lat: 8.69850,

        lng: 77.74155,

        description:
            "College administration and office section."

    },


    // --------------------------------------------------------
    // PRINCIPAL OFFICE
    // --------------------------------------------------------

    "principal office": {

        lat: 8.69850,

        lng: 77.74180,

        description:
            "Principal's office and administrative area."

    },


    // --------------------------------------------------------
    // BOTANY
    // --------------------------------------------------------

    "botany": {

        lat: 8.69835,

        lng: 77.74165,

        description:
            "Department of Botany."

    },


    // --------------------------------------------------------
    // PHYSICS
    // --------------------------------------------------------

    "physics": {

        lat: 8.69825,

        lng: 77.74185,

        description:
            "Department of Physics and laboratory facilities."

    },


    // --------------------------------------------------------
    // CHEMISTRY
    // --------------------------------------------------------

    "chemistry": {

        lat: 8.69825,

        lng: 77.74205,

        description:
            "Department of Chemistry and laboratory facilities."

    },


    // --------------------------------------------------------
    // MATHS
    // --------------------------------------------------------

    "maths": {

        lat: 8.69840,

        lng: 77.74205,

        description:
            "Department of Mathematics."

    },


    // --------------------------------------------------------
    // BCOM
    // --------------------------------------------------------

    "bcom": {

        lat: 8.69855,

        lng: 77.74215,

        description:
            "Department of Commerce and B.Com academic facilities."

    },


    // --------------------------------------------------------
    // BCA
    // --------------------------------------------------------

    "bca": {

        lat: 8.69880,

        lng: 77.74230,

        description:
            "BCA academic area with computer application facilities."

    },


    // --------------------------------------------------------
    // MCA BLOCK
    // --------------------------------------------------------

    "mca block": {

        lat: 8.69900,

        lng: 77.74230,

        description:
            "MCA Block with classrooms and computer-related facilities."

    },


    // --------------------------------------------------------
    // HISTORY
    // --------------------------------------------------------

    "history": {

        lat: 8.69910,

        lng: 77.74210,

        description:
            "Department of History."

    },


    // --------------------------------------------------------
    // ENGLISH
    // --------------------------------------------------------

    "english": {

        lat: 8.69895,

        lng: 77.74185,

        description:
            "Department of English."

    },


    // --------------------------------------------------------
    // TAMIL
    // --------------------------------------------------------

    "tamil": {

        lat: 8.69875,

        lng: 77.74130,

        description:
            "Department of Tamil."

    },


    // --------------------------------------------------------
    // ZOOLOGY
    // --------------------------------------------------------

    "zoology": {

        lat: 8.69815,

        lng: 77.74190,

        description:
            "Department of Zoology."

    },


    // --------------------------------------------------------
    // NUTRITION AND DIETETICS
    // --------------------------------------------------------

    "nutrition and dietetics": {

        lat: 8.69915,

        lng: 77.74180,

        description:
            "Department of Nutrition and Dietetics."

    },


    // --------------------------------------------------------
    // CANTEEN
    // --------------------------------------------------------

    "canteen": {

        lat: 8.69925,

        lng: 77.74225,

        description:
            "College canteen serving food and refreshments."

    },


    // --------------------------------------------------------
    // BANK
    // --------------------------------------------------------

    "bank": {

        lat: 8.69920,

        lng: 77.74200,

        description:
            "College bank facility."

    },


    // --------------------------------------------------------
    // NEW AUDITORIUM
    // --------------------------------------------------------

    "new auditorium": {

        lat: 8.69895,

        lng: 77.74255,

        description:
            "New auditorium used for programmes, seminars and cultural events."

    },


    // --------------------------------------------------------
    // CHAPEL
    // --------------------------------------------------------

    "chapel": {

        lat: 8.69820,

        lng: 77.74255,

        description:
            "Campus chapel."

    },


    // --------------------------------------------------------
    // PLAYGROUND
    // --------------------------------------------------------

    "playground": {

        lat: 8.69805,

        lng: 77.74200,

        description:
            "College playground and sports area."

    },


    // --------------------------------------------------------
    // HOSTEL
    // --------------------------------------------------------

    "hostel": {

        lat: 8.69765,

        lng: 77.74190,

        description:
            "Sarah Tucker College student hostel area."

    },


    // --------------------------------------------------------
    // SPORTS GROUND
    // --------------------------------------------------------

    "sports ground": {

        lat: 8.69755,

        lng: 77.74155,

        description:
            "Sports ground used for outdoor activities and college sports."

    },


    // --------------------------------------------------------
    // SEMINAR HALL
    // --------------------------------------------------------

    "seminar hall": {

        lat: 8.69800,

        lng: 77.74235,

        description:
            "Seminar hall used for academic presentations and programmes."

    },


    // --------------------------------------------------------
    // COMPUTER LAB
    // --------------------------------------------------------

    "computer lab": {

        lat: 8.69870,

        lng: 77.74175,

        description:
            "Computer laboratory used for practical classes."

    },


    // --------------------------------------------------------
    // STAFF ROOM
    // --------------------------------------------------------

    "staff room": {

        lat: 8.69860,

        lng: 77.74175,

        description:
            "Faculty and staff room area."

    }

};


// ============================================================
// 9. GLOBAL VARIABLES
// ============================================================

let currentMarker = null;

let routeLine = null;

let mainGateMarker = null;

let userMarker = null;

let allMarkers = [];


// ============================================================
// 10. MAIN GATE ICON
// ============================================================

const gateIcon = L.divIcon({

    className:
        "custom-gate-marker",

    html: `

        <div style="
            background:#16a34a;
            width:38px;
            height:38px;
            border-radius:50%;
            border:4px solid white;
            box-shadow:
                0 3px 10px rgba(0,0,0,.55);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:19px;
        ">

            🚪

        </div>

    `,

    iconSize: [38, 38],

    iconAnchor: [19, 19]

});


// ============================================================
// 11. NORMAL CAMPUS ICON
// ============================================================

const placeIcon = L.divIcon({

    className:
        "campus-marker",

    html: `

        <div style="
            background:#1976d2;
            width:30px;
            height:30px;
            border-radius:50%;
            border:3px solid white;
            box-shadow:
                0 2px 8px rgba(0,0,0,.50);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:11px;
            font-weight:bold;
        ">

            ●

        </div>

    `,

    iconSize: [30, 30],

    iconAnchor: [15, 15]

});


// ============================================================
// 12. DESTINATION ICON
// ============================================================

const destinationIcon = L.divIcon({

    className:
        "destination-marker",

    html: `

        <div style="
            background:#e53935;
            width:42px;
            height:42px;
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            border:3px solid white;
            box-shadow:
                0 3px 12px rgba(0,0,0,.55);
            display:flex;
            align-items:center;
            justify-content:center;
        ">

            <div style="
                width:13px;
                height:13px;
                background:white;
                border-radius:50%;
            "></div>

        </div>

    `,

    iconSize: [42, 42],

    iconAnchor: [21, 42]

});


// ============================================================
// 13. USER LOCATION ICON
// ============================================================

const userIcon = L.divIcon({

    className: "user-location-marker",

    html: `

        <div style="
            width:20px;
            height:20px;
            background:#2563eb;
            border:4px solid white;
            border-radius:50%;
            box-shadow:
                0 0 0 8px rgba(37,99,235,.20),
                0 2px 8px rgba(0,0,0,.40);
        "></div>

    `,

    iconSize: [20, 20],

    iconAnchor: [10, 10]

});


// ============================================================
// 14. FORMAT NAME
// ============================================================

function formatName(name) {

    return name

        .split(" ")

        .map(word => {

            return word.charAt(0).toUpperCase()
                + word.slice(1);

        })

        .join(" ");

}


// ============================================================
// 15. CREATE ALL MARKERS
// ============================================================

function createMarkers() {

    Object.keys(places).forEach(key => {


        if (key === "main gate") {

            return;

        }


        const place =
            places[key];


        const marker =
            L.marker(

                [
                    place.lat,
                    place.lng
                ],

                {

                    icon:
                        placeIcon

                }

            ).addTo(map);


        marker.bindTooltip(

            formatName(key),

            {

                direction: "top",

                offset: [
                    0,
                    -10
                ]

            }

        );


        marker.bindPopup(`

            <div style="
                min-width:220px;
                font-family:Arial;
            ">

                <h3 style="
                    margin:0 0 8px;
                    color:#173f63;
                ">

                    ${formatName(key)}

                </h3>

                <p style="
                    line-height:1.5;
                    margin:0;
                    color:#526477;
                ">

                    ${place.description}

                </p>

                <button
                    onclick="selectPlace('${key}')"
                    style="
                        margin-top:12px;
                        padding:8px 15px;
                        border:0;
                        border-radius:6px;
                        background:#173f63;
                        color:white;
                        cursor:pointer;
                        font-weight:600;
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


        allMarkers.push(marker);

    });


    // ========================================================
    // MAIN GATE
    // ========================================================

    const gate =
        places["main gate"];


    mainGateMarker =
        L.marker(

            [
                gate.lat,
                gate.lng
            ],

            {

                icon:
                    gateIcon,

                zIndexOffset:
                    1000

            }

        ).addTo(map);


    mainGateMarker.bindPopup(`

        <div style="
            min-width:200px;
            font-family:Arial;
        ">

            <h3 style="
                color:#16803c;
                margin:0 0 8px;
            ">

                🚪 Main Gate

            </h3>

            <p style="
                line-height:1.5;
            ">

                Starting point for
                Sarah Tucker College navigation.

            </p>

        </div>

    `);

}


// ============================================================
// 16. CREATE MARKERS
// ============================================================

createMarkers();


// ============================================================
// 17. FIND PLACE
// ============================================================

function findPlace() {

    const inputElement =
        document.getElementById(
            "placeInput"
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
            "Please enter a college place."
        );

        inputElement.focus();

        return;

    }


    let selectedKey =
        null;


    // Exact match

    if (places[input]) {

        selectedKey =
            input;

    }


    // Partial match

    else {

        const keys =
            Object.keys(places);


        for (const key of keys) {

            if (

                key.includes(input) ||

                input.includes(key)

            ) {

                selectedKey =
                    key;

                break;

            }

        }

    }


    // Not found

    if (!selectedKey) {

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
                        font-size:28px;
                        margin-bottom:8px;
                    ">

                        ❌

                    </div>

                    <h3 style="
                        color:#b42318;
                        margin-bottom:6px;
                    ">

                        Location Not Found

                    </h3>

                    <p style="
                        color:#718096;
                        font-size:12px;
                        line-height:1.5;
                    ">

                        We could not find
                        <b>${escapeHtml(input)}</b>.

                    </p>

                    <p style="
                        margin-top:8px;
                        color:#667788;
                        font-size:11px;
                    ">

                        Try Library, Canteen,
                        Computer Science,
                        Hostel, Chapel,
                        Playground or MCA Block.

                    </p>

                </div>

            `;

        }

        return;

    }


    selectPlace(
        selectedKey
    );

}


// ============================================================
// 18. SELECT PLACE
// ============================================================

function selectPlace(key) {

    if (!places[key]) {

        return;

    }


    const place =
        places[key];


    // Remove previous route

    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    // Remove previous destination

    if (currentMarker) {

        map.removeLayer(
            currentMarker
        );

        currentMarker = null;

    }


    // Main gate

    const gate =
        places["main gate"];


    const start =
        L.latLng(

            gate.lat,

            gate.lng

        );


    const destination =
        L.latLng(

            place.lat,

            place.lng

        );


    // ========================================================
    // CREATE WALKING ROUTE
    // ========================================================

    const routePoints =
        createCampusRoute(

            start,

            destination,

            key

        );


    routeLine =
        L.polyline(

            routePoints,

            {

                className:
                    "campus-route",

                color:
                    "#e53935",

                weight:
                    6,

                opacity:
                    0.90,

                dashArray:
                    "12,8",

                lineCap:
                    "round",

                lineJoin:
                    "round"

            }

        ).addTo(map);


    // ========================================================
    // DESTINATION MARKER
    // ========================================================

    currentMarker =
        L.marker(

            [
                place.lat,
                place.lng
            ],

            {

                icon:
                    destinationIcon,

                zIndexOffset:
                    2000

            }

        ).addTo(map);


    currentMarker.bindPopup(`

        <div style="
            min-width:220px;
            font-family:Arial;
        ">

            <h3 style="
                color:#e53935;
                margin:0 0 8px;
            ">

                📍 ${formatName(key)}

            </h3>

            <p style="
                line-height:1.5;
                color:#526477;
            ">

                ${place.description}

            </p>

        </div>

    `).openPopup();


    // ========================================================
    // DISTANCE
    // ========================================================

    const distance =
        calculateRouteDistance(
            routePoints
        );


    // ========================================================
    // SHOW RESULT
    // ========================================================

    showResult(

        key,

        place,

        distance

    );


    // ========================================================
    // SHOW NEARBY
    // ========================================================

    showNearbyPlaces(
        key
    );


    // ========================================================
    // ZOOM
    // ========================================================

    map.fitBounds(

        routeLine.getBounds(),

        {

            padding:
                [80, 80]

        }

    );


    // ========================================================
    // UPDATE SEARCH
    // ========================================================

    const input =
        document.getElementById(
            "placeInput"
        );


    if (input) {

        input.value =
            formatName(key);

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
// 19. CAMPUS ROUTE GENERATOR
// ============================================================
// Creates a campus-style walking route instead of a simple
// straight line.
// ============================================================

function createCampusRoute(

    start,
    destination,
    key

) {


    const route = [];


    route.push(start);


    // Main internal road

    const campusRoad1 =
        L.latLng(

            8.69875,
            77.74145

        );


    const campusRoad2 =
        L.latLng(

            8.69860,
            77.74175

        );


    // Places on left side

    if (

        key === "library" ||

        key === "parking" ||

        key === "old auditorium" ||

        key === "computer science" ||

        key === "food science"

    ) {

        route.push(

            L.latLng(
                8.69865,
                77.74135
            )

        );

    }


    // Places in central area

    else if (

        key === "main block" ||

        key === "administration" ||

        key === "principal office" ||

        key === "botany" ||

        key === "physics" ||

        key === "chemistry" ||

        key === "maths" ||

        key === "zoology" ||

        key === "tamil" ||

        key === "english" ||

        key === "computer lab" ||

        key === "staff room"

    ) {

        route.push(
            campusRoad1
        );

        route.push(
            campusRoad2
        );

    }


    // Right side

    else if (

        key === "canteen" ||

        key === "bank" ||

        key === "bca" ||

        key === "mca block" ||

        key === "history" ||

        key === "nutrition and dietetics" ||

        key === "new auditorium" ||

        key === "seminar hall"

    ) {

        route.push(

            L.latLng(
                8.69880,
                77.74205
            )

        );

    }


    // Lower campus

    else if (

        key === "hostel" ||

        key === "playground" ||

        key === "sports ground" ||

        key === "chapel"

    ) {

        route.push(

            L.latLng(
                8.69830,
                77.74170
            )

        );

        route.push(

            L.latLng(
                8.69800,
                77.74185
            )

        );

    }


    else {

        route.push(
            campusRoad1
        );

    }


    route.push(
        destination
    );


    return route;

}


// ============================================================
// 20. HAVERSINE DISTANCE
// ============================================================

function calculateDistance(

    start,
    end

) {

    const R =
        6371000;


    const lat1 =
        start.lat *
        Math.PI /
        180;


    const lat2 =
        end.lat *
        Math.PI /
        180;


    const deltaLat =
        (

            end.lat -
            start.lat

        ) *

        Math.PI /
        180;


    const deltaLng =
        (

            end.lng -
            start.lng

        ) *

        Math.PI /
        180;


    const a =

        Math.sin(
            deltaLat / 2
        ) *
        Math.sin(
            deltaLat / 2
        )

        +

        Math.cos(lat1) *
        Math.cos(lat2) *

        Math.sin(
            deltaLng / 2
        ) *
        Math.sin(
            deltaLng / 2
        );


    const c =

        2 *
        Math.atan2(

            Math.sqrt(a),

            Math.sqrt(
                1 - a
            )

        );


    return Math.round(
        R * c
    );

}


// ============================================================
// 21. ROUTE DISTANCE
// ============================================================

function calculateRouteDistance(

    points

) {

    let total =
        0;


    for (

        let i = 0;

        i < points.length - 1;

        i++

    ) {

        total +=

            calculateDistance(

                L.latLng(
                    points[i]
                ),

                L.latLng(
                    points[i + 1]
                )

            );

    }


    return Math.round(
        total
    );

}


// ============================================================
// 22. FORMAT DISTANCE
// ============================================================

function formatDistance(

    meters

) {

    if (

        meters < 1000

    ) {

        return (
            meters +
            " m"
        );

    }


    return (

        (
            meters / 1000
        ).toFixed(2)

        +

        " km"

    );

}


// ============================================================
// 23. SHOW RESULT
// ============================================================

function showResult(

    key,
    place,
    distance

) {

    const result =
        document.getElementById(
            "result"
        );


    if (!result) {

        return;

    }


    result.innerHTML = `

        <div class="destination-header">

            <div class="destination-pin">

                📍

            </div>

            <div>

                <div style="
                    font-size:10px;
                    color:#8a98a6;
                    margin-bottom:2px;
                ">

                    DESTINATION

                </div>

                <div class="destination-name">

                    ${formatName(key)}

                </div>

            </div>

        </div>


        <div class="distance">

            Distance from Main Gate

            <strong>

                ${formatDistance(distance)}

            </strong>

        </div>


        <div class="description">

            <b>Description</b>

            <br>

            ${place.description}

        </div>


        <div class="route-box">

            <strong>Walking Route</strong>

            <br><br>

            🚪 Main Gate

            <br>

            ↓

            <br>

            🚶 Campus Path

            <br>

            ↓

            <br>

            📍 ${formatName(key)}

        </div>

    `;

}


// ============================================================
// 24. SHOW NEARBY PLACES
// ============================================================

function showNearbyPlaces(

    selectedKey

) {

    const selected =
        places[selectedKey];


    const nearby = [];


    Object.keys(places).forEach(

        key => {


            if (

                key === selectedKey ||

                key === "main gate"

            ) {

                return;

            }


            const place =
                places[key];


            const distance =
                calculateDistance(

                    L.latLng(

                        selected.lat,

                        selected.lng

                    ),

                    L.latLng(

                        place.lat,

                        place.lng

                    )

                );


            const side =

                place.lng <
                selected.lng

                    ? "left"

                    : "right";


            nearby.push({

                key:
                    key,

                distance:
                    distance,

                side:
                    side

            });

        }

    );


    // Sort nearest first

    nearby.sort(

        (a, b) =>

            a.distance -
            b.distance

    );


    const leftPlaces =

        nearby

            .filter(

                item =>

                    item.side ===
                    "left"

            )

            .slice(

                0,
                5

            );


    const rightPlaces =

        nearby

            .filter(

                item =>

                    item.side ===
                    "right"

            )

            .slice(

                0,
                5

            );


    const leftContainer =
        document.getElementById(
            "leftPlaces"
        );


    const rightContainer =
        document.getElementById(
            "rightPlaces"
        );


    if (leftContainer) {

        leftContainer.innerHTML =

            createPlaceList(
                leftPlaces
            );

    }


    if (rightContainer) {

        rightContainer.innerHTML =

            createPlaceList(
                rightPlaces
            );

    }

}


// ============================================================
// 25. CREATE NEARBY LIST
// ============================================================

function createPlaceList(

    list

) {

    if (

        list.length === 0

    ) {

        return `

            <p class="small-text">

                No nearby places.

            </p>

        `;

    }


    return list

        .map(

            item => {

                return `

                    <div

                        class="place-item"

                        onclick="
                            selectPlace(
                                '${item.key}'
                            )
                        "

                    >

                        <div
                            class="place-name"
                        >

                            ${formatName(
                                item.key
                            )}

                        </div>

                        <div
                            class="place-distance"
                        >

                            ${formatDistance(
                                item.distance
                            )}

                        </div>

                    </div>

                `;

            }

        )

        .join("");

}


// ============================================================
// 26. SEARCH SUGGESTIONS
// ============================================================

const input =
    document.getElementById(
        "placeInput"
    );


if (input) {


    input.addEventListener(

        "input",

        function() {


            const value =
                input.value
                    .trim()
                    .toLowerCase();


            const suggestionBox =
                document.getElementById(
                    "suggestions"
                );


            if (!suggestionBox) {

                return;

            }


            suggestionBox.innerHTML =
                "";


            if (!value) {

                return;

            }


            const matches =

                Object.keys(places)

                    .filter(

                        key =>

                            key.includes(
                                value
                            )

                    )

                    .slice(

                        0,
                        8

                    );


            matches.forEach(

                key => {


                    const div =
                        document.createElement(
                            "div"
                        );


                    div.className =
                        "suggestion-item";


                    div.textContent =
                        formatName(
                            key
                        );


                    div.onclick =
                        function() {


                            input.value =
                                formatName(
                                    key
                                );


                            suggestionBox
                                .innerHTML =
                                "";


                            selectPlace(
                                key
                            );

                        };


                    suggestionBox
                        .appendChild(
                            div
                        );

                }

            );

        }

    );


    // ========================================================
    // ENTER KEY
    // ========================================================

    input.addEventListener(

        "keydown",

        function(event) {


            if (

                event.key ===
                "Enter"

            ) {

                findPlace();

            }

        }

    );

}


// ============================================================
// 27. ESCAPE HTML
// ============================================================

function escapeHtml(

    text

) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


// ============================================================
// 28. SHOW WHOLE CAMPUS
// ============================================================

function showWholeCampus() {


    const points =

        Object.keys(places)

            .map(

                key => [

                    places[key].lat,

                    places[key].lng

                ]

            );


    if (!points.length) {

        return;

    }


    const campusBounds =
        L.latLngBounds(
            points
        );


    map.fitBounds(

        campusBounds,

        {

            padding:
                [50, 50]

        }

    );

}


// ============================================================
// 29. CURRENT LOCATION
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


    navigator.geolocation
        .getCurrentPosition(

            function(position) {


                const userLat =
                    position.coords.latitude;


                const userLng =
                    position.coords.longitude;


                const userLocation =
                    L.latLng(

                        userLat,

                        userLng

                    );


                // Remove old user marker

                if (userMarker) {

                    map.removeLayer(
                        userMarker
                    );

                }


                userMarker =

                    L.marker(

                        userLocation,

                        {

                            icon:
                                userIcon,

                            zIndexOffset:
                                3000

                        }

                    ).addTo(map);


                userMarker.bindPopup(

                    "<b>📍 Your Current Location</b>"

                ).openPopup();


                map.setView(

                    userLocation,

                    19

                );

            },


            function(error) {


                console.log(

                    "Location error:",

                    error

                );


                let message =
                    "Unable to get your current location.";


                if (
                    error.code === 1
                ) {

                    message =
                        "Location permission was denied. Please allow location access.";

                }


                if (
                    error.code === 2
                ) {

                    message =
                        "Your current location is unavailable.";

                }


                if (
                    error.code === 3
                ) {

                    message =
                        "Location request timed out.";

                }


                alert(message);

            },


            {

                enableHighAccuracy:
                    true,

                timeout:
                    10000,

                maximumAge:
                    0

            }

        );

}


// ============================================================
// 30. CLEAR NAVIGATION
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

        suggestions.innerHTML = "";

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

        left.innerHTML = `

            <p class="small-text">

                Select a location

            </p>

        `;

    }


    if (right) {

        right.innerHTML = `

            <p class="small-text">

                Select a location

            </p>

        `;

    }


    showWholeCampus();

}


// ============================================================
// 31. MAP RESIZE
// ============================================================

setTimeout(

    function() {

        map.invalidateSize();

    },

    500

);


// ============================================================
// 32. INITIAL CAMPUS VIEW
// ============================================================

setTimeout(

    function() {

        showWholeCampus();

    },

    700

);
