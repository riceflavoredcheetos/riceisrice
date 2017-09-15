import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store";
import { getAllProducts } from "../store/allProducts";

class Products extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const rice = this.props.AllProduct;
    console.log("SHOP")
    const Center = {
      textAlign: "center"
    };
    return (
      <div>
        <h1 style = {Center}>ALL PRODUCTS</h1>
        <div className="list-group">
          {rice.map(item => {
            return (
              <Link
                to={`/product/${item.id}`}
                className="list-group-item"
                key={item.id} >
                <h4 className="list-group-item-heading">{item.title}</h4>
                <p className="list-group-item-text">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStates = state => {
  return {
    AllProduct: state.AllProducts
  };
};

const mapDispatch = dispatch => {
  return {
    getProducts: function() {
      const action = getAllProducts();
      dispatch(action);
    }
  };``
} ;

export default withRouter(connect(mapStates, mapDispatch)(Products));



