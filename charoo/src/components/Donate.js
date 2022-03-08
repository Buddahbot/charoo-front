
import { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { DonateContext } from '../context/DonateContext';
import { ProfileContext } from "../context/ProfileContext";
import jwt_decode from "jwt-decode";
import BG from '../Img/bg00.jpg'
import '../stylesheets/EventList.css'
import Moment from 'moment';


// import { Link } from "react-router-dom";

const Donate = () => {
    const [data, setData] = useContext(DonateContext)
    const [donna, setDonna] = useContext(ProfileContext)
    const [userId, setUserId] = useState({      // ID of DONATION MONSTER 
        id: "",
        firstName: ""
    })

    const getUserId = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        console.log(decoded)
        setUserId({
            id: decoded.user._id,
            firstName: decoded.user.firstName,
        })
    }

    useEffect(() => {
        getUserId()
    }, [])
    let navigate = useNavigate();

    console.log(data)

    const handleClick = () => {
        navigate('/donate2')
    }

    const changeTimeFormat = (date) => {
        return Moment(date).format('DD.MM.YYYY, h:mm a')
    }

  
    return (
        <div className='d-flex flex-column justify-content-center  ' style={{
            width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
            backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
        }}>

            <div className='titel-events text-center'>
                <h1>Hi, Donating Monster {userId.firstName} ! </h1>
                <h2 style={{ fontSize: '30px', color: 'white', marginBottom: '30px' }}> Choose a challenge: </h2>
            </div>


            {/* <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2 input-search"
                    type="text"
                    placeholder="Search events... "

                />
                <i style={{ color: 'white', fontSize: '40px' }} class="fa fa-search "></i>

            </form> */}



            <div className='grid'>

                {data.data.map((e) => {
                    return (



                        <Link style={{ width: '380px', textDecoration: 'none' }} to={`/donate2/${e._id}`}>

                            <div class=" events-list">
                                <div class=" p-5">
                                    <div class="">
                                        <div class="card  p-4">

                                            <h4 class="card-title text-right"><i class="fa fa-star"></i></h4>

                                            <div className='img' style={{
                                                width: '100%', backgroundImage: `url(${e.imageUrl})`, backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
                                            }}>

                                            </div>


                                            <h2 class="text-center m-4"> {e.eventTitle}</h2>

                                            <h6 className='text-center'><i class="fa fa-user py-3 mr-4  justify-content-center"></i>Created by  {e.user.firstName}</h6>

                                            <h6 className='text-center'><i class="fa fa-clock-o mr-4 py-3 justify-content-center"></i> {changeTimeFormat(e.start)}
                                            </h6>


                                            <h6 className='text-center'><i class="fa fa-map-marker mr-4 py-3 justify-content-center"></i> {e.country}</h6>

                                            {/* <h6 className='text-center'>   <i class="fa fa-trophy mr-4 py-3 justify-content-center"></i>
                                Run</h6> */}


                                            <h6 className='text-center'>    <i class="fa fa-group mr-4 py-3 justify-content-center "></i>
                                                Donations go to: {e.charity}</h6>

                                            {/* <h6 className='text-center'>  <i class="fa fa-crosshairs mr-4 py-3 justify-content-center"></i>
                                200 Euro</h6> */}

                                        </div>
                                    </div>

                                </div>

                            </div>


                            {/*                         
                        {e.sportstype}
                        {e.distance}
                       
                        {e.monetaryGoal}
                       
                       
                        {e.dateCreated} */}



                        </Link>

                    )
                })}</div>
        </div>
    )
}

export default Donate
