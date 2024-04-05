// var directionsService = new google.maps.DirectionsService();
function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
navigator.geolocation.getCurrentPosition((position)=>{
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
//    const location={lat:position.coords.latitude,lng:position.coords.longitude};
var kolkata = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
var mapOptions = {
  zoom:16,
  center: kolkata,
  mapId:'42d0044243a14f68'
}
var map = new google.maps.Map(document.getElementById('map'), mapOptions);
// const marker=new google.maps.marker.AdvancedMarkerElement({
//         map:map,
//         position: kolkata,
//         title: 'Uluru',
// })
  var start = kolkata;
  var end = {lat:22.5150,lng:88.4012};
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // console.log(result)
      directionsRenderer.setDirections(result);
    }
  });
directionsRenderer.setMap(map);
},(error)=>{
  console.log(error);
});
  // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  // var mapOptions = {
  //   zoom:7,
  //   center: chicago
  // }
  // var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  //   var start = 'Los Angeles, CA';
  //   var end = 'San Francisco, CA';
  //   var request = {
  //     origin: start,
  //     destination: end,
  //     travelMode: 'DRIVING'
  //   };
  //   directionsService.route(request, function(result, status) {
  //     if (status == google.maps.DirectionsStatus.OK) {
  //       // console.log(result)
  //       directionsRenderer.setDirections(result);
  //     }
  //   });
  // directionsRenderer.setMap(map);
}
        
        // function calcRoute() {
        //   var start = 'Los Angeles, CA';
        //   var end = 'San Francisco, CA';
        //   var request = {
        //     origin: start,
        //     destination: end,
        //     travelMode: 'DRIVING'
        //   };
        //   directionsService.route(request, function(result, status) {
        //     if (status == google.maps.DirectionsStatus.OK) {
        //       // console.log(result)
        //       directionsRenderer.setDirections(result);
        //     }
        //   });
        // }
