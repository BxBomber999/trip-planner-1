function createMarkerElement (type, coordsArr) {
   


const markerEl = document.createElement("div");
markerEl.style.width = "32px";
markerEl.style.height = "39px";

if(type === 'activity') {
    markerEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'  
} else if (type === 'hotel') {
markerEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
} else {
    markerEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
}

new mapboxgl.Marker(markerEl).setLngLat(coordsArr).addTo(map)

}

module.exports = {
    createMarkerElement
}