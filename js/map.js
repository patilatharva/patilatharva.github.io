const berkeleyLatLng = [-122.259094, 37.871960];

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0aWxhdGhhcnZhIiwiYSI6ImNrOHN3MG5yczAzNzYzcW53anExZXZhNzkifQ.tZlhVCnq5qVYs3cEQbdSdw';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: berkeleyLatLng,
    zoom: 8
});
map.scrollZoom.disable();

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({color: '#F44336'})
    .setLngLat(berkeleyLatLng)
    .addTo(map);
