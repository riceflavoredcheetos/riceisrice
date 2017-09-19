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
    console.log('my rice ', Rice)
    if (rice.length < 1){
      return (
      <div></div>
      )
    } else {
    return (
      <section>
        <img className="featuredImage" src={Rice.image}/>
        <div className="featuredImage display stylizedText">
          <p><strong>Product Name:</strong> {Rice.title}</p>
          <p><strong>Price:</strong> {Rice.price}</p>
        </div>
      </section>
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
