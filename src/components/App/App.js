import React from 'react';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css'
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login'
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { MoviesSavedList, MoviesList } from '../../utils/moviesList';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function openMenu() {//открывает, закрывает бургер меню
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="app">
      
      <Switch>
      <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>
        
        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/movies">
          <Movies cards={MoviesList} onClose={openMenu} isOpenMenu={isMenuOpen} />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies cards={MoviesSavedList} />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
