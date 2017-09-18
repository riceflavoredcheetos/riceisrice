import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store";
import { getAllProducts } from "../store/allProducts";

const Center = {
  textAlign: "center"
};

class Products extends React.Component {
  constructor() {
    super();
    this.state = { keyword: "", searchProduct: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let rice = this.props.AllProduct;
    let title = 'ALL PRODUCTS';
    const search = this.state.searchProduct;
    const keyword = this.state.keyword;
    if (search) {
      rice = rice.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()) || item.description.toLowerCase().includes(keyword.toLowerCase()))
      title = rice.length + ' products for ' + keyword;
    }


    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="name of the product"
            className="form-control"
            value={this.state.keyword}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit">
              <img
                src="http://downloadicons.net/sites/default/files/search-icon-93110.png"
                height="41"
              />
            </button>
          </span>
        </form>
        <h1 style={Center}>{title}</h1>
        <div className="list-group">
          {rice.map(item => {
            return (
              <Link
                to={`/product/${item.id}`}
                className="list-group-item"
                key={item.id}
              >
                <h4 className="list-group-item-heading">{item.title}</h4>
                <p className="list-group-item-text">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ keyword: event.target.value, searchProduct: false });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // this.props.fetchSearchProducts();
    this.setState({ searchProduct: true });
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
  };
};

export default withRouter(connect(mapStates, mapDispatch)(Products));
