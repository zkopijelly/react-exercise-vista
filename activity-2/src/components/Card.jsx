const Card = ({ title, price, imageUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-price">${price}</p>
      </div>
    );
  };
  
  export default Card;
  