import React from 'react';
import './SearchForm.css';
import LogeSearch from '../../images/iconlogo__search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

  const [sliderStatus, setSliderStatus] = React.useState(true);
  function handleSliderClick() {
    setSliderStatus(!sliderStatus);
  }
  return(
    <section className="search">
      <form className="search-form">
        <img src={LogeSearch} alt='Поиск' className="search-form__img" />
        <fieldset className="search-form__fieldset">
          <input placeholder="Фильм" type='text' className="search-form__input"></input>
        </fieldset>
        <button className="search-form__button">Найти</button>
        <span className="search-form__line"></span>
        <FilterCheckbox onClickChechbox={handleSliderClick} sliderClick={sliderStatus}/>
      </form>
    </section>
  )
};

export default SearchForm