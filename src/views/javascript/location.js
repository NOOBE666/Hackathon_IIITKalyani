function getlocation() {
    var location;
    var disconnect=document.getElementById('disconnect')
var watchID=navigator.geolocation.watchPosition(async (position)=>{
    //     console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
   location={lat:position.coords.latitude,lng:position.coords.longitude};
//    console.log(location);
  
const url = new URL(window.location.href);


const arr=url.href.split('/')
   const id=arr[arr.length-2];
   console.log(id);
   await fetch(`http://localhost:5502/Business/locationupdate/${id}`,{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body:JSON.stringify(location)
   });
},(error)=>{
    console.log(error);
},{enableHighAccuracy:true});

disconnect.addEventListener('click',()=>{
    screen.classList.remove('active')
    navigator.geolocation.clearWatch(watchID);
})
}
var go_live=document.getElementById('button');
var screen=document.getElementById('screen')
go_live.addEventListener('click',()=>{
        screen.classList.add('active')
})