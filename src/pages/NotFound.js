import React from "react";
import { Link } from "react-router-dom";
import error from '../images/error-404.svg'
import './styles/NotFound.css'


class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="error_cont">
            <img src={error} alt="" />
          <h1>PAGE NOT FOUND :(</h1>
          <Link to='/' className='btn btn-primary'>BACK TO START</Link>
        </div> 
      </React.Fragment>
    );
  }
}

export default NotFound;
