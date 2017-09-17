import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {getReviewThunk, removeThunk} from '../store/reviews';

const display = {
    display: "inline"
}

class Review extends React.Component {

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getReviews(productId);
  }
  
  render() {    
    const reviews = this.props.reviews;
    return (
      <div>
        <h3>This is what others are saying about this product: </h3>
          {reviews.length && reviews.map(review => (
            <div key={review.id}>
            <h4 style={display}>{review.content} &emsp;</h4>
            <button type="button" className="btn btn-warning" style={display}><Link to="/edit">Edit</Link></button>
            <h5 style={display}>or</h5>
            <button type="button" className="btn btn-danger" style={display} onClick={() => this.props.deleteReview(review.id)}>Delete</button>
            </div>
          ))}
      </div>
        )
    }
}

/**
 * CONTAINER
 */

const mapState = (state) => {
  console.log('here is state ', state)
 return {
   reviews: state.Reviews
 }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
      getReviews: (productId) => {
        dispatch(getReviewThunk(productId))
      },
      deleteReview: (reviewId) => {
        dispatch(removeThunk(reviewId))
      }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Review))