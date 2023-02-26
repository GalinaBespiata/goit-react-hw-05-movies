import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from '../SearchForm/SearchForm.module.css';

export const SearchForm = () => {
  const [film, setFilm] = useState('');
  const [, setSearchParams] = useSearchParams();
  const reset = () => {
    setFilm('');
  };
  const handleInputChange = evt => {
    
    setFilm(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ query: film });

    reset();
  };

  return (
    <form className={css.formEl} onSubmit={handleSubmit}>
      <label>
        <span className={css.labelName}>What film do you search</span>
        <input
          className={css.inputEl}
          value={film}
          type="text"
          name="film"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>

      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};
