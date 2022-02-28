import axios from "axios";

const baseUrl = 'http://localhost:3000'

const headers = () => {
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo'))
    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }
    return config
}

const assign = async params => {
    const config = headers()
    const { data } = await axios.post(`${baseUrl}/scores/assign`, params, config)
    return data
}

export default { assign }