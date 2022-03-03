import React from 'react'
import "../stylesheets/Footer.css"
import { Link } from 'react-router-dom';
import Logo from '../Img/Logo2.png'

export default function Footer() {
    return (
        <div>

            <footer class="footer-clean">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/donate">Donate</a></li>
                                <li><a href="#">Challenges</a></li>
                                <li><a href="#">Partnerships</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>About Us</h3>
                            <ul>
                                <li><a href="/about">Company</a></li>
                                <li><a href="/about">Team</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                            <p class="copyright">Charoo! © 2022</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
