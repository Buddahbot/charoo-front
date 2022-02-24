import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const DonateContext = createContext();

export const DonateController = (props) => {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEvents = async () => {
        try {
        await axios
            .get(
            "http://localhost:3002/event/?limit=21"
            )
            .then((res) => {
            setEvent(res.data);
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
        <DonateContext.Provider value={[event, setEvent]}>
        {!loading && props.children}
        </DonateContext.Provider>
    );
    };