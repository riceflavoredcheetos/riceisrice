import React from 'react';
import { login } from "../store/currentUser";


export default class LoginPage extends React.Component {
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
        const { email, password } = event.target;
        const user = {
            email: email.value,
            password: password.value
        }

        const thunk = login(user);
        console.log('thunk', thunk);

        event.preventDefault();
        console.log('user', user);




    }

}