import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h2>Cocktail App</h2>
      <li>
        <ul>
          <a href="#">Home</a>
        </ul>
        <ul>
          <a href="#">User</a>
        </ul>
        <ul>
          <a href="#">Categories</a>
        </ul>
        <ul>
          <a href="#">Ingredients</a>
        </ul>
      </li>
    </div>
  );
};

export default Navbar;
