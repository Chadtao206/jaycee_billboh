import axios from "axios";

export const login=(user)=> axios.post('/auth/login', user)
export const signup = (user) => axios.post('/auth/signup', user)
export const getNews = (params) => axios.post('/api/news', params)