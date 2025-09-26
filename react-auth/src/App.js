import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token") || "");

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Login setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/profile" element={token ? <Profile /> : <Login setToken={setToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
