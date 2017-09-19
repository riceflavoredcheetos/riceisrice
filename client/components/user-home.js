import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { AdminHome } from './index'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { currentUser, isAdmin } = props
  return (
    <div>
      <h3>Welcome, {currentUser.email}</h3>

      <div id="userOptions">
          <div id="yourOrders">
              <h2><Link to="/orders"> Your Orders</Link></h2>
          </div>

          <div id="loginAndSecurity">
              <h2>Login and Security</h2>
          </div>

          <div id="addresses">
              <h2>Addresses</h2>
          </div>
      </div>

        {isAdmin && (
          <div id="admin">
            <AdminHome />
          </div>

        )}      
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    currentUser: state.currentUser,
    isAdmin: state.currentUser.isAdmin 
  }
}

export default connect(mapState, null)(UserHome)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
