import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DonationContext } from '../context/DonationContext';
import { donationUpload } from '../logic/UserFunctions';
import BG from '../Img/co.jpg'
import BG3 from '../Img/pp.png'
import BG2 from '../Img/mm.png'
import jwt_decode from "jwt-decode";
import '../stylesheets/Carousel.css'
import '../stylesheets/Challenge.css'

const Donate4 = () => {
    const [donation, setDonation] = useContext(DonationContext)
    const [checkedOne, setCheckedOne] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(true);
    }
    console.log(typeof donation.amount)

    let navigate = useNavigate();
    const goProfile = (e) => {
        navigate('/profile')
    }

    return (
        <div>
            <div style={{
                width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
                backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px', paddingTop: '100px'
            }}>

                <div class="CreateChallengeContainer  " style={{ paddingBottom: '40px' }} >


                    <div className='whiteboard d-flex justify-content-center form-challenge howItWorks mt-5 ' >
                        <div class=" d-flex flex-column w-100 justify-content-center  ">


                            <div className=' ' style={{ fontSize: '14px', width: '100%' }}>

                                <h2 className='mb-5 text-center fs-1'> Thank you for your donation ! </h2>

                                <div className='d-flex  justify-content-center'>
                                    <button style={{ width: '300px' }} className="form-control btn btnSign submit fs-3 " onClick={goProfile}>My Profile</button>
                                </div>

                            </div> </div> </div> </div> </div> </div >

    )
}

export default Donate4