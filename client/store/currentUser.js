import axios from 'axios'


//CONSTANTS

const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER"

//ACTION CREATORS

const loginCurrentUser = user => { type: LOGIN_CURRENT_USER, user };

//REDUCER

export default function (currentUser = {}, action) {
    switch (action.type) {
        case LOGIN_CURRENT_USER:
            console.log('action', action.user)
            return action.user;

        default:
            return currentUser;
    }
}



//THUNKED ACTION CREATORS

const resToData = res => res.data;
const logErr = err => console.error(err);


export const login = creditials => {
   return dispatch =>
    //network request
        axios.put('/auth/me', creditials) //creditials are sent as req.body
        .then(resToData)
        .then(user => {
            dispatch({type: LOGIN_CURRENT_USER, user});
        })
        .catch(logErr)

}

