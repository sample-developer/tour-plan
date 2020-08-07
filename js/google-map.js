let map;

function initMap() {
  var opt = {
    center: {
      lat: 41.011845,
      lng: 39.615020
    },
    zoom: 8
  }
  map = new google.maps.Map(document.getElementById("map"), opt);
}