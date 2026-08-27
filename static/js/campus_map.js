// ============================================================
// SARAH TUCKER COLLEGE
// REAL MAP NAVIGATION SYSTEM
// ============================================================


// ============================================================
// 1. SARAH TUCKER COLLEGE CENTER
// ============================================================

const COLLEGE_CENTER = [
    8.6986,
    77.74165
];


// ============================================================
// 2. CREATE REAL LEAFLET MAP
// ============================================================

const map = L.map("map", {

    zoomControl: true,

    scrollWheelZoom: true,

    dragging: true,

    doubleClickZoom: true,

    touchZoom: true

}).setView(

    COLLEGE_CENTER,

    18

);


// ============================================================
// 3. OPEN STREET MAP
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
// 6. DEFAULT = SATELLITE
// ============================================================

satelliteMap.addTo(map);

satelliteLabels.addTo(map);


// ============================================================
// 7. MAP TYPE CONTROL
// ============================================================

const baseMaps = {

    "Satellite": satelliteMap,

    "Street Map": streetMap

};


const overlayMaps = {

    "Labels": satelliteLabels

};


L.control.layers(

    baseMaps,

    overlayMaps,

    {

        collapsed: false

    }

).addTo(map);


// ============================================================
// 8. SARAH TUCKER COLLEGE PLACES
// ============================================================
//
// College center is based on the real campus location.
// Internal building coordinates are approximate and should
// be calibrated against satellite imagery for exact placement.
// ============================================================

const places = {

    // --------------------------------------------------------
    // MAIN GATE
    // --------------------------------------------------------

    "main gate": {

        lat: 8.69805,

        lng: 77.74120,

        description:
            "Main entrance of Sarah Tucker College, " +
            "Perumalpuram, Palayamkottai."

    },


    // --------------------------------------------------------
    // MAIN BLOCK
    // --------------------------------------------------------

    "main block": {

        lat: 8.69865,

        lng: 77.74160,

        description:
            "Main academic and administrative block " +
            "of Sarah Tucker College."

    },


    // --------------------------------------------------------
    // MCA BLOCK
    // --------------------------------------------------------

    "mca block": {

        lat: 8.69880,

        lng: 77.74200,

        description:
            "MCA Block with classrooms, laboratories " +
            "and computer-related academic facilities."

    },


    // --------------------------------------------------------
    // BCA
    // --------------------------------------------------------

    "bca": {

        lat: 8.69895,

        lng: 77.74155,

        description:
            "BCA academic area with computer science " +
            "and application-related facilities."

    },


    // --------------------------------------------------------
    // COMPUTER SCIENCE
    // --------------------------------------------------------

    "computer science": {

        lat: 8.69905,

        lng: 77.74185,

        description:
            "Department of Computer Science."

    },


    // --------------------------------------------------------
    // LIBRARY
    // --------------------------------------------------------

    "library": {

        lat: 8.69830,

        lng: 77.74220,

        description:
            "College library providing books, reference " +
            "materials and learning resources."

    },


    // --------------------------------------------------------
    // ENGLISH
    // --------------------------------------------------------

    "english": {

        lat: 8.69900,

        lng: 77.74225,

        description:
            "Department of English."

    },


    // --------------------------------------------------------
    // BCOM
    // --------------------------------------------------------

    "bcom": {

        lat: 8.69870,

        lng: 77.74240,

        description:
            "Department of Commerce and B.Com academic facilities."

    },


    // --------------------------------------------------------
    // ECONOMICS
    // --------------------------------------------------------

    "economics": {

        lat: 8.69915,

        lng: 77.74235,

        description:
            "Department of Economics."

    },


    // --------------------------------------------------------
    // HISTORY
    // --------------------------------------------------------

    "history": {

        lat: 8.69920,

        lng: 77.74195,

        description:
            "Department of History."

    },


    // --------------------------------------------------------
    // TAMIL
    // --------------------------------------------------------

    "tamil": {

        lat: 8.69890,

        lng: 77.74120,

        description:
            "Department of Tamil."

    },


    // --------------------------------------------------------
    // MATHEMATICS
    // --------------------------------------------------------

    "maths": {

        lat: 8.69845,

        lng: 77.74130,

        description:
            "Department of Mathematics."

    },


    // --------------------------------------------------------
    // PHYSICS
    // --------------------------------------------------------

    "physics": {

        lat: 8.69835,

        lng: 77.74170,

        description:
            "Department of Physics and laboratory facilities."

    },


    // --------------------------------------------------------
    // CHEMISTRY
    // --------------------------------------------------------

    "chemistry": {

        lat: 8.69840,

        lng: 77.74200,

        description:
            "Department of Chemistry and laboratory facilities."

    },


    // --------------------------------------------------------
    // BOTANY
    // --------------------------------------------------------

    "botany": {

        lat: 8.69855,

        lng: 77.74255,

        description:
            "Department of Botany."

    },


    // --------------------------------------------------------
    // ZOOLOGY
    // --------------------------------------------------------

    "zoology": {

        lat: 8.69820,

        lng: 77.74245,

        description:
            "Department of Zoology."

    },


    // --------------------------------------------------------
    // NUTRITION & DIETETICS
    // --------------------------------------------------------

    "nutrition and dietetics": {

        lat: 8.69930,

        lng: 77.74210,

        description:
            "Department of Nutrition and Dietetics."

    },


    // --------------------------------------------------------
    // HOSTEL
    // --------------------------------------------------------

    "hostel": {

        lat: 8.69960,

        lng: 77.74170,

        description:
            "Sarah Tucker College student hostel area."

    },


    // --------------------------------------------------------
    // CANTEEN
    // --------------------------------------------------------

    "canteen": {

        lat: 8.69935,

        lng: 77.74265,

        description:
            "College canteen serving food and refreshments."

    },


    // --------------------------------------------------------
    // PLAYGROUND
    // --------------------------------------------------------

    "playground": {

        lat: 8.69975,

        lng: 77.74220,

        description:
            "College playground and sports area."

    },


    // --------------------------------------------------------
    // AUDITORIUM
    // --------------------------------------------------------

    "auditorium": {

        lat: 8.69815,

        lng: 77.74270,

        description:
            "College auditorium used for programmes, " +
            "seminars and cultural events."

    },


    // --------------------------------------------------------
    // SEMINAR HALL
    // --------------------------------------------------------

    "seminar hall": {

        lat: 8.69875,

        lng: 77.74275,

        description:
            "Seminar hall used for academic presentations " +
            "and college programmes."

    },


    // --------------------------------------------------------
    // CHAPEL
    // --------------------------------------------------------

    "chapel": {

        lat: 8.69965,

        lng: 77.74095,

        description:
            "Campus chapel."

    },


    // --------------------------------------------------------
    // PARKING
    // --------------------------------------------------------

    "parking": {

        lat: 8.69795,

        lng: 77.74245,

        description:
            "College parking area."

    },


    // --------------------------------------------------------
    // SPORTS GROUND
    // --------------------------------------------------------

    "sports ground": {

        lat: 8.69980,

        lng: 77.74160,

        description:
            "Sports ground used for outdoor activities " +
            "and college sports."

    },


    // --------------------------------------------------------
    // ADMINISTRATION
    // --------------------------------------------------------

    "administration": {

        lat: 8.69855,

        lng: 77.74155,

        description:
            "College administration and office section."

    },


    // --------------------------------------------------------
    // PRINCIPAL OFFICE
    // --------------------------------------------------------

    "principal office": {

        lat: 8.69850,

        lng: 77.74165,

        description:
            "Principal's office and administrative area."

    },


    // --------------------------------------------------------
    // COMPUTER LAB
    // --------------------------------------------------------

    "computer lab": {

        lat: 8.69890,

        lng: 77.74175,

        description:
            "Computer laboratory used for practical classes."

    },


    // --------------------------------------------------------
    // STAFF ROOM
    // --------------------------------------------------------

    "staff room": {

        lat: 8.69870,

        lng: 77.74175,

        description:
            "Faculty and staff room area."

    }

};


// ============================================================
// 9. VARIABLES
// ============================================================

let currentMarker = null;

let routeLine = null;

let mainGateMarker = null;

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
            width:36px;
            height:36px;
            border-radius:50%;
            border:4px solid white;
            box-shadow:0 3px 10px rgba(0,0,0,.55);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:18px;
        ">

            🚪

        </div>

    `,

    iconSize: [36, 36],

    iconAnchor: [18, 18]

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
            width:28px;
            height:28px;
            border-radius:50%;
            border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,.5);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:12px;
            font-weight:bold;
        ">

            ●

        </div>

    `,

    iconSize: [28, 28],

    iconAnchor: [14, 14]

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
            width:40px;
            height:40px;
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            border:3px solid white;
            box-shadow:0 3px 12px rgba(0,0,0,.55);
        ">

            <div style="
                width:13px;
                height:13px;
                background:white;
                border-radius:50%;
                margin:11px;
            "></div>

        </div>

    `,

    iconSize: [40, 40],

    iconAnchor: [20, 40]

});


// ============================================================
// 13. FORMAT NAME
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
// 14. CREATE CAMPUS MARKERS
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
                    icon: placeIcon
                }

            ).addTo(map);


        // Tooltip
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


        // Popup
        marker.bindPopup(`

            <div style="
                min-width:220px;
                font-family:Arial;
            ">

                <h3 style="
                    margin:0 0 8px;
                    color:#17365d;
                ">

                    ${formatName(key)}

                </h3>

                <p style="
                    line-height:1.5;
                    margin:0;
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
                        background:#17365d;
                        color:white;
                        cursor:pointer;
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
                icon: gateIcon,

                zIndexOffset: 1000

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

                Main Gate

            </h3>

            <p>

                Starting point for
                Sarah Tucker College navigation.

            </p>

        </div>

    `);

}


// ============================================================
// 15. CREATE MARKERS
// ============================================================

createMarkers();


// ============================================================
// 16. FIND PLACE
// ============================================================

function findPlace() {

    const inputElement =
        document.getElementById(
            "placeInput"
        );


    if (!inputElement) {

        console.error(
            "placeInput not found"
        );

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


    let selectedKey = null;


    // Exact match
    if (places[input]) {

        selectedKey = input;

    }


    // Partial match
    else {

        const keys =
            Object.keys(places);


        for (
            const key of keys
        ) {

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

                <h2>
                    Location Not Found
                </h2>

                <p>

                    We could not find
                    <b>${escapeHtml(input)}</b>.

                </p>

                <p style="
                    margin-top:10px;
                ">

                    Try:
                    MCA Block, BCA,
                    Library, Main Block,
                    Hostel, Canteen,
                    Computer Science,
                    Physics, Chemistry,
                    Maths, Botany,
                    Zoology or Auditorium.

                </p>

            `;

        }

        return;

    }


    selectPlace(
        selectedKey
    );

}


// ============================================================
// 17. SELECT PLACE
// ============================================================

function selectPlace(key) {

    if (!places[key]) {

        return;

    }


    const place =
        places[key];


    // Remove old route
    if (routeLine) {

        map.removeLayer(
            routeLine
        );

        routeLine = null;

    }


    // Remove old destination
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
    // DRAW ROUTE
    // ========================================================

    routeLine =
        L.polyline(

            [
                start,
                destination
            ],

            {

                color:
                    "#e53935",

                weight:
                    6,

                opacity:
                    0.9,

                dashArray:
                    "12,8",

                lineCap:
                    "round",

                lineJoin:
                    "round"

            }

        ).addTo(map);


    // ========================================================
    // DESTINATION
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


    currentMarker
        .bindPopup(`

            <div style="
                min-width:230px;
                font-family:Arial;
            ">

                <h3 style="
                    color:#e53935;
                    margin:0 0 8px;
                ">

                    ${formatName(key)}

                </h3>

                <p style="
                    line-height:1.5;
                    margin:0;
                ">

                    ${place.description}

                </p>

            </div>

        `)
        .openPopup();


    // ========================================================
    // DISTANCE
    // ========================================================

    const distance =
        calculateDistance(

            start,

            destination

        );


    // ========================================================
    // RESULT
    // ========================================================

    showResult(

        key,

        place,

        distance

    );


    // ========================================================
    // LEFT / RIGHT PLACES
    // ========================================================

    showNearbyPlaces(
        key
    );


    // ========================================================
    // ZOOM ROUTE
    // ========================================================

    map.fitBounds(

        routeLine.getBounds(),

        {

            padding:
                [80, 80]

        }

    );

}


// ============================================================
// 18. HAVERSINE DISTANCE
// ============================================================

function calculateDistance(
    start,
    end
) {

    const R =
        6371000;


    const lat1 =
        start.lat *
        Math.PI / 180;


    const lat2 =
        end.lat *
        Math.PI / 180;


    const deltaLat =
        (
            end.lat -
            start.lat
        ) *
        Math.PI / 180;


    const deltaLng =
        (
            end.lng -
            start.lng
        ) *
        Math.PI / 180;


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
// 19. FORMAT DISTANCE
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
// 20. SHOW RESULT
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

        <h2>
            Destination Found
        </h2>

        <div class="destination-name">

            ${formatName(key)}

        </div>

        <div class="distance">

            Distance from Main Gate:

            <strong>

                ${formatDistance(
                    distance
                )}

            </strong>

        </div>

        <div class="description">

            <b>
                Description:
            </b>

            <br>

            ${place.description}

        </div>

        <div style="
            margin-top:15px;
            padding:12px;
            background:#f4f7fb;
            border-radius:7px;
        ">

            <b>
                Route:
            </b>

            Main Gate
            →
            ${formatName(key)}

        </div>

    `;

}


// ============================================================
// 21. NEARBY LEFT / RIGHT
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


            // Longitude determines
            // approximate left/right position

            const side =

                place.lng <
                selected.lng

                    ? "left"

                    : "right";


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


    // Sort nearest
    nearby.sort(

        (a, b) =>

            a.distance -
            b.distance

    );


    // Left
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


    // Right
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


    if (
        leftContainer
    ) {

        leftContainer.innerHTML =
            createPlaceList(
                leftPlaces
            );

    }


    if (
        rightContainer
    ) {

        rightContainer.innerHTML =
            createPlaceList(
                rightPlaces
            );

    }

}


// ============================================================
// 22. CREATE NEARBY LIST
// ============================================================

function createPlaceList(
    list
) {

    if (
        list.length === 0
    ) {

        return `

            <p>
                No nearby places found.
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

                        style="
                            cursor:pointer;
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
// 23. SEARCH SUGGESTIONS
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
// 24. ESCAPE HTML
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
// 25. SHOW WHOLE CAMPUS
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
// 26. CURRENT LOCATION
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


                L.marker(
                    userLocation
                )
                .addTo(map)

                .bindPopup(
                    "<b>Your Current Location</b>"
                )

                .openPopup();


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


                alert(
                    "Unable to get your current location."
                );

            }

        );

}


// ============================================================
// 27. MAP RESIZE
// ============================================================

setTimeout(

    function() {

        map.invalidateSize();

    },

    500

);


// ============================================================
// 28. INITIAL CAMPUS VIEW
// ============================================================

showWholeCampus();
