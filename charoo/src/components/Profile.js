import { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import { ProfileContext } from "../context/ProfileContext";
import { DonateContext } from "../context/DonateContext";
import BG from '../Img/monstera.jpg'
import '../stylesheets/Challenge.css'
import pic from '../Img/p.jpg'

const Profile = () => {

  const [data, setData] = useContext(ProfileContext)
  const [troy, setTroy] = useState([])
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(data)
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
  }
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);

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
  } catch(e) {
  console.log(e)
  }
  } 
  const usersFilter = troy.filter(e => e.user._id === user.id)
  console.log('userID', user.id)

  return (
      <>
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
      {usersFilter && usersFilter.map(e => {
           return(
             <div style={{display : 'flex'}}>
           <a href={`http://localhost:3000/event/${e._id}`} target='_blank'>Event link here : {e._id}</a>
           </div>
            )}
           )
            }
          )
  
        
            <h1>DONATION MONSTER</h1>
      {data.data.map((e) => {
        if (e.donatedBy !== user.id) 
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




// import { useState, useEffect, useContext } from "react";
// import jwt_decode from "jwt-decode";
// import axios from 'axios'
// import { useNavigate, Link } from 'react-router-dom';
// import { ProfileContext } from "../context/ProfileContext";

// const Profile = () => {

//   const [data, setData] = useContext(ProfileContext)
//   const [donations, setDonations] = useState([])

//   const [details, setDetails] = useState({
//     id: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//   });

//  // const value = useContext(ProfileContext);

//   //console.log("value", value.data)

//   // console.log("subobject", value.data.donations[0])

//   //console.log("donationData" ,data.data.map((f) => f.donations))

//   console.log(data)
  
//   useEffect(() => {
//     getProfil();
//   }, []);

//   const getProfil = async () => {
//     const token = await localStorage.usertoken;
//     const decoded = await jwt_decode(token);
//     console.log("decoded",decoded);
//     setDetails({
//       id: decoded.user._id,
//       firstName: decoded.user.firstName,
//       lastName: decoded.user.lastName,
//       email: decoded.user.email,
//     })
//   }

//   console.log(details)
//   //const displayDonationInfo = setDonations("donationData" ,data.data.map((f) => f.donations ))

// // console.log(details)

    
//   return (
//       <>
//       <h1>Hello</h1>
//       <div className="container">
//         <div className="jumbotron mt-5">
//           <div className="col-sm-8 mx-auto">
//             <h1 className="text-center">PROFILE</h1>
//           </div>
//           <table className="table col-md-6 mx-auto">
//             <tbody>
//               <tr>
//                 <td>Id</td>
//                 <td>{details.id}</td>
//               </tr>
//               <tr>
//                 <td> First Name</td>
//                 <td>{details.firstName}</td>
//               </tr>
//               <tr>
//                 <td> Last Name</td>
//                 <td>{details.lastName}</td>
//               </tr>
//               <tr>
//                 <td>Email</td>
//                 <td>{details.email}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
    
        
//             <h1>DONATION MONSTER</h1>
//       {data.data.map((e) => {
//                 return (
//                         <Link to={`/donate2/${e._id}`}> 
//                             <h3>{e.eventTitle}</h3>
//                             <p>by {e.createdBy.firstName}</p>
//                         </Link>
//                 )
//             })} 
//       </>
//     );
// }
// export default Profile