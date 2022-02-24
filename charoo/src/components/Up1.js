import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from "react-router-dom";



const Up1 = () => {
    const [event, setEvent] = useContext(EventContext)
    const [sport, setSport] = useState('')
    const [distance, setDistance] = useState(0)
    const [start, setStart] = useState(Date)
    const [country, setCountry] = useState('')
    const [monetaryGoal, setMonetaryGoal] = useState(0)


    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setEvent({...event, sport: sport, distance: distance, start: start, country: country, monetaryGoal: monetaryGoal});
        console.log(event)
        navigate('/Up2')
    }
    

    return(
        <>
            <form onSubmit={handleSubmit} >
                Sport<input value={sport} placeholder='enter type of sports' onChange={(e) => setSport(e.target.value)} />
                Distance: <input value={distance} placeholder='enter distance' onChange={(e) => setDistance(e.target.value)}/>Km
                Start<input value={start} placeholder='start of challenge' onChange={(e) => setStart(e.target.value)}/>Datum
                Country<input value={country} placeholder='Country' onChange={(e) => setCountry(e.target.value)} />
                Max Donation Amount<input value={monetaryGoal} placeholder='donation amount' onChange={(e) => setMonetaryGoal(e.target.value)} /> Euro
                <button type='submit'>Nexttt</button>

            </form>
           
        </>
    )
}
export default Up1