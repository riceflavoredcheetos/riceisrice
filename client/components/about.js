import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'



const About = () => {





      return (
        <div>
            <h1>ABOUT RICE????</h1>
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

 export default withRouter(connect(mapState, mapDispatch)(About))
