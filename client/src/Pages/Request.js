import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Request() {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [disaster, setDisaster] = useState([]);
    
    async function loadRequests() {
        const result = await axios.get("http://localhost:3001/requests/").then((result) => {
            setRequests(result.data);
            //console.log("Result", requests);
        }).catch((err) => {
            console.log(err);
        });
    }

    function getDisasterName(dis_id) {
        const result = axios.get(`http://localhost:3001/disasters/${dis_id}`).then((result) => {
            setDisaster(result.data);
        }).catch((err) => {
            console.log(err);
        }); 
    }

    useEffect(() => {
        loadRequests();
    }
    , []);
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={-2} component={Paper}>
            <TableContainer align="center" component={Paper}>
                <Typography variant="h4">Requests</Typography>
                <Button variant="contained" onClick={() => navigate("/createrequest")}>
                    Add Request
                </Button>
                <Table sx={{ minWidth: 150 }} aria-label="data table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">User</TableCell>
                            <TableCell align="right">Disaster</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Date Requested</TableCell>
                            <TableCell align="center">Expiration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests.map((request, index) => (
                            getDisasterName(request.request_disaster_id),
                            <TableRow key={request.id}>
                                <TableCell component="th" scope="row">
                                    {request.request_id}
                                </TableCell>
                                <TableCell align="right">
                                    {request.request_username}
                                </TableCell>
                                <TableCell align="right">
                                    {disaster.disaster_name}
                                </TableCell>
                                <TableCell align="right">
                                    {disaster.disaster_location}
                                </TableCell>
                                <TableCell align="right">
                                    {request.request_date}
                                </TableCell>
                                <TableCell align="right">
                                    {request.request_expiration}
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained">
                                        View Items
                                    </Button>
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

export default Request;