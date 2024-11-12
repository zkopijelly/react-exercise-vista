import Star from './Star';

const Rating = ({ value, maximumValue = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maximumValue; i++) {
    if (i <= Math.floor(value)) {
      // Fully filled stars
      stars.push(<Star key={i} filled={true} />);
    } else if (i === Math.floor(value) + 1 && value % 1 !== 0) {
      // Half-filled star if the value has a decimal part
      stars.push(<Star key={i} halfFilled={true} />);
    } else {
      // Empty star
      stars.push(<Star key={i} filled={false} />);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
