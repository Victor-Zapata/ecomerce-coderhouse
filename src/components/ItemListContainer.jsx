import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { products } from "../utils/products";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [stock, setStock] = useState(5);
  const [initial, setInitial] = useState(1);

  const [datos, setDatos] = useState([]);

  const params = useParams();

  const { idCategory } = params;

  useEffect(() => {
    customFetch(2000, products)
      .then((result) => {
        if (idCategory) {
          const datosFiltrados = result.filter(
            (item) => idCategory === item.categoryId.toString()
          );
          setDatos(datosFiltrados);
        } else {
          setDatos(result);
        }
      })
      .catch((error) => console.log(error));
  }, [idCategory]);

  const onAdd = () => {
    alert("You have selected " + initial + " items.");
  };

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
        <ItemList datos={datos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
