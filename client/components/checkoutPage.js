import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

const Checkout = () => {

      return (
        <div>
            <h1>CheckOut Page</h1>
        </div>
      )
}


/**
 * CONTAINER
 */

 const mapState = (state) => {


 }

 const mapDispatch = (dispatch) =>{


 }

 export default withRouter(connect(mapState, mapDispatch)(Checkout))
