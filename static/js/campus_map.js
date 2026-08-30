const map = L.map("map");

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

map.setView([8.6988565, 77.739888], 19);

setTimeout(function () {
    map.invalidateSize();
}, 500);
