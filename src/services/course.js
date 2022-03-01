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

const save = async params => {
    const config = headers()
    const { data } = await axios.post(`${baseUrl}/courses/add`, params, config)
    return data
}

const list = async () => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/courses/`, config)
    return data.data
}

const getCourse = async (id) => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/courses/${id}/students`, config)
    return data.data
}

const getCoursesByStudent = async (id) => {
    const config = headers()
    const { data } = await axios.get(`${baseUrl}/courses/student/${id}`, config)
    return data.data
}

export default { save, list, getCourse, getCoursesByStudent }