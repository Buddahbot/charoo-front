import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useMoralis } from 'react-moralis';

// import { useNavigate } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";


const Up5 = props => {
    // const { authenticate, isAuthenticated, user } = useMoralis();
    // const { initialize, isInitialized } = useMoralis()
  
    const [events, setEvents] = useState()
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState({
        id : ''
    })
  
    const getUserInfo = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        // console.log(decoded)
        setUserId({
            id: decoded.user._id,
        })
    }    

    console.log(userId.id)
      
    useEffect(() => {
        getUserInfo()
        shareEvent()
    }, []) 

  const shareEvent = async () => {
    const iD = '621e3781d083ddd88c83ad59'
    //const iD = userId.id
    console.log(userId.id)
    try {
      const res = await axios.get('https://charoo.herokuapp.com/event')
      setLoading(false)
      setEvents(res && res.data.data.filter(event => event.user._id === iD)) //res && res.data.data.filter(event => event.user._id === iD)
      console.log(res.data)
    } catch {
      console.log('error')
    }
  }   
  
  
  

  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <button onClick={() => authenticate()}>Authenticate</button>
  //       <button
  //           disabled={isInitialized}
  //           onClick={()=>{
  //             initialize({
  //               appId: 'o8C4ooSXYjnwMwoCmEHYbwzFZI4btzdZuwIHrSZM',
  //               serverUrl: 'https://lyzcfadfbrj6.usemoralis.com:2053/server'
  //             })
  //           }}
  //         >
  //           Initialize
  //       </button>
  //     </div>
  //   );
  // }
  return (
      <>
      Hello
      <br></br>
      {/* //<h1>Welcome {user.get("username")}</h1> */}
      <br></br>
          {userId.id}
          
      </>
  )
  
};
  

export default Up5