import { useContext, useState } from "react";
// import { EventContext2 } from "../context/EventContext2";
import { EventContext } from "../context/EventContext";
import { useNavigate } from 'react-router-dom';
import BG from '../Img/shoes.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'
import Spinner from './Spinner'
import { data } from "jquery";

const Up2 = () => {
    const [event, setEvent] = useContext(EventContext)
    const [eventTitle, setEventTitle] = useState()
    const [description, setDescription] = useState()
    const [loading, setLoading] = useState(false)
    const [imageData, setImageData] = useState({}); //for cloudinary
    console.log(event)

    const uploadImage = (e) => {
        e.preventDefault()
        setLoading(true);

        const data = new FormData()
        data.append("file", e.target.files[0])
        data.append("upload_preset", "wycqxffu")
        data.append("cloud_name", "dhwqgta90")
        fetch("https://api.cloudinary.com/v1_1/dhwqgta90/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(json => {
                setLoading(false);
                setImageData(json);

            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }

    let navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setEvent({ ...event, eventTitle: eventTitle, description: description, imageUrl: imageData.url })
        navigate('/Up3')

    }

    const goBack = () => {
        navigate("/Up1");
    }

    const styles = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        display: 'flex',
    };


    return (
        <div style={{ backgroundImage: `url(${BG})` }} className='CreateChallengeContainer'>

            <div class=" justify-content-center text-center ">
                <h2 class="heading-section title-create-challenge">Create challenge - Step 2 / 4 </h2>
            </div>
            <div className='whiteboard form-challenge' >
                <div class="row  justify-content-center  ">
                    <div class=" col-md-6 col-lg-7 ">

                        <form onSubmit={handleSubmit} class="signin-form   ">

                            <div className="d-flex flex-column justify-content-center ">
                                <div style={styles} class="form-group d-flex flex-row justify-content-center mb-5 ">
                                    <div>

                                    </div>
                                    <label className="custom-file-upload">
                                        <input type="file"
                                            multiple
                                            style={{ display: 'none' }}

                                            onChange={uploadImage} />
                                        <i className="fa fs-3 fa-cloud-upload" /> <br /> Choose picture

                                    </label>

                                </div>
                                {
                                    loading ?
                                        <Spinner />
                                        : (
                                            <img src={imageData.url} style={{ margin: "0px 40px" }} className='charity-img' />
                                        )
                                }

                            </div>

                            <div class="form-group mt-5">

                                <input type="text" class="form-control fs-3 inputbg-home font-weight-bold"
                                    maxLength={35}
                                    value={eventTitle}
                                    placeholder='Challenge Title'
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    required />
                            </div>

                            <div class="form-group">

                                <label for="exampleFormControlTextarea1"> </label>
                                <textarea class="form-control form-control-lg inputbg-home fs-3" id="exampleFormControlTextarea1" rows="5" placeholder="Write your description [optional]" onChange={(e) => setDescription(e.target.value)} value={description} ></textarea>

                            </div>

                            <div class="form-group d-flex ">

                                <button
                                    onClick={goBack}
                                    class="form-control btn-light btn btnSign-back submit fs-3 ">BACK</button>

                                <button type="submit" class="form-control btn btnSign submit fs-3 ">NEXT</button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Up2