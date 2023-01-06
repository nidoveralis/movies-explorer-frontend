import "./Navigation.css";
import LogoProfile from '../../images/logo__profile.svg';
import {Route, Switch, Link} from 'react-router-dom';

function Navigation({isLoggedIn, isOpenMenu, onClose}) {

  const classNameMenu = `navigation__menu ${isOpenMenu ? "navigation__menu_opened" : ""}`;
  const classNameCloseButton = `navigation__close ${isOpenMenu ? "navigation__close_active" : ""}`;

  return (
    <section className="navigation">
        <Switch>
            <Route path='/signup'>
            </Route>
              <Route path='/signin'>
            </Route>
            {isLoggedIn ? 
            <><div className={classNameMenu}>
                <button  className={classNameCloseButton} onClick={onClose}></button>
                <div className="navigation__links">
                  <Link to='/' className="navigation__link link link_hidden">Главная</Link>
                  <Link to='/movies' className="navigation__link link">Фильмы</Link>
                  <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
                </div>
                <Link to='/profile'  className="link-profile link ">
                  <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                  <p className="link-profile__title">Аккаунт</p>
                </Link>
                </div>
                <span className="navigation__burger-menu" onClick={onClose}></span></> :
            <><div className={`${classNameMenu} navigation__menu_main`}>
                <Link to='/signup' className="navigation__signup link">Регистрация</Link>
                <Link to='/signin' className="navigation__signin link">Войти</Link>
              </div></>}
        </Switch>
     
      
    </section>
  );
}

export default Navigation;