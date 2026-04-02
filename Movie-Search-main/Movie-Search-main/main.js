// Fetch movie information from the OMDB API
function SubmiteuOnegocio(event) {
  event
  .preventDefault();
  console.log(event.target.Buscando.value);
  displayMovieInfo(event.target.Buscando.value);
  document.querySelector("#sc1").innerHTML="";
}

function displayMovieInfo(filme) {
fetch(`https://www.omdbapi.com/?apikey=e67d05fe&s=${filme}` )
.then((response) => response.json())
.then((data) => {
  const movies = data.Search;

  document.querySelector('.InputL h3').innerHTML= `Filme encontrado`;
  setTimeout(() => {
    
  document.querySelector('.InputL h3').innerHTML= `Movie Search`;
  }, 1000);
  
let i = 1;
const moviesArray = movies.slice(0,5);
moviesArray.forEach(movie => {
  console.log(movie);
    console.log("Filme ", i);
    console.log(movie.Title);
    console.log(movie.Year);
document.getElementById("sc1").innerHTML+= `
  <div class="movieDiv">
<h1>${movie.Title}</h1>
<img src=${movie.Poster}>
<h1>${movie.Year}</h1>
  </div>
`;
    i+=1;
})

})
.catch((error) => {

  
document.querySelector('.InputL h3').innerHTML= `Filme não encontrado`;

setTimeout(() => {
  
document.querySelector('.InputL h3').innerHTML= `Movie Search`;
document.getElementById("sc1").innerHTML=""
}, 1000);
  console.error("Error fetching movie information:", error);
});
  // Function to display movie information or `Movie not found` text
}