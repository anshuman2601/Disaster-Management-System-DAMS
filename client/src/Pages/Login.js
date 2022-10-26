import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  console.log("testing");
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Username is required"),
    password: Yup.string().min(4).max(20).required("Password is required"),
  });

  const login = (data) => {
    //const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
        <Form >
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field id="username" name="username" placeholder="(Ex. John123...)" />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field type="password" id="password" name="password" placeholder="Your Password..." />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
