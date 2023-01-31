import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({isLoggedIn, cards, closeMenu, isMenuOpen, likeCard, removeCard, userId, searchAllMovies, searchMovie, messageForMoviesList, handleSliderClick, sliderStatus, preloader }) {

  function clickSavedCard(data) {
    const doubledCard = cards.find((item) =>{ return (item.movieId === data.movieId)});
    removeCard(doubledCard);
  };

  function clickSlider() {
    handleSliderClick();
    searchMovie(JSON.parse(localStorage.getItem('searchMovie')));
  };

  React.useEffect(()=>{
    searchMovie(JSON.parse(localStorage.getItem('searchMovie')));
  },[]);

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen}/>
      <main className="movies">
        <SearchForm searchMovie={searchMovie} handleSliderClick={clickSlider} sliderStatus={sliderStatus} inputValues={JSON.parse(localStorage.getItem('searchMovie'))}/>
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={likeCard} removeCard={clickSavedCard} userId={userId} moviesList={searchAllMovies} messageForMoviesList={messageForMoviesList} cards={cards} />
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;
