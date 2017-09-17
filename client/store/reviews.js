import axios from 'axios'

/**
 * ACTION TYPES
 */

 export const GET = 'GET_REVIEWS'
 export const DELETE = 'DELETE_REVIEW'
 export const UPDATE = 'UPDATE_REVIEW'

/**
 * ACTION CREATORS
 */

 export const getReview = reviews => ({type: GET, reviews})
 export const removeReview = reviewId => ({type: DELETE, reviewId})
 export const updateReview = review => ({type: UPDATE, review})

 /**
 * THUNK CREATORS
 */

export const getReviewThunk = (productId) =>
    dispatch =>
      axios.get(`/api/reviews/${productId}`)
        .then( res => {
          dispatch(getReview(res.data))})
        .catch(err => console.log(err))

 export const updateThunk = (id, review) => 
      dispatch => (
        axios.put(`/api/reviews/${id}`, review)
          .then(res => dispatch(updateReview(res.data)))
          .catch(err => console.log(err))
      )

 export const removeThunk = (reviewId) => dispatch => {
  dispatch(removeReview(reviewId))
  axios.delete(`/api/reviews/${reviewId}`)
    .catch(err => console.log(err))
 }

/**
 * REDUCER
 */

 export default function (reviews = [], action) {
   switch (action.type) {
     case GET: 
        return action.reviews
     case UPDATE:
        return reviews.map(review => (
          action.review.id === review.id ? action.review : review
        ))
     case DELETE:
        return reviews.filter(review => review.id !== action.reviewId)
     default:
        return reviews
   }
 }
