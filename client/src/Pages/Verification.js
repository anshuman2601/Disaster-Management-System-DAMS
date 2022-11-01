import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Verification() {
  const initialValues = {
    email: "",
    code: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    code: Yup.string().required("Verification code is required")
  });

 async function onSubmit(data){
    console.log(data);
    async function axiosPost(data){
        let {data:response} = await axios.post("http://localhost:3001/auth/verify", data)
        return response;
    }
    let response = await axiosPost(data);
    console.log(response);
    if(response==="valid code"){
        // kinda jank, tried using dom router but was running into component function error.
        window.location.href='/';
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field type="email" id="email" name="email" placeholder="Your Email..." />

          <label>Code: </label>
          <ErrorMessage name="code" component="span" />
          <Field id="code" name="code" placeholder="...." />

          <button type="submit"> Verify</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Verification;