import './MoviesCard.css';
import Img from '../../images/pic__COLOR_pic1.jpg';
import logoSaved from '../../images/logo__saved.svg';

function MoviesCard() {

  const buttonCardContentSave = <p className='moviesCard-button__title'>Сохранить</p>;
  const buttonCardContentRemove = <img className='moviesCard-button__logo-saved' src={logoSaved} alt='Фильм сохранён' />;

  //saved?lo:p
  return(
    <div className='moviesCard'>
      <button className='moviesCard-button moviesCard-button_remove'>{buttonCardContentRemove}
      </button>
      <img  className='moviesCard__img' src={Img} />
      <p className='moviesCard__title'>33 слова о дизайне</p>
      <div className='moviesCard__time'>1ч 17м</div>
    </div>
  )
}

export default MoviesCard;