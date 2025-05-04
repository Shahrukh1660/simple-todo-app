import axios from 'axios';
export const api = axios.create({ baseURL: 'http://<FRONTEND_SVC_IP>:80/api' });
