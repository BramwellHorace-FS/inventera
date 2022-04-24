import axios from 'axios';

const BASE_URL = '/api/user';

const getUserData = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

const userService = {
  getUserData,
};

export default userService;
