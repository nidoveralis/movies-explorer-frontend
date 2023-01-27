import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import config from '../../utils/utils';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCardList({clickCard, userId, moviesList, messageForMoviesList}) {

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
        setCardListSize(2)
      }else if (windowSize >= 1280 ) {
        setCardListSize(3)
      }
    },[windowSize]);

    React.useEffect(() => {
    if(windowSize >= 1280) {
      setfirstSize(12);
    }else if (windowSize < 1280 && windowSize >= 768) {
      setfirstSize(8);
    }else if (windowSize < 768) {
      setfirstSize(5);
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
            image={config.baseUrl+card.image.url} 
             trailerLink={card.trailerLink}
            thumbnail={config.baseUrl+card.image.formats.thumbnail.url}
             owner={card.owner}
             movieId={card.id}
            nameRU={card.nameRU} 
            nameEN={card.nameEN}
            userId={userId}
            clickCard={clickCard}  />
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
             movieId={card._id}
            nameRU={card.nameRU} 
            nameEN={card.nameEN}
            userId={userId}
            clickCard={clickCard} />
           )) )
        }
      </div>
      <button className={buttonOtherClass} onClick={plusCards}>Ещё</button>
    </section>
  )
};

export default MoviesCardList;