import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

export default class SideBar extends Component{


  render() {
    let isLoggedIn = true;
  return (
    <nav>
    {
      isLoggedIn
        ? <div>
          {/* The navbar will show these links after you log in */}
          <Link to='/home'>Home</Link>
          <a href='#' onClick={handleClick}>Logout</a>
        </div>
        : <div>
          {/* The navbar will show these links before you log in */}
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
    }
    </nav>
  )


  }
}
