import React from "react";
import "./styles/BadgeForm.css";

import Swal from 'sweetalert2'

class BabgeForm extends React.Component {

  alerta(error){
    Swal.fire({
      title: 'Error!',
      text: error,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>

        <form classname='form_cont' onSubmit={this.props.onSubmit}>
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last name</label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              placeholder="name@example.com"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Job</label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Twitter</label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="fa">
            Save
          </button>

          {this.props.error && (
            this.alerta(this.props.error.message)
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default BabgeForm;
