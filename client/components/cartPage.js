import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getItem, submitOrder} from '../store'

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
                  </tr>
                  </thead>
                  <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <th>{item.title}</th>
                      <th><img className="thumbnail" src={item.image}/></th>
                      <th>{item.price}</th>
                      <th>1</th>
                      <th>calculate</th>
                    </tr>
                  ))}
                  </tbody>
              </table>
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
   console.log('state ', state)
      return {
        items: state.cart,
        userId: state.currentUser ? state.currentUser.id : null
      }
 }

 const mapDispatch = (dispatch) =>{
      return {
        getCart: () => {
          dispatch(getItem())
        },
        submitOrder: (order) => {
          dispatch(submitOrder(order))
        }
      }
 }

 export default withRouter(connect(mapState, mapDispatch)(Cart))

