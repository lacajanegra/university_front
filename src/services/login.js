import axios from "axios";

const baseUrl = 'http://localhost:3000/login'

const login = async params => {
    const { data } = await axios.post(baseUrl, params)
    return data
}

export default login