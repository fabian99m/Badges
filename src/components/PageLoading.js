import React from "react";

import "./styles/PageLoading.css";

class PageLoading extends React.Component {
  render() {
    return (
      <div id='anim-cont'>
        <div className="lds-hourglass"></div>
      </div>
    );
  }
}

export default PageLoading;
