import React from 'react'
import Logo2 from '../Img/logo4.png'
import '../stylesheets/Navbar2.css'

export default function Navbar2() {
    return (
        <div>
            <nav class="navbar navbar-light navbar-expand-md navigation-clean">
                <div class="container">
                    <a class="navbar-brand" href="/"><img src={Logo2} height='45px' alt='Logo' /></a>

                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>

                    <div id="navcol-2" class="collapse navbar-collapse  ">
                        <ul class="navbar-nav left ms-auto">
                            <li class="nav-item"><a class="nav-link " href="about">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="howItWorks">How It Works</a></li>
                        </ul> </div>
                    <div id="navcol-2" class="collapse navbar-collapse">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="profile"><i class="fa fa-user-o fs-3 ms-auto"></i></a></li>
                            <li class="nav-item"><a class="nav-link " href="login">Login</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">|</a></li>
                            <li class="nav-item"><a class="nav-link" href="register">Join</a></li>
                        </ul> </div>
                    <div id="navcol-2" class="collapse navbar-collapse">
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
                                    <a class="dropdown-item" href="#">My account</a>
                                    <a class="dropdown-item" href="#">Donate</a>
                                    <a class="dropdown-item" href="#">Create Challange</a>
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