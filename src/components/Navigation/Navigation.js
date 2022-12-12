import "./Navigation.css";
import {Route, Switch, Link} from 'react-router-dom';

function Navigation() {
  return (
    <section className="navigation">
      <a href="/#" className="navigation__signup link">Регистрация</a>
      <button className="navigation__signin">Войти</button>
    </section>
  );
}

export default Navigation;