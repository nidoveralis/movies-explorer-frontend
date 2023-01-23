import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({isLoggedIn, closeMenu, isMenuOpen, likeCard, userId, searchAllMovies, searchMovie, messageForMoviesList, handleSliderClick, sliderStatus, preloader }) {

  function saveSearchedMovie(data) {
    localStorage.setItem('searchMovie', JSON.stringify(data));
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
        <SearchForm searchMovie={searchMovie} handleSliderClick={clickSlider} sliderStatus={sliderStatus} saveSearchedMovie={saveSearchedMovie} inputValues={JSON.parse(localStorage.getItem('searchMovie'))}/>
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={likeCard} userId={userId} moviesList={searchAllMovies} messageForMoviesList={messageForMoviesList} />
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;
