import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <>
      <div className='content'>
        <Promo />
        <AboutProject />
        <Techs />
      </div>
    </>
  );
}

export default Main;

////AboutProject измени повторяющиеся в разных размерах отступы и шрифт