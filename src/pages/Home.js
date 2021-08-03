import React from "react";

import logo from "../images/platziconf-logo.svg";
import astro from "../images/astronauts.svg";

import "./styles/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home_cont">
          <div className="hero_cont">
            <div id="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div id="texto">
              <h1>PRINT YOUR BADGES</h1>
              <p>The easiest way to manage your conference</p>
              <Link className='btn btn-primary' to="/badges/">Start now</Link>
            </div>
          </div>

          <div id="astros">
            <img src={astro} alt="Astronautas" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
