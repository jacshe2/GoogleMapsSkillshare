


function initMap() {
  const locationcoords = { lat: 51.500729, lng: -0.124625 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: locationcoords,
    zoom: 13,
  });

  const iconBase =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
const icons = {
 
  info: {
    icon: iconBase + "info-i_maps.png",
  },
};
const locations = [
  {
    //big ben
    position: new google.maps.LatLng(51.500729, -0.124625),
    type: "info",
  },
  {
    //london eye
    position: new google.maps.LatLng(51.503324, -0.119543),
    type: "info",
  },
  {
    //downing
    position: new google.maps.LatLng(51.5034, -0.1276),
    type: "info",
  },
  
];

// Create markers.
for (let i = 0; i < locations.length; i++) {
  const marker = new google.maps.Marker({
    position: locations[i].position,
    animation: google.maps.Animation.DROP,
    icon: icons[locations[i].type].icon,
    map: map,
  });
}
}














