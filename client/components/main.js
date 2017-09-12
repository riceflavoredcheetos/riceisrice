import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import Product from './allProducts'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (

      <div className="jumbotron full-width">


      <div id="intro">
        <div className="content">
          <h1>Rice is Rice</h1>
          <h3>Shop the new Grains</h3>
        </div>
      </div>

      <div className="row content" id="feature">
        <h3>FEATURED PRODUCTS</h3>

        <a href="{{ site_url('shop') }}" className="btn btn-default">SHOP MORE</a>
      </div>

          <div className="row" id="intro-info">
                <div id="intro-text">
                  <img src="{{ theme.introImage }}" alt="4"/>
                </div>
         </div>
         <div>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySVA6wazyBjYxAFlkygw4nujTE9KA-bhsKf4tbqbz7bcNY38A"/>
         </div>
      </div>

  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
