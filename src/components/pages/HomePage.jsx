import { useState, useEffect } from 'react';
import { FetchTrendingFilms } from '../ApiFetch/FetchTrendingFilms.jsx';
import { FilmsWrap } from 'components/FilmsWrap/FilmsWrap.jsx';
import { Loader } from '../Loader/Loader.jsx';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await FetchTrendingFilms();
        setFilms(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <h2 style={{ margin: '20px', color: '#79ad79' }}>Trending today</h2>
      {films.length && <FilmsWrap films={films} />}
    </>
  );
}
