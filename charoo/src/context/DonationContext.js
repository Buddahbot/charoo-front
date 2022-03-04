import { useState, createContext } from "react";


export const DonationContext = createContext();

export const DonationController = (props) => {
    const [donation, setDonation] = useState({
        eventTitle: '',
        createdBy: {},
        donatedBy: {},
        donationAmount: Number,
        comments: Boolean,
        }
    );


    

    return (
        <DonationContext.Provider value={[donation, setDonation]}>
        {props.children}
        </DonationContext.Provider>
    );
    };