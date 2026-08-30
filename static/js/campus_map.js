// ============================================================
// SARAH TUCKER COLLEGE
// SMART CAMPUS NAVIGATION
// CLEAN FINAL VERSION
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
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 4. INITIAL LOCATION
// ============================================================

map.setView(COLLEGE_CENTER, 18);


// ============================================================
// 5. CAMPUS LOCATIONS
// DO NOT CHANGE
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
// 6. ADD LOCATION MARKERS
// ============================================================

places.forEach(function(place) {

    const marker = L.marker([
        place[1],
        place[2]
    ]).addTo(map);

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
// 7. NAVIGATION VARIABLES
// ============================================================

let navigationLayers = [];


// ============================================================
// 8. CLEAR NAVIGATION
// ============================================================

function clearNavigation() {

    navigationLayers.forEach(function(layer) {

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
        }

    });

    navigationLayers = [];

}


// ============================================================
// 9. FIND PLACE
// ============================================================

function findPlace(searchText) {

    if (!searchText) {
        return null;
    }

    const text =
        searchText.toLowerCase().trim();


    // COMPUTER SCIENCE SHORT NAME
    if (
        text === "cs" ||
        text === "computer science"
    ) {

        return places.find(function(place) {

            return place[0]
                .toLowerCase()
                .includes("computer science");

        });

    }


    // NORMAL SEARCH
    return places.find(function(place) {

        return place[0]
            .toLowerCase()
            .includes(text);

    });

}


// ============================================================
// COMPUTER SCIENCE ROUTE
// MAIN GATE → ROUNDABOUT → LEFT → CANTEEN → DOWN → CS
// ============================================================

const computerScienceRoute = [

    // ========================================================
    // 1. MAIN GATE
    // ========================================================

    [8.6988565, 77.739888],

    // Main Gate → inside campus road
    [8.6988200, 77.739980],
    [8.6987550, 77.740065],
    [8.6986900, 77.740125],


    // ========================================================
    // 2. ENTER ROUNDABOUT
    // ========================================================

    [8.6986250, 77.740165],

    // Roundabout - upper side
    [8.6985550, 77.740145],
    [8.6984850, 77.740175],

    // Roundabout - left/bottom side
    [8.6984300, 77.740235],
    [8.6984150, 77.740310],

    // Roundabout - bottom
    [8.6984350, 77.740385],
    [8.6984850, 77.740440],

    // Roundabout - right/bottom
    [8.6985550, 77.740455],
    [8.6986200, 77.740420],


    // ========================================================
    // 3. EXIT ROUNDABOUT
    // GO INSIDE CAMPUS — NOT OUTSIDE
    // ========================================================

    [8.6986900, 77.740480],
    [8.6987600, 77.740555],


    // ========================================================
    // 4. STRAIGHT ROAD
    // TOWARDS CANTEEN SIDE
    // ========================================================

    [8.6988200, 77.740700],
    [8.6988500, 77.740850],

    [8.6988200, 77.741000],
    [8.6987600, 77.741150],


    // ========================================================
    // 5. LEFT TURN
    // ========================================================

    [8.6986500, 77.741220],
    [8.6985200, 77.741250],


    // ========================================================
    // 6. STRAIGHT TOWARDS CANTEEN
    // ========================================================

    [8.6984300, 77.741330],
    [8.6983500, 77.741500],
    [8.6982700, 77.741680],
    [8.6981800, 77.741850],


    // ========================================================
    // 7. CANTEEN SIDE
    // ========================================================

    [8.6980900, 77.741950],
    [8.6979800, 77.741970],


    // ========================================================
    // 8. GO DOWN
    // ========================================================

    [8.6979300, 77.741850],
    [8.6979000, 77.741700],

    [8.6978900, 77.741630],


    // ========================================================
    // 9. CONTINUE DOWN
    // ========================================================

    [8.6978900, 77.741800],
    [8.6978900, 77.741980],

    [8.6978800, 77.742110],


    // ========================================================
    // 10. COMPUTER SCIENCE ROAD
    // ========================================================

    [8.6977800, 77.742120],
    [8.6976800, 77.742110],


    // ========================================================
    // 11. COMPUTER SCIENCE DESTINATION
    // ========================================================

    [8.6975920, 77.7420998]

];
// ============================================================
// 11. LIBRARY ROUTE
// ============================================================

const libraryRoute = [

    // MAIN GATE
    [8.6988565, 77.739888],

    // ENTER CAMPUS
    [8.6988500, 77.739950],

    [8.6988450, 77.740020],

    [8.6988200, 77.740090],


    // ROUND ROAD
    [8.6987600, 77.740130],

    [8.6986800, 77.740145],

    [8.6986000, 77.740120],

    [8.6985400, 77.740060],

    [8.6985150, 77.739990],

    [8.6985200, 77.739920],

    [8.6985600, 77.739870],

    [8.6986200, 77.739850],

    [8.6986900, 77.739875],

    [8.6987500, 77.739925],


    // EXIT ROUND
    [8.6988000, 77.740000],

    [8.6988300, 77.740080],

    [8.6988500, 77.740180],


    // MAIN ROAD
    [8.6989000, 77.740280],

    [8.6989800, 77.740380],

    [8.6990176, 77.7403795],


    // MANAGEMENT OFFICE SIDE
    [8.6990176, 77.7405807],

    [8.6989500, 77.7406500],

    [8.6988500, 77.7407000],

    [8.6987500, 77.7407500],

    [8.6986500, 77.7408000],


    // LEFT TOWARDS LIBRARY
    [8.6985667, 77.7400830],

    [8.6985004, 77.7401957],

    [8.6983573, 77.7401796],

    [8.6983229, 77.7401688]

];


// ============================================================
// 12. DRAW NAVIGATION
// ============================================================

function drawNavigation(
    route,
    destinationName
) {

    clearNavigation();


    // ========================================================
    // WHITE OUTLINE
    // ========================================================

    const whiteLine =
        L.polyline(
            route,
            {
                color: "#ffffff",
                weight: 12,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                interactive: false
            }
        ).addTo(map);


    navigationLayers.push(
        whiteLine
    );


    // ========================================================
    // BLUE ROUTE
    // ========================================================

    const blueLine =
        L.polyline(
            route,
            {
                color: "#1677ff",
                weight: 6,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                interactive: false
            }
        ).addTo(map);


    navigationLayers.push(
        blueLine
    );


    // ========================================================
    // START
    // ========================================================

    const start =
        L.circleMarker(
            route[0],
            {
                radius: 8,
                color: "#ffffff",
                weight: 3,
                fillColor: "#1677ff",
                fillOpacity: 1
            }
        ).addTo(map);


    start.bindPopup(
        "<b>🚪 Main Gate</b>"
    );


    navigationLayers.push(
        start
    );


    // ========================================================
    // DESTINATION
    // ========================================================

    const destination =
        findPlace(destinationName);


    if (destination) {

        const end =
            L.marker(
                [
                    destination[1],
                    destination[2]
                ]
            ).addTo(map);


        end.bindPopup(
            "<b>📍 " +
            destination[0] +
            "</b>"
        );


        end.openPopup();


        navigationLayers.push(
            end
        );

    }


    // ========================================================
    // ARROWS
    // ========================================================

    for (
        let i = 2;
        i < route.length;
        i += 3
    ) {

        const current =
            route[i];

        const next =
            route[
                Math.min(
                    i + 1,
                    route.length - 1
                )
            ];


        const angle =
            Math.atan2(
                next[1] - current[1],
                next[0] - current[0]
            ) * 180 / Math.PI;


        const arrow =
            L.marker(
                current,
                {
                    icon:
                        L.divIcon({

                            className:
                                "campus-route-arrow",

                            html:
                                '<div style="' +
                                'font-size:24px;' +
                                'font-weight:bold;' +
                                'color:#1677ff;' +
                                'text-shadow:0 0 3px white;' +
                                'transform:rotate(' +
                                angle +
                                'deg);">' +
                                '➤' +
                                '</div>',

                            iconSize:
                                [28, 28],

                            iconAnchor:
                                [14, 14]

                        }),

                    interactive: false,

                    zIndexOffset: 1000
                }
            ).addTo(map);


        navigationLayers.push(
            arrow
        );

    }


    // ========================================================
    // FIT ROUTE
    // ========================================================

    map.fitBounds(
        blueLine.getBounds(),
        {
            padding: [
                50,
                50
            ]
        }
    );


    // ========================================================
    // ROUTE INFORMATION
    // ========================================================

    const info =
        document.getElementById(
            "routeInfo"
        );


    if (info) {

        info.style.display =
            "block";


        info.innerHTML =

            "<b>🔵 Navigation Started</b>" +

            "<br><br>" +

            "🚪 Main Gate" +

            "<br>↓" +

            "🔄 Follow round road" +

            "<br>↓" +

            "➡️ Continue inside campus" +

            "<br>↓" +

            "↩️ Take left turn" +

            "<br>↓" +

            "➡️ Go straight" +

            "<br>↓" +

            "🍽️ Canteen side" +

            "<br>↓" +

            "⬇️ Go down" +

            "<br>↓" +

            "📍 <b>" +

            destinationName +

            "</b>";

    }

}


// ============================================================
// 13. FROM / TO
// ============================================================

const fromInput =
    document.getElementById(
        "from"
    );


const destinationInput =
    document.getElementById(
        "destination"
    );


const navigateBtn =
    document.getElementById(
        "navigateBtn"
    );


// ============================================================
// 14. NAVIGATE
// ============================================================

if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function () {

            const fromText =
                fromInput
                    ? fromInput.value.trim()
                    : "Main Gate";


            const toText =
                destinationInput
                    ? destinationInput.value.trim()
                    : "";


            if (!toText) {

                alert(
                    "Please select a destination."
                );

                return;

            }


            const destination =
                findPlace(toText);


            if (!destination) {

                alert(
                    "Destination not found."
                );

                return;

            }


            const destinationName =
                destination[0];


            // =================================================
            // COMPUTER SCIENCE
            // =================================================

            if (
                destinationName
                    .toLowerCase()
                    .includes(
                        "computer science"
                    )
            ) {

                drawNavigation(
                    computerScienceRoute,
                    destinationName
                );

                return;

            }


            // =================================================
            // LIBRARY
            // =================================================

            if (
                destinationName
                    .toLowerCase()
                    .includes(
                        "library"
                    )
            ) {

                drawNavigation(
                    libraryRoute,
                    destinationName
                );

                return;

            }


            // =================================================
            // OTHER LOCATION
            // =================================================

            clearNavigation();


            map.setView(
                [
                    destination[1],
                    destination[2]
                ],
                19
            );


            destinationMarker =
                L.marker(
                    [
                        destination[1],
                        destination[2]
                    ]
                ).addTo(map);


            destinationMarker
                .bindPopup(
                    "<b>📍 " +
                    destinationName +
                    "</b>"
                )
                .openPopup();


            navigationLayers.push(
                destinationMarker
            );

        }
    );

}


// ============================================================
// 15. SEARCH SUGGESTIONS
// ============================================================

if (
    destinationInput
) {

    const resultsBox =
        document.getElementById(
            "results"
        );


    if (resultsBox) {

        destinationInput
            .addEventListener(
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
                        function(place) {

                            const name =
                                place[0]
                                    .toLowerCase();


                            if (
                                name.includes(
                                    text
                                ) ||
                                (
                                    text === "cs" &&
                                    name.includes(
                                        "computer science"
                                    )
                                )
                            ) {

                                const item =
                                    document.createElement(
                                        "div"
                                    );


                                item.className =
                                    "result";


                                item.textContent =
                                    "📍 " +
                                    place[0];


                                item.addEventListener(
                                    "click",
                                    function() {

                                        destinationInput.value =
                                            place[0];


                                        resultsBox.innerHTML =
                                            "";

                                    }
                                );


                                resultsBox.appendChild(
                                    item
                                );

                            }

                        }
                    );

                }
            );

    }

}


// ============================================================
// 16. GO TO COLLEGE
// ============================================================

function goToCollege() {

    clearNavigation();


    map.setView(
        COLLEGE_CENTER,
        18
    );

}


// ============================================================
// 17. MAP SIZE FIX
// ============================================================

setTimeout(
    function() {

        map.invalidateSize();

    },
    800
);
