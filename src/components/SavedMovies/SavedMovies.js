import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({isLoggedIn, cards, closeMenu, isMenuOpen, removeCard, userId, searchAllMovies, searchMovie, messageForMoviesList, handleSliderClick, sliderStatus, preloader}) {

  function deleteCard(card) {
  removeCard(card);
 };

 //function clickSlider() {
//  handleSliderClick();
//  searchMovie(JSON.parse(localStorage.getItem('searchSavedMovie')));
//  };

 //function saveSearchedMovie(data) {
 // localStorage.setItem('searchSavedMovie', JSON.stringify(data));
 // };

  //function searching() {
  //  searchMovie(JSON.parse(localStorage.getItem('searchSavedMovie')));
  //};

  //React.useEffect(()=>{
  //  searching()
 // },[]);

 // React.useEffect(()=>{
 //   searching()
 // },[cards]);

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className="savedMovies">
        <SearchForm searchMovie={searchMovie} handleSliderClick={handleSliderClick} sliderStatus={sliderStatus}/>
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={deleteCard} userId={userId}  moviesList={searchAllMovies.length === 0 ? cards : searchAllMovies} messageForMoviesList={messageForMoviesList} cards={cards} />
      </main>
    <Footer />
    </>
  )
}

export default SavedMovies;