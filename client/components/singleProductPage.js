import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getSingleProduct} from '../store/singleProduct'
import {getItems, addToCart} from '../store/cart'
import Review from './reviews'

class SingleProduct extends React.Component{

  constructor() {
    super()
    this.state = {
      quantity: 0
    }
    this.handleBuy = this.handleBuy.bind(this)
  }
  
  componentDidMount(){
    const productId = this.props.match.params.productId
    this.props.loadProduct(productId)
    this.props.loadCart()
  }

  handleBuy(event) {
    event.preventDefault()
    this.props.handleSubmit(this.props.singleProduct, this.state.quantity)
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
        <form onSubmit={this.handleBuy}>
          <input style={{width: "25%"}} placeholder={"Please enter quantity to purchase"} onChange={event => this.setState({quantity: event.target.value})}></input>
          <button type="submit" className="btn btn-success">BUY</button>
        </form>
          <Review />
        </div>
      </div>
  )
 }
}

/**
 * CONTAINER
 */

const mapState = (state) => {
  console.log('here is state ', state)
  return {
    singleProduct: state.SingleProduct,
    cartItems: state.cart
  }
}

const mapDispatch = (dispatch) => {
    return {
      loadProduct: (productId) => {
        dispatch(getSingleProduct(productId))
      },
      loadCart: () => {
        dispatch(getItems())
      },
      handleSubmit: (product, quantity) => {
        dispatch(addToCart({product, quantity: +quantity}))
      }
    }
}

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
