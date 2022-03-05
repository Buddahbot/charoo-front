import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import BG from '../Img/shoes.jpg'
import '../stylesheets/Challenge.css'
import '../stylesheets/LoginRegister.css'
import ItemsCarousel from 'react-items-carousel';
import '../stylesheets/Carousel.css'
import styled from "styled-components";
import BG1 from '../Img/unicef.png'
import BG2 from '../Img/RedCross.jpg'
import BG3 from '../Img/WCS.png'
import BG4 from '../Img/WWF.jpg'
import BG5 from '../Img/Directrelief.jpg'
import BG6 from '../Img/IUCN.jpg'



const Up3 = () => {

    const [event, setEvent] = useContext(EventContext)
    const [charity, setCharity] = useState('')
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;


    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()

        setEvent({ ...event, charity: charity });
        console.log(event)
        navigate('/Up4')

    }

    const goBack = () => {
        navigate("/Up2");
    }


    // setCharity('unicef')


    return (

        <div style={{ backgroundImage: `url(${BG})` }} className='CreateChallengeContainer-charity'>

            <div class=" justify-content-center text-center ">
                <h2 class="heading-section title-create-challenge">Create challenge - Step 3 / 4 </h2>
            </div>
            <div className='whiteboard form-challenge' >

                <div class="justify-content-center text-center">
                    <h2 class=" subtitle-create-challenge">Choose charity</h2>
                </div>

                <form onSubmit={handleSubmit} class="signin-form">


                    <div className='' style={{ padding: `0 ${chevronWidth}px` }}>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={3}
                            gutter={10}
                            leftChevron={<i class="fa fa-chevron-left" style={{ color: "rgba(33,37,41,0.89)", fontSize: '30px' }} ></i>}
                            rightChevron={<i class="fa fa-chevron-right" style={{ color: "rgba(33,37,41,0.89)", fontSize: '30px' }} ></i>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                            alwaysShowChevrons
                        >

                            <div style={{ textDecoration: 'none' }} onClick={(e) => setCharity('Unicef')} >
                                <div className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG1})` }}>
                                </div>
                            </div>

                            <div style={{ textDecoration: 'none' }} onClick={(e) => setCharity("American Red Cross")} >
                                <div className='carousele-item carousele-charity-margin' style={{ backgroundImage: `url(${BG2})` }} >
                                </div>
                            </div>

                            <div style={{ textDecoration: 'none' }} onClick={(e) => setCharity('WCS')} >
                                <div className='carousele-item carousele-charity-margin' style={{ backgroundImage: `url(${BG3})` }}  >
                                </div>
                            </div>

                            <div style={{ textDecoration: 'none' }} onClick={(e) => setCharity('WFF')} >
                                <div className='carousele-item carousele-charity-margin' style={{ backgroundImage: `url(${BG4})` }} >
                                </div>
                            </div>

                            <div style={{ textDecoration: 'none' }} onClick={(e) => setCharity('Direct Relief')} >
                                <div className='carousele-item carousele-charity-margin' style={{ backgroundImage: `url(${BG5})` }} >
                                </div>
                            </div>

                            <div style={{ textDecoration: 'none' }} onClick={(e) => setCharity('IUCN')} >
                                <div className='carousele-item carousele-charity-margin' style={{ backgroundImage: `url(${BG6})` }} >
                                </div>
                            </div>

                        </ItemsCarousel>
                    </div>
                    <div>
                        <h1> You selected: {charity}  </h1><br></br>
                    </div>

                    <div class="form-group btn-charity d-flex">

                        <button
                            onClick={goBack}
                            class="form-control btn-light btn btnSign-back submit fs-3">BACK</button>

                        <button type="submit" class="form-control btn btnSign submit fs-3">NEXT</button>

                    </div>
                </form>

            </div >
        </div>
    )
}
export default Up3