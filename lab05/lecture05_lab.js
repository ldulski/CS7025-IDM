// the Javascript logic that will interact with OpenWeatherMap API to fetch the weather data and display it to the user

const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey ='8e9412a50d769c30b458ce48172db123';

$(document).ready(function(){
    weatherFn('Pune');
});

async function weatherFn(cName) {
    const temp = '${url}?q=${cName}&appid=${apiKey}&units=metric';
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        }else{
            alert('City not found. Please try again.');
        }
    } catch (error){
        console.error('Error fetching weather data:', error);
    }
}

//pulling the weather data and printing an error message if the data isn't available

function weatherShowFn(data){
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html('${data.main.temp}°C');
    $('description').text(data.weather[0].description);
    $('#wind-speed').html('Wind Speed: ${data.wind.speed} m/s');
    $('#weather-icon').attr('src', '...');
}

//The url and apiKey variables store the API endpoint and key to access the weather data from OpenWeatherMap.
//The weatherFn function sends a request to the OpenWeatherMap API with the city name (default is "Pune") and retrieves the weather data asynchronously. If the request is successful, it proceeds to display the data.
//If the city is not found or an error occurs, an alert is shown to the user saying "City not found. Please try again."
//The weatherShowFn function updates the webpage with weather details such as the city name, temperature, description, wind speed, and current date/time. It also sets the weather icon (though the icon URL is missing and needs to be added).
//The current date and time are displayed using moment.js, formatted as "Month day, year, time" (e.g., "April 16th 2025, 3:45:00 PM").
