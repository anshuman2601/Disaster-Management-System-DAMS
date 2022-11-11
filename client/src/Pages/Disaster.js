import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Disaster() {
  const navigate = useNavigate();
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    loadDisasters();
  }, []);

  async function loadDisasters() {
    const result = await axios.get(
      'http://localhost:3001/disasters/'
    );
    setDisasters(result.data);
  }

  // Function to delete a disaster
  let deleteDisaster = async (id) => {
    await axios.delete(
      `http://localhost:3001/disasters/${id}`
    );
    loadDisasters();
  };

  return (
    <div className="home-page">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Disaster</th>
            <th scope="col">Date of Occurrence</th>
            <th scope="col">Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {disasters.map((disaster, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{disaster.disaster_name}</td>
              <td>{disaster.disaster_date}</td>
              <td>{disaster.disaster_location}</td>
              <Button
                variant="contained"
              >
                View
              </Button>
              
              <Button
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={() => deleteDisaster(disaster.id)}>
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Disaster;