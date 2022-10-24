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
        const reviewsSearch = await fetchReviews(`${movieId}/reviews`);
        setReviews(reviewsSearch.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieInformation(movieId);
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Sorry, we can't process your request! Please, repeat.</p>}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
