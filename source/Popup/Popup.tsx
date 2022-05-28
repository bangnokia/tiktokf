import * as React from 'react';

import './styles.scss';

const Popup: React.FC = () => {
  const [active, setActive] = React.useState(true)

  function toggle() {
    setActive(!active)
  }

  return (
    <section id="popup">
      <button id="toggle-btn" type="button" onClick={toggle} style={{

      }}>
        {active ? 'Off' : 'On'}
      </button>
    </section>
  );
};

export default Popup;
