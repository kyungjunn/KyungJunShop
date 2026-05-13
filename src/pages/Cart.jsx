import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price,
    0
  );

  return (
    <div className="cart-page">
      <h2>장바구니</h2>

      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          index={index}
          removeFromCart={removeFromCart}
        />
      ))}

      <h3>
        총 금액 : {totalPrice.toLocaleString()}원
      </h3>
    </div>
  );
};

export default Cart;