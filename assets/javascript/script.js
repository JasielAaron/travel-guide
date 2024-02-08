
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        const destination = document.getElementById('destinationInput').value;
        fetchCountryInfo(destination);
    });
});

function fetchCountryInfo(countryName) {
    const apiKey = '5effe679202bb71692f127fed032bc1b';
    const apiUrl = `https://api.countrylayer.com/v2/name/${countryName}?access_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                const country = data[0]; // Assuming the first result is the most relevant
                displayCountryInfo(country);
            } else {
                console.log('No data found for the specified country');
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


function displayCountryInfo(country) {
    document.getElementById('countryNameResult').textContent = country.name;
    document.getElementById('capitalResult').textContent = country.capital;
    document.getElementById('capitalRes').textContent = country.capital;
    // Add more elements as needed, ensuring HTML has corresponding IDs


}