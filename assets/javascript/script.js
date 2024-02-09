
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










//document.addEventListener('DOMContentLoaded', function() {
//const searchButton = document.getElementById('searchButton');
//searchButton.addEventListener('click', function() {
//const destination = document.getElementById('destinationInput').value;
//fetchCountryInfo(destination);
//});
//});

//function fetchCountryInfo(countryName) {
//const apiKey = '5effe679202bb71692f127fed032bc1b';
//const apiUrl = `https://api.countrylayer.com/v2/name/${countryName}?access_key=${apiKey}`;

//fetch(apiUrl)
//.then(response => {
//if (!response.ok) {
//throw new Error('Network response was not ok');
//}
//return response.json();
//})
//.then(data => {
//if (data && data.length > 0) {
//const country = data[0]; // Assuming the first result is the most relevant
//displayCountryInfo(country);
//} else {
//console.log('No data found for the specified country');
//}
//})
//.catch(error => {
//console.error('There has been a problem with your fetch operation:', error);
//});
//}


//function displayCountryInfo(country) {
//document.getElementById('countryNameResult').textContent = country.name;
//document.getElementById('capitalResult').textContent = country.capital;
//document.getElementById('capitalRes').textContent = country.capital;
// Add more elements as needed, ensuring HTML has corresponding IDs


//}

