const MOVIE_API_KEY = `7ea25495cbb144c7049c981d941af7d5`;

const API_URL = `https://api.themoviedb.org/3/movie/popular?`;

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

let movieContainer = document.querySelector(".movie-container");

const buildTheDom = (results) => {

    results.forEach( movie =>{
        
        movieContainer.innerHTML += `<div class="movie-card">
    
                <input type="hidden">
    
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    alt="movies name">
    
                <div class="info">
    
                    <span class="movie-title">${movie.title}</span>
    
                    <div class="counts">
                        <div class="vote-average">
                            <span>${movie.vote_average}</span>
                            
                        </div>
    
                        <div class="release-date">
                            <span>${movie.release_date}</span>
                        </div>
                    </div>
    
                </div>
    
            </div>`
    } )

       

}

const getMostPopularMovies = async () => {

    const request = await
    fetch(`${API_URL}api_key=${MOVIE_API_KEY}&page=1`);

    const {results} = await request.json();

    console.log(results)

    buildTheDom(results);

}
getMostPopularMovies()