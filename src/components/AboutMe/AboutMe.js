import './AboutMe.css';
import ImageMe from '../../images/example.jpg'

function AboutMe() {
  return(
    <section className="aboutme">
      <h2 className="section__title">Студент</h2>
      <div className="aboutme__conteiner">
        <div className="aboutme__content">
          <h3 className="aboutme__title">Виталий</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 
              2015 года работал в компании «СКБ Контур». После того, как прошёл курс по 
              веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        </div>
        <img src={ImageMe} alt="Фото" className="aboutme__image"/>
        <a href="https://github.com/nidoveralis" target="_blank" className="aboutme-link link">Github</a>
      </div>
    </section>
  )
}

export default AboutMe;