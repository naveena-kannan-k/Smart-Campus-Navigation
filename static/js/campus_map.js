// ============================================================
// SMART CAMPUS NAVIGATION
// SARAH TUCKER COLLEGE
// HAND-MARKED CAMPUS LAYOUT
// REAL OPENSTREETMAP BASE
// NO CAMPUS IMAGE
// ============================================================


// ============================================================
// 1. CREATE MAP
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
        maxZoom: 21,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 3. SARAH TUCKER COLLEGE CENTER
// ============================================================

const campusCenter = [8.69860, 77.74165];

map.setView(campusCenter, 18);


// ============================================================
// 4. LOCAL CAMPUS COORDINATE SYSTEM
//
// x = east / west
// y = north / south
//
// This lets the hand-marked layout stay consistent.
// ============================================================

function campusPoint(x, y) {

    const latitude =
        campusCenter[0] + (y / 111000);

    const longitude =
        campusCenter[1] +
        (x / (111000 * Math.cos(
            campusCenter[0] * Math.PI / 180
        )));

    return [latitude, longitude];

}


// ============================================================
// 5. CAMPUS LOCATIONS
//
// Positions follow the user's marked campus layout.
// ============================================================

const locations = {


    // ========================================================
    // SOUTH / ENTRANCE
    // ========================================================

    "Main Gate": {

        coords: campusPoint(0, -150),

        icon: "🚪",

        type: "Main Entrance"

    },


    "Canara Bank": {

        coords: campusPoint(-105, -105),

        icon: "🏦",

        type: "Canara Bank"

    },


    "Parking Area": {

        coords: campusPoint(105, -105),

        icon: "🅿️",

        type: "Parking Area"

    },


    // ========================================================
    // ROUNDABOUT / CENTER
    // ========================================================

    "Roundabout": {

        coords: campusPoint(0, -55),

        icon: "🔄",

        type: "Campus Roundabout"

    },


    // ========================================================
    // MAIN BLOCK
    // ========================================================

    "Main Block": {

        coords: campusPoint(0, 25),

        icon: "🏫",

        type: "Main Block"

    },


    "Principal Office": {

        coords: campusPoint(-48, -5),

        icon: "🏢",

        type: "Principal Office"

    },


    "Management Office": {

        coords: campusPoint(48, -5),

        icon: "🏢",

        type: "Management Office"

    },


    // ========================================================
    // LEFT SIDE OF MAIN BLOCK
    // ========================================================

    "Physics": {

        coords: campusPoint(-85, 40),

        icon: "🔬",

        type: "Physics Department"

    },


    "Chemistry": {

        coords: campusPoint(-85, 75),

        icon: "🧪",

        type: "Chemistry Department"

    },


    "Physics S/F": {

        coords: campusPoint(-125, 90),

        icon: "🔬",

        type: "Physics S/F"

    },


    "B.Com & Zoology": {

        coords: campusPoint(-65, 110),

        icon: "🏫",

        type: "B.Com & Zoology"

    },


    // ========================================================
    // FAR LEFT
    // ========================================================

    "BCA": {

        coords: campusPoint(-150, 95),

        icon: "💻",

        type: "BCA Department"

    },


    "MCA": {

        coords: campusPoint(-150, 125),

        icon: "💻",

        type: "MCA Department"

    },


    "History": {

        coords: campusPoint(-155, 155),

        icon: "📖",

        type: "History Department"

    },


    "Maths": {

        coords: campusPoint(-115, 150),

        icon: "📐",

        type: "Mathematics Department"

    },


    "Nano Science": {

        coords: campusPoint(-95, 180),

        icon: "🧪",

        type: "Nano Science Department"

    },


    "New Auditorium": {

        coords: campusPoint(-60, 200),

        icon: "🏛️",

        type: "New Auditorium"

    },


    "Partition Hall": {

        coords: campusPoint(-95, 125),

        icon: "🏛️",

        type: "Partition Hall"

    },


    // ========================================================
    // RIGHT SIDE
    // ========================================================

    "Library": {

        coords: campusPoint(105, 45),

        icon: "📚",

        type: "Library"

    },


    "Tamil & English": {

        coords: campusPoint(135, 70),

        icon: "📚",

        type: "Tamil & English Department"

    },


    "Economics": {

        coords: campusPoint(135, 105),

        icon: "📊",

        type: "Economics Department"

    },


    "Old Auditorium": {

        coords: campusPoint(125, 145),

        icon: "🏛️",

        type: "Old Auditorium"

    },


    "Canteen": {

        coords: campusPoint(75, 175),

        icon: "🍴",

        type: "Canteen"

    },


    // ========================================================
    // RIGHT DEPARTMENT BLOCK
    // ========================================================

    "English S/F": {

        coords: campusPoint(155, 205),

        icon: "📚",

        type: "English S/F Department"

    },


    "B.Com S/F": {

        coords: campusPoint(155, 230),

        icon: "💼",

        type: "B.Com S/F Department"

    },


    "Computer Science": {

        coords: campusPoint(155, 255),

        icon: "💻",

        type: "Computer Science Department"

    },


    "Food Science": {

        coords: campusPoint(155, 280),

        icon: "🧪",

        type: "Food Science Department"

    },


    // ========================================================
    // UPPER AREA
    // ========================================================

    "Chapel": {

        coords: campusPoint(-135, 245),

        icon: "⛪",

        type: "Chapel"

    },


    "Hostel": {

        coords: campusPoint(0, 300),

        icon: "🏠",

        type: "Hostel"

    },


    "Playground": {

        coords: campusPoint(0, 230),

        icon: "⚽",

        type: "Playground"

    }

};


// ============================================================
// 6. MARKER STORAGE
// ============================================================

const markers = {};


// ============================================================
// 7. USER LOCATION
// ============================================================

let userLocation = null;

let userMarker = null;

let accuracyCircle = null;


// ============================================================
// 8. ROUTE
// ============================================================

let routeControl = null;


// ============================================================
// 9. SELECTED DESTINATION
// ============================================================

let selectedDestination = null;


// ============================================================
// 10. CREATE CAMPUS ICON
// ============================================================

function createCampusIcon(icon) {

    return L.divIcon({

        className: "custom-campus-marker",

        html: `
            <div class="campus-marker">
                ${icon}
            </div>
        `,

        iconSize: [36, 36],

        iconAnchor: [18, 18]

    });

}


// ============================================================
// 11. ADD MARKERS
// ============================================================

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

            <div style="font-size:28px;">
                ${data.icon}
            </div>

            <strong>
                ${place}
            </strong>

            <br>

            <small>
                ${data.type}
            </small>

            <br><br>

            <button
                class="navigate-btn"
                onclick="selectDestination('${place}')"
            >
                🧭 Navigate
            </button>

        </div>

    `);


    marker.bindTooltip(
        place,
        {
            direction: "top",
            offset: [0, -20],
            className: "campus-label"
        }
    );


    markers[place] = marker;

}


// ============================================================
// 12. SELECT DESTINATION
// ============================================================

function selectDestination(place) {

    if (!locations[place]) {

        console.error(
            "Destination not found:",
            place
        );

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


    // Highlight destination

    const selectedElement =
        markers[place].getElement();

    if (selectedElement) {

        selectedElement.classList.add(
            "selected-marker"
        );

    }


    // Zoom destination

    map.flyTo(
        locations[place].coords,
        19,
        {
            duration: 1
        }
    );


    markers[place].openPopup();


    updateInfo(

        "📍 " + place,

        locations[place].type +
        "<br><br>" +
        (
            userLocation
            ? "🧭 Ready to navigate."
            : "📍 Click My Location first."
        )

    );


    // Automatically route if GPS exists

    if (userLocation) {

        createRoute();

    }

}


// ============================================================
// 13. SEARCH
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


    const aliases = {

        "cs": "Computer Science",

        "computer":
            "Computer Science",

        "computer science department":
            "Computer Science",

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

        "gate":
            "Main Gate",

        "main gate":
            "Main Gate",

        "hostel":
            "Hostel",

        "playground":
            "Playground",

        "physics":
            "Physics",

        "chemistry":
            "Chemistry",

        "maths":
            "Maths",

        "mathematics":
            "Maths",

        "history":
            "History",

        "economics":
            "Economics",

        "tamil":
            "Tamil & English",

        "english":
            "Tamil & English",

        "bca":
            "BCA",

        "mca":
            "MCA",

        "chapel":
            "Chapel",

        "auditorium":
            "New Auditorium",

        "old auditorium":
            "Old Auditorium",

        "food":
            "Food Science",

        "food science":
            "Food Science",

        "zoology":
            "B.Com & Zoology"

    };


    let foundPlace = null;


    // Exact alias

    if (aliases[input]) {

        foundPlace =
            aliases[input];

    }


    // Location search

    if (!foundPlace) {

        for (const place in locations) {

            const name =
                place.toLowerCase();

            if (
                name === input ||
                name.includes(input) ||
                input.includes(name)
            ) {

                foundPlace = place;

                break;

            }

        }

    }


    if (!foundPlace) {

        alert(
            "Location not found.\n\n" +
            "Try Library, Canteen, " +
            "Computer Science, Main Gate, " +
            "Physics, Chemistry, BCA, MCA, etc."
        );

        return;

    }


    selectDestination(foundPlace);

}


// ============================================================
// 14. ENTER KEY
// ============================================================

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


// ============================================================
// 15. INFORMATION PANEL
// ============================================================

function updateInfo(title, text) {

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
// 16. CURRENT LOCATION
// ============================================================

function showMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported."
        );

        return;

    }


    updateInfo(
        "📍 Detecting Location...",
        "Please allow location permission."
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


            console.log(
                "Current GPS:",
                latitude,
                longitude
            );


            // Remove previous marker

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
                        <div class="user-location-dot">
                            <div class="user-location-pulse"></div>
                        </div>
                    `,

                    iconSize: [30, 30],

                    iconAnchor: [15, 15]

                });


            userMarker =
                L.marker(
                    userLocation,
                    {
                        icon: userIcon,
                        zIndexOffset: 2000
                    }
                ).addTo(map);


            userMarker.bindPopup(
                "📍 You are here"
            );


            // Accuracy

            accuracyCircle =
                L.circle(
                    userLocation,
                    {
                        radius: accuracy,

                        color: "#2563eb",

                        fillOpacity: 0.10
                    }
                ).addTo(map);


            // Move to current location

            map.flyTo(
                userLocation,
                19,
                {
                    duration: 1
                }
            );


            updateInfo(

                "📍 Current Location",

                "Location detected successfully." +
                "<br><br>" +
                "Accuracy: " +
                Math.round(accuracy) +
                " meters" +
                "<br><br>" +
                (
                    selectedDestination
                    ? "🧭 Calculating route..."
                    : "🔎 Select a destination."
                )

            );


            // Create route

            if (selectedDestination) {

                createRoute();

            }

        },


        function(error) {

            console.error(
                "GPS Error:",
                error
            );


            let message =
                "Unable to access your location.";


            if (error.code === 1) {

                message =
                    "Location permission denied.";

            }

            else if (error.code === 2) {

                message =
                    "Location unavailable.";

            }

            else if (error.code === 3) {

                message =
                    "Location request timed out.";

            }


            alert(message);


            updateInfo(
                "⚠️ Location Error",
                message
            );

        },


        {

            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0

        }

    );

}


// ============================================================
// 17. CREATE ROUTE
// ============================================================

function createRoute() {

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

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    updateInfo(

        "🧭 Finding Route",

        "From <b>Current Location</b>" +
        "<br>" +
        "To <b>" +
        selectedDestination +
        "</b>" +
        "<br><br>" +
        "Calculating route..."

    );


    // ========================================================
    // LEAFLET ROUTING
    // ========================================================

    routeControl =
        L.Routing.control({

            waypoints: [

                L.latLng(
                    userLocation[0],
                    userLocation[1]
                ),

                L.latLng(
                    destination[0],
                    destination[1]
                )

            ],


            router:
                L.Routing.osrmv1({

                    serviceUrl:
                        "https://router.project-osrm.org/route/v1"

                }),


            lineOptions: {

                styles: [

                    {

                        className:
                            "campus-route-line",

                        weight: 7

                    }

                ]

            },


            addWaypoints: false,

            draggableWaypoints: false,

            routeWhileDragging: false,

            showAlternatives: false,

            fitSelectedRoutes: true,

            collapsible: true,


            createMarker:
                function() {

                    return null;

                }

        }).addTo(map);


    // ========================================================
    // ROUTE FOUND
    // ========================================================

    routeControl.on(
        "routesfound",
        function(event) {

            const route =
                event.routes[0];


            if (!route) {

                return;

            }


            const distance =
                route.summary.totalDistance;


            const time =
                route.summary.totalTime;


            const distanceText =
                distance >= 1000

                ? (
                    distance / 1000
                ).toFixed(2) + " km"

                : Math.round(distance) +
                  " m";


            const minutes =
                Math.max(
                    1,
                    Math.round(
                        time / 60
                    )
                );


            updateInfo(

                "🧭 Route Found",

                "📍 From: <b>Current Location</b>" +
                "<br><br>" +

                "🎯 To: <b>" +
                selectedDestination +
                "</b>" +

                "<br><br>" +

                "📏 Distance: <b>" +
                distanceText +
                "</b>" +

                "<br>" +

                "🚶 Estimated Time: <b>" +
                minutes +
                " min</b>"

            );

        }
    );


    // ========================================================
    // ROUTE ERROR
    // ========================================================

    routeControl.on(
        "routingerror",
        function(error) {

            console.error(
                "Routing error:",
                error
            );


            updateInfo(

                "⚠️ Route Error",

                "Unable to calculate route." +
                "<br><br>" +
                "Please check your internet connection."

            );

        }
    );

}


// ============================================================
// 18. NAVIGATE BUTTON
// ============================================================

function navigateToSelected() {

    if (!selectedDestination) {

        alert(
            "Please select a destination first."
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

    if (routeControl) {

        map.removeControl(
            routeControl
        );

        routeControl = null;

    }


    if (userMarker) {

        map.removeLayer(
            userMarker
        );

        userMarker = null;

    }


    if (accuracyCircle) {

        map.removeLayer(
            accuracyCircle
        );

        accuracyCircle = null;

    }


    userLocation = null;

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


    map.flyTo(
        campusCenter,
        18,
        {
            duration: 1
        }
    );


    updateInfo(

        "📍 Campus Navigation",

        "Search a building or select a campus location."

    );

}


// ============================================================
// 20. ZOOM CONTROL
// ============================================================

L.control.zoom({

    position: "bottomright"

}).addTo(map);


// ============================================================
// 21. READY
// ============================================================

console.log(
    "✅ Sarah Tucker College Smart Campus Map Loaded"
);

console.log(
    "📍 Hand-marked campus locations loaded"
);

console.log(
    "🧭 GPS + Destination + Navigation ready"
);
