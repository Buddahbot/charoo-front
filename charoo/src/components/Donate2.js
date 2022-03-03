import { useContext, useState, useEffect  } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DonateContext } from '../context/DonateContext';
import { DonationContext } from '../context/DonationContext';
import jwt_decode from "jwt-decode";

const Donate2 = () => {
    const [data, setData] = useContext(DonateContext)
    const [donation, setDonation] = useContext(DonationContext)
    const [amount, setAmount] = useState()

    const { id } = useParams();
      
      const [userId, setUserId] = useState({      // ID of DONATION MONSTER 
        id: "",
        firstName: "" 
      })

    useEffect(() => {
    getUserId()
    }, [])

    const getUserId = async () => {
        const token = await localStorage.usertoken
        const decoded = await jwt_decode(token)
        console.log(decoded)
        setUserId({
          id: decoded.user._id,
          firstName: decoded.user.firstName,
        })
}


 const tempEvent = data.data.find(e => { //take event id from params and find particular event
    return e._id === id;
  });
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setDonation({
      eventTitle: tempEvent.eventTitle,
      createdBy: tempEvent.user._id,
      donatedBy: userId.id,
      amount: amount,
      }
    )

    navigate('/Donate3')

    console.log(typeof amount)
}
console.log(tempEvent) // EVENT OF CREATOR + USER OBJECT 
    return (
      <div><h1>Donating Monster {userId.firstName} </h1>

        <p><img src={tempEvent.imageUrl} style={{ width: "300px" }}></img></p>
        <h1>Challenge Title: {tempEvent.eventTitle}</h1>
        <h1>Start: {tempEvent.dateCreated}</h1>
        <h1>Description: {tempEvent.description}</h1>
        
        <form onSubmit={handleSubmit} >
        <input value={amount} placeholder='Amount you donate' type='number' onChange={(e) => setAmount(e.target.value)} />
        <button type='submit'>Donate Now</button>
        </form>

        <h1>Donation Goal: {tempEvent.monetaryGoal}</h1>
        <h1>For Charity: {tempEvent.charity}</h1>
        <h3>Challenge ID: {tempEvent._id}</h3>
        
        <h3> Creater Name: {tempEvent.user.firstName}</h3>
        <h3> Creater ID: {tempEvent.user._id}</h3>
        </div>

        

        
    )
}




export default Donate2