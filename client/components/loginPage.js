import React from 'react';
import { loginAndSendtoUserHome as login } from "../store/currentUser";
import { connect } from 'react-redux';
import store from '../store';
import SignUp from './signup';
import { Link } from 'react-router-dom';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Hello. Sign in</h1>
                <form onSubmit={this.onLoginSubmit}>
                    <label>
                        <input name="email" type="email" /> Email
                        <input name="password" type="password"/> Password
                    </label>
                        <button type="submit" name="Login"/>Login
                </form>

                        <Link to='/signup'>Signup</Link>
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
        this.props.reactLogin(user)
    }
}

const mapDispatch = dispatch => {
    return {
        reactLogin: credentials => dispatch(login(credentials)),
    }
}

const mapState = state => {
    return state;
}

export default connect(mapState, mapDispatch)(LoginPage)
