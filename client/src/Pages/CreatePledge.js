import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Textfield from "../Components/Textfield";
import { Grid, Container, Typography } from "@mui/material";

function CreatePledge() {
  const navigate = useNavigate();
  const [pledge, setPledge] = useState([]);

  const initialValues = {
    pledge_location: "",
    pledge_item: "",
    pledge_quant: ""
  };

  const validationSchema = Yup.object().shape({
    pledge_location: Yup.string().required("Your location is required"),
    pledge_item: Yup.string().required("item is required"),
    pledge_quant: Yup.string().required("quantity is required")
  })

  // create a function to submit the data to the database using axios and navigate to the home page after the data is posted
  async function submitPledge(data) {
    async function pledgePost(data) {
      let { data: response } = await axios.post("http://localhost:3001/pledges/create", data);
      return response;
    }
    console.log(data);
    let response = await pledgePost(data);
    console.log(response);
    if (response === "SUCCESS") {
      navigate("/donor");
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <div className="Pledge">
            <Formik
              initialValues={initialValues}
              onSubmit={submitPledge}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="formContainer">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" component="h1">
                        {" "}
                        Create Pledge{" "}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="location" label="Location" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="pledgeitems" label="Items" />
                    </Grid>

                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" type="submit">
                        {" "}
                        Create Pledge{" "}
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="pledge_location" label="Location" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="pledge_item" label="Item" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="pledge_quant" label="Quantity" />
                  </Grid>


                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit"> Create Pledge </Button>
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

export default CreatePledge;
