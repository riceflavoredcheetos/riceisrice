import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {getAllProducts} from '../store/allProducts'


 class Product extends React.Component{


  componentDidMount(){
    this.props.getProducts();
  }


  render(){
    const rice = this.props.AllProducts
    console.log(this.props)
    console.log("Rice:", rice)
    return (

      <div>
      <h1>ALL PRODUCTS</h1>
      <div className = "list-group">
      {
        rice.map( item => {

        return(
            <Link to ={`/product/${item.id}`} className="list-group-item" key = {item.id}>
            <h4 className="list-group-item-heading">{item.title}</h4>
            <p className="list-group-item-text">{item.description}</p>
            </Link>
        )})
      }
      </div>
      </div>
    )
  }
}

const mapState = (state) => {
    return {
      AllProducts: state.AllProducts
    }
  }

const mapDispatch = (dispatch) =>{
    return {
      getProducts: function(){
        const action = getAllProducts();
        dispatch(action)
      }
    }

  }

export default withRouter(connect(mapState, mapDispatch)(Product))
