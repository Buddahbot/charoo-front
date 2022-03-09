import { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import { ProfileContext } from "../context/ProfileContext";
import { DonateContext } from "../context/DonateContext";
import BG from '../Img/bg.jpg'
import '../stylesheets/Challenge.css'
import pic from '../Img/profilepic.jpg'
import Moment from 'moment';


const Profile = () => {
  const [data, setData] = useContext(DonateContext)
  const [donna, setDonna] = useContext(ProfileContext)
  const [troy, setTroy] = useState([])
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });


  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log("decoded", decoded);
    setUser({
      id: decoded.user._id,
      firstName: decoded.user.firstName,
      lastName: decoded.user.lastName,
      email: decoded.user.email,
    })
    shareEvent()
  }


  const shareEvent = async () => {
    const iD = '621e3781d083ddd88c83ad59'
    const iDnew = user.id
    try {
      await axios.get('https://charoo.herokuapp.com/event')
        .then((res) => {
          setTroy(res.data.data)
          // console.log(res.data.data)

          // console.log(res.data.data.filter(event => event.user._id = "621e3781d083ddd88c83ad59"))
        })
    } catch (e) {
      console.log(e)
    }
  }


  const usersFilter = troy.filter(e => e.user._id === user.id)
  console.log('userID', user.id)

  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const changeTimeFormat = (date) => {
    return Moment(date).format('DD.MM.YYYY, h:mm a')
  }

  console.log('whats dat', usersFilter)
  return (

    <div className='CreateChallengeContainer' style={{ backgroundImage: `url(${BG})` }}>
      <div class=" justify-content-center text-center ">
        <h2 style={{ color: '#7c3639e3' }} class="heading-section title-create-challenge">PROFILE</h2>
      </div>
      <div className='whiteboard form-challenge' >
        <div class=" d-flex flex-column  justify-content-center  ">
          <div className=" d-flex justify-content-center" style={{ height: '100%', margin: '30px' }}>
            <img src={pic} height='150px' width='150px' alt='profile picture' style={{ borderRadius: "50%", boxShadow: ' 5px 5px 10px rgba(23, 23, 23, 0.336)' }} />
            <div style={{ height: '100%' }} className="d-flex flex-end">  <i className="fa fs-4 fa-pencil"></i> </div>
          </div>

          <table style={{ fontSize: '15px' }} className="table my-5 col-md-6 mx-auto mb-5">
            <tbody>
              <tr>
                <td className="font-weight-bold">Id</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td className="font-weight-bold"> First Name</td>
                <td>{user.firstName}</td>
              </tr>
              <tr>
                <td className="font-weight-bold"> Last Name</td>
                <td>{user.lastName}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Password</td>
                <td>**********</td>
              </tr>
            </tbody>
          </table>

          <div class="form-group d-flex  align-items-center justify-content-center  ">

            <button
              onClick={goBack}
              class="form-control btn-light btn btnSign w-50 mt-5 submit fs-3 ">BACK</button>

          </div>
        </div>
      </div >

      {/* <div>
        <h1>My Challenges:</h1>

        {usersFilter && usersFilter.map(e => {
          return (
            <div style={{ display: 'flex' }}>
              <a href={`http://localhost:3000/donate2/${e._id}`} target='_blank'>{e.eventTitle}</a>
            </div>
          )
        }
        )
        }
      </div> */}


      {/* <h1>My Donations:</h1>
      {data.data.map((e) => {
        if (e.donatedBy === user.id)
          return (
            <Link to={`/donate2/${e._id}`}>
              <ul>
                <li>{e.eventTitle}</li>
                <li>by {e.createdBy.firstName} {e.createdBy.lastName}</li>
                <li>Amount you donated: {e.amount}</li>
              </ul>
            </Link>
          )
      })} */}

      <div class=" justify-content-center text-center ">
        <h2 style={{ color: '#7c3639e3' }} class="heading-section title-create-challenge">My Challenges</h2>
      </div>


      <div className='grid'>


        {usersFilter && usersFilter.map(e => {
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

                      <h6 className='text-center'><i class="fa fa-clock-o mr-4 py-3 justify-content-center"></i> {changeTimeFormat(e.start)}
                      </h6>


                      <h6 className='text-center'><i class="fa fa-map-marker mr-4 py-3 justify-content-center"></i> {e.country}</h6>

                      <h6 className='text-center'>   <i class="fa fa-road mr-4 py-3 justify-content-center"></i>
                        {e.sportstype}</h6>

                      <h6 className='text-center'>  <i class="fa fa-crosshairs mr-4 py-3 justify-content-center"></i>
                        {e.monetaryGoal} Euro</h6>

                      <h6 className='text-center'>    <i class="fa fa-group mr-4 py-3 justify-content-center "></i>
                        Donations go to: {e.charity}</h6>



                    </div>
                  </div>

                </div>

              </div>




            </Link>

          )
        })}</div>

      <div class=" justify-content-center text-center ">
        <h2 class="heading-section title-create-challenge">My donations</h2>
      </div>



      <div className='grid'>


        {donna.data.map((e) => {
          if (e.donatedBy === user.id)
            return (


              <Link style={{ width: '380px', textDecoration: 'none' }} to={`/donate2/${e.eventId}`}>

                <div class=" events-list">
                  <div class=" p-5">
                    <div class="">
                      <div class="card  p-4">

                        <div className="my-5">   <h4 class="card-title text-center"><i style={{ fontSize: '50px' }} class="fa fa-star"></i></h4> </div>

                        <h2 class="text-center m-4"> {e.eventTitle}</h2>

                        <h6 className='text-center'><i class="fa fa-user py-3 mr-4  justify-content-center"></i> Challenge Created by {e.createdBy.firstName} {e.createdBy.lastName}</h6>

                        <h6 className='text-center'><i class="fa fa-map-marker mr-4 py-3 justify-content-center"></i> Amount you donated: {e.amount} Euro</h6>


                      </div>
                    </div>

                  </div>

                </div>

              </Link>

            )
        })}</div>

    </div>

  )
}
export default Profile


