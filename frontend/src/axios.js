import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
