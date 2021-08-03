import React from "react";

import head from "../images/platziconf-logo.svg";
import Babge from "../components/Badge";
import "./styles/BadgeDetails.css";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../api";

export default class BadgeDetails extends React.Component {
  state = {
    badge: this.props.location.state.badge,
    RedirectBages: false,
    test: [],
  };

  alertaClick() {
    Swal.fire({
      title: `Are you sure to delete \n ${this.state.badge.firstName} ${this.state.badge.lastName}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      cancelButtonText: "No.",
      confirmButtonColor: "#F32013",
    }).then((result) => {
      if (result.isConfirmed) {
        this.handleDelete();
        console.log("test");
      }
    });
  }

  handleDelete = async (e) => {
    try {
      await api.badges.remove(this.state.badge.id);
      this.setState({ RedirectBages: true });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    if (this.state.RedirectBages) {
      return <Redirect from={`/badges/${this.state.badge.id}`} to="/badges" />;
    }

    return (
      <React.Fragment>

        <div className="BD_details_hero">
          <img className="BD_img-fluid" src={head} alt="header" />
          <h1>
            {this.state.badge.firstName} {this.state.badge.lastName}
          </h1>
        </div>

        <div id="BD_actcont">
          <Babge
            firstName={this.state.badge.firstName || "FirstName"}
            lastName={this.state.badge.lastName || "LastName"}
            jobTitle={this.state.badge.jobTitle || "Job Tittle"}
            twitter={this.state.badge.twitter || "Twitter"}
            email={this.state.badge.email}
          />

          <div id="actions">
            <h1>Actions</h1>
            <Link to={`/badges/${this.state.badge.id}/edit`} className="btn btn-success">
              Edit
            </Link>
            <Link onClick={() => this.alertaClick()} className="btn btn-danger">
              Delete
            </Link>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
