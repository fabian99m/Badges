import React from "react";
import conflogo from "../images/badge-header.svg";
import colflag from "../images/colombia.svg";
import Gravatar from "./Gravatar";

import "./styles/Badge.css";

class Babge extends React.Component {
  render() {
    const { firstName, lastName, jobTitle, twitter, email } = this.props;

    return (
      <div className="conteiner">
        <div className="header">
          <img src={conflogo} alt="Logo de la conferencia" />
        </div>

        <div className="info">
          <Gravatar email={email} />

          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>

        <div className="contact">
          <div>
            <h3>{jobTitle}</h3>
          </div>

          <div id="datos">
            <i class="bi bi-twitter"></i>
            <p id="twitertext">@{twitter}</p>
            <img src={colflag} alt="colombia flag" />
          </div>
        </div>

        <div className="footer">
          <p> #PlatziConf</p>
        </div>
      </div>
    );
  }
}
export default Babge;
