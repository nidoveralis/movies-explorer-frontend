import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__content">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer-list">
          <li className="footer-list__item">
            <a href="https://practicum.yandex.ru/" target="_blank" className="footer-list__link link">Яндекс.Практикум</a>
          </li> 
          <li className="footer-list__item">
            <a href="https://github.com/" target="_blank" className="footer-list__link link">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;