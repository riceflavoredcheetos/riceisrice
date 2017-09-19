import axios from 'axios'

/**
 * ACTION TYPES
 */

 export const GET_CART_ITEMS = 'GET_CART_ITEMS'

/**
 * ACTION CREATORS
 */

 export const getCart = items => ({type: GET_CART_ITEMS, items})

 /**
 * THUNK CREATORS
 */

 export const getItem = () =>
    dispatch =>
      axios.get(`/auth/me/cart`)
        .then( res => {
          dispatch(getCart(res.data))})
        .catch(err => console.log(err))

 export const submitOrder = (order) => 
    dispatch => 
      axios.post(`/api/invoice`, order)
          .then(res => req.session.cart = [])
          .then(() => res.sendStatus(201))
          .catch(err => console.log(err))
/**
 * REDUCER
 */

 export default function (items = [], action) {
   switch (action.type) {
     case GET_CART_ITEMS:
      return action.items
     default:
        return items
   }
 }
