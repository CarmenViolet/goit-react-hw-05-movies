import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/fetchApi';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieInformation = async movieId => {
      setIsLoading(true);
      try {
        const castSearch = fetchCast(`${movieId}/credits`);
        setCast(castSearch);
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
      {cast && (
        <ul>
            {cast.map(({id, name, gender, profile_path, character}) => { return (
                <li key={id}>
                    <img src={profile_path} alt={name} />
                    <h3>Actor's name: {name}</h3>
                    <p>{gender}</p>
                    <p>Character: {character}</p>
                </li>
            )})}
        </ul>
      )}
    </>
  );
};
