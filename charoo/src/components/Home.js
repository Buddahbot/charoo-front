import React, { useState } from 'react'
import { register } from '../logic/UserFunctions'
import { NavLink, useNavigate } from 'react-router-dom'
import BG from '../Img/000.jpg'
// import BG from '../Img/child-jogging.jpg'
import '../stylesheets/Home.css'
import Carousel from './Carousel'
import '../stylesheets/App.css'
import Donate from '../Img/w.png'
import Sport from '../Img/r.jpg'
import Header from './Header'

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



    return (
        <div className="home-container">

            <div class="header pb-5 img " style={{ backgroundImage: `url(${BG})`, height: '87vh', paddingLeft: '60px' }}>
                <div class="ftco-section pb-5">
                    <div className="">
                        <div class=" row ">
                            <div class="col-md-6  col-lg-4">
                                <div class=" login-wrap  ">

                                    <div class=" justify-content-center text-center mb-5">
                                        <h2 style={{ fontSize: '4vh', borderRadius: '40px', padding: '5%' }} class="  heading-section-home mt-5 headerTitle hover14 ">Challenge Your Heart <br></br>For Charity!</h2>
                                    </div>
                                    <form class="signin-form" noValidate onSubmit={createUser}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control  fs-3 inputbg-home"
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
                                                className="form-control  fs-3 inputbg-home"
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
                                                className="form-control  fs-3 inputbg-home"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input name="password" id="password" type="password" class="form-control inputbg-home fs-3 " placeholder="Password" required aria-label="password" aria-describedby="basic-addon1" value={password}
                                                onChange={(e) => setPassword(e.target.value)} />

                                            <span style={{ color: 'rgb(24, 22, 22)' }} class=" field-icon " onClick={password_show_hide}>
                                                <i class="fa fs-2 fa-eye" id="show_eye"></i>
                                                <i class="fa fs-2 fa-eye-slash d-none" id="hide_eye"></i>
                                            </span>
                                        </div>

                                        <div class="form-group ">
                                            <button
                                                type="submit"
                                                className="form-control btn btnSign submit fs-3 "
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
                </div>
            </div>

            <div className='what-to-do' >
                <h2 className='text-center'>What would you like to do ? </h2>
                <div className='what-to-do-imgs justify-content-center'>

                    <NavLink style={{ textDecoration: 'none' }} to='/donate'>
                        <div className=' what-imgs' style={{ backgroundImage: `url(${Donate})` }}> <div className='carousel-text'> <h1 className=''>Donate</h1> </div>
                        </div>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/up1'>
                        <div className=' what-imgs' style={{ backgroundImage: `url(${Sport})` }}> <div className='carousel-text'> <h1 className=''>Create challenge</h1> </div>
                        </div>
                    </NavLink>


                </div>

            </div>
            <div className='events'>
                <h2 className='text-center' >Current & Ended Events:</h2>
                <Carousel />
            </div>

        </div >
    )
}

export default Landing
