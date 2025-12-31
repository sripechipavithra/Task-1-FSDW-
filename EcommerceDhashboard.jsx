import React, { useState } from "react";

export default function Ecommerce() {
  const products = ["Laptop", "Mobile", "Headphones","Television"];
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div style={styles.container}>
      <h2>Products</h2>

      {products.map((item, index) => (
        <div key={index} style={styles.product}>
          <span>{item}</span>
          <button
            onClick={() => addToCart(item)}
            style={styles.button}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h3>Cart ({cart.length})</h3>
      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "15px",
    border: "1px solid #ccc"
  },
  product: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px"
  },
  button: {
    background: "#388e3c",
    color: "white",
    border: "none",
    padding: "4px 8px"
  }
};
