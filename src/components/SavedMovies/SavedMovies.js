import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({cards}) {

  return(
    <section className="savedMovies">
        <SearchForm />
        <MoviesCardList movies={cards} />
        <Footer />
    </section>
  )
}

export default SavedMovies;