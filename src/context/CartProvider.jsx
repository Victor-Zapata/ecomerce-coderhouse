import { createContext, useState } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    if (!isInCart(item.id)) {
      setCart([...cart, item]);
    }
  };

  const deleteProduct = (id) => {
    setCart(cart.filter((e) => id !== e.id));
  };

  const isInCart = (id) => {
    if (cart.find((e) => e.id === id)) {
      return true;
    }
    return false;
  };

  const deleteAll = () => {
      setCart([])
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addProduct, deleteProduct, deleteAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;
