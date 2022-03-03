import React from 'react'
import Share from './Share'
import BG from '../Img/nature.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import CountDown from './CountDown';
import '../stylesheets/App.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

// import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";
// import FaFacebook from "react-icons/lib/fa/facebook";
// import { ShareButton } from "react-custom-share";


export default function Up5() {

    let link = 'https://discord.com/channels/641221910146842644/907894478885507082'

    let state = {
        value: '',
        copied: false,
    };

    return (

        <div className='CreateChallengeContainer' style={{ backgroundImage: `url(${BG})` }}>
            <div class=" justify-content-center text-center ">
                <h2 class="heading-section title-create-challenge">CONGRATULATIONS!</h2>
            </div>
            <div className='whiteboard form-challenge' >
                <div class=" d-flex flex-column text-center justify-content-center  ">

                    <h1 className='m-5 font-weight-bold'>Your challenge has been created! </h1>

                    <h5> It starts:  </h5>
                    <h3 className='font-weight-bold m-4' style={{ color: 'green' }}><CountDown /></h3>

                    <h5> Share the link now with your friends:</h5>
                    <div className='d-flex flex-row align-items-center text-center justify-content-center'>
                        <h5 className='font-weight-bold'>{link}</h5>

                        <CopyToClipboard text={link}>
                            <button className='btn-light btn' style={{ width: '40px', height: '30px' }}>Copy</button>
                        </CopyToClipboard>
                    </div>

                    <h5>or just click on the one of the icons:</h5>

                    <h5 >  <Share /></h5>

                    <div className='w-100 d-flex flex-row text-center justify-content-center pt-5 '>
                        <div style={{ width: '60%' }} class="form-group d-flex ">

                            <button
                                className="form-control btn-light btn btnSign-back submit fs-4 ">
                                <a style={{ textDecoration: 'none', color: 'black' }} href='/profile'>BACK TO MY PROFILE</a>
                            </button>

                            <button
                                className="form-control btn-new-challenge btn fs-4"> <a style={{ textDecoration: 'none', color: 'white' }} href='/up1'>CREATE NEW CHALLENGE</a></button>
                        </div>
                    </div>

                </div>
            </div >
        </div >


    )
}