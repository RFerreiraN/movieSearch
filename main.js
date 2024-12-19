// Asiganarle la clase activa a las listas

let links = document.querySelectorAll('.menu-left a');

links.forEach(link => {
    link.addEventListener('click', function(){
        links.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});


// Buscador pagina principal

let buttonSearch = document.getElementById('searchButton');
buttonSearch.addEventListener('click' , searchMovies);

let apiKey = '755ce7a7d4fe1b26cff21b7995d49852';
let urlApi =  'https://api.themoviedb.org/3/search/movie';
let urlImage = 'https://image.tmdb.org/t/p/w200';


function searchMovies(){
    let inputSearch = document.getElementById('searchInput').value;
    
    fetch(`${urlApi}?api_key=${apiKey}&query=${inputSearch}`)
        .then( response => response.json())
        .then( response => displayMovies(response.results))
}

//Funcion para manejar los datos 

function displayMovies(movies){
    let cardsMovies = document.getElementById('cards-movies');
    cardsMovies.innerHTML = '';
    
    if (movies.length === 0){
        alert('Película no encontrada')
        return;    
    }

    movies.forEach(movie => {

        let divCard = document.createElement('div');
        divCard.className = 'cards-style';
        
        let imgMovie = document.createElement('img');
        let imgPath = urlImage + movie.poster_path
        imgMovie.src = imgPath;
        imgMovie.alt = movie.title;

        let titleMovie = document.createElement('h2');
        titleMovie.textContent = movie.title;

        let descriptionMovie = document.createElement('p');
        descriptionMovie.textContent = movie.overview;

        let link = document.createElement('a');
        link.href = 'detalles.html?id=' + movie.id;
        link.textContent = '+ Detalles';
        
        divCard.appendChild(imgMovie);
        divCard.appendChild(titleMovie);
        divCard.appendChild(descriptionMovie);
        divCard.appendChild(link);
        divCard.classList.add('cards-style');
        cardsMovies.appendChild(divCard);  
    });
};

    