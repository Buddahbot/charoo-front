import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DonationContext } from '../context/DonationContext';
import { donationUpload } from '../logic/UserFunctions';
import BG from '../Img/white.jpg'
import BG3 from '../Img/pp.png'
import BG2 from '../Img/wc.png'
import jwt_decode from "jwt-decode";

const Donate3 = () => {
    const [donation, setDonation] = useContext(DonationContext)
    const [checkedOne, setCheckedOne] = useState(false);

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
        //navigate('./DonationThanks')
    }

    return (
        <div>
            <div style={{
                width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
                backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
            }}>

                <div class="CreateChallengeContainer " style={{ paddingBottom: '40px' }} >


                    <div className='whiteboard form-challenge howItWorks mt-5 ' >
                        <div class=" d-flex flex-column  justify-content-center  ">


                            <div className='col-9 ' style={{ fontSize: '14px', marginLeft: '10%' }}>

                                <h2 className='mb-5 text-center'>Please choose a payment method: </h2>

                                {/* <h3> I like my donation and First Name, Surname  <br></br> to be seen on the Ethereum blockchain so I inspire others to donate as well.
                (if this box is unchecked, then your name will not be viewable by others).</h3>
            <input type="checkbox"
                id="Value 1"
                name
                value={checkedOne}
                onChange={handleChangeOne}
            /> */}
                                <div className='d-flex flex-row'>



                                    <div tabindex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG3})` }} >
                                    </div>

                                    <div tabindex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG2})` }} >
                                    </div>


                                    <button onClick={createDonation}>DONATE NOW</button> </div>
                            </div> </div> </div> </div> </div> </div>

    )
}

export default Donate3