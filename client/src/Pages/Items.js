import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// create a function to show all items in the database

function Items() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    async function loadItems() {
        const result = await axios.get("http://localhost:3001/items/").then((result) => {
            setItems(result.data);
            console.log("Result", items);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        loadItems();
    } , []);

    // Function to delete an item
    let deleteItem = async (id) => {
        await axios.delete(`http://localhost:3001/items/${id}`);
        loadItems();
    }
    // Function to edit an item
    let editItem = async (id) => {
        await axios.put(`http://localhost:3001/items/${id}`);
        loadItems();
    }
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={-2} component={Paper}>
                <TableContainer align="center" component={Paper}>
                    <Typography variant="h4">Items</Typography>
                    <Button size="small" id="add-item" variant="contained" onClick={() => navigate("/createitem")}>
                        Add Item
                    </Button>
                    <Table sx={{ minWidth: 150 }} aria-label="data table" stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Item</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        {item.item_id}
                                    </TableCell>
                                    <TableCell align="right">{item.item_name}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined" onClick={() => editItem(item.id)}>Edit</Button>
                                        <Button variant="contained" id="item-delete" color="error" onClick={() => deleteItem(item.item_id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    )
}

export default Items;
