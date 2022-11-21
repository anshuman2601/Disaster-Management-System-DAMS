import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Request() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  async function loadRequests() {
    const result = await axios
      .get("http://localhost:3001/requests/")
      .then((result) => {
        setRequests(result.data);
        //console.log("Result", requests);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Button variant="contained" onClick={() => navigate("/createrequest")}>
          Add Request
        </Button>
        <Table sx={{ minWidth: 150 }} aria-label="data table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Event</TableCell>
              <TableCell align="right">Date of Occurrence</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request, index) => (
              <TableRow key={request.id}>
                <TableCell component="th" scope="row">
                  {request.request_id}
                </TableCell>
                <TableCell align="right">{request.event}</TableCell>
                <TableCell align="right">{request.date_of_occurrence}</TableCell>
                <TableCell align="right">{request.location}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/items/${request.request_id}`)}
                  >
                    View Items
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Request;
