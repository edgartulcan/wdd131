const year = document.getElementById("currentyear");
const weather = document.querySelector(".weather");

const today = new Date();

const temperature = 50; // temperature in °F
const windSpeed = 5; // wind speed in mph
let windChill = "N/A";

if(temperature <= 50 && windSpeed > 3){
    windChill = calculateWindChill(temperature,windSpeed).toFixed(1);
}

let weatherInfo = [
    ["Temperature(°F):",temperature],
    ["Conditions:", "Partly Cloudy"],
    ["Wind(mph):",windSpeed],
    ["Wind Chill(°F):", windChill]
]

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

function calculateWindChill(temp, windSpeed){
    // if temperature is less than or equal to 50 °F and wind speed is greater than 3 mph than perform calculation
    return (35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp *(windSpeed**0.16)));
}

windchill = calculateWindChill(temperature, windSpeed);

weatherInfo.forEach(function(info){
    const label = document.createElement("label");
    const p = document.createElement("p");

    label.textContent = info[0];
    p.textContent=info[1];
    weather.append(label);
    weather.append(p);
})