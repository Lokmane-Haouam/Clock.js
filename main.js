let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function clock() {
  let time = new Date();
  document.getElementById("h").textContent = String(time.getHours());
  document.getElementById("m").textContent = String(time.getMinutes());
  document.getElementById("s").textContent = String(time.getSeconds());
  document.getElementById("w").textContent = days[time.getDay()];
  document.getElementById("mo").textContent = months[time.getMonth()];
  document.getElementById("d").textContent = String(time.getDate());
  document.getElementById("y").textContent = String(time.getFullYear());
}

setInterval(clock, 1000);
clock();
