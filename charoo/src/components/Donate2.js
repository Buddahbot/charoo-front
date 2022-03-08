import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DonateContext } from '../context/DonateContext';
import { DonationContext } from '../context/DonationContext';
import jwt_decode from "jwt-decode";
import BG from '../Img/white.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'
import '../stylesheets/Event.css'
import Moment from 'moment';
import ImgEvent from '../Img/group2.jpg'
import CountDown from './CountDown';

const Donate2 = () => {
    const [data, setData] = useContext(DonateContext)
    const [donation, setDonation] = useContext(DonationContext)
    const [amount, setAmount] = useState()

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
        console.log(decoded)
        setUserId({
            id: decoded.user._id,
            firstName: decoded.user.firstName,
        })
    }

    const changeTimeFormat = (date) => {
        return Moment(date).format('DD.MM.YYYY, h:mm a')
    }

    const tempEvent = data.data.find(e => { //take event id from params and find particular event
        return e._id === id;
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

    return (
        // <div><h1>Donating Monster {userId.firstName} </h1>

        //   <p><img src={tempEvent.imageUrl} style={{ width: "300px" }}></img></p>
        //   <h1>Challenge Title: {tempEvent.eventTitle}</h1>
        //   <h1>Start: {tempEvent.dateCreated}</h1>
        //   <h1>Description: {tempEvent.description}</h1>

        //   <form onSubmit={handleSubmit} >
        //   <input value={amount} placeholder='Amount you donate' type='number' onChange={(e) => setAmount(e.target.value)} />
        //   <button type='submit'>Donate Now</button>
        //   </form>

        //   <h1>Donation Goal: {tempEvent.monetaryGoal}</h1>
        //   <h1>For Charity: {tempEvent.charity}</h1>
        //   <h3>Challenge ID: {tempEvent._id}</h3>

        //   <h3> Creater Name: {tempEvent.user.firstName}</h3>
        //   <h3> Creater ID: {tempEvent.user._id}</h3>
        //   </div>

        <div className='container-event' style={{ backgroundImage: `url(${BG})` }} >

            <div className='d-flex text-center  justify-content-center  '>
                <div className='img-event ' style={{ backgroundImage: `url(${tempEvent.imageUrl})` }}> <div className='title-event w-100'>
                    <h1>{tempEvent.eventTitle}</h1> </div>
                </div>
            </div>
            <div className='CreateChallengeContainer w-100'>

                <div className='whiteboard form-challenge' >

                    <div class="row  justify-content-center  ">
                        <div class=" col-md-6 col-lg-8">

                            <form class="signin-form" onSubmit={handleSubmit}>

                                <div class="form-group ">

                                    <h5> It starts:  </h5>
                                    <h3 className='font-weight-bold m-4' style={{ color: 'green' }}><CountDown /></h3>

                                    <div className='event-details text-center  justify-content-center  '>

                                        <h4 className='d-flex flex-row align-items-center'>
                                            <i class="fa fa-clock-o mr-4 py-3 justify-content-center"></i>
                                            <h4 className=''>  {changeTimeFormat(tempEvent.start)}
                                            </h4> </h4>


                                        <h4 className='item-preview'>|</h4>


                                        <h4 className='d-flex flex-row align-items-center'>
                                            <i class="fa fa-map-marker  py-3 mr-4"></i>
                                            <h4>{tempEvent.country}</h4>
                                        </h4>

                                    </div>


                                    <div className='event-info '>
                                        <h4 className=' d-flex text-center mt-5 '>
                                            {tempEvent.description}
                                        </h4>
                                    </div>

                                    <div className='event-details text-center mt-5 '>
                                        <h4 className='item-preview'>
                                            <i class="fa fa-user py-3 mb-3"></i>
                                            <h4>{tempEvent.user.firstName}</h4>
                                        </h4>
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
                                            <h4>DONATION GOAL {tempEvent.monetaryGoal}€</h4>
                                        </h4>
                                    </div>

                                    <div class="input-group mb-3" >

                                        <input value={amount} type="number" class="form-control  fs-3 inputbg-home" placeholder="Donate" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setAmount(e.target.value)} required />
                                        <div class="input-group-append">
                                            <button class="form-control btn btnSign submit fs-3" type="submit">Donate</button>
                                        </div>

                                    </div>
                                </div>

                                <div class="form-group d-flex ">
                                    <button onClick={goBack} class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </div>


    )
}




export default Donate2