import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
