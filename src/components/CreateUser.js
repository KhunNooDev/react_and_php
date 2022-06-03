import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
  const api_url = process.env.REACT_APP_API_URL

  const navigate = useNavigate()
  const [inputs, setInputs] = useState({})
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${api_url}/user/save`, inputs).then((res) => {
      console.log(res)
      navigate('/')
    })
    console.log(inputs)
  }
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' onChange={handleChange} />
        <br />
        <label>Email: </label>
        <input type='text' name='email' onChange={handleChange} />
        <br />
        <label>Phone: </label>
        <input type='text' name='phone' onChange={handleChange} />
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}
