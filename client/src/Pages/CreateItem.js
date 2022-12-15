import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Textfield from "../Components/Textfield";
import { Grid, Container, Typography } from "@mui/material";

function CreateItem() {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);

  const initialValues = {
    name: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(20).required("name is required"),
    description: Yup.string().min(4).max(30).required("short description is required"),
  });

  // create a function to submit the data to the database using axios and navigate to the home page after the data is posted
  async function submitItem(data) {
    async function itemPost(data) {
      let { data: response } = await axios.post("http://localhost:3001/items/create", data);
      return response;
    }
    let response = await itemPost(data);
    console.log(response);
    if (response === "SUCCESS") {
      navigate("/");
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <div className="Item">
            <Formik
              initialValues={initialValues}
              onSubmit={submitItem}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="formContainer">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" component="h1">
                        {" "}
                        Create Item{" "}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="name" label="Name" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="description" label="Description" />
                    </Grid>

                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" type="submit">
                        {" "}
                        Create Item{" "}
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

export default CreateItem;
