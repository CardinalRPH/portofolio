/* eslint-disable default-case */
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import MidPanel from '../../components/midPanel';
import TopPanel from '../../components/topPanel';
import TPVTopPanel from '../../components/topPanel/TabPhoneView';
import TPVMidPanel from '../../components/midPanel/TabPhoneView';
import Footer from '../../components/footer';

function PCView() {
  const midEl = useRef(null);
  const topEl = {
    topSPanel: useRef(null),
    topimg: useRef(null),
    topimg1: useRef(null),
    topimg2: useRef(null),
    topimg3: useRef(null),

  };
  const mainjs = (topSPanel, midPanel, topimg, topimg1, topimg2, topimg3) => {
    let prevScrollY = window.scrollY;
    let currentwidth = 20;
    let imgsh1 = 0;
    const plusFromHigh = 15;
    const minFromLow = 5.5;
    const targetLow = 3.5;
    const targetHigh = 65;

    window.addEventListener('scroll', () => {
      // scroll top
      if (window.scrollY < prevScrollY && window.scrollY < midPanel.getBoundingClientRect().top + 100 && imgsh1 === 0) {
        if (currentwidth > 20) {
          currentwidth -= 5;
          topSPanel.style.width = `${currentwidth}%`;
          if (100 - currentwidth + plusFromHigh >= targetHigh) {
            topimg.style.left = `${targetHigh}%`;
          } else if (100 - currentwidth + plusFromHigh >= targetLow) {
            topimg.style.left = `${100 - currentwidth + plusFromHigh}%`;
          }
        }
      } else {
        // scroll bot
        // need fix
        if (currentwidth < 100) {
          currentwidth += 5;
          topSPanel.style.width = `${currentwidth}%`;

          if (100 - currentwidth - minFromLow <= targetLow) {
            topimg.style.left = `${targetLow}%`;
            // console.log(100 - currentwidth - minFromLow);
          } else if (100 - currentwidth - minFromLow <= targetHigh) {
            topimg.style.left = `${100 - currentwidth - minFromLow}%`;
          }
        } else if (window.scrollY < prevScrollY && window.scrollY < midPanel.getBoundingClientRect().top + 100) {
          // scroll to top
          if (imgsh1 > 0) {
            imgsh1 -= 2;
            switch (imgsh1) {
              case 10:
                topimg1.style.opacity = 0;
                break;
              case 40:
                topimg2.style.opacity = 0;
                break;
                                // case 70:
                                //     topimg3.style.opacity = 0;
                                //     break;
            }
          }
        } else {
          if (imgsh1 < 90) {
            imgsh1 += 2;
            switch (imgsh1) {
              case 30:
                topimg1.style.opacity = 1;
                break;
              case 60:
                topimg2.style.opacity = 1;
                break;
                                // case 90:
                                //     topimg3.style.opacity = 1;
                                //     break;
            }
          }
          // scroll to bot
        }
      }
      if (currentwidth < 100) {
        topimg1.style.opacity = 0;
        topimg2.style.opacity = 0;
        // topimg3.style.opacity = 0;
      }
      if (window.scrollY < 10) {
        imgsh1 = 0;
        currentwidth = 20;
        topSPanel.style.width = `${currentwidth}%`;
        topimg.style.left = `${targetHigh}%`;
        topimg1.style.opacity = 0;
        topimg2.style.opacity = 0;
        // topimg3.style.opacity = 0;
      }

      if (window.scrollY >= midPanel.getBoundingClientRect().top + 100) {
        imgsh1 = 0;
        currentwidth = 100;
        topSPanel.style.width = `${currentwidth}%`;
        topimg.style.left = `${targetLow}%`;
        topimg1.style.opacity = 1;
        topimg2.style.opacity = 1;
        // topimg3.style.opacity = 1;
      }

      prevScrollY = window.scrollY;
    });
  };

  const transition = ({ el }) => {
    const trtl = anime.timeline({
      easing: 'easeInOutExpo',
    });
    trtl.add({
      targets: el.topSPanel,
      top: 0,
      duration: 100,
    }).add({
      targets: el.topimg,
      opacity: 1,
      duration: 150,
    });
  };

  useEffect(() => {
    const midPanel = midEl.current;
    const topSPanel = topEl.topSPanel.current;
    const topimg = topEl.topimg.current;
    const topimg1 = topEl.topimg1.current;
    const topimg2 = topEl.topimg2.current;
    // const topimg3 = topEl.topimg3.current;

    mainjs(topSPanel, midPanel, topimg, topimg1, topimg2); // topimg2, topimg3
    transition({ el: { topSPanel, topimg } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopPanel topEl={topEl} />
      <MidPanel section2El={midEl} />
      <Footer section2El={midEl} />
    </>
  );
}

function TabPhoneView() {
  return (
    <>
      <TPVTopPanel />
      <TPVMidPanel />
      <Footer isTPV />
    </>
  );
}
function MainPages() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
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
      {screenSize >= 700 ? <PCView /> : <TabPhoneView />}
    </>
  );
}
export default MainPages;
