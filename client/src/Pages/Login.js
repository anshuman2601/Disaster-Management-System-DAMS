import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("This Works");
  };
  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input type="text" placeholder="Username"  />
      
        <label>Password:</label>
        <input type="password" onChange={(event) => { setPassword(event.target.value);}} />
      </form>
      <button onClick={login}> Login </button>
    </div>
  );
}

export default Login;