import './Techs.css';

function Techs() {
  return(
    <section className="techs">
       <h2 className="techs__title section__title">Технологии</h2>
       <div className="techs__content">
       <h3 className="techs__header">7 технологий</h3>
       <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые&nbsp;применили в дипломном проекте.</p>
       <ul className="techs-list">
          <li className="techs-list__item">HTML</li>
          <li className="techs-list__item">CSS</li>
          <li className="techs-list__item">JS</li>
          <li className="techs-list__item">React</li>
          <li className="techs-list__item">Git</li>
          <li className="techs-list__item">Express.js</li>
          <li className="techs-list__item">mongoDB</li>
       </ul>
       </div>
    </section>
  )
}

export default Techs;