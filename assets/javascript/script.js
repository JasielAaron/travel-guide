
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

// Save country name to local storage
function saveCountryName(name) {
    localStorage.setItem('countryName', name);
}

// Get country name from local storage
function getSavedCountryName() {
    return localStorage.getItem('countryName');
}

// Fetch country and weather data
function fetchCountryAndWeather(countryName) {
    var finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    var apiKey = "c5d5bd29e5a676607bc7d035896618eb"; // Use your actual API key here

    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            var countryData = data[0];
            names.innerHTML = countryData.name.common;
            capital.innerHTML = countryData.capital;
            population.innerText = countryData.population.toLocaleString();
            continent.innerHTML = countryData.continents;
            language.innerHTML = Object.values(countryData.languages).join(', ');
            currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)[0]].name;
            currencyShort.innerHTML = Object.keys(countryData.currencies)[0];
            flag.src = countryData.flags.svg;

            getCurrentWeather(countryData.capital, apiKey);
        })
        .catch((error) => console.error("Failed to fetch country data:", error));
}

// Fetch weather data
function getCurrentWeather(capital, apiKey) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=imperial`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weatherType.innerHTML = data.weather[0].description;
            tempurature.innerHTML = data.main.temp;
            humidity.innerHTML = data.main.humidity;
        })
        .catch((error) => console.error("Failed to fetch weather data:", error));
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    var savedCountryName = getSavedCountryName();
    if (savedCountryName) {
        countryInput.value = savedCountryName;
        fetchCountryAndWeather(savedCountryName);
    }
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
});

// Event listener for the search button
searchButton.addEventListener('click', () => {
    var countryName = countryInput.value.trim();
    if (countryName) {
        saveCountryName(countryName);
        fetchCountryAndWeather(countryName);
    } else {
        console.log("No country name entered.");
    }
});

// Close modal function
function closeModal() {
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    
    modal.style.display = "none";
    overlay.style.display = "none";
}
