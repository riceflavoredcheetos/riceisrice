import axios from 'axios'

/**
 * ACTION TYPES
 */

 export const GET_CART_ITEMS = 'GET_CART_ITEMS'
 export const ADD_TO_CART = 'ADD_TO_CART'

/**
 * ACTION CREATORS
 */

 export const getCart = items => ({type: GET_CART_ITEMS, items})
 export const addCart = item => ({type: ADD_TO_CART, item})
 

 /**
 * THUNK CREATORS
 */

 export const getItems = () =>
    dispatch =>
      axios.get(`/auth/me/cart`)
        .then(res => {
          dispatch(getCart(res.data))})
        .catch(err => console.log(err))
 
 export const addToCart = (product) => 
    dispatch => 
       axios.post(`/auth/me/cart`, product)
        .then(res => {
          dispatch(getCart(res.data))})
        .catch(err => console.log(err))

 export const updatingQuantity = (productId, newQuantity) => 
    dispatch => 
          axios.put(`/auth/me/cart/${productId}`, {newQuantity})
              .then(res => {
                dispatch(getCart(res.data))})
              .catch(err => console.log(err))  

 export const deleteFromCart = productId => 
        dispatch => 
            axios.delete(`/auth/me/cart/${productId}`)
              .then(res => {
                dispatch(getCart(res.data))})
              .catch(err => console.log(err))
 
 export const submitOrder = (order) =>
    dispatch =>
      axios.post(`/api/invoice`, order)
          .then(res => req.session.cart = [])
          .then(() => console.log('new cart ', req.session.cart))
          .catch(err => console.log(err))

/**
 * REDUCER
 */

 export default function (items = [], action) {
   switch (action.type) {
     case GET_CART_ITEMS:
        return action.items
     case ADD_TO_CART:
        return [...items, action.item]
     default:
        return items
   }
 }
