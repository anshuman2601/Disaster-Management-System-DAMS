import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Disaster from "./Pages/Disaster";
import Verification from "./Pages/Verification";
import CreateDisaster from "./Pages/CreateDisaster";
import EditDisaster from "./Pages/EditDisaster";

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
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
