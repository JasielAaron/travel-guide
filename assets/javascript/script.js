var searchInput = document.querySelector('#input');
var searchButton = document.querySelector('#button');

function getCountryInfo() {

        var countryInfo = 'https://restcountries.com/v3.1/name/${search}';

    fetch(countryInfo)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        clear()
        displayCountry(data)
    });
}
function displayCountry(display) {
    var card =document.querySelector('#card');

    var nameEl = document.createElement('h2');
    nameEl.textcontent = display[0].name.official;

    var continentEl = document.createElement('h3');
    continentEl.textContent - "Continent: " + display[0].continent;

    var populationEl = document.createElement('h3');
    populationEl.textContent ="Population: " + display[0].population;

    var capitalEl = document.createElement('h3');
    capitalEl.textContent ="Capital: " + display[0].capital;
    
    card.appendChild(nameEl);
    card.appendChild(capitalEl);
    card.appendChild(continentEl);
    card.appendChild(populationEl);
}