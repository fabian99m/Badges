import React from "react";
import logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-cont">
        <a href="/">
          <img src={logo} alt="logo" />
          <span className="fw-light">Platzi </span>
          <span className="fw-bold">Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
