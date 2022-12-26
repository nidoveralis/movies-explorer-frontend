import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, cardDelete}) {
  return(
    <section className="moviesCardList">
      <div className="moviesCardList__content">
          {
            movies.map(card=>(
              <MoviesCard key={card._id} link={card.link} alt={card.alt} name={card.name}  time={card.time} statusSeved={card.statusSeved} cardDelete={cardDelete} />
            ))
          }
      </div>
      <button className="moviesCardList__other">Ещё</button>
    </section>
  )
}

export default MoviesCardList;