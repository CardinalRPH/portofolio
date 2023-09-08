import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { TrMainText } from '../../../utils/TransitionText';
import desk from '../../../assets/foSvg/desk.svg';
import man from '../../../assets/foSvg/man.svg';
import BubbleChat from '../BubbleChat';
import About from '../../../data/GeneralData';

function TPVTopPanel() {
  const test = useRef(null);

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
    <div className="scroll-top-panel-PTV">
      <div className="top-panel-PTV" id="top-panel">
        <div className="top-panel-container-PTV">
          <div className="top-panel-text-container-PTV">
            <h2 className="tr-main-text" style={TrMainText} ref={textEl.maintxt1}>Hello, Im</h2>
            <h1 className="tr-main-text" style={TrMainText} ref={textEl.maintxt2}>{About.Name}</h1>
            <h4 className="tr-main-text" style={TrMainText} ref={textEl.maintxt3}>This Is My Portofolio Web</h4>
          </div>
        </div>
        <div className="side-panel-PTV" ref={test}>
          <div className="side-panel-inner-PTV">
            <BubbleChat className="tri-center btm-center">
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
            <object data={desk} aria-label="Desk" />
            <object data={man} aria-label="Man" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TPVTopPanel;
