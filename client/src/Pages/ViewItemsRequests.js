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
import Grid from "@mui/material/Grid";
import Select from "../Components/Select";
import { ClassNames } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function ViewItemsRequests() {
  const navigate = useNavigate();
  const [request, setRequest] = useState([]);
  const [itemIds, setItemIds] = useState([]);

  let { id } = useParams();

  async function loadRequestbyId(id) {
    const result = await axios
      .get(`http://localhost:3001/requests/${id}`)
      .then((result) => {
        setRequest(result.data);
        console.log("Result", request);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function loadRequestItemsIds(id) {
    const result = await axios
      .get(`http://localhost:3001/request_items/${id}`)
      .then((result) => {
        setItemIds(result.data);
        console.log("Result", itemIds);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadRequestbyId(id);
    loadRequestItemsIds(id);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={-2} component={Paper}>
        <TableContainer align="center" component={Paper}>
          <Typography variant="h4">Items</Typography>
          <Table sx={{ minWidth: 150 }} aria-label="data table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemIds.map((item, index) => (
                <TableRow key={item.item_id}>
                  <TableCell component="th" scope="row">
                    {item.item_id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
}

export default ViewItemsRequests;
