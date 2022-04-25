import axios from 'axios';

const BASE_URL = '/api/user';

// Get user data
const getUserData = async (token) => {
  try {
    const res = await axios.get(`${BASE_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// Update user data
const updateUserData = async (token, data) => {
  try {
    const res = await axios.put(`${BASE_URL}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete user data
const deleteUserData = async (token) => {
  try {
    const res = await axios.delete(`${BASE_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// User Service
const userService = {
  getUserData,
  updateUserData,
  deleteUserData,
};

export default userService;
