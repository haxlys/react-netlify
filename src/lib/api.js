import axios from 'axios';

export const getTest = () => axios.get('https://heene.ga/.netlify/functions/test');
export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');