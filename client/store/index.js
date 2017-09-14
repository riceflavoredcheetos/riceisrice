 import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import AllProducts from './allProducts'
import SingleProduct from './singleProduct'
import currentUser from './currentUser'

//ADD REDUCERS HERE

const reducer = combineReducers({user, AllProducts, currentUser, SingleProduct})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
 