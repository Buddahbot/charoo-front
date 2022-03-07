import { useState, createContext, useEffect } from "react";
import axios from "axios";
import Profile from '../components/Profile';

export const ProfileContext = createContext();

export const ProfileController = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDonations = async () => {
        try {
        await axios
            .get("https://charoo.herokuapp.com/donation")
            .then((res) => {
            setData(res.data);
            });
            
        setLoading(false);
        } catch (error) {
        console.log(error.message);
        }
    };
    

    useEffect(() => {
        fetchDonations();
    }, []);
    console.log("data in profile context", data)
    return (
        <ProfileContext.Provider value={[data, setData]}>
                {!loading && props.children} 
                {/* <Profile /> */}
        </ProfileContext.Provider>
    );
    };