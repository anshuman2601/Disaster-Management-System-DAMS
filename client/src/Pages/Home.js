import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const Home = () => {
  const navigate = useNavigate();
  const [disasters, setDisaster] = useState([]);

  useEffect(() => {
    loadDisasters();
  }, []);

  const deleteDisaster = async (id) => {
    await axios.delete(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
    );
    loadDisasters();
  };

  const loadDisasters = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users`
    );
    setDisaster(result.data);
  };
  return (
    <div className="home-page">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Disaster Event</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {disasters.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <Button
                variant="contained"
                onClick={() => navigate.push(`/user/${user.id}`)}
              >
                View
              </Button>
              {/* <Link class="btn btn-outline-primary mr-2" to={`./edituser/${user.id}`}>Edit</Link> */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate.push(`/edituser/${user.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteDisaster(user.id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;