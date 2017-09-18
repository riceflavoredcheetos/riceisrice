import axios from 'axios'
import history from '../history'


//CONSTANTS

const LOGIN_CURRENT_USER = 'LOGIN_CURRENT_USER'
const SIGNUP_CURRENT_USER = 'SIGNUP_CURRENT_USER'
const LOGOUT_OUT = 'LOGOUT_OUT';

//ACTION CREATORS

const loginCurrentUser = user => { type: LOGIN_CURRENT_USER, user };
const signupUser = user => {type: SIGNUP_CURRENT_USER, user};
const logoutUser = () => {type: LOGOUT_OUT};

//REDUCER

export default function (currentUser = {}, action) {
    switch (action.type) {

        case LOGIN_CURRENT_USER: 
            return action.user;
        
        case SIGNUP_CURRENT_USER:
            return action.user;

        case LOGOUT_OUT:
            return null;

        default:
            return currentUser;
    }
}



//THUNKED ACTION CREATORS

export const resToData = res => res.data;
const logErr = err => console.error(err);



export const signup = credentials => {
    return dispatch => 
     //network request 
         axios.post('/auth/me/signup', credentials) //credentials are sent as req.body
         .then(resToData)
         .then(user => {
             dispatch({type: SIGNUP_CURRENT_USER, user});
         })
         .catch(logErr)  
 }

 
 export const signupAndRedirect = credentials => {
     return dispatch => {
          dispatch(signup(credentials))
              .then(user => {
                  history.push('/')
              })
              .catch(logErr)
      }
 }


export const login = credentials => {
   return dispatch =>
    //network request
        axios.put('/auth/me', credentials) //credentials are sent as req.body
        .then(resToData)
        .then(user => {
            dispatch({ type: LOGIN_CURRENT_USER, user })
            return user;
        })
}


export const loginAndSendtoUserHome = creditials => {
    return dispatch => {
        dispatch(login(creditials))
            .then(user => {
                history.push('/home') 
            })
            .catch(logErr)
    }
}

export const logout = () => {
    return dispatch => 
        axios.delete('/auth/me')
        .then(dispatch({type: LOGOUT_OUT})) 
        .catch(logErr)
}

export const logoutAndSendtoFrontPage = () => {
    return dispatch => {
        dispatch(logout())
        .then(() => {
            history.push('/')
        })
        .catch(logErr)
    }
}

export const fetchLoggedInUser = () => 
    dispatch => 
        axios.get('/auth/me')
        .then(resToData)
        .then(user => {
            dispatch({ type: LOGIN_CURRENT_USER, user })
        })
        .catch(logErr)
