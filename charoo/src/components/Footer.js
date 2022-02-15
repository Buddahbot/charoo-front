import React from 'react'
import "../stylesheets/Footer.css"
import { Link } from 'react-router-dom';
import Logo from '../Img/Logo2.png'

export default function Footer() {
    return (
        <div>
            <div class="footer-basic">
                <footer>
                    <div className='logo'>
                        <img src={Logo} height='190px' alt='Logo' />
                    </div>


                    <div class="social">
                        <a href="#">
                            <i class="icon ion-social-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="icon ion-social-snapchat"></i></a><a href="#">
                            <i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i>
                        </a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><Link to="/">Home</Link></li>
                        <li class="list-inline-item"><Link to="/about">About Us</Link></li>
                        <li class="list-inline-item"><Link to="" style={{ cursor: 'default' }}>Challenge</Link></li>
                        <li class="list-inline-item"><Link to="" style={{ cursor: 'default' }}>Donate</Link></li>
                        <li class="list-inline-item"><Link to="" style={{ cursor: 'default' }}>Privacy Policy</Link></li>
                        {/* <li class="list-inline-item"><Link to="" style={{ cursor: 'default' }}>Contact</Link></li> */}
                    </ul>
                    <p class="copyright">Charoo © 2022</p>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

        </div>
    )
}
