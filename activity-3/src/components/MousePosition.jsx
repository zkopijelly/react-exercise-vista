import { useState, useEffect } from 'react';

function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(evt) {
      setPosition({ x: evt.clientX, y: evt.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return (
    <div className="mouse-position-container">
      <h2>Mouse Position</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
}

export default MousePosition;
