import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Login, Signup, UserHome} from './components'
import Main from './components/main'
import TopNavBar from './components/topNavBar'
import SingleProduct from './components/singleProductPage'
import Cart from './components/cartPage'
import Checkout from './components/checkoutPage'
import About from './components/about'

import {me} from './store'
import LoginPage from './components/loginPage'


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props
    const fixed = {
      'position':'fixed'
    }

    return (
      <Router history={history}>
        <div>
          <TopNavBar style= {fixed} />
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path='/login' component={LoginPage} />
            {/* {console.log('clicked')} */}
            <Route path='/signup' component={Signup} />
              {
                isLoggedIn &&
                  <Switch>
                    {/* Routes placed here are only available after logging in */}
                    <Route path='/home' component={UserHome} />
                  </Switch>
              }
            {/* Displays our Login component as a fallback */}

            <Route exact path = '/' component={Login} />
            <Route exact path = '/product' component = {Main} />
            <Route path = '/product/:productId' component = {SingleProduct} />
            <Route exact path = '/cart' component = {Cart} />
            <Route path = '/cart/checkout' component = {Checkout} />
            <Route path = '/about' component = {About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
