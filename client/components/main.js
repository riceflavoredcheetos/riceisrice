import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store";
import Product from "./allProducts";

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */


const Main = props => {
  const { children, handleClick, isLoggedIn } = props;


  return (
    <div>
      <div className="jumbotron full-width">
        <h1 style={{'textShadow':' #2c2c2c 3px 3px 5px'}}>Got Rice?</h1>
      </div>
      <div id="intro">
        <div className="content">
          <h1 className="centerText" style = {{
          'fontFamily': 'Helvetica, sansSerif',
          'fontWeight': 'bold',
          'textAlign': 'center',}}>Shop the new Grains</h1>
          <hr></hr>
        </div>
      </div>

      <div className="row content" id="feature" >
        <h3 className="centerText" style={{   'fontSize': '100px',
          'lineHeight':' 160px',
          'fontFamily': 'Helvetica, sansSerif',
          'fontWeight': 'bold',
          'textAlign': 'center',
          'textShadow': 'rgba(0, 0, 0, .3) 5px 5px 5px'}} >PRODUCT OF THE WEEK</h3>
      </div>
      <Product />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main));

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
