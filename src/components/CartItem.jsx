const CartItem = ({ item, index, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div>
        <h3>{item.name}</h3>
        <p>{item.price.toLocaleString()}원</p>
      </div>

      <button onClick={() => removeFromCart(index)}>
        삭제
      </button>
    </div>
  );
};

export default CartItem;