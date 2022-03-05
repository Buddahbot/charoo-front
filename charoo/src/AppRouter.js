import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
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
import Up5 from "./components/Up5"
import Donate from "./components/Donate";
import Donate2 from "./components/Donate2";
import Donate3 from "./components/Donate3";
import EventPage from "./components/EventPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/howItWorks" element={<HowItWorks />} />
        <Route exact path="/up1" element={<Up1 />} />
        <Route exact path="/up2" element={<Up2 />} />
        <Route exact path="/up3" element={<Up3 />} />
        <Route exact path="/up4" element={<Up4 />} />
        <Route exact path="/up5" element={<Up5 />} />
        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/donate2/:id" element={<Donate2 />} />
        <Route exact path="/donate3" element={<Donate3 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;