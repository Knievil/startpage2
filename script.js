const url = `https://api.thecatapi.com/v1/breeds`;

const api_key = "live_lug2kdmJewYN12tTkKjOoqTD8kRnFHw4scGqYYYPTXmfIYOBgNCatnJD4nVjgjtk";

// a variable to store the information about the breeds

let storedBreeds = [];

// a function to select a random breed

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


// a function to show images and information of the breeds
function showCatImageAndInformation(index) {

// This will display the image of the cat
  document.getElementById("cat_image").src = storedBreeds[index].image.url;

// This will get the breed name
  document.getElementById("breed_name").innerHTML = storedBreeds[index].name;

// This will get the wiki link
  document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;

  document.getElementById("wiki_link").innerHTML =
    storedBreeds[index].wikipedia_url;  

// This will get the characteristics of the cat
  document.getElementById("breed_json").textContent =
    storedBreeds[index].temperament;
}


// a function to retrieve data from the API
fetch(url, {
  headers: {
    "x-api-key": api_key,
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Storing the retrieved data from the API in our variable
    storedBreeds = data;


    // Using the random function to select a specific breed. Then extracting information from that breed
    showCatImageAndInformation(getRandomInt(0, storedBreeds.length - 1));
  })
  .catch(function (error) {
    console.log(error);
  });


  // weather //

  function changeWeather () {
    var input = document.getElementById('weather-input');
    var img = document.getElementById('weather-img');
    img.src =
        'https://wttr.in/' + input.value +
        '_' + weatherOptions
        + '.png';
    img.alt = weatherImgAlt + input.value;
    input.value = '';
}

document.getElementById('weather-btn').onclick = function () {
    changeWeather();
}

document.getElementById('weather-form').onkeypress = function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      changeWeather();
    }
}

var weatherOptions = '0pq_transparency=200_lang=en';
var weatherImgAlt = 'Current weather in ';