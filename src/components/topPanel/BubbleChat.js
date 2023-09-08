import { forwardRef } from 'react';

const BubbleChat = forwardRef((props, ref) => (
  <div className="BubbleChat" ref={ref}>
    <div className={`talk-bubble ${props.className}`}>
      <div className="talktext">
        {props.children}
      </div>
    </div>
  </div>
));

export default BubbleChat;
