import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Appbar/NavBar";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="spacer-div" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
