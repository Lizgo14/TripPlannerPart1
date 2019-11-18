import { url } from "inspector";

const marker = (type, coordinates) => {
  let image  = ''
if (type === 'activity'){
  image = 'http://i.imgur.com/WbMOfMl.png'
} else if (type === 'hotel'){
  image = "http://i.imgur.com/D9574Cu.png"
} else if(type === 'restaurant'){
  image = "http://i.imgur.com/cqR6pUI.png"
}
const markerElement = document.createElement("div")
markerElement.style.width = "32px"
markerElement.style.height = "39px";
markerElement.style.backgroundImage = `url(${image})`;

 return new mapboxgl.Marker(markerElement).setLngLat(coordinates).addTo(map);
}

module.exports = marker