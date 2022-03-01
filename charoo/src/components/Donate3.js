import {useContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { DonationToPaymentContext } from '../context/DonationToPaymentContext';
import { donationUpload } from '../logic/UserFunctions';

import jwt_decode from "jwt-decode";

const Donate3 = () => {
    const [donationToPayment, setDonationToPayment] = useContext(DonationToPaymentContext)
    const [checkedOne, setCheckedOne] = useState(false);
    const [userId, setUserId] = useState({
        id : "",
    })

    let navigate = useNavigate()
    
   

    useEffect(() => {
    getUserId()
    }, [])
    
    const getUserId = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        console.log(decoded)
        setUserId({
        id : decoded.user._id
        })
    }
    const handleChangeOne = () => {
        setCheckedOne(true);
    }

    const createDonation = (e) => {
            e.preventDefault()

        const newDonation = {
                    eventTitle: donationToPayment.eventTitle,
                    createdBy: donationToPayment.createdBy,
                    donations: {
                        donatedBy: userId,
                        amount: donationToPayment.donationAmount,
                        //paymentMethod : 
                        comments: checkedOne,
            }
        }
        console.log(newDonation)

        donationUpload(newDonation)
        //navigate('./DonationThanks')
    }
console.log(donationToPayment.createdBy)
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