let currentTime = new Date();

function currentInfo(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuestday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let min = now.getMinutes();

  let formattedDate = `${day} ${hour}:${min}`;
  return formattedDate;
}
console.log(currentInfo(currentTime));

let update = document.querySelector("#dayTime");
update.innerHTML = currentInfo(currentTime);

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");

  let newCity = document.querySelector("#city");
  let cityValue = `${cityInput.value}`;
  newCity.innerHTML = `${cityValue}`;
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&apiid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  let cityTemperature = Math.round(response.data.main.temp);
  console.log(cityTemperature);
  let currentTemperature = document.querySelector("#unit");
  currentTemperature.innerHTML = `${cityTemperature}°C`;
  let newCity = document.querySelector("#city");
  newCity.innerHTML = response.data.name;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function searchLocation(position) {
  let latitude = position.coords.latitude;
  console.log(latitude);
  let longitude = position.coords.latitude;
  console.log(longitude);
  alert(
    `Your current location coordinates are ${latitude} latitude and ${longitude} longitude`
  );
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&apiid=${apiKey}`).then(showTemperature);
}

function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let cityLocation = document.querySelector("#location-button");
cityLocation.addEventListener("click", showPosition);
