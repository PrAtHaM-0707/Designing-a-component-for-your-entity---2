
import ViewProductButton from './button.jsx';

const ProductCard = () => {
  // Static data variables
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const productPrice = '$29.99';

  // Card styles
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    transition: 'transform 0.2s',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#666',
    margin: '0',
  };

  return (
    <div 
      style={cardStyle}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={productImage} alt={productName} style={imageStyle} />
      <h3 style={nameStyle}>{productName}</h3>
      <p style={priceStyle}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;