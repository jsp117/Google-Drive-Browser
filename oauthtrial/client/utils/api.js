import axios from 'axios';

const API = {
    login: function(){
        return axios.get('/api/login');
    }
}