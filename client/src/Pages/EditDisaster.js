import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import parse from "date-fns/parse";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

// create a function to edit a disaster by given id and navigate to the edit page using the navigate function
let editDisaster = (id, navigate) => {
  navigate(`/editdisaster/${id}`);
};

function EditDisaster() {
  const navigate = useNavigate();
  const [disasters, setDisasters] = useState([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(20).required("name is required"),
    type: Yup.string().min(4).max(20).required("type is required"),
    description: Yup.string().min(4).max(30).required("short description is required"),
    date: Yup.date()
      .transform(function (value, originalValue) {
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

  useEffect(() => {
    loadDisasterbyId();
  }, []);

  async function loadDisasterbyId(id) {
    const result = await axios
      .get(`http://localhost:3001/disasters/${id}`)
      .then((result) => {
        setDisasters(result.data);
        console.log("Result", disasters);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function submitDisaster(data) {
    console.log(data);
    async function disasterPost(data) {
      let { data: response } = await axios.put(`http://localhost:3001/disasters/`, data);
      return response;
    }
    let response = await disasterPost(data);
    console.log(response);
    if (response === "SUCCESS") {
      navigate(`/editdisaster/`);
    }
  }
  // Function to delete a disaster

  // create a function to edit a disaster by given id and navigate back to the home page

  return (
    <div>
      <Formik onSubmit={submitDisaster} validationSchema={validationSchema}>
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

export default EditDisaster;
