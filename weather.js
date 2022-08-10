let weather = {
    apiKey: '72976b30f81b47621824dc702e2b202b',
    fetchWeather: (city) => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+weather.apiKey)
            .then((response) => response.json()).then((data) => weather.displayWeather(data));
        },
    displayWeather: (data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.temp').innerText = temp;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + 'km/h';
    },
    
    search: () => {
        weather.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search button').addEventListener('click',function() {
    weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup',function(event){
    if (event.key == 'Enter'){
        weather.search();
    }
})

