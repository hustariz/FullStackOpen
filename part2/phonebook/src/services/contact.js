import axios from 'axios'
const baseUrl = '/api/contacts'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newContact => {
  const request = axios.post(baseUrl, newContact)
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const updateContact = (id, updatedContact) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedContact)
  return request.then(response => response.data)
}


export default { getAll, create, deleteContact, updateContact }