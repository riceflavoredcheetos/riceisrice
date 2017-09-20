import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getItems, submitOrder, deleteFromCart, updatingQuantity} from '../store'

class Cart extends React.Component {

  constructor() {
    super();
    this.state = {
      checkout : false,
      address: ''
    }
    this.checkingOut = this.checkingOut.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.prepOrder = this.prepOrder.bind(this)
  }
  
  componentDidMount() {
    this.props.getCart();
  }
  
  checkingOut() {
    this.setState({checkout: true})
  }

  updateAddress(evt) {
    this.setState({address: evt.target.value})
  }
  
  prepOrder(evt) {
    evt.preventDefault();
    const address = this.state.address;
    const items = this.props.items
    const submitObject = {};
    submitObject.user = {
      address,
      userId: this.props.userId
    }
    const order = items && items.map(item => (
      {
        productId: item.id,
        price: item.price,
        quantity: 1
      }
    ))
    submitObject.products = order
    this.props.submitOrder(submitObject)
  }

  render() {
    const items = this.props.items
    items.forEach(item => {
      item.subTotal = item.product.price * item.quantity
    })
    const total = items.reduce((prev, item) => prev + item.subTotal, 0)
      return (
        <div>
        {
          items.length > 0
          ?
          <div>
            <h1>Cart Page</h1>
            <h3>These are the items in your cart:</h3>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-Total</th>
                    <th>Remove from cart</th>
                  </tr>
                  </thead>
                  <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <th>{item.product.title}</th>
                      <th><img className="thumbnail" src={item.product.image}/></th>
                      <th>{item.product.price}</th>
                      <th><select defaultValue={item.quantity} onChange={event => this.props.updateQuantity(item.product.id, +event.target.value)}>{
                        looping(item.quantity).map(num => (
                          <option key={num}>{num}</option>
                        ))
                        }</select></th>
                      <th>{item.subTotal}</th>
                      <th><button className="btn btn-danger" onClick={() => this.props.removeItem(item.product.id)}>x</button></th>
                    </tr>
                  ))}
                  </tbody>
                  
              </table>
              <h2>Your total: ${total}</h2>
              {!this.state.checkout 
              ? <button className="btn btn-success" onClick={this.checkingOut}>Checkout</button>
              : 
                <div>
                  <form onSubmit={this.prepOrder}>
                    <input style={{width: "500px"}} type="text" onChange={this.updateAddress} placeholder={"Enter your shipping address:"}></input>
                    <button type="submit" className="btn btn-success">Place Order</button>
                  </form>
                </div>
              }
          </div>
          :
          <h1>You do not have anything on your cart! Please shop!</h1>
        }
        </div>
      )
    }
}


/**
 * CONTAINER
 */

 const mapState = (state) => {
   console.log('my state ', state)
      return {
        items: state.cart,
        userId: state.currentUser ? state.currentUser.id : null
      }
 }

 const mapDispatch = (dispatch) =>{
      return {
        getCart: () => {
          dispatch(getItems())
        },
        submitOrder: (order) => {
          dispatch(submitOrder(order))
        },
        removeItem: (productId) => {
          dispatch(deleteFromCart(productId))
        },
        updateQuantity: (productId, newQuantity) => {
          dispatch(updatingQuantity(productId, newQuantity))
        }
      }
 }

 export default withRouter(connect(mapState, mapDispatch)(Cart))

function looping(num) {
  var min = Math.max(num-5, 1), max = num+5, arr = [];
  for (var i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}