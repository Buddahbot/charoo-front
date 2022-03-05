import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
import { eventUpload } from '../logic/UserFunctions';
import BG from '../Img/white.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'
import '../stylesheets/Event.css'
import Moment from 'moment';
import ImgEvent from '../Img/group2.jpg'
import axios from 'axios'

import React from 'react'


export default function EventPage() {

    let navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const changeTimeFormat = (date) => {
        return Moment(date).format('DD.MM.YYYY, h:mm a')
    }


    return (
        <div className='container-event' style={{ backgroundImage: `url(${BG})` }} >

            <div className='d-flex text-center  justify-content-center  '>
                <div className='img-event ' style={{ backgroundImage: `url(${ImgEvent})` }}> <div className='title-event w-100'>
                    <h1>10 km run in berlin</h1> </div>
                </div>
            </div>
            <div className='CreateChallengeContainer w-100'>


                <div className='whiteboard form-challenge' >

                    <div class="row  justify-content-center  ">
                        <div class=" col-md-6 col-lg-8">

                            <form class="signin-form  ">

                                <div class="form-group ">


                                    <div className='event-details text-center  justify-content-center  '>

                                        <h4 className='d-flex flex-row align-items-center'>
                                            <i class="fa fa-clock-o mr-4 py-3 justify-content-center"></i>
                                            <h4 className=''> 12.05.2022, 1:30 p.m
                                            </h4> </h4>


                                        <h4 className='item-preview'>|</h4>


                                        <h4 className='d-flex flex-row align-items-center'>
                                            <i class="fa fa-map-marker  py-3 mr-4"></i>
                                            <h4>Berlin, DE</h4>
                                        </h4>

                                    </div>


                                    <div className='event-info '>
                                        <h4 className=' d-flex text-center mt-5 '>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </h4>
                                    </div>

                                    <div className='event-details text-center mt-5 '>
                                        <h4 className='item-preview'>
                                            <i class="fa fa-user py-3 mb-3"></i>
                                            <h4>Created by Alex</h4>
                                        </h4>
                                        <h4 className='item-preview'>
                                            <i class="fa fa-trophy py-3 mb-3 "></i>
                                            <h4>Run</h4> </h4>
                                        <h4 className='item-preview'>
                                            <i class="fa fa-road py-3 mb-3"></i>
                                            <h4>10 km</h4> </h4>

                                        <h4 className='item-preview'>
                                            <i class="fa fa-group py-3 mb-3 "></i>
                                            <h4>Unic</h4> </h4>
                                        <h4 className='item-preview'>
                                            <i class="fa fa-crosshairs py-3 mb-3"></i>
                                            <h4> 200 Euro</h4>
                                        </h4>
                                    </div>



                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control  fs-3 inputbg-home" placeholder="Donate" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="form-control btn btnSign submit fs-3" type="button">Donate</button>
                                        </div>
                                    </div>







                                </div>

                                <div class="form-group d-flex ">

                                    <button
                                        onClick={goBack}
                                        class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>

                                    <button type="submit" class="form-control btn btnSign submit fs-3 ">Sth</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )

}
