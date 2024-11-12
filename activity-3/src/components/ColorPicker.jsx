import { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <h2 className="color-picker-title">Pick a Color</h2>
      
      <select
        className="color-dropdown"
        value={selectedColor}
        onChange={handleColorChange}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
      </select>

      <div 
        className="color-display-box"
        style={{ backgroundColor: selectedColor }}
      >
        {`Selected Color: ${selectedColor}`}
      </div>
    </div>
  );
}

export default ColorPicker;
