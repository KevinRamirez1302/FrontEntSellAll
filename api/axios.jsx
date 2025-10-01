import axios from 'axios';

const currentHostname = window.location.hostname;

const productionBaseURL = 'https://server-mern-sell-all.vercel.app';

const localBaseURL = 'http://localhost:3000/';

const baseURL =
  currentHostname === 'localhost' || currentHostname === '127.0.0.1'
    ? localBaseURL
    : productionBaseURL;

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default instance;
