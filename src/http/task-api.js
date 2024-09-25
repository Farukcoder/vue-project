import api from "@/http/api.js"

const resource = "/v1/tasks"

export const allTasks = () => api.get(resource)

export const createTask = task => api.post(resource, task)

export const updateTask = (id, task) => api.put(`${resource}/${id}`, task)

export const deleteTask = id => api.delete(`${resource}/${id}`)

export const completeTask = (id, task) => api.put(`${resource}/${id}/complete`, task)
