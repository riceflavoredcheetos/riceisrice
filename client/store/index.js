 import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import User from './user'
import AllProducts from './allProducts'
import SingleProduct from './singleProduct'
import CurrentUser from './currentUser'
import SearchBar from './searchBar';

//ADD REDUCERS HERE

const reducer = combineReducers({User, AllProducts, CurrentUser, SingleProduct, SearchBar})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
