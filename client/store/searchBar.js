import axios from 'axios';
/**
 * ACTION TYPES
 */

export const GET_SEARCH_PRODUCTS = 'GET_SEARCH_PRODUCTS';

/**
 * ACTION CREATORS
 */

export const getSearchProducts = product => ({ type: GET_SEARCH_PRODUCTS, product });

/**
 * THUNK CREATORS
 */

export const fetchSearchProducts = () =>
  dispatch =>
  axios.get('/api/products')
  // Product.prototype.searchProduct(keyword)
    .then(res => {
      console.log(res.data, 'resdata')
      dispatch(getSearchProducts(res.data))})
    .catch(err => console.log(err))

/**
 * REDUCER
 */

export default function(state = [], action) {
  switch (action.type) {
    case GET_SEARCH_PRODUCTS:
      return action.product;
    default:
      return state;
  }
}
