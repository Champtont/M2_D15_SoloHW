const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWUzY2Q0YmUzZDAwMTU4NDVmZDAiLCJpYXQiOjE2NjgwODMyNjAsImV4cCI6MTY2OTI5Mjg2MH0.uNsrqEp_HPgrPhAwjziunQVeY6iQ11AA-FDwQ5LlOaI";

const getGenres = async () => {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/api/movies", {
      headers: { Authorization: `Bearer ${token}` },
    });
    let genres = await res.json();
    console.log(genres);
  } catch (error) {}
};

const getHorror = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/Horror",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let horrorFlix = await res.json();
    console.log(horrorFlix);
    // horrorFlix.forEach((movie) => {
    //   console.log(movie.imageUrl);
    // });
    await renderHorror(horrorFlix);
  } catch (error) {}
};

const getComedy = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/Comedy",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let funnyFlix = await res.json();
    console.log(funnyFlix);
    renderComedy(funnyFlix);
  } catch (error) {}
};

const getTV = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/Tv",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let tvShows = await res.json();
    console.log(tvShows);
    renderTv(tvShows);
  } catch (error) {}
};

//render function would not allow me to pass value dynamically for section selection. I've wasted too much time here
function renderHorror(Item) {
  const carousel = document.getElementById("horrorFlix");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `
<img class="movie-cover img-fluid m-0" style="width:100%; height:100px; object-fit:cover;" src="${Item.imageUrl}" />
`;
    carousel.appendChild(movieSlide);
    console.log(Item.imageUrl);
  });
}
function renderComedy(Item) {
  const carousel = document.getElementById("funnyFlix");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `
  <img class="movie-cover img-fluid m-0" style="width:100%; height:100px; object-fit:cover;" src="${Item.imageUrl}" />
  `;
    carousel.appendChild(movieSlide);
    console.log(Item.imageUrl);
  });
}
function renderTv(Item) {
  const carousel = document.getElementById("tvShows");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `
  <img class="movie-cover img-fluid m-0" style="width:100%; height:100px; object-fit:cover;" src="${Item.imageUrl}" />
  `;
    carousel.appendChild(movieSlide);
    console.log(Item.imageUrl);
  });
}
