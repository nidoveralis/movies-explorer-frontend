import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  )
};
export default Movies;