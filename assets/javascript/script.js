var searchInput = document.querySelector('#input');
var searchButton = document.querySelector('#button');

// Function to fetch country information
function getCountryInfo() {
    var searchValue = searchInput.value; // Get the current value of the search input
    var countryInfoURL = `https://restcountries.com/v3.1/name/${searchValue}`;

    fetch(countryInfoURL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayCountry(data);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

// Function to display country information on the webpage
function displayCountry(data) {
    
    var country = data[0];

    // Update country name
    var countryNameEl = document.getElementById('countryNameResult');
    countryNameEl.textContent = country.name.common; // Adjust according to actual data structure

    // Update capital city
    var capitalEl = document.getElementById('capitalResult');
    capitalEl.textContent = country.capital[0]; // Adjust if necessary

    // Update population
    var populationEl = document.getElementById('populationResult');
    populationEl.textContent = country.population.toLocaleString(); // Converts number to a string with commas

    // Add more updates here as needed for other data points like language, currency, etc.
    // For example, if you have placeholders for language and currency, you can update them here similarly.
}

// Add event listener to the search button to trigger the getCountryInfo function when clicked
searchButton.addEventListener('click', getCountryInfo);