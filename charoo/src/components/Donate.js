
import { useContext, useState } from 'react'
import { DonateContext } from '../context/DonateContext';
import { Link } from "react-router-dom";

const Donate = () => {
        const [event, setEvent] = useContext(DonateContext)

        console.log(event)

    return (
        <>
            <h1>DONATION MONSTER</h1>
            {event.map((e, index) => {
                return (
                    <a key={index}>
                    <Link to={`/event/${event.data._id}`}>
                    <div className="grid-cell">
                    
                    <br />
                    <img
                    src={event.data.imageUrl}
                    alt={'pic of event'}/>
                        <h3>{event.data.eventTitle}</h3>
                        <p>{event.data.sportstype}</p>
                        <p>{event.data.distance}</p>
                        <p>{event.data.start}</p>
                        <p>{event.data.monetaryGoal}</p>
                        <p>{event.data.country}</p>
                        <p>{event.data.charity}</p>
                        <p>{event.data.imageUrl}</p>
                        <p>{event.data.description}</p>
                        <p>{event.data.dateCreated}</p>
                    </div>
                    </Link>
                    </a>
                )
            })}
        </>
    )
}

export default Donate
