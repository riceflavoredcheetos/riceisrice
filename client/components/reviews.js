import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {getReviewThunk, updateThunk, removeThunk} from '../store/reviews';

const display = {
    display: "inline"
}

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: null,
      newReview: ''
    }
    this.changeState = this.changeState.bind(this);
    this.changeReview = this.changeReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getReviews(productId);
  }

  changeState = (id) => {
    const editing = this.props.editing;
    this.setState({editing: id});
  }

  changeReview = (review) => {
    this.setState({newReview: review})
  }

  handleSubmit = (id, review) => {
    this.props.updateReview(id, review);
    this.setState({editing: null, newReview: ''});
  }

  render() {
    let title = 'REVIEWS';
    const reviews = this.props.reviews;
    const editing = this.state.editing;
    const newReview = this.state.newReview;
    if (reviews.length === 0) {
      title = 'NO REVIEWS FOUND'
    }
    return (
      <div>
        <h3>{title}</h3>
          {reviews.length >= 1 && reviews.map(review => (
            <div key={review.id}>
              {
                editing === review.id
                ?
                  <form>
                  <input type="text" name="newReview" className="form-control" defaultValue={review.content} onChange={event => this.changeReview(event.target.value)}/>
                  <button type="button" className="btn btn-success" onClick={() => this.handleSubmit(review.id, newReview)}>Submit</button>
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
      updateReview: (id, review) => {
        dispatch(updateThunk(id, {content: review}))
      },
      deleteReview: (reviewId) => {
        dispatch(removeThunk(reviewId))
      }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Review))
