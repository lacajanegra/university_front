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

const getScoreInfo = async params => {
    const config = headers()
    const { course, student } = params
    const { data } = await axios.get(`${baseUrl}/scores/${course}/${student}`, config)
    return data.data[0]
}

const update = async params => {
    const config = headers()
    const { id, value1, value2, value3 } = params
    const { data } = await axios.put(`${baseUrl}/scores/update/${id}`, { value1, value2, value3 }, config)
    return data
}

export default { assign, getScoreInfo, update }