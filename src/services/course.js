import axios from "axios";
import URL_API from "../config/globals"

const baseUrl = `${URL_API}/courses`

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

const list = async () => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/`, config)
    return data.data
}

const getCourse = async (id) => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/${id}/students`, config)
    return data.data
}

const getCoursesByStudent = async (id) => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/student/${id}`, config)
    return data.data
}

export default { save, list, getCourse, getCoursesByStudent }