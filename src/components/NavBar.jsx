import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/orders">Orders</NavLink>
      <NavLink to="/filter">Filter</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/stats">Order Stats</NavLink>
    </nav>
  );
};

export default NavBar;
