import anime from 'animejs';
import { useEffect, useRef } from 'react';

function ScrollTransition({ el }) {
  const squarescroll = {
    square1: useRef(null),
    square2: useRef(null),
  };

  const scrollTransition = (el) => {
    let scroll1 = true;
    let scroll2 = true;
    window.addEventListener('scroll', () => {
      // let midcontainer1 = (el.mid1.getBoundingClientRect().bottom - el.mid1.getBoundingClientRect().top)/2
      if (window.scrollY >= el.mid1.getBoundingClientRect().bottom && scroll1 === true) {
        anime({
          targets: el.square1,
          translateY: '-30px',
          easing: 'easeInOutExpo',
        });
        scroll1 = false;
      }
      if (window.scrollY >= el.mid2.getBoundingClientRect().bottom + 1000 && scroll2 === true) {
        anime({
          targets: el.square2,
          translateY: '-30px',
          easing: 'easeInOutExpo',
        });
        scroll2 = false;
      }
      if (window.scrollY <= el.mid2.getBoundingClientRect().bottom + 1000 && window.scrollY <= el.mid1.getBoundingClientRect().top + 1000 && scroll1 === false) {
        anime({
          targets: el.square1,
          translateY: '270px',
          easing: 'easeInOutExpo',
        });
        scroll1 = true;
      }
      if (window.scrollY <= el.mid2.getBoundingClientRect().bottom + 1000 && scroll2 === false) {
        anime({
          targets: el.square2,
          translateY: '270px',
          easing: 'easeInOutExpo',
          // duration:300
        });
        scroll2 = true;
      }
    });
  };
  const ScrollInto = (el) => {
    el.current.scrollIntoView(true);
  };
  useEffect(() => {
    scrollTransition({
      mid1: el.mid1.current,
      mid2: el.mid2.current,
      square1: squarescroll.square1.current,
      square2: squarescroll.square2.current,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mid-vertical-line">
      <div className="mini-square ms1" onClick={() => { ScrollInto(el.midHd1); }} ref={squarescroll.square1} />
      <div className="mini-square ms2" onClick={() => { ScrollInto(el.midHd2); }} ref={squarescroll.square2} />
    </div>
  );
}

export default ScrollTransition;
