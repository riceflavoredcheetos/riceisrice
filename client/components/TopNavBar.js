import React from 'react'
import {withRouter, Link} from 'react-router-dom'

export default class TopNavBar extends React.Component{
    constructor(){
      super()
      this.state = {}
    }

    handleClick() {
      let trigger = true;
      console.log('clicked');
      if (trigger) {
        return (<loginPage />)
      }

      !trigger
    }

  render() {

    return(

      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to = '/product'>Home</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">

          <ul className="nav navbar-nav">
            <li><Link to = "/about">About</Link></li>
            <li><a href="#">Shop</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Categories <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li><a href="#">Type1</a></li>
                <li><a href="#">Type2</a></li>
                <li><a href="#">Type3</a></li>
                <li className="divider"></li>
                <li><a href="#">Type4</a></li>
                <li className="divider"></li>
                <li><a href="#">Type5</a></li>
              </ul>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">



            <li><Link to = '/cart'>Cart</Link></li>
            <li><Link to = '/'>Login</Link></li>

          </ul>

        </div>
      </div>
    </nav>

    )

  }
}
