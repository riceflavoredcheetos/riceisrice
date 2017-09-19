import axios from 'axios'


const resToData = res => res.data;
const logErr = err => console.error(err);


//actions
const GET_INVOICES = 'GET_INVOICES'



//thunk action creator
export const allInvoices = () => {
    dispatch =>
    axios.get('/api/invoice')
    .then(resToData)
    .then(invoices => {
        console.log('thunk invoices', invoices);
    })
    
    .catch(logErr)    
}


//reducer
export default function (state = [], action) {
    // console.log('reducer action', action);
    switch (action.type) {
        case GET_INVOICES:
            return action.invoices
        default:
            return state
    }
}
