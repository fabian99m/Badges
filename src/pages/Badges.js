import React from "react";

import BadgesList from "../components/BadgesList";
import api from "../api";
import PageLoading from "../components/PageLoading";
import NotFound from "./NotFound";

import { Redirect, Link } from "react-router-dom";

import "./styles/Badges.css";

class Badges extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
      redirect: false,
      badge: [],
    };
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  click = (badge) => {
    this.setState({ redirect: true, badge:badge});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push from='/badges' to={{pathname:`/badges/${this.state.badge.id}`,state:{badge:this.state.badge}}} />;
    }

    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <NotFound />;
    }

    if (this.state.data.length === 0) {
      return (
        <div id="badge_info">
          <h1>Not Badges were found..</h1>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="badges_container">
          <div className="cont_btn">
            <Link id="badge_btn" className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>

          <div className="badge_list">
            <BadgesList click={this.click} badges={this.state.data.reverse()} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
