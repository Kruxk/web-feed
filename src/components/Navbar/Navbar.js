import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h2>Cocktail App</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">User</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Ingredients</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
