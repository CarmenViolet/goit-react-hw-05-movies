import axios from 'axios';
import { transformMovies } from 'utils/transformMovies';

const KEY = 'd4b5d9be5c7b4e34305e1e891f52eaa6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingToday = async () => {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return transformMovies(response.data.results);
};

export const fetchMovieDetails = async id => {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const fetchMoviesRequest = async query => {
    const response = await axios('search/movie', {
        params: {
          api_key: KEY,
          query
        },
      });
    
      return transformMovies(response.data.results);
}



export const fetchCast = async id => {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

