import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'service/Api';
import { useHttp } from 'service/useHttp';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchFrom from 'components/MoviesSearchFrom/MoviesSearchFrom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies] = useHttp(fetchSearchMovies, query);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <MoviesSearchFrom handleSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
