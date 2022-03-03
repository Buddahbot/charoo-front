import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
import { eventUpload } from '../logic/UserFunctions';
import BG from '../Img/shoes.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'
import Moment from 'moment';


const Up4 = () => {
    const [event, setEvent] = useContext(EventContext)

    let navigate = useNavigate()

    const createEvent = (e) => {
        e.preventDefault()

        const newEvent = {
            user: event.userInfo,
            imageUrl: event.imageUrl,
            sportstype: event.sportstype,
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
        navigate('/Up5')
    }

    const goBack = () => {
        navigate("/Up3");
    }

    const changeTimeFormat = (date) => {
        // return Moment(date).format('dddd, Do MMMM YYYY, h:mm a')
        return Moment(date).format('DD.MM.YYYY, h:mm a')
    }

    console.log(event)
    return (
        <div style={{ backgroundImage: `url(${BG})` }} className='CreateChallengeContainer'>
            <div class=" justify-content-center text-center ">
                <h2 class="heading-section title-create-challenge">Create challenge - Step 4 / 4</h2>
            </div>
            <div className='whiteboard form-challenge' >
                <div class="justify-content-center text-center">
                    <h2 class=" subtitle-create-challenge" style={{ paddingBottom: "5%" }}>PREVIEW</h2>
                </div>
                <div class="row  justify-content-center  ">
                    <div class=" col-md-6 col-lg-8">

                        <form class="signin-form  ">

                            <div class="form-group ">
                                <div className='d-flex text-center  '>
                                    <div className=' what-imgs' style={{ backgroundImage: `url(${event.imageUrl})` }}> <div className='carousel-text'> <h1>{event.eventTitle}</h1> </div>
                                    </div>
                                </div>
                                <div className=' '>
                                    <div className='event-details text-center mt-5 '>
                                        <h4 className='item-preview'> <i class="fa fa-trophy py-3 mb-3 "></i> <h4>{event.sportstype}</h4> </h4>
                                        <h4 className='item-preview'> <i class="fa fa-road py-3 mb-3"></i> <h4>{event.distance} km</h4> </h4>
                                        <h4 className='item-preview'><i class="fa fa-clock-o  py-3 mb-3 justify-content-center"></i> <h4 className=''>{changeTimeFormat(event.start)}
                                        </h4> </h4>
                                        <h4 className='item-preview'> <i class="fa fa-map-marker mb-3 py-3 "></i>  <h4>{event.country}</h4> </h4>
                                        <h4 className='item-preview'> <i class="fa fa-group py-3 mb-3 "></i> <h4>{event.charity}</h4> </h4>
                                        <h4 className='item-preview'> <i class="fa fa-crosshairs py-3 mb-3"></i> <h4>{event.monetaryGoal} Euro</h4> </h4>
                                    </div>
                                </div>

                                <div className='event-info '>
                                    <h4 className=' d-flex text-center mt-5 '>
                                        {event.description}
                                    </h4>
                                </div>

                            </div>

                            <div class="form-group d-flex ">

                                <button
                                    onClick={goBack}
                                    class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>

                                <button type="submit" onClick={createEvent} class="form-control btn btnSign submit fs-3 ">CREATE NOW</button>
                                {/* we get the event id directly after the event creator posted the new event. For this to happen we just use the user id and fetch the latest event the user has created. Also, we should write the event id into the user table as well, just to have a list of all event ids in the user table. We could use this list to display all the user events in his account. */}
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )

}
export default Up4