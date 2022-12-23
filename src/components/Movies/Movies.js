import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({cards, openMenu, isMenuOpen}) {
  return(
    <>
      <Header onClose={openMenu} isOpenMenu={isMenuOpen}/>
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={cards}/>
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;