import {
  NavLink,
  Link,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from '../pages/FilmPage.module.css';
import { fetchFilmsInfo } from '../ApiFetch/FetchFilmInfo.jsx';
import { CastPage } from './CastsPage/CastsPage.jsx';
import { ReviewsPage } from './Reviews/ReviewsPage';
import { Loader } from '../Loader/Loader.jsx';

export default function FilmPage() {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        setLoading(true);

        const data = await fetchFilmsInfo(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  if (movieInfo) {
    const { title, vote_average, overview, genres, poster_path } = movieInfo;

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {loading && <Loader />}
        <Link to={location.state?.from ?? '/'} style={{ marginLeft: '20px' }}>
          {' '}
          Go back
        </Link>
        <div className={css.itemBlock}>
          <div className={css.posterBlock}>
            {poster_path ? (
              <img
                src={`${BASE_URL}${poster_path}`}
                alt={title}
                className={css.filmPoster}
              />
            ) : (
              <p
                style={{
                  fontSize: '14px',
                  marginTop: '20px',
                  textAlign: 'center',
                }}
              >
                There are NO poster , sorry ¯\_( ͡❛ ͜ʖ ͡❛)_/¯
              </p>
            )}
          </div>
          <div className={css.descriptionBlock}>
            <h2 className={css.filmTitle}>{title}</h2>
            <p className={css.textTitle}>OverView</p>
            <p>User score : {Math.round(vote_average)}/10</p>

            <p className={css.filmOverview}>{overview}</p>
            <p className={css.textTitle}>Genres</p>
            {genres.map(({ id, name }) => {
              return (
                <p className={css.filmGenre} key={id}>
                  {name}
                </p>
              );
            })}
          </div>
        </div>
        <div className={css.additionalInfo}>
          <p className={css.linkTitle}>Additional information</p>
          <NavLink
            state={{ from: location.state?.from ?? '/' }}
            to="casts"
            className={css.link}
          >
            Casts
          </NavLink>
          <NavLink
            state={{ from: location.state?.from ?? '/' }}
            to="reviews"
            className={css.link}
          >
            Reviews
          </NavLink>
          <Routes>
            <Route path="casts" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}
