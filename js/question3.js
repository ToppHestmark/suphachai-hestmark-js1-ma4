const detailsContainer = document.querySelector(".detailsContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.rawg.io/api/games/30713";


async function getGame() {

  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details)

    detailsContainer.innerHTML = `
    <h1>${details.name}</h1>
    <img class="background-image" src="${details.background_image}" alt="${details.name}">
    <div>${details.description}</div>
    <time class="details-date">${details.released}</time>
    <p></p>`
  }
  catch(error) {
    detailsContainer.innerHTML = displayError("An error occured when calling API");
  }
}

getGame()