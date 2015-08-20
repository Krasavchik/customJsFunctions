function geoNorm(address){
  var geocoder = Maps.newGeocoder();
  var location = geocoder.geocode(address);

  if (location.status == 'OK') {

    var geoNorm = [];
    geoNorm.push("geoCodeX:"+location["results"][0]["geometry"]["location"]["lng"],"geoCodeY:"+location["results"][0]["geometry"]["location"]["lat"]);

    var component = location["results"][0].address_components;

    var i = location["results"][0].address_components.length - 1;

    while(i >= 0){
      geoNorm.push(component[i].types+":"+component[i].long_name);
      i--;
    }

    return geoNorm.join("/");
  }
}

function reverseGeoNorm(geoX, geoY){
  var geocoder = Maps.newGeocoder().setLanguage('fr');
  var location = geocoder.reverseGeocode(geoX, geoY);
    if (location.status == 'OK') {
      var geoNorm = [];
      var component = location["results"][0].address_components;
      var i = location["results"][0].address_components.length - 1;
      while(i >= 0){
        geoNorm.push(component[i].types+":"+component[i].long_name);
        i--;
      }
    return geoNorm.join("/");
  }
}

function geocodeNorm(geoX, geoY){
  var geocoder = Maps.newGeocoder();
  var location = geocoder.geocode({ 'location' : {lat: geoX, lng: geoY}});

  if (location.status == 'OK') {

    var geoNorm = [];
    geoNorm.push("geoCodeX:"+location["results"][0]["geometry"]["location"]["lng"],"geoCodeY:"+location["results"][0]["geometry"]["location"]["lat"]);

    var component = location["results"][0].address_components;

    var i = location["results"][0].address_components.length - 1;

    while(i >= 0){
      geoNorm.push(component[i].types+":"+component[i].long_name);
      i--;
    }

    return geoNorm.join("/");
  }
}

function geoKey(address, key){
    var keyComponent;
    var subaddress = address.split("/");
    for(var j = 0, y = subaddress.length; j < y; j++){
        var component = subaddress[j].split(":");
        if(component[0].match(key)){
            keyComponent = component[1];
            break;
        }
    }
    return(keyComponent);
}
