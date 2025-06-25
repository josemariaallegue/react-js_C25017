import { createContext, useContext, useState } from "react";

const CardContext = createContext(null);

export function CardProvider({ children }) {
  const [card, setCard] = useState([]);

  function addItem(item) {
    setCard((prevCard) => [...prevCard, item]);
  }

  function removeItem(id) {
    setCard((prevCard) => prevCard.filter((item) => item.id !== id));
  }

  function emptyCard() {
    setCard([]);
  }

  return (
    <CardContext.Provider value={{ card, addItem, removeItem, emptyCard }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  return useContext(CardContext);
}
