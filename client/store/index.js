 import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import AllProducts from './allProducts'
import SingleProduct from './singleProduct'
import CurrentUser from './currentUser'
import Reviews from './reviews'
import SearchBar from './searchBar'

//ADD REDUCERS HERE
//CHANGE TO CAMELCASE******
const reducer = combineReducers({user, AllProducts, CurrentUser, SingleProduct, SearchBar, Reviews})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
