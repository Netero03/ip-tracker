console.log("hi");

  console.log("hi2 ");
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
console.log("hi2 ");

  
  document.getElementById('ip-address').addEventListener('input', function() {
    // Get the IP address from the input field
    var ipAddress = document.getElementById('ip-address').value;
  
    // Make an API request to IPify to get the geolocation data for the IP address
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_Ev6ir9buxXzePPe5GChhDue9iCZOB&ipAddress=' + ipAddress)
      .then(response => response.json())
      .then(data => {
        // Get the latitude and longitude from the geolocation data
        var latitude = data.location.lat;
        var longitude = data.location.lng;
  
        // Create a Leaflet marker at the latitude and longitude
        var marker = L.marker([latitude, longitude]);
  
        // Add the marker to the map
        marker.addTo(map);
  
        // Pan the map to the marker location
        map.panTo([latitude, longitude]);
      })

  });
  console.log("hi2 ");
  document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
     
    // Get the IP address from the input field
   
    var ipAddress = document.getElementById('ip-address').value;
     
    // Make an API request to IPify to get the geolocation data for the IP address
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_Ev6ir9buxXzePPe5GChhDue9iCZOB&ipAddress=' + ipAddress)
      .then(response => response.json())
      .then(data => {
        console.log("hi3");
        console.log(data.location.lat,);
        
        // Get the latitude and longitude from the geolocation data
        var latitude = data.location.lat;
        var longitude = data.location.lng;

        var ip=document.getElementById("ip");
        ip.textContent=data.ip;
        var loc=document.getElementById("loc");
        loc.textContent=data.location.city +","+ data.location.region ;
        var tz=document.getElementById("tz");
        tz.textContent=data.location.timezone;
        var isp=document.getElementById("isp");
        isp.textContent=data.isp;
        // Create a Leaflet marker at the latitude and longitude
        var marker = L.marker([latitude,longitude]).addTo(map);
        var map = L.map('map').setView([latitude,longitude], 13);
        // Add the marker to the map
        marker.addTo(map);

        // Pan the map to the marker location
        map.panTo([latitude, longitude]);
      
      })
      
  });

  console.log("hi");