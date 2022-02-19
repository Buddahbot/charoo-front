import React, { useState } from 'react'
import { register } from '../logic/UserFunctions'
import {useNavigate} from 'react-router-dom'

const  Register = () => {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


let navigate = useNavigate()

  const createUser = (e) => {
    e.preventDefault()

    const newUser = { // creates new object with name,email, password
      firstName: firstName,
      lastName: lastName, // using useStates
      email: email,
      password: password
    }

    
    register(newUser).then(res => { // calls the register function from UserFunctions.js and passes newUser as argument
      navigate(`/login`) // then navigates to login
    })
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={createUser}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
                  <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default Register