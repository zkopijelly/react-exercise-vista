import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); 

  useEffect(() => {
    console.log('Current count value:', count);
  }, [count]);

  const increment = () => setCount(count + step);

  const decrement = () => setCount(count - step);

  const getCounterBackgroundColor = () => {
    if (count > 0) {
      return '#67d687'; 
    } else if (count < 0) {
      return '#f56c6c'; 
    } else {
      return '#f0f0f0'; 
    }
  };

  return (
    <div
      className="counter-container"
      style={{ backgroundColor: getCounterBackgroundColor() }}
    >
      <h2>Counter</h2>
      <h2 className="counter-value">{count}</h2>

      <div>
        <label htmlFor="step-input">Step: </label>
        <input
          id="step-input"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          style={{ padding: '5px', fontSize: '16px', width: '60px', margin: '10px' }}
        />
      </div>

      <div>
        <button onClick={increment} className="counter-button" style={{backgroundColor: '#67d687'}}>
          Increment
        </button>
        <button onClick={decrement} className="counter-button" style={{backgroundColor: '#f56c6c'}}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
