import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import logoCardSaved from '../../images/logo__saved.svg';
import logoCardDelete from '../../images/logo__cardDel.svg';

function MoviesCard({link, alt, name, time, statusSeved}) {
  const location = useLocation();
  
  const buttonCardClass = `moviesCard-button ${statusSeved ? "moviesCard-button_saved" : ""}`
  const buttonCardContentTitle = <p className='moviesCard-button__title'>Сохранить</p>;
  const buttonCardContentSave = <img className='moviesCard-button__logo-saved' src={logoCardSaved} alt='Фильм сохранён' />;
  const buttonCardContentRemove = <img className='moviesCard-button__logo-saved' src={logoCardDelete} alt='Удалить фильм' />;  

  return(
    <div className='moviesCard'>
      {location.pathname === '/saved-movies' && (
        <button className='moviesCard-button moviesCard-button_remove'>{buttonCardContentRemove}
        </button>
      )}
      {location.pathname === '/movies' && (
        <button className={buttonCardClass}>{statusSeved ? buttonCardContentSave : buttonCardContentTitle}
        </button>
      )}
      <img className='moviesCard__img' src={link} alt={alt}/>
      <p className='moviesCard__title'>{name}</p>
      <div className='moviesCard__time'>{time}</div>
    </div>
  )
}

export default MoviesCard;
