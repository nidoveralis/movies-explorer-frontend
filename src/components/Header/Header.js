import './Header.css';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({isLoggedIn, onClose, isOpenMenu, theme }) {
  
  const headerTheme = (`header ${theme}`); 
  return (
    <header className={headerTheme}>
      <Link to='/'>
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} onClose={onClose} isOpenMenu={isOpenMenu} />
    </header>
  );
}

export default Header;