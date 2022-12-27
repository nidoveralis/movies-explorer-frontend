import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile() {
  const userContext = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('Виталий');

  return(
    <>
      <Header />
      <main className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile-info'>
        <fieldset className='profile-info__fieldset'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>Имя</p>
          <input type='text' className='profile-info__input profile-info__subtitle' value={name} />
        </fieldset>
        <fieldset className='profile-info__fieldset'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>E-mail</p>
          <input type='text' className='profile-info__input profile-info__subtitle' value={'pochta@yandex.ru'} />
        </fieldset>
          <div className='profile__links'>
            <a href='/#' className='profile__link'>Редактировать</a>
            <a href='/' className='profile__link profile__link_out'>Выйти из аккаунта</a>
            <input type='submit' value='Сохранить' className='profile__button-submit' />
        </div>
      </form>
    </main>
    </>
  )
}

export default Profile;