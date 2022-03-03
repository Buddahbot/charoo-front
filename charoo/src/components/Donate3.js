import {useContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { DonationContext } from '../context/DonationContext';
import { donationUpload } from '../logic/UserFunctions';

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
            <>
            <h3> I like my donation and First Name, Surname  <br></br> to be seen on the Ethereum blockchain so I inspire others to donate as well.
                (if this box is unchecked, then your name will not be viewable by others).</h3>
            <input type="checkbox"
                id="Value 1"
                name
                value={checkedOne}
                onChange={handleChangeOne}
            />
            <h2>Please choose a payment method</h2>
            <h1>Paypal</h1>
            <h1>WalletConnect</h1>
            <button onClick={createDonation}>DONATE NOW</button>
            </>

    )
}

export default Donate3