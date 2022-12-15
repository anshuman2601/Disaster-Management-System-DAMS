import "./App.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Donor from "./Pages/Donor";
import Recipient from "./Pages/Recipient";
import Disaster from "./Pages/Disaster";
import Items from "./Pages/Items";
import Request from "./Pages/Request";
import Response from "./Pages/Response";
import Pledge from "./Pages/Pledge";
import CreatePledge from "Pages/CreatePledge";
import Registration from "./Pages/Registration";
import Verification from "./Pages/Verification";
import Login from "./Pages/Login";
import CreateDisaster from "./Pages/CreateDisaster";
import EditDisaster from "./Pages/EditDisaster";
import CreateItem from "./Pages/CreateItem";
// import EditItem from "./Pages/EditItem";
import CreateRequest from "./Pages/CreateRequest";
import EditRequest from "./Pages/EditRequest";
import CreateResponse from "./Pages/CreateResponse";
import EditResponse from "./Pages/EditResponse";
import Map from "./Pages/Map";
import ViewItemsRequests from "./Pages/ViewItemsRequests"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/recipient" element={<Recipient />} />
          <Route path="/disaster/" element={<Disaster />} />
          <Route path="/items" element={<Items />} />
          <Route path="/request" element={<Request />} />
          <Route path="/response" element={<Response />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/createpledge" element={<CreatePledge />} />
          <Route path="/createdisaster" element={<CreateDisaster />} />
          <Route path="/createitem" element={<CreateItem />} />
          <Route path="/createrequest" element={<CreateRequest />} />
          <Route path="/createresponse" element={<CreateResponse />} />
          <Route path="/viewrequestitems/:id" element={<ViewItemsRequests />} />
          <Route path="/editdisaster/:id" element={<EditDisaster />} />
          <Route path="/editrequest" element={<EditRequest />} />
          <Route path="/editresponse" element={<EditResponse />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
