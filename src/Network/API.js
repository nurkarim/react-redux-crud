import axios from 'axios';

export default axios.create({
    baseURL: `https://b.connectsweb.com/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("connect_token")??""
    }
});