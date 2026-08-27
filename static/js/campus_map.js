// 1. Map Initialization (Coordinate grid system based on visual image layout)
var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 2
});

// Image size bounds (Width x Height ratio matching your original image layout)
var bounds = [[0, 0], [1000, 1600]];

// Your Campus Hand-drawn Image File (Must be in the same folder)
var imageUrl = '1000102086.jpg'; 

L.imageOverlay(imageUrl, bounds).addTo(map);
map.fitBounds(bounds);

// 2. All Campus Location Points & Details from your layout image
var campusLocations = [
  { name: "📍 Main Gate", coords: [50, 800], desc: "Main Campus Entrance" },
  { name: "🏫 Main Block", coords: [620, 900], desc: "Administrative Offices & Classrooms" },
  { name: "🌿 Botany Department", coords: [650, 1150], desc: "Botany Department & Labs" },
  { name: "💻 BCA & MCA Block", coords: [750, 300], desc: "Computer Applications Dept" },
  { name: "📐 Maths (Aided & S/F)", coords: [600, 480], desc: "Mathematics Department" },
  { name: "🧪 Physics & Chemistry", coords: [730, 600], desc: "Science Block & Labs" },
  { name: "🔬 Zoology & B.COM", coords: [760, 920], desc: "Zoology Labs & B.Com Aided" },
  { name: "📚 Library", coords: [300, 1380], desc: "Central Library & Reading Hall" },
  { name: "🎭 New Auditorium", coords: [520, 240], desc: "Nano Sci & Cultural Events" },
  { name: "🏛️ Old Auditorium", coords: [580, 1400], desc: "Seminars & Gatherings" },
  { name: "🏠 Hostel", coords: [930, 900], desc: "Student Residential Hostel" },
  { name: "⚽ Play Ground", coords: [900, 1150], desc: "Sports & Athletics Ground" },
  { name: "🏦 Canara Bank", coords: [80, 120], desc: "Bank Branch & ATM" },
  { name: "🅿️ Parking Shed", coords: [40, 1500], desc: "Student & Staff Parking" }
];

// Array to hold marker objects for search function
var markerList = [];

// 3. Loop and render pins on map
campusLocations.forEach(function(place) {
  var marker = L.marker(place.coords).addTo(map)
    .bindPopup(`
      <div class="custom-popup">
        <h3>${place.name}</h3>
        <p>${place.desc}</p>
      </div>
    `);
    
  markerList.push({ name: place.name.toLowerCase(), marker: marker });
});

// 4. Search Functionality
function searchBuilding() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  
  markerList.forEach(function(item) {
    if (input !== "" && item.name.includes(input)) {
      item.marker.openPopup();
      map.panTo(item.marker.getLatLng());
    }
  });
}
