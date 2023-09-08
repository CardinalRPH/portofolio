import { faGithubSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import About from '../../data/GeneralData';

function Footer({ section2El, isTPV }) {
  const [fheight, setFheight] = useState(null);
  useEffect(() => {
    if (!isTPV) {
      setFheight(section2El.current.clientHeight - 25);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="footer" style={{ top: isTPV ? 'auto' : `${fheight}px` }}>
      <div className="footer-wrapper-text">
        <h1>Find</h1>
        <h1>Me</h1>
        <h1>On</h1>
      </div>
      <div className="footer-wrapper">
        <div className="footer-iconWrapper" onClick={() => { handleClick(About.Social.LinkedIn.link); }}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <h2>{About.Social.LinkedIn.name}</h2>
        </div>
        <div className="footer-iconWrapper" onClick={() => { handleClick(About.Social.Instagram.link); }}>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <h2>{About.Social.Instagram.name}</h2>
        </div>
        <div className="footer-iconWrapper" onClick={() => { handleClick(About.Social.Github.link); }}>
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          <h2>{About.Social.Github.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
