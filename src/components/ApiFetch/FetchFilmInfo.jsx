import axios from 'axios';

export const fetchFilmsInfo = async (filmId = '1') => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=004aa31770cc2729c6dd319813b8b5dc&language=en-US`
  );

  return data;
};
