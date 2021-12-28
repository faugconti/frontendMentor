var myIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
});

let map = L.map("map").setView([40.65, -73.949], 18);
let marker = L.marker([40.65, -73.949], {
  icon: myIcon,
}).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
  foo: "bar",
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);

const form = document.querySelector("form");

const ip = document.querySelector(".data__ip h2");
const timezone = document.querySelector(".data__timezone h2");
const isp = document.querySelector(".data__isp h2");
const locations = document.querySelector(".data__location h2");
const apiKey = "at_7W35On8pmdpNQU0esxeFmgKQntx7q";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formInput = form.querySelector("input").value;

  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${formInput}`
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      ip.innerHTML = data.ip;
      locations.innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
      timezone.innerHTML = `UTC ${data.location.timezone}`;
      isp.innerHTML = data.isp;
      const { lat, lng } = data.location;
      map.setView([lat, lng], 18);
      marker = L.marker([lat, lng], {
        icon: myIcon,
      }).addTo(map);
    }
  } catch (err) {
    console.log(err);
    console.log("error");
  }
});

function ValidateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  }
  alert("You have entered an invalid IP address!");
  return false;
}
