// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// FINAL CLEAN LEAFLET VERSION
// ============================================================


// ============================================================
// 1. COLLEGE CENTER
// ============================================================

const COLLEGE_CENTER = [8.6988565, 77.739888];


// ============================================================
// 2. CREATE MAP
// ============================================================

const map = L.map("map", {
    zoomControl: true
});


// ============================================================
// 3. OPEN STREET MAP
// IMPORTANT:
// NO CUSTOM WHITE ROADS ARE DRAWN HERE
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 4. INITIAL VIEW
// ============================================================

map.setView(COLLEGE_CENTER, 18);


// ============================================================
// 5. CAMPUS LOCATIONS
// DO NOT CHANGE COORDINATES
// ============================================================

const places = [

    ["Botony", 8.6984368, 77.7409389],

    ["Physics (regular)", 8.6989193, 77.7407981],

    ["Chemistry", 8.6991182, 77.7410046],

    ["Zoology & B.Com (Aided)", 8.6987364, 77.7413077],

    ["Old Auditorium", 8.6980713, 77.7407428],

    ["Library", 8.6983229, 77.7401688],

    ["Parking Area", 8.6984369, 77.7400521],

    ["Tamil, English (regular), Economics",
        8.6980622, 77.7403781],

    ["Toilet", 8.6977444, 77.741516],

    ["English (SF), B.Com (SF), Computer Science, Food Science",
        8.697592, 77.7420998],

    ["Sports Room", 8.698168, 77.7421669],

    ["Canteen", 8.6980195, 77.7421696],

    ["Play Ground", 8.698729, 77.7418037],

    ["Hostel", 8.6987209, 77.7427011],

    ["New Auditorium", 8.699646, 77.7406171],

    ["History (Tamil & English)", 8.699699, 77.7407055],

    ["Nano Science", 8.6996354, 77.7404803],

    ["Maths", 8.699479, 77.740668],

    ["Physics (SF)", 8.6994551, 77.740947],

    ["BCA", 8.6997309, 77.7409014],

    ["MCA", 8.6997653, 77.7410918],

    ["Main Gate", 8.6988565, 77.739888],

    ["NCC Room", 8.6990958, 77.7422827],

    ["Principal Office", 8.6988395, 77.7408101],

    ["Management Office", 8.6985889, 77.7408047]

];


// ============================================================
// 6. MARKER ICON
// ============================================================

const campusIcon = L.icon({

    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

    iconSize: [25, 41],

    iconAnchor: [12, 41],

    popupAnchor: [1, -34],

    shadowSize: [41, 41]

});


// ============================================================
// 7. ADD CAMPUS MARKERS
// ============================================================

places.forEach(function (place) {

    const marker = L.marker(
        [place[1], place[2]],
        {
            icon: campusIcon
        }
    ).addTo(map);

    marker.bindTooltip(
        place[0],
        {
            direction: "top",
            sticky: true
        }
    );

    marker.bindPopup(
        "<b>📍 " + place[0] + "</b>"
    );

});


// ============================================================
// 8. NAVIGATION VARIABLES
// ============================================================

let routeLayer = null;

let routeArrowLayer = null;

let startMarker = null;

let destinationMarker = null;


// ============================================================
// 9. CLEAR OLD ROUTE
// ============================================================

function clearRoute() {

    if (routeLayer) {

        map.removeLayer(routeLayer);

        routeLayer = null;
    }


    if (routeArrowLayer) {

        map.removeLayer(routeArrowLayer);

        routeArrowLayer = null;
    }


    if (startMarker) {

        map.removeLayer(startMarker);

        startMarker = null;
    }


    if (destinationMarker) {

        map.removeLayer(destinationMarker);

        destinationMarker = null;
    }

}


// ============================================================
// 10. FIND PLACE
// ============================================================

function findPlace(name) {

    if (!name) {
        return null;
    }

    const search = name
        .toLowerCase()
        .trim();


    return places.find(function (place) {

        return place[0]
            .toLowerCase()
            .includes(search);

    }) || null;

}


// ============================================================
// 11. ARROW ICON
// ============================================================

function createNavigationArrow(angle) {

    return L.divIcon({

        className:
            "navigation-arrow-icon",

        html:
            '<div style="' +

            'font-size:24px;' +

            'font-weight:bold;' +

            'color:#1677ff;' +

            'text-shadow:' +
            '0 0 2px #ffffff,' +
            '0 0 4px #ffffff;' +

            'transform:rotate(' +
            angle +
            'deg);' +

            '">' +

            '➤' +

            '</div>',

        iconSize: [28, 28],

        iconAnchor: [14, 14]

    });

}


// ============================================================
// 12. CALCULATE DIRECTION
// ============================================================

function calculateAngle(a, b) {

    const lat1 = a[0];

    const lng1 = a[1];

    const lat2 = b[0];

    const lng2 = b[1];


    const y = lng2 - lng1;

    const x = lat2 - lat1;


    return Math.atan2(y, x)
        * 180 / Math.PI;

}


// ============================================================
// 13. DRAW ARROWS
// ============================================================

function drawRouteArrows(coordinates) {

    routeArrowLayer =
        L.layerGroup().addTo(map);


    // Put arrows at intervals
    // instead of every coordinate.

    for (
        let i = 0;
        i < coordinates.length - 1;
        i += 4
    ) {

        const current =
            coordinates[i];

        const next =
            coordinates[
                Math.min(
                    i + 1,
                    coordinates.length - 1
                )
            ];


        const angle =
            calculateAngle(
                current,
                next
            );


        const arrow =
            L.marker(
                current,
                {
                    icon:
                        createNavigationArrow(
                            angle
                        ),

                    interactive: false,

                    zIndexOffset: 1000
                }
            );


        routeArrowLayer.addLayer(
            arrow
        );

    }

}


// ============================================================
// 14. SHOW ROUTE INFORMATION
// ============================================================

function showRouteInformation(
    fromName,
    toName,
    distance,
    duration
) {

    const info =
        document.getElementById(
            "routeInfo"
        );


    if (!info) {
        return;
    }


    info.style.display =
        "block";


    const distanceKm =
        (
            distance / 1000
        ).toFixed(2);


    const minutes =
        Math.round(
            duration / 60
        );


    info.innerHTML =

        "<b>🔵 Navigation Started</b>" +

        "<br><br>" +

        "🚶 <b>From:</b> " +
        fromName +

        "<br>" +

        "📍 <b>To:</b> " +
        toName +

        "<br><br>" +

        "📏 Distance: " +
        distanceKm +
        " km" +

        "<br>" +

        "⏱️ Walking time: " +
        minutes +
        " min";

}


// ============================================================
// 15. GET REAL ROAD ROUTE
// OSRM WALKING ROUTE
// ============================================================

async function getRoadRoute(
    start,
    destination
) {

    const startLng =
        start[1];

    const startLat =
        start[0];


    const endLng =
        destination[1];

    const endLat =
        destination[0];


    const url =

        "https://router.project-osrm.org/route/v1/foot/" +

        startLng +
        "," +
        startLat +

        ";" +

        endLng +
        "," +
        endLat +

        "?overview=full&geometries=geojson";


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Routing server error"
        );

    }


    const data =
        await response.json();


    if (
        data.code !== "Ok" ||
        !data.routes ||
        data.routes.length === 0
    ) {

        throw new Error(
            "Route not found"
        );

    }


    return data.routes[0];

}


// ============================================================
// 16. START NAVIGATION
// ============================================================

async function startNavigation() {

    clearRoute();


    const fromSelect =
        document.getElementById(
            "from"
        );


    const destinationInput =
        document.getElementById(
            "destination"
        );


    const fromValue =
        fromSelect
            ? fromSelect.value
            : "Main Gate";


    const toValue =
        destinationInput
            ? destinationInput.value.trim()
            : "";


    if (!toValue) {

        alert(
            "Please select a destination."
        );

        return;

    }


    const startPlace =
        findPlace(fromValue);


    const destinationPlace =
        findPlace(toValue);


    if (!startPlace) {

        alert(
            "Starting location not found."
        );

        return;

    }


    if (!destinationPlace) {

        alert(
            "Destination not found."
        );

        return;

    }


    const start =
        [
            startPlace[1],
            startPlace[2]
        ];


    const destination =
        [
            destinationPlace[1],
            destinationPlace[2]
        ];


    try {

        // ----------------------------------------------------
        // GET ROAD ROUTE
        // ----------------------------------------------------

        const route =
            await getRoadRoute(
                start,
                destination
            );


        const coordinates =
            route.geometry.coordinates.map(
                function (point) {

                    return [
                        point[1],
                        point[0]
                    ];

                }
            );


        // ----------------------------------------------------
        // WHITE OUTLINE
        // Only navigation route gets outline.
        // No permanent white campus roads.
        // ----------------------------------------------------

        const routeOutline =
            L.polyline(
                coordinates,
                {
                    color: "#ffffff",

                    weight: 11,

                    opacity: 0.95,

                    lineCap: "round",

                    lineJoin: "round",

                    interactive: false
                }
            ).addTo(map);


        // ----------------------------------------------------
        // BLUE NAVIGATION ROUTE
        // ----------------------------------------------------

        routeLayer =
            L.polyline(
                coordinates,
                {
                    color: "#1677ff",

                    weight: 6,

                    opacity: 1,

                    lineCap: "round",

                    lineJoin: "round",

                    interactive: false
                }
            ).addTo(map);


        // Store both layers together
        routeLayer._outline =
            routeOutline;


        // ----------------------------------------------------
        // START MARKER
        // ----------------------------------------------------

        startMarker =
            L.circleMarker(
                start,
                {
                    radius: 8,

                    color: "#ffffff",

                    weight: 3,

                    fillColor: "#1677ff",

                    fillOpacity: 1
                }
            ).addTo(map);


        startMarker.bindPopup(
            "<b>🚶 Start</b><br>" +
            startPlace[0]
        );


        // ----------------------------------------------------
        // DESTINATION MARKER
        // ----------------------------------------------------

        destinationMarker =
            L.marker(
                destination,
                {
                    icon: campusIcon,

                    zIndexOffset: 2000
                }
            ).addTo(map);


        destinationMarker.bindPopup(
            "<b>📍 Destination</b><br>" +
            destinationPlace[0]
        );


        destinationMarker.openPopup();


        // ----------------------------------------------------
        // ARROWS
        // ----------------------------------------------------

        drawRouteArrows(
            coordinates
        );


        // ----------------------------------------------------
        // FIT ROUTE
        // ----------------------------------------------------

        map.fitBounds(
            routeLayer.getBounds(),
            {
                padding: [
                    60,
                    60
                ]
            }
        );


        // ----------------------------------------------------
        // INFORMATION
        // ----------------------------------------------------

        showRouteInformation(

            startPlace[0],

            destinationPlace[0],

            route.distance,

            route.duration

        );


    }
    catch (error) {

        console.error(
            "Navigation error:",
            error
        );


        alert(
            "Road route could not be found. " +
            "Please try another destination."
        );

    }

}


// ============================================================
// 17. NAVIGATE BUTTON
// ============================================================

const navigateBtn =
    document.getElementById(
        "navigateBtn"
    );


if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function () {

            startNavigation();

        }
    );

}


// ============================================================
// 18. SEARCH RESULTS
// ============================================================

const destinationInput =
    document.getElementById(
        "destination"
    );


const resultsBox =
    document.getElementById(
        "results"
    );


if (
    destinationInput &&
    resultsBox
) {

    destinationInput.addEventListener(
        "input",
        function () {

            const text =
                destinationInput.value
                    .toLowerCase()
                    .trim();


            resultsBox.innerHTML =
                "";


            if (!text) {

                return;

            }


            places.forEach(
                function (place) {

                    const name =
                        place[0]
                            .toLowerCase();


                    if (
                        name.includes(text)
                    ) {

                        const result =
                            document.createElement(
                                "div"
                            );


                        result.className =
                            "result";


                        result.textContent =
                            "📍 " +
                            place[0];


                        result.addEventListener(
                            "click",
                            function () {

                                destinationInput.value =
                                    place[0];


                                resultsBox.innerHTML =
                                    "";

                            }
                        );


                        resultsBox.appendChild(
                            result
                        );

                    }

                }
            );

        }
    );

}


// ============================================================
// 19. ENTER KEY NAVIGATION
// ============================================================

if (destinationInput) {

    destinationInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                startNavigation();

            }

        }
    );

}


// ============================================================
// 20. GO TO COLLEGE
// ============================================================

function goToCollege() {

    clearRoute();


    map.setView(
        COLLEGE_CENTER,
        18
    );

}


// ============================================================
// 21. MAP SIZE FIX
// ============================================================

setTimeout(
    function () {

        map.invalidateSize();

    },
    800
);
