import "./Navigation.css";
import LogoProfile from '../../images/logo__profile.svg';
import {Route, Switch, Link} from 'react-router-dom';

function Navigation(props) {
  const classNameMenu = `navigation__menu ${props.isOpenMenu ? "navigation__menu_opened" : ""}`;
  const classNameCloseButton = `navigation__close ${props.isOpenMenu ? "navigation__close_active" : ""}`;

  return (
    <section className="navigation">
      <div className={classNameMenu}>
        <Switch>
            <Route path='/signup'>
            </Route>
              <Route path='/signin'>
            </Route>
            <Route path='/movies'>
              <button  className={classNameCloseButton} onClick={props.onClose}></button>
              <div className="navigation__links">
                <Link to='/' className="navigation__link link link_hidden">Главная</Link>
                <Link to='/movies' className="navigation__link link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
              </div>
              <Link to='/profile'  className="link-profile link ">
                <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                <p className="link-profile__title">Аккаунт</p>
              </Link>
            </Route>
            <Route path='/saved-movies'>
              <div className="navigation__links">
                <Link to='/movies' className="navigation__link link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
              </div>
              <Link to='/profile'  className="link-profile link">
                <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                <p className="link-profile__title">Аккаунт</p>              </Link>
            </Route>
            <Route path='/profile'>
              <div className="navigation__links">
                <Link to='/movies' className="navigation__link link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
              </div>
              <Link to='/profile'  className="link-profile link">
                <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                <p className="link-profile__title">Аккаунт</p>              </Link>
            </Route>

            <Route path='/'>
              <Link to='/signup' className="navigation__signup link">Регистрация</Link>
              <Link to='/signin' className="navigation__signin">Войти</Link>
            </Route>
        </Switch>
      </div>
      <span className="navigation__burger-menu" onClick={props.onClose}></span>
    </section>
  );
}

export default Navigation;