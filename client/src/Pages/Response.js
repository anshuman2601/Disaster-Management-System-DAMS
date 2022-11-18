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

function Response() {
    const navigate = useNavigate();
    const [response, setResponse] = useState([]);

    useEffect(() => {
        loadResponse();
    }
    , []);

    async function loadResponse() {
        const result = await axios.get("http://localhost:3001/response/").then((result) => {
            setResponse(result.data);
            console.log("Result", response);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Button variant="contained" onClick={() => navigate("/createresponse")}>
                    Add Response
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
                        {response.map((response, index) => (
                            <TableRow key={response.id}>
                                <TableCell component="th" scope="row">
                                    {response.response_id}
                                </TableCell>
                                <TableCell align="right">
                                    {response.event}
                                </TableCell>
                                <TableCell align="right">
                                    {response.date_of_occurrence}
                                </TableCell>
                                <TableCell align="right">
                                    {response.location}
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" onClick={() => navigate(`/response/${response.response_id}`)}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" onClick={() => navigate(`/response/${response.response_id}`)}>
                                        Delete
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

export default Response;