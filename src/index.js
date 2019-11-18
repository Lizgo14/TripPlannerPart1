const mapboxgl = require("mapbox-gl");
const marker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoibGl6Z280IiwiYSI6ImNrMzRwYmwzbjAwNGczc3BuY2ZnbnNrazkifQ.Yhq0b3u218kKEiAQsPgkBA';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newmarker = marker("activity", [-74.009, 40.705])
newmarker.addTo(map)


