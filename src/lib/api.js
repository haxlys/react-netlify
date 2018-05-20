import axios from 'axios';

export const getProjects = () => axios.get('https://heene.ga/.netlify/functions/project');
export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');