let h2 = document.getElementById("clickCount");
h2.innerHTML = "Number of Clicks: " + localStorage.count;

function counterFunc() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      localStorage.count = 1;
    }
    document.getElementById("clickCount").innerHTML = "Number of Clicks: " + localStorage.count;
  }
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}