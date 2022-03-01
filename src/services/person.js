import axios from "axios";
import URL_API from "../config/globals"

const baseUrl = `${URL_API}/person`

const headers = () => {
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo'))
    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }
    return config
}

const save = async params => {
    const config = headers()
    const { data } = await axios.post(`${baseUrl}/add`, params, config)
    return data
}

const list = async ({ filter }) => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/${filter}`, config)
    return data.data
}

export default { save, list }