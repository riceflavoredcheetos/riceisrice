import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'


 const About = () => {

      return (
        <div>
        <div >
            <h1 style = {{'textAlign': 'center'}}>About The Rice Brothers</h1>
            <img src="founders.jpg" style = {{'width':'100%', 'margin':'auto', 'padding':'0% 10% 0% 10%'}} />
        </div>

        <blockquote style = {{'textAlign': 'center', 'paddingTop':'5%'}}>
        <p> We are commited to the finest grains from all the lands. Each new product is eaten in our own homes for a full month before we release products on to our site. We in the business of rice and our customers. Thats why we learned how to code to custom build this e-comerce site for our users. Every day we make improvements to our site and our products. Every day we are improving. Because Rice is Rice.</p>
        <small>Rice brothers <cite title="Source Title">Rice is Rice</cite></small>
      </blockquote>
        </div>
      )
}


export default About
