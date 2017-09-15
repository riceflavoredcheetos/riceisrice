import axios from 'axios'


//CONSTANTS

const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER"
const SIGNUP_CURRENT_USER = "SIGNUP_CURRENT_USER"

//ACTION CREATORS

const loginCurrentUser = user => { type: LOGIN_CURRENT_USER, user };
const signupUser = user => {type: SIGNUP_CURRENT_USER, user};



//REDUCER

export default function (currentUser = {}, action) {
    switch (action.type) {
        case "LOGIN_CURRENT_USER": 
            return action.user;
        
        case "SIGNUP_CURRENT_USER":
            return action.user;
        
        default: 
            return currentUser;

        
    }
}



//THUNKED ACTION CREATORS

export const resToData = res => res.data;
const logErr = err => console.error(err);



export const signup = creditials => {
    return dispatch => 
     //network request 
         axios.post('/auth/me/signup', creditials) //creditials are sent as req.body
         .then(resToData)
         .then(user => {
             dispatch({type: SIGNUP_CURRENT_USER, user});
         })
         .catch(logErr)
      
 }

export const login = creditials => {
   return dispatch => 
    //network request 
        axios.put('/auth/me', creditials) //creditials are sent as req.body
        .then(resToData)
        .then(user => {
            console.log('server user', user)
            dispatch({type: LOGIN_CURRENT_USER, user});
        })
        .catch(logErr)
     
}
