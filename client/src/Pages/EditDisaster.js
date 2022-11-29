import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import parse from "date-fns/parse";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid"
import Select from "../Components/Select"
import { ClassNames } from "@emotion/react";


const statuses = [
    
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: "Inactive",
    }
  ];

function EditDisaster(){
    const navigate = useNavigate();
    const [disaster, setDisaster] = useState([]);

    const initialValues = {
        status: "",
      };

    let { id } = useParams();

    const validationSchema = Yup.object().shape({
        status: Yup.string().required("Status is required")
        });

    
    async function loadDisasterbyId(id) {
        const result = await axios
        .get(`http://localhost:3001/disasters/${id}`)
        .then((result) => {
            setDisaster(result.data);
            console.log("Result", disaster);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        loadDisasterbyId(id);
    }, []);

    async function submitDisaster(data) {
        console.log(data);
        async function disasterPost(data) {
            let { data: response } = await axios.put(`http://localhost:3001/disasters/${id}`, data);
            return response;
        }
        let response = await disasterPost(data);
        console.log(response);
        if (response === "SUCCESS") {
            navigate(`/`);
        }
    }
    
    const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
    
    // create a function to edit a disaster by given id and navigate back to the home page
    
    return (
        <div>
            <Table>
                <TableRow>
                    <TableCell>ID: {disaster.disaster_id}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Name: {disaster.disaster_name}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Date: {disaster.disaster_date} </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Description: {disaster.disaster_description}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Location: {disaster.disaster_location}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Status: {disaster.disaster_status} </TableCell>
                </TableRow>
            </Table>
        <div className={ClassNames.formWrapper} >
        <Formik initialValues={initialValues} onSubmit={submitDisaster} validationSchema={validationSchema}>
        <Form><div className="formContainer">
        <Grid item xs={12}>
                    <Select
                      name="status"
                      label="Status"
                      options={statuses.map(status => status.value)}
                    />
                  </Grid>
                  <Button type="submit" variant="contained">
                    {" "}
                  Submit
                </Button>
        </div>
        </Form>
        </Formik>
        </div>
    </div>
    );
}

export default EditDisaster;
