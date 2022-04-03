import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-light" href="/">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div class='col-6 d-flex align-items-center'>
          <CartWidget />
          <p class='text-light px-2 mb-0'>6</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
