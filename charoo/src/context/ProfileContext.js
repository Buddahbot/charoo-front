import { useState, createContext, useEffect } from "react";
import axios from "axios";
import Profile from '../components/Profile';

export const ProfileContext = createContext();

export const ProfileController = (props) => {
    const [donna, setDonna] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDonations = async () => {
        try {
        await axios
            .get("https://charoo.herokuapp.com/donation")
            .then((res) => {
            setDonna(res.data);
            });
            
        setLoading(false);
        } catch (error) {
        console.log(error.message);
        }
    };
    

    useEffect(() => {
        fetchDonations();
    }, []);
  
    return (
        <ProfileContext.Provider value={[donna, setDonna]}>
                {!loading && props.children} 
                {/* <Profile /> */}
        </ProfileContext.Provider>
    );
    };