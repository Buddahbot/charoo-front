import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar2 from "./components/Navbar2";
import Login from "./components/Login";
import LoginOLD from "./components/LoginOLD";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from './components/Home'
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

import Event from "./components/Event"
import Uploload from "./components/Upload"

import HomeTest from "./components/HomeTest";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import './stylesheets/App.css'



const App = () => {
  return (
    <>
      <Navbar2 />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginOLD" element={<LoginOLD />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/upload" element={<Uploload />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/howItWorks" element={<HowItWorks />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
