import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {MOVIE_URL, MORE_CARDS_FOR_DESKTOP, SHOW_CARDS_FOR_DESKTOP, MORE_CARDS_FOR_TABLET_AND_PHONE, SHOW_CARDS_FOR_TABLET, SHOW_CARDS_FOR_PHONE} from '../../utils/constant';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCardList({clickCard, removeCard, moviesList, messageForMoviesList, cards}) {

    const location = useLocation();

    const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    const [cardListSize, setCardListSize] = React.useState();
    const [firstSize, setfirstSize] = React.useState();

    const resultCardsList = moviesList.slice(0, firstSize);

    const buttonOtherClass = `moviesCardList__other ${resultCardsList.length === moviesList.length || moviesList.length === setfirstSize  ? 'button-none' : ''} `;

    function plusCards() {
      setfirstSize(firstSize + cardListSize);
    };

    React.useEffect(()=>{
      if(windowSize < 1279) {
        setCardListSize(MORE_CARDS_FOR_TABLET_AND_PHONE)
      }else if (windowSize >= 1280 ) {
        setCardListSize(MORE_CARDS_FOR_DESKTOP)
      }
    },[windowSize]);

    React.useEffect(() => {
    if(windowSize >= 1280) {
      setfirstSize(SHOW_CARDS_FOR_DESKTOP);
    }else if (windowSize < 1280 && windowSize >= 768) {
      setfirstSize(SHOW_CARDS_FOR_TABLET);
    }else if (windowSize < 768) {
      setfirstSize(SHOW_CARDS_FOR_PHONE);
    }
    },[windowSize]);

    React.useEffect(() => {
      function handleWindowResize() {
        setWindowSize(window.innerWidth);
      }
    
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    },[firstSize]);

  return(
    <section className="moviesCardList">
      <div className="moviesCardList__content">
      {location.pathname === '/movies' && ( resultCardsList.length === 0 ? <p className='result-none'>{messageForMoviesList}</p> :
          resultCardsList.map(card=>(
             <MoviesCard 
             key={card.id} 
             country={card.country} 
             director={card.director}
             duration={card.duration}
             year={card.year} 
             description={card.description}
             image={MOVIE_URL+card.image.url} 
             trailerLink={card.trailerLink}
             thumbnail={MOVIE_URL+card.image.formats.thumbnail.url}
             owner={card.owner}
             movieId={card.id}
             nameRU={card.nameRU} 
             nameEN={card.nameEN}
             clickCard={clickCard}
             removeCard={removeCard} 
             cards={cards}
              />
           )) 
      )}
        {location.pathname === '/saved-movies' && ( resultCardsList.length === 0 ? <p className='result-none'>{messageForMoviesList}</p> :
          resultCardsList.map(card=>(
             <MoviesCard 
             key={card._id}  
             country={card.country} 
             director={card.director}
             duration={card.duration}
             year={card.year} 
             description={card.description}
            image={card.image} 
             trailerLink={card.trailerLink}
            thumbnail={card.thumbnail}
             owner={card.owner}
             id={card._id}
             movieId={card.movieId}
            nameRU={card.nameRU} 
            nameEN={card.nameEN}
            clickCard={clickCard}
            cards={cards} 
             />
           )) )
        }
      </div>
      <button className={buttonOtherClass} onClick={plusCards}>Ещё</button>
    </section>
  )
};

export default MoviesCardList;