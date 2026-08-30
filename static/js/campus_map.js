```javascript
// ============================================================
// SARAH TUCKER COLLEGE
// CAMPUS MAP + PROPER ROAD NETWORK + NAVIGATION
//
// IMPORTANT:
// 1. LOCATION COORDINATES ARE NOT CHANGED.
// 2. ORIGINAL ROAD COORDINATES ARE NOT CHANGED.
// 3. ROADS ARE ONLY REDRAWN AS PROPER ROADS.
// 4. NAVIGATION FOLLOWS THE PROVIDED ROAD NETWORK.
// ============================================================


// ============================================================
// 1. LOCATIONS
// ============================================================

const places = [
    {name:"Botony",lat:8.6984368,lng:77.7409389,icon:"🏫"},
    {name:"Physics(regular)",lat:8.6989193,lng:77.7407981,icon:"🏫"},
    {name:"Chemistry",lat:8.6991182,lng:77.7410046,icon:"🏫"},
    {name:"Zoology&B.Com(Aided)",lat:8.6987364,lng:77.7413077,icon:"🏫"},
    {name:"Old Auditorium",lat:8.6980713,lng:77.7407428,icon:"🏛️"},
    {name:"Library",lat:8.6983229,lng:77.7401688,icon:"📚"},
    {name:"Parking Area",lat:8.6984369,lng:77.7400521,icon:"🅿️"},
    {name:"Tamil, English(regular), Economics",lat:8.6980622,lng:77.7403781,icon:"🏫"},
    {name:"Toilet",lat:8.6977444,lng:77.741516,icon:"🚻"},
    {name:"English(sf), B.Com(sf),Computer Science, Food Science",lat:8.697592,lng:77.7420998,icon:"🏫"},
    {name:"Sports Room",lat:8.698168,lng:77.7421669,icon:"🚪"},
    {name:"Canteen",lat:8.6980195,lng:77.7421696,icon:"🍽️"},
    {name:"Play Ground",lat:8.698729,lng:77.7418037,icon:"⚽"},
    {name:"Hostel",lat:8.6987209,lng:77.7427011,icon:"🏠"},
    {name:"New Auditorium",lat:8.699646,lng:77.7406171,icon:"🏛️"},
    {name:"History(Tamil&English)",lat:8.699699,lng:77.7407055,icon:"🏫"},
    {name:"Nano Science",lat:8.6996354,lng:77.7404803,icon:"🏫"},
    {name:"Maths",lat:8.699479,lng:77.740668,icon:"🏫"},
    {name:"Physics(sf)",lat:8.6994551,lng:77.740947,icon:"🏫"},
    {name:"BCA",lat:8.6997309,lng:77.7409014,icon:"🏫"},
    {name:"MCA",lat:8.6997653,lng:77.7410918,icon:"🏫"},
    {name:"Main Gate",lat:8.6988565,lng:77.739888,icon:"🚪"},
    {name:"NCC Room",lat:8.6990958,lng:77.7422827,icon:"🚪"},
    {name:"principal office",lat:8.6988395,lng:77.7408101,icon:"🏢"},
    {name:"Management office",lat:8.6985889,lng:77.7408047,icon:"🏢"}
];


// ============================================================
// 2. ORIGINAL ROADS
//    THESE COORDINATES ARE KEPT AS PROVIDED
// ============================================================

const roads = [

    {
        name:"Line 44",
        coords:[
            [8.6988374,77.7398879],
            [8.69884,77.740081]
        ]
    },

    {
        name:"Line 45",
        coords:[
            [8.6988479,77.7399128],
            [8.6988585,77.7400764],
            [8.6990176,77.7403795],
            [8.6990176,77.7405807],
            [8.6991714,77.7408516],
            [8.6993411,77.7407577]
        ]
    },

    {
        name:"Line 48",
        coords:[
            [8.6990121,77.7405504],
            [8.6992819,77.7410775],
            [8.6994118,77.7409944]
        ]
    },

    {
        name:"Line 50",
        coords:[
            [8.6990176,77.7405807],
            [8.6993029,77.7411164],
            [8.6993093,77.741217],
            [8.6997017,77.7411231]
        ]
    },

    {
        name:"Line 51",
        coords:[
            [8.6996566,77.7411312],
            [8.6996301,77.7410064],
            [8.6995903,77.7408817],
            [8.6996566,77.7408656]
        ]
    },

    {
        name:"Line 53",
        coords:[
            [8.6996566,77.7408656],
            [8.6996076,77.7407458],
            [8.6996486,77.7407257]
        ]
    },

    {
        name:"Line 55",
        coords:[
            [8.6981822,77.7413523],
            [8.6984474,77.7413336],
            [8.69845,77.7412518],
            [8.6984527,77.7411539],
            [8.6986489,77.7411431],
            [8.6986515,77.7412424]
        ]
    },

    {
        name:"Line 56",
        coords:[
            [8.6984527,77.7411539],
            [8.698503,77.7410439],
            [8.698458,77.7410251]
        ]
    },

    {
        name:"Line 58",
        coords:[
            [8.6985959,77.7411485],
            [8.6990387,77.7411699],
            [8.699089,77.7410841]
        ]
    },

    {
        name:"Line 59",
        coords:[
            [8.6990121,77.7405504],
            [8.6988371,77.7406737],
            [8.6988451,77.740714]
        ]
    },

    {
        name:"Line 65",
        coords:[
            [8.6979528,77.7405736],
            [8.6979581,77.7416304],
            [8.6978812,77.7416331],
            [8.6978865,77.7421132],
            [8.6977168,77.7421159]
        ]
    },

    {
        name:"Line 67",
        coords:[
            [8.6981808,77.7419523],
            [8.6978892,77.7419738]
        ]
    },

    {
        name:"Line 68",
        coords:[
            [8.6980138,77.7419684],
            [8.6980164,77.7420757]
        ]
    },

    {
        name:"Line 71",
        coords:[
            [8.6985667,77.740083],
            [8.6984315,77.7400991],
            [8.6984288,77.7400723]
        ]
    },

    {
        name:"Line 72",
        coords:[
            [8.6985667,77.740083],
            [8.6985004,77.7401957],
            [8.6983573,77.7401796]
        ]
    },

    {
        name:"Line 73",
        coords:[
            [8.6984315,77.7405658],
            [8.6980842,77.7405819],
            [8.6980709,77.7404075]
        ]
    },

    {
        name:"Line 74",
        coords:[
            [8.6980842,77.7405819],
            [8.6980815,77.7406355]
        ]
    },

    {
        name:"Line 75",
        coords:[
            [8.6987709,77.7425364],
            [8.6987656,77.7426759]
        ]
    },

    {
        name:"Line 76",
        coords:[
            [8.6994271,77.7402956],
            [8.6995835,77.7404726]
        ]
    }

];


// ============================================================
// 3. MAP
// ============================================================

const map = L.map("map");

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom:22,
        attribution:"&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ============================================================
// 4. MARKERS
// ============================================================

const markers = {};

const allBounds = [];


places.forEach(place => {

    const marker = L.marker([
        place.lat,
        place.lng
    ]).addTo(map);

    marker.bindPopup(
        `<b>${place.icon} ${place.name}</b>`
    );

    marker.bindTooltip(
        place.name,
        {
            direction:"top"
        }
    );

    markers[place.name] = marker;

    allBounds.push([
        place.lat,
        place.lng
    ]);

});


// ============================================================
// 5. DRAW ROADS PROPERLY
//
// WHITE = ROAD EDGE
// GREY = ROAD SURFACE
//
// This removes the "thin random line" appearance.
// ============================================================

roads.forEach(road => {

    if (!road.coords || road.coords.length < 2) {
        return;
    }

    // WHITE OUTER ROAD
    L.polyline(
        road.coords,
        {
            color:"#ffffff",
            weight:18,
            opacity:1,
            lineCap:"round",
            lineJoin:"round",
            interactive:false
        }
    ).addTo(map);


    // GREY ROAD SURFACE
    L.polyline(
        road.coords,
        {
            color:"#8f8f8f",
            weight:12,
            opacity:1,
            lineCap:"round",
            lineJoin:"round",
            interactive:false
        }
    ).addTo(map);


    road.coords.forEach(point => {
        allBounds.push(point);
    });

});


// ============================================================
// 6. CONNECT ONLY THE PROVIDED ROAD NETWORK
//
// This connects very small gaps between the supplied road
// segments. It does NOT move any location.
// ============================================================

function distanceInMeters(a,b) {

    const R = 6371000;

    const lat1 = a[0] * Math.PI / 180;
    const lat2 = b[0] * Math.PI / 180;

    const dLat =
        (b[0] - a[0]) * Math.PI / 180;

    const dLng =
        (b[1] - a[1]) * Math.PI / 180;

    const x =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(dLng / 2) ** 2;

    return (
        R *
        2 *
        Math.atan2(
            Math.sqrt(x),
            Math.sqrt(1-x)
        )
    );
}


// Get ONLY road endpoints
const roadEndpoints = [];

roads.forEach((road,index) => {

    roadEndpoints.push({
        road:index,
        point:road.coords[0]
    });

    roadEndpoints.push({
        road:index,
        point:road.coords[road.coords.length - 1]
    });

});


// Small-gap connection only
const MAX_ROAD_GAP = 12;

const alreadyConnected = new Set();


for(let i=0;i<roadEndpoints.length;i++) {

    for(let j=i+1;j<roadEndpoints.length;j++) {

        const A = roadEndpoints[i];
        const B = roadEndpoints[j];

        if(A.road === B.road) {
            continue;
        }

        const d =
            distanceInMeters(
                A.point,
                B.point
            );

        if(d <= MAX_ROAD_GAP) {

            const key =
                [A.road,B.road]
                .sort()
                .join("_");

            if(alreadyConnected.has(key)) {
                continue;
            }

            alreadyConnected.add(key);

            const connector = [
                A.point,
                B.point
            ];


            // WHITE CONNECTOR
            L.polyline(
                connector,
                {
                    color:"#ffffff",
                    weight:18,
                    opacity:1,
                    lineCap:"round",
                    lineJoin:"round",
                    interactive:false
                }
            ).addTo(map);


            // GREY CONNECTOR
            L.polyline(
                connector,
                {
                    color:"#8f8f8f",
                    weight:12,
                    opacity:1,
                    lineCap:"round",
                    lineJoin:"round",
                    interactive:false
                }
            ).addTo(map);

        }

    }

}


// ============================================================
// 7. EXACT NAVIGATION PATH
//
// MAIN GATE
// → LINE 44
// → LINE 45
// → RIGHT TURN
// → LINE 59
// → MANAGEMENT SIDE
// → BOTANY SIDE
// → CANTEEN SIDE
// → DOWN ROAD
// → COMPUTER SCIENCE
//
// PARKING AREA IS NOT USED.
// GARDEN / PLAYGROUND SHORTCUT IS NOT USED.
// ============================================================

const COMPUTER_SCIENCE_ROUTE = [

    // MAIN GATE
    [8.6988565,77.739888],

    // LINE 44
    [8.6988374,77.7398879],
    [8.69884,77.740081],

    // LINE 45
    [8.6988585,77.7400764],
    [8.6990176,77.7403795],
    [8.6990176,77.7405807],

    // RIGHT / MANAGEMENT SIDE - LINE 59
    [8.6990121,77.7405504],
    [8.6988371,77.7406737],
    [8.6988451,77.740714],

    // TURN TOWARDS BOTANY SIDE
    [8.6985959,77.7411485],

    // LINE 56
    [8.698503,77.7410439],
    [8.698458,77.7410251],

    // LINE 55
    [8.6984527,77.7411539],
    [8.69845,77.7412518],
    [8.6984474,77.7413336],

    // CANTEEN SIDE ROAD
    [8.6981822,77.7413523],
    [8.6981808,77.7419523],

    // CANTEEN ROAD
    [8.6978892,77.7419738],
    [8.6980138,77.7419684],
    [8.6980164,77.7420757],

    // DOWN ROAD
    [8.6979528,77.7405736],
    [8.6979581,77.7416304],
    [8.6978812,77.7416331],
    [8.6978865,77.7421132],
    [8.6977168,77.7421159],

    // COMPUTER SCIENCE BUILDING
    [8.697592,77.7420998]

];


// ============================================================
// 8. LIBRARY ROUTE
//
// MAIN GATE
// → PROVIDED MAIN ROAD
// → LIBRARY SIDE
// → LIBRARY
//
// NO PARKING SHORTCUT.
// ============================================================

const LIBRARY_ROUTE = [

    [8.6988565,77.739888],

    // Main Gate road
    [8.6988374,77.7398879],
    [8.69884,77.740081],

    // Main road
    [8.6988585,77.7400764],
    [8.6990176,77.7403795],

    // Library-side road
    [8.6985667,77.740083],
    [8.6985004,77.7401957],
    [8.6983573,77.7401796],

    // Library
    [8.6983229,77.7401688]

];


// ============================================================
// 9. CLEAR NAVIGATION
// ============================================================

let navigationLayers = [];


function clearNavigation() {

    navigationLayers.forEach(layer => {

        map.removeLayer(layer);

    });

    navigationLayers = [];

}


// ============================================================
// 10. BLUE ARROW
// ============================================================

function arrowIcon(angle) {

    return L.divIcon({

        className:"navigation-arrow",

        html:`
            <div
                style="
                    transform:rotate(${angle}deg);
                    color:#1a73e8;
                    font-size:25px;
                    font-weight:bold;
                    text-shadow:
                        0 0 2px white,
                        0 0 3px white;
                    width:28px;
                    height:28px;
                    line-height:28px;
                    text-align:center;
                "
            >➤</div>
        `,

        iconSize:[28,28],

        iconAnchor:[14,14]

    });

}


// ============================================================
// 11. ARROW DIRECTION
// ============================================================

function getAngle(a,b) {

    const dx =
        b[1] - a[1];

    const dy =
        b[0] - a[0];

    return (
        Math.atan2(dx,dy)
        * 180 /
        Math.PI
    );

}


// ============================================================
// 12. ADD BLUE ARROWS
// ============================================================

function addNavigationArrows(route) {

    const layer =
        L.layerGroup().addTo(map);

    for(
        let i=1;
        i<route.length;
        i+=2
    ) {

        const angle =
            getAngle(
                route[i-1],
                route[i]
            );

        L.marker(
            route[i],
            {
                icon:arrowIcon(angle),
                interactive:false,
                zIndexOffset:2000
            }
        ).addTo(layer);

    }

    return layer;

}


// ============================================================
// 13. NAVIGATE
// ============================================================

function startNavigation(route,destination) {

    clearNavigation();


    // WHITE BORDER UNDER BLUE ROUTE
    const routeBorder =
        L.polyline(
            route,
            {
                color:"#ffffff",
                weight:15,
                opacity:1,
                lineCap:"round",
                lineJoin:"round",
                interactive:false
            }
        ).addTo(map);


    navigationLayers.push(
        routeBorder
    );


    // BLUE NAVIGATION ROUTE
    const blueRoute =
        L.polyline(
            route,
            {
                color:"#1a73e8",
                weight:8,
                opacity:1,
                lineCap:"round",
                lineJoin:"round",
                interactive:false
            }
        ).addTo(map);


    navigationLayers.push(
        blueRoute
    );


    // BLUE DIRECTION ARROWS
    const arrows =
        addNavigationArrows(
            route
        );

    navigationLayers.push(
        arrows
    );


    // START DOT
    const start =
        L.circleMarker(
            route[0],
            {
                radius:8,
                color:"#ffffff",
                weight:3,
                fillColor:"#1a73e8",
                fillOpacity:1
            }
        ).addTo(map);

    navigationLayers.push(
        start
    );


    // DESTINATION MARKER
    const destinationMarker =
        L.marker([
            destination.lat,
            destination.lng
        ])
        .addTo(map)
        .bindPopup(
            `<b>📍 ${destination.name}</b>`
        )
        .openPopup();

    navigationLayers.push(
        destinationMarker
    );


    // FIT ROUTE
    map.fitBounds(
        blueRoute.getBounds(),
        {
            padding:[70,70]
        }
    );


    // INFO
    const info =
        document.getElementById(
            "routeInfo"
        );

    if(info) {

        info.style.display =
            "block";

        info.innerHTML = `
            <b>🚶 Navigation</b>
            <br><br>

            🚪 Main Gate
            <br>
            ↓
            <br>
            ➜ Follow the road
            <br>
            ↪ Turn Right
            <br>
            ↩ Turn Left
            <br>
            ➜ Continue through the campus road
            <br>
            🍽️ Canteen side
            <br>
            ↓
            <br>
            📍 <b>${destination.name}</b>
        `;

    }

}


// ============================================================
// 14. FIND PLACE
// ============================================================

function findPlace(query) {

    const q =
        query
        .toLowerCase()
        .trim();


    return places.find(place => {

        const name =
            place.name
            .toLowerCase();


        // Computer Science
        if(
            q.includes("computer science") ||
            q === "computer" ||
            q === "cs"
        ) {

            return name.includes(
                "computer science"
            );

        }


        // Library
        if(
            q.includes("library")
        ) {

            return name ===
                "library";

        }


        return name.includes(q);

    });

}


// ============================================================
// 15. SUPPORT EXISTING SEARCH BOX
//
// Your original HTML uses #search and #results.
// So this code works with that structure.
// ============================================================

const search =
    document.getElementById(
        "search"
    );

const results =
    document.getElementById(
        "results"
    );


if(search && results) {

    function showResults(query="") {

        results.innerHTML = "";

        places
        .filter(place =>
            place.name
            .toLowerCase()
            .includes(
                query.toLowerCase()
            )
        )
        .forEach(place => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "result";

            item.textContent =
                `${place.icon} ${place.name}`;


            item.onclick = () => {

                search.value =
                    place.name;

                results.innerHTML = "";

                const destination =
                    place;


                // COMPUTER SCIENCE
                if(
                    destination.name
                    .toLowerCase()
                    .includes(
                        "computer science"
                    )
                ) {

                    startNavigation(
                        COMPUTER_SCIENCE_ROUTE,
                        destination
                    );

                    return;

                }


                // LIBRARY
                if(
                    destination.name
                    .toLowerCase()
                    .includes(
                        "library"
                    )
                ) {

                    startNavigation(
                        LIBRARY_ROUTE,
                        destination
                    );

                    return;

                }


                // OTHER LOCATION:
                // LOCATION ITSELF IS NOT MOVED
                clearNavigation();

                map.setView(
                    [
                        destination.lat,
                        destination.lng
                    ],
                    19
                );

                markers[
                    destination.name
                ].openPopup();

            };


            results.appendChild(
                item
            );

        });

    }


    search.addEventListener(
        "input",
        event => {

            showResults(
                event.target.value
            );

        }
    );


    showResults();

}


// ============================================================
// 16. MAP INITIAL VIEW
// ============================================================

if(allBounds.length) {

    map.fitBounds(
        allBounds,
        {
            padding:[40,40]
        }
    );

}


// ============================================================
// 17. FIX LEAFLET SIZE
// ============================================================

setTimeout(() => {

    map.invalidateSize();

},500);
```
