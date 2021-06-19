
function initMap() {
  var location = 'LE2 2ND';
  var geocode = new google.maps.Geocoder();

  geocode.geocode({
    'address': location
  }, function(results, status) {
	//works map address
    if (status != google.maps.GeocoderStatus.OK) {
    	console.log("Geocode error");
    }else{
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      	locationcoords = { lat: latitude, lng:  longitude };
  		const map = new google.maps.Map(document.getElementById("map"), {
   		zoom: 11,
   		//center is the marker
    	center: locationcoords,
});

  //draw marker
  const marker = new google.maps.Marker({
    position: locationcoords,
    map: map,
  });    
    }
  });
}
