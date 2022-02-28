import React, { useState, createContext, useContext } from 'react';

export const MovieContext = createContext();

export function MovieProvider(props) {
  const [movies, setMovies] = useState([]);

  function addNewMovie(newMovieItem) {
    setMovies([...movies, newMovieItem]);
  }

  function removeMovie(movieId) {
    const newList = movies.filter((movie) => movie.id !== movieId);
    setMovies(newList);
  }

  const contextValue = {
    movies,
    addNewMovie,
    removeMovie,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => useContext(MovieContext);
