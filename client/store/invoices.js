import axios from 'axios'


const resToData = res => res.data;
const logErr = err => console.error(err);


//action creator
export const getInvoices = invoices => ({type: GET_INVOICES, invoices})
export const updateOrder = invoices => ({type: GET_INVOICES, invoices})
//actions
const GET_INVOICES = 'GET_INVOICES'
const UPDATE_ORDER = 'UPDATE_ORDER'



//thunk action creator
export const allInvoices = () => {
   return dispatch =>
        axios.get('/api/invoice')
        .then(res => {
            dispatch(getInvoices(res.data))
        })


        .catch(logErr)
}

export const updateOrderStatus = () => {
    return dispatch =>
        axios.put('/api/invoice/orderstatus')
        .then(resToData)
        .then(order => {
            dispatch(updateOrder(order))
        })
}


//reducer
export default function (state = [], action) {

    switch (action.type) {
        case GET_INVOICES:
            return action.invoices

        case UPDATE_ORDER:
            return action.invoices

        default:
            return state
    }
}
