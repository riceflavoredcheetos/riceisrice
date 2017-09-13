import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import Product from './allProducts'
import TopNavBar from './TopNavBar'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props
  const style = {
    "backgroundImage": "url(https://cdn.theconversation.com/files/90353/wide_article/width1356x668/dydjpgbz-1438275949.jpg)",
    "backgroundSize": "cover",
    "height":'500px'
  }
  const Center = {
    'textAlign': 'center'
  }
  const Font = {
    'position': "absolute",
    'top': "10px",
    'left': "0",
    'right': "0",
    'bottom': "0",
    'margin': "auto",
    'textAlign':'center',
    'height':'100px',
    'fontFamily' : "Open Sans",
    'color': '#fff'
  }

  return (
    <div>
    <TopNavBar/>
      <div className="jumbotron full-width" style = {style}>
      <h1 style = {Font}>Got Rice?</h1>
      </div>
      <div id="intro">
        <div className="content">
          <h3 style = {Center}>Shop the new Grains</h3>
        </div>
      </div>

      <div className="row content" id="feature">
        <h3 style ={Center}>FEATURED PRODUCTS</h3>

        <a className = 'row content' style = {Center}>SHOP MORE</a>
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
