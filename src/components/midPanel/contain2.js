import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import About from '../../data/GeneralData';

function Contain2() {
  const stagContainer = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const transition = (el) => {
    let scroll1 = true;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= el.getBoundingClientRect().bottom + 1000 && scroll1 === true) {
        anime({
          targets: '.tr-sqr',
          translateX: anime.stagger(10, { grid: [10, 5], from: 'center', axis: 'x' }),
          translateY: anime.stagger(10, { grid: [15, 5], from: 'center', axis: 'y' }),
          rotateZ: anime.stagger([0, 90], { grid: [13, 5], from: 'center', axis: 'x' }),
          delay: anime.stagger(200, { grid: [13, 5], from: 'center' }),
          easing: 'easeInOutQuad',
          autoplay: true,
        });
        scroll1 = false;
      }
    });
  };

  useEffect(() => {
    transition(stagContainer.current);

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="left-contain2">
        {screenSize < 1130
          ? (About.PortoContent.map((item, index) => (index % 2 === 0 ? (<div className="rectangle" style={{ clipPath: hoveredIndex === index ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)' }} key={index}><div className="rectangle-inn rec-inn-L rectangle-inn-small"><h1>{item.name}</h1></div></div>) : (<div className="rectangle rectangle-hide" />))))
          : (About.PortoContent.map((item, index) => (index % 2 === 0 ? (<div className="rectangle" style={{ clipPath: hoveredIndex === index ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)' }} key={index}><div className="rectangle-inn rec-inn-L"><h1>{item.name}</h1></div></div>) : '')))}

      </div>
      <div className="starggering-axis-grid stag-content" ref={stagContainer}>
        <div className="grid shadow">
          {About.PortoContent.map((item, index) => (<div className="square" key={index} />))}
        </div>
        <div className="grid">
          {About.PortoContent.map((item, index) => (
            <div className="square tr-sqr" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} key={index}>
              <img src={item.image} alt="" />
              <div className="square-clicker">
                {item.github === '' ? ('') : (<FontAwesomeIcon className="square-icon" icon={faGithub} onClick={() => window.location.href = item.github} size="2xl" title="View Code" />)}
                {item.link === '' ? ('') : (<FontAwesomeIcon className="square-icon" icon={faArrowUpRightFromSquare} onClick={() => window.location.href = item.link} size="2xl" title="Visit Site" />)}
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="right-contain2">
        {screenSize < 1130
          ? (About.PortoContent.map((item, index) => (index % 2 === 1 ? (<div className="rectangle" style={{ clipPath: hoveredIndex === index ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }} key={index}><div className="rectangle-inn rec-inn-R rectangle-inn-small"><h1>{item.name}</h1></div></div>) : (<div className="rectangle rectangle-hide" />))))
          : (About.PortoContent.map((item, index) => (index % 2 === 1 ? (<div className="rectangle" style={{ clipPath: hoveredIndex === index ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }} key={index}><div className="rectangle-inn rec-inn-R"><h1>{item.name}</h1></div></div>) : '')))}
      </div>
    </>
  );
}

export default Contain2;
