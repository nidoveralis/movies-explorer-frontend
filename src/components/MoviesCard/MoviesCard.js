import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import logoCardSaved from '../../images/logo__saved.svg';
import logoCardDelete from '../../images/logo__cardDel.svg';

function MoviesCard({ country, director, duration, year, description, image, trailerLink, thumbnail, owner, id, movieId, nameRU, nameEN, clickCard, removeCard, cards }) {

  const location = useLocation();
  const [statusSaved, setStatusSaved] = React.useState(cards.some(item=>item.movieId === movieId));

  const buttonCardClass = `moviesCard-button ${statusSaved? "moviesCard-button_saved" : ""}`
  const buttonCardContentTitle = <p className='moviesCard-button__title'>Сохранить</p>;
  const buttonCardContentSave = <img className='moviesCard-button__logo-saved' src={logoCardSaved} alt='Фильм сохранён' />;
  const buttonCardContentRemove = <img className='moviesCard-button__logo-saved' src={logoCardDelete} alt='Удалить фильм' />;
  const time = Math.trunc(duration / 60) ? `${Math.trunc(duration / 60)}ч ${duration % 60}м` : `${duration}м`;
  
  function getCard() {
    if(statusSaved) {
      setStatusSaved(false);
      removeCard({ country, director, duration, year, description, image, trailerLink, thumbnail, owner, id, movieId, nameRU, nameEN });
    }else {
      setStatusSaved(true);
      clickCard({ country, director, duration, year, description, image, trailerLink, thumbnail, owner, id, movieId, nameRU, nameEN });
    }
  };

  function removeSavedFilm() {
      clickCard({ country, director, duration, year, description, image, trailerLink, thumbnail, owner, id, movieId, nameRU, nameEN });
  };

  return (
    <div className='moviesCard'>
      {location.pathname === '/saved-movies' && (
        <button className='moviesCard-button moviesCard-button_remove' onClick={removeSavedFilm}>{buttonCardContentRemove}
        </button>
      )}
      {location.pathname === '/movies' && (
        <button className={buttonCardClass} onClick={getCard}>{statusSaved ? buttonCardContentSave : buttonCardContentTitle}
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