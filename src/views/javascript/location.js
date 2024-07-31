function getlocation() {
    var location;
navigator.geolocation.getCurrentPosition((position)=>{
    setInterval(async ()=>{
        console.log(position.coords.latitude);
    console.log(position.coords.longitude);
   location={lat:position.coords.latitude,lng:position.coords.longitude};
   console.log(location);
  
const url = new URL(window.location.href);


const arr=url.href.split('/')
   const id=arr[arr.length-1];
   console.log(id);
   await fetch(`http://localhost:5502/Business/locationupdate/${id}`,{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body:JSON.stringify(location)
   }).then(response=>response.json()).then(data=>{console.log("Data: "+data)});
    },5000);
},(error)=>{
    console.log(error);
},{enableHighAccuracy:true});
}
var go_live=document.getElementById('container');
var screen=document.getElementById('screen1')

go_live.addEventListener('click',()=>{
    if (go_live.classList.contains('active')) {
        go_live.classList.remove('active')
    } else {
        go_live.classList.add('active');
        screen.classList.add('active')
    }
})