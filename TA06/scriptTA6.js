function convertToCelsius(temp) {
    let tempC = (temp - 32) / (9 / 5);
    console.log(tempC.toFixed(1));


} convertToCelsius(100);
function convertToFahrenheit(temp) {
    let tempD = (((9 / 5) * temp) + 32);
    console.log(tempD.toFixed(1));
} convertToFahrenheit(93.3);
