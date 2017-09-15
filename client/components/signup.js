import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/currentUser';


export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
    }

    render() {
        return(
            <div>
                <h1>Join! Sign Up</h1>
                <form onSubmit={this.onSignupSubmit}>
                    <label>
                        <input name="email" type="email" /> Email 
                        <input name="password" type="password"/> Password
                    </label>
                        <button type="submit" name="Signup"/>Signup
                </form>
            </div>
        )
    }


    onSignupSubmit(event) {
        event.preventDefault();
        const { email, password } = event.target;
        const user = {
            email: email.value,
            password: password.value
        }

        console.log('user', user);

        this.props.reactSignup(user);
    }

}

const mapDispatch = dispatch => { 
    return {
        reactSignup: user => dispatch(signup(user))
    }
}

const mapState = state => {
    return state;
}

export default connect(mapState, mapDispatch)(SignUp);