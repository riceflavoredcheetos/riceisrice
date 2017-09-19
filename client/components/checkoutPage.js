import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logsubmitOrder} from '../store'

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
    this.updateAddress = this.updateAddress.bind(this)
    this.prepOrder = this.prepOrder.bind(this)
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
    // console.log('this is my state ', submitObject)
    this.props.submitOrder(submitObject)
  }


  render() {
    console.log('this is my props ', this.props)
      return (
        <div>
          <form onSubmit={this.prepOrder}>
            <input style={{width: "500px"}} type="text" onChange={this.updateAddress} placeholder={"Enter your shipping address:"}></input>
            <button type="submit" className="btn btn-success">Place Order</button>
          </form>
        </div>
      )
    }
}


/**
 * CONTAINER
 */

 const mapState = (state) => {
  return {
    userId: state.currentUser ? state.currentUser.id : null
  }
 }