const API_KEY = "c9b1e2be6af63ff8c360531f39f8a440";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#location span:first-child");
        const city = document.querySelector("#location span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}`;
        /* Error
            weather.js:12 Uncaught (in promise) TypeError: Cannot set properties of null (setting 'innerText')
            (solve)
            line 10~11 #weather : div id "weather"
            line 12~13 innerText = url path check
        */
});
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);