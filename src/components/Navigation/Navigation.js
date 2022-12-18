import "./Navigation.css";
import LogoProfile from '../../images/logo__profile.svg';
import {Route, Switch, Link} from 'react-router-dom';

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__menu">
        <Switch>
            <Route path='/signup'>
              
            </Route>
            <Route path='/signin'>
            </Route>

            <Route path='/'>
              <Link to='/signup' className="navigation__signup link">Регистрация</Link>
              <Link to='/signin' className="navigation__signin">Войти</Link>
            </Route>
            <Route path='/movies'>
              <div className="navigation__links">
                <Link to='/movies' className="navigation__link link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
              </div>
              <Link to='/profile'  className="link-profile link">
                <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                <p>Аккаунт</p>
              </Link>
            </Route>
            <Route path='/saved-movies'>
              <div className="navigation__links">
                <Link to='/movies' className="navigation__link link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
              </div>
              <Link to='/profile'  className="link-profile link">
                <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                <p>Аккаунт</p>
              </Link>
            </Route>
            <Route path='/profile'>
              <div className="navigation__links">
                <Link to='/movies' className="navigation__link link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link link">Сохранённые фильмы</Link>
              </div>
              <Link to='/profile'  className="link-profile link">
                <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                <p>Аккаунт</p>
              </Link>
            </Route>
        </Switch>
      </div>
      <span className="navigation__burger-menu"></span>
    </section>
  );
}

export default Navigation;