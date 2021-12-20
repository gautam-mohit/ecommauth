import React, { useState } from "react";
import {useHistory} from  'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

   async function SignUp() {
    let item = { name, password, email };
    console.log(item);

     let result = await fetch("http://localhostapi,{
      method:"POST",
      body:JSON.stringify(item),
      headers:
      "Content-Type":'application/json',
      "Accept":'application/json',
    }
    })
    result = await result.json()
    localStorage.setItem(user-info",JSON.stringify(result))
    history.push(/.add)
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <button onClick={SignUp} className="btn btn-primary">Sign Up</button>
    </div>
  );
};

export default Register;
