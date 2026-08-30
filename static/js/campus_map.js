```javascript
// ============================================================
// SIMPLE MAP TEST
// ============================================================

const COLLEGE_CENTER = [8.6986, 77.74165];

const map = L.map("map");

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

map.setView(COLLEGE_CENTER, 18);

setTimeout(function () {
    map.invalidateSize();
}, 500);
```
