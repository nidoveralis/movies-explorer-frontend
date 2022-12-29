import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import logoCardSaved from '../../images/logo__saved.svg';
import logoCardDelete from '../../images/logo__cardDel.svg';
import config from '../../utils/utils';

function MoviesCard({ cardId, country, director, duration, year, description, image, trailerLink, thumbnail, owner, movieId, nameRU, nameEN, statusSeved, userId, likeCard }) {

  const location = useLocation();
  const [statusSaved, setStatusSaved] = React.useState(false);

  const buttonCardClass = `moviesCard-button ${statusSaved ? "moviesCard-button_saved" : ""}`
  const buttonCardContentTitle = <p className='moviesCard-button__title'>Сохранить</p>;
  const buttonCardContentSave = <img className='moviesCard-button__logo-saved' src={logoCardSaved} alt='Фильм сохранён' />;
  const buttonCardContentRemove = <img className='moviesCard-button__logo-saved' src={logoCardDelete} alt='Удалить фильм' />;
  const time = Math.trunc(duration / 60) ? `${Math.trunc(duration / 60)}ч ${duration % 60}м` : `${duration}м`;

  function clickCard() {
    console.log(owner)
    setStatusSaved(true)
    likeCard({ country, director, duration, year, description, image, trailerLink, thumbnail, owner, movieId, nameRU, nameEN })
  }

  

  return (
    <div className='moviesCard'>
      {location.pathname === '/saved-movies' && (
        <button className='moviesCard-button moviesCard-button_remove'>{buttonCardContentRemove}
        </button>
      )}
      {location.pathname === '/movies' && (
        <button className={buttonCardClass} onClick={clickCard}>{statusSaved ? buttonCardContentSave : buttonCardContentTitle}
        </button>
      )}
      <a className='moviesCard-link' href={trailerLink} target='_blank'>
        <img className='moviesCard-link__img' src={image} alt={nameRU} />
      </a>
      <p className='moviesCard__title'>{nameRU}</p>
      <div className='moviesCard__time'>{time}</div>
    </div>
  )
}

export default MoviesCard;
//<img className='moviesCard__img' src={`${config.baseUrl+poster}`} alt={name}/>