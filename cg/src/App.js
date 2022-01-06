import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cafeteria from "./components/Cafeteria";
import Calendar from "./components/Calendar";
import Reserve from "./components/Reserve";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cafeteria" element={<Cafeteria />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;
