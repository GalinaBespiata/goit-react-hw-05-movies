import axios from 'axios';

export const FetchReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=004aa31770cc2729c6dd319813b8b5dc&language=en-US&page=1`
  );

  return data.results.map(({ id, author, content }) => {
    return { id, author, content };
  });
};
