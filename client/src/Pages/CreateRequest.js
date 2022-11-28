import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import parse from "date-fns/parse";
import Button from "../Components/Button";
import Textfield from "../Components/Textfield";
import { Grid, Container, Typography } from "@mui/material";

function CreateRequest() {
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
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    //status: Yup.string().required("Status is required"),
    date: Yup.date()
      .required("Date is required")
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
  });

  async function submitRequest(data) {
    async function requestPost(data) {
      let { data: response } = await axios.post("http://localhost:3001/requests/create", data);
      return response;
    }
    let response = await requestPost(data);
    if (response === "SUCCESS") {
      window.location.href = "/";
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <div className="Request">
            <Formik
              initialValues={initialValues}
              onSubmit={submitRequest}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="formContainer">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" component="h1">
                        {" "}
                        Create Request{" "}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="name" label="Name" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="type" label="Type" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="description" label="Description" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield type="date" name="date" label="" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="location" label="Location" />
                    </Grid>

                    <Grid item xs={12}>
                      <Button variant="primary" type="submit">
                        Create Request
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default CreateRequest;
