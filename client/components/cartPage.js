import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getItems, submitOrder} from '../store'

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
    console.log('my cart ', submitObject)
    this.props.submitOrder(submitObject)
  }

  render() {
    const items = this.props.items
    items.forEach(item => {
      item.subTotal = item.product.price * item.quantity
    })
    console.log('current items ', items)
      return (
        <div>
        {
          items.length > 1
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
                  </tr>
                  </thead>
                  <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <th>{item.product.title}</th>
                      <th><img className="thumbnail" src={item.product.image}/></th>
                      <th>{item.product.price}</th>
                      <th>{item.quantity}</th>
                      <th>{item.subTotal}</th>
                    </tr>
                  ))}
                  </tbody>
                  
              </table>
              <tbody className="table table-bordered"><tr>New Row</tr></tbody>
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
        }
      }
 }

 export default withRouter(connect(mapState, mapDispatch)(Cart))

