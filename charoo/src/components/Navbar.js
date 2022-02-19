import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../stylesheets/Navbar.css'
import $ from 'jquery';
import Logo2 from '../Img/Charoo.png'



const Navbar = () => {
  let navigate = useNavigate()


  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    navigate(`/`)
  }

  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  )

  const userLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          User
        </Link>
      </li>
      <li className="nav-item">
        <a href="" onClick={logOut} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  )

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
    } else {
      $('.nav').removeClass('affix');
    }
  });

  return (

    // <nav className="navbar navbar-expand-lg bg rounded">
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarsExample10"
    //     aria-controls="navbarsExample10"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>

    //   <div
    //     className="collapse navbar-collapse justify-content-md-center"
    //     id="navbarsExample10"
    //   >
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link to="/" className="nav-link">
    //           Home
    //         </Link>
    //         <Link to="/" className="nav-link">
    //           About Us
    //         </Link>
    //         <Link to="/" className="nav-link">
    //           How It Works
    //         </Link>
    //       </li>
    //     </ul>
    //     {localStorage.usertoken ? userLink : loginRegLink}
    //   </div>
    // </nav>
    <div>
      <nav class="nav">
        <div class="container">
          <div class="logo">
            <a href="#"><img src={Logo2} height='100px' alt='Logo' /></a>
          </div>
          <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

    </div>
  )
}

export default Navbar 