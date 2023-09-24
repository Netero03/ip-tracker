console.log("hi");
// async function getIPAddressGeolocation() {
//     const ipAddress = await fetch('https://api.ipify.org/').then(response => response.text());
//     const geocoder = L.esri.Geocoding.geocodeService();
//     const results = await geocoder.geocode(ipAddress);
  
//     const geolocation = {
//       latitude: results[0].latlng.lat,
//       longitude: results[0].latlng.lng,
//       country: results[0].properties['Country'],
//       region: results[0].properties['Region'],
//       city: results[0].properties['City']
//     };
  
//     return geolocation;
//   }

// async function createMarker() {
//     const geolocation = await getIPAddressGeolocation();
  
//     const marker = L.marker([geolocation.latitude, geolocation.longitude]).addTo(map);
//     marker.bindPopup(`You are in ${geolocation.city}, ${geolocation.region}, ${geolocation.country}.`);
  
//     return marker;
//   }
  console.log("hi2 ");
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// const marker2 = await createMarker();

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
// document.getElementById('get-location-button').addEventListener('click', async () => {
//     const marker = await createMarker();
//   });
  
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
      // .catch(error => {
      //   console.error('Error:', error);
      // });
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
      
      // .catch(error => {
      //   console.error('Error:', error);
      // });
      
  });

  console.log("hi");