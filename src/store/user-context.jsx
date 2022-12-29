import React, { createContext } from "react";

export const CartContext = createContext({
  products: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: {},
});

const UserProvider = ({ children }) => {
  const userContextValues = {
    addItem: (item) => {
      
    },
    removeItem: () => {
      console.log("remove");
    },
  };
  return (
    <CartContext.Provider value={userContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default UserProvider;
