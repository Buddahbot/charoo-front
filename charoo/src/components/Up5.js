import { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
// import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";

const Up5 = props => {

  const [troy, setTroy] = useState([])
  const [user, setUser] = useState({
        id : "",
  })
    useEffect(() => {
      getUserInfo()
      shareEvent()
      }, [])  
    // const [loading, setLoading] = useState(true)

    const getUserInfo = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        // console.log(decoded)
        setUser({
            id: decoded.user._id,
        })
    }    

    const shareEvent = async () => {
      const iD = '621e3781d083ddd88c83ad59'
      const iDnew = user.id
    try {
    await axios.get('https://charoo.herokuapp.com/event')        
    .then((res) => {
    setTroy(res.data.data)
    console.log(res.data.data)
    
    // console.log(res.data.data.filter(event => event.user._id = "621e3781d083ddd88c83ad59"))
    })
} catch(e) {
  console.log(e)
  }
 } 
 const usersFilter = troy.filter(e => e.user._id === user.id)
 console.log('userID', user.id)

  return (
      <div>
      Hello
    <br></br>
          {user.id}
      {/* {troy.map((e) => {
            if (e.event.user._id !== user.id)
            return (
             <li>{e.user._id}</li>
            )
          })} */}
          {/* {troy.filter(e => e.user._id === user.id)} */}
        
           {usersFilter && usersFilter.map(e => {
           return(
             <div style={{display : 'flex'}}>
           <a href={`http://localhost:3000/event/${e._id}`} target='_blank'>Event link here : {e._id}</a>
           </div>
            )}
           )
            }
          )
          
          
      </div>
  )
  
  };
  

export default Up5