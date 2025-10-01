import axios from '../api/axios';

export const addShoppinCar = (product) => axios.post(`addItem`, product);
export const getProduct = () => axios.get(`getCar`);
export const deleteItem = (id) => axios.delete(`deleteItem/${id}`);
