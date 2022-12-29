import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({isMenuOpen,openMenu }) {
  
  return (
    <>
    <Header theme={'header_theme-darck'} onClose={openMenu} isOpenMenu ={isMenuOpen} />
      <main className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;

////AboutProject измени повторяющиеся в разных размерах отступы и шрифт