import './Header.css';
import logo from '../../images/logo.svg';
import {Route, Switch, Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <header className="header header_theme_dark">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Navigation />
    </header>
  );
}

export default Header;