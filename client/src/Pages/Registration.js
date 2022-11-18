import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Textfield from "../Components/Textfield.js";
import { Container, Grid, Typography } from "@mui/material";
import Button from "../Components/Button";
import { ClassNames } from "@emotion/react";
import Select from "../Components/Select";

const roles = [
  // {
  //   value: "Admin",
  //   label: "Admin",
  // },
  {
    value: "Donor",
    label: "Donor",
  },
  {
    value: "Recipient",
    label: "Recipient",
  },
];

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

    if (response === "SUCCESS") {
      console.log("rerouting");
      window.location.href = "/verification";
    }
  }

  const [role, setRole] = useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Box sx={{ mt: 8 }}>
            <div className={ClassNames.formWrapper}>

              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
          
                <Typography>Registration </Typography>
                 <Textfield name="username" label="Username" margin="normal" />

          
                
                <Textfield type="password" name="password" label="Password" margin="normal" />

          
                
                <Textfield type="email" name="email" label="Email" margin="normal" />

          
                
                <Textfield name="first_name" label="First Name" margin="normal" />

          
                
                <Textfield name="last_name" label="Last Name" margin="normal" />


                <Grid item xs={12}>
                    <Select
                      name="role"
                      label="Role"
                      options={roles.map(role => role.value)}
                    />
                  </Grid>
                 {/* <Textfield
                select
                label="Role"
                value={role}
                onChange={handleChange}
                helperText="Please select your role"
                margin="normal"
                >
                  {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Textfield> */}

                <Button type="submit" variant="contained" to="/verification">
                  {" "}
                  Register
                </Button>
                </Form>
              </Formik>
            </div>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Registration;
