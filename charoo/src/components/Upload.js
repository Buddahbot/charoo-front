import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { eventUpload } from '../logic/UserFunctions';

const Uploload = () => {

    const [image, setImage ] = useState("");
    const [url, setUrl] = useState("");
    const [sport, setSport] = useState('')
    

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

            const createEvent = (e) => {
                e.preventDefault()
            
                const newEvent = {
                    imageUrl: url,
                    sportstype: sport,
                } 

                eventUpload(newEvent)
            
            }
//this sends information with help of eventUpload function 

return (
<div>
    <div>
        <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <button onClick={uploadImage}>Upload</button>
            <button onClick={createEvent}>CREATE NOW</button>
    </div>
        <div>
        <input
                type="sportstype"
                className="form-control"
                name="sportstype"
                placeholder="sportstype"
                value={sport}
                  onChange={(e) => setSport(e.target.value)}
                />
        <h1>Uploaded image will be displayed here</h1>
        <img src={url}/>
    </div>
</div>
)
}
export default Uploload;