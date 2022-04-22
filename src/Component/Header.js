import React from "react";
import Close from "../Component/svg/bars-solid.svg";
import Menu from "../Component/svg/xmark-solid.svg";
// import Cart from "./Component/svg/cart-shopping-solid.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Citizen</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Login / Register</Link>
        </li>
        <li id="closeBtn">
          <img src={Close} alt="close_icon" width="30" />
        </li>
      </ul>
      <div className="menu">
        <img src={Menu} alt="menu_icon" width="30" />
      </div>
    </header>
  );
};

export default Header;
