import React, {useState} from "react";
import {login,signup} from '../utils/API'

export default ({setUser})=>  {

const [form, setForm] = useState(true);
const [input, setInput] = useState({email:"", password:""})

const handleLoginSignup = async ()=>{
const {data} = form ? await login(input) : await signup(input);
data.email ? setUser(data) : console.log('data')
}

return <><nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h2>{form? "Login" : "Sign Up"} Form</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={(e)=>setInput({...input, email:e.target.value})} type="email" class="form-control" id="email-input" placeholder="Email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            < input onChange = {
                (e) => setInput({
                    ...input,
                    password: e.target.value
                })
            }
            type = "password"
            class = "form-control"
            id = "password-input"
            placeholder = "Password" / >
          </div>
          <button onClick={handleLoginSignup}  class="btn btn-default">{form ? "Login" : "Sign Up"}</button>
        <p>Or {!form ? "log in" : "sign up"} <span onClick={()=>{setForm(!form)}}>here</span></p>
      </div>
    </div>
  </div></>
}