// import { useLocation } from 'react-router-dom';
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
