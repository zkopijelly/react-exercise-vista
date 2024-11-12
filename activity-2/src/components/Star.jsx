const Star = ({ filled, halfFilled }) => {
    return (
      <span className={`star ${filled ? 'filled' : ''} ${halfFilled ? 'half-filled' : ''}`}>
        {filled || halfFilled ? '★' : '☆'}
      </span>
    );
  };
  
  export default Star;
  