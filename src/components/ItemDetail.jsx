import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { description, cost, image, stock } = item;
  const [initial, setInitial] = useState(0);
  const [checkout, setCheckout] = useState(false);

  const onAdd = () => {
    alert("You have selected " + initial + " items.");
    setCheckout(true);
  };

  return (
    <div className="d-flex py-3">
      <div className="d-flex justify-content-center align-items-center col-6 p-5">
        <p style={{ fontSize: "25px" }}>{description}</p>
      </div>

      <div className="d-flex flex-column col-6">
        <div className="text-center">
          <img src={image} alt="" style={{ width: "25%" }} />
        </div>
        <div className="text-center">
          <span className="display-5 text-center fw-bold">$: {cost}</span>
        </div>
        <div>
          {checkout ? (
            <button className="btn btn-danger"><Link to='/cart' className="text-decoration-none" style={{color: 'white'}}>Checkout</Link></button>
          ) : (
            <ItemCount
              stock={stock}
              initial={initial}
              setInitial={setInitial}
              onAdd={onAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
