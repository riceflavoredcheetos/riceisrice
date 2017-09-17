import React from 'react'
import { connect } from 'react-redux'


export class AccountPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return(
            <div>
                <h2></h2>
                <div id="userOptions">
                    <div id="yourOrders">
                        <h2>Your Orders</h2>
                    </div>

                    <div id="loginAndSecurity">
                        <h2>Login and Security</h2>
                    </div>

                    <div id="addresses">
                        <h2>Addresses</h2>
                    </div>

                </div>
            </div>

        )
    }
}

const mapState = state => {
    return state
}

export default connect(mapState, null)(AccountPage)
