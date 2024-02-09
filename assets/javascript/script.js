
var countryInput = document.getElementById('destinationInput'),
    searchButton = document.getElementById('searchButton'),
    search_result = document.getElementById('search_result'),
    names = document.getElementById('name'),
    capital = document.getElementById('capital'),
    population = document.getElementById('population'),
    continent = document.getElementById('continent'),
    language = document.getElementById('language'),
    currency = document.getElementById('currency'),
    currencyShort = document.getElementById('currencyShort'),
    flag = document.getElementById('flag'),
    weatherType = document.getElementById('weathertype'),
    humidity = document.getElementById('humidity'),
    tempurature = document.getElementById('tempurature');


searchButton.addEventListener('click', () => {
    var countryName = countryInput.value;
    var finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    var apiKey = "c5d5bd29e5a676607bc7d035896618eb"
    
    console.log(finalUrl);
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            getCurrentWeather(data[0].capital)
            console.log(data);

            countryData = data[0]
            names.innerHTML = countryData.name.common
            capital.innerHTML = countryData.capital
            population.innerText = countryData.population
            continent.innerHTML = countryData.continents
            language.innerHTML = Object.values(countryData.languages).toString().split(',').join(',')
            currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name
            currencyShort.innerHTML = Object.keys(countryData.currencies)[0]
            flag.src = countryData.flags.svg;


         })
         function getCurrentWeather(capital) {
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + capital + "&appid=" + apiKey + "&units=imperial";
            fetch(url)
              .then(function (response) {
                return response.json()
              }).then(function (data) {
                console.log('weather data', data);
                weatherType.innerHTML = data.weather[0].description
                tempurature.innerHTML = data.main.temp
                humidity.innerHTML = data.main.humidity

                
            
              
          
          
             })
              
          }


})

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
});

function closeModal() {
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    
    modal.style.display = "none";
    overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
});

function closeModal() {
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    
    modal.style.display = "none";
    overlay.style.display = "none";
}
