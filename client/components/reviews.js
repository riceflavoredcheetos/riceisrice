import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

export default class Review extends React.Component {

  render() {
    // console.log('THIS props ', this.props.match.params)
    return (
      <div>
          Review Component
      </div>
    )
}
}

