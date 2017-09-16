import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getSingleProduct} from '../store/singleProduct'
import Review from './reviews'


class SingleProduct extends React.Component{

  componentDidMount(){
    const productId = this.props.match.params.productId
    this.props.loadProduct(productId)
  }

  render(){
    const product = this.props.singleProduct
  return (
    <div>
    <div>
        <h1>{product.title}</h1>
    </div>
    <img src = {product.image} />
    <p>{product.description}</p>
    <p>{product.price}</p>
     <div>
       <Review reviews={product.reviews}/>
     </div>
    </div>
  )
 }
}

/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    singleProduct: state.SingleProduct
  }
}

const mapDispatch = (dispatch) => {
    return {
      loadProduct: (productId) => {
        dispatch(getSingleProduct(productId))
      }
    }
}

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
