// Center Coordinates (Latitude, Longitude)
var campusCenter = [9.9252, 78.1198];

// Map Initialization
var map = L.map('map').setView(campusCenter, 18);

// Google Maps Satellite / Hybrid Imagery Tile Layer
L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '© Google Maps'
}).addTo(map);

// Campus Locations Data Array
var locations = [
  { name: "Main Gate (Entrance)", coords: [9.9248, 78.1198], desc: "Primary Campus Entry Gate" },
  { name: "Main Block (Administration)", coords: [9.9254, 78.1198], desc: "Admin Offices & Arts Classes" },
  { name: "Botany Department", coords: [9.9256, 78.1202], desc: "Botany Department & Labs" },
  { name: "Maths Department", coords: [9.9255, 78.1188], desc: "Aided & Self-Finance Maths Block" },
  { name: "BCA & MCA Block", coords: [9.9258, 78.1184], desc: "Computer Applications Block" },
  { name: "Library Block", coords: [9.9248, 78.1205], desc: "Central Library & Reading Hall" },
  { name: "New Auditorium", coords: [9.9253, 78.1184], desc: "Events & Cultural Auditorium" }
];

var markers = [];

// Loop and add Google Maps style markers and popup info windows
locations.forEach(function(loc) {
  var marker = L.marker(loc.coords).addTo(map)
    .bindPopup(`
      <div class="info-card">
        <h3>${loc.name}</h3>
        <p>${loc.desc}</p>
        <a href="https://maps.google.com/?q=${loc.coords[0]},${loc.coords[1]}" target="_blank" class="btn-direct">Get Directions</a>
      </div>
    `);
  
  markers.push({ name: loc.name.toLowerCase(), marker: marker });
});

// Search Filter Functionality
function searchBuilding() {
  var query = document.getElementById('searchInput').value.toLowerCase();
  
  markers.forEach(function(item) {
    if (query !== "" && item.name.includes(query)) {
      item.marker.openPopup();
      map.panTo(item.marker.getLatLng());
    }
  });
}
