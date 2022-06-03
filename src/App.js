import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import ListUser from './components/ListUser'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'

export default function App() {
  return (
    <div className='App'>
      <h1>Hello React</h1>
      <Router />
    </div>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>List User</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='user/create'>Create User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path='user/create' element={<CreateUser />} />
        <Route path='user/:id/edit' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}
