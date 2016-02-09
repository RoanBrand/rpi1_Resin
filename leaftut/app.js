var map = L.map('map').setView([-33.92, 18.86], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'roanbrand.p3kkdlao',
	accessToken: 'pk.eyJ1Ijoicm9hbmJyYW5kIiwiYSI6ImNpa2Rzd2sxOTAwMGh3ZWtxMm02bDZuNzgifQ.RyaDmWX-4_1vdVqnL9_6Vg'
}).addTo(map);

var marker = L.marker([-33.929381, 18.854665]).addTo(map);

var circle = L.circle([-33.928482, 18.865557], 250, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.3
}).addTo(map);

circle.bindPopup("B.Eng Building");

var popup = L.popup();

map.on('click', function (e) {
	//e.stopPropagation();
	//alert("Clicked: " + e.latlng);
	marker.setLatLng(e.latlng);
	popup.setLatLng(e.latlng).setContent("Clicked: " + e.latlng.toString()).openOn(map);
});

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

L.geoJson(myLines).addTo(map);
