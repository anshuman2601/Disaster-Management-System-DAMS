/**
=========================================================
* Disaster Response App
=========================================================
*/

import { useState, useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;