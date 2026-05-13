import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.price.toLocaleString()}원</p>

      <button onClick={() => addToCart(product)}>
        장바구니 담기
      </button>
    </div>
  );
};

export default ProductCard;