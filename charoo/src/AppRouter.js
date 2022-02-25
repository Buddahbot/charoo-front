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
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Up1 from "./components/Up1";
import Up2 from "./components/Up2";
import Up3 from "./components/Up3"
import Up4 from "./components/Up4"
import Donate from "./components/Donate";
import Donate2 from "./components/Donate2";

const AppRouter = () => {
  return (
    <>
      <Navbar2 />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginOLD" element={<LoginOLD />} /> 
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/howItWorks" element={<HowItWorks />} />
        <Route exact path="/up1" element={<Up1 />} />
        <Route exact path="/up2" element={<Up2 />} />
        <Route exact path="/up3" element={<Up3 />} />
        <Route exact path="/up4" element={<Up4 />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/donate2" element={<Donate2/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;