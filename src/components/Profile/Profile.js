import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({isLoggedIn, onUpdateUser, closeMenu, isMenuOpen, onSingOut, message}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [buttonState, setButtonState] = React.useState(true);
  const [isValidInput, setIsValidInput] = React.useState(false);
  const [isErrorInput, setIsErrorInput] = React.useState({});
   
  const buttonClass = `profile__button-submit ${isValidInput ? "" : "element-form__button-submit_error"} `;

  React.useEffect(()=>{
    setName(currentUser.name);
    setEmail(currentUser.email);
   }, [currentUser]);

  function chengeButtonState(e) {
    e.preventDefault();
    setButtonState(!buttonState);
  };

  function handleNameInput(e) {
    setName(e.target.value);
    setIsErrorInput({...isErrorInput, [e.target.name]:e.target.validationMessage});
    setIsValidInput(e.target.closest('form').checkValidity());
  };

  function handleEmailInput(e) {
    setEmail(e.target.value);
    setIsErrorInput({...isErrorInput, [e.target.name]:e.target.validationMessage});
    setIsValidInput(e.target.closest('form').checkValidity());
  };

  function editUser(e) {
    e.preventDefault();
    onUpdateUser({name, email});
    chengeButtonState(e)
  };

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile-info' onSubmit={editUser}>
        <fieldset className='profile-info__fieldset'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>Имя</p>
          <input name='name' type='text' className='profile-info__input profile-info__subtitle' value={name} disabled={buttonState} onChange={handleNameInput}  minLength='2' maxLength='40' required  />
        </fieldset>
        <fieldset className='profile-info__fieldset'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>E-mail</p>
          <input name='email' type='text' className='profile-info__input profile-info__subtitle' value={email} disabled={buttonState} onChange={handleEmailInput}  minLength='2' maxLength='40' required />
        </fieldset>
          <div className='profile__links'>
            <span className={`element-form__span ${isErrorInput.name && "element-form__span_error"} `}>При обновлении профиля произошла ошибка.</span>
            {buttonState ? <input type='button' value='Редактировать' className='profile__link'  onClick={chengeButtonState} /> :
            <input type='submit' value='Сохранить' className={buttonClass} onClick={editUser} />}
            {buttonState &&<button className='profile__out' onClick={onSingOut} >Выйти из аккаунта</button>}
        </div>
      </form>
    </main>
    </>
  )
}

export default Profile;
//<a href='/#' className='profile__link'>Редактировать</a>
//<button className='profile__link' >Редактировать</button>
//<input type='submit' value='Сохранить' className='profile__button-submit' />