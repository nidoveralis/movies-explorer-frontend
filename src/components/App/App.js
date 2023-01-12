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
import { Route, Switch } from 'react-router-dom';
import {apiMovie} from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [moviesList, setMoviesList] = React.useState([]);
  const [errServer, setErrServer] = React.useState('');
  const [currentUser,setCurrentUser] = React.useState({});
  const [isOpen,setIsOpen] = React.useState(false);
  const [userId,setUserId] = React.useState('');
  const [moviesSavedList,setMoviesSavedList] = React.useState([]);
  const [message, setMessage] = React.useState({});
  const [searchValue, setSearchValue] = React.useState('');
  const [searchSavedValue, setSearchSavedValue] = React.useState('');
  const [searchAllMovies, setSearchAllMovies] = React.useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = React.useState([]);
  const [preloader,setPreloader] = React.useState(false);
  const [messageForMoviesList, setMessageForMoviesList] = React.useState('');
  const [sliderStatus, setSliderStatus] = React.useState();
const r =localStorage.getItem('slider')
  function closeMenu() {//открывает, закрывает бургер меню
    setMenuOpen(!isMenuOpen);
  };

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
  };

  function onLogin(data) {///вход cc@mail.ru cc
    api.signIn(data)
    .then(data=>{
      if(!data.token){
        setErrServer(data.message);
      }else {
        setErrServer('');
        history.push('/movies');
        handleSliderStatus();
        setIsLoggedIn(true);
        setIsOpen(true);
      }
   })
   .catch(()=>setErrServer('При авторизации пользователя произошла ошибка.'));
  };
  
  function onSingOut() {
    localStorage.removeItem('jwt');
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
    api.getMovies().then(res=>setMoviesSavedList(res.data))
  };

  function likeCard(movie) {//добавить фильм
    setPreloader(true);
    api.addMovies(movie)
    .then(()=>{
      getSavedMovies();
      setPreloader(false);
    })

  };

  function removeCard(movie) {
    setPreloader(true);
    api.removeMovie(movie.movieId)
    .then(()=>{
      getSavedMovies();
      setPreloader(false);
    })
    .catch(err=>console.log(err))
  };
  //const slid = JSON.parse(localStorage.getItem('slider'))
  function handleSliderStatus() {//загрузка слайдера
    if(JSON.parse(localStorage.getItem('slider'))===null) {
      localStorage.setItem('slider', JSON.stringify(true));
      setSliderStatus(true);
    }else {
      setSliderStatus(JSON.parse(localStorage.getItem('slider')));
    }
  };

  function a() {//загрузка из localStorage
   const aSave = localStorage.getItem('searchSavedMovie');
   const aAAll = localStorage.getItem('searchMovie');
   console.log(aSave, aAAll);

  }

  function handleSliderClick() {
    console.log('k',sliderStatus,r)
    setSliderStatus(!sliderStatus);
    localStorage.setItem('slider', JSON.stringify(!sliderStatus));
  };

  function searchMovie(data) {//поиск фильмов
    setSearchValue(data);
    localStorage.setItem('searchMovie', JSON.stringify(searchValue));
    const result = searchMovies(data, moviesList);
    setSearchAllMovies(result ? result : []);
  };

  function searchUserMovie(data) {//поиск сохранённых фильмов
    setSearchSavedValue(data);
    //localStorage.setItem('searchSavedMovie', JSON.stringify(searchSavedValue));
    const resultUserMovie = searchMovies(data, moviesSavedList);
    setSearchSavedMovies(resultUserMovie ? resultUserMovie : []);
  };

 ///boiler room – stay in russia
 function searchShortMovie(data) {//поиск коротких фильмов
  if(sliderStatus) {
    const shortMovieList = data.filter(movie=>movie.duration<=40 && sliderStatus);
    if(shortMovieList.length===0) {
      setMessageForMoviesList('Ничего не найдено');
    } else {
      setMessageForMoviesList('');
      return shortMovieList
    }
  } else {
    return data;
  }};
 
  function searchMovies(data, list) {//фильтр
    setPreloader(true);
    if(data === '') {
      setPreloader(false);
      setMessageForMoviesList('Нужно ввести ключевое слово');
    }else {
      const foundCards = list.filter(movie=>movie.nameRU.toLowerCase() === data || movie.nameEN.toLowerCase() === data);
    if(foundCards.length===0) {
      setMessageForMoviesList('Ничего не найдено');
      setPreloader(false);
    }else {
      setMessageForMoviesList('');
      setPreloader(false);
      return searchShortMovie(foundCards)
    }}
  };

  React.useEffect(()=> {////загрузает карточки
    apiMovie.getMovies()
    .then(res=>{
      setMoviesList(res);
      })
    getSavedMovies();
  }, [isLoggedIn]);  

  React.useEffect(()=>{///информация о пользователе
    if(isLoggedIn){
      api.getUserInfo()
      .then(data=>{
        setCurrentUser(data);
        setUserId(data)
      });
      //handleSliderStatus();
    }
  },[isLoggedIn]);
  
  React.useEffect(()=>{
    //console.log(searchSavedValue)
   // localStorage.getItem('searchMovie') ?  setSearchValue(localStorage.getItem('searchMovie')) : setSearchValue('');
    //localStorage.getItem('searchSavedMovie') ?  setSearchSavedValue(localStorage.getItem('searchSavedMovie')) : setSearchSavedValue('');
    searchMovie(searchValue);
    searchUserMovie(searchSavedValue);
  },[searchValue, searchSavedValue]);

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
            preloader={preloader} >
          </ProtectedRoute>
          
          <ProtectedRoute path="/saved-movies" 
            isLoggedIn={isLoggedIn}
            compoment={SavedMovies}
            cards = {moviesSavedList} 
            closeMenu = {closeMenu} 
            isMenuOpen ={isMenuOpen} 
            errServer = {errServer} 
            loggedIn={isLoggedIn}
            removeCard={removeCard}
            userId={userId} 
            searchSavedMovies={searchSavedMovies}
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