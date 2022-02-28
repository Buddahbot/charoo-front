import { useContext, useState, useEffect  } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DonateContext } from '../context/DonateContext';

const Donate2 = () => {
    const [data, setData] = useContext(DonateContext)
    const [donation, setDonation] = useState()
    const [donationAmount, setDonationAmount] = useState()

    const {id} = useParams();


 const tempEvent = data.data.find(e => {
    return e._id === id;
  });
  


  const handleSubmit = (e) => {
    e.preventDefault()
    setDonation({eventTitle: tempEvent.eventTitle, monetaryGoal: tempEvent.monetaryGoal, charity: tempEvent.charity, donationAmount: donationAmount });

    // navigate('/Up2')
    console.log(donation) 
}

    return (
        <div>
        <h1>Challenge Title: {tempEvent.eventTitle}</h1>
        <h1>Donation Goal: {tempEvent.monetaryGoal}</h1>
        <h1>For Charity: {tempEvent.charity}</h1>
        <h1>Created On: {tempEvent.dateCreated}</h1>
        <form onSubmit={handleSubmit} >
        <input value={donationAmount} placeholder='Amount you donate' onChange={(e) => setDonationAmount(e.target.value)} />
        <button type='submit'>Donate Now</button>
        </form>
        </div>

        

        
    )
}




export default Donate2