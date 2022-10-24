import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const MoviesInfo = ({ movieInfo }) => {
  const {
    title,
    release_date,
    vote_average,
    overview,
    status,
    poster_path,
    popularity,
    vote_count,
    genres,
    spoken_languages,
  } = movieInfo;
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={() => navigation(location?.state?.from || '/')}
      >
        Go Back
      </button>
      <h2>{title} ({new Date(release_date).getFullYear()})</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Status Release</h3>
      <p>{status}</p>
      <h3>Languages:</h3>
      {/* <p>{spoken_languages.map(({name}) => name).join(" ")}</p> */}
      <h3>Film Popularity</h3>
      <p>Rating score: {Math.round(popularity)}</p>
      <p>Vote count: {vote_count}</p>
      <h3>Genres</h3>
      {/* <p>{genres.map(({name}) => name).join(" ")}</p> */}
      
    <h3>Additional information</h3>
    <nav>
                <ul>
                    <li>
                        <NavLink to="cast" end className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Reviews</NavLink>
                    </li>
                </ul>
            </nav>
    </>
  );
};
