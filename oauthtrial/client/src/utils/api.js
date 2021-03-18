import axios from 'axios';
const cors = require('cors');

let response = "";

 const API = {
    google: async function(){
        return response = await axios.get('/api/login/google', cors());
    }
}

export default API;