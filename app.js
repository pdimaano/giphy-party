"use strict";

console.log("Let's get this party started!");

$("form").on("submit", searchGiphy);

async function searchGiphy(evt) {
  evt.preventDefault();
  let giphyValue = document.querySelector("input").value;
  let response = await axios.get('http://api.giphy.com/v1/gifs/search',
  {params: {q: giphyValue, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}})
  console.log(response)
}
