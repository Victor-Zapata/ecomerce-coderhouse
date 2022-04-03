import React from "react";

const ItemCount = ({ stock, initial, setInitial, onAdd }) => {
    const increment = () => {
        setInitial(initial+1)
    }

    const decrement = () => {
        if(initial == 0){
            return
        }
        setInitial(initial-1)
    }

  return (
    <div>
      <div className="d-flex">
        <button type="" onClick={decrement}>-</button>
        <input type="text" value={initial} />

        <button type="" onClick={increment}>+</button>
      </div>

      <button type="" onClick={onAdd} disabled={initial > stock ? true : false} >Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
