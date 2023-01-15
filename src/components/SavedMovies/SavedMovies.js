import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({isLoggedIn, closeMenu, isMenuOpen, removeCard, userId, searchAllMovies, searchMovie, messageForMoviesList, handleSliderClick, sliderStatus, preloader}) {

 function deleteCard(card) {
  removeCard(card);
 };

 function saveSearchedMovie(data) {
  localStorage.setItem('searchSavedMovie', JSON.stringify(data));
};

React.useEffect(()=>{
  searchMovie(JSON.parse(localStorage.getItem('searchSavedMovie')));
},[]);

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className="savedMovies">
        <SearchForm searchMovie={searchMovie} handleSliderClick={handleSliderClick} sliderStatus={sliderStatus} saveSearchedMovie={saveSearchedMovie} inputValues={JSON.parse(localStorage.getItem('searchSavedMovie'))} />
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={deleteCard} userId={userId}  moviesList={searchAllMovies} messageForMoviesList={messageForMoviesList} />
      </main>
    <Footer />
    </>
  )
}

export default SavedMovies;