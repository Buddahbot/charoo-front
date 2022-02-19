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