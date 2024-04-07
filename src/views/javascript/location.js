
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
//    const location={lat:position.coords.latitude,lng:position.coords.longitude};
},(error)=>{
    console.log(error);
});
