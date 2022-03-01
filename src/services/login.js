import axios from "axios";
import URL_API from "../config/globals"

const baseUrl = `${URL_API}/login`

const login = async params => {
    const { data } = await axios.post(baseUrl, params)
    return data
}

export default login