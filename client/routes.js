import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import history from "./history";
import { fetchLoggedInUser } from "./store/currentUser";

import {
  Products,
  Signup,
  UserHome,
  Main,
  TopNavBar,
  LoginPage,
  SingleProduct,
  Cart,
  Checkout,
  About,
  AdminHome,
  UserOrders,
  AdminAllOrders,
  AllProducts
} from "./components";

import { me } from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    const fixed = {
      position: "fixed"
    };
    console.log("routes isLoggedIn", this.props.isLoggedIn);
    return (
      <Router history={history}>
        <div>
          <TopNavBar style={fixed} />
          {/*<SearchBar />*/}
          <Switch>
            {/* Routes placed here are available to all visitors */}

            <Route exact path="/" component={Main} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/product" component={Products} />
            <Route path="/product/:productId" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/cart/checkout" component={Checkout} />
            <Route path="/about" component={About} />

            {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/admin_orders" component={AdminAllOrders} />
                <Route path="/admin_allproducts" component={Products} />
                <Route path="/orders" component={UserOrders} />
                <Route path="/adminhome" component={AdminHome} />
                <Route path="/home" component={UserHome} />
              </Switch>
            )}

            {/* Displays our Login component as a fallback */}
          </Switch>
        </div>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey

    //causing a
    isLoggedIn:
      state.currentUser !== null && state.currentUser.id !== undefined
        ? true
        : false
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchLoggedInUser());
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  // loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
