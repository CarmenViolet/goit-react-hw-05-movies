import { Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchApi';
import { useState, useEffect, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { MoviesInfo } from 'components/MoviesInfo/MoviesInfo';

const MovieDetails = () => {
  const [movieDetails, setMovieDetail] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieInformation = async movieId => {
      setIsLoading(true);
      try {
        const movieInformation = await fetchMovieDetails(movieId);
        setMovieDetail(movieInformation);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieInformation(movieId);
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Sorry, we can't process your request! Please, repeat.</p>}
      {movieDetails && <MoviesInfo movieInfo={movieDetails} />}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
