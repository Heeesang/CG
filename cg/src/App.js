import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cafeteria from "./components/Cafeteria";
import Calendar from "./components/Calendar";
import Schedule from "./components/Schedule";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cafeteria" element={<Cafeteria />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
