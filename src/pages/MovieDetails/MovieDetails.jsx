import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieDetails } from 'service/Api';
import { useHttp } from 'service/useHttp';
import noFoundImage from 'components/Image/image_not_found.jpg';
import {
  MovieDescriptionContainer,
  MovieDescriptionStyled,
  MovieDetailsContainer,
  MovieImageStyled,
  MovieListCast,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails] = useHttp(fetchMovieDetails, movieId);
  const location = useLocation();

  if (movieDetails?.length === 0) return null;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const userScore = Math.round(Number(vote_average) * 10);

  return (
    <>
      <MovieDetailsContainer>
        <Link to={location.state?.from || '/'}>
          <button> &#8592; Go back</button>
        </Link>
        <MovieDescriptionContainer>
          <MovieImageStyled
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `${noFoundImage}`
            }
            alt={title}
            width="200"
          />
          <MovieDescriptionStyled>
            <h2>
              {title} ({new Date(release_date).getFullYear()})
            </h2>
            <p>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </MovieDescriptionStyled>
        </MovieDescriptionContainer>

        <hr />
        <div>
          <h4>Additional information</h4>
          <ul>
            <MovieListCast>
              <Link to="cast">Cast</Link>
            </MovieListCast>
            <MovieListCast>
              <Link to="reviews">Reviews</Link>
            </MovieListCast>
          </ul>
        </div>
        <Outlet />
      </MovieDetailsContainer>
    </>
  );
};

export default MovieDetails;
