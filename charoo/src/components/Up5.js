import { useContext, useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
// import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";
// import FaFacebook from "react-icons/lib/fa/facebook";
// import { ShareButton } from "react-custom-share"
const Up5 = props => {
     
      const [user, setUser] = useState({
        id : "",
        
    })
    const [events, setEvents] = useState([])


    useEffect(() => {
    getUserInfo()
      shareEvent()
      //filterEvent()
    }, [])

    const getUserInfo = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        // console.log(decoded)
        setUser({
            id: decoded.user._id,
        })
    }    

console.log(user.id)

  
  
    const shareEvent = async () => {
      try {
        await axios.get('https://charoo.herokuapp.com/event')        
          .then(res => setEvents(res.data))         
          .then(() => filterEvent())
    } catch {
      console.log('error')
      }
    }
                
            
  
  console.log(events)

  const iD = '621e3781d083ddd88c83ad59'

  const filterEvent = () => {
        const userEvents = events.data.filter(event => event.user._id === iD)
        console.log(userEvents)
  }

    // return eachObj => eachObj.user._id === iD
 
  

  
  return (
      <div>



          Hello
          {user.id}
          
      </div>
  )
  
  };
  

export default Up5