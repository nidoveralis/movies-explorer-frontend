import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox({onClickChechbox, sliderClick}) {
  console.log(sliderClick)
  const tumblrStatusClassName = `filter-tumblr ${sliderClick ? "filter-tumblr_active" : ""} `;
  const sliderStatusClassName = `filter-tumblr__slider ${sliderClick ? "filter-tumblr__slider_active" : ""} `;
  
  return(
    <div className='filter'>
      <div className={tumblrStatusClassName} onClick={onClickChechbox} >
        <div className={sliderStatusClassName} ></div>
        <input type='checkbox' className='filter-tumblr__checkbox' ></input>
      </div>
      
      <p className='filter__title'>Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;

//<input type='checkbox' className='filter__checkbox'></input>