import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <div className="col-4" style={{ textAlign: "center" }}>
        <img src={item.image[0]} alt="" className="w-50 h-75"></img>
        <p className="text-center">{item.name}</p>
        <p>{item.cost}</p>
      </div>
    </>
  );
};

export default Item;
