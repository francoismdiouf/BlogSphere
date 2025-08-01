import axios from "axios";

const API_URL_AUTH = 'http://localhost:5000/api/auth';
export const registerUser = async (userData) => {
    const reponse = await axios.post(`${API_URL_AUTH}/register`, userData);

    return reponse.data
};



export const loginUser = async (userData) => {
    const reponse = await axios.post(`${API_URL_AUTH}/login`, userData);

    return reponse.data

};

export const fetchUserProfile = async () => {
    const token = localStorage.getItem('token'); // Récupérer le token

    const response = await axios.get(`${API_URL_AUTH}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes
        },
    });

    return response.data;
};


