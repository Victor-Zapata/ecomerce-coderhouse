import React from "react";
import useCart from "../hooks/useCart";

const ItemCard = ({ item }) => {
  const { deleteProduct } = useCart();
  const { id, name, cost, initial, image } = item;
  return (
    <>
      <div>
        <img src={image[0]} alt="" />
        <span>{name}</span>
        <span>{cost}</span>
        <span>{initial}</span>
      </div>
      <div>
          <button onClick={() => deleteProduct(id)}>Delete</button>
      </div> 
    </>
  );
};

export default ItemCard;
