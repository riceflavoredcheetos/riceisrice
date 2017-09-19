import axios from 'axios'

/**
 * ACTION TYPES
 */

export const GET_PRODUCT = 'GET_PRODUCT'

/**
 * ACTION CREATORS
 */

 export const getProduct = product => ({type: GET_PRODUCT, product})

 /**
 * THUNK CREATORS
 */

 export const getSingleProduct = (productId) =>
    dispatch =>
      axios.get(`/api/products/${productId}`)
        .then( res =>{
          dispatch(getProduct(res.data))})
        .catch(err => console.log(err))

/**
 * REDUCER
 */

 export default function (state = [], action) {
   switch (action.type) {
     case GET_PRODUCT:
        return action.product
     default:
        return state
   }
 }
