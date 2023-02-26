import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchActorsOfFilm } from 'components/ApiFetch/FetchActorsOfFilm';
import { Loader } from 'components/Loader/Loader.jsx';

export const CastPage = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    const getData = async movieId => {
      try {
        setLoading(true);

        const data = await FetchActorsOfFilm(movieId);

        setCastInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData(movieId);
  }, [movieId]);

  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {loading && <Loader />}
      {castInfo.length > 0 ? (
        <ul>
          {castInfo.map(({ credit_id, character, id, name, profile_path }) => {
            return (
              <li key={credit_id} style={{ display: 'flex', margin: '20px' }}>
                <img
                  width={'50px'}
                  src={`${BASE_URL}${profile_path}`}
                  alt={castInfo.name}
                />

                <p style={{ marginLeft: '10px' }}> {name}</p>
                <p> (Character {character})</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ margin: '10px' }}>We have not reviews for this movie now</p>
      )}
    </>
  );
};
