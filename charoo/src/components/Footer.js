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
                            <h3>Explore Challenges</h3>
                            <ul>
                             
                                <li><a href="#">Explore Charities</a></li>
                              <li><a href="/donate"></a>Learn</li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Ways To Give</h3>
                            <ul>
                                <li><a href="/about">For Charities</a></li>
                                <li><a href="/about">FAQ</a></li>
                                
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                              
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Privacy Policy</a></li>
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
