import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(item) {
    if (!item.id) return;

    setCart((prevCart) => {
      const found = prevCart.find((i) => i.id === item.id);

      if (found) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  }

  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCart([]);
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  }

  function getTotalPrice() {
    return cart.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        emptyCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
