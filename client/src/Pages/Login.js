import React from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const navPagesRec = () => {
    navigate("/recipient");
  };

  const login = async (data) => {
    //const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
      if (response.data === "Recipient") {
        navPagesRec();
      } else if (response.data === "Donor") {
        navigate("/donor");
      } else if (response.data === "Admin") {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
        <Form>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field id="username" name="username" placeholder="(Ex. John123...)" />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field type="password" id="password" name="password" placeholder="Your Password..." />
          <button type="submit" id="login">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
