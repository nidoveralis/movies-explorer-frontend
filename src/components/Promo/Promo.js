import './Promo.css';
import logo_text from '../../images/logo_text.svg';


function Promo() {
  return (
    <section className="promo">
      <img src={logo_text} className="promo__image"/>
        <div className="promo-content">
          <h1 className="promo-content__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo-content__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
        <button className="promo__button">Узнать больше</button>
    </section>
  );
}

export default Promo;