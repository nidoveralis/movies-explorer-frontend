import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox({onClickChechbox, sliderClick}) {
  //{onClickChechbox, sliderClick}
  const [sliderStatus, setSliderStatus] = React.useState();
  //console.log(`filter-tumblr ${sliderStatus ? "filter-tumblr_active" : ""} `)
  
  const tumblrStatusClassName = `filter-tumblr ${sliderClick ? "filter-tumblr_active" : ""} `;
  const sliderStatusClassName = `filter-tumblr__slider ${sliderClick ? "filter-tumblr__slider_active" : ""} `;

  function handleSliderClick() {
    console.log(sliderStatus,localStorage.getItem('slider'))
    setSliderStatus(!sliderStatus);
    localStorage.setItem('slider', JSON.stringify(!sliderStatus))
  };
  React.useEffect(()=>{
    if(localStorage.getItem('slider')===null) {
      console.log('pysto')
      setSliderStatus(true)
    } else {
      setSliderStatus(JSON.parse(localStorage.getItem('slider')))
      console.log(sliderStatus,JSON.parse(localStorage.getItem('slider')))
    }
  },[])
  

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