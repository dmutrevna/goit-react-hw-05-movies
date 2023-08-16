import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchMovieCredits } from 'service/Api';
import { useHttp } from 'service/useHttp';
import noFoundImage from './../Image/image_not_found.jpg';
import { MovieCastList } from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts] = useHttp(fetchMovieCredits, movieId);

  if (casts.length === 0) {
    return <p>We don`t have any casts for this movie.</p>;
  }

  return (
    <div>
      <MovieCastList>
        {casts &&
          casts.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : `${noFoundImage}`
                }
                alt={cast.name}
                width="150"
                height="225"
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </MovieCastList>
    </div>
  );
};

MovieCast.propTypes = {
  movieId: PropTypes.string,
};

export default MovieCast;
