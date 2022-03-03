import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import BG from '../Img/monstera.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import '../stylesheets/Challenge.css'
import pic from '../Img/p.jpg'

const Profile = () => {

  const [details, setDetails] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    getProfil();
  }, []);

  const getProfil = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log(decoded);
    setDetails({
      id: decoded.user._id,
      firstName: decoded.user.firstName,
      lastName: decoded.user.lastName,
      email: decoded.user.email,
    })

  };

  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (

    <div className='CreateChallengeContainer' style={{ backgroundImage: `url(${BG})` }}>
      <div class=" justify-content-center text-center ">
        <h2 class="heading-section title-create-challenge">PROFILE</h2>
      </div>
      <div className='whiteboard form-challenge' >
        <div class=" d-flex flex-column  justify-content-center  ">
          <div className=" d-flex justify-content-center" style={{ height: '100%', margin: '30px' }}>
            <img src={pic} height='120px' width='120px' alt='profile picture' style={{ borderRadius: "50%", boxShadow: ' 5px 5px 10px rgba(23, 23, 23, 0.336)' }} />
            <div style={{ height: '100%' }} className="d-flex flex-end">  <i className="fa fs-4 fa-pencil"></i> </div>
          </div>

          <table className="table col-md-6 mx-auto mb-5">
            <tbody>
              <tr>
                <td className="font-weight-bold">Id</td>
                <td>{details.id}</td>
              </tr>
              <tr>
                <td className="font-weight-bold"> First Name</td>
                <td>{details.firstName}</td>
              </tr>
              <tr>
                <td className="font-weight-bold"> Last Name</td>
                <td>{details.lastName}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Email</td>
                <td>{details.email}</td>
              </tr>
            </tbody>
          </table>

          <div class="form-group d-flex ">

            <button
              onClick={goBack}
              class="form-control btn-light btn btnSign submit fs-3 ">BACK</button>

          </div>
        </div>
      </div >
    </div>
  );
};

export default Profile;
