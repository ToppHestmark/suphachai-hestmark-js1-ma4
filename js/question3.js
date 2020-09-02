const detailsContainer = document.querySelector(".detailsContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.rawg.io/api/games/" + id;


async function getDetails() {

  try {
    const response = await fetch(url);
    const details = await response.json();

    const getDate = new Date(details.released);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(getDate)
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(getDate)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(getDate)
    const dateReleased = `${mo} ${da}, ${ye}`;

    detailsContainer.innerHTML = `<div class="details_result">
    <a class="going_back_link" href="question2.html">Back to game cards</a>
    <h2 class="game_name">${details.name}</h2>
    <img class="background-image" src="${details.background_image}" alt="${details.name}">
    <div class="details_description">${details.description}</div>
    <p><strong>Date released:</strong> <time class="details-date">${dateReleased}</time></p>
    </div>`
  }
  catch(error) {
    detailsContainer.innerHTML = displayError("An error occured when calling API");
  }
}

getDetails()