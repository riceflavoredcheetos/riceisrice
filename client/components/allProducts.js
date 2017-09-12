import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

export default class Product extends React.Component{

  constructor (){
    super();
    this.state = {
      rice:[
        {
          name: 'white',
          quantity: 25,
          price: 5,
          rating: 2.5,
          Region: 'U.S.A'
        },
        {
          name: 'Cantonese',
          quantity: 44,
          price: 2,
          rating: 1,
          Region: 'CHINA'
        },
        {
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

    return (
          //WHEN PRODUCTS IS LOADED//
          //THIS NEEDS TO BE A TABLE LAYOUT
      <div>
      <h1>ALL PRODUCTS</h1>
      <table>
      {
        rice.map( rices => {
        })
      }
      </table>
      </div>
    )
  }


}
