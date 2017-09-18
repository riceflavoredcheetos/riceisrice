import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getAllProducts } from "../store/allProducts";

class Product extends React.Component {



  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const rice = this.props.AllProducts;

    let rand = Math.floor(Math.random()*(rice.length))

    let Rice = rice[rand]
    if (rice.length < 1){
      return (
      <div></div>
      )
    } else {
    return (
      <div>
        <div className="list-group">
              <Link
                to={`/product/${Rice.id}`}
                className="list-group-item"
                  >
                <h4 className="list-group-item-heading">{Rice.title}</h4>
                <p className="list-group-item-text">{Rice.description}</p>
              </Link>
        </div>
      </div>
    )
  }}
}

const mapState = state => {

  return {
    AllProducts: state.AllProducts
  };
};

const mapDispatch = dispatch => {
  return {
    getProduct: function() {
      const action = getAllProducts();
      dispatch(action);
    }
  };
} ;

export default withRouter(connect(mapState, mapDispatch)(Product));
