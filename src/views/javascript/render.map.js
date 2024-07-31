const map_doc=document.getElementById('map');
var Mapoptions
Mapoptions={
    center:{lat:22.572645,lng: 88.363892},
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  
var map=new google.maps.Map(map_doc,Mapoptions);

