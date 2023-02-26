import axios from 'axios';

export const FetchTrendingFilms = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=004aa31770cc2729c6dd319813b8b5dc'
  );

  return data.results.map(({ id, title }) => {
    return { id, name: title };
  });
};
