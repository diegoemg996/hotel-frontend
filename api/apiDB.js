import axios from 'axios';


const apiDB = axios.create({
    baseURL: 'http://localhost:4000/api',
});


export default apiDB;