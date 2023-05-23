const api_url = 'https://wttr.in/?format=j1';

async function getWeather() {
	const response = await fetch(api_url);

	const data = await response.json();

	const weather = data.current_condition[0];

	let temp = weather.temp_C;

	document.getElementById('temp').innerHTML = 'temp:' + temp;
}
getWeather();
