import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <Navbar
        onCartClick={() => setShowCart(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container">
        <ProductList searchTerm={searchTerm} />
      </div>
      <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
    </CartProvider>
  );
}

export default App;
