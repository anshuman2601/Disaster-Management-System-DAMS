import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Disaster from "./Pages/Disaster";
import Items from "./Pages/Items";
import Request from "./Pages/Request";
import Response from "./Pages/Response";
import Registration from "./Pages/Registration";
import Verification from "./Pages/Verification";
import Login from "./Pages/Login";
import CreateDisaster from "./Pages/CreateDisaster";
import EditDisaster from "./Pages/EditDisaster";
import CreateItem from "./Pages/CreateItem";
// import EditItem from "./Pages/EditItem";
// import CreateRequest from "./Pages/CreateRequest";
// import EditRequest from "./Pages/EditRequest";
// import CreateResponse from "./Pages/CreateResponse";
// import EditResponse from "./Pages/EditResponse";

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
          <Route path="/disaster/" element={<Disaster />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createdisaster" element={<CreateDisaster />} />
          <Route path="/editdisaster" element={<EditDisaster />} />
          <Route path="/createitem" element={<CreateItem />} />
          <Route path="/items" element={<Items />} />
          <Route path="/request" element={<Request />} />
          <Route path="/response" element={<Response />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
