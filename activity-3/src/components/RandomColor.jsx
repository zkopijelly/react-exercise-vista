import { useState, useEffect } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('red'); 

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div className="random-color-container">
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '20px',
          borderRadius: '10px',
          transition: 'background-color 1s ease, transform 0.3s ease',
          padding: '30px',
          minHeight: '60vh',
        }}
      >
        <p>Current Color: <br/>{color}</p>
      </div>
    </div>
  );
};

export default RandomColor;
