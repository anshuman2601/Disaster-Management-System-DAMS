import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

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
    <div className="loginForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input type="text" placeholder="Username" {...register("Username", {required: true, min: 6, maxLength: 14})} />
        {errors.Username && <span>This field is required</span>}
        <label>Password:</label>
        <input type="password" placeholder="Password" {...register("Password", {required: true})} />
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default Login;