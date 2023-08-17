let city = document.querySelector("#search input");
let searchIcon = document.querySelector("#searchIcon");
let weatherImg = document.querySelector("#weatherImg");

searchIcon.addEventListener("click", (event) => {
  let cityName = city.value;
  cheackWeather(cityName);
});

async function cheackWeather(city) {
  const apiKey = "c7ec1469a347e034114ce24e32e07e55";
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  let weatherData = await data.json();

  document.querySelector("#cityName").textContent = weatherData.name;
  document.querySelector("#humidityPercent").textContent =
    weatherData.main.humidity + " %";
  document.querySelector("#windSpeed").textContent =
    weatherData.wind.speed + " km/hr";
  
  if (weatherData.weather[0].main == "Clear") {
    weatherImg.src = "./asset/images/clear.png";
  }
  if (weatherData.weather[0].main == "Clouds") {
      weatherImg.src = "./asset/images/clouds.png";
    }
    if (weatherData.weather[0].main == "Drizzle") {
      weatherImg.src = "./asset/images/drizzle.png";
    }
  if (weatherData.weather[0].main == "Humidity") {
    weatherImg.src = "./asset/images/humidity.png";
  }
  if (weatherData.weather[0].main == "Mist") {
    weatherImg.src = "./asset/images/mist.png";
  }
  if (weatherData.weather[0].main == "Rain") {
    weatherImg.src = "./asset/images/rain.png";
  }
  if (weatherData.weather[0].main == "Snow") {
    weatherImg.src = "./asset/images/snow.png";
  }
  document.querySelector("#details").style.display = "block";
}
