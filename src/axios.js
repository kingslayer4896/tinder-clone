import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-devv.herokuapp.com',
});

export default instance;