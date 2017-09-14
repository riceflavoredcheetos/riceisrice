import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'



export const Cart = () => {





      return (
        <div>
            <h1>Cart Page</h1>
            <Link to= {'/cart/checkout'}><h1>Checkout</h1></Link>
        </div>
      )
}


/**
 * CONTAINER
 */

//  const mapState = (state) => {


//  }

//  const mapDispatch = (dispatch) =>{


//  }

//  export default withRouter(connect(mapState, mapDispatch)(Cart))
