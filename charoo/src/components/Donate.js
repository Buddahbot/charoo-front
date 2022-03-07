
import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { DonateContext } from '../context/DonateContext';

// import { Link } from "react-router-dom";

const Donate = ()=> {
    const [data, setData] = useContext(DonateContext)

    let navigate = useNavigate();

    return (
        <>
            <h1>DONATION MONSTER</h1>
            {/* <p>Event Title: {event[0].event.charity}</p> */}
            {data.data.map((e) => {
                return (<>
                        
                        <Link to={`/donate2/${e._id}`}> 
                            <h1>{e.charity}</h1>
                            <h3>{e.eventTitle}</h3>
                            <p>{e.sportstype}</p>
                            <p>{e.distance}</p>
                            <p>{e.start}</p>
                            <p>{e.monetaryGoal}</p>
                            <p>{e.country}</p>.
                            <p>{e.imageUrl}</p>
                            <p>{e.description}</p>
                            <p>{e.dateCreated}</p>
                            <p>{e._id}</p> 
                       {/* // <p>{e.user.firstName}</p> //subobject */}
                        </Link> 
                </>
                )
            })}
        </>
    )
}

export default Donate
