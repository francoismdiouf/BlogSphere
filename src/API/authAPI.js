import axios from "axios";

const API_URL_AUTH = 'http://localhost:5000/api/auth';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL_AUTH}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL_AUTH}/login`, userData);
  return response.data;
};

export const profileUser = async () => {

  const token = localStorage.getItem('token');

  const response = await axios.get(`${API_URL_AUTH}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("Response: ", response.data);
  
  return response.data;
};