import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function SignUp() {
    let item = { name, password, email };
    console.log(item);
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
