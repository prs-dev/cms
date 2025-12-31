import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
  const loggedIn = false
  return (
    <Router>
      <Routes>
        <Route path='/login' element={loggedIn ? <Homepage /> : <Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Layout />}>
          <Route path='/' element={loggedIn ? <Homepage /> : <Login />} />
          <Route path='/dashboard' element={loggedIn ? <Dashboard />: <Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App