import anime from 'animejs';
import { useEffect, useRef } from 'react';
import desk from '../../assets/foSvg/desk.svg';
import man from '../../assets/foSvg/man.svg';
import { TrMainText } from '../../utils/TransitionText';
import BubbleChat from './BubbleChat';
import VerticalLoop from './VerticalLoop';
import About from '../../data/GeneralData';

function TopPanel({ topEl }) {
  const textEl = {
    maintxt1: useRef(null),
    maintxt2: useRef(null),
    maintxt3: useRef(null),
  };

  const transition = (el) => {
    const trtl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 500,
    });
    trtl.add({
      targets: el.maintxt1,
      rotate: 0,
      translateY: 0,
      opacity: 1,
    }).add({
      targets: el.maintxt2,
      rotate: 0,
      translateY: 0,
      opacity: 1,
    }).add({
      targets: el.maintxt3,
      rotate: 0,
      translateY: 0,
      opacity: 1,
    }).add({
      targets: el.maintxt4,
      rotate: 0,
      translateY: 0,
      opacity: 1,
    });
  };

  useEffect(() => {
    const afterTextEl = {
      maintxt1: textEl.maintxt1.current,
      maintxt2: textEl.maintxt2.current,
      maintxt3: textEl.maintxt3.current,
    };

    transition(afterTextEl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="scroll-top-panel">
      <div className="top-panel" id="top-panel">
        <div className="top-panel-container">
          <div className="top-panel-text-container">
            <h2 className="tr-main-text" style={TrMainText} ref={textEl.maintxt1}>Hello, Im</h2>
            <h1 className="tr-main-text" style={TrMainText} ref={textEl.maintxt2}>{About.Name}</h1>
            <h4 className="tr-main-text" style={TrMainText} ref={textEl.maintxt3}>This Is My Portofolio Web</h4>
          </div>
        </div>
        <div className="side-panel" ref={topEl.topSPanel}>
          <VerticalLoop />
        </div>
      </div>
      <object data={desk} className="top-panel-master-img" ref={topEl.topimg} aria-label="Desk" />
      <div className="top-main-img">
        <object data={man} ref={topEl.topimg1} aria-label="Man" />
        <BubbleChat className="tri-left btm-left" ref={topEl.topimg2}>
          <h1>
            Im
            {` ${About.TitleJob}`}
            {' '}
            at
          </h1>
          <h1>
            {' '}
            {About.JobLoc}
          </h1>
          <p>{About.IntroText}</p>
          <h3>
            Location:
            {About.Location}
          </h3>
        </BubbleChat>
      </div>
    </div>
  );
}

export default TopPanel;
