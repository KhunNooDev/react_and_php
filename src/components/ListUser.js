import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListUser() {
  const api_url = process.env.REACT_APP_API_URL
  const [users, setUsers] = useState([])

  const getUsers = useCallback(() => {
    axios.get(`${api_url}/users/`).then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
  }, [api_url])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  //delete user
  const handleDelete = (id) => {
    axios.delete(`${api_url}/user/${id}/delete`).then((res) => {
      console.log(res.data)
      getUsers()
    })
  }
  return (
    <div>
      <h1>List User</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link
                  to={`user/${user.id}/edit`}
                  style={{ marginRight: '5px' }}
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
