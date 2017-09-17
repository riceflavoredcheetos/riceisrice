import React from 'react';
import { connect } from 'react-redux';
import { signupAndRedirect } from '../store/currentUser';


class Signup extends React.Component {
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
        
        this.props.reactSignup(user);
    }
}

const mapDispatch = dispatch => { 
    return {
        reactSignup: user => dispatch(signupAndRedirect(user))
    }
}

const mapState = state => {
    return state;
}

export default connect(mapState, mapDispatch)(Signup);