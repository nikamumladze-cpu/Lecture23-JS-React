import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { products as localData } from "../data/products";

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(localData);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <p className="cat">{p.category}</p>
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>
            <button
              className="add-btn"
              disabled={!p.inStock}
              onClick={() => addToCart(p)}>
              {p.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))
      ) : (
        <p className="empty">No products found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default ProductList;
