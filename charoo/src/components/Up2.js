import { useContext, useState } from "react";
// import { EventContext2 } from "../context/EventContext2";
import { EventContext } from "../context/EventContext";
import { useNavigate } from 'react-router-dom';

const Up2 = () => {
    const [event, setEvent] = useContext(EventContext)
    
    const [eventTitle, setEventTitle] = useState()
    const [description, setDescription] = useState()

    const [url, setUrl] = useState(""); //for cloudinary
    const [image, setImage ] = useState("");//for cloudinary
    console.log(event)
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "wycqxffu")
        data.append("cloud_name","dhwqgta90")
                fetch("https://api.cloudinary.com/v1_1/dhwqgta90/image/upload",{
                method:"post",
                body: data
                })
        .then(resp => resp.json())
        .then(data => {
        setUrl(data.url)
        })
        .catch(err => console.log(err))
        }

        

    let navigate = useNavigate()
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setEvent({...event, eventTitle : eventTitle, description : description, imageUrl: url})
        navigate('/Up3')
     
        }


    return(
        <>
           Step 1: <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
           <br></br>Step 2:<br></br>
            <button onClick={uploadImage}>Upload</button>
            
            <br></br>
            <br></br>Step 3:
            <form onSubmit={handleSubmit} >
                Challenge Title<input value={eventTitle}
                    placeholder='Please enter a title' 
                    onChange={(e) => setEventTitle(e.target.value)}/>
                
                Description<input value={description}
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)} />
                
                <button type='submit'>Next</button>
            </form>
            <img src={url}/>
        </>
    )
}
export default Up2