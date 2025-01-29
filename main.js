async function fetchMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmU0NzQ3YjI3OGE1Njg0YWM2MDZiYTcyN2Q5MTgxNCIsIm5iZiI6MTczODE3NTI4OS42MTksInN1YiI6IjY3OWE3MzM5MDRjOGRjMzQ3Y2ZiYjU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j9Ec6-o8gdfShfh6zk2K7tdznG6NSzOh_JkySoH9LiQ",
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
