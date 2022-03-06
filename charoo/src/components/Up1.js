import { useContext, useState, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
// import { NavLink } from "react-router-dom";
import BG from '../Img/shoes.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'


const Up1 = () => {
    const [event, setEvent] = useContext(EventContext)
    console.log(event)
    const [sportstype, setSportstype] = useState(event.sportstype)
    const [distance, setDistance] = useState(event.distance)
    const [start, setStart] = useState(event.start)
    const [country, setCountry] = useState(event.country)
    const [monetaryGoal, setMonetaryGoal] = useState(event.monetaryGoal)
    const [user, setUser] = useState({
        id : "",
        
    })

    useEffect(() => {
    getUserInfo()
    }, [])

    const getUserInfo = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        console.log(decoded)
        setUser({
            id: decoded.user._id,
        })
    }    
        let navigate = useNavigate();
 
    console.log(user.id)
    const handleSubmit = (e) => {
        e.preventDefault()
        setEvent({ ...event, user: user.id, sportstype: sportstype, distance: distance, start: start, country: country, monetaryGoal: monetaryGoal });
        console.log(event)
        navigate('/Up2')
    }

    const goBack = () => {
        navigate(-1);
    }


    return (
        <div style={{ backgroundImage: `url(${BG})` }} className='CreateChallengeContainer'>

            <div class=" justify-content-center text-center ">
                <h2 class="heading-section title-create-challenge">Create challenge - Step 1 / 4</h2>
            </div>
            <div className='whiteboard form-challenge' >
                <div class="row  justify-content-center  ">
                    <div class=" col-md-6 col-lg-7">

                        <form onSubmit={handleSubmit} class="signin-form  ">

                            <div class="form-group">

                                <input type="text" class="form-control fs-3 inputbg-home"
                                    value={sportstype}
                                    placeholder='Type of Running Sport' 
                                    onChange={(e) => setSportstype(e.target.value)}
                                    required />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control  fs-3 inputbg-home"
                                    value={distance}
                                    onFocus={(e) => e.target.type = 'number'}
                                    onChange={e => setDistance(e.target.value)}
                                    min="0"
                                    placeholder='Distance in Km'
                                    required />
                            </div>

                            <div class="form-group">
                                <input
                                    type="text" class="form-control  fs-3 inputbg-home"
                                    value={start}
                                    onFocus={(e) => e.target.type = 'datetime-local'}
                                    onChange={(e) => setStart(e.target.value)} 
                                    placeholder='Starting Date' 
                                    required />
                            </div>

                            <div class="form-group">

                                <input type="text" class="form-control  fs-3 inputbg-home"
                                    value={country} 
                                    placeholder='Place e.g. Berlin, Germany' 
                                    onChange={(e) => setCountry(e.target.value)}
                                    required />
                            </div>


                            <div class="form-group">

                                <input type="text"
                                    min="5" max="5000" class="form-control  fs-3 inputbg-home"
                                    value={monetaryGoal}
                                    onFocus={(e) => e.target.type = 'number'}
                                    placeholder='Donation Goal in Euro ' 
                                    onChange={(e) => setMonetaryGoal(e.target.value)}
                                    required />
                            </div>

                            <div class="form-group d-flex ">

                                <button
                                    onClick={goBack}
                                    class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>

                                <button type="submit" class="form-control btn btnSign submit fs-3 ">NEXT</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Up1