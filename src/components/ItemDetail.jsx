import React from "react";

const ItemDetail = ({ item }) => {
  const { description, cost, image } = item;
  return (
    <div className="d-flex py-3">
      <div className="d-flex justify-content-center align-items-center col-6 p-5">
        <p style={{fontSize: '25px'}}>{description}</p>
      </div>

      <div className="d-flex flex-column col-6">
        <div className="text-center">
          <img src={image} alt="" style={{ width: "25%" }} />
        </div>
        <div className="text-center">
          <span className="display-5 text-center fw-bold">$: {cost}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
