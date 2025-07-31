import axios from "axios";
const API_URL_AUTH = 'http://localhost:5000/api/auth';
export const registerUser = async (userData) => {
    const reponse = await axios.post(`${API_URL_AUTH}/register`, userData);

    return reponse.data
};