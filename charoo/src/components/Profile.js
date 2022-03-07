import { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import { ProfileContext } from "../context/ProfileContext";
import { DonateContext } from "../context/DonateContext";

const Profile = () => {

  const [data, setData] = useContext(ProfileContext)
  const [event, setEvent] = useContext(DonateContext)
  const [details, setDetails] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(data)
  useEffect(() => {
    getProfil();
    
  }, []);

  const getProfil = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log("decoded",decoded);
    setDetails({
      id: decoded.user._id,
      firstName: decoded.user.firstName,
      lastName: decoded.user.lastName,
      email: decoded.user.email,
    })
  }
  // console.log(event.data.user.map((r) => {
  //   if (data.user._id !== details.id)
  //     return(r.firstName)
  // }))
  return (
      <>
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Id</td>
                <td>{details.id}</td>
              </tr>
              <tr>
                <td> First Name</td>
                <td>{details.firstName}</td>
              </tr>
              <tr>
                <td> Last Name</td>
                <td>{details.lastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{details.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {event.data.map((d) => {
        if (d.user !== details.id)
        return(
            <ul>
              <li>{d.eventTitle}</li>
            </ul>
        )
      })}
        
            <h1>DONATION MONSTER</h1>
      {data.data.map((e) => {
        if (e.donatedBy !== details.id) 
                return (
                  <Link to={`/donate2/${e._id}`}> 
                    <ul>
                      <li>{e.eventTitle}</li>
                      <li>by {e.createdBy.firstName} {e.createdBy.lastName}</li>
                      <li>Amount you donated: {e.amount}</li>
                    </ul>
                  </Link> 
                )
      })} 
      </>
    );
}
export default Profile
