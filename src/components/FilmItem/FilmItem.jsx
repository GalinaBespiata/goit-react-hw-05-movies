import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from '../FilmItem/FilmItem.module.css';

export const FilmItem = ({ id, name, location }) => {
  console.log(id);
  return (
    <li>
      <Link state={{ from: location ?? '/' }} to={`/movies/${id}`}>
        <p className={css.trendFilm}>{name}</p>
      </Link>
    </li>
  );
};

// FilmItem.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   poster: PropTypes.string,
//   overview: PropTypes.string,
//   genres: PropTypes.shape({}),
//   location: PropTypes.shape({}),
// };
