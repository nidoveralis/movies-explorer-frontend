import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({cards, closeMenu, isMenuOpen, removeCard, userId, moviesList}) {
  const [searchValue, setSearchValue] = React.useState('');
  const [cardsList, setCardsList] = React.useState([]);


  //поиск по фильмам
  const foundCards = cards.data.filter(card=>card.nameRU.toLowerCase() === searchValue || card.nameEN.toLowerCase() === searchValue);////перенести

  React.useEffect(()=>{
    setCardsList(foundCards);
  }, [searchValue, cards]);

 function deleteCard(card) {
  removeCard(card);
 };

  return(
    <>
      <Header onClose={closeMenu} isOpenMenu={isMenuOpen} />
      <main className="savedMovies">
        <SearchForm searchValue={setSearchValue} />
        <MoviesCardList clickCard={deleteCard} userId={userId}  moviesList={cardsList} />
      </main>
    <Footer />
    </>
  )
}

export default SavedMovies;