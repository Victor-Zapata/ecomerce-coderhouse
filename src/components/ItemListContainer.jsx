import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const [stock, setStock] = useState(5);
  const [initial, setInitial] = useState(1);

  const onAdd = () => {
    alert("You have selected " + initial + " items.");
}

  return (
    <div className="p-3">
      <div className="py-2">{greeting}</div>
      <div className="py-2">
        <ItemCount 
        stock={stock} 
        initial={initial} 
        setInitial={setInitial}
        onAdd={onAdd} 
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
