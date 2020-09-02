const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function getGames() {

  try {
    const response = await fetch(url);
    const data = await response.json();
    const allGames = data.results;
    
    createGamesHtml(allGames)
    
    }
    catch(error) {
    resultsContainer.innerHTML = displayError("An error occured when calling API");
  }
}

getGames()


function createGamesHtml(allGames) {
  const loading = document.querySelector(".lds-ellipsis");
  loading.classList.remove("lds-ellipsis");

  allGames.forEach(game => {
    const gameName = game.name;
    const rating = game.rating;
    const gameId = game.id;
    const getDate = new Date(game.released);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(getDate)
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(getDate)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(getDate)
    const dateReleased = `${mo} ${da}, ${ye}`;

    resultsContainer.innerHTML += `<a href="./question3.html?id=${gameId}" class="card">
    <h2>${gameName}</h2>
    <p><strong>Date released:</strong> ${dateReleased}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    </a>`
  });
}