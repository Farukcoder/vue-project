import api from './api'

const resource = '/tasks'

export const allTasks = () => api.get(`${resource}`)

export const createTask = task => api.post(`${resource}`, task)

export const updateTask = (taskId, task) => api.put(`${resource}/${id}`, task)

