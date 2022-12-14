import axios from 'axios'


const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
    .then(response => response.data)
}

const add = newPerson => {
    return axios.post(baseUrl, newPerson)
    .then(response => response.data)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson)
    .then(response => response.data)
}

export default { getAll, add, remove, update }