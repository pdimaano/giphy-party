"use strict";

console.log("Let's get this party started!");

$("form").on("submit", searchGiphy);

async function searchGiphy(evt) {
  evt.preventDefault();
  let giphyValue = document.querySelector("input").value;
  let response = await axios.get('http://api.giphy.com/v1/gifs/search',
  {params: {q: giphyValue, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}})
  let randomIndex = generateRandomNumber(response.data.data.length);
  console.log(response.data.data)
}

function generateRandomNumber(arrayLength) {
  let randomNum = Math.floor(Math.random() * arrayLength);
  return randomNum;
}

function appendGiphy(urlString) {
  let giphy = document.createElement("img");
  giphy.src = urlString;
  let container = document.getElementById("giphy-container");
  container.append(giphy);
}
