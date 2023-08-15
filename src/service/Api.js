import axios from 'axios';

const API_KEY = '10f2241cb45b19eefbefaa60e9f9bf26';
const BASE_URL = `https://api.themoviedb.org/3`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      include_adult: false,
      page: 1,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};
