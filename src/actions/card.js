import axios from 'axios';

export const card = async (cardNumber, dateExp, cvv, amount) => {
  console.log('card', cardNumber, dateExp, cvv, amount);
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/card`, {
      cardNumber,
      dateExp,
      cvv,
      amount,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};
