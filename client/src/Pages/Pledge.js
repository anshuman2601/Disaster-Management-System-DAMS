import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// create a function to show all pledges by the donor in the database

function Pledge() {
    const navigate = useNavigate();
    const [pledges, setPledges] = useState([]);

    async function loadPledges() {
        const result = await axios.get("http://localhost:3001/pledges/").then((result) => {
            setPledges(result.data);
            console.log("Result", pledges);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        loadPledges();
    } , []);

    // Function to delete a pledge
    let deletePledge = async (id) => {
        await axios.delete(`http://localhost:3001/pledges/${id}`);
        loadPledges();
    }
    // Function to edit a pledge
    // let editPledge = async (id) => {
    //     await axios.put(`http://localhost:3001/pledges/${id}`);
    //     loadPledges();
    // }
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={-2} component={Paper}>
                <TableContainer align="center" component={Paper}>
                    <Typography variant="h4">Pledges</Typography>
                    <Button size="small" variant="contained" onClick={() => navigate("/createpledge")}>
                        Add Pledge
                    </Button>
                    <Table sx={{ minWidth: 150 }} aria-label="data table" stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Pledge Location</TableCell>
                                <TableCell align="right">Item</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pledges.map((pledge, index) => (
                                <TableRow key={pledge.id}>
                                    <TableCell component="th" scope="row">
                                        {pledge.pledge_id}
                                    </TableCell>
                                    <TableCell align="right">{pledge.pledge_location}</TableCell>
                                    <TableCell align="right">{pledge.pledge_item}</TableCell>
                                    <TableCell align="right">{pledge.pledge_item_quant}</TableCell>
                                    <TableCell align="center">
                                        <Button size="small" variant="outlined" color="error" onClick={() => deletePledge(pledge.pledge_id)}>
                                            Delete
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

export default Pledge;