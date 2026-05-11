import axios from 'axios';

const API_URL = 'https://alinea-website.onrender.com'

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  if (response.data.token) {
    localStorage.setItem(
      'userInfo',
      JSON.stringify(response.data)
    );
  }

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  if (response.data.token) {
    localStorage.setItem(
      'userInfo',
      JSON.stringify(response.data)
    );
  }

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem('userInfo');
};