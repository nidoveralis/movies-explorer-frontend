import './MoviesCard.css';
import Img from '../../images/pic__COLOR_pic1.jpg';
import logoCardSaved from '../../images/logo__saved.svg';
import logoCardDelete from '../../images/logo__cardDel.svg';

function MoviesCard() {

  const imgContent = 'Название фильма'
  const buttonCardContentTitle = <p className='moviesCard-button__title'>Сохранить</p>;
  const buttonCardContentSave = <img className='moviesCard-button__logo-saved' src={logoCardSaved} alt='Фильм сохранён' />;
  const buttonCardContentRemove = <img className='moviesCard-button__logo-saved' src={logoCardDelete} alt='Удалить фильм' />;

  //saved?lo:p
  return(
    <div className='moviesCard'>
      <button className='moviesCard-button moviesCard-button_remove'>{buttonCardContentRemove}
      </button>
      <img  className='moviesCard__img' src={Img} alt={imgContent}/>
      <p className='moviesCard__title'>33 слова о дизайне</p>
      <div className='moviesCard__time'>1ч 17м</div>
    </div>
  )
}

export default MoviesCard;