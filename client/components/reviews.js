import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

export default class Review extends React.Component {

  render() {
    const reviews = this.props.reviews;

    return (
      <div>
        <h3>This is what others are saying about this product: </h3>
          {reviews && reviews.map(review => (
            <h4 key={review.id}>{review.content}</h4>
          ))}
      </div>
    )
}
}

