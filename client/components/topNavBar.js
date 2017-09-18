import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logoutAndSendtoFrontPage as logoutUser } from "../store/currentUser";
import histroy from "../history";

export class TopNavBar extends React.Component {
  constructor() {
    super();
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);

  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-2"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-2"
          >
            <ul className="nav navbar-nav">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/product">Shop</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              { this.props.currentUser === null ? (this.renderLoginSignup()) : (this.renderLogout()) }
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  renderLoginSignup() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/signup" className="navbar-btn btn btn-default">
            signup
          </Link>
        </li>
        <li>
          <Link to="/login" className="navbar-btn btn btn-default">
            login
          </Link>
        </li>
      </ul>
    );
  }

  renderLogout() {
    const name = this.props.currentUser.name || this.props.currentUser.email;
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/home" className="navbar-btn btn btn-default">
            Account
          </Link>

          <button
            id="logoutButton"
            className="navbar-btn btn btn-default"
            onClick={this.props.logout}
          >
            logout {name}
          </button>
        </li>
      </ul>
    );
  }
}

/* ------------------   CONTAINER    ------------------ */

const mapState = state => {
  return {
    currentUser: state.currentUser
  };
};

//create mapDispatch with logout function
const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logoutUser());
  },
  linkToAccount: () => {
    return history.push("/accountpage");
  }
});

export default connect(mapState, mapDispatch)(TopNavBar);
