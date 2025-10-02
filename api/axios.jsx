import axios from 'axios';

//const currentHostname = window.location.hostname;

//const isDevelopment =
// currentHostname === 'localhost' || currentHostname === '127.0.0.1';

//const baseURL = isDevelopment
//? 'http://localhost:3000/'
// : 'https://server-mern-sell-all.vercel.app';

const instance = axios.create({
  baseURL: 'https://server-mern-sell-all.vercel.app',
  withCredentials: true,
});

export default instance;
