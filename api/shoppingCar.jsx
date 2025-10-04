import instance from './axios';

export const addShoppinCar = (product) => instance.post(`addItem`, product);
export const getProduct = () => instance.get(`getCar`);
export const deleteItem = (id) => instance.delete(`deleteItem/${id}`);
