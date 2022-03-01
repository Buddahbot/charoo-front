import { useContext} from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
import { eventUpload } from '../logic/UserFunctions';

const Up4 = ()=> {
    const [event, setEvent] = useContext(EventContext)

    let navigate = useNavigate()

    const createEvent = (e) => {
        e.preventDefault()
    
        const newEvent = {
            imageUrl: event.imageUrl,
            sport: event.sport,
            distance: event.distance,
            start: event.start,
            country: event.country,
            monetaryGoal: event.monetaryGoal,
            eventTitle: event.eventTitle,
            description: event.description,
            charity: event.charity,
            dateCreated: event.dateCreated,
        } 

        eventUpload(newEvent) // passes newEvent as argument to function eventupload. eventUpload is sitting in logic/UserFunctions
        navigate('./Profile')
    }
    

    console.log(event)
    return(
        <>
                    <div>
                        <h1>PREVIEW</h1>
                    <h3>{event.eventTitle}</h3>
                    <br></br>
                    <img src={event.imageUrl} style={{ width: "300px" }} />
                    <br></br>
                    <p>Description: {event.description}</p>
                    <p>Type of Challenge: {event.sport}</p>
                    <p>Distance: {event.distance}</p>
                    <p>Start of Challenge{event.start}</p>
                    <p>Where: {event.country}</p>
                    <p>Donations go to: {event.charity}</p>
                    <p>Donation Collection Goal: {event.monetaryGoal}</p>
                    
                    </div>
                    
                    <>
                        <button onClick={createEvent}>CREATE NOW</button> // we get the event id directly after the event creator posted the new event. For this to happen we just use the user id and fetch the latest event the user has created. Also, we should write the event id into the user table as well, just to have a list of all event ids in the user table. We could use this list to display all the user events in his account.
                    </>
        </>
    )

}
export default Up4