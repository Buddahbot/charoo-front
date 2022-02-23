import axios from 'axios'

export const register = abc => {
    return axios.post('http://localhost:3002/auth/register', {
        firstName: abc.firstName,
        lastName: abc.lastName,
        email : abc.email,
        password : abc.password
    })
    .then(res => console.log('Registered'))
    .catch(err => console.log(err))
}

export const login = user => {
    return axios.post('http://localhost:3002/auth/login', {
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
    return axios.get(`localhost:3002/user/${userId}`)
                .then(res => (res.data))
                .catch(err => console.log(err))
}

export const eventUpload = eventData => {
    return axios.post('http://localhost:3002/event/create', {
                sportstype : eventData.sportstype,
                distance : eventData.distance,
                start : eventData.start,
                country : eventData.country,
                monetaryGoal : eventData.monetaryGoal,
                eventTitle : eventData.eventTitle,
                description : eventData.description,
                imageUrl : eventData.imageUrl,
                charity : eventData.charity,
                dateCreated : eventData.dateCreated
    })
    .then(res => console.log('event created'))
    .catch(err => console.log(err))
}
//this posts on mongoDB through backEnd