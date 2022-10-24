import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchApi';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieInformation = async movieId => {
      setIsLoading(true);
      try {
        const castSearch = fetchReviews(`${movieId}/reviews`);
        setReviews(castSearch);
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
      {reviews && (
        <ul>
          {reviews.map(({ id, results }) => {
            return (
              <li key={id}>
                <h3>{results.map(({ author }) => author)}</h3>
                <p>{results.map(({ content }) => content)}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
