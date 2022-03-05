import React from 'react'
import Logo2 from '../Img/logo4.png'
import '../stylesheets/Navbar.css'

export default function Navbar2() {


    return (
        <div>
            <nav class="navbar navbar-light navbar-expand-md navigation-clean shadow-lg rounded ">

                <a style={{ zIndex: '2000', marginLeft: '15px' }} class="navbar-brand position-absolute" href="/"><img src={Logo2} height='45px' alt='Logo' /></a>
                <div class="container" style={{ justifyContent: " flex-end" }}>

                    <div id="navcol-2" class="navbar-toggler hidden-navbar">
                        <ul class="navbar-nav burger ms-auto ml-5 ">
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle nav-link"
                                    id="dropdownMenu2"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-toggle="dropdown"
                                    href="#">
                                    <i class="fa fa-bars fs-3 text-dark"></i>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <a class="dropdown-item" href="/profile">My account</a>
                                    <a class="dropdown-item" href="/login">Login</a>
                                    <a class="dropdown-item" href="/register">Join</a>
                                    <a class="dropdown-item" href="/about">About Us</a>
                                    <a class="dropdown-item" href="/howitworks">How It Works</a>

                                </div>
                            </li>
                        </ul>
                    </div>



                    <div id="navcol-2" class="collapse navbar-collapse 	">
                        <ul class="navbar-nav left">
                            <li id="navbar-item" class="nav-item"><div id="underline"></div><a class="nav-link" href="about">About Us</a></li>
                            <li id="navbar-item" class="nav-item"><div id="underline"></div><a class="nav-link" href="howItWorks">How It Works</a></li>
                        </ul> </div>
                    <div id="navcol-2" style={{ justifyContent: "flex-end", marginLeft: '30%' }} class="collapse navbar-collapse">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a style={{ paddingLeft: '3px', paddingRight: '15px' }} class="nav-link" href="profile"><i class="fa fa-user-o fs-3 ms-auto"></i></a></li>
                            <li id="navbar-item" class="nav-item"><div id="underline"></div><a style={{ paddingLeft: '0px', paddingRight: '7px' }} class="nav-link " href="login">Login</a></li>
                            <li id="navbar-item" class="nav-item"><div id="underline"></div><a style={{ paddingLeft: '0px', paddingRight: '7px' }} class="nav-link" href="#">|</a></li>
                            <li id="navbar-item" class="nav-item"><div id="underline"></div><a style={{ paddingLeft: '0px', paddingRight: '0px' }} class="nav-link" href="register">Join</a></li>
                        </ul> </div>
                    <div style={{ width: '10px' }} id="navcol-2" class="collapse navbar-collapse">
                        <ul class="navbar-nav burger ms-auto">
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle nav-link"
                                    id="dropdownMenu2"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    data-toggle="dropdown"
                                    href="#">
                                    <i class="fa fa-bars fs-3 text-dark"></i>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <a class="dropdown-item" href="/profile">My account</a>
                                    <a class="dropdown-item" href="/donate">Donate</a>
                                    <a class="dropdown-item" href="/up1">Create Challange</a>
                                    <a class="dropdown-item" href="#">Challenges</a>
                                    <a class="dropdown-item" href="#">Partnerships</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
