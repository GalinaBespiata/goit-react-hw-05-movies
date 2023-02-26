import axios from 'axios';

export const FetchFilmByWord = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=004aa31770cc2729c6dd319813b8b5dc&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data.results.map(({ id, title }) => {
    return { id, name: title };
  });
};
