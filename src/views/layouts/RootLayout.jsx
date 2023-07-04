import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        Project
        <nav className="">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="counter">about Us</NavLink>
            </li>
            <li>
              <NavLink to="todo">TODO</NavLink>
            </li>
            <li>
              <NavLink to="register">register</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
