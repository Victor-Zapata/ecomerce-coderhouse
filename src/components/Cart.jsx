import React from "react";
import useCart from "../hooks/useCart";
import ItemCard from "./ItemCard";

const Cart = () => {
  const { cart, setCart, deleteAll } = useCart();
  return (
    <>
      <div>
        {cart.length > 0
          ? cart.map((item) => <ItemCard key={item.id} item={item} />)
          : "Tu carrito está vacío"}
      </div>
      <div>
        {cart.length > 0 && <button onClick={deleteAll}>Delete All</button>}
      </div>
    </>
  );
};

export default Cart;
