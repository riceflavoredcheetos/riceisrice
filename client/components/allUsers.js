import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers } from "../store/allUsers";

let edit = false;
let style = {
  'textAlign': 'center',
}




export class AllUsers extends React.Component {

  constructor(){
    super()
    this.state = {
      tempName:'',
      tempEmail:'',
      tempPassword:'',
      tempAdmin:false,
    }
    this.handleName= this.handleName.bind(this)
    this.handleEmail= this.handleEmail.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleAdminStatus=this.handleAdminStatus.bind(this)
    this.submitting= this.submitting.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  componentDidMount(){
    this.props.loadUsers();
  }

  handleName(event){
    this.setState({
      tempName: event.target.value
    })
  }

  handleEmail(event){
    this.setState({
      tempEmail: event.target.value
    })
  }

  handlePassword(event){
    this.setState({
      tempPassword: event.target.value
    })
  }

  handleDelete(person){
    return () => {
      axios.delete(`/api/users/${person.id}`)
      .then(()=>{
        this.props.loadUsers();
        this.forceUpdate();
      })
    }
  }

  handleAdminStatus(event){
    this.setState({
      tempAdmin: event.target.value
    })
  }

  submitting = (person) => {
    return () => {
       axios.put(`/api/users/${[person.id]}`, {
          name:this.state.tempName,
          email: this.state.tempEmail,
          password: this.state.tempPassword,
          admin: this.state.tempAdmin,
       })
      .then(()=>{
        person.edit = false
        this.setState({
        tempName: '',
        tempAdmin: '',
        tempPassword: '',
        tempAdmin: false
      })
      this.props.loadUsers();
      console.log("Submitting Person:", person)
    })

  }}

    render() {
      const people = this.props.AllUsers
      const triggered= (person) =>{
        return () => {
          person.edit = true;
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
               <tr key={person.id} onClick = {triggered(person)} >
                  <td>{person.id}</td>
                  <td>{person.edit? <input
                    className="form-control"
                    type="text"
                    placeholder={person.name}
                    defaultValue={person.name}
                    onChange ={this.handleName}
                  />:person.name}</td>
                  <td>{person.edit?<input
                    className="form-control"
                    type="text"
                    placeholder={person.email}  defaultValue={person.email}
                    onChange ={this.handleEmail}
                  />:person.email}</td>
                  <td>{person.edit?<input
                    className="form-control"
                    type="text"
                    placeholder={person.password}   defaultValue={person.password} onChange ={this.handlePassword}
                  />:person.password}</td>
                  <td>{person.edit?<select onChange ={this.handleAdminStatus}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>:person.isAdmin.toString()}</td>
                  <td>{person.edit?<span><a href="#" className="btn btn-info" type="submit" onClick={this.submitting(person)} >Submit</a>
                  <a href="#" className="btn btn-danger" onClick = {this.handleDelete(person)}>Remove</a></span>:''}</td>
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
      },
    }
}

export default connect(mapState, mapDispatch)(AllUsers)
