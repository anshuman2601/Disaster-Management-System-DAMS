import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"


function App() {
  return (
    <div className="App"> <h1>Disaster Management System</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
