import React, { useState } from 'react';

function LightSwitch() {
  const [isLightOn, setLight] = useState(false);

  const toggleLight = () => {
    setLight(prevState => !prevState);
  };

  return (
    <div className={`light-switch-container ${isLightOn ? 'light-on-background' : 'light-off-background'}`}>
      <h1 className="light-status">{isLightOn ? '🌟 Light is On' : '💡 Light is Off'}</h1>
      <button
        onClick={toggleLight}
        className={`switch-button ${isLightOn ? 'light-on' : 'light-off'}`}
      >
        {isLightOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default LightSwitch;
