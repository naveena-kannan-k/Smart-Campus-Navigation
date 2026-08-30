(() => {

    // ============================================================
    // SARAH TUCKER COLLEGE
    // SMART CAMPUS NAVIGATION
    // PROFESSIONAL CAMPUS ROAD VERSION
    // ============================================================

    "use strict";


    // ============================================================
    // 1. CAMPUS CENTER
    // ============================================================

    const COLLEGE_CENTER = [8.6988565, 77.739888];


    // ============================================================
    // 2. CREATE MAP
    // ============================================================

    const mapElement = document.getElementById("map");

    if (!mapElement) {
        console.error("Map element #map not found.");
        return;
    }


    const map = L.map("map", {
        zoomControl: true,
        preferCanvas: true
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
    // 4. INITIAL VIEW
    // ============================================================

    map.setView(
        COLLEGE_CENTER,
        18
    );


    // ============================================================
    // 5. EXISTING LOCATIONS
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
            8.6980622,
            77.7403781
        ],

        ["Toilet", 8.6977444, 77.741516],

        [
            "English (SF), B.Com (SF), Computer Science, Food Science",
            8.697592,
            77.7420998
        ],

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
    // 6. LOCATION MARKERS
    // ============================================================

    places.forEach((place) => {

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
    // 7. ROAD LAYER
    // ============================================================

    const campusRoadLayer = L.layerGroup().addTo(map);


    // ============================================================
    // 8. PROFESSIONAL ROAD FUNCTION
    //
    // Grey outer edge
    // White inner road
    // Round corners
    // Round ends
    // ============================================================

    function drawRoad(points) {

        L.polyline(
            points,
            {
                color: "#c8c8c8",
                weight: 18,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                smoothFactor: 1,
                interactive: false
            }
        ).addTo(campusRoadLayer);


        L.polyline(
            points,
            {
                color: "#ffffff",
                weight: 13,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                smoothFactor: 1,
                interactive: false
            }
        ).addTo(campusRoadLayer);

    }


    // ============================================================
    // 9. MAIN GATE → ROUNDABOUT
    // ============================================================

    drawRoad([

        [8.6988565, 77.739888],

        [8.6988750, 77.739950],

        [8.6989250, 77.740030],

        [8.6989950, 77.740120],

        [8.6990750, 77.740205],

        [8.6991450, 77.740280]

    ]);


    // ============================================================
    // 10. ROUNDABOUT
    // ============================================================

    const roundaboutCenter = [
        8.699245,
        77.740205
    ];


    const roundaboutPoints = [];

    const radiusLat = 0.000205;
    const radiusLng = 0.000235;


    for (
        let i = 0;
        i <= 40;
        i++
    ) {

        const angle =
            (i / 40) *
            Math.PI *
            2;


        roundaboutPoints.push([

            roundaboutCenter[0] +
            Math.sin(angle) * radiusLat,

            roundaboutCenter[1] +
            Math.cos(angle) * radiusLng

        ]);

    }


    drawRoad(roundaboutPoints);


    // ============================================================
    // 11. ROUNDABOUT → UPPER CAMPUS
    // ============================================================

    drawRoad([

        [8.699245, 77.740440],

        [8.699350, 77.740500],

        [8.699470, 77.740540],

        [8.699600, 77.740510],

        [8.699720, 77.740430],

        [8.699820, 77.740330],

        [8.699900, 77.740360],

        [8.699960, 77.740520],

        [8.699940, 77.740680]

    ]);


    // ============================================================
    // 12. TOP HORIZONTAL CAMPUS ROAD
    // ============================================================

    drawRoad([

        [8.699940, 77.740680],

        [8.699900, 77.740850],

        [8.699860, 77.741050],

        [8.699830, 77.741280],

        [8.699815, 77.741550],

        [8.699800, 77.741850],

        [8.699800, 77.742180],

        [8.699800, 77.742520]

    ]);


    // ============================================================
    // 13. RIGHT SIDE ROAD
    // ============================================================

    drawRoad([

        [8.699800, 77.742520],

        [8.699650, 77.742550],

        [8.699500, 77.742570],

        [8.699340, 77.742550],

        [8.699180, 77.742520],

        [8.699030, 77.742510],

        [8.698900, 77.742550],

        [8.698790, 77.742650],

        [8.698650, 77.742700],

        [8.698450, 77.742720]

    ]);


    // ============================================================
    // 14. LOWER CAMPUS ROAD
    // ============================================================

    drawRoad([

        [8.698450, 77.742720],

        [8.698300, 77.742700],

        [8.698180, 77.742550],

        [8.698120, 77.742350],

        [8.698100, 77.742100],

        [8.698090, 77.741850],

        [8.698080, 77.741600],

        [8.698100, 77.741350],

        [8.698150, 77.741120],

        [8.698200, 77.740900]

    ]);


    // ============================================================
    // 15. ROUNDABOUT → CENTRAL CAMPUS
    // ============================================================

    drawRoad([

        [8.699050, 77.740390],

        [8.698980, 77.740470],

        [8.698900, 77.740530],

        [8.698800, 77.740570],

        [8.698700, 77.740590]

    ]);


    // ============================================================
    // 16. CENTRAL ROAD
    // ============================================================

    drawRoad([

        [8.698700, 77.740590],

        [8.698610, 77.740550],

        [8.698520, 77.740500],

        [8.698430, 77.740430],

        [8.698350, 77.740350],

        [8.698270, 77.740270]

    ]);


    // ============================================================
    // 17. CENTRAL → MANAGEMENT SIDE
    // ============================================================

    drawRoad([

        [8.698800, 77.740570],

        [8.698780, 77.740680],

        [8.698740, 77.740780],

        [8.698700, 77.740880],

        [8.698650, 77.740980],

        [8.698600, 77.741080],

        [8.698560, 77.741170]

    ]);


    // ============================================================
    // 18. MANAGEMENT → LOWER CENTRAL ROAD
    // ============================================================

    drawRoad([

        [8.698560, 77.741170],

        [8.698470, 77.741300],

        [8.698380, 77.741430],

        [8.698290, 77.741560],

        [8.698210, 77.741700],

        [8.698150, 77.741850]

    ]);


    // ============================================================
    // 19. ROUNDABOUT → LIBRARY SIDE
    // ============================================================

    drawRoad([

        [8.699050, 77.740390],

        [8.698980, 77.740300],

        [8.698900, 77.740220],

        [8.698820, 77.740150],

        [8.698720, 77.740100],

        [8.698620, 77.740080],

        [8.698520, 77.740090],

        [8.698430, 77.740120],

        [8.698350, 77.740160]

    ]);


    // ============================================================
    // 20. LIBRARY CONNECTION
    // ============================================================

    drawRoad([

        [8.698350, 77.740160],

        [8.698300, 77.740200],

        [8.698280, 77.740170]

    ]);


    // ============================================================
    // 21. LOWER LEFT CONNECTION
    // ============================================================

    drawRoad([

        [8.698430, 77.740430],

        [8.698350, 77.740500],

        [8.698250, 77.740570],

        [8.698150, 77.740600],

        [8.698060, 77.740590]

    ]);


    // ============================================================
    // 22. LOWER LEFT → OUTER SIDE
    // ============================================================

    drawRoad([

        [8.698060, 77.740590],

        [8.697980, 77.740530],

        [8.697930, 77.740450],

        [8.697900, 77.740370]

    ]);


    // ============================================================
    // 23. CANTEEN ROAD CONNECTION
    // ============================================================

    drawRoad([

        [8.698150, 77.741850],

        [8.698100, 77.741980],

        [8.698050, 77.742100],

        [8.698020, 77.742170]

    ]);


    // ============================================================
    // 24. SPORTS / CANTEEN SIDE
    // ============================================================

    drawRoad([

        [8.698150, 77.741850],

        [8.698080, 77.741920],

        [8.698010, 77.741970],

        [8.697930, 77.742000],

        [8.697850, 77.742020]

    ]);


    // ============================================================
    // 25. HOSTEL SIDE CONNECTION
    // ============================================================

    drawRoad([

        [8.698450, 77.742720],

        [8.698550, 77.742700],

        [8.698650, 77.742680],

        [8.698720, 77.742670]

    ]);


    // ============================================================
    // 26. NAVIGATION LAYER
    // ============================================================

    const navigationLayer =
        L.layerGroup().addTo(map);


    // ============================================================
    // 27. CLEAR NAVIGATION
    // ============================================================

    function clearNavigation() {

        navigationLayer.clearLayers();

    }


    // ============================================================
    // 28. ARROW ICON
    // ============================================================

    function createArrowIcon(angle) {

        return L.divIcon({

            className: "campus-nav-arrow",

            html:
                '<div style="' +

                'width:0;' +
                'height:0;' +

                'border-left:7px solid transparent;' +
                'border-right:7px solid transparent;' +
                'border-bottom:17px solid #1677ff;' +

                'filter:drop-shadow(0 1px 2px rgba(0,0,0,.5));' +

                'transform:rotate(' +
                angle +
                'deg);' +

                '"></div>',

            iconSize: [20, 20],

            iconAnchor: [10, 10]

        });

    }


    // ============================================================
    // 29. ARROW ANGLE
    // ============================================================

    function getAngle(a, b) {

        const dx =
            b[1] - a[1];

        const dy =
            b[0] - a[0];

        return (
            Math.atan2(dx, dy) *
            180 /
            Math.PI
        );

    }


    // ============================================================
    // 30. DRAW NAVIGATION
    // ============================================================

    function drawNavigation(
        route,
        destinationName
    ) {

        clearNavigation();


        // WHITE OUTLINE

        const outline =
            L.polyline(
                route,
                {
                    color: "#ffffff",
                    weight: 12,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    smoothFactor: 1,
                    interactive: false
                }
            ).addTo(navigationLayer);


        // BLUE NAVIGATION

        const blueRoute =
            L.polyline(
                route,
                {
                    color: "#1677ff",
                    weight: 6,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    smoothFactor: 1,
                    interactive: false
                }
            ).addTo(navigationLayer);


        // ========================================================
        // ARROWS
        // ========================================================

        for (
            let i = 1;
            i < route.length;
            i += 2
        ) {

            const angle =
                getAngle(
                    route[i - 1],
                    route[i]
                );


            L.marker(
                route[i],
                {
                    icon:
                        createArrowIcon(angle),

                    interactive: false,

                    zIndexOffset: 2000

                }
            ).addTo(navigationLayer);

        }


        // ========================================================
        // START
        // ========================================================

        L.circleMarker(
            route[0],
            {
                radius: 8,

                color: "#ffffff",

                weight: 3,

                fillColor: "#1677ff",

                fillOpacity: 1
            }
        ).addTo(navigationLayer);


        // ========================================================
        // DESTINATION
        // ========================================================

        const destination =
            places.find(
                place =>
                    place[0] ===
                    destinationName
            );


        if (destination) {

            L.marker([
                destination[1],
                destination[2]
            ])
            .addTo(navigationLayer)
            .bindPopup(
                "<b>📍 " +
                destination[0] +
                "</b>"
            )
            .openPopup();

        }


        // ========================================================
        // FIT ROUTE
        // ========================================================

        map.fitBounds(
            blueRoute.getBounds(),
            {
                padding: [60, 60]
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

                "<br>↓<br>" +

                "➡️ Go straight" +

                "<br>↓<br>" +

                "🔄 Follow the roundabout" +

                "<br>↓<br>" +

                "➡️ Continue on campus road" +

                "<br>↓<br>" +

                "📍 <b>" +
                destinationName +
                "</b>";

        }

    }


    // ============================================================
    // 31. COMPUTER SCIENCE ROUTE
    //
    // MAIN GATE
    // ↓
    // ROUNDABOUT
    // ↓
    // CAMPUS ROAD
    // ↓
    // RIGHT SIDE
    // ↓
    // LOWER ROAD
    // ↓
    // COMPUTER SCIENCE
    // ============================================================

    const computerScienceRoute = [

        [8.6988565, 77.739888],

        [8.6988750, 77.739950],

        [8.6989250, 77.740030],

        [8.6989950, 77.740120],

        [8.6990750, 77.740205],

        [8.6991450, 77.740280],

        [8.6992450, 77.740440],

        [8.6993500, 77.740500],

        [8.6994700, 77.740540],

        [8.6996000, 77.740510],

        [8.6997200, 77.740430],

        [8.6998200, 77.740330],

        [8.6999000, 77.740360],

        [8.6999600, 77.740520],

        [8.6999400, 77.740680],

        [8.6998600, 77.741050],

        [8.6998300, 77.741280],

        [8.6998150, 77.741550],

        [8.6998000, 77.741850],

        [8.6998000, 77.742180],

        [8.6998000, 77.742520],

        [8.6996500, 77.742550],

        [8.6995000, 77.742570],

        [8.6993400, 77.742550],

        [8.6991800, 77.742520],

        [8.6990300, 77.742510],

        [8.6989000, 77.742550],

        [8.6987900, 77.742650],

        [8.6986500, 77.742700],

        [8.6984500, 77.742720],

        [8.6983000, 77.742700],

        [8.6981800, 77.742550],

        [8.6981200, 77.742350],

        [8.6981000, 77.742100],

        [8.6980900, 77.741850],

        [8.6980500, 77.742000],

        [8.6978500, 77.742020],

        [8.6975920, 77.7420998]

    ];


    // ============================================================
    // 32. LIBRARY ROUTE
    //
    // MAIN GATE
    // ↓
    // ROUNDABOUT
    // ↓
    // LEFT SIDE ROAD
    // ↓
    // LIBRARY
    // ============================================================

    const libraryRoute = [

        [8.6988565, 77.739888],

        [8.6988750, 77.739950],

        [8.6989250, 77.740030],

        [8.6989950, 77.740120],

        [8.6990750, 77.740205],

        [8.6991450, 77.740280],

        [8.6992450, 77.740440],

        [8.6993500, 77.740500],

        [8.6994700, 77.740540],

        [8.6996000, 77.740510],

        [8.6997200, 77.740430],

        [8.6998200, 77.740330],

        [8.6999000, 77.740360],

        [8.6999600, 77.740520],

        [8.6999400, 77.740680],

        [8.6999000, 77.740850],

        [8.6998200, 77.740800],

        [8.6997000, 77.740700],

        [8.6995500, 77.740600],

        [8.6994000, 77.740500],

        [8.6992500, 77.740400],

        [8.6991000, 77.740300],

        [8.6989800, 77.740300],

        [8.6989000, 77.740220],

        [8.6988200, 77.740150],

        [8.6987200, 77.740100],

        [8.6986200, 77.740080],

        [8.6985200, 77.740090],

        [8.6984300, 77.740120],

        [8.6983500, 77.740160],

        [8.6983229, 77.7401688]

    ];


    // ============================================================
    // 33. SEARCH
    // ============================================================

    const destinationInput =
        document.getElementById(
            "destination"
        );


    const resultsBox =
        document.getElementById(
            "results"
        );


    let selectedPlace = null;


    if (
        destinationInput &&
        resultsBox
    ) {

        destinationInput.addEventListener(
            "input",
            () => {

                const text =
                    destinationInput.value
                    .toLowerCase()
                    .trim();


                selectedPlace = null;

                resultsBox.innerHTML = "";


                if (!text) {
                    return;
                }


                places.forEach(
                    place => {

                        const name =
                            place[0]
                            .toLowerCase();


                        const match =

                            name.includes(text)

                            ||

                            (
                                text === "cs" &&
                                name.includes(
                                    "computer science"
                                )
                            );


                        if (match) {

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
                                () => {

                                    selectedPlace =
                                        place;


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
    // 34. NAVIGATE BUTTON
    // ============================================================

    const navigateBtn =
        document.getElementById(
            "navigateBtn"
        );


    if (navigateBtn) {

        navigateBtn.addEventListener(
            "click",
            () => {

                let destination =
                    selectedPlace;


                if (!destination) {

                    const text =
                        destinationInput
                            ? destinationInput.value
                                .toLowerCase()
                                .trim()
                            : "";


                    destination =
                        places.find(
                            place => {

                                const name =
                                    place[0]
                                    .toLowerCase();


                                return (

                                    name.includes(text)

                                    ||

                                    (
                                        text === "cs" &&
                                        name.includes(
                                            "computer science"
                                        )
                                    )

                                );

                            }
                        );

                }


                if (!destination) {

                    alert(
                        "Please select a destination."
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
                // OTHER LOCATIONS
                // =================================================

                clearNavigation();


                map.setView(
                    [
                        destination[1],
                        destination[2]
                    ],
                    19
                );

            }
        );

    }


    // ============================================================
    // 35. GO TO COLLEGE
    // ============================================================

    window.goToCollege = function () {

        clearNavigation();


        map.setView(
            COLLEGE_CENTER,
            18
        );

    };


    // ============================================================
    // 36. MAP RESIZE FIX
    // ============================================================

    setTimeout(
        () => {

            map.invalidateSize();

        },
        500
    );


    setTimeout(
        () => {

            map.invalidateSize();

        },
        1200
    );


    console.log(
        "Sarah Tucker College professional campus map loaded."
    );

})();
