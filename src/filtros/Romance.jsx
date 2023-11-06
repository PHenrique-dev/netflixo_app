import React, { useEffect, useState } from "react";
import './Movies.css'
import { AiFillStar } from 'react-icons/ai';
import MovieCard from "../components/MovieCard";

const Romance = () => {
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

          return fetch("https://api.themoviedb.org/3/discover/movie?api_key=db97faa4d80f90ffe83589ef95873814&with_genres=10749", options)
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
      <h1>Filmes de Romance:</h1>
      <div className="movie-posters">
      {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Romance;
