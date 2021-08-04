import React from "react";
import head from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BabgeForm from "../components/BadgeForm";

import "./styles/BadgeNew.css";
import api from "../api";
import PageLoading from "../components/PageLoading";

import Swal from "sweetalert2";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  alertaSuccess() {
    Swal.fire({
      title: "Do you want to see the badge list?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Yes!`,
      cancelButtonText: "No.",
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.history.push("/badges");
      }
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.setState({
        form: {
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          twitter: "",
        },})
      this.alertaSuccess();
    } catch (e) {
      this.setState({ loading: false, error: e });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <div class='cont_badgenew'>



        <div className="Badge_hero">
          <img className="img-fluid" src={head} alt="header" />
        </div>

       
          <div className="badge">
            <Badge
              firstName={this.state.form.firstName || "FirstName"}
              lastName={this.state.form.lastName || "LastName"}
              jobTitle={this.state.form.jobTitle || "Job Tittle"}
              twitter={this.state.form.twitter || "Twitter"}
              email={this.state.form.email}
            />
          </div>

          <div className="form">
            <BabgeForm title='New Attendant'
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              formValues={this.state.form}
              error={this.state.error}
            />
          </div>

       

      </div>
    );
  }
}

export default BadgeNew;
