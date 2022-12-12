import './Portfolio.css';
import LogoPortfolio from '../../images/logo__aboutme.svg'

function Portfolio() {
  return(
    <section className="portfolio">
      <ul className="portfolio-list">Портфолио</ul>
        <li className="portfolio-list__item">
          <a href="https://nidoveralis.github.io/how-to-learn/ link" target="_blank" className="portfolio-link">
          <p className="portfolio-link__subtitle">Статичный сайт</p>
          <img  className="portfolio-link__logo" src={LogoPortfolio} alt="Перейти по ссылке" />
          </a>
        </li>
        <li className="portfolio-list__item">
          <a href="https://nidoveralis.github.io/russian-travel/index.html" target="_blank" className="portfolio-link link" >
            <p className="portfolio-link__subtitle">Адаптивный сайт</p>
            <img  className="portfolio-link__logo" src={LogoPortfolio} alt="Перейти по ссылке" />
          </a>
        </li>
        <li className="portfolio-list__item">
          <a href="https://github.com/nidoveralis/react-mesto-api-full" target="_blank" className="portfolio-link link" >
            <p className="portfolio-link__subtitle">Одностраничное приложение</p>
            <img  className="portfolio-link__logo" src={LogoPortfolio} alt="Перейти по ссылке" />
          </a>
        </li>

    </section>
  )
}

export default Portfolio;