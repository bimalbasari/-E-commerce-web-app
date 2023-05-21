import axios from "axios";

const url = `http://localhost:3000`;


// Api call for new user  
export const authenticatecSignup = async (data) => {
    try {
        const userData = await axios.post(`${url}/signup`, data);
        document.cookie = `token=${userData.data.token}`
        return userData.data;

    } catch (err) {
        alert(`==>${err.response.data.message}<==`)

    }
}


export const authenticatecLogin = async (data) => {
    try {
        const userData = await axios.post(`${url}/signin`, data);
        document.cookie = `token=${userData.data.token}`
        return userData.data

    } catch (err) {
        alert(`==>${err.response.data.message}<==`)
    }
}

