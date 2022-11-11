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

let movieArray = [];

let thisWindow = window.location.search;
const urlParams = new URLSearchParams(thisWindow);
console.log(thisWindow);
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
    await movieArray.push(horrorFlix);
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
    await movieArray.push(funnyFlix);
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
    await movieArray.push(tvShows);
  } catch (error) {}
};

//render function would not allow me to pass value dynamically for section selection. I've wasted too much time here
function renderHorror(Item) {
  const carousel = document.getElementById("horrorFlix");
  const carousel2 = document.getElementById("horrorFlix2");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `<div class="col-12 m-0" style="height:300px">
        <a  onclick="collectTarget(event)"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
        </div>`;
    carousel.appendChild(movieSlide);
    //console.log(Item.imageUrl);
    //Append again
    const movieSlide2 = document.createElement("div");
    movieSlide2.classList.add("col-md-2", "m-0");
    movieSlide2.innerHTML = `<div class="col-12 m-0" style="height:300px">
        <a  onclick="collectTarget(event)"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
       </div>`;
    carousel2.appendChild(movieSlide2);
  });
}
function renderComedy(Item) {
  const carousel = document.getElementById("funnyFlix");
  const carousel2 = document.getElementById("funnyFlix2");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `<div class="col-12 m-0" style="height:300px">
    <a  onclick="collectTarget(event)"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
    </div>`;
    carousel.appendChild(movieSlide);
    // console.log(Item.imageUrl);
    //append again
    const movieSlide2 = document.createElement("div");
    movieSlide2.classList.add("col-md-2", "m-0");
    movieSlide2.innerHTML = `<div class="col-12 m-0" style="height:300px">
    <a  onclick="collectTarget(event)"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
    </div>`;
    carousel2.appendChild(movieSlide2);
  });
}
function renderTv(Item) {
  const carousel = document.getElementById("tvShows");
  const carousel2 = document.getElementById("tvShows2");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `<div class="col-12 m-0" style="height:300px">
        <a  onclick="collectTarget(event)"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
        </div>`;
    carousel.appendChild(movieSlide);
    //console.log(Item.imageUrl);

    //append again
    const movieSlide2 = document.createElement("div");
    movieSlide2.classList.add("col-md-2", "m-0");
    movieSlide2.innerHTML = `<div class="col-12 m-0" style="height:300px">
        <a onclick="collectTarget(event)"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
        </div>`;
    carousel2.appendChild(movieSlide2);
  });
}

const collectTarget = (event) => {
  console.log(event.target);
};

const loadPage = async () => {
  getGenres();
  await getHorror();
  await getComedy();
  await getTV();
};

let index = loadPage();
console.log(movieArray);
