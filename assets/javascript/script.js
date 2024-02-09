
var countryInput = document.getElementById('destinationInput'),
    searchButton = document.getElementById('searchButton'),
    search_result = document.getElementById('search_result'),
    names = document.getElementById('name'),
    capital = document.getElementById('capital'),
    population = document.getElementById('population'),
    continent = document.getElementById('continent'),
    language = document.getElementById('language'),
    currency = document.getElementById('currency'),
    currencyShort = document.getElementById('currencyShort')
    flag = document.getElementById('flag');

searchButton.addEventListener('click', () => {
    var countryName = countryInput.value;
    var finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalUrl);
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
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
