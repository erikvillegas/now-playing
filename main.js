async function fetchMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const options = {
    headers: {
      Authorization: "Bearer TOKEN",
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();

  return json.results;
}

const results = await fetchMovies();

const unorderedList = document.getElementById("movies");

for (const result of results) {
  const poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
  const imgElement = `
    <img class='poster-image' src=${poster}/>
  `;
  unorderedList.insertAdjacentHTML("beforeend", imgElement);
}

const imageElements = document.querySelectorAll(".poster-image");
console.log(imageElements);

imageElements.forEach((linkElement, index) => {
  linkElement.addEventListener("click", () => {
    const titleElement = document.getElementById("title");
    titleElement.innerHTML = results[index].title;

    const sypnosisElement = document.getElementById("sypnosis");
    sypnosisElement.innerHTML = results[index].overview;
  });
});
