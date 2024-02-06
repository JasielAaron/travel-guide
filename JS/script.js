const url = 'https://restcountries-v1.p.rapidapi.com/name/norge';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be9da737c0msh49f0425bae1e0c1p1d6cb7jsn18019f439184',
		'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

