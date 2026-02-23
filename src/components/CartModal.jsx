import { useCart } from "../context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="m-header">
          <h2>Your Cart</h2>
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="scroll-area">
          {cartItems.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="item">
                <div className="info">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
                <div className="ctrls">
                  <div className="qty">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="m-footer">
            <button className="clear-btn" onClick={clearCart}>
              Clear All
            </button>
            <div className="total">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
