// ============================================================
// ST. XAVIER'S COLLEGE - REAL MAP NAVIGATION
// ============================================================


// ============================================================
// 1. COLLEGE LOCATION
// ============================================================

// St. Xavier's College, Palayamkottai
const COLLEGE_CENTER = [
    8.7180194,
    77.7387694
];


// ============================================================
// 2. CREATE REAL MAP
// ============================================================

const map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true
}).setView(
    COLLEGE_CENTER,
    18
);


// ============================================================
// 3. NORMAL STREET MAP
// ============================================================

const streetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution:
            '&copy; OpenStreetMap contributors'
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
// 5. LABELLED SATELLITE MAP
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


// Add labels above satellite
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
// 8. CAMPUS PLACES
// ============================================================
//
// IMPORTANT:
// Coordinates below are geographic coordinates.
// They are not image x/y coordinates anymore.
//
// The college center is based on the verified
// St. Xavier's College, Palayamkottai location.
//
// Individual building coordinates are kept as
// campus-position estimates and should be fine-tuned
// against the satellite image for exact building-level
// accuracy.
// ============================================================

const places = {

    "main gate": {

        lat: 8.71695,
        lng: 77.73825,

        description:
            "Main entrance of St. Xavier's College, Palayamkottai. " +
            "This is the starting point for campus navigation."

    },


    "main block": {

        lat: 8.71805,
        lng: 77.73872,

        description:
            "Main Block containing administration offices " +
            "and major academic facilities."

    },


    "mca": {

        lat: 8.71825,
        lng: 77.73765,

        description:
            "MCA department and computer-related academic facilities."

    },


    "mca block": {

        lat: 8.71835,
        lng: 77.73930,

        description:
            "MCA Block with classrooms and department facilities."

    },


    "library": {

        lat: 8.71755,
        lng: 77.73935,

        description:
            "Fr. Santiago Library. The college library supports " +
            "academic and research activities with books, " +
            "e-resources and other learning materials."

    },


    "hostel": {

        lat: 8.71910,
        lng: 77.73865,

        description:
            "Student hostel area."

    },


    "canteen": {

        lat: 8.71880,
        lng: 77.73955,

        description:
            "Campus canteen serving food and refreshments."

    },


    "playground": {

        lat: 8.71900,
        lng: 77.73820,

        description:
            "Campus playground and outdoor sports area."

    },


    "botany": {

        lat: 8.71830,
        lng: 77.73900,

        description:
            "Botany department."

    },


    "economics": {

        lat: 8.71765,
        lng: 77.73975,

        description:
            "Economics department."

    },


    "tamil": {

        lat: 8.71750,
        lng: 77.73980,

        description:
            "Tamil department."

    },


    "english": {

        lat: 8.71890,
        lng: 77.73945,

        description:
            "English department."

    },


    "bcom": {

        lat: 8.71860,
        lng: 77.73875,

        description:
            "B.Com academic facilities."

    },


    "zoology": {

        lat: 8.71865,
        lng: 77.73830,

        description:
            "Zoology department."

    },


    "chemistry": {

        lat: 8.71835,
        lng: 77.73790,

        description:
            "Chemistry laboratory and academic area."

    },


    "physics": {

        lat: 8.71845,
        lng: 77.73770,

        description:
            "Physics department and laboratory area."

    },


    "maths": {

        lat: 8.71815,
        lng: 77.73755,

        description:
            "Mathematics department."

    },


    "new auditorium": {

        lat: 8.71775,
        lng: 77.73730,

        description:
            "New Auditorium used for academic programmes " +
            "and college events."

    },


    "old auditorium": {

        lat: 8.71795,
        lng: 77.73945,

        description:
            "Old Auditorium used for college functions " +
            "and programmes."

    },


    "chapel": {

        lat: 8.71915,
        lng: 77.73780,

        description:
            "Campus chapel."

    },


    "nano science": {

        lat: 8.71755,
        lng: 77.73720,

        description:
            "Nano Science academic facility."

    },


    "history": {

        lat: 8.71800,
        lng: 77.73725,

        description:
            "History department."

    },


    "canara bank": {

        lat: 8.71690,
        lng: 77.73790,

        description:
            "Canara Bank facility near the main gate."

    },


    "parking shed": {

        lat: 8.71700,
        lng: 77.73955,

        description:
            "Parking shed available near the campus entrance area."

    },


    "computer science": {

        lat: 8.71890,
        lng: 77.73930,

        description:
            "Computer Science academic facility."

    },


    "loyola hall": {

        lat: 8.71780,
        lng: 77.73800,

        description:
            "Loyola Hall used for college events and programmes."

    },


    "mca seminar hall": {

        lat: 8.71810,
        lng: 77.73780,

        description:
            "MCA Seminar Hall used for seminars, presentations " +
            "and academic activities."

    },


    "conference hall": {

        lat: 8.71820,
        lng: 77.73890,

        description:
            "Conference Hall for meetings and academic events."

    }

};


// ============================================================
// 9. VARIABLES
// ============================================================

let currentMarker = null;

let routeLine = null;

let routeStartMarker = null;

let mainGateMarker = null;

let allMarkers = [];


// ============================================================
// 10. CUSTOM MAIN GATE ICON
// ============================================================

const gateIcon = L.divIcon({

    className: "custom-gate-marker",

    html: `
        <div style="
            background:#16a34a;
            width:34px;
            height:34px;
            border-radius:50%;
            border:4px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,.5);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:18px;
        ">
            🚪
        </div>
    `,

    iconSize: [34, 34],

    iconAnchor: [17, 17]

});


// ============================================================
// 11. DESTINATION ICON
// ============================================================

const destinationIcon = L.divIcon({

    className: "destination-marker",

    html: `
        <div style="
            background:#e53935;
            width:38px;
            height:38px;
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            border:3px solid white;
            box-shadow:0 3px 10px rgba(0,0,0,.5);
        ">
            <div style="
                width:12px;
                height:12px;
                background:white;
                border-radius:50%;
                margin:10px;
            "></div>
        </div>
    `,

    iconSize: [38, 38],

    iconAnchor: [19, 38]

});


// ============================================================
// 12. NORMAL PLACE ICON
// ============================================================

const placeIcon = L.divIcon({

    className: "campus-marker",

    html: `
        <div style="
            background:#1976d2;
            width:28px;
            height:28px;
            border-radius:50%;
            border:3px solid white;
            box-shadow:0 2px 7px rgba(0,0,0,.5);
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-weight:bold;
            font-size:13px;
        ">
            ●
        </div>
    `,

    iconSize: [28, 28],

    iconAnchor: [14, 14]

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
// 14. CREATE ALL CAMPUS MARKERS
// ============================================================

function createMarkers() {

    Object.keys(places).forEach(key => {

        if (key === "main gate") {

            return;

        }


        const place = places[key];


        const marker = L.marker(
            [place.lat, place.lng],
            {
                icon: placeIcon
            }
        )
        .addTo(map);


        marker.bindTooltip(
            formatName(key),
            {
                direction: "top",
                offset: [0, -12]
            }
        );


        marker.bindPopup(`
            
            <div style="
                min-width:220px;
                font-family:Arial;
            ">

                <h3 style="
                    margin:0 0 8px 0;
                    color:#17365d;
                ">
                    ${formatName(key)}
                </h3>

                <p style="
                    margin:0;
                    line-height:1.5;
                ">
                    ${place.description}
                </p>

                <button
                    onclick="selectPlace('${key}')"
                    style="
                        margin-top:10px;
                        padding:8px 14px;
                        background:#17365d;
                        color:white;
                        border:none;
                        border-radius:5px;
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

    const gate = places["main gate"];


    mainGateMarker = L.marker(
        [gate.lat, gate.lng],
        {
            icon: gateIcon,
            zIndexOffset: 1000
        }
    )
    .addTo(map);


    mainGateMarker.bindPopup(`
        
        <div style="
            font-family:Arial;
            min-width:200px;
        ">

            <h3 style="
                margin:0 0 8px;
                color:#16803c;
            ">
                Main Gate
            </h3>

            <p>
                Starting point for campus navigation.
            </p>

        </div>

    `);

}


// ============================================================
// 15. LOAD MARKERS
// ============================================================

createMarkers();


// ============================================================
// 16. FIND PLACE
// ============================================================

function findPlace() {

    const inputElement =
        document.getElementById("placeInput");


    if (!inputElement) {

        console.error(
            "placeInput not found in HTML"
        );

        return;

    }


    const input =
        inputElement.value
            .trim()
            .toLowerCase();


    if (!input) {

        alert(
            "Please enter a campus place."
        );

        inputElement.focus();

        return;

    }


    let selectedKey = null;


    // ========================================================
    // EXACT SEARCH
    // ========================================================

    if (places[input]) {

        selectedKey = input;

    }


    // ========================================================
    // PARTIAL SEARCH
    // ========================================================

    else {

        const keys =
            Object.keys(places);


        for (const key of keys) {

            if (
                key.includes(input) ||
                input.includes(key)
            ) {

                selectedKey = key;

                break;

            }

        }

    }


    // ========================================================
    // NOT FOUND
    // ========================================================

    if (!selectedKey) {

        const result =
            document.getElementById(
                "result"
            );


        if (result) {

            result.innerHTML = `

                <h2>Location Not Found</h2>

                <p>
                    We could not find
                    <b>${escapeHtml(input)}</b>.
                </p>

                <p style="margin-top:10px;">
                    Try:
                    MCA, Library, Main Block,
                    Hostel, Canteen, Playground,
                    Physics, Maths, Botany,
                    Economics or Computer Science.
                </p>

            `;

        }

        return;

    }


    selectPlace(selectedKey);

}


// ============================================================
// 17. SELECT DESTINATION
// ============================================================

function selectPlace(key) {

    if (!places[key]) {

        return;

    }


    const place =
        places[key];


    // ========================================================
    // REMOVE OLD ROUTE
    // ========================================================

    if (routeLine) {

        map.removeLayer(routeLine);

        routeLine = null;

    }


    // ========================================================
    // REMOVE OLD DESTINATION MARKER
    // ========================================================

    if (currentMarker) {

        map.removeLayer(currentMarker);

        currentMarker = null;

    }


    // ========================================================
    // MAIN GATE
    // ========================================================

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
    // STRAIGHT ROUTE
    // ========================================================

    routeLine = L.polyline(
        [
            start,
            destination
        ],
        {
            color: "#e53935",
            weight: 6,
            opacity: 0.9,
            dashArray: "12,8",
            lineCap: "round"
        }
    ).addTo(map);


    // ========================================================
    // DESTINATION MARKER
    // ========================================================

    currentMarker =
        L.marker(
            [place.lat, place.lng],
            {
                icon: destinationIcon,
                zIndexOffset: 2000
            }
        )
        .addTo(map);


    currentMarker.bindPopup(`

        <div style="
            min-width:230px;
            font-family:Arial;
        ">

            <h3 style="
                margin:0 0 8px;
                color:#e53935;
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

    `).openPopup();


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
    // LEFT / RIGHT NEARBY PLACES
    // ========================================================

    showNearbyPlaces(key);


    // ========================================================
    // FIT ROUTE
    // ========================================================

    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [80, 80]
        }
    );

}


// ============================================================
// 18. DISTANCE USING HAVERSINE FORMULA
// ============================================================

function calculateDistance(
    start,
    end
) {

    const R = 6371000;


    const lat1 =
        start.lat *
        Math.PI / 180;


    const lat2 =
        end.lat *
        Math.PI / 180;


    const deltaLat =
        (end.lat - start.lat) *
        Math.PI / 180;


    const deltaLng =
        (end.lng - start.lng) *
        Math.PI / 180;


    const a =
        Math.sin(deltaLat / 2) *
        Math.sin(deltaLat / 2) +

        Math.cos(lat1) *
        Math.cos(lat2) *

        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
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

    if (meters < 1000) {

        return meters + " m";

    }


    return (
        (meters / 1000)
            .toFixed(2)
        + " km"
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

        <h2>Destination Found</h2>

        <div class="destination-name">

            ${formatName(key)}

        </div>

        <div class="distance">

            Distance from Main Gate:
            <strong>
                ${formatDistance(distance)}
            </strong>

        </div>

        <div class="description">

            <b>Description:</b>

            <br>

            ${place.description}

        </div>

        <div style="
            margin-top:15px;
            padding:10px;
            background:#f4f7fb;
            border-radius:6px;
        ">

            <b>Route:</b>

            Main Gate
            →
            ${formatName(key)}

        </div>

    `;

}


// ============================================================
// 21. LEFT / RIGHT NEARBY PLACES
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


            const selectedLat =
                selected.lat *
                Math.PI / 180;


            const lngDifference =
                place.lng -
                selected.lng;


            // Determine approximate left/right
            const side =
                lngDifference < 0
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

                key: key,

                distance: distance,

                side: side

            });

        }
    );


    // ========================================================
    // SORT BY DISTANCE
    // ========================================================

    nearby.sort(
        (a, b) =>
            a.distance -
            b.distance
    );


    // ========================================================
    // LEFT
    // ========================================================

    const leftPlaces =
        nearby
            .filter(
                item =>
                    item.side === "left"
            )
            .slice(0, 5);


    // ========================================================
    // RIGHT
    // ========================================================

    const rightPlaces =
        nearby
            .filter(
                item =>
                    item.side === "right"
            )
            .slice(0, 5);


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
// 22. CREATE NEARBY PLACE LIST
// ============================================================

function createPlaceList(
    list
) {

    if (!list.length) {

        return `
            <p>
                No nearby places found.
            </p>
        `;

    }


    return list.map(
        item => {

            return `

                <div
                    class="place-item"
                    onclick="selectPlace('${item.key}')"
                    style="
                        cursor:pointer;
                    "
                >

                    <div class="place-name">

                        ${formatName(
                            item.key
                        )}

                    </div>

                    <div class="place-distance">

                        ${formatDistance(
                            item.distance
                        )}

                    </div>

                </div>

            `;

        }
    ).join("");

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
                            key.includes(value)
                    )
                    .slice(0, 8);


            matches.forEach(
                key => {

                    const div =
                        document.createElement(
                            "div"
                        );


                    div.className =
                        "suggestion-item";


                    div.textContent =
                        formatName(key);


                    div.onclick =
                        function() {

                            input.value =
                                formatName(key);


                            suggestionBox
                                .innerHTML =
                                "";


                            selectPlace(key);

                        };


                    suggestionBox.appendChild(
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
                event.key === "Enter"
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
// 25. SHOW WHOLE COLLEGE
// ============================================================

function showWholeCampus() {

    const points =
        Object.keys(places)
            .map(
                key =>
                    [
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
            padding: [50, 50]
        }
    );

}


// ============================================================
// 26. LOCATE USER
// ============================================================

function locateUser() {

    if (!navigator.geolocation) {

        alert(
            "Location is not supported by this browser."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

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
// 27. MAP READY
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
