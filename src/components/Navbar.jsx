import { useCart } from "../context/CartContext";

const Navbar = ({ onCartClick, searchTerm, setSearchTerm }) => {
  const { getTotalCount } = useCart();

  return (
    <nav className="navbar">
      <h1 className="logo">TechStore</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <button className="cart-btn" onClick={onCartClick}>
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
        <span className="badge">{getTotalCount()}</span>
      </button>
    </nav>
  );
};

export default Navbar;
