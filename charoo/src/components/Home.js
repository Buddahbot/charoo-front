import React, { useState } from 'react'
import { register } from '../logic/UserFunctions'
import { useNavigate } from 'react-router-dom'
import BG from '../Img/hawaii.jpeg'
// import BG from '../Img/child-jogging.jpg'
import '../stylesheets/Home.css'
import $ from 'jquery'



const Landing = () => {

    // register :
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    let navigate = useNavigate()

    const createUser = (e) => {
        e.preventDefault()

        const newUser = { // creates new object with name,email, password
            firstName: firstName,
            lastName: lastName, // using useStates
            email: email,
            password: password
        }


        register(newUser).then(res => { // calls the register function from UserFunctions.js and passes newUser as argument
            navigate(`/login`) // then navigates to login
        })
    }


    // hide/show password
    function password_show_hide() {
        var x = document.getElementById("password");
        var show_eye = document.getElementById("show_eye");
        var hide_eye = document.getElementById("hide_eye");
        hide_eye.classList.remove("d-none");
        if (x.type === "password") {
            x.type = "text";
            show_eye.style.display = "none";
            hide_eye.style.display = "block";
        } else {
            x.type = "password";
            show_eye.style.display = "block";
            hide_eye.style.display = "none";
        }
    }
    // register ends here

    // carousel:
    var Carousel = require('carousel');
    new Carousel('#slides');
    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    return (
        <div className="home-container">

            <div class="header img fullheight " style={{ backgroundImage: `url(${BG})` }}>
                <section class="ftco-section">
                    <div className="container">
                        <div class=" row ">
                            <div class="col-md-6 col-lg-4">
                                <div class=" login-wrap p-0">

                                    <div class=" col-md-6 text-center mb-5">
                                        <h2 class="heading-section headerTitle hover14">Welcome to Charoo!</h2>
                                    </div>
                                    <form class="signin-form" noValidate onSubmit={createUser}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control text-white fs-3 inputbg"
                                                name="first_name"
                                                placeholder="Firstname"
                                                value={firstName}
                                                required
                                                onChange={(e) => setfirstName(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control text-white fs-3 inputbg"
                                                name="last_name"
                                                placeholder="Lastname"
                                                value={lastName}
                                                required
                                                onChange={(e) => setlastName(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control text-white fs-3 inputbg"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input name="password" id="password" type="password" class="form-control inputbg text-white fs-3 " placeholder="Password" required aria-label="password" aria-describedby="basic-addon1" value={password}
                                                onChange={(e) => setPassword(e.target.value)} />

                                            <span class=" field-icon " onClick={password_show_hide}>
                                                <i class="fa fs-2 fa-eye" id="show_eye"></i>
                                                <i class="fa fs-2 fa-eye-slash d-none" id="hide_eye"></i>
                                            </span>
                                        </div>

                                        <div class="form-group ">
                                            <button
                                                type="submit"
                                                className="form-control btn btnSign submit fs-3"
                                            >JOIN
                                            </button>
                                        </div>
                                    </form>
                                    <p class="text-center signWith">&mdash; Or Sign In With &mdash;</p>

                                    <div class="social d-flex text-center">
                                        <a href="#" class="px-2 py-2 mr-md-1 nodec "><span class=" mr-2"></span> Facebook</a>
                                        <a href="#" class="px-2 py-2 ml-md-1 nodec"><span class=" mr-2"></span> Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container">

                <div class="carousel">
                    <div class="col-md-12">
                        <div class="carousel slide multi-item-carousel" id="theCarousel">
                            <div class="carousel-inner">
                                <div class="item active">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia" class="img-responsive" /></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?fremantle,australia" class="img-responsive" /></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?west-australia" class="img-responsive" /></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth" class="img-responsive" /></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?quokka,perth" class="img-responsive" /></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?margaretriver,australia" class="img-responsive" /></a></div>
                                </div>
                                {/* <!-- add  more items here -->
                                <!-- Example item start:  --> */}

                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img src="https://source.unsplash.com/300x300/?perth,australia&r=7" class="img-responsive" /></a></div>
                                </div>

                                {/* <!--  Example item end --> */}
                            </div>
                            <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                            <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Landing