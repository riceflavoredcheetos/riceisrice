import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers } from "../store/allUsers";

let edit = false;
let style = {
  'textAlign': 'center',
}



export class AllUsers extends React.Component {

  componentDidMount(){
    this.props.loadUsers();
  }

    render() {
      const people = this.props.AllUsers
      console.log("People:", people )
      const triggered= (person) =>{
        return () => {
          person.edit = true;
          console.log("TRIGGERED", person)
          this.forceUpdate();
        }
      }

      if(edit){
        return(
            <div>
            <h1>Editing Users</h1>
            </div>
        )}
      else {
        return(
          <div >
          <h1 style ={style} >All Users</h1>
          <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Administrator</th>
                  </tr>
                </thead>
           <tbody>
              {
               people.map( person => {
                return (
               <tr key={person.id} onClick = {triggered(person)}>
                  <td>{person.id}</td>
                  <td>{person.edit? <input
                    className="form-control"
                    type="text"
                    name="name"
                    defaultValue={person.name}
                    placeholder={person.name}
                  />:person.name}</td>
                  <td>{person.edit?<input
                    className="form-control"
                    type="text"
                    name="email"
                    defaultValue={person.email}
                    placeholder={person.email}
                  />:person.email}</td>
                  <td>{person.edit?<input
                    className="form-control"
                    type="text"
                    name="password"
                    defaultValue={person.password}
                    placeholder={person.password}
                  />:person.password}</td>
                  <td>{person.edit?<select>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>:person.isAdmin.toString()}</td>
                  <td>{person.edit?<span><a href="#" className="btn btn-info">Submit</a>
                  <a href="#" className="btn btn-danger">Remove</a></span>:''}</td>
               </tr>
                )
               })
              }
              </tbody>
           </table>
          </div>
        )
      }
    }
}

const mapState = state => {
    return {
      AllUsers: state.AllUsers
    }
}

const mapDispatch = (dispatch) => {
    return {
      loadUsers: () => {
        dispatch(getAllUsers())
      }
    }
}

export default connect(mapState, mapDispatch)(AllUsers)
