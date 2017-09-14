import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {getAllProducts} from '../store/allProducts'

export default class Product extends React.Component{

  constructor (){
    super();
    this.state = {
      rice:[
        {
          id:707,
          name: 'white',
          quantity: 25,
          price: 5,
          rating: 2.5,
          Region: 'U.S.A'
        },
        {
          id:69,
          name: 'Cantonese',
          quantity: 44,
          price: 2,
          rating: 1,
          Region: 'CHINA'
        },
        {
          id: 42,
          name: 'Black Truffle',
          quantity: 7,
          price: 50,
          rating: 4.9,
          Region: 'Dubai'
        }
      ]
    }
  }


  render(){
    const rice = this.state.rice
    console.log("AllProductsComponent")
    console.log("Rice:", rice)
    return (
          //WHEN PRODUCTS IS LOADED//
          //THIS NEEDS TO BE A TABLE LAYOUT
      <div>
      <h1>ALL PRODUCTS</h1>
      <div className = "list-group">
      {
        rice.map( item => {

        return(
            <Link to ={`/product/${item.id}`} className="list-group-item" key = {item.id}>
            <h4 className="list-group-item-heading">{item.name}</h4>
            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius  blandit.</p>
            </Link>
        )})
      }
      </div>
      </div>
    )
  }


}
