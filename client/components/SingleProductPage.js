import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import Review from './Reviews'


const SingleProduct = () => {



  return (
    <div>
        <h1>SingleProduct Page</h1>
        <Reviews />
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

export default withRouter(connect(mapState, mapDispatch)(SingleProduct))
