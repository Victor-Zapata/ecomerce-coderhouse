import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-4" style={{ textAlign: "center" }}>
        <img src={item.image[0]} alt="" onClick={() => navigate(`/item/${item.id}`)} style={{cursor:'pointer'}} className="w-50 h-75"></img>
        <p className="text-center">{item.name}</p>
        <p>{item.cost}</p>
      </div>
    </>
  );
};

export default Item;
