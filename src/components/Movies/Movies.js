import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({cards}) {
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={cards}/>
      <Footer />
    </section>
  )
};
export default Movies;