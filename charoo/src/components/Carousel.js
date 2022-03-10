import React, { useContext, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import '../stylesheets/Carousel.css'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import BG1 from '../Img/people3.jpg'
import BG2 from '../Img/forest-run.jpg'
import BG3 from '../Img/child-jogging.jpg'
import BG4 from '../Img/help-sport.jpg'
import BG5 from '../Img/run2.jpg'
import BG6 from '../Img/run0.jpg'

import { DonateContext } from '../context/DonateContext';
import { useNavigate, Link } from 'react-router-dom';

const Carousel = () => {

    const [data, setData] = useContext(DonateContext)
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;

    let navigate = useNavigate()

    return (
        <div className='carousel' style={{ padding: `0 ${chevronWidth}px` }}>
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

                <NavLink style={{ textDecoration: 'none' }} to={`/donate2/${data.data[0]._id}/`} >
                    <div className='carousele-item carousele-margin ' style={{ backgroundImage: `url(${data.data[0].imageUrl})` }}>
                        <div className='carousel-text'>
                            <h1 className=''>{data.data[0].eventTitle}</h1>
                        </div> </div> </NavLink>

                <NavLink style={{ textDecoration: 'none' }} to={`/donate2/${data.data[6]._id}/`}>  <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${data.data[6].imageUrl})` }}>
                    <div className='carousel-text'> <h1 className=''>{data.data[6].eventTitle}</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to={`/donate2/${data.data[2]._id}/`}>  <div className='carousele-item carousele-margin ' style={{ backgroundImage: `url(${data.data[2].imageUrl})` }}>
                    <div className='carousel-text'> <h1 className=''>{data.data[2].eventTitle}</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to={`/donate2/${data.data[3]._id}/`}>  <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${data.data[3].imageUrl})` }}>
                    <div className='carousel-text'> <h1 className=''>{data.data[3].eventTitle}</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to={`/donate2/${data.data[4]._id}/`}>  <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${data.data[4].imageUrl})` }}>
                    <div className='carousel-text'> <h1 className=''>{data.data[4].eventTitle}</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to={`/donate2/${data.data[5]._id}/`}>   <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${data.data[5].imageUrl})` }}>
                    <div className='carousel-text'>  <h1 className=''>{data.data[5].eventTitle}</h1> </div>
                </div></NavLink>

            </ItemsCarousel>
        </div>
    )




};

export default Carousel 
