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
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [errServer, setErrServer] = React.useState('');
  const [currentUser,setCurrentUser] = React.useState({});
 // const [formValues, setFormValues] = React.useState({});

  function openMenu() {//открывает, закрывает бургер меню
    setMenuOpen(!isMenuOpen);
  }

  function onRegister(data) {///регистрация qq@mail.ry
    api.signUp(data)
    .then(data=>{
      if(!data.email){
        setErrServer(data.message);
     } else {
      setErrServer('');
      history.push('/signin');
     }
   })
   .catch(()=>setErrServer('При регистрации пользователя произошла ошибка.'));
  }

  function onLogin(data) {///вход ee@mail.ru 111
    api.signIn(data)
    .then(data=>{
      if(!data.token){
        setErrServer(data.message);
      } else {
        setErrServer('');
        history.push('/movies');
        setIsLoggedIn(true);
        //return data.token
      }
   })
   .catch(()=>setErrServer('При авторизации пользователя произошла ошибка.'));
  }

  React.useEffect(()=> {////загрузает карточки
    setPreloader(true)
    apiMovie.getMovies()
    .then(res=>{setMovies(res); setPreloader(false)})
  }, [])

  React.useEffect(()=>{
    if(isLoggedIn){
      api.getUserInfo()
      .then(data=>console.log(data))
    }
  },[isLoggedIn])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
        <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signin">
            <Login formValues={onLogin} errServer={errServer} />
          </Route>
          
          <Route path="/signup">
            <Register formValues={onRegister} errServer={errServer}/>
          </Route>

          <ProtectedRoute path="/movies" 
                  compoment={Movies}
                  cards = {movies} 
                  onClose={openMenu} 
                  isOpenMenu ={isMenuOpen} 
                  errServer = {errServer} 
                loggedIn={isLoggedIn}>
                </ProtectedRoute>
          

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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
//<Route path="/movies">
//<Preloader preloader={preloader} />
//<Movies cards={movies} onClose={openMenu} isOpenMenu={isMenuOpen} errServer={errServer} />
//</Route>