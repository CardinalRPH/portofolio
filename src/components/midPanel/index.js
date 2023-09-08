import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { TrMainText } from '../../utils/TransitionText';
import Contain2 from './contain2';
import Contain1 from './contain1';
import ScrollTransition from './scrollTransitionn';

function MidPanel({ section2El }) {
  const Title = {
    lineRef1: useRef(null),
    textRef1: useRef(null),
    lineRef2: useRef(null),
    textRef2: useRef(null),
  };
  const MidHeader = {
    mid1: useRef(null),
    mid2: useRef(null),
  };
  const MidContainer = {
    midCon1: useRef(null),
    midCon2: useRef(null),
  };

  const transition = (el) => {
    let scroll1 = true;
    let scroll2 = true;
    const trtl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 500,
      loop: false,
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY >= el.mid1.getBoundingClientRect().bottom + 1000 && scroll1 === true) {
        trtl.add({
          targets: el.lineElement1,
          width: `${el.TextEl1.getBoundingClientRect().width + 60}px`,
        }).add({
          targets: el.TextEl1,
          rotate: 0,
          translateY: 0,
          opacity: 1,
        });
        scroll1 = false;
      }
      if (window.scrollY >= el.mid2.getBoundingClientRect().bottom + 1000 && scroll2 === true) {
        trtl.add({
          targets: el.lineElement2,
          width: `${el.TextEl2.getBoundingClientRect().width + 60}px`,
        }).add({
          targets: el.TextEl2,
          rotate: 0,
          translateY: 0,
          opacity: 1,
        });
        scroll2 = false;
      }
    });
  };

  useEffect(() => {
    transition({
      lineElement1: Title.lineRef1.current,
      TextEl1: Title.textRef1.current,
      lineElement2: Title.lineRef2.current,
      TextEl2: Title.textRef2.current,

      mid1: MidHeader.mid1.current,
      mid2: MidHeader.mid2.current,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="section2" ref={section2El}>
      <div className="mid-panel">
        <div className="mid-panel-left">
          <ScrollTransition el={{
            mid1: MidContainer.midCon1, mid2: MidContainer.midCon2, midHd1: MidHeader.mid1, midHd2: MidHeader.mid2,
          }}
          />
        </div>
        <div className="mid-panel-center">
          {/* container 1 */}
          {/* //header */}
          <div className="mid-panel-header" ref={MidHeader.mid1}>
            <div className="mid-mini-line" ref={Title.lineRef1} />
            <h1 className="tr-main-text" ref={Title.textRef1} style={TrMainText}>Languages and Frameworks</h1>
          </div>
          {/* //header end */}
          <div className="mid-panel-container" ref={MidContainer.midCon1}>
            <Contain1 />
          </div>
          {/* container 1 end */}
          {/* container 2 */}
          {/* header */}
          <div className="mid-panel-header" ref={MidHeader.mid2}>
            <div className="mid-mini-line" ref={Title.lineRef2} />
            <h1 className="tr-main-text" ref={Title.textRef2} style={TrMainText}>Projects</h1>
          </div>
          {/* header end */}

          <div className="mid-panel-container contain-out-container" ref={MidContainer.midCon2}>
            <Contain2 />
          </div>
          {/* container 2 end */}

        </div>
        <div className="mid-panel-right" />
      </div>
    </div>
  );
}

export default MidPanel;
