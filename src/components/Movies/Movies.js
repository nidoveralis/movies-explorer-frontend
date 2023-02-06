import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({isLoggedIn, cards, closeMenu, isMenuOpen, likeCard, removeCard, userId, searchAllMovies, searchMovie, messageForMoviesList, preloader }) {

  const [sliderStatus, setSliderStatus] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  function clickSlider() {
    setSliderStatus(!sliderStatus);
    localStorage.setItem('slider', JSON.stringify(!sliderStatus));
    searchMovie(JSON.parse(localStorage.getItem('inputMovie')), JSON.parse(localStorage.getItem('slider')));
    };

  function searchinghMovie(data) {
    localStorage.setItem('inputMovie', JSON.stringify(data));
    searchMovie(data, JSON.parse(localStorage.getItem('slider')));
  };

  function clickSavedCard(data) {
    const doubledCard = cards.find((item) =>{ return (item.movieId === data.movieId)});
    removeCard(doubledCard._id);
  };

  React.useEffect(()=>{
    searchMovie(JSON.parse(localStorage.getItem('inputMovie')), JSON.parse(localStorage.getItem('slider')));
    setSliderStatus(JSON.parse(localStorage.getItem('slider')) || false)
  },[]);

  React.useEffect(()=>{
    
    setMovies(searchAllMovies)
  },[searchAllMovies]);

  return(
    <>
      <Header isLoggedIn={isLoggedIn} onClose={closeMenu} isOpenMenu={isMenuOpen}/>
      <main className="movies">
        <SearchForm searchMovie={searchinghMovie} handleSliderClick={clickSlider} sliderStatus={sliderStatus} inputValues={JSON.parse(localStorage.getItem('inputMovie'))}/>
        <Preloader preloader={preloader} />
        <MoviesCardList clickCard={likeCard} removeCard={clickSavedCard} userId={userId} moviesList={movies} messageForMoviesList={messageForMoviesList} cards={cards} />
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;
