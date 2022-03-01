import { useState, createContext } from "react";

export const EventContext = createContext()

export const EventController = (props) => {

    const [event, setEvent] = useState({
        imageUrl: '',
        sport: '',
        distance: Number,
        start: Date,
        country: '',
        monetaryGoal: Number,
        eventTitle: '',
        description: '',
        charity: '',
        dateCreated: Date.now,
    });
    // const [eventTitle, setEventTitle] = useState('')
    // const [description, setDescription] = useState('')

    return (
        <EventContext.Provider value={[event, setEvent]}>
            {props.children}
        </EventContext.Provider>
    )
}