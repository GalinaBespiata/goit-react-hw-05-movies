import axios from 'axios';

export const FetchActorsOfFilm = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=004aa31770cc2729c6dd319813b8b5dc&language=en-US`
  );

  return data.cast.map(({ credit_id, character, id, name, profile_path }) => {
    return { credit_id, character, id, name, profile_path };
  });
};
