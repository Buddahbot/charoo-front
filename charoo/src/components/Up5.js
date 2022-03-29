import React from 'react'
import Share from './Share'
import BG from '../Img/col.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import CountDown from './CountDown';
import '../stylesheets/App.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import jwt_decode from 'jwt-decode';
// import ReactDOM from "react-dom";

const Up5 = props => {
    const [events, setEvents] = useState([])
    const [troy, setTroy] = useState([])
    const [user, setUser] = useState({
        id: "",
    })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getUserInfo()
    }, [])
    // const [loading, setLoading] = useState(true)

    const getUserInfo = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        // console.log(decoded)
        setUser({
            id: decoded.user._id,
        })
        shareEvent()
    }

    const shareEvent = async () => {
        const iD = '621e3781d083ddd88c83ad59'
        const iDnew = user.id
        try {
            await axios.get('https://charoo.herokuapp.com/event')
                .then((res) => {
                    setTroy(res.data.data)
                    setLoading(false)
                    // console.log(res.data.data.filter(event => event.user._id = "621e3781d083ddd88c83ad59"))
                })
        } catch (e) {
            console.log(e)
        }
    }





    const usersFilter = troy.filter(e => e.user._id === user.id)
    // console.log(!loading && usersFilter[0]._id)


    // countdown:
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

                    <h5> It will start in:  </h5>
                    <h3 className='font-weight-bold m-4' style={{ color: 'green' }}><CountDown /></h3>

                    <h5> Share the link now with your friends:</h5>
                    <div className='d-flex flex-row align-items-center text-center justify-content-center'>


                        <h5 className='font-weight-bold'></h5>



                        {!loading && (

                            <div className='align-items-center' style={{ display: 'flex' }}>
                                <h5 >   <a style={{ textDecoration: 'none', color: '#212121', fontWeight: '700' }} href={`http://localhost:3000/donate2/${usersFilter[0]._id}`} target='_blank'> {`https://charoo-front.vercel.app/donate2/${usersFilter[0]._id}`} </a>
                                </h5>

                                <CopyToClipboard text={`https://charoo-front.vercel.app/donate2/${usersFilter[0]._id}`}>
                                    <button className='btn-light btn' style={{ width: '40px', height: '30px' }}>Copy</button>
                                </CopyToClipboard>
                            </div>

                        )}





                    </div>

                    <h5>or just click on one of the icons:</h5>

                    <h5>  <Share /></h5>

                    <div className='w-100 d-flex flex-row text-center justify-content-center pt-5 '>
                        <div style={{ width: '60%' }} class="form-group d-flex ">

                            <button
                                className="form-control btn-light btn btnSign-back submit fs-4 ">
                                <a style={{ textDecoration: 'none', color: 'black' }} href='/profile'>BACK TO MY PROFILE</a>
                            </button>

                            <button
                                className="form-control btn-new-challenge btn fs-4"> <a style={{ textDecoration: 'none', color: 'white' }} href='/up1'>SHOW YOUR CHALLENGE</a></button>
                        </div>
                    </div>

                </div>
            </div >
        </div >

    )

};


export default Up5
