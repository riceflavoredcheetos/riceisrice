import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getAllProducts } from "../store/allProducts";

class Product extends React.Component {
  componentDidMount() {
    console.log("ResData")
    // this.props.getProduct();
  }


  render() {
    const rice = this.props.AllProducts;
    console.log("props", this.props)
    let rand = Math.floor(Math.random()*(rice.length))
    console.log("Rand", rand, rice)
    let Rice = rice[rand]
    return(
      <div>
        <div className="list-group">
              {/* <Link
                to={`/product/$`}
                className="list-group-item"
                  > */}
                <h4 className="list-group-item-heading"></h4>
                <p className="list-group-item-text"></p>
              {/* </Link> */}
        </div>
      </div>
    )
  }
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
  };``
} ;

export default withRouter(connect(mapState, mapDispatch)(Product));
