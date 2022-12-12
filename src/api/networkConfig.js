import axios from "axios";

// axios.defaults.baseURL = ' http://localhost:3000/json/'
// axios.defaults.baseURL = 'http://192.168.1.32/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 20000

export const networkConfig = {}