import React from "react";

const Personaje = ({ personaje }) => {
  return (
    <>
      <div className="card">
        <h1>{personaje.name}</h1>
        <h2>{personaje.nickname}</h2>
        <div className="card-body">
          <img className="card-img-top w-25" src={personaje.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Personaje;
