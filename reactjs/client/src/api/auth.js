import axios from 'axios';

// loginUser - makes a post request to the server to login a user
export const userLogin = async (userData) => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
