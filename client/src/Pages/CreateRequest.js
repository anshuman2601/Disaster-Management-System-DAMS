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
    disaster_id: "",
    expiration_date: "",
    item_id: "",
  };

  const validationSchema = Yup.object().shape({
    disaster_id: Yup.string().required("disaster id required"),
    item_id: Yup.string().required("item id is required"),
    expiration_date: Yup.date()
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

  const navigate = useNavigate();
  const navPages = () => {
    navigate("/");
  };

  async function submitRequest(data) {
    async function requestPost(data) {
      let { data: response } = await axios.post("http://localhost:3001/requests/create", data);
      return response;
    }
    let response = await requestPost(data);
    if (response === "SUCCESS") {
      navPages();
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
                      <Textfield name="disaster_id" id="req-dis-id" label="disaster_id" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield type="date" id="req-dis-date" name="expiration_date" label="" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="item_id" id="req-item-id" label="item_id" />
                    </Grid>

                    <Grid item xs={12}>
                      <Button variant="primary" id="req-create" type="submit">
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
