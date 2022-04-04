import React from "react";
import Item from "./Item";

const ItemList = ({ datos }) => {
  return (
    <div className="row">
        {datos.map((item) => (
          <Item item={item} key={item.id} />
        ))}
    </div>
  );
};

export default ItemList;
