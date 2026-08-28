/*
    SMART CAMPUS NAVIGATION SYSTEM

    IMPORTANT:
    The positions below follow the uploaded hand-drawn
    master campus map.

    These are LOCAL MAP coordinates for the prototype.
    They must later be calibrated with the actual
    latitude/longitude of the campus for true GPS navigation.
*/


const locations = {

    "main-gate": {
        name: "Main Gate",
        position: [50, 10],
        description: "Main entrance of the campus"
    },

    "canara-bank": {
        name: "Canara Bank",
        position: [42, 24],
        description: "Canara Bank area near the main gate"
    },

    "parking": {
        name: "Parking Area",
        position: [45, 82],
        description: "Campus parking area"
    },

    "main-block": {
        name: "Main Block",
        position: [50, 48],
        description: "Main academic and administrative block"
    },

    "library": {
        name: "Library",
        position: [43, 39],
        description: "Campus library"
    },

    "partition-hall": {
        name: "Partition Hall",
        position: [25, 45],
        description: "Partition Hall"
    },

    "zoology": {
        name: "Zoology - B.Sc. (Aided)",
        position: [48, 25],
        description: "Zoology department"
    },

    "canteen": {
        name: "Canteen",
        position: [68, 35],
        description: "Campus canteen"
    },

    "john-innes": {
        name: "John Innes Block",
        position: [80, 46],
        description: "Academic block containing Food Science, Computer Science and B.Com"
    },

    "old-auditorium": {
        name: "Old Auditorium",
        position: [78, 70],
        description: "Old Auditorium"
    },

    "tamil": {
        name: "Tamil",
        position: [66, 78],
        description: "Tamil Department"
    },

    "english": {
        name: "English",
        position: [77, 85],
        description: "English Department"
    },

    "economics": {
        name: "Economics",
        position: [87, 85],
        description: "Economics Department"
    },

    "history": {
        name: "History",
        position: [45, 18],
        description: "History Department"
    },

    "maths": {
        name: "Maths",
        position: [55, 20],
        description: "Mathematics Department"
    },

    "botany": {
        name: "Botany",
        position: [63, 53],
        description: "Botany Department"
    },

    "chemistry": {
        name: "Chemistry",
        position: [53, 53],
        description: "Chemistry Department"
    },

    "physics": {
        name: "Physics",
        position: [61, 57],
        description: "Physics Department"
    }

};


/* ---------------------------------------------------
   CREATE MAP
--------------------------------------------------- */

const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 4
});


/*
    Campus drawing area.
*/

const campusBounds = [
    [0, 0],
    [100, 100]
];

map.fitBounds(campusBounds);


/* ---------------------------------------------------
   CAMPUS BOUNDARY
--------------------------------------------------- */

const campusBoundary = L.rectangle(
    campusBounds,
    {
        weight: 3,
        fillOpacity: 0.04
    }
).addTo(map);


/* ---------------------------------------------------
   DRAW ROADS
--------------------------------------------------- */

const roads = [

    [
        [10, 10],
        [10, 90]
    ],

    [
        [10, 48],
        [90, 48]
    ],

    [
        [48, 10],
        [48, 90]
    ],

    [
        [48, 70],
        [82, 70]
    ],

    [
        [48, 25],
        [75, 25]
    ],

    [
        [48, 48],
        [80, 48]
    ]

];


roads.forEach(function(road) {

    L.polyline(
        road,
        {
            weight: 8,
            opacity: 0.45,
            lineCap: "round"
        }
    ).addTo(map);

});


/* ---------------------------------------------------
   MARKERS
--------------------------------------------------- */

const markers = {};

Object.keys(locations).forEach(function(id) {

    const location = locations[id];

    const marker = L.marker(
        location.position
    ).addTo(map);


    marker.bindTooltip(
        location.name,
        {
            direction: "top"
        }
    );


    marker.on("click", function() {

        showInformation(
            location.name,
            location.description
        );

    });


    markers[id] = marker;

});


/* ---------------------------------------------------
   INFORMATION CARD
--------------------------------------------------- */

function showInformation(title, description) {

    document.getElementById("infoTitle").textContent =
        title;

    document.getElementById("infoDescription").textContent =
        description;

    document.getElementById("infoCard").style.display =
        "block";

}


document.getElementById("closeInfo").onclick =
    function() {

        document.getElementById("infoCard").style.display =
            "none";

    };


/* ---------------------------------------------------
   ROUTE
--------------------------------------------------- */

let routeLine = null;


function createRoute(fromId, toId) {

    if (routeLine) {

        map.removeLayer(routeLine);

    }


    if (!locations[fromId] || !locations[toId]) {

        return;

    }


    const start =
        locations[fromId].position;

    const destination =
        locations[toId].position;


    /*
        Prototype route.

        Later this will be replaced with the actual
        campus road network / shortest-path algorithm.
    */

    const middlePoint = [
        start[0],
        destination[1]
    ];


    routeLine = L.polyline(
        [
            start,
            middlePoint,
            destination
        ],
        {
            weight: 6,
            opacity: 0.9,
            dashArray: "10, 8",
            lineCap: "round"
        }
    ).addTo(map);


    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [80, 80]
        }
    );


    document.getElementById("routeText").textContent =
        locations[fromId].name +
        " → " +
        locations[toId].name;

}


/* ---------------------------------------------------
   ROUTE BUTTON
--------------------------------------------------- */

document.getElementById("routeBtn").onclick =
    function() {

        const from =
            document.getElementById("fromLocation").value;

        const to =
            document.getElementById("toLocation").value;


        if (!to) {

            alert("Please select a destination.");

            return;

        }


        if (from === "current") {

            if (!currentLocation) {

                alert(
                    "Please click 'My Location' first."
                );

                return;

            }

            /*
                For the first prototype,
                current GPS position is handled separately.
            */

            routeFromCurrentLocation(to);

            return;

        }


        createRoute(from, to);

    };


/* ---------------------------------------------------
   REAL-TIME LOCATION
--------------------------------------------------- */

let currentLocation = null;

let currentMarker = null;


document.getElementById("locationBtn").onclick =
    function() {

        if (!navigator.geolocation) {

            alert(
                "Geolocation is not supported by this browser."
            );

            return;

        }


        navigator.geolocation.watchPosition(

            function(position) {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;


                currentLocation = {
                    latitude: latitude,
                    longitude: longitude
                };


                console.log(
                    "Current GPS:",
                    latitude,
                    longitude
                );


                /*
                    IMPORTANT:
                    Browser gives REAL latitude/longitude.

                    The campus prototype currently uses
                    local map coordinates.

                    GPS-to-map calibration will be added
                    after actual campus coordinates are provided.
                */

                alert(
                    "Live location detected.\n\n" +
                    "Latitude: " +
                    latitude +
                    "\nLongitude: " +
                    longitude
                );

            },

            function(error) {

                alert(
                    "Unable to get your location.\n" +
                    "Please allow location permission."
                );

            },

            {
                enableHighAccuracy: true,
                maximumAge: 5000,
                timeout: 10000
            }

        );

    };


/* ---------------------------------------------------
   CURRENT LOCATION ROUTE
--------------------------------------------------- */

function routeFromCurrentLocation(destinationId) {

    if (!currentLocation) {

        return;

    }


    /*
        GPS calibration is required here.

        Once actual campus coordinates are added,
        currentLocation will be converted into the
        campus map coordinate system.
    */

    alert(
        "Your real GPS location was detected.\n\n" +
        "Next step: connect the campus GPS coordinates " +
        "to this map for true live navigation."
    );

}
