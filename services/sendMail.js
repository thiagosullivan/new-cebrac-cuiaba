import axios from 'axios';

export const sendContactMail = async (nome, email, phone, unidade, curso) => {
  const data = {
    nome, email, phone, unidade, curso
  };

  try {
  return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}