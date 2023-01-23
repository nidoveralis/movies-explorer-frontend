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
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import {apiMovie} from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi';
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
  const [sliderStatus, setSliderStatus] = React.useState();

  function closeMenu() {//открывает, закрывает бургер меню
    setMenuOpen(!isMenuOpen);
  };

  function onRegister(data) {
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
  };

  function onLogin(data) {
    api.signIn(data)
    .then(data=>{
      if(!data.token){
        setErrServer(data.message);
      }else {
        setErrServer('');
        history.push('/movies');
        handleSliderStatus();
        setIsOpen(true);
      }
   })
   .catch(()=>setErrServer('При авторизации пользователя произошла ошибка.'));
  };
  
  function onSingOut() {
    localStorage.clear();
    setMoviesList([]);
    setMoviesSavedList([]);
    setIsLoggedIn(false);
  };

  function onUpdateUser(data) {
    setPreloader(true);
    api.setUserInfo(data)
    .then((data)=>{
      setPreloader(false);
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
  };

  function getSavedMovies() {
    api.getMovies()
    .then(res=> setMoviesSavedList(res.data))
    .catch(err=>console.log(err))
  };

  function likeCard(movie) {//добавить фильм
    setPreloader(true);
    api.addMovies(movie)
    .then(()=>{
      getSavedMovies();
      setPreloader(false);
    })
    .catch(err=>console.log(err))
  };

  function removeCard(movie) {
    setPreloader(true);
    api.removeMovie(movie.movieId)
    .then((res)=>{
      const fiteredSavedmovies = moviesSavedList.filter(item=>{return (item._id!==movie.movieId)})
      setMoviesSavedList(fiteredSavedmovies);
      setPreloader(false);
    })
    .catch(err=>console.log(err))
  };
 
  function handleSliderStatus() {//загрузка слайдера
    if(JSON.parse(localStorage.getItem('slider'))===null) {
      localStorage.setItem('slider', JSON.stringify(true));
      setSliderStatus(true);
    }else {
      setSliderStatus(JSON.parse(localStorage.getItem('slider')));
    }
  };

  function handleSliderClick() {
    setSliderStatus(!sliderStatus);
    localStorage.setItem('slider', JSON.stringify(!sliderStatus));
  };

 function searchShortMovie(data) {//поиск коротких фильмов
  if(JSON.parse(localStorage.getItem('slider'))) {
    const shortMovieList = data.filter(movie=>movie.duration<=40);
    if(shortMovieList.length===0) {
      setMessageForMoviesList('Ничего не найдено');
    } else {
      setMessageForMoviesList('');
      return shortMovieList;
    }
  } else {
    return data;
  }};

  function filterMovies(data, list) {//фильтр
    if(data === '' || data===null) {
      setPreloader(false);
      setMessageForMoviesList('Нужно ввести ключевое слово');
    }else if(data !== '') {
      const foundCards = list.filter(movie=>{
        setPreloader(true);
        if(movie.nameRU.toLowerCase().trim().indexOf(data.toLowerCase())!==-1 || movie.nameEN.toLowerCase().indexOf(data.toLowerCase())!==-1) {
          setMessageForMoviesList('');
          setPreloader(false);
          return movie
        }else {
          setMessageForMoviesList('Ничего не найдено');
          setPreloader(false);
        }
      });
        return searchShortMovie(foundCards);
    }
  };

  function searchMovie(data) {//поиск фильмов
    if(moviesList.length===0) {
      apiMovie.getMovies()
      .then(res=>{
        const result = filterMovies(data, res);
        setMoviesList(res);
        setSearchAllMovies(result ? result : []);
        })
      .catch(err=>console.log(err));
    }else {
      const result = filterMovies(data, moviesList);
      setSearchAllMovies(result ? result : []);
    }
  };

  function searchUserMovie(data) {//поиск сохранённых фильмов
    if(moviesSavedList.length===0) {
      api.getMovies()
      .then(res=>{
        const result = filterMovies(data, res.data);
        setMoviesSavedList(res.data);
        setSearchSavedMovies(result ? result : []);
        })
      .catch(err=>console.log(err));
    }else {
      const result = filterMovies(data, moviesSavedList);
      setSearchSavedMovies(result ? result : []);
    }
  };

  React.useEffect(()=>{//информация о mov
    if(isLoggedIn){
      api.getMovies()
      .then(data=>{
        setMoviesSavedList(data.data);
      })
      .catch(err=>console.log(err));
    }},[currentUser,isLoggedIn]);

  React.useEffect(()=>{//информация о пользователе
    if(isLoggedIn){
      api.getUserInfo()
      .then(data=>{
        setCurrentUser(data);
        setUserId(data)
      })
      .catch(err=>console.log(err));
    }
  },[isLoggedIn]);
  
  React.useEffect(()=>{
    const pathName = location.pathname;
    if(localStorage.getItem('token')){
      setIsLoggedIn(true);
      setErrServer('');
      history.push(pathName);
      handleSliderStatus();
      setIsOpen(true);
    };
  },[]);
  
  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
        <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} closeMenu = {closeMenu} isMenuOpen ={isMenuOpen}  />
          </Route>

          <Route path="/signin">
            <Login formValues={onLogin} errServer={errServer} />
          </Route>
          
          <Route path="/signup">
            <Register formValues={onRegister} errServer={errServer}/>
          </Route>
          
          <ProtectedRoute path="/movies" 
            isLoggedIn={isLoggedIn}
            compoment={Movies}
            closeMenu = {closeMenu} 
            isMenuOpen ={isMenuOpen} 
            errServer = {errServer} 
            loggedIn={isLoggedIn}
            likeCard={likeCard}
            userId={userId} 
            searchAllMovies={searchAllMovies}
            searchMovie={searchMovie}
            messageForMoviesList={messageForMoviesList}
            handleSliderClick={handleSliderClick}
            sliderStatus={sliderStatus}
            preloader={preloader}>
          </ProtectedRoute>
          
          <ProtectedRoute path="/saved-movies" 
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
            messageForMoviesList={messageForMoviesList}
            handleSliderClick={handleSliderClick}
            sliderStatus={sliderStatus}
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