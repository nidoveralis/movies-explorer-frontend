import './Promo.css';
import logo_text from '../../images/logo_text.svg';


function Promo() {
  return (
    <section className="promo">
      <div className="promo-text">
        <h1 className="promo-text__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo-text__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <img src={logo_text} className="promo__image"/>
    </section>
  );
}

export default Promo;