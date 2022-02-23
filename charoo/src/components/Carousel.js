import React, { useState, Link } from 'react';
import ItemsCarousel from 'react-items-carousel';
import '../stylesheets/Carousel.css'
import { NavLink } from 'react-router-dom'
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
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div className='item' style={{ backgroundImage: `url(${BG1})` }}>
                    <NavLink to="/">  First card  </NavLink>
                </div>
                <div className='item' style={{ backgroundImage: `url(${BG2})` }}>
                    Second card
                </div>
                <div className='item' style={{ backgroundImage: `url(${BG3})` }}>
                    Third card
                </div>
                <div className='item' style={{ backgroundImage: `url(${BG4})` }}>
                    Fourth card
                </div>
                <div className='item' style={{ backgroundImage: `url(${BG5})` }}>
                    Third card
                </div>
                <div className='item' style={{ backgroundImage: `url(${BG6})` }}>
                    Fourth card
                </div>
            </ItemsCarousel>
        </div>
    );
};