import React, { useState } from "react";
// import "../index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import MainNav from "./components/Navbar";
import Schedule from "./components/pages/Schedule";
import Sidebar from "./components/Sidebar";
import Service from "./components/pages/Service";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <MainNav />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-2 mt-2">
          <Routes>
            <Route path="/schedules" element={<Schedule />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
