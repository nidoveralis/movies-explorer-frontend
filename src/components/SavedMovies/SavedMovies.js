import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({isLoggedIn, cards, closeMenu, isMenuOpen, removeCard, userId, searchSavedMovies, searchMovie}) {

 function deleteCard(card) {
  removeCard(card);
 };

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className="savedMovies">
        <SearchForm searchMovie={searchMovie} />
        <MoviesCardList clickCard={deleteCard} userId={userId}  moviesList={searchSavedMovies} />
      </main>
    <Footer />
    </>
  )
}

export default SavedMovies;