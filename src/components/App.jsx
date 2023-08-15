import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
};
