import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DonationContext } from '../context/DonationContext';
import { donationUpload } from '../logic/UserFunctions';
import BG from '../Img/white.jpg'
import BG3 from '../Img/pp.png'
import BG2 from '../Img/mm.png'
import jwt_decode from "jwt-decode";
import '../stylesheets/Carousel.css'
import '../stylesheets/Challenge.css'

const Donate3 = () => {
    const [donation, setDonation] = useContext(DonationContext)
    const [checkedOne, setCheckedOne] = useState(false);


    let navigate = useNavigate();


    const handleChangeOne = () => {
        setCheckedOne(true);
    }
    console.log(typeof donation.amount)

    const createDonation = (e) => {
        e.preventDefault()

        const newDonation = {
            eventTitle: donation.eventTitle,
            createdBy: donation.createdBy,
            donatedBy: donation.donatedBy,
            amount: donation.amount,
            comments: checkedOne,
        }
        console.log(newDonation)

        donationUpload(newDonation)
        navigate('./donate4')
    }

    return (
        <div>
            <div style={{
                width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
                backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
            }}>

                <div class="CreateChallengeContainer " style={{ paddingBottom: '40px' }} >


                    <div className='whiteboard d-flex justify-content-center form-challenge howItWorks mt-5 ' >
                        <div class=" d-flex flex-column w-100 justify-content-center  ">


                            <div className=' ' style={{ fontSize: '14px', width: '100%' }}>

                                <h2 className='mb-5 text-center'>Please choose a payment method: </h2>

                                {/* <h3> I like my donation and First Name, Surname  <br></br> to be seen on the Ethereum blockchain so I inspire others to donate as well.
                (if this box is unchecked, then your name will not be viewable by others).</h3>
            <input type="checkbox"
                id="Value 1"
                name
                value={checkedOne}
                onChange={handleChangeOne}
            /> */}
                                <div className='d-flex flex-row justify-content-center'>

                                    <div tabindex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG3})`, width: '300px', marginTop: '30px', marginBottom: '60px', height: '220px' }} >
                                    </div>

                                    <div tabindex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG2})`, width: '300px', marginTop: '30px', marginBottom: '60px', height: '220px' }} >
                                    </div>
                                </div>
                                <div className='d-flex  justify-content-center'>
                                    <button style={{ width: '300px' }} className="form-control btn btnSign submit fs-3 " onClick={createDonation}>DONATE NOW</button>
                                </div>

                            </div> </div> </div> </div> </div> </div >

    )
}

export default Donate3