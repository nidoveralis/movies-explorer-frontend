import './Header.css';
import logo from '../../images/logo.svg';
import { Switch, Route, Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const headerTheme = (`header ${props.theme}`); 
  return (
    <header className={headerTheme}>
      <Switch>
        <Route path='/signup'>
          <Link to='/'>
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>
        </Route>
        <Route path='/signin'>
          <Link to='/'>
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>
        </Route>
        <Route path='/'>
          <Link to='/'>
            <img className="header__logo" src={logo} alt="Логотип" />
          </Link>
          <Navigation onClose={props.onClose} isOpenMenu={props.isOpenMenu} />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;