import Icon from './Icon';

const resolveColorFromType = (type) => {
  switch (type) {
    case 'success':
      return '#d4edda'; // Light green
    case 'warning':
      return '#fff3cd'; // Light yellow
    case 'error':
      return '#f8d7da'; // Light red
    default:
      return '#f0f0f0'; // Neutral gray
  }
};

const Alert = ({ title, type, message }) => {
  return (
    <div className="alert" style={{ backgroundColor: resolveColorFromType(type) }}>
      <h3>
        <Icon type={type} /> {title}
      </h3>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Alert;
