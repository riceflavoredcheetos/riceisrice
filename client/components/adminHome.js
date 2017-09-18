import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export class AdminHome extends React.Component {
    constructor() {
        super()
    }


    render() {
        return(
            <div>

                <div id="adminOptions">
                    <div id="allOrders">
                        <h2><Link to="/admin_orders">Order Management</Link></h2>
                    </div>

                    <div id="products">
                        <h2><Link to='/admin_allproducts'>Products/Categories</Link></h2>
                    </div>

                    <div id="userManagement">
                        <h2>User Management</h2>
                    </div>
                </div>

            </div>
        )
    }
}

const mapState = state => {
    return state
}

export default connect(mapState, null)(AdminHome)
