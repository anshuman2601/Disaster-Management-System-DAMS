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

function CreatePost() {
  const navigate = useNavigate();
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    loadDisasters();
  }, []);

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

  // Function to delete a disaster
  let deleteDisaster = async (id) => {
    await axios.delete(`http://localhost:3001/disasters/${id}`);
    loadDisasters();
  };

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" onClick={() => navigate("/createdisaster")}>
        Add Event
      </Button>
      <Table sx={{ minWidth: 150 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Event</TableCell>
            <TableCell align="right">Date of Occurrence</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {disasters.map((disaster, index) => (
            <TableRow key={disaster.id}>
              <TableCell component="th" scope="row">
                {disaster.disaster_id}
              </TableCell>
              <TableCell align="right">{disaster.disaster_name}</TableCell>
              <TableCell align="right">{disaster.disaster_date}</TableCell>
              <TableCell align="right">{disaster.disaster_location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CreatePost;
