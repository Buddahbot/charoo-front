import axios from 'axios'

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
    return axios.get(`https://charoo.herokuapp.com//user/${userId}`)
                .then(res => (res.data))
                .catch(err => console.log(err))
}

export const eventUpload = event => {
    return axios.post('https://charoo.herokuapp.com/event/create', {
                sport : event.sport,
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
//this posts on mongoDB through backEnd


// export const events = () => {
//     return axios.get('localhost:3002/event')
//                 .then(res => (res.data))
//                 .catch(err => console.log(err))
// }

export const events = async () => {
    try {
        const res = await axios.get('https://charoo.herokuapp.com/event')
        console.log(res.data)
    } catch (err) {
        console.error(err)
    }
}