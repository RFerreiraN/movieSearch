
  /*
  
// Funcionalidad para el detalle de las peliculas en otra pagina

        // Obtener el id de la película desde la URL
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get('id'); // Obtener el id de la película

        const apiKey = '755ce7a7d4fe1b26cff21b7995d49852';
        const urlApi = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

        // Hacer la solicitud para obtener los detalles de la película
        fetch(urlApi)
            .then(response => response.json())
            .then(movie => {
                // Mostrar los detalles de la película
                const movieDetails = document.getElementById('movie-details');
                movieDetails.innerHTML = `
                    <h1>${movie.title}</h1>
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <p><strong>Fecha de estreno:</strong> ${movie.release_date}</p>
                    <p><strong>Sinopsis:</strong> ${movie.overview}</p>
                    <p><strong>Puntuación:</strong> ${movie.vote_average}</p>
                `;
            });

  */
            let param = new URLSearchParams(window.location.search);
            let movieId = param.get('id');

            const api_key = '755ce7a7d4fe1b26cff21b7995d49852';
            const urlApiDetail = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`

            fetch(urlApiDetail)
                .then( response => response.json())
                .then( movie => {
                    console.log(movie)

                    let divDetail = document.getElementById('movie-details');
                    divDetail.className = 'detail-page-card';

                    let movieName = document.createElement('p');
                    movieName.textContent = movie.title;
                    movieName.style.textAlign = 'center';
                    movieName.style.fontSize = '45px';
                    movieName.style.color = '#143642';
                    movieName.style.padding = '5px';

                    let movieImage = document.createElement('img');
                    movieImage.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
                    movieImage.alt = movie.title;

                    let descriptionMovie = document.createElement('p');
                    descriptionMovie.textContent = movie.overview;
                    descriptionMovie.style.fontSize = '20px';
                    descriptionMovie.style.color = '#143642'

                    let release_date = document.createElement('p');
                    release_date.textContent = 'Fecha de estreno: ' + movie.release_date;
                    release_date.style.color = '#0F8B8D';

                    let rankingMovie = document.createElement('p');
                    rankingMovie.textContent = 'Puntuación: ' + movie.vote_average;
                    rankingMovie.style.color = '#0F8B8D';

                    let linkClose = document.createElement('a');
                    linkClose.textContent = '<< Volver';
                    linkClose.href="index.html";

                    divDetail.appendChild(movieName)
                    divDetail.appendChild(movieImage)
                    divDetail.appendChild(descriptionMovie)
                    divDetail.appendChild(release_date)
                    divDetail.appendChild(rankingMovie)
                    divDetail.appendChild(linkClose)

                });