import { useState, createContext } from "react";


export const DonationToPaymentContext = createContext();

export const DonationToPaymentController = (props) => {
    const [donationToPayment, setDonationToPayment] = useState({
        eventTitle: '',
        createdBy: {},
        donatedBy: {},
        donationAmount: Number,
        comments: Boolean,
        }
    );


    

    return (
        <DonationToPaymentContext.Provider value={[donationToPayment, setDonationToPayment]}>
        {props.children}
        </DonationToPaymentContext.Provider>
    );
    };