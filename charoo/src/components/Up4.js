import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
import { eventUpload } from '../logic/UserFunctions';
import BG from '../Img/shoes.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'

const Up4 = () => {
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

        eventUpload(newEvent)
        navigate('./Profile')
    }
    const goBack = () => {
        navigate("/Up3");
    }


    console.log(event)
    return (
        // <div>
        //     <div>
        //         <h1>PREVIEW</h1>

        //         <h3>{event.eventTitle}</h3>

        //         <img src={event.imageUrl} style={{ width: "300px" }} />

        //         <p>Description: {event.description}</p>
        //         <p>Type of Challenge: {event.sport}</p>
        //         <p>Distance: {event.distance}</p>
        //         <p>Start of Challenge{event.start}</p>
        //         <p>Where: {event.country}</p>
        //         <p>Donations go to: {event.charity}</p>
        //         <p>Donation Collection Goal: {event.monetaryGoal}</p>

        //     </div>


        //     <button onClick={createEvent}>CREATE NOW</button>

        // </div>

        <div style={{ backgroundImage: `url(${BG})` }} className='CreateChallengeContainer'>
            <div class=" justify-content-center text-center ">
                <h2 class="heading-section title-create-challenge">Create challenge - Step 4 / 4</h2>
            </div>
            <div className='whiteboard form-challenge' >
                <div class="justify-content-center text-center">
                    <h2 class=" subtitle-create-challenge" style={{ paddingBottom: "5%" }}>PREVIEW</h2>
                </div>
                <div class="row  justify-content-center  ">
                    <div class=" col-md-6 col-lg-7">

                        <form class="signin-form  ">

                            <div class="form-group">
                                <div className='d-flex justify-content-center '>
                                    <div className=' what-imgs' style={{ backgroundImage: `url(${event.imageUrl})` }}> <div className='carousel-text'> <h1>{event.eventTitle}</h1> </div>
                                    </div>
                                </div>


                                {/* <img src={event.imageUrl} className='charity-img' style={{ width: "500px" }} />
                                <h2 class="heading-section title-create-challenge">{event.eventTitle}</h2> */}

                                <h3></h3>
                                <h2 className='item-preview'> <i class="fa fa-pencil"></i> {event.description}</h2>
                                <h2 className='item-preview'> <i class="fa fa-trophy"></i> {event.sport}</h2>
                                <h2 className='item-preview'> <i class="fa fa-road"></i> {event.distance} km</h2>
                                <h2 className='item-preview'><i class="fa fa-calendar-check-o"></i> {event.start}</h2>
                                <h2 className='item-preview'> <i class="fa fa-map-marker"></i> {event.country}</h2>
                                <h2 className='item-preview'> <i class="fa fa-group"></i> {event.charity}</h2>
                                <h2 className='item-preview'> <i class="fa fa-crosshairs"></i> {event.monetaryGoal} Euro</h2>

                            </div>

                            <div class="form-group d-flex ">

                                <button
                                    onClick={goBack}
                                    class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>

                                <button type="submit" onClick={createEvent} class="form-control btn btnSign submit fs-3 ">CREATE NOW</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )

}
export default Up4