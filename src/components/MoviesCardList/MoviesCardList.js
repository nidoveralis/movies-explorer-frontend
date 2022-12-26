import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, cardDelete}) {
  return(
    <section className="moviesCardList">
      <div className="moviesCardList__content">
          {
            movies.map(card=>(
              <MoviesCard key={card._id} poster={card.image.url} name={card.nameRU}  duration={card.duration}  cardDelete={cardDelete} link={card.trailerLink} />
            ))
          }
      </div>
      <button className="moviesCardList__other">Ещё</button>
    </section>
  )
}

export default MoviesCardList;

//statusSeved={card.statusSeved}