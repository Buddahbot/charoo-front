import { useState, createContext } from "react";


export const DonationToPaymentContext = createContext();

export const DonationToPaymentController = (props) => {
    const [donationToPayment, setDonationToPayment] = useState([]);


    

    return (
        <DonationToPaymentContext.Provider value={[donationToPayment, setDonationToPayment]}>
        {props.children}
        </DonationToPaymentContext.Provider>
    );
    };