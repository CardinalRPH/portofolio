import anime from 'animejs';
import { useEffect, useRef } from 'react';
import About from '../../data/GeneralData';

function Contain1() {
  const langLength = About.LanguageNFramework.language.length;
  const frameLength = About.LanguageNFramework.framework.length;

  const langContainer = useRef(null);

  const transition = (el) => {
    let scroll1 = true;
    const trtl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 500,
      loop: false,
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY >= el.langC.getBoundingClientRect().bottom + 1000 && scroll1 === true) {
        for (let i = 0; i < langLength + frameLength; i++) {
          trtl.add({
            targets: `.c2tr-${i}`,
            opacity: 1,
          });
        }
        scroll1 = false;
      }
    });
  };
  useEffect(() => {
    transition({
      langC: langContainer.current,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="contain-container" ref={langContainer}>
        <h2>Base Language</h2>
        <div className="contain-inner-container">
          {About.LanguageNFramework.language.map((item, index) => (<img src={item.icon} className={`c2tr-${index}`} alt={item.name} key={index} />))}
        </div>
      </div>
      <div className="contain-container">
        <h2>Framework</h2>
        <div className="contain-inner-container">
          {About.LanguageNFramework.framework.map((item, index) => (<img src={item.icon} className={`c2tr-${index + langLength}`} alt={item.name} key={index} />))}
        </div>
      </div>
    </>
  );
}

export default Contain1;
