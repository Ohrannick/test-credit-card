import axios from 'axios';

export const registration = async (email, password) => {
  console.log('regisration', email, password);
  try {
    const response = await axios.post(
      `http://localhost:5000/api/auth/registration`,
      {
        email,
        password,
      }
    );
    console.log('regisration', response);
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};
