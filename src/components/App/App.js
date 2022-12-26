import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css'
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login'
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import { MoviesSavedList } from '../../utils/moviesList';
import { Route, Switch } from 'react-router-dom';
import {apiMovie} from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi';

function App() {
  const history = useHistory();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [errServer, setErrServer] = React.useState('');
 // const [formValues, setFormValues] = React.useState({});

  function openMenu() {//открывает, закрывает бургер меню
    setMenuOpen(!isMenuOpen);
  }

  function onRegister(data) {///регистрация qq@mail.ry
    api.signUp(data)
    .then(data=>{
      if(!data.email){
        
        setErrServer(data.message)
     // history.push('/signin')
     }
   })
   .catch(()=>console.log('data'))//setErrServer(err.message))
  }

  React.useEffect(()=> {////загрузает карточки
    setPreloader(true)
    apiMovie.getMovies()
    .then(res=>{setMovies(res); setPreloader(false)})
  }, [])

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
          <Register formValues={onRegister} errServer={errServer}/>
        </Route>

        <Route path="/movies">
        <Preloader preloader={preloader} />
          <Movies cards={movies} onClose={openMenu} isOpenMenu={isMenuOpen} errServer={errServer} />
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
