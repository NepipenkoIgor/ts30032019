import axios from 'axios';

export const BASE_URL: string = 'http://learn.javascript.ru/courses/groups/api';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
});