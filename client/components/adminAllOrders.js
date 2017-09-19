import React from 'react';
import { connect } from 'react-redux'
import allInvoices from '../store/invoices'


export class AdminAllOrders extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getInvoices();
    }

    render() {
        let invoices = this.props
        // console.log('invoices', invoices)

        return(
            <div id="admin-orders">
                <h2>All Orders</h2>

            {/* <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>UserId</th>
                    </tr>
                </thead>
            <tbody>
                {
                invoices.map( invoice => {
                return (
                <tr key={invoice.id}>
                    <td>{invoice.id}</td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                </tr>
                )
                })
                }
                </tbody>
            </table> */}
            </div>
        )
    }
}


const mapState = state => {
   return {
       invoices: state.invoices
    }
}


const mapDispatch = dispatch => {
    return {
        getInvoices: () => {
            dispatch(allInvoices())
        }
    }
}


export default connect(mapState, mapDispatch)(AdminAllOrders);