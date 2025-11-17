// mapboxgl.accessToken = 'pk.eyJ1IjoiaG9hbmdoYW5kbiIsImEiOiJjbHp3YnUyc2cwMTl3MmtweWo1MjU0cnQ3In0.kJvlxTy_K1nVvwR8y5O8xA';
if (document.getElementById('map')) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaG9hbmdoYW5kbiIsImEiOiJjbHp3YnUyc2cwMTl3MmtweWo1MjU0cnQ3In0.kJvlxTy_K1nVvwR8y5O8xA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [-74.002208, 40.659897],
        zoom: 11
    });

    const geojson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [0.687410, 0.018158]
                }
            }
        ]
    };

    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    }
}