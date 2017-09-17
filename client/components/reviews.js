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

  constructor(props) {
    super(props);
    this.state = {
      editing: null
    }
    this.changeState = this.changeState.bind(this);
  }
  
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getReviews(productId);
  }

  changeState = (id) => {
    const editing = this.props.editing;
    this.setState({editing: id});
  }
  
  render() {    
    const reviews = this.props.reviews;
    const editing = this.state.editing;
    return (
      <div>
        <h3>This is what others are saying about this product: </h3>
          {reviews.length && reviews.map(review => (
            <div key={review.id}>
              {
                editing === review.id 
                ? 
                  <form >
                  <input type='text' className="form-control" defaultValue={review.content} onChange={event => console.log('here ', event.target.value)}/>
                  </form>
                : 
                  <div>
                  <h4 style={display}>{review.content} &emsp;</h4>
                  <button type="button" className="btn btn-warning" style={display} onClick={() => this.changeState(review.id)}>Edit</button>
                  <h5 style={display}>or</h5>
                  <button type="button" className="btn btn-danger" style={display} onClick={() => this.props.deleteReview(review.id)}>Delete</button>
                  </div>
              }
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
 return {
   reviews: state.Reviews,
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