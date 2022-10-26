import React, { useState } from "react";

import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("testing");

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="loginForm">
      <form onSubmit={login}>
        <label>Username:</label>
        <input type="text" placeholder="Username" />
        <label>Password:</label>
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
