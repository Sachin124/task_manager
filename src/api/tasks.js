
import axiosInstance from './axios-interceptor';

export const getTasks = () => {
  return axiosInstance.get(`/tasks`);
};

export const createTask = (task) => {
  return axiosInstance.post(`/tasks`, task);
};

export const updateTask = (id, task) => {
  return axiosInstance.put(`/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return axiosInstance.delete(`/tasks/${id}`);
};
