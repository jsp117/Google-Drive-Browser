import axios from 'axios';
let response = "";
 const API = {
    google: async function(){
        return response = await axios.get('/api/login/google');
    }
}

export default API;