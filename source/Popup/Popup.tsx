import * as React from 'react';

import './styles.scss';
const Popup: React.FC = () => {
  return (
    <section id="popup">
      <h1 style={{ fontWeight: 'bold' }}>Keyboard shortcuts</h1>
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'sky'
      }}>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>F</kbd> to enter full screen of current video</li>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>ESC</kbd> to exit full screen of current video</li>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>T</kbd> to toggle sidebar</li>
      </ul>
    </section>
  );
};

export default Popup;
