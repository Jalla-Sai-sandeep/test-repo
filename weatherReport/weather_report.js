function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = '4e6e4fd4bc16afdd7124cee5e588cc54';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      const tempCelsius = (data.main.temp - 273.15).toFixed(2);

      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${tempCelsius} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
