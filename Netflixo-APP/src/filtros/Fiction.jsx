import React, { useEffect, useState } from "react";
import './Movies.css'

const Adventure = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function fetchMoviesByGenres() {
      const apiKey = 'db97faa4d80f90ffe83589ef95873814';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };

      return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=db97faa4d80f90ffe83589ef95873814&language=en', options)
        .then(response => response.json())
        .then(genresResponse => {
          const genreIds = genresResponse.genres.map(genre => genre.id);

          return fetch("https://api.themoviedb.org/3/discover/movie?api_key=db97faa4d80f90ffe83589ef95873814&with_genres=878", options)
            .then(moviesResponse => moviesResponse.json())
            .then(movies => {
              // Agora você tem a lista de filmes que correspondem aos gêneros
              setMovies(movies.results);
            });
        });
    }

    fetchMoviesByGenres();
  }, []);

  return (
    <div className="poster">
      <h1>Ficção:</h1>
      <div className="movie-posters">
        {movies.map(movie => (
          <div key={movie.id} className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adventure;
