import React, { useState } from 'react';
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


export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;
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

                <NavLink style={{ textDecoration: 'none' }} to="/">
                    <div className='carousele-item carousele-margin ' style={{ backgroundImage: `url(${BG1})` }}>
                        <div className='carousel-text'>
                            <h1 className=''>ZYX card</h1>
                        </div> </div> </NavLink>

                <NavLink style={{ textDecoration: 'none' }} to="/">  <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${BG2})` }}>
                    <div className='carousel-text'> <h1 className=''>ZYX card</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to="/">  <div className='carousele-item carousele-margin ' style={{ backgroundImage: `url(${BG3})` }}>
                    <div className='carousel-text'> <h1 className=''>ZYX card</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to="/">  <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${BG4})` }}>
                    <div className='carousel-text'> <h1 className=''>ZYX card</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to="/">  <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${BG5})` }}>
                    <div className='carousel-text'> <h1 className=''>ZYX card</h1> </div>
                </div></NavLink>

                <NavLink style={{ textDecoration: 'none' }} to="/">   <div className='carousele-item carousele-margin' style={{ backgroundImage: `url(${BG6})` }}>
                    <div className='carousel-text'>  <h1 className=''>ZYX card</h1> </div>
                </div></NavLink>

            </ItemsCarousel>
        </div>
    );
};


// const Description = styled.div`
//   display: none;
//   text-align: center;
//   padding-top: 2rem;
//   color: rgba(23, 23, 23, 0.8);
// `;

// const RecipeInfo = styled.div`
//   width: 100%;
//   height: 40%;
//   bottom: 40% !important;
//   position: relative;
//   background-color: rgba(238, 238, 238, 0.85);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   transition-duration: 0.5s;
//   padding: 2rem 3rem;
//   border-radius: 15px !important;

//   &:hover {
//     height: 60%;
//     bottom: 60% !important;
//   }

//   &:hover ${Description} {
//     display: inline;
//   }
// `;