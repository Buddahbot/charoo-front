import React from 'react'
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { DonateContext } from '../context/DonateContext';
import { useParams } from 'react-router-dom';

export default function CountDown() {
    const [data, setData] = useContext(DonateContext)

    const { id } = useParams();

    const tempEvent = data.data.find(e => { // save event in variable
        return e._id === id; // e._id are all events. id is the event id from params
    });

    const calculateTimeLeft = () => {
        let difference = +new Date(`${tempEvent.start}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });


    return (
        <div> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
    )
}
