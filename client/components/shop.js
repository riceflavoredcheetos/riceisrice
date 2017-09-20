import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../store";
import { getAllProducts } from "../store/allProducts";
import {addToCart} from '../store'

const Center = {
  textAlign: "center"
};

class Products extends React.Component {
  constructor() {
    super();
    this.state = { 
      keyword: "", 
      searchProduct: false,
      mouseHere: false,
      quantity: null
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.handleBuy = this.handleBuy.bind(this)
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleBuy (event, product) {
    event.preventDefault()
    this.props.handleSubmit(product, this.state.quantity, )
  }

  mouseMove (productId) {
    if (Number.isInteger(productId)) {
      this.setState({mouseHere: productId})
    } else {
      this.setState({mouseHere: false, quantity: null})
    }
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
        <div className="col-md-12">
          {rice.map(item => {
            return (
              <div key={item.id} className="containerBox col-md-4" onMouseEnter={() => this.mouseMove(item.id)} onMouseLeave={this.mouseMove}>
              <Link
                to={`/product/${item.id}`}
              >
                <img className="mainPageImg" src={item.image}/>
                <h4 className="headerText list-group-item-heading">{item.title}</h4>
                <p className="descText ist-group-item-text">{item.description}</p>
              </Link>
              {this.state.mouseHere === item.id
              ? <div>
                <form className="formDisplay">
                <input placeholder="Specify quantity" onChange={event => this.setState({quantity: +event.target.value})}></input>
                <button className="btn-xs btn-info sizeBtn" onClick={(event) => this.handleBuy(event, item)}>Add To Cart</button>
                </form>
                </div>
              : <div></div>
              }
              </div>
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
  console.log('here is state ', state)
  return {
    AllProduct: state.AllProducts
  };
};

const mapDispatch = dispatch => {
  return {
    getProducts: function() {
      const action = getAllProducts();
      dispatch(action);
    },
    handleSubmit: (product, quantity) => {
      dispatch(addToCart({product, quantity}))
    }
  };
};

export default withRouter(connect(mapStates, mapDispatch)(Products));
