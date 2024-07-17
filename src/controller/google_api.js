var map_doc=document.getElementById('map');
var location,Mapoptions;
var button=document.getElementById('btn');
var direction=document.getElementById('directions');
Mapoptions={
  center:{lat:22.572645,lng: 88.363892},
  zoom:15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map=new google.maps.Map(map_doc,Mapoptions);
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);
// var marker=new google.maps.Marker({
//   map:map,
//   icon:{url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmap-pointer-icon-vector-13483734&psig=AOvVaw3PpViDDSIZWYRN-K3qC22G&ust=1721092198807000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiS9pvup4cDFQAAAAAdAAAAABAJ',
//     scaledSize: new google.maps.Size(50, 50)
//   }
// })

function calcRoute() {
  var start;
  if(location){
    start=location;
  }
  else{
    start=document.getElementById("from").value
  }
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
  driverlocation(map);

}
var options = {
  types: ['airport','hospital']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

function driverlocation(map){
  var driver_location={lat:22.572645,lng: 88.363892};
  var customIcon={
    url: 'https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-school-bus-top-view-transparent-png-image_6121877.png',
    scaledSize: new google.maps.Size(50, 50)
  }
  const marker=new google.maps.Marker({
    position:driver_location,
    map:map,
    icon:customIcon
  })
}
function removecookies() {
  document.cookie.jwtToken='';
}