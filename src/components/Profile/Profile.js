import './Profile.css';
import Header from '../Header/Header';

function Profile() {

  return(
    <>
      <Header />
      <main className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <div className='profile-info'>
        <div className='profile-info__conteiner'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>Имя</p>
          <p className='profile-info__subtitle'>Виталий</p>
        </div>
        <div className='profile-info__conteiner'>
          <p className='profile-info__subtitle profile-info__subtitle_bold'>E-mail</p>
          <p className='profile-info__subtitle'>pochta@yandex.ru</p>
        </div>
      </div>
      <div className='profile__links'>
        <a href='/#' className='profile__link'>Редактировать</a>
        <a href='/#' className='profile__link profile__link_out'>Выйти из аккаунта</a>
      </div>
    </main>
    </>
  )
}

export default Profile;