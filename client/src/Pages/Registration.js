import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    role: "",
    //status: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Username is required"),
    password: Yup.string().min(4).max(20).required("Password is required"),
    email: Yup.string().email().required("Email is required"),
    first_name: Yup.string().min(2).max(15).required("First name is required"),
    last_name: Yup.string().min(2).max(15).required("Last name is required"),
    role: Yup.string().required("Role is required"),
    //status: Yup.string().required("Status is required"),
  });

  async function onSubmit(data) {
    console.log(data);
    async function registrationPost(data) {
      let { data: response } = await axios.post("http://localhost:3001/auth", data);
      return response;
    }
    let response = await registrationPost(data);
    console.log(response);
    //let navigate = useNavigate();
    if (response === "SUCCESS") {
      //const routeChange = () => {
      //  useNavigate(`/verification`);
      //}
      // kinda jank
      console.log("rerouting");
      window.location.href = "/verification";
    }
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field id="username" name="username" placeholder="(Ex. John123...)" />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field type="password" id="password" name="password" placeholder="Your Password..." />

          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field type="email" id="email" name="email" placeholder="Your Email..." />

          <label>First Name: </label>
          <ErrorMessage name="firstname" component="span" />
          <Field id="first_name" name="first_name" placeholder="...." />

          <label>Last Name: </label>
          <ErrorMessage name="lastname" component="span" />
          <Field id="last_name" name="last_name" placeholder="...." />

          <label>Role: </label>
          <ErrorMessage name="role" component="span" />
          <Field id="role" name="role" placeholder="Admin/Donor/Recipient" />

          <button type="submit" to="/verification">
            {" "}
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
