import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const DonateContext = createContext();

export const DonateController = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEvents = async () => {
        try {
        await axios
            .get(
            "https://charoo.herokuapp.com/event/?limit=21"
            )
            .then((res) => {
            setData(res.data);
            });
        setLoading(false);
        } catch (error) {
        console.log(error.message);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <DonateContext.Provider value={[data, setData]}>
        {!loading && props.children}
        </DonateContext.Provider>
    );
    };