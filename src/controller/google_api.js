var map_doc=document.getElementById('map');
var location,Mapoptions;
// var button=document.getElementById('main-btn');
var direction=document.getElementById('first-main-left-2');
var cross=document.getElementById('cross');
var listofbuses=document.getElementById('first-main-left-3');
var container=document.getElementById('main-btn');
var listcontainer=document.getElementById('listcontainer');
var bus;
var marker;
Mapoptions={
  center:{lat:22.572645,lng: 88.363892},
  zoom:15,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  disableDefaultUI:true,
  mapTypeControl:false
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

async function calcRoute() {
  console.log(direction)
  console.log(listofbuses)
  direction.classList.add('active');
  listofbuses.classList.add('active');

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
  directionsService.route(request, async function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {

          //display route
          directionsDisplay.setDirections(result);
          console.log(result.routes[0].overview_path)
          await driverlocation(map,result);
      } else {
          //delete route from map
          directionsDisplay.setDirections({ routes: [] });
          //center map in London
          map.setCenter({lat:22.572645,lng: 88.363892});

          //show error message
      }
  });
  // await driverlocation(map);

}
var options = {
  types: '*'
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

async function driverlocation(map,result){
  const location={lat:22.5213651,lng:88.4607823};
  var i=0;
  bus=setInterval(async ()=>{
    await fetch(`http://localhost:5502/Business/getlocation/66a98601b64bc1315ef823e3`,{
      method:'GET',
   }).then(response=>{return response.json()}).then(data=>{
    var customIcon={
      url: 'https://png.pngtree.com/png-clipart/20220824/ourmid/pngtree-school-bus-top-view-transparent-png-image_6121877.png',
      scaledSize: new google.maps.Size(55, 55),
    }
    // const location={lat:22.5213651,lng:88.4607823};
    location.lat=location.lat+0.0000111;
    // console.log(data)
    // console.log(location);
    // console.log(customIcon);
    var current=result.routes[0].overview_path
    if (marker) {
      marker.setMap(null)
    }
    marker=new google.maps.Marker({
      position:current[i],
      map:map,
      icon:customIcon
    })
    if (i>current.length) {
      i=0;
    } else {
      i++;
    }
   });
  },2000);
}
function removecookies() {
  document.cookie.jwtToken='';
}

cross.addEventListener('click',()=>{
  direction.classList.remove('active');
  listofbuses.classList.remove('active');
  clearInterval(bus);
  marker.setMap(null)
})
// container.addEventListener('click',()=>{
//   if(listofbuses.classList.contains('active')){
//     listofbuses.classList.remove('active')
//     direction.classList.add('active')
//   }
//   else{
//     listofbuses.classList.add('active');
//   direction.classList.remove('active')
//   }
// })