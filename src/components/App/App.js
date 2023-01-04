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
  const [moviesList, setMoviesList] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [errServer, setErrServer] = React.useState('');
  const [currentUser,setCurrentUser] = React.useState({});
  const [isOpen,setIsOpen] = React.useState(false);
  const [userId,setUserId] = React.useState('');
 // const [formValues, setFormValues] = React.useState({});
  function closeMenu() {//открывает, закрывает бургер меню
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
        setIsOpen(true)
      }
   })
   .catch(()=>setErrServer('При авторизации пользователя произошла ошибка.'));
  };

  function onUpdateUser(data) {
    api.setUserInfo(data)
    .then(()=>{
        api.getUserInfo()
        .then(data=>{
          setCurrentUser(data)
        })
    })
  }

  function likeCard(movie) {//добавить фильм
    api.addMovies(movie)
    .then(()=>{
      apiMovie.getMovies()
    .then(res=>{setMovies(res); setPreloader(false)})
    })

  }

  React.useEffect(()=> {////загрузает карточки
    setPreloader(true);
    api.getMovies()
    .then(res=>{
      setMovies(res.data)
      //setMovies(res); 
      setPreloader(false);
    })
    apiMovie.getMovies()
    .then(res=>{setMoviesList(res)})//setMoviesList(res)})
  }, [])

  

  React.useEffect(()=>{///информация о пользователе
    if(isLoggedIn){
      api.getUserInfo()
      .then(data=>{
        setCurrentUser(data);
        setUserId(data)
      });
    }
  },[isLoggedIn])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
        <Route exact path="/">
            <Main closeMenu={closeMenu} isMenuOpen ={isMenuOpen}  />
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
            closeMenu = {closeMenu} 
            isMenuOpen ={isMenuOpen} 
            errServer = {errServer} 
            loggedIn={isLoggedIn}
            likeCard={likeCard}
            userId={userId} 
            moviesList={moviesList}>
          </ProtectedRoute>
          

          <Route path="/saved-movies">
            <SavedMovies cards={MoviesSavedList} />
          </Route>

          <Route path="/profile">
            <Profile onUpdateUser={onUpdateUser} isOpen={isOpen} />
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