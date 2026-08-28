/* ============================================================
   SARAH TUCKER COLLEGE
   SMART CAMPUS NAVIGATION

   IMPORTANT:
   This is a custom campus map.
   The image is NOT used as the map.
   Buildings and roads are created with code.
============================================================ */



/* ============================================================
   1. CAMPUS SIZE
============================================================ */

const WIDTH = 1400;
const HEIGHT = 900;



/* ============================================================
   2. CREATE MAP
============================================================ */

const map = L.map("map", {

    crs: L.CRS.Simple,

    minZoom: -1,

    maxZoom: 2,

    zoomControl: true

});


const bounds = [
    [0, 0],
    [HEIGHT, WIDTH]
];


map.fitBounds(bounds);



/* ============================================================
   3. CAMPUS BACKGROUND
============================================================ */

L.rectangle(
    bounds,
    {
        color: "#8bb47a",
        weight: 0,
        fillColor: "#a8cb96",
        fillOpacity: 1
    }
).addTo(map);



/* ============================================================
   4. ROAD SYSTEM
============================================================

   IMPORTANT:

   Central Garden is in the middle.

   ROAD NEVER PASSES THROUGH THE GARDEN.

============================================================ */


const roadPoints = {

    mainGate: [
        [850,700],
        [780,700],
        [690,630],
        [610,550],
        [530,470],
        [450,390]
    ],


    leftRoad: [

        [450,390],
        [450,300],
        [500,220]

    ],


    rightRoad: [

        [780,700],
        [900,650],
        [1000,570],
        [1080,480],
        [1150,390]

    ],


    upperRoad: [

        [450,390],
        [450,250],
        [600,210],
        [800,210],
        [1000,250],
        [1150,390]

    ],


    parkingRoad: [

        [780,700],
        [1000,760],
        [1200,760]

    ],


    leftBranch: [

        [450,390],
        [330,390],
        [220,330]

    ],


    rightBranch: [

        [1150,390],
        [1240,350]

    ],


    libraryRoad: [

        [1080,480],
        [1120,580],
        [1190,640]

    ],


    canteenRoad: [

        [1150,390],
        [1210,300],
        [1260,220]

    ]

};



/* ============================================================
   DRAW ROAD
============================================================ */

function drawRoad(points){

    L.polyline(
        points,
        {
            color:"#8e8e88",
            weight:40,
            opacity:1,
            lineCap:"round",
            lineJoin:"round"
        }
    ).addTo(map);


    L.polyline(
        points,
        {
            color:"#d8d8d3",
            weight:27,
            opacity:1,
            lineCap:"round",
            lineJoin:"round"
        }
    ).addTo(map);

}


Object.values(roadPoints).forEach(drawRoad);



/* ============================================================
   5. CENTRAL GARDEN
============================================================ */

const garden = L.marker(
    [570,700],
    {
        icon:L.divIcon({

            className:"",

            html:`
                <div class="central-garden">

                    <div class="garden-fountain"></div>

                    <span>
                        CENTRAL GARDEN
                    </span>

                </div>
            `,

            iconSize:[340,240],

            iconAnchor:[170,120]

        })
    }
).addTo(map);



/* ============================================================
   6. BUILDING DATA
============================================================

   All positions are editable here.

============================================================ */

const buildings = {


    "canara-bank":{

        name:"Canara Bank",

        description:"Bank / Main Gate Left Side",

        position:[680,150],

        width:150,

        height:65,

        type:"small"

    },


    "parking-area":{

        name:"Parking Area",

        description:"Parking Area / Parking Shed",

        position:[770,1160],

        width:250,

        height:90,

        type:"small"

    },


    "main-block":{

        name:"Main Block",

        description:"Management Office • Principal Office",

        position:[430,700],

        width:220,

        height:120,

        type:"main"

    },


    "chemistry-physics":{

        name:"Chemistry & Physics",

        description:"Main Block Left Side",

        position:[250,450],

        width:180,

        height:75,

        type:"small"

    },


    "botany":{

        name:"Botany",

        description:"Main Block Right Side",

        position:[260,930],

        width:150,

        height:70,

        type:"small"

    },


    "zoology-bcom":{

        name:"Zoology & B.Com",

        description:"Behind Main Block",

        position:[300,680],

        width:190,

        height:75,

        type:"small"

    },


    "partition-hall":{

        name:"Partition Hall",

        description:"Campus Road Side",

        position:[350,390],

        width:180,

        height:80,

        type:"auditorium"

    },


    "new-auditorium":{

        name:"New Auditorium",

        description:"First Floor",

        position:[290,180],

        width:210,

        height:100,

        type:"auditorium"

    },


    "maths-earth":{

        name:"Maths & Earth Science",

        description:"New Auditorium Ground Floor",

        position:[360,450],

        width:200,

        height:80,

        type:"small"

    },


    "nano-science":{

        name:"Nano Science",

        description:"New Auditorium Left Side",

        position:[450,120],

        width:170,

        height:70,

        type:"small"

    },


    "history":{

        name:"History",

        description:"New Auditorium Right Side",

        position:[450,340],

        width:150,

        height:70,

        type:"small"

    },


    "physics-sf":{

        name:"Physics S/F",

        description:"Campus Department",

        position:[560,360],

        width:175,

        height:75,

        type:"small"

    },


    "bsc-msc":{

        name:"B.Sc A & M.Sc",

        description:"Behind Physics S/F",

        position:[650,370],

        width:190,

        height:75,

        type:"small"

    },


    "chapel":{

        name:"Chapel",

        description:"Chapel",

        position:[210,540],

        width:160,

        height:70,

        type:"small"

    },


    "hostel":{

        name:"Hostel",

        description:"Hostel",

        position:[120,760],

        width:200,

        height:80,

        type:"small"

    },


    "playground":{

        name:"Play Ground",

        description:"Play Ground",

        position:[150,930],

        width:220,

        height:100,

        type:"small"

    },


    "old-auditorium":{

        name:"Old Auditorium",

        description:"Old Auditorium",

        position:[420,1120],

        width:230,

        height:105,

        type:"auditorium"

    },


    "arts":{

        name:"Tamil • English • Economics",

        description:"Regular Departments",

        position:[530,1110],

        width:230,

        height:100,

        type:"small"

    },


    "library":{

        name:"Library",

        description:"Library",

        position:[640,1110],

        width:180,

        height:90,

        type:"small"

    },


    "canteen":{

        name:"Canteen",

        description:"Canteen",

        position:[300,1190],

        width:160,

        height:75,

        type:"small"

    },


    "computer-science":{

        name:"Computer Science",

        description:"Computer Science • Food Science • B.Com SF • English SF",

        position:[390,1210],

        width:230,

        height:120,

        type:"main"

    },


    "sports-room":{

        name:"Sports Room",

        description:"Sports Room",

        position:[650,1260],

        width:160,

        height:70,

        type:"small"

    }

};



/* ============================================================
   7. BUILDING MARKERS
============================================================ */

const buildingMarkers = {};



function createBuilding(id,data){

    let typeClass="";

    if(data.type==="main"){

        typeClass="building-main";

    }

    else if(data.type==="auditorium"){

        typeClass="building-auditorium";

    }

    else{

        typeClass="building-small";

    }


    const marker = L.marker(

        data.position,

        {

            icon:L.divIcon({

                className:"",

                html:`

                    <div
                        id="building-${id}"
                        class="campus-building ${typeClass}"
                        style="
                            width:${data.width}px;
                            height:${data.height}px;
                        "
                    >

                        ${data.name}

                    </div>

                `,

                iconSize:[
                    data.width,
                    data.height
                ],

                iconAnchor:[
                    data.width/2,
                    data.height/2
                ]

            })

        }

    ).addTo(map);


    marker.bindTooltip(

        `
        <b>${data.name}</b>
        <br>
        <span>${data.description}</span>
        `,

        {
            direction:"top",
            offset:[0,-10]
        }

    );


    buildingMarkers[id]=marker;

}


Object.entries(buildings)
      .forEach(
          ([id,data]) =>
          createBuilding(id,data)
      );



/* ============================================================
   8. MAIN GATE
============================================================ */

const mainGate = [850,700];


L.marker(

    mainGate,

    {

        icon:L.divIcon({

            className:"",

            html:`

                <div class="main-gate-marker">

                    🚪 MAIN GATE

                </div>

            `,

            iconSize:[110,40],

            iconAnchor:[55,20]

        })

    }

).addTo(map);



/* ============================================================
   9. SEARCH DATABASE
============================================================ */

const searchData = Object.entries(buildings)
.map(([id,data]) => {

    return {

        id:id,

        name:data.name,

        description:data.description

    };

});



/* ============================================================
   10. SEARCH
============================================================ */

const searchInput =
    document.getElementById("searchInput");


const searchButton =
    document.getElementById("searchButton");


const suggestions =
    document.getElementById("searchSuggestions");



function showSuggestions(){

    const value =
        searchInput.value
        .trim()
        .toLowerCase();


    suggestions.innerHTML="";


    if(!value){

        suggestions.style.display="none";

        return;

    }


    const results =
        searchData.filter(item =>

            item.name
            .toLowerCase()
            .includes(value)

        );


    if(results.length===0){

        suggestions.innerHTML=`

            <div class="suggestion">

                ❌ Location not found

            </div>

        `;

        suggestions.style.display="block";

        return;

    }


    results.forEach(item=>{

        const div =
            document.createElement("div");


        div.className="suggestion";


        div.innerHTML=`

            📍 <b>${item.name}</b>

            <br>

            <small>
                ${item.description}
            </small>

        `;


        div.onclick=()=>{

            searchInput.value=item.name;

            suggestions.style.display="none";

            startNavigation(item.id);

        };


        suggestions.appendChild(div);

    });


    suggestions.style.display="block";

}



searchInput.addEventListener(
    "input",
    showSuggestions
);


searchButton.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "keydown",
    function(event){

        if(event.key==="Enter"){

            performSearch();

        }

    }
);



function performSearch(){

    const value =
        searchInput.value
        .trim()
        .toLowerCase();


    if(!value){

        return;

    }


    const result =
        searchData.find(item =>

            item.name
            .toLowerCase()
            .includes(value)

        );


    suggestions.style.display="none";


    if(result){

        startNavigation(result.id);

    }

    else{

        alert(
            "Location not found. Please search a campus building or department."
        );

    }

}



/* ============================================================
   11. ROUTE COORDINATES
============================================================

   Routes are based on the campus road system.

   IMPORTANT:
   Route does NOT cut through Central Garden.

============================================================ */


const routes = {


    "main-block":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [430,430]

    ],


    "chemistry-physics":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,300],

        [340,300]

    ],


    "botany":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1000,300]

    ],


    "zoology-bcom":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [490,335]

    ],


    "partition-hall":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [390,390]

    ],


    "new-auditorium":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,250],

        [395,230]

    ],


    "maths-earth":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [430,450]

    ],


    "nano-science":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,250],

        [450,150]

    ],


    "history":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,250],

        [500,340]

    ],


    "physics-sf":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [530,420],

        [580,360]

    ],


    "bsc-msc":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [530,420],

        [650,370]

    ],


    "chapel":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,250],

        [290,210]

    ],


    "hostel":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,250],

        [210,760]

    ],


    "playground":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [450,250],

        [150,930]

    ],


    "old-auditorium":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1120,500],

        [1160,1120]

    ],


    "arts":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1120,580],

        [580,1110]

    ],


    "library":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1120,580],

        [640,1110]

    ],


    "canteen":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1150,390],

        [1210,300],

        [300,1190]

    ],


    "computer-science":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1150,390],

        [1210,300],

        [390,1210]

    ],


    "sports-room":[

        mainGate,

        [780,700],

        [900,650],

        [1000,570],

        [1080,480],

        [1150,390],

        [1200,760],

        [650,1260]

    ],


    "parking-area":[

        mainGate,

        [780,700],

        [1000,760],

        [1200,760]

    ],


    "canara-bank":[

        mainGate,

        [780,700],

        [690,630],

        [610,550],

        [530,470],

        [450,390],

        [680,150]

    ],


    "main-gate":[

        mainGate

    ]

};



/* ============================================================
   12. ROUTE LAYER
============================================================ */

let currentRoute = null;



function clearRoute(){

    if(currentRoute){

        map.removeLayer(currentRoute);

        currentRoute=null;

    }


    document
        .querySelectorAll(".selected-building")
        .forEach(el=>{

            el.classList.remove(
                "selected-building"
            );

        });

}



/* ============================================================
   13. DISTANCE
============================================================ */

function calculateDistance(points){

    let total=0;


    for(let i=1;i<points.length;i++){

        const y1=points[i-1][0];
        const x1=points[i-1][1];

        const y2=points[i][0];
        const x2=points[i][1];


        total += Math.sqrt(

            Math.pow(y2-y1,2) +

            Math.pow(x2-x1,2)

        );

    }


    return Math.max(
        25,
        Math.round(total/2)
    );

}



/* ============================================================
   14. ROUTE
============================================================ */

function startNavigation(id){

    clearRoute();


    const building =
        buildings[id];


    if(!building){

        return;

    }


    const points =
        routes[id];


    if(!points){

        return;

    }


    /* Draw blue route */

    currentRoute =
        L.polyline(

            points,

            {

                color:"#1769e0",

                weight:8,

                opacity:1,

                lineCap:"round",

                lineJoin:"round"

            }

        ).addTo(map);



    /* Add direction arrows */

    for(
        let i=1;
        i<points.length;
        i++
    ){

        const previous =
            points[i-1];


        const current =
            points[i];


        addArrow(
            previous,
            current
        );

    }



    /* Highlight destination */

    const marker =
        buildingMarkers[id];


    if(marker){

        const element =
            marker.getElement();


        if(element){

            const buildingElement =
                element.querySelector(
                    ".campus-building"
                );


            if(buildingElement){

                buildingElement.classList.add(
                    "selected-building"
                );

            }

        }

    }



    /* Move map */

    map.fitBounds(

        L.latLngBounds(points),

        {

            padding:[100,100],

            maxZoom:1

        }

    );



    /* Show route panel */

    showRoutePanel(
        id,
        calculateDistance(points)
    );

}



/* ============================================================
   15. ARROW
============================================================ */

function addArrow(start,end){

    const lat =
        (start[0]+end[0])/2;


    const lng =
        (start[1]+end[1])/2;


    const angle =
        Math.atan2(

            end[0]-start[0],

            end[1]-start[1]

        ) * 180 / Math.PI;


    L.marker(

        [lat,lng],

        {

            interactive:false,

            icon:L.divIcon({

                className:"",

                html:`

                    <div
                        style="
                            transform:
                            rotate(${angle}deg);

                            color:#1769e0;

                            font-size:22px;

                            font-weight:900;

                            text-shadow:
                            0 1px 2px white;
                        "
                    >
                        ➜
                    </div>

                `,

                iconSize:[25,25],

                iconAnchor:[12,12]

            })

        }

    ).addTo(currentRouteLayerGroup);

}



/* ============================================================
   ARROW GROUP
============================================================ */

let currentRouteLayerGroup =
    L.layerGroup().addTo(map);



/* ============================================================
   16. ROUTE PANEL
============================================================ */

function showRoutePanel(
    id,
    distance
){

    const data =
        buildings[id];


    document.getElementById(
        "routePanel"
    ).style.display="block";


    document.getElementById(
        "destinationName"
    ).textContent=data.name;


    document.getElementById(
        "destinationDescription"
    ).textContent=data.description;


    document.getElementById(
        "routeDistance"
    ).textContent =
        distance+" m";


    const minutes =
        Math.max(
            1,
            Math.ceil(distance/75)
        );


    document.getElementById(
        "routeTime"
    ).textContent =
        minutes+" min";


    createDirections(
        data.name
    );

}



/* ============================================================
   17. DIRECTIONS
============================================================ */

function createDirections(
    destination
){

    const list =
        document.getElementById(
            "directionList"
        );


    list.innerHTML="";


    const directions=[

        "Start from Main Gate",

        "Follow the campus road",

        "Keep the Central Garden on your side — do not cross the garden",

        "Continue along the marked campus road",

        "Follow the blue navigation route",

        "You have reached "+destination

    ];


    directions.forEach(
        (text,index)=>{

            const item =
                document.createElement(
                    "div"
                );


            item.className=
                "direction-item";


            item.innerHTML=`

                <div
                    class="direction-number">
                    ${index+1}
                </div>

                <div>
                    ${text}
                </div>

            `;


            list.appendChild(item);

        }
    );

}



/* ============================================================
   18. CLOSE ROUTE
============================================================ */

document.getElementById(
    "closeRoute"
).onclick=function(){

    clearRoute();

    currentRouteLayerGroup.clearLayers();

    document.getElementById(
        "routePanel"
    ).style.display="none";

};



/* ============================================================
   19. MAIN GATE BUTTON
============================================================ */

document.getElementById(
    "mainGateButton"
).onclick=function(){

    clearRoute();

    currentRouteLayerGroup.clearLayers();


    map.setView(
        mainGate,
        0
    );


    document.getElementById(
        "routePanel"
    ).style.display="none";


    searchInput.value="";

};



/* ============================================================
   20. BUILDING CLICK
============================================================ */

Object.entries(
    buildingMarkers
).forEach(
    ([id,marker])=>{

        marker.on(
            "click",
            function(){

                startNavigation(id);

            }
        );

    }
);



/* ============================================================
   21. CLOSE SUGGESTIONS
============================================================ */

document.addEventListener(
    "click",
    function(event){

        if(
            !event.target.closest(
                ".search-container"
            )
        ){

            suggestions.style.display=
                "none";

        }

    }
);



/* ============================================================
   22. INITIAL POSITION
============================================================ */

map.setView(
    [600,700],
    -0.2
);
