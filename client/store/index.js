import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import cart from './cart'
import AllProducts from './allProducts'
import SingleProduct from './singleProduct'
import currentUser from './currentUser'
import Reviews from './reviews'
import SearchBar from './searchBar'
import AllUsers from './allUsers'
import invoices from './invoices'

//ADD REDUCERS HERE

const reducer = combineReducers({invoices, user, AllProducts, currentUser, SingleProduct, Reviews, AllUsers, cart})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './cart'
