import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import noFoundImage from 'components/Image/image_not_found.jpg';
import {
  MoviesImgStyled,
  MoviesItemStyled,
  MoviesListStyled,
  MoviesSubtitleStyled,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MoviesListStyled>
        {movies.map(movie => (
          <MoviesItemStyled key={movie.id}>
            <MoviesSubtitleStyled>{movie.title}</MoviesSubtitleStyled>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviesImgStyled
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `${noFoundImage}`
                }
                alt={movie.title}
              />
            </Link>
          </MoviesItemStyled>
        ))}
      </MoviesListStyled>
    </div>
  );
};

export default MoviesList;
