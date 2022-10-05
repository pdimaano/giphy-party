"use strict";

$("form").on("submit", searchGiphy);
$('#remove').on('click', removeAllGifs);

/**
 * control function called when form submit:
 * Sends AJAX get request to giphy site based on input form search
 * accesses random gif and appends to DOM
 */
async function searchGiphy(evt) {
  evt.preventDefault();
  let giphyValue = document.querySelector("input").value;
  let response = await axios.get('http://api.giphy.com/v1/gifs/search',
    { params: { q: giphyValue, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' } });
  let randomIndex = generateRandomNumber(response.data.data.length);
  const { url } = response.data.data[randomIndex].images.original;
  appendGiphy(url);
}

/**
 * Input: arrayLength - number
 * Generates a random number from 0 - (arrayLength - 1)
 * Return: randomNum - number
 */
function generateRandomNumber(arrayLength) {
  let randomNum = Math.floor(Math.random() * arrayLength);
  return randomNum;
}

/**
 * Input: urlString - string
 * Appending an image element containing the url for a gif to the giphy-container
 */
function appendGiphy(urlString) {
  let giphy = document.createElement("img");
  giphy.src = urlString;
  let container = document.getElementById("giphy-container");
  container.append(giphy);
}

/**
 * removes all child elements of giphy-container
 */
function removeAllGifs() {
  $('#giphy-container').empty();
}