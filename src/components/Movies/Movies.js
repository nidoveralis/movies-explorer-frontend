import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({isLoggedIn, cards, closeMenu, isMenuOpen, likeCard, userId, searchAllMovies, searchMovie}) {

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen}/>
      <main className="movies">
        <SearchForm searchMovie={searchMovie}/>
        <MoviesCardList movies={cards} clickCard={likeCard} userId={userId} moviesList={searchAllMovies}  />
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;
