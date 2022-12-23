import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({cards}) {

  return(
    <>
      <Header />
      <main className="savedMovies">
        <SearchForm />
        <MoviesCardList movies={cards} />
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;