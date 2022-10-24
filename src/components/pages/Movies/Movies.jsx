import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchMoviesRequest } from 'services/fetchApi';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('searchQuery');

  useEffect(() => {
    const getMovieSearchRequest = async query => {
      try {
        setIsLoading(true);
        const searching = await fetchMoviesRequest(query);
        setMovies(searching);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!query) {
      return;
    }
    getMovieSearchRequest(query);
  }, [query]);

  const onSubmit = event => {
    event.preventDefault();

    setSearchParams({ searchQuery });
    setMovies([]);
  };

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Search</label>
        <input type="text" placeholder="enter your request" onChange={handleChange}/>
        <button type="button">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <p>Sorry, we can't process your request! Please, repeat.</p>}
      {movies && <MoviesList movies={movies} />}
      <Outlet/>
    </div>
  );
};

export default Movies;
