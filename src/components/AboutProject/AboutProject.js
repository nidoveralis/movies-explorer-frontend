import "./AboutProject.css";

function AboutProject() {
  return(
    <section className="aboutProject">
      <h2 className="aboutProject__title section__title">О проекте</h2>
      <div className="aboutProject-info">
        <div className="aboutProject-info__conteiner">
          <h3 className="aboutProject-info__title">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject-info__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject-info__conteiner">
          <h3 className="aboutProject-info__title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject-info__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject-grid">
        <p className="aboutProject-grid__item aboutProject-grid__item_theme-green">1 неделя</p>
        <p className="aboutProject-grid__item aboutProject-grid__item_theme-grey">4 недели</p>
        <p className="aboutProject-grid__item grey_font">Back-end</p>
        <p className="aboutProject-grid__item grey_font">Front-end</p>
      </div>
    </section>
  )
}
export default AboutProject;