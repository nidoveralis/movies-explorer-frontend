import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import config from '../../utils/utils';
import React from 'react';

function MoviesCardList({movies, cardDelete, likeCard,userId,moviesList, foundCards}) {
 
    const [resultCardsList, setResultCardsList] = React.useState(moviesList);
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    const [cardListSize, setCardListSize] = React.useState();
    const [firstSize, setfirstSize] = React.useState();
//Сепарадо!
    //const foundCards = moviesList.filter(movie=>movie.nameRU.toLowerCase() === searchValue.toLowerCase());////перенести в константы
    const [cardsList, setCardsList] = React.useState(foundCards);
    setCardsList(foundCards)
    const buttonOtherClass = `moviesCardList__other ${resultCardsList.length === moviesList.length || moviesList.length === setfirstSize  ? 'button-none' : ''}`
    
console.log(foundCards,resultCardsList,cardsList)
    React.useEffect(()=>{
      if(windowSize <=768) {
        setCardListSize(2)
      }else if (windowSize >768 ) {
        setCardListSize(3)
      }
    },[windowSize]);

  function plusCards() {
    setfirstSize(firstSize + cardListSize);
  };

  React.useEffect(() => {
  if(windowSize >=768) {
    setfirstSize(12);
  }else if (windowSize <= 768 && windowSize>481) {
    setfirstSize(8);
  }else if (windowSize <=480) {
    setfirstSize(5);
  }
  },[]);

    React.useEffect(() => {
      function handleWindowResize() {
        setWindowSize(window.innerWidth);
      }
    
      window.addEventListener('resize', handleWindowResize);

    if(windowSize >=768) {
      setResultCardsList(cardsList.slice(0,firstSize));
    }else if (windowSize <= 768 && windowSize>481) {
      setResultCardsList(cardsList.slice(0,firstSize));
    }else if (windowSize <=480) {
      setResultCardsList(cardsList.slice(0,firstSize));
    }
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    },[firstSize]);

  return(
    <section className="moviesCardList">
      <div className="moviesCardList__content">
        {cardsList.length === 0 ? <p className='result-none'>Ничего не найдено</p> :
          resultCardsList.map(card=>(
             <MoviesCard 
             key={card.id} 
             //key={card.movieId}
             country={card.country} 
             director={card.director}
             duration={card.duration}
             year={card.year} 
             description={card.description}
            image={config.baseUrl+card.image.url} 
             //image={card.image} 
         
             trailerLink={card.trailerLink}
            thumbnail={config.baseUrl+card.image.formats.thumbnail.url}
            //thumbnail={card.thumbnail}
             owner={card.owner}
             movieId={card.id}
            nameRU={card.nameRU} 
            nameEN={card.nameEN}
            userId={userId}
             cardDelete={cardDelete}
             likeCard={likeCard} />
           )) 
        }
      </div>
      <button className={buttonOtherClass} onClick={plusCards}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;

//statusSeved={card.statusSeved}

//{
 // resultCardsList.map(card=>(
   // <MoviesCard 
   // //key={card.id} 
  //  key={card.movieId}
  //  country={card.country} 
  //  director={card.director}
  //  duration={card.duration}
  //  year={card.year} 
 //   description={card.description}
  //  //image={config.baseUrl+card.image.url} 
  //  image={card.image} 

   // trailerLink={card.trailerLink}
   // //thumbnail={config.baseUrl+card.image.formats.thumbnail.url}
  //  thumbnail={card.thumbnail}
  //  owner={card.owner}
   // movieId={card.id}
   // nameRU={card.nameRU} 
   // nameEN={card.nameEN}
    //userId={userId}
   // cardDelete={cardDelete}
  //  likeCard={likeCard} />
 // )) 
//}