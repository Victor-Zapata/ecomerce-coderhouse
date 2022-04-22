import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to={'/'}>
          Todo Guitarras
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to={'/category/9'}
              >
                Eléctricas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/category/1'}>
              Electroacústica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/category/2'}>
                MIDI
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/category/3'}>
                Barroco
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex align-items-center">
          <CartWidget />
          <p className="text-light px-2 mb-0">6</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
