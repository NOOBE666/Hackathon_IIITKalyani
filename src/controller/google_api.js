var map_doc=document.getElementById('map');
var location,Mapoptions;
Mapoptions={
  center:{lat:22.572645,lng: 88.363892},
  zoom:15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map=new google.maps.Map(map_doc,Mapoptions);
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);

function calcRoute() {
  //create request
  var request = {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.TRANSIT, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.IMPERIAL
  }

  //pass the request to the route method
  directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {

          //display route
          directionsDisplay.setDirections(result);
      } else {
          //delete route from map
          directionsDisplay.setDirections({ routes: [] });
          //center map in London
          map.setCenter({lat:22.572645,lng: 88.363892});

          //show error message
      }
  });

}
var options = {
  types: ['airport','hospital']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);














// // var directionsService = new google.maps.DirectionsService();
//   var directionsService = new google.maps.DirectionsService();
//   var directionsRenderer = new google.maps.DirectionsRenderer();
// navigator.geolocation.getCurrentPosition((position)=>{
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
// //    const location={lat:position.coords.latitude,lng:position.coords.longitude};
// var kolkata = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// var mapOptions = {
//   zoom:16,
//   center: kolkata,
//   mapId:'42d0044243a14f68'
// }
// var map = new google.maps.Map(document.getElementById('map'), mapOptions);
// // const marker=new google.maps.marker.AdvancedMarkerElement({
// //         map:map,
// //         position: kolkata,
// //         title: 'Uluru',
// // })
//   var start = kolkata;
//   var end = {lat:22.5150,lng:88.4012};
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
// },(error)=>{
//   console.log(error);
// });
//   // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//   // var mapOptions = {
//   //   zoom:7,
//   //   center: chicago
//   // }
//   // var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
//   //   var start = 'Los Angeles, CA';
//   //   var end = 'San Francisco, CA';
//   //   var request = {
//   //     origin: start,
//   //     destination: end,
//   //     travelMode: 'DRIVING'
//   //   };
//   //   directionsService.route(request, function(result, status) {
//   //     if (status == google.maps.DirectionsStatus.OK) {
//   //       // console.log(result)
//   //       directionsRenderer.setDirections(result);
//   //     }
//   //   });
//   // directionsRenderer.setMap(map);

        
//         // function calcRoute() {
//         //   var start = 'Los Angeles, CA';
//         //   var end = 'San Francisco, CA';
//         //   var request = {
//         //     origin: start,
//         //     destination: end,
//         //     travelMode: 'DRIVING'
//         //   };
//         //   directionsService.route(request, function(result, status) {
//         //     if (status == google.maps.DirectionsStatus.OK) {
//         //       // console.log(result)
//         //       directionsRenderer.setDirections(result);
//         //     }
//         //   });
//         // }
