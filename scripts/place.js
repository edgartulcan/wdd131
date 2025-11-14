document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WEATHER VALUES (estáticos por ahora)
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("speed").textContent);

// Wind Chill Formula (Celsius)
function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  );
}

// VALIDATION RULES (Metric)
if (temperature <= 10 && windSpeed > 4.8) {
  const wc = calculateWindChill(temperature, windSpeed).toFixed(1);
  document.getElementById("windchill").textContent = `${wc} °C`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}