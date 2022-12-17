import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return(
    <section className="moviesCardList">
      <div className="moviesCardList__content">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      </div>
      <button className="moviesCardList__other">Ещё</button>
    </section>
  )
}

export default MoviesCardList;