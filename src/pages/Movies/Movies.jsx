import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'service/Api';
import { useHttp } from 'service/useHttp';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchFrom from 'components/MoviesSearchFrom/MoviesSearchFrom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies] = useHttp(fetchSearchMovies, query);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);

  const handleSubmit = query => {
    setSearchParams({ query });
    setIsSearchExecuted(true);
  };

  return (
    <>
      <MoviesSearchFrom handleSubmit={handleSubmit} />
      {isSearchExecuted && movies.length === 0 ? (
        <p>No movies found for the current search query.</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </>
  );
};

export default Movies;
