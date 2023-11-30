 /// <reference types="chrome" />
import * as React from 'react';

import './styles.scss';
const Popup: React.FC = () => {
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs: chrome.tabs.Tab[]) => {
      setUrl(tabs[0].url || '');
    });
  });

  const downloadUrl = `https://rubick.app/?url=${encodeURIComponent(url)}`;

  return (
    <section id="popup" style={{ fontSize: '1.25rem' }}>
      <h1 style={{ fontWeight: 'bold' }}>Keyboard shortcuts</h1>
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'sky'
      }}>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>T</kbd> to toggle the sidebar</li>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>F</kbd> to enter full screen of the current video</li>
        <li>Press <kbd style={{ fontWeight: 'bold' }}>ESC</kbd> to exit full screen of the current video</li>
      </ul>
      <a href={downloadUrl} type="button" style={{
        marginTop: '1rem',
        border: '1px solid #ccc',
        background: '#fe2c55',
        borderRadius: 4,
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
        gap: '0.5rem',
      }}>
        <svg style={{
          width: '1rem',
          height: '1rem'
        }} aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>Download this video</span>
      </a>
    </section>
  );
};

export default Popup;
