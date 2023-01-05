import React from 'react';
import './SearchForm.css';
import LogeSearch from '../../images/iconlogo__search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({searchValue}) {

  const [sliderStatus, setSliderStatus] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');

  function handleSliderClick() {
    setSliderStatus(!sliderStatus);
  };

  function changeValue(e) {
    setInputValue(e.target.value.toLowerCase());
  };

  function submitForm(e) {
    e.preventDefault();
    searchValue(inputValue);
    setInputValue('');
  };

  return(
    <section className="search">
      <form className="search-form" onSubmit={submitForm}>
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