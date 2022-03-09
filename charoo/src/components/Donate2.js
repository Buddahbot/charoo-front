import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DonateContext } from '../context/DonateContext';
import { DonationContext } from '../context/DonationContext';
import { ProfileContext } from "../context/ProfileContext";
import jwt_decode from "jwt-decode";
import BG from '../Img/white.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'
import '../stylesheets/Event.css'
import Moment from 'moment';
import ImgEvent from '../Img/group2.jpg'
import CountDownDonate from './CountDownDonate';
import Share from './Share'

const Donate2 = () => {
    const [data, setData] = useContext(DonateContext)
    const [donation, setDonation] = useContext(DonationContext)
    const [donna, setDonna] = useContext(ProfileContext)
    const [cherry, setCherry] = useState([])
    const [amount, setAmount] = useState()
    const [grape, setGrape] = useState(true)
    const { id } = useParams();
    let navigate = useNavigate();


    const [userId, setUserId] = useState({      // ID of DONATION MONSTER 
        id: "",
        firstName: ""
    })

    useEffect(() => {
        getUserId()
    }, [])

    const getUserId = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        // console.log(decoded)
        setUserId({
            id: decoded.user._id,
            firstName: decoded.user.firstName,
        })
    }

    const changeTimeFormat = (date) => {
        return Moment(date).format('DD.MM.YYYY, h:mm a')
    }

    const tempEvent = data.data.find(e => { // save event in variable
        return e._id === id; // e._id are all events. id is the event id from params
    });


    const handleSubmit = (e) => {
        e.preventDefault()

        setDonation({
            eventTitle: tempEvent.eventTitle,
            eventId: tempEvent._id,
            createdBy: tempEvent.user._id,
            donatedBy: userId.id,
            amount: amount,
        })
        navigate('/donate3')
    }
    console.log(tempEvent._id)
    const goBack = () => {
        navigate(-1);
    }

    // countdown:
    let state = {
        value: '',
        copied: false,
    };


    let banana = donna.data.map((e) => {
        if (e.eventId === tempEvent._id && { amount: e.amount }) {
            return ({ amount: e.amount })
        }
        else return ({ amount: 0 })
    })

    // let banana = donna.data.map((e) => {
    //     if (e.eventId === tempEvent._id && { amount: e.amount })
    //         return ({ amount: e.amount })
    //     else ({amount: 0} )
    // }) 
    const sumall = banana.map(e => e.amount).reduce((prev, curr) => prev + curr, 0);
    console.log(sumall);


    return (
        <div className='container-event' style={{ backgroundImage: `url(${BG})` }} >

            <div style={{ paddingBottom: '100px' }} className='CreateChallengeContainer w-100'>

                <div style={{ padding: '0px', margin: '50px' }} className='whiteboard form-challenge' >

                    <div style={{ paddingTop: '0px' }} className='d-flex text-center  justify-content-center  '>
                        <div className='img-event ' style={{ backgroundImage: `url(${tempEvent.imageUrl})` }}>
                        </div>
                    </div>

                    <div class="row  justify-content-center  ">
                        <div class=" col-md-6 col-lg-8">

                            <form class="signin-form" onSubmit={handleSubmit}>

                                <div class="form-group event-page ">

                                    <div className='d-flex flex-column  align-items-center  w-100'>

                                        <div className='countDown d-flex align-items-center  justify-content-center text-center'>
                                            <CountDownDonate />
                                        </div>
                                    </div>

                                    <div style={{ color: '#212121', margin: '60px' }} className='heading-section-2 '>
                                        <h1 style={{ fontSize: '42px' }} className='text-center'>{tempEvent.eventTitle}</h1>
                                    </div>


                                    <h4 className='text-center font-weight-bold ' style={{ marginTop: '-55px', marginBottom: '50px' }}> <span style={{ color: '#df9413' }}>Created by </span>
                                        <span style={{ fontSize: '18px', padding: '4px' }}>{tempEvent.user.firstName}
                                        </span> </h4>


                                    <div className='d-flex text-center  justify-content-center  '>


                                        <h4 className='d-flex flex-row align-items-center'>
                                            <i class="fa fa-clock-o mr-4 py-3 justify-content-center"></i>
                                            <h4 className=''>  {changeTimeFormat(tempEvent.start)}
                                            </h4> </h4>


                                        <h4 style={{ padding: '10px', width: '70px' }}>|</h4>


                                        <h4 className='d-flex flex-row align-items-center'>
                                            <i class="fa fa-map-marker  py-3 mr-4"></i>
                                            <h4>{tempEvent.country}</h4>
                                        </h4>

                                    </div>


                                    <div style={{ marginBottom: '30px', marginTop: '40px' }} className='text-center '>
                                        <h4 className=' '> {tempEvent.description}
                                        </h4>
                                    </div>

                                    <div className=' d-flex justify-content-center'>

                                        <div className='d-flex  text-center mt-5 '>

                                            <h4 className='item-preview'>
                                                <i class="fa fa-trophy py-3 mb-3 "></i>
                                                <h4>{tempEvent.sportstype}</h4> </h4>
                                            <h4 className='item-preview'>
                                                <i class="fa fa-road py-3 mb-3"></i>
                                                <h4>{tempEvent.distance} Km</h4> </h4>

                                            <h4 className='item-preview'>
                                                <i class="fa fa-group py-3 mb-3 "></i>
                                                <h4>{tempEvent.charity}</h4> </h4>
                                            <h4 className='item-preview'>
                                                <i class="fa fa-crosshairs py-3 mb-3"></i>
                                                <h4>Donations Goal: {tempEvent.monetaryGoal} €</h4>
                                            </h4>
                                        </div> </div>

                                    <div style={{ marginTop: '40px', marginBottom: '70px' }} className='collected-donation  events-list '>

                                        <h4 class="card-title text-center m-5"><i style={{ fontSize: '50px' }} class="fa fa-heart"></i></h4>

                                        <h4 style={{ fontSize: '22px' }}>Collected: {sumall} of {tempEvent.monetaryGoal}€</h4>
                                    </div>

                                    <div style={{ marginTop: '100px', marginBottom: '100px' }} >
                                        <h4 style={{ margin: '30px', fontSize: '20px' }} className='text-center font-weight-bold'> Share the challenge with your friends now:</h4>
                                        <Share />
                                    </div>

                                    <div class="input-group mb-5" >

                                        <input
                                            // style={{ width: '50%' }}
                                            value={amount} type="number" class="form-control  fs-3 input-event" placeholder="Donate in Euro" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setAmount(e.target.value)} required />

                                        <div style={{ marginBottom: '50px', width: '30%' }}
                                            class="input-group-append">
                                            <button class="form-control btn btnSign submit fs-3" type="submit">Donate</button>
                                        </div>

                                    </div>
                                </div>

                                <div style={{ marginBottom: '100px' }} class="form-group d-flex justify-content-center ">
                                    <button style={{ width: '50%' }} onClick={goBack} class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >


    )
}




export default Donate2