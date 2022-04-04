import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          Navbar
        </a>
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-light" href="/">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 d-flex align-items-center'>
          <CartWidget />
          <p className='text-light px-2 mb-0'>6</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
