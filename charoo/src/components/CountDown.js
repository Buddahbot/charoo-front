import React from 'react'
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom'

export default function CountDown() {
    const [event, setEvent] = useContext(EventContext)
    let navigate = useNavigate()




    const calculateTimeLeft = () => {
        let difference = +new Date(`${event.start}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
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

    const goBack = () => {
        navigate("/Up4");
    }

    return (
        <div> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
    )
}
