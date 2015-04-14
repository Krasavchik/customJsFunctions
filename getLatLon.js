function getLat(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  var location;
    // Geocode the address and plug the lat, lng pair into the
    // 2nd and 3rd elements of the current range row.
    location = geocoder.geocode(address);
    // Only change cells if geocoder seems to have gotten a
    // valid response.
    if (location.status == 'OK') {
      lat = location["results"][0]["geometry"]["location"]["lat"];
 return lat;
    }
};

 function getLon(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  var location;
    // Geocode the address and plug the lat, lng pair into the
    // 2nd and 3rd elements of the current range row.
    location = geocoder.geocode(address);
    // Only change cells if geocoder seems to have gotten a
    // valid response.
    if (location.status == 'OK') {
      lng = location["results"][0]["geometry"]["location"]["lng"];
 return lng;
  }
};
