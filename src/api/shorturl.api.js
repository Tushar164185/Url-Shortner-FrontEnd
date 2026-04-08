import axios from 'axios';
export const shortenUrl = async (longUrl) => {
  console.log(import.meta.env.VITE_BackEnd_API);
  const response = await axios.post(import.meta.env.VITE_BackEnd_API+'/shorten',{longUrl},{withCredentials:true});
  return response.data;
};
export const login = async (email,password) => {
  const { data: response } = await axios.post(import.meta.env.VITE_BackEnd_API+'/auth/login',{email,password},{withCredentials:true});
  return response;
};
export const register = async (username, email, password) => {
  const { data: response } = await axios.post(import.meta.env.VITE_BackEnd_API+'/auth/register', { username, email, password },{withCredentials:true});
  return response;
};