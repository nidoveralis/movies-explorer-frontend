import "./Navigation.css";
import LogoProfile from '../../images/logo__profile.svg';
import {Route, Switch, Link} from 'react-router-dom';

function Navigation({isLoggedIn, isOpenMenu, onClose}) {

  const classNameMenu = `navigation__menu ${isOpenMenu ? "navigation__menu_opened" : ""} `;
  const classNameCloseButton = `navigation__close ${isOpenMenu ? "navigation__close_active" : ""}`;

  return (
    <section className="navigation">
        <Switch>
            <Route path='/signup'>
            </Route>
              <Route path='/signin'>
            </Route>
            {isLoggedIn ? 
            <><div className={`${classNameMenu} navigation__menu_main`} >
                <button  className={classNameCloseButton} onClick={onClose}></button>
                <div className="navigation__links">
                  <Link to='/' className="navigation__link link link_hidden" onClick={onClose}>Главная</Link>
                  <Link to='/movies' className="navigation__link link" onClick={onClose}>Фильмы</Link>
                  <Link to='/saved-movies' className="navigation__link link" onClick={onClose}>Сохранённые фильмы</Link>
                </div>
                <Link to='/profile'  className="link-profile link"  onClick={onClose}>
                  <img alt='Профиль' src={LogoProfile} className="link-profile__image" />
                  <p className="link-profile__title">Аккаунт</p>
                </Link>
                </div>
                <div className="burger-conteiner" onClick={onClose}>
                  <span className="navigation__burger-menu"></span>
                </div> </> :
            <><div className={`${classNameMenu}`}>
                <Link to='/signup' className="navigation__signup link">Регистрация</Link>
                <Link to='/signin' className="navigation__signin link">Войти</Link>
              </div></>}
        </Switch>
    </section>
  );
}

export default Navigation;