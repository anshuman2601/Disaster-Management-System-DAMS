import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import parse from "date-fns/parse";
import Button from "../Components/Button";
import Textfield from "../Components/Textfield";
import Select from "../Components/Select"; // Select,
import { Grid, Container, Typography,  FormControl, InputLabel, MenuItem } from "@mui/material";

function CreateRequest() {
    const initialValues = {
        disaster_id: "",
        expiration_date: "",
        item_name: "",
        quantity: ""
      };

    const validationSchema = Yup.object().shape({
        disaster_id: Yup.string().required("disaster id required"),
        item_name: Yup.string().required("item name is required"),
        quantity: Yup.string().required("quantity is required"),
        expiration_date: Yup.date().required("Date is required").transform(function (value, originalValue) {
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

  const [items, setItems] = useState([]);
  const [disasters, setDisasters] = useState([]);

  const [selectedDisaster, setSelectedDisaster] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  async function loadItems() {
    const result = await axios
      .get("http://localhost:3001/items/")
      .then((result) => {
        setItems(result.data);
        console.log("Result", items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function loadDisasters() {
    const result = await axios
      .get("http://localhost:3001/disasters/")
      .then((result) => {
        setDisasters(result.data);
        console.log("Result", disasters);
      })
      .catch((err) => {
        console.log(err);
      });
  }

    async function submitRequest(data) {
        // async function requestItemPost(data) {
        //     let { data: response } = await axios.post("http://localhost:3001/request_items/create", data);
        //     return response;
        // }

        async function requestPost(data) {
            let { data: response } = await axios.post("http://localhost:3001/requests/create", data);
            return response;
        }
        console.log(data);
        let response2 = await requestPost(data);
        if (response2 === "SUCCESS") {
            navPages();
        }
    }
    console.log(data);
    let response = await requestPost(data);
    if (response === "SUCCESS") {
      navPages();
    }
  }

  useEffect(() => {
    loadItems();
    loadDisasters();
  }, []);

  const disasterSelectionHandler = (event) => {
    initialValues.disaster_id = event.target.value;
    setSelectedDisaster(event.target.value);
  };

  const itemSelectionHandler = (event) => {
    initialValues.item_id = event.target.value;
    setSelectedItem(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <div className="Request">
            <Formik
              initialValues={initialValues}
              onSubmit={submitRequest}
              validationSchema={validationSchema}
              enableReinitialize={true}
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

                                        {/* <Grid item xs={12}>
                                        <FormControl fullWidth>
                                              <InputLabel id="disaster_id" name="disaster_id">Disaster</InputLabel>
                                                <Select label="disaster_id" id="disaster_id" value={selectedDisaster} onChange={disasterSelectionHandler}>
                                                    {disasters.map((disaster) => (
                                                        <MenuItem key={disaster.disaster_id} value={disaster.disaster_id.toString()}>
                                                        {disaster.disaster_name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid> */}
                                        <Grid item xs={12}>
                                            <Textfield name="disaster_id" label="Enter Disaster ID" />
                                        </Grid>

                    <Grid item xs={12}>
                      <Textfield type="date" name="expiration_date" label="" />
                    </Grid>

                                        <Grid item xs={12}>
                                            <Textfield name="item_name" label="Enter Item name" />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield name="quantity" label="Enter Item quantity" />
                                        </Grid>

                                        {/* <Grid item xs={12}>
                                            <FormControl fullWidth>
                                              <InputLabel id="item_id" name="item_id">Item</InputLabel>
                                                <Select label="item_id" id="item_id" value={selectedItem} onChange={itemSelectionHandler}>
                                                    {items.map((item) => (
                                                        <MenuItem key={item.item_id} value={item.item_id}>
                                                        {item.item_name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            </Grid>                                    */}
                                     

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
