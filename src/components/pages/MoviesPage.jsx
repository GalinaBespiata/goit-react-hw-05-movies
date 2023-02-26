import { useState, useEffect } from 'react';
import { FetchFilmByWord } from '../ApiFetch/FetchFilmIByWord.jsx';
import { FilmsWrap } from 'components/FilmsWrap/FilmsWrap.jsx';
import { SearchForm } from '../SearchForm/SearchForm.jsx';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

import { Loader } from '../Loader/Loader.jsx';

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);

  const [films, setFilms] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await FetchFilmByWord(query);
        setFilms(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(query);
  }, [query]);

  return (
    <div>
      {loading && <Loader />}
      <SearchForm />

      {films.length > 0 ? (
        <FilmsWrap films={films} location={location} />
      ) : (
        <h3 style={{ textAlign: 'center' }}>
          {' '}
          We don`t have movie about this ( ˘︹˘ )
        </h3>
      )}
    </div>
  );
}
