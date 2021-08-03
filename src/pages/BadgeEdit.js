import React from "react";
import head from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BabgeForm from "../components/BadgeForm";

import "./styles/BadgeEdit.css";
import api from "../api";
import PageLoading from "../components/PageLoading";

import Swal from "sweetalert2";

class BadgeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
      },
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.BadgeId);
      this.setState({ loading: false, form: data });

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.BadgeId,this.state.form);
      this.setState({ loading: false });
      this.setState({
        form: {
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          twitter: "",
        },
      })
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
      <React.Fragment>
        <div className="BE_hero">
          <img className="BEimg-fluid" src={head} alt="header" />
        </div>

        <div className="BEmenu_container">
          <div className="BE_badge">
            <Badge
              firstName={this.state.form.firstName || "FirstName"}
              lastName={this.state.form.lastName || "LastName"}
              jobTitle={this.state.form.jobTitle || "Job Tittle"}
              twitter={this.state.form.twitter || "Twitter"}
              email={this.state.form.email}
            />
          </div>

          <div className="BE_form">
            <BabgeForm title='Edit Attendant'
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              formValues={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
