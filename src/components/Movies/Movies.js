import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({cards, closeMenu, isMenuOpen, likeCard, userId, moviesList}) {
  const [searchValue, setSearchValue] = React.useState('');
  const [cardsList, setCardsList] = React.useState([]);

  //поиск по фильмам
  const foundCards = moviesList.filter(movie=>movie.nameRU.toLowerCase() === searchValue || movie.nameEN.toLowerCase() === searchValue);////перенести

  React.useEffect(()=>{
    setCardsList(foundCards)
  }, [searchValue])




  return(
    <>
      <Header onClose={closeMenu} isOpenMenu={isMenuOpen}/>
      <main className="movies">
        <SearchForm searchValue={setSearchValue}/>
        <MoviesCardList movies={cards} clickCard={likeCard} userId={userId} moviesList={cardsList}  />
      </main>
      <Footer />
    </>
    
  )
};
export default Movies;
