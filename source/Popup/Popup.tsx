import * as React from 'react';

import './styles.scss';
const Popup: React.FC = () => {
  return (
    <section id="popup" style={{ fontSize: '2rem' }}>
      <h1 style={{ fontWeight: 'bold' }}>Keyboard shortcuts</h1>
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'sky'
      }}>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>F</kbd> to enter full screen of the current video</li>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>ESC</kbd> to exit full screen of the current video</li>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>T</kbd> to toggle the sidebar</li>
      </ul>
    </section>
  );
};

export default Popup;
