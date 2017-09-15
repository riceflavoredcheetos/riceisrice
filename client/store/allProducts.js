import axios from 'axios'

/**
 * ACTION TYPES
 */

export const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * ACTION CREATORS
 */

 export const getProducts = product => ({type: GET_PRODUCTS, product})

 /**
 * THUNK CREATORS
 */

 export const getAllProducts = () =>
    dispatch =>
      axios.get('/api/products')
        .then( res =>{
          console.log(res.data, "resdata")
          dispatch(getProducts(res.data))})
        .catch(err => console.log(err))

/**
 * REDUCER
 */

 export default function (state = [], action) {
   switch (action.type) {
     case GET_PRODUCTS:
        return action.product
     default:
        return state
   }
 }
