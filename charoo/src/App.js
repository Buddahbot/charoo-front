import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from './components/Home'
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import HomeTest from "./components/HomeTest";
import './stylesheets/App.css'


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login2 />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
