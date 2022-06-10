import React from "react";
import "../view/Home.scss";
import { NavLink } from "react-router-dom";

const HomeComponent = () => {
  return (
    <>
      <div className="topnav">
        <NavLink activeClassName="active1" to="/" exact>
          Home
        </NavLink>
        <NavLink activeClassName="active1" to="/timer">
          Timer Apps
        </NavLink>
        <NavLink activeClassName="active1" to="/todo">
          Todo Apps
        </NavLink>
        <NavLink activeClassName="active1" to="/blog">
          Blog App
        </NavLink>
      </div>
    </>
  );
};

export default HomeComponent;
