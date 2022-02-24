import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from "react-router-dom";



const Up3 = () => {
    const [event, setEvent] = useContext(EventContext)
    const [charity, setCharity] = useState('')

    let navigate = useNavigate();
    console.log(event)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setEvent({...event, charity: 'unicef'});
        console.log(event)
        navigate('/Up4')
    }
    
    // setCharity('unicef')
    

    return(
        <>
            <form onSubmit={handleSubmit} >
            Charity<input value={charity}
                    placeholder='Please enter Unicef' 
                    onChange={(e) => setCharity(e.target.value)} />
                <button type='submit'>Next</button>

            </form>
        </>
    )
}
export default Up3