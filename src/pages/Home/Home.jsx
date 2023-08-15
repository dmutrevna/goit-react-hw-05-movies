import React from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'service/useHttp';
import { fetchTrendingMovies } from 'service/Api';

const Home = () => {
  const [movies] = useHttp(fetchTrendingMovies);
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
