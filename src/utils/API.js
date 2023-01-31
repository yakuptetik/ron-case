import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.68.53:8000/api/',
});

export default instance;