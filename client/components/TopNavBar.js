import React from 'react'

export default class TopNavBar extends React.Component{
    constructor(){
      super()
      this.state = {}
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
          <a className="navbar-brand" href="#">Home</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
          <ul className="nav navbar-nav">
            <li><a href="#">About<span className="sr-only"></span></a></li>
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
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Special Brand?"/>
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>

    )

  }
}
