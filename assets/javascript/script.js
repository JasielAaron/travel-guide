// Fixing the typo in the function call
function getCountryInfo() {
    var search = searchInput.value.trim();
    var countryInfo = `https://restcountries.com/v3.1/name/${search}`;

    fetch(countryInfo)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayTravel(data); // Fixed the typo here
        })
        .catch(function (error) {
            console.error('Error fetching data: ', error);
            // You may want to display an error message to the user here
        });
}

// Implementing the displayTravel function to update the webpage with country information
function displayTravel(data) {
    if (!data || data.status === 404) {
        // Handle the case where no data is returned or country is not found
        console.error('Country not found');
        // Update the DOM to reflect the country not found error
        document.getElementById('result').textContent = 'Country not found';
        return;
    }

    // Assuming data is an array of countries and we're interested in the first one
    var country = data[0];
    var countryName = country.name.common; // Get the country name
    var capital = country.capital[0]; // Get the capital city

    // Update the DOM with the country's name and capital
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Country: ${countryName} <br> Capital: ${capital}`;
}

// You would also need to have an element with the id 'result' in your HTML to display the info
// Example: <div id="result"></div>

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