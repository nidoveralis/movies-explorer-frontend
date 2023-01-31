import React from 'react';
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
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import {apiMovie} from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi';
import {TIME_SHOR_FILM} from '../../utils/constant';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState([]);
  const [errServer, setErrServer] = React.useState('');
  const [currentUser,setCurrentUser] = React.useState({});
  const [isOpen,setIsOpen] = React.useState(false);
  const [userId,setUserId] = React.useState('');
  const [moviesSavedList,setMoviesSavedList] = React.useState([]);
  const [message, setMessage] = React.useState({});
  const [searchAllMovies, setSearchAllMovies] = React.useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = React.useState([]);
  const [preloader,setPreloader] = React.useState(false);
  const [messageForMoviesList, setMessageForMoviesList] = React.useState('');
  const [messageForUserMoviesList, setMessageForUserMoviesList] = React.useState('');

  function closeMenu() {//открывает, закрывает бургер меню
    setMenuOpen(!isMenuOpen);
  };

  function onRegister(data) {
    api.signUp(data)
    .then(res=>{
      if(!res.email){
        setErrServer(res.message);
     } else {
      setErrServer('');
      onLogin(data);
     }
   })
   .catch(()=>setErrServer('При регистрации пользователя произошла ошибка.'));
  };

  function onLogin(data) {
    api.signIn(data)
    .then(data=>{
      if(!data.token){
        setErrServer(data.message);
      }else {
        setErrServer('');
        history.push('/movies');
        setIsOpen(true);
        setIsLoggedIn(true);
      }
   })
   .catch(()=>setErrServer('При авторизации пользователя произошла ошибка.'));
  };
  
  function onSingOut() {
    api.logout().then(()=>{
      localStorage.clear();
      setMoviesList([]);
      setMoviesSavedList([]);
      setIsLoggedIn(false);
      setErrServer('');
      history.push('/');
      })
      .catch((e)=>{console.log(e)})
  };

  function onUpdateUser(data) {
    setPreloader(true);
    api.setUserInfo(data)
    .then((data)=>{
      if(data.message) {
        setMessage({message: data.message, err: true});
      }else {
        setMessage({message:'Профиль успешно обновлён', err: false});
        api.getUserInfo()
        .then(data=>{
          setCurrentUser(data)})
      }
    })
    .catch((e)=>{console.log(e)})
    .finally(() => setPreloader(false));
  };

  function getSavedMovies() {
    setPreloader(true);
    api.getMovies()
    .then(res=> {
      setMoviesSavedList(res.data);
    })
    .catch(err=>console.log(err))
    .finally(() => setPreloader(false));
  };

  function likeCard(movie) {//добавить фильм
    setPreloader(true);
    api.addMovies(movie)
    .then(()=>{
      getSavedMovies();
    })
    .catch(err=>console.log(err))
    .finally(() => setPreloader(false));
  };

  function removeCard(movie) {
    setPreloader(true);
    api.removeMovie(movie.id || movie._id)
    .then((res)=>{
      const fiteredSavedmovies = moviesSavedList.filter(item=>{return (item._id!==movie.id || movie._id)})
      setMoviesSavedList(fiteredSavedmovies);
    })
    .catch(err=>console.log(err))
    .finally(() => setPreloader(false));
  };

 function searchShortMovie(data, slider) {//поиск коротких фильмов
  if(slider) {
    const shortMovieList = data.filter(movie=>movie.duration<=TIME_SHOR_FILM);
      setMessageForMoviesList(shortMovieList.length===0 ? 'Ничего не найдено' : '');
      return shortMovieList;
  } else {
   return data;
}}

  function filterMovies(data, list, slider) {//фильтр
      const foundCards = list.filter(movie=>{
        if(movie.nameRU.toLowerCase().trim().indexOf(data.toLowerCase())!==-1 || movie.nameEN.toLowerCase().indexOf(data.toLowerCase())!==-1) {
         return movie
        }
      });
        return searchShortMovie(foundCards,slider);
  };

  function searchMovie(data, slider) {//поиск фильмов
    if(data === '' || data === null) {
      setMessageForMoviesList('Нужно ввести ключевое слово');
    }else if(data !== '') {
        localStorage.setItem('searchMovie', JSON.stringify(data));
      setPreloader(true);
      if(moviesList.length===0) {
        apiMovie.getMovies()
        .then(res=>{
          const result = filterMovies(data, res, slider);
          setMoviesList(res);
          setSearchAllMovies(result ? result : []);
          })
        .catch(err=>console.log(err))
        .finally(() => setPreloader(false));
      }else {
        const result = filterMovies(data, moviesList, slider);
        setPreloader(false);
        setSearchAllMovies(result ? result : []);
        setMessageForMoviesList('Ничего не найдено');
      }
    }
  };

  function searchUserMovie(data, slider) {//поиск сохранённых фильмов
    if(data && data!==''){
      setPreloader(true);
    if(moviesSavedList.length===0) {
      api.getMovies()
      .then(res=>{
        const result = filterMovies(data, res.data,slider);
        setMoviesSavedList(res.data);
        setSearchSavedMovies(result ? result : []);
        setPreloader(false);
        })
      .catch(err=>console.log(err))
      .finally(() => setPreloader(false));
    }else {
      const result = filterMovies(data, moviesSavedList, slider);
      setPreloader(false);
      setSearchSavedMovies(result ? result : []);
      setMessageForUserMoviesList(!result || result.length===0 ? 'Ничего не найдено' : '');
    }} else if(data==='') {
      setSearchSavedMovies(searchShortMovie(moviesSavedList, slider))
      setMessageForUserMoviesList('');
    }
  };

  React.useEffect(()=>{//загрузка фильмов
      setPreloader(true);
      api.getMovies()
      .then(data=>{
        setMoviesSavedList(data.data);
      })
      .catch(err=>console.log(err))
      .finally(() => setPreloader(false));
    },[location]);

  React.useEffect(()=>{//загрузка фильмов 
    if(isLoggedIn){
      setPreloader(true);
      api.getMovies()
      .then(data=>{
        setMoviesSavedList(data.data);
      })
      .catch(err=>console.log(err))
      .finally(() => setPreloader(false));
    }},[currentUser,isLoggedIn]);

React.useEffect(()=>{//информация о пользователе
  const pathName = location.pathname;
      api.getUserInfo()
      .then(data=>{
        if(!data.message){
          setIsLoggedIn(true);
          history.push(pathName);
          setIsOpen(true);
          setErrServer('');
          setCurrentUser(data);
          setUserId(data._id);
      };
      })
      .catch(err=>{setIsLoggedIn(false);console.log(err)});
  },[isLoggedIn]);

  return (
    <div className="app">
      <Preloader preloader={preloader} />
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
        <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} closeMenu = {closeMenu} isMenuOpen ={isMenuOpen}  />
          </Route>

          <Route exact path="/signin">
          {isLoggedIn ? <Redirect to="/movies" /> : <Login formValues={onLogin} errServer={errServer} /> }
          </Route>

          <Route exact path="/signup">
          {isLoggedIn ? <Redirect to="/movies" /> :  <Register formValues={onRegister} errServer={errServer}/> }
          </Route>

          <ProtectedRoute  path="/movies" 
            isLoggedIn={isLoggedIn}
            cards={moviesSavedList}
            compoment={Movies}
            closeMenu = {closeMenu} 
            isMenuOpen ={isMenuOpen} 
            errServer = {errServer} 
            loggedIn={isLoggedIn}
            likeCard={likeCard}
            removeCard={removeCard}
            userId={userId} 
            searchAllMovies={searchAllMovies}
            searchMovie={searchMovie}
            messageForMoviesList={messageForMoviesList}
            preloader={preloader}>
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/saved-movies" 
            isLoggedIn={isLoggedIn}
            cards={moviesSavedList}
            compoment={SavedMovies}
            closeMenu = {closeMenu} 
            isMenuOpen ={isMenuOpen} 
            errServer = {errServer} 
            loggedIn={isLoggedIn}
            removeCard={removeCard}
            userId={userId} 
            searchAllMovies={searchSavedMovies}
            searchMovie={searchUserMovie}
            messageForMoviesList={messageForUserMoviesList}
            preloader={preloader}>
          </ProtectedRoute>

          <ProtectedRoute path="/profile" 
            isLoggedIn={isLoggedIn}
            compoment={Profile}
            onUpdateUser={onUpdateUser}
            closeMenu = {closeMenu} 
            isMenuOpen ={isMenuOpen} 
            errServer = {errServer} 
            loggedIn={isLoggedIn}
            onSingOut={onSingOut} 
            message={message}>
          </ProtectedRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;