const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function getGames() {

  try {
    const response = await fetch(url);
    const data = await response.json();
    const allGames = data.results;
    
    resultsContainer.innerHTML = "";

    for (let i = 0; i < allGames.length; i++) {

      const gameName = allGames[i].name;
      const platforms = allGames[i].platforms;
      const genres = allGames[i].genres;
      const rating = allGames[i].rating;
      let getDate = new Date(allGames[i].released);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(getDate)
      const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(getDate)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(getDate)
      const dateReleased = `${mo} ${da}, ${ye}`;

      // platforms.forEach(element => element.platform.name)
      for (let i = 0; i < platforms.length; i++) {
        var platformName = platforms[i].platform.name;
        // console.log(platformName)
      }
      for (let i = 0; i < genres.length; i++) {
        var gameGenres = genres[i].name;
      }

      console.log(dateReleased)
    }
    }
    catch(error) {
    resultsContainer.innerHTML = displayError("An error occured when calling API")
  }
}

getGames()