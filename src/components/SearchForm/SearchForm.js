import React from 'react';
import './SearchForm.css';
import LogeSearch from '../../images/iconlogo__search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({searchMovie, handleSliderClick, sliderStatus}) {

  const [inputValue, setInputValue] = React.useState('');

  function changeValue(e) {
    setInputValue(e.target.value);
  };

  function submitForm(e) {
    e.preventDefault();
    searchMovie(inputValue);
  };

  return(
    <section className="search">
      <form className="search-form" onSubmit={submitForm} noValidate>
        <div className="search-form__conteiner">
          <img src={LogeSearch} alt='Поиск' className="search-form__img" />
          <fieldset className="search-form__fieldset">
            <input placeholder="Фильм" type='text' className="search-form__input" required onChange={changeValue} value={inputValue} />
          </fieldset>
        <button className="search-form__button" type='submit' >Найти</button>
        <span className="search-form__line"></span>
        </div>
        <FilterCheckbox onClickChechbox={handleSliderClick} sliderClick={sliderStatus}/>
      </form>
    </section>
  )
};

export default SearchForm