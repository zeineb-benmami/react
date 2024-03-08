import API from "../config/axiosConfig";


export const get = (id) => {
    id = id || '';
    return API.get(`events/${id}`)
}

export const add = (body) => {
    return API.post(`events`,body)
}

export const deleteEventAPI = (id) => {
    return API.delete(`events/${id}`)
}