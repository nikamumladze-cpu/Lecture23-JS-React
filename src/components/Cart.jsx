import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalCount } = useCart();

  return (
    <div className="cart-container">
      <div className="cart-title">
        <span>Your Cart</span>
        <span>({getTotalCount()})</span>
      </div>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6b7280', padding: '20px 0' }}>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <small>${item.price}</small>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="quantity-controls">
                  <button className="btn-qty" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn-qty" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total-section">
            <div className="total-row">
              <span>Total:</span>
              <span className="price-total">${getTotalPrice()}</span>
            </div>
            <button className="btn-checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;