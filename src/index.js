console.log('running index.js');
console.log("hello, world")


const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoic3Rsb2RlciIsImEiOiJjamV6dGtjNmUwNmh4MnBrOWliaTczaGZrIn0.Yz50-14PvZAw5ezq_yOp2g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerEl = document.createElement("div");
markerEl.style.width = "32px";
markerEl.style.height = "39px";
markerEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

new mapboxgl.Marker(markerEl).setLngLat([-74.009151, 40.705086]).addTo(map)