import axios from 'axios';

// loginUser - makes a post request to the server to login a user
export const userLogin = async (userData) => {
  try {
    const res = await axios.post('/api/auth/login', userData);

    // if the status code is 200, set the user token in local storage
    if (res.data.status === 'success') {
      localStorage.token = res.data.token;
    }

    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
