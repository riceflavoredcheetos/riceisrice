import React from 'react';
import { login } from "../store/currentUser";
import { connect } from 'react-redux';
import store from '../store';



export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onLoginSubmit}>
                    <label>
                        <input name="email" type="email" /> Email 
                        <input name="password" type="password"/> Password
                    </label>
                        <input type="submit" />
                </form>
            </div>
        )
    }

    //grab login creditials from login form
    onLoginSubmit(event) {  
        event.preventDefault();
        const { email, password } = event.target;
        const user = {
            email: email.value,
            password: password.value
        }

        //grab user login creditials, dispatch thunk login function with creditials
        //to make axios request which fetches user object.  
        this.props.reactLogin(user)      
    }

}

const mapDispatch = dispatch => { 
    return {
        reactLogin: user => dispatch(login(user))
    }
}

const mapState = state => {
    return state;
}

export default connect(mapState, mapDispatch)(LoginPage);