import { fetchTrendingToday } from 'services/fetchApi';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { mapper } from 'utils/mapper';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
        setIsLoading(true);
      try {
        const trendingToday = await fetchTrendingToday();
        setMovies(...mapper(trendingToday))
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    };

    fetchMovies()
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
        {error && <p>Sorry, we can't process your request! Please, repeat.</p>}
    </div>
  );
};
