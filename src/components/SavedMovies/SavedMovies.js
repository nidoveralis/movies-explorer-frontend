import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({isLoggedIn, cards, closeMenu, isMenuOpen, removeCard, userId, searchAllMovies, searchMovie, messageForMoviesList, preloader}) {
  const [sliderStatusSavedMovies, setSliderStatusSavedMovies] = React.useState();
  const [inputValue, setInputValue] = React.useState('');
  
  function deleteCard(card) {
  removeCard(card);
 };

 function clickSlider() {
  setSliderStatusSavedMovies(!sliderStatusSavedMovies);
  localStorage.setItem('sliderSavedMovies', JSON.stringify(!sliderStatusSavedMovies));
  searchMovie(inputValue, JSON.parse(localStorage.getItem('sliderSavedMovies')));
  };

 function searchinghMovie(data) {
  setInputValue(data)
  searchMovie(data, JSON.parse(localStorage.getItem('sliderSavedMovies')));
  };

  React.useEffect(()=>{
    searchMovie(inputValue, JSON.parse(localStorage.getItem('sliderSavedMovies')))
    setSliderStatusSavedMovies(JSON.parse(localStorage.getItem('sliderSavedMovies')) || false)
  },[]);

  React.useEffect(()=>{
    searchMovie(inputValue, JSON.parse(localStorage.getItem('sliderSavedMovies')))
  },[cards]);

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className="savedMovies">
        <SearchForm searchMovie={searchinghMovie} handleSliderClick={clickSlider} sliderStatus={sliderStatusSavedMovies}/>
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={deleteCard} userId={userId}  moviesList={searchAllMovies.length === 0 && messageForMoviesList==='' ? cards : searchAllMovies} messageForMoviesList={cards.length===0 ? 'У вас нет сохранённых фильмов' : messageForMoviesList} cards={cards} />
      </main>
    <Footer />
    </>
  )
}

export default SavedMovies;