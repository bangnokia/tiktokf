import { useState, useEffect } from 'react';
import { browser } from 'webextension-polyfill-ts';

import './styles.scss';

type PopupProps = {
  initActive: Boolean
}

const Popup = ({ initActive }: PopupProps) => {
  const [active, setActive] = useState<Boolean>(initActive)

  useEffect(() => {
    console.log('set active', active)
    browser.storage.local.set({ active })
  }, [active])

  function toggle() {
    setActive(!active)
  }

  return (
    <div id="popup">
      <button id="toggle-btn" type="button" onClick={toggle}>
        {active ? 'Off' : 'On'}
      </button>
    </div>
  );
};

export default Popup;
