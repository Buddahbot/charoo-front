import axios from 'axios'
import { useState } from 'react';


export const register = abc => {
    return axios.post('https://charoo.herokuapp.com/auth/register', {
        firstName: abc.firstName,
        lastName: abc.lastName,
        email : abc.email,
        password : abc.password
    })
    .then(res => console.log('Registered'))
    .catch(err => console.log(err))
}

export const login = user => {
    return axios.post('https://charoo.herokuapp.com/auth/login', {
        email : user.email,
        password : user.password
    })
    .then(res => {
        // console.log(res.headers.get('auth-token'))
        localStorage.setItem('usertoken', res.data) // sets a usertoken into the localstorage coming from res.data
        return res.data
    }) 
    .catch(err => console.error(err))
}

export const userInfo = (userId) => {
    return axios.get(`https://charoo.herokuapp.com/user/${userId}`)
                .then(res => (res.data))
                .catch(err => console.log(err))
}

export const eventUpload = event => {


    // console.log(event)
    return axios.post('https://charoo.herokuapp.com/event/create', {
                user: event.user,
                sportstype : event.sportstype,
                distance : event.distance,
                start : event.start,
                country : event.country,
                monetaryGoal : event.monetaryGoal,
                eventTitle : event.eventTitle,
                description : event.description,
                imageUrl : event.imageUrl,
                charity : event.charity,
                dateCreated : event.dateCreated
    })
    .then(res => console.log('event created'))
    .catch(err => console.log(err))
}


export const events = async () => {
    try {
        const res = await axios.get('https://charoo.herokuapp.com/event/')
        console.log(res.data)
    } catch (err) {
        console.error(err)
    }
}


// donations

export const donationUpload = donation => {
    return axios.post('https://charoo.herokuapp.com/donation/create', {
                eventTitle : donation.eventTitle,
                createdBy : donation.createdBy,
                donatedBy: donation.donatedBy,
                amount: parseInt(donation.amount), // important to parseInt to make it a number, not string
                //payMethod : donation.donations.payMethod,
                comments: donation.checkedOne,
                })
    .then(res => console.log('donation created'))
    .catch(err => console.log(err))
}