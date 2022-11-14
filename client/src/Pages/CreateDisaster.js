import React,  { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import parse from "date-fns/parse";


function CreateDisaster() {
    const navigate = useNavigate();
    const [disaster, setDisaster] = useState([]);

    const initialValues = {
        id: "1",
        name: "",
        type: "",
        description: "",
        date: "",
        location: "",
        //status: "",
      };

    const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(20).required("name is required"),
    type: Yup.string().min(4).max(20).required("type is required"),
    description: Yup.string().min(4).max(30).required("short description is required"),
    date: Yup.date().transform(function (value, originalValue) {
        if (this.isType(value)) {
        return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
    })
    .typeError("please enter a valid date")
    .required()
    .min("1969-11-13", "Date is too early"),
    location: Yup.string().min(2).max(15).required("location is required"),
    //status: Yup.string().required("Status is required"),
    });

// create a async function to post the data to the database using axios and navigate to the home page after the data is posted
// async function onSubmit(values) {
//     console.log("submitDisaster", values);
//     async function disasterPost(values) {
//       let {values:response} = await axios.post("http://localhost:3001/disasters/", values);
//       return response;
//     }
//     let response = await disasterPost(values);
//     console.log("response", response);
//     if (response === "SUCCESS") {
//       navigate("/");
//     }
//   }

async function submitDisaster(data) {
    console.log(data);
    async function disasterPost(data) {
      let { data: response } = await axios.post("http://localhost:3001/disasters/create", data);
      return response;
    }
    let response = await disasterPost(data);
    console.log(response);
    if (response === "SUCCESS") {
      console.log("rerouting");
      window.location.href = "/";
    }
  }

return (
    <div>
        <Formik initialValues={initialValues} onSubmit={submitDisaster} validationSchema={validationSchema}>
        <Form className="formContainer">
            <label>Name: </label>
            <ErrorMessage name="name" component="span" />
            <Field id="name" name="name" placeholder="" />

            <label>Type: </label>
            <ErrorMessage name="type" component="span" />
            <Field id="type" name="type" placeholder="" />

            <label>Description: </label>
            <ErrorMessage name="email" component="span" />
            <Field id="description" name="description" placeholder="Short description here..." />

            <label>Date: </label>
            <ErrorMessage name="date" component="span" />
            <Field type="date" id="date" name="date" placeholder="" />

            <label>Location: </label>
            <ErrorMessage name="location" component="span" />
            <Field id="location" name="location" placeholder="" />

            <button type="submit" to="/">
            {" "}
            Submit
            </button>
        </Form>
        </Formik>
    </div>
    );
}

export default CreateDisaster;
