import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';
import {isValidEmail} from '../../utils/utils';

function Form({ title, submitButton, linkTitle, link, formValues, errServer, linkName }) {
  
  const location = useLocation();
  const [isValidInput, setIsValidInput] = React.useState(false);
  const [isValidInputEmail, setIsValidInputEmail] = React.useState(false);
  const [isErrorInput, setIsErrorInput] = React.useState({});
  const [formValue,setFormValue] = React.useState({});
  const buttonClass = `element-form__button-submit ${isValidInputEmail && isValidInput ? "" : "element-form__button-submit_error"} `

  function namesInputValue(e) {
    const input = e.target;
    setIsErrorInput({...isErrorInput, [input.name]:input.validationMessage});
    setFormValue({...formValue, [input.name]:input.value});
    setIsValidInput(e.target.closest('form').checkValidity());
   };

   function emailInputValue(e) {
    const input = e.target; 
    if(isValidEmail(input.value)) {
      setIsErrorInput({...isErrorInput, [input.name]:input.validationMessage});
      setFormValue({...formValue, [input.name]:input.value});
      setIsValidInputEmail(true)
    }else {
      setIsErrorInput({...isErrorInput, [e.target.name]:'Не валидный email'});
      setIsValidInputEmail(false);
    };
   };

  function handleSubmit(e) {
    e.preventDefault();
    formValues(formValue);
  };

  return(
      <section className='element'>
        <Link to='/'>
          <img className="header__logo_form" src={logo} alt="Логотип" />
        </Link>
        <h2 className='element__title'>{title}</h2>
        <form className='element-form' noValidate onSubmit = {handleSubmit} >
          {location.pathname === '/signin'}

          {location.pathname === '/signup' && (
            <fieldset className='element-form__fieldset'>
              <p className='element-form__subtitle'>Имя</p>
              <input name='name' className={`element-form__input ${isErrorInput.name && "element-form__input_error"}`} type='text' minLength='2' maxLength='40' onChange={namesInputValue} required />
              <span className={`element-form__span ${isErrorInput.name && "element-form__span_error"} `}>{isErrorInput.name}</span>
            </fieldset>
          )}
          
          <fieldset className='element-form__fieldset'>
            <p className='element-form__subtitle'>E-mail</p>
            <input name='email' className={`element-form__input ${isErrorInput.mail && "element-form__input_error"}`} type='text' onChange={emailInputValue} required />
            <span className={`element-form__span ${isErrorInput.email && "element-form__span_error"} `}>{isErrorInput.email}</span>
          </fieldset>
          <fieldset className='element-form__fieldset'>
            <p className='element-form__subtitle'>Пароль</p>
            <input name='password' className={`element-form__input ${isErrorInput.password && "element-form__input_error"}`} type='password' onChange={namesInputValue} required />
            <span className={`element-form__span ${isErrorInput.password && "element-form__span_error"} `}>{isErrorInput.password}</span>
          </fieldset>
          <div className='element-form__buttons' >
            <input type='submit' value={submitButton} className={buttonClass} disabled={!isValidInput} />
            <span className='element-form__span_error form-error' >{errServer}</span>
            <p className='element-form__title'>{linkTitle}<a className='element-form__link' href={link}>{linkName}</a></p>
          </div>
        </form>
        
      </section>
  )
}

export default Form;