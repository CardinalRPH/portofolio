import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

function SplashScreen() {
  const obj = useRef(null);

  useEffect(() => {
    anime({
      targets: obj.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'alternate',
      delay(el, i) { return i * 250; },
      duration: 2000,
      loop: true,
    });
  }, []);

  return (
    <div className="splash-screen">
      <svg width="700" height="100" id="svg-splash" viewBox="110 -10 10 50">
        <path
          stroke="#F2E3D5"
          ref={obj}
          strokeWidth="2"
          fill="none"
          d="m0,29.66h5.7v-12.41h14.66V0H0v29.66ZM5.7,5.08h9.31v7.33H5.7v-7.33Zm18.79,24.58h20.36V0h-20.36v29.66Zm5.7-24.58h9.31v19.5h-9.31V5.08Zm18.79,24.58h5.7v-12.41h2l7.31,12.41h5.35l-6.96-12.41h6.96V0h-20.36v29.66Zm5.7-24.58h9.31v7.33h-9.31v-7.33Zm18.79,0h7.7v24.58h5.7V5.08h6.96V0h-20.36v5.08Zm24.49,24.58h20.36V0h-20.36v29.66Zm5.7-24.58h9.31v19.5h-9.31V5.08Zm18.79,24.58h5.7v-12.41h14.66v-4.83h-14.66v-7.33h14.66V0h-20.36v29.66Zm24.49,0h20.36V0h-20.36v29.66Zm5.7-24.58h9.31v19.5h-9.31V5.08Zm24.49-5.08h-5.7v29.66h20.36v-5.08h-14.66V0Zm18.79,29.66h5.7V0h-5.7v29.66ZM205.78,0v29.66h20.36V0h-20.36Zm15.01,24.58h-9.31V5.08h9.31v19.5Z"
        />
      </svg>
    </div>
  );
}

export default SplashScreen;
