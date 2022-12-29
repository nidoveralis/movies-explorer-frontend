import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { api } from '../../utils/MainApi';

function Profile({onUpdateUser, isOpen}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [buttonState, setButtonState] = React.useState(true);
  const [isValidInputs, setIsValidInputs] = React.useState({});

  React.useEffect(()=>{
   // console.log(currentUser)
    setName(currentUser.name);
    setEmail(currentUser.email);
    console.log(isOpen)
   }, [currentUser])

  function chengeButtonState(e) {
    e.preventDefault();
    setButtonState(!buttonState);
  }

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function editUser(e) {
    e.preventDefault();
    onUpdateUser({name, email});
    chengeButtonState(e)
  }

  return(
    <>
      <Header />
      <main className='profile'>
      <h2 className='profile__title'>Привет, {name}!</h2>
      <form className='profile-info' onSubmit={editUser}>
        <fieldset className='profile-info__fieldset'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>Имя</p>
          <input name='name' type='text' className='profile-info__input profile-info__subtitle' value={name} disabled={buttonState} onChange={handleNameInput} />
        </fieldset>
        <fieldset className='profile-info__fieldset'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>E-mail</p>
          <input name='email' type='text' className='profile-info__input profile-info__subtitle' value={email} disabled={buttonState} onChange={handleEmailInput} />
        </fieldset>
          <div className='profile__links'>
            <p></p>
            {buttonState ? <input type='button' value='Редактировать' className='profile__link'  onClick={chengeButtonState} /> :
            <input type='submit' value='Сохранить' className='profile__button-submit' />}
            {buttonState &&<a href='/' className='profile__out'>Выйти из аккаунта</a>}
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