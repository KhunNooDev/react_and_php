import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditUser() {
  const api_url = process.env.REACT_APP_API_URL
  const navigate = useNavigate()
  const [inputs, setInputs] = useState([])
  const { id } = useParams()

  const getUsers = useCallback(() => {
    axios.get(`${api_url}/users/${id}`).then((res) => {
      console.log(res.data)
      setInputs(res.data)
    })
  }, [api_url, id])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`${api_url}/user/${id}/edit`, inputs).then((res) => {
      console.log(res.data)
      navigate('/')
    })
    console.log(inputs)
  }
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={inputs.name}
          onChange={handleChange}
        />
        <br />
        <label>Email: </label>
        <input
          type='text'
          name='email'
          value={inputs.email}
          onChange={handleChange}
        />
        <br />
        <label>Phone: </label>
        <input
          type='text'
          name='phone'
          value={inputs.phone}
          onChange={handleChange}
        />
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}
