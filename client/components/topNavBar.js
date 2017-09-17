import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logoutAndSendtoFrontPage as logoutUser } from '../store/currentUser';

export class TopNavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
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
                <Link to= "/product">Shop</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              {/* { this.props.CurrentUser ? this.renderLoginSignup() : this.renderLogout() } */}

              <li>
              <Link to="/signup" activeClassName="active">signup</Link>
             </li>
             <li>
               <Link to="/login" activeClassName="active">login</Link>
             </li>

             <li>
              <button
                className="navbar-btn btn"
                onClick={this.props.logout}>
                logout {name}
              </button>
              </li>

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
         <Link to="/signup" activeClassName="active">signup</Link>
        </li>
        <li>
          <Link to="/login" activeClassName="active">login</Link>
        </li>
      </ul>
    );
  }

  renderLogout() {
    const name = this.props.CurrentUser.name || this.props.CurrentUser.email;
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
        <button
          className="navbar-btn btn btn-default"
          onClick={this.props.logout}>
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
    CurrentUser: state.CurrentUser
  }
}

//create mapDispatch with logout function 
const mapDispatch = dispatch => ({
  logout: () => { dispatch(logoutUser()) }
})

export default connect(mapState, mapDispatch)(TopNavBar)