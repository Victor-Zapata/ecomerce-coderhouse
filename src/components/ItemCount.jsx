import React from "react";

const ItemCount = ({ stock, initial, setInitial, onAdd }) => {
  const increment = () => {
    setInitial(initial + 1);
  };

  const decrement = () => {
    if (initial == 0) {
      return;
    }
    setInitial(initial - 1);
  };

  return (
    <div>
      <div className="d-flex">
        <button className="btn btn-danger" type="" onClick={decrement}>
          -
        </button>
        <input type="text" className="input-group-text text-center" value={initial} />

        <button className="btn btn-success" type="" onClick={increment}>
          +
        </button>
      </div>
      <div className="py-2">
        <button
          className="btn btn-primary"
          type=""
          onClick={onAdd}
          disabled={initial > stock ? true : false}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
