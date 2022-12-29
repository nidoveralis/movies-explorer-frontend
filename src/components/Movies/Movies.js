import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({cards, closeMenu, isMenuOpen, likeCard, userId, moviesList}) {
  
  return(
    <>
      <Header onClose={closeMenu} isOpenMenu={isMenuOpen}/>
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={cards} likeCard={likeCard} userId={userId} moviesList={moviesList}/>
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;