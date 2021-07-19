import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const initialState = {
    credentials: {
    username: '',
    password: ''
  }
}

function Login() {
    const [state, setState] = useState(initialState)
    const history = useHistory()

   function handleChange(e) {
    setState({
        credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
        }
    })
   }

   function login(e) {
       e.preventDefault();

       //make a post request with username and password(state.credentials) as the data body
        axios.post('http://localhost:5000/api/login', state.credentials)
        .then((res) => {
            console.log(res)
            //store token in local storage
            //navigate to the dashboard after successfull login
            window.localStorage.setItem('token', JSON.stringify(res.data.payload)) // JSON. stringify ensures that token is a string, only downside is that it has to be parsed when its accessed / also used window.localStorage instead of just localStorage, as some browsers dont recognize localStorage as a global variable, so using window. is a safe option
            history.push('/dashboard') //sends me to the dashboard page 

        })
        .catch((err)=> console.log(err))

    }

    return (
      <div>
        <form onSubmit = {login}>
            <input 
                type = 'text'
                name = 'username'
                value = {state.credentials.username}
                onChange ={handleChange}
            />
            <input
                type="password"
                name="password"
                value={state.credentials.password}
                onChange={handleChange}
            />
            <button>Log in</button>
        </form>
      </div>
    );
  }
  
  export default Login;