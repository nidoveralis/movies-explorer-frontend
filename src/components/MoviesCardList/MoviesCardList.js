import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import config from '../../utils/utils';

function MoviesCardList({movies, cardDelete, likeCard,userId,moviesList}) {
    const b = moviesList.filter(movie=>movie.nameRU === 'Слушая Москву');


  return(
    <section className="moviesCardList">
      <div className="moviesCardList__content">
        {
          b.map(card=>(
            <MoviesCard 
            //key={card.id} 
            key={card.movieId}
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
          {
            movies.map(card=>(
              <MoviesCard 
              //key={card.id} 
              key={card.movieId}
              country={card.country} 
              director={card.director}
              duration={card.duration}
              year={card.year} 
              description={card.description}
              //image={config.baseUrl+card.image.url} 
              image={card.image} 

              trailerLink={card.trailerLink}
              //thumbnail={config.baseUrl+card.image.formats.thumbnail.url}
              thumbnail={card.thumbnail}
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
      <button className="moviesCardList__other">Ещё</button>
    </section>
  )
}

export default MoviesCardList;

//statusSeved={card.statusSeved}