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

  function openMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/">
          <Header theme={'header_theme-darck'}/>
          <Main />
        </Route>

        <Route path="/signin">
          <Header theme={'header-sign'} />
          <Login />
        </Route>
        
        <Route path="/signup">
          <Header theme={'header-sign'} />
          <Register />
        </Route>

        <Route path="/movies">
          <Header onClose={openMenu} isOpenMenu={isMenuOpen}/>
          <Movies cards={MoviesList} />
        </Route>

        <Route path="/saved-movies">
          <Header />
          <SavedMovies cards={MoviesSavedList} />
        </Route>

        <Route path="/profile">
          <Header />
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
