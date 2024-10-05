function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'b6158887c447498853e8074eb0657c75';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
        });
}
