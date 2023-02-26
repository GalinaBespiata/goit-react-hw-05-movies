import PropTypes, { number, string } from 'prop-types';
import { FilmItem } from 'components/FilmItem/FilmItem.jsx';
import css from '../FilmsWrap/FilmsWrap.module.css';

export const FilmsWrap = ({ films, location }) => {
  return (
    <div>
      <ul className={css.filmsWrap}>
        {films.map(({ id, name }) => {
          return <FilmItem location={location} key={id} id={id} name={name} />;
        })}
      </ul>
    </div>
  );
};
FilmsWrap.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: number.isRequired,
      name: string.isRequired,
    }).isRequired
  ).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape().isRequired,
  }),
};
