import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox({onClickChechbox, sliderClick}) {
  
  const tumblrStatusClassName = `filter-tumblr ${sliderClick ? "filter-tumblr_active" : ""} `;
  const sliderStatusClassName = `filter-tumblr__slider ${sliderClick ? "filter-tumblr__slider_active" : ""} `;
  
  return(
    <div className='filter'>
      <div className={tumblrStatusClassName} onClick={onClickChechbox} >
        <div className={sliderStatusClassName} />
        <input type='checkbox' className='filter-tumblr__checkbox' />
      </div>
      <p className='filter__title'>Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;