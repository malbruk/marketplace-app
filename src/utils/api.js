import { cache } from "react";
import axios from "axios";
import https from 'https'

const api = axios.create({
  baseURL: 'https://localhost:7228/api',
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

// axios.defaults.baseURL = 'https://localhost:7228/api';

const getCategories = cache(async () => {
  const response = await api.get("/Categories");
  return response.data;
});
const getPopularProducts = cache(async () => {
  const response = await api.get("/Products");
  return response.data;
});
const getTrendingProducts = cache(async () => {
  const response = await api.get("/Productsv");
  return response.data;
});
const getProducts = cache(async () => {
  const response = await api.get("/Products");
  return response.data;
});
const getServices = cache(async () => {
  const response = await api.get("/api/grocery-1/services");
  return response.data;
});
export default {
  getServices,
  getProducts,
  getPopularProducts,
  getTrendingProducts,
  getCategories
};