import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({isLoggedIn, closeMenu, isMenuOpen, removeCard, userId, searchSavedMovies, searchMovie, messageForMoviesList, preloader}) {

 function deleteCard(card) {
  removeCard(card);
 };

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className="savedMovies">
        <SearchForm searchMovie={searchMovie} />
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={deleteCard} userId={userId}  moviesList={searchSavedMovies} messageForMoviesList={messageForMoviesList} />
      </main>
    <Footer />
    </>
  )
}

export default SavedMovies;