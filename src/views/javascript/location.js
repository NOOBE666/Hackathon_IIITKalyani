var location;
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
   location={lat:position.coords.latitude,lng:position.coords.longitude};
},(error)=>{
    console.log(error);
});
console.log(location);