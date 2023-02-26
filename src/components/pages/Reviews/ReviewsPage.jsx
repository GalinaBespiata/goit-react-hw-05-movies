import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchReviews } from 'components/ApiFetch/FetchReviews.jsx';
import { Loader } from 'components/Loader/Loader.jsx';

export const ReviewsPage = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const [reviewsInfo, setReviewsInfo] = useState([]);

  useEffect(() => {
    const getData = async movieId => {
      try {
        setLoading(true);

        const data = await FetchReviews(movieId);

        setReviewsInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviewsInfo.length > 0 ? (
        <ul>
          {reviewsInfo.map(({ id, author, content }) => {
            return (
              <li key={id} style={{ display: 'flex', margin: '20px' }}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{margin: '10px'}}>We have not reviews for this movie now</p>
      )}
    </>
  );
};
