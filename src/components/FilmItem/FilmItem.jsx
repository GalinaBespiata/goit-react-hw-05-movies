import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from '../FilmItem/FilmItem.module.css';

export const FilmItem = ({ id, name, location }) => {
  return (
    <li>
      <Link state={{ from: location ?? '/' }} to={`/movies/${id}`}>
        <p className={css.trendFilm}>{name}</p>
      </Link>
    </li>
  );
};

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape().isRequired,
  }),
};
