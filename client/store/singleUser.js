import axios from 'axios'

/**
 * ACTION TYPES
 */

export const GET_USER = 'GET_USER'

/**
 * ACTION CREATORS
 */

 export const getUsers = user => ({type: GET_USERS, users})

 /**
 * THUNK CREATORS
 */

 export const getAllUsers = () =>
    dispatch =>
      axios.get('/api/users')
        .then( res => {
          dispatch(getUsers(res.data))})
        .catch(err => console.log(err))


/**
 * REDUCER
 */

 export default function (state = [], action) {
   switch (action.type) {
     case GET_USERS:
        return action.users
     default:
        return state
   }
 }
