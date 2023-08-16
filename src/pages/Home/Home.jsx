import React from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'service/useHttp';
import { fetchTrendingMovies } from 'service/Api';
import { MoviesTitleStyled } from './Home.styled';

const Home = () => {
  const [movies] = useHttp(fetchTrendingMovies);
  return (
    <>
      <MoviesTitleStyled>Trending today</MoviesTitleStyled>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
