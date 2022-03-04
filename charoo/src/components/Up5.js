import { useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode';

const Up5 = props => {
      
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    
    const [user, setUser] = useState({
              id : "",
              
    })
  
    const getUserInfo = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        // console.log(decoded)
        setUser({
            id: decoded.user._id,
        })
    }    

  console.log(user.id)
      
    useEffect(() => {
        getUserInfo()
        shareEvent()

    }, []) 

  const shareEvent = async () => {
    //const iD = '621e3781d083ddd88c83ad59'
          const iD = user.id
            console.log(user.id)
          try { 
              await axios.get('https://charoo.herokuapp.com/event')        
                .then((res) => {
                  setLoading(false)
                  setEvents(res.data.data.filter(event => event.user._id === iD.toString))
                  
                }) 
                
          } catch {
            console.log('error')
            }
          }     
  console.log(events)
  
  

  
  

  
    // return eachObj => eachObj.user._id === iD

  return (
      <div>



      Hello
    <br></br>
          {user.id}
          
      </div>
  )
  
  };
  

export default Up5