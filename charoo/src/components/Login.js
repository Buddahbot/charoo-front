import React from 'react'
import BG from '../Img/4.jpg'
import '../stylesheets/login.css'
import '../stylesheets/App.css'
import { useState } from 'react'
import { login } from '../logic/UserFunctions'
import { useNavigate } from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const testLogin = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }


        login(user).then(res => {
            if (res) {
                navigate('/profile')
            }
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

    return (
        <div><body class="img fullheight " style={{ backgroundImage: `url(${BG})` }}>
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">
                            <h2 class="heading-section hover14">Welcome to Charoo!</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="login-wrap p-0">
                                {/* <h3 class="mb-4 text-center">Have an account?</h3> */}

                                <form noValidate onSubmit={testLogin} class="signin-form">
                                    <div class="form-group">
                                        <input type="email" class="form-control text-white fs-3 inputbg" placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    <div class="form-group">

                                        <input name="password" id="password" type="password" class="form-control inputbg text-white fs-3 " placeholder="Password" required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            aria-label="password" aria-describedby="basic-addon1" />

                                        <span class=" field-icon " onClick={password_show_hide}>
                                            <i class="fa fs-2 fa-eye" id="show_eye"></i>
                                            <i class="fa fs-2 fa-eye-slash d-none" id="hide_eye"></i>
                                        </span>

                                    </div>

                                    <div class="form-group ">
                                        <button type="submit" class="form-control btn btnSign submit fs-3 ">LOG IN</button>
                                    </div>
                                    <div class="form-group d-md-flex">
                                        <div class="w-50">
                                            <label class="checkbox-wrap checkbox-primary">Remember Me
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="w-50 text-md-right">
                                            <a href="#" style={{ color: '#fff', fontSize: '16px', textDecoration: 'none' }}>Forgot Password</a>
                                        </div>
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

        </body></div>
    )
}
