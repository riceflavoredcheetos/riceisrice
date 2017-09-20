import React from 'react';
import { connect } from 'react-redux'
import { allInvoices, updateOrderStatus } from '../store/invoices'



export class AdminAllOrders extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getInvoices();
    }

    render() {
        let invoices = this.props.invoices
        console.log("invoices:", invoices)

          return(

              <div id="admin-orders">
                    <h2>All Orders</h2>

                <table className="table table-striped table-hover">
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
                        <tr key={invoice.id} >
                            <td>{invoice.id}</td>

                            <td>{
                                <form onSubmit={event => this.onSubmit(event)}>
                                <select name="status" id={invoice.id}>
                                    <option defaultValue='Created'>Created</option>
                                    <option value='Confirmed'>Confirmed</option>
                                    <option value='Shipped'>Shipped</option>
                                </select>

                                <button type="submit" className="btn btn-info">Submit</button>
                                </form>
                                }
                            </td>

                            <td>{invoice.edit?<input
                                className="form-control"
                                type="text"
                                name="email"
                                defaultValue={invoice.address}
                                placeholder={invoice.address}
                            />:invoice.address}</td>

                            <td>{invoice.userId}</td>

                        </tr>
                    )
                    })
                    }
                    </tbody>
                </table>
                </div>
            )
        }

        onSubmit = (event) => {
            event.preventDefault();
            console.log('orderStatus', event.target)
            // this.props.reactChangeOrderStatus(invoice)
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
        },

        reactChageOrderStatus: () => {
            dispatch(updateOrderStatus());
        }
    }
}


export default connect(mapState, mapDispatch)(AdminAllOrders);
